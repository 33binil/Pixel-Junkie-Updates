// Base API configuration - Uses Vite environment variable for API URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// Helper function to make API requests
const apiRequest = async (endpoint, options = {}) => {
  if (!endpoint.startsWith('/')) {
    endpoint = `/${endpoint}`;
  }
  
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    credentials: 'include', // Important for cookies/auth
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    // Handle non-200 responses
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Request failed:', error);
    throw error;
  }
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