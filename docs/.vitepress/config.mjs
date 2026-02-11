import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Test Project，这里是config>title",
  description: "A VitePress Site Test，这里是config>description",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/sky-erickson-gpFIw1CiTBs-unsplash.jpg',
      dark: '/9655879a31d5770a935c8a75d7e1cb7f.jpg',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples/', activeMatch: '/examples/' },
      { text: '挠脚心视频', link: '/video' },
      { text: '挠脚心分类', items: [
        { text: 'FF', link: '/routertest/router1' },
        { text: 'MM', link: '/MM' },
        { text: 'FM', link: '/FM' },
        { text: 'MF', link: '/MF' }
      ]}
    ],

    sidebar: [
      {
        text: 'Examples，这里是config>sidebar',
        items: [
          { text: 'Markdown Examples', link: '/examples/markdown-examples' },
          {text: 'Runtime API Examples', link: '/examples/api-examples' },
          { text: 'video', link: '/video' }
        ]
      },
      {
        text: '挠脚心专区',
        items: [
          { text: '挠脚心视频', link: '/video' },
          { text: '挠脚心图片', link: '/image' },
          { text: '挠脚心分类', link: '/classification' },
          { text: '挠脚心分类2', items: [
            { text: 'FF', link: '/routertest/router1' },
            { text: 'MM', link: '/MM' },
            { text: 'FM', link: '/FM' },
            { text: 'MF', link: '/MF' },
            { text: 'MF', items: [
              { text: 'MF-1', link: '/MF-1' },
              { text: 'MF-2', link: '/MF-2' }
            ] }
          ]}
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      copyright: "Copyright ©️ 2023-present My Name"
    }
  }
})
