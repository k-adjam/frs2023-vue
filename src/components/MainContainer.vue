<script setup>
import ImageMain from "./ImageMain.vue"
</script>

<template>
    <main class="box">
        <ImageMain class="mb-20 m-m-0" />
        <ImageMain class="m-m-0 ml-m-20 md-ml-0" />
        <slot></slot>
        <!-- <LogoAds v-if="desktop" class="d-none" :class="{ 'd-block': showLogo }"  /> -->
  </main>
</template>

<style scoped lang="scss">
@import "./scss/variables.scss";
.box{
    background-color: $primary-color;
    box-shadow: 0 4px 10px rgba(0,0,0,.15);
    padding: 20px 0 30px;
}
.mb-20{
    margin-bottom: 20px;
}
.d-block{
  display: block;
}
.d-none{
  display: none;
}
@media screen and (min-width: 768px) {
  .box{
    width: 58.5%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
   .m-m-0{
    margin: 0;
   }
   .md-ml-0{
    margin-left: 0;
   }
   .ml-m-20{
    margin-left: 20px;
   } 
}
@media screen and (min-width: 1280px){
  .box{
    width: 43.7%;
    margin: 20px 0 115px 200px;
    padding-bottom: 275px;
    padding-top: 20px;
    }
}
</style>