const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project 
  content: [
    './dist/**/*.html',
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

console.log(process.env.NODE_ENV)

module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ],
}