module.exports = {
  siteMetadata: {
    title: `Akram Khalid Portfolio`,
    description: `A pretty cool portfolio site using React and GSAP.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    `gatsby-plugin-styled-components`,
    {
          resolve: "gatsby-plugin-transition-link",
          options: {
              layout: require.resolve(`./src/components/layout.js`)
            }
       },
       {
         resolve: 'gatsby-plugin-web-font-loader',
         options: {
           custom: {
             families: ['Circular Std Black', 'Circular Std Book'],
             urls: ['fonts.css']
           }
         }
       },

       {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-134045744-1",
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Enables Google Optimize Experiment ID
        sampleRate: 5,
        siteSpeedSampleRate: 10,
      }
    },

  ],
}
