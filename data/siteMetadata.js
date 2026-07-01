/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Defy — Kegel Exercises for Men',
  author: 'Defy',
  authorSlug: 'defy-team',
  headerTitle: 'Defy',
  description:
    'Defy is the #1 kegel exercise app for men. Strengthen your pelvic floor, improve erections, beat ED, and enhance sexual performance with guided daily workouts.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.defykegel.com',
  siteRepo: '',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/Apple/App_store_1024_1x.svg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  mastodon: '',
  email: '',
  github: '',
  x: '',
  facebook: '',
  youtube: '',
  linkedin: '',
  threads: '',
  instagram: '',
  tiktok: '',
  medium: '',
  bluesky: '',
  locale: 'en-US',
  stickyNav: false,
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
  },
  newsletter: {
    provider: '',
  },
  comments: {
    provider: '',
  },
  search: {
    provider: '',
  },
}

module.exports = siteMetadata
