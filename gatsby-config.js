module.exports = {
  plugins: [
    {
      plugins: [`gatsby-plugin-netlify-cms`],
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    }
  ]
};
