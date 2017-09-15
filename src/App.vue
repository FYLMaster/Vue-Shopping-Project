<template>
  <div id="app">
    <headerindex></headerindex>
    <topindex></topindex>
    <!-- <homeindex></homeindex> -->
    <footerindex></footerindex>
  </div>
</template>

<script>
import headerindex from '@/components/home/header'
import topindex from '@/components/home/top'
import homeindex from '@/components/home/home'
import footerindex from '@/components/home/footer'
export default {
  name: 'app',
  components: {
    headerindex,
    topindex,
    homeindex,
    footerindex
  }
}
</script>

