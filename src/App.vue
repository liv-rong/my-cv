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
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <router-view></router-view>
  </n-config-provider>
</template>

<style scoped></style>
