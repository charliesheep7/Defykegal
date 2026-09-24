/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Defy — Kegel Exercises for Men',
  author: 'Defy',
  authorSlug: 'defy-team',
  headerTitle: 'Defy',
  description:
    'Defy is a guided Kegel exercise app for men. Build a consistent pelvic floor routine with short daily workouts, habit challenges, and practical wellness resources.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.defykegel.com',
  // Single source of truth for the store link — every CTA imports this.
  appStoreUrl: 'https://apps.apple.com/app/defy-kegel-for-men/id6784505748',
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
