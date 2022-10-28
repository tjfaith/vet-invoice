<template>
  <Header/>
  <RouterView/>
  <Footer/>
</template>

<script setup>
import Header from './components/AppHeader.vue'
import Footer from './components/AppFooter.vue'
import { RouterView } from 'vue-router';
</script>

<style lang="scss" scoped>

</style>