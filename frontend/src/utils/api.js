// Base API configuration with fallback options
const getApiBaseUrl = () => {
  // For development
  if (process.env.NODE_ENV !== 'production') {
    return 'http://localhost:3001';
  }
  
  // For production - try multiple endpoints
  const possibleEndpoints = [
    'https://pixeljunkiestudio.in/api',
    'https://pixeljunkiestudio.in:10000',
    'http://pixeljunkiestudio.in/api',
    'http://pixeljunkiestudio.in:10000'
  ];
  
  return possibleEndpoints[0]; // Start with the first one
};

const API_BASE_URL = getApiBaseUrl();

// List of possible API endpoints to try in production
const getApiEndpoints = () => {
  const baseDomain = 'pixeljunkiestudio.in';
  return [
    `https://${baseDomain}/api`,
    `https://${baseDomain}:10000`,
    `http://${baseDomain}/api`,
    `http://${baseDomain}:10000`,
    'http://localhost:3001' // Fallback for development
  ];
};

// Helper function to try a single endpoint
const tryEndpoint = async (baseUrl, endpoint, options) => {
  const url = `${baseUrl}${endpoint}`;
  console.log('Trying endpoint:', url);
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Request to ${url} failed:`, error.message);
    throw error; // Re-throw to be caught by the retry mechanism
  }
};

// Main API request function with retry logic
const apiRequest = async (endpoint, options = {}) => {
  if (process.env.NODE_ENV !== 'production') {
    // In development, just use the development server
    return tryEndpoint('http://localhost:3001', endpoint, options);
  }

  const endpoints = getApiEndpoints();
  let lastError = null;

  // Try each endpoint until one succeeds
  for (const baseUrl of endpoints) {
    try {
      return await tryEndpoint(baseUrl, endpoint, options);
    } catch (error) {
      lastError = error;
      console.warn(`Attempt failed for ${baseUrl}`, error.message);
      // Continue to the next endpoint
    }
  }

  // If we get here, all endpoints failed
  console.error('All API endpoints failed:', lastError);
  throw new Error('Could not connect to the server. Please try again later.');
};

// API functions
export const api = {
  // Health check
  healthCheck: () => apiRequest('/health'),

  // Services
  getServices: () => apiRequest('/api/services'),

  // Projects/Portfolio
  getProjects: () => apiRequest('/api/projects'),

  // Contact form
  submitContact: (contactData) => 
    apiRequest('/api/contact', {
      method: 'POST',
      body: JSON.stringify(contactData),
    }),

  // Client Application form
  submitClientApplication: (applicationData) => 
    apiRequest('/api/client-application', {
      method: 'POST',
      body: JSON.stringify(applicationData),
    }),
};

// Export individual functions for convenience
export const { healthCheck, getServices, getProjects, submitContact, submitClientApplication } = api;

export default api;