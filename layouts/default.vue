<template>
  <div>
    <the-header @sideNavToggle="displaySideNav = !displaySideNav" />
    <the-sidenav :show="displaySideNav" @close="displaySideNav = false" />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
import TheSidenav from '@/components/Navigation/TheSideNav'

export default {
  components: { TheHeader, TheSidenav },
  // middleware: 'log',
  data() {
    return {
      displaySideNav: false,
    }
  },
}
</script>

<style>
html {
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
}
</style>