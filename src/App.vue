<script setup>
import HeaderContainer from "./components/HeaderContainer.vue"
import ImageMain from "./components/ImageMain.vue"
</script>

<template>

  <HeaderContainer />
  <main class="box">
    <ImageMain class="mb-20 m-m-0" />
    <ImageMain class="m-m-0 ml-m-20" />
  </main>
</template>

<style scoped lang="scss">
@import "./components/scss/variables.scss";

.box{
    background-color: $primary-color;
    box-shadow: 0 4px 10px rgba(0,0,0,.15);
    padding: 20px 0 30px;
}

.mb-20{
    margin-bottom: 20px;
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
   .ml-m-20{
    margin-left: 20px;
   } 
}
</style>
