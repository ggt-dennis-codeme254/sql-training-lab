import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SQL Power Hour",
  description: "SQL Power Hour",
  themeConfig: {

    sidebar: [
      {
        items: [
          { text: 'Welcome to SQL Power Hour', link: '/' },
          { text: 'Introducing Technova', link: '/introducing-technova' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
