<script setup>
import { PanelRightClose, PanelLeftClose } from 'lucide-vue-next'
import { NTooltip } from 'naive-ui'
</script>

<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <PanelRightClose
        :size="20"
        class="cursor-pointer hover:text-orange-500"
      />
    </template>
    布局
  </NTooltip>
</template>
