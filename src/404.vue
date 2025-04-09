<script lang="ts" setup>
const a = '<div>404</div>'
</script>

<template>
  <div :key="2" :class="a" v-html="a"></div>
</template>

<style lang="scss" scoped></style>
