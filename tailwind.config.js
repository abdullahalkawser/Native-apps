module.exports = {
  content: [
    "./app.{js,jsx,ts,tsx}",                 // Include files in the app directory
    "./components/**/*.{js,jsx,ts,tsx}",      // Include all files in the components directory recursively
    "./src/**/*.{js,jsx,ts,tsx}",             // Include all files in the src directory recursively
  ],
  presets: [require("nativewind/preset")],    // Use NativeWind preset for React Native Tailwind
  theme: {
    extend: {},
  },
  plugins: [],
};
