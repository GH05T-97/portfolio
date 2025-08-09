/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  './pages/**/*.{js,ts,jsx,tsx,mdx}',
	  './components/**/*.{js,ts,jsx,tsx,mdx}',
	  './app/**/*.{js,ts,jsx,tsx,mdx}',
	  './src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
	  extend: {},
	},
	plugins: [],
	safelist: [
	  // Add gradient classes to safelist
	  'bg-gradient-to-br',
	  'bg-gradient-to-r',
	  'from-slate-50',
	  'via-blue-50',
	  'to-indigo-50',
	  'from-blue-600',
	  'to-indigo-600',
	  'from-slate-900',
	  'via-blue-900',
	  'to-indigo-900',
	  // Add backdrop blur
	  'backdrop-blur-md',
	  'backdrop-blur-sm',
	]
  }