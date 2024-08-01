/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%',
        '3': '2 2 0%'
      },
      colors: {
        'pale': '#5F5F68',
        'custom-lightgreen': '#02FF83',
        'custom-darkblue': '#000D19',
        'custom-super-lightgreen': '#64D59F',
        "custom-error": '#CD4218'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
