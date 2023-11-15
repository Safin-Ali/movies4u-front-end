/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			gridTemplateColumns:{
				'14': 'repeat(14, minmax(0, 1fr))',
			},
			colors:{
				'nav-black':'#1A171E',
				'primary-bg-black':'#0D0D0F',
				'primary-red':'#eb1c24',
				'primary-text':'#dae6f1',
				'primary-grey':'#b0afb6'
			},
		},
	},
	plugins: [],
};