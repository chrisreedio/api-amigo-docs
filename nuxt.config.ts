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
  head: {
    title: 'API Amigo - Docs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Monitor your integration's quotas and errors in your Filament panel!",
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'API Amigo - Docs',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://api-amigo.reedtech.io/api-amigo-logo.webp',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
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
