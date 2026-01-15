// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: '#064e3b', // Hijau Hutan (Forest Green) sesuai logo
          dark: '#022c22',
        },
        accent: {
          DEFAULT: '#10b981', // Hijau Cerah (Emerald) untuk tombol/ikon
          light: '#d1fae5',
        },
        secondary: '#4b5563', // Abu-abu untuk teks deskripsi
      },
    },
  },
}