module.exports = {
  siteMetadata: {
    title: `Kamran Ali`,
    description: `An avid Blogger, Quick Learner, and Coder at heart having a strong background in designing and delivering responsive, elastic and resilient systems based on Microservices using Java and AWS Technologies. Passionate about diving into Latest Technologies and Problem Solving`,
    author: `Kamran Ali`,
    headline: `Hi, I'm Kamran Ali, Principal Engineer @Atlassian`,
    focusArea: `I Help Engineers Design / Build Distributed Systems and Excel in Interviews / Industry projects with Experience and Resources`,
    twitterId: `@aTechGuide`,
    linkedInId: `aTechGuide`,
    siteUrl: `https://kamranali.in`,
    keywords: [`Technology Blog`],
    email: `admin@atech.guide`,
    social: [
      'https://www.facebook.com/aTechGuide/'
    ],
    contactSupport: 'https://www.facebook.com/aTechGuide/',
    bingId: '',
    menuLinks: [{name: 'Projects', link: '/page/1'}, {name: 'Resume', link: 'https://docs.google.com/document/d/17ANlKXIhwGBoSyMxsALduuWv6itjB1K__esdky08VcI/'}, {name: 'Blog', link: 'http://atech.guide'}],
  },
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-starter",
      options: {
        trackingId: "UA-27634418-6",
        projectsPath: "projects",
        imagesPath: "images",
        projectsPerPage: "12"
      },
    },
    {
      resolve: `gatsby-plugin-manifest`, //<- Creates manifest file
      options: {
        name: "Kamran Ali Portfolio",
        short_name: "portfolio",
        description: "Kamran Ali Portfolio and Projects",
        start_url: "/",
        background_color: "#455a64",
        theme_color: "#455a64",
        display: "standalone",
        icon: "images/icon.png",
      },
    },
    `gatsby-plugin-offline`, //<- Adds service worker; Add after gatsby-plugin-manifest
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            'X-Frame-Options: DENY',
            'X-XSS-Protection: 1; mode=block',
            'X-Content-Type-Options: nosniff',
            'Referrer-Policy: no-referrer-when-downgrade'
          ]
        }
      }
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        mergeScriptHashes: false,
        mergeStyleHashes: false, 
        mergeDefaultDirectives: true,
        directives: {
          "default-src": "'self' marketingplatform.google.com/about/analytics/ www.google-analytics.com www.google.com/analytics/",
          "script-src": "'self' www.google-analytics.com 'unsafe-inline'",
          "style-src": "'self' 'unsafe-inline'",
          "img-src": "'self' data: www.google-analytics.com"
        }
      }
    }
  ]
}
