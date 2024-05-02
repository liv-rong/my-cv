<script setup lang="ts">
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#fb923c',
    primaryColorHover: '#f97316'
  },
  Button: {
    textColor: '#fb923c',
    hoverTextColor: '#f97316',
    hoverColor: '#f97316',
    borderColor: '#fb923c',
    primaryColor: '#fb923c',
    primaryColorHover: '#f97316'
  },
  Select: {
    peers: {
      InternalSelection: {
        textColor: '#FF0000'
      }
    }
  }
  // ...
}

// useHead({
//   title: t('head.title'),
//   meta: [
//     { name: 'keywords', content: t('head.keywords') },
//     { name: 'description', content: t('head.desc') },
//     { property: 'og:title', content: t('head.title') },
//     { property: 'og:description', content: t('head.desc') },
//     { property: 'og:locale', content: locale },
//     {
//       name: 'theme-color',
//       content: () => (colorMode?.preference === 'dark' ? '#475569' : '#f3f4f6')
//     }
//   ],
//   link: [
//     {
//       rel: 'icon',
//       type: 'image/svg+xml',
//       href: () => (preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg')
//     }
//   ],
//   script: [
//     {
//       src: 'https://code.iconify.design/2/2.2.1/iconify.min.js',
//       type: 'module',
//       tagPosition: 'bodyClose'
//     }
//   ]
// })
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <router-view></router-view>
  </n-config-provider>
</template>

<style scoped></style>
