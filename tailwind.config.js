/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00f5ff',
        secondary: '#7c3aed',
        accent: '#f97316',
        dark: '#030712',
        'dark-800': '#0a0f1e',
        'dark-700': '#0f172a',
        'dark-600': '#1e293b',
        'neon-cyan': '#00f5ff',
        'neon-purple': '#a855f7',
        'neon-green': '#00ff88',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Orbitron', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 2s infinite',
        'scan': 'scan 3s linear infinite',
        'border-flow': 'borderFlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(2px, -2px)' },
          '60%': { transform: 'translate(-1px, 1px)' },
          '80%': { transform: 'translate(1px, -1px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        borderFlow: {
          '0%, 100%': { borderColor: '#00f5ff' },
          '50%': { borderColor: '#a855f7' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 245, 255, 0.5)',
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.5)',
        'neon-green': '0 0 20px rgba(0, 255, 136, 0.5)',
        'inner-glow': 'inset 0 0 30px rgba(0, 245, 255, 0.1)',
      },
    },
  },
  plugins: [],
}
