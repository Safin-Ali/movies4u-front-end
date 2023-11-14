/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors:{
				'nav-black':'#1A171E',
				'primary-bg-black':'#0D0D0F',
				'primary-red':'#eb1c24',
				'primary-text':'#d6d6d6',
				'primary-grey':'#b0afb6'
			}
		},
	},
	plugins: [],
};