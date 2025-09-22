// src/components/Loading.jsx
import { useEffect, useState } from "react";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
/* eslint-enable no-unused-vars */

const Loading = ({ onComplete }) => {
    const [step, setStep] = useState("logo"); // "logo" → "welcome"
    const [exitLoader, setExitLoader] = useState(false);

    useEffect(() => {
        // Show logo + balls first (2s)
        const logoTimer = setTimeout(() => setStep("welcome"), 2000);

        // Then show welcome text (2s)
        const welcomeTimer = setTimeout(() => {
            setExitLoader(true); // trigger fade out of loader
            setTimeout(() => onComplete(), 1000); // wait for fade-out before switching
        }, 4000);

        return () => {
            clearTimeout(logoTimer);
            clearTimeout(welcomeTimer);
        };
    }, [onComplete]);

    return (
        <AnimatePresence>
            {!exitLoader && (
                <motion.div
                    className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 text-white"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <AnimatePresence mode="wait">
                        {step === "logo" && (
                            <motion.div
                                key="logo"
                                className="flex flex-col items-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                {/* Logo */}
                                <motion.img
                                    src="/logo.png"
                                    alt="Loading Logo"
                                    className="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                />

                                {/* Bouncing dots */}
                                <div className="mt-4 sm:mt-6 flex space-x-2 sm:space-x-3">
                                    {["#FF0000", "#FFFFFF", "#0000FF"].map((color, i) => (
                                        <motion.div
                                            key={i}
                                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full"
                                            style={{ backgroundColor: color }}
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{
                                                duration: 0.6,
                                                repeat: Infinity,
                                                delay: i * 0.2,
                                            }}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === "welcome" && (
                            <motion.h1
                                key="welcome"
                                className="text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-4 sm:px-6 md:px-8 max-w-6xl mx-auto leading-tight"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                            >
                                Welcome to the Pixel Junkie Creative Studio!
                            </motion.h1>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loading;
