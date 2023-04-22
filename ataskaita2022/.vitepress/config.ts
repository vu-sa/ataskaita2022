import { defineConfig } from 'vitepress'
import { sharedConfig } from './config/shared'
import ltConfig from './config/lt'
import enConfig from './config/en'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "2021-2022 ataskaita",
  description: "VU Studentų atstovybės metų veiklos ataskaita už 2022-2023 m. kadenciją.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    ...sharedConfig
  },
  locales: {
    root: {
      label: 'Lietuvių',
      lang: 'lt',
      ...ltConfig

    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      ...enConfig
    }
  }
})
