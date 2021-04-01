const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ["./templates/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        content: ["Helvetica", ...defaultTheme.fontFamily.serif],
        "nav-links": ["Lato", ...defaultTheme.fontFamily.serif],
        verb: ["Jetbrains Mono", ...defaultTheme.fontFamily.mono],
        header: ["Overpass Mono", ...defaultTheme.fontFamily.mono]
      },
      spacing: {
        "2-screen-h": "200vh",
        "2-screen-w": "200vw",
        "screen-h": "100vh",
        "screen-w": "100vw",
        "1/2-screen-h": "50vh",
        "1/2-screen-w": "50vw",
        "1/4-screen-h": "25vh",
        "1/4-screen-w": "25vw"
      },
      colors: {
        "primary-m-90": "#FAF6FB",
        "primary-m-80": "#F6EDF6",
        "primary-m-70": "#F1E5F2",
        "primary-m-60": "#ECDCED",
        "primary-m-50": "#E8D3E9",
        "primary-m-40": "#E3CAE5",
        "primary-m-30": "#DEC1E0",
        "primary-m-20": "#D9B9DC",
        "primary-m-10": "#D5B0D7",
        primary: "#D0A7D3",
        "primary-p-10": "#BB96BE",
        "primary-p-20": "#A686A9",
        "primary-p-30": "#927594",
        "primary-p-40": "#7D647F",
        "primary-p-50": "#68546A",
        "primary-p-60": "#534354",
        "primary-p-70": "#3E323F",
        "primary-p-80": "#2A212A",
        "primary-p-90": "#151115",
        "secondary-m-90": "#FFFBF3",
        "secondary-m-80": "#FFF7E7",
        "secondary-m-70": "#FFF3DC",
        "secondary-m-60": "#FFEFD0",
        "secondary-m-50": "#FFEBC4",
        "secondary-m-40": "#FFE7B8",
        "secondary-m-30": "#FFE3AC",
        "secondary-m-20": "#FFDFA1",
        "secondary-m-10": "#FFDB95",
        secondary: "#FFD789",
        "secondary-p-10": "#E6C27B",
        "secondary-p-20": "#CCAC6E",
        "secondary-p-30": "#B39760",
        "secondary-p-40": "#998152",
        "secondary-p-50": "#806C45",
        "secondary-p-60": "#665637",
        "secondary-p-70": "#4C4029",
        "secondary-p-80": "#332B1B",
        "secondary-p-90": "#19150E"
      }
    }
  },
  variants: {},
  plugins: []
};