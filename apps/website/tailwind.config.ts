// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],

//   theme: {
//     extend: {
//       colors: {
//         akrish: {
//           green: "#176b5b",
//           brown: "#9a5b18",
//           cream: "#f7f7f4",
//           border: "#e4e2da",
//           dark: "#17352f",
//         },
//       },

//       fontFamily: {
//         sans: [
//           "Inter",
//           "ui-sans-serif",
//           "system-ui",
//           "sans-serif",
//         ],
//       },

//       boxShadow: {
//         card: "0 2px 10px rgba(0, 0, 0, 0.05)",
//         soft: "0 4px 20px rgba(0, 0, 0, 0.08)",
//         product: "0 8px 30px rgba(0, 0, 0, 0.10)",
//       },

//       borderRadius: {
//         card: "12px",
//       },

//       animation: {
//         "fade-in": "fadeIn 0.3s ease-out",
//         "slide-up": "slideUp 0.3s ease-out",
//       },

//       keyframes: {
//         fadeIn: {
//           from: {
//             opacity: "0",
//           },
//           to: {
//             opacity: "1",
//           },
//         },

//         slideUp: {
//           from: {
//             opacity: "0",
//             transform: "translateY(10px)",
//           },
//           to: {
//             opacity: "1",
//             transform: "translateY(0)",
//           },
//         },
//       },
//     },
//   },

//   plugins: [],
// };

// export default config;

// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        akrish: {
          green: "#176b5b",
          brown: "#9a5b18",
          cream: "#f7f7f4",
          border: "#e4e2da",
          dark: "#17352f",
        },
      },
    },
  },
  plugins: [],
};

export default config;
