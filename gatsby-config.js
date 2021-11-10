module.exports = {
  pathPrefix: "/portfolio",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Portfolio",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto monow`,
          `source sans pro\:300,400w  `, //
        ],
        display: "swap",
      },
    },
  ],
};
