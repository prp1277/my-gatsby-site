module.exports = {
  siteTitle: "Pat-Facts", // Site title.
  siteTitleShort: "Pat-Facts", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Patrick Powell - Financial Analyst", // Alternative site title for SEO.
  siteURL: "https://prp1277.github.io", // Domain of your website without pathPrefix.
  siteDescription: "My experiment in website development", // Website description used for RSS feeds/meta description tag.
  googleAnalyticsID: "UA-115800548-1", // GA tracking ID.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Patrick Powell", // Username to display in the author segment.
  userTwitter: "PatP0w", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Kansas City, MO", // User location to display in the author segment.
  userAvatar: "https://prp1277.github.io/img/LinkedIn.jpg", // User avatar to display in the author segment.
  userDescription: "Financial Analyst and Wannabe Web-Developer", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/prp1277/",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/patp0w",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:prp1277@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. Patrick Powell", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
