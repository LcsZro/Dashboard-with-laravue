const defaultTheme = require('tailwindcss/defaultTheme');
import forms from '@tailwindcss/forms';
const colors = require("tailwindcss/colors");
const siraUi = require('@sira-ui/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
      fontFamily:{
        primary: "Playfair Display",
        body: "Inter"
      },
      container:{
        padding: {
            DEFAULT: "1rem",
            lg: "3rem"
        }
      },
      extend:{
        colors:{
            "light-primary": "#FAF1E6",
            "light-secundary": "#FDFAE6",
            "light-tail-100": "#A9DED2",
            "light-tail-500": "#54BAB9",

            "dark-primary": "#050402",
            "dark-secundary": "#1C1D24",
            "dark-tail-100": "#07567D",
            "dark-tail-500": "#292D42",

            accent:{
                DEFAULT: "#ac6b34",
                hover: "#925a2b" 
            },
            paragraph: "#878e99",
            blue: colors.blue,
            indigo: colors.indigo,
            green: colors.green,
            red: colors.red
        }
      }
    },
    plugins: [
        forms,
        siraUi,
    ],
};
