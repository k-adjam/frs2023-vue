<script setup>
import SiteHeader from './components/SiteHeader.vue'
import ImageMain from './components/ImageMain.vue'
</script>

<template>
  <header class = "bg-gray">
    <div class="wrapper">
      <SiteHeader msg="LOGO TEXT" />
    </div>
  </header>

  <main class="box">
    <ImageMain class="mb-20" />
    <ImageMain />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  font-size: 36px;
}
.wrapper{
    color: #f8f8f8;
    font-weight: 100;
    padding: 25px 0 9px 10px;
}
.box{
    background-color: #f8f8f8;
    box-shadow: 0 4px 10px rgba(0,0,0,.15);
    padding: 20px 0 30px;
}
.bg-gray{
    background-color: 	#555;
}
.mb-20{
    margin-bottom: 20px;
}
</style>
