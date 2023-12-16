// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxthq/studio',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    'nuxt-og-image',
  ],
  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter((c) =>
        ['UButton'].includes(c.pascalName)
      )

      globals.forEach((c) => (c.global = true))
    },
  },
  ui: {
    icons: ['heroicons', 'simple-icons'],
    // icons: ['heroicons', 'simple-icons', 'fa6-solid'],
    // icons: ['fa6-solid'],
    // icons: 'all',
  },
  head() {
    return {
      title: this.pageTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Track Quotas, Catch Errors - Simplified API Oversight',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'API Amigo - Documentation',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.pageUrl, //'https://api-amigo.chrisreed.io',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "Monitor your integration's quotas and errors in your Filament panel!",
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/api-amigo-logo.webp',
        },

        // twitter card
        // {
        //   hid: 'twitter:title',
        //   name: 'twitter:title',
        //   content: this.pageTitle,
        // },
        // { hid: 'twitter:url', name: 'twitter:url', content: this.pageUrl },
        // {
        //   hid: 'twitter:description',
        //   name: 'twitter:description',
        //   content: this.description,
        // },
        // {
        //   hid: 'twitter:image',
        //   name: 'twitter:image',
        //   content: process.env.baseUrl + ogImage,
        // },
      ],
      link: [{ hid: 'canonical', rel: 'canonical', href: this.pageUrl }],
    }
  },
  // Fonts
  fontMetrics: {
    fonts: ['DM Sans'],
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 600, 700],
    },
  },
  routeRules: {
    '/api/search.json': { prerender: true },
  },
  // Devtools / Typescript
  devtools: { enabled: true },
  typescript: { strict: false },
})
