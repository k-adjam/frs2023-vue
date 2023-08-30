<script setup>
import ImageMain from "./ImageMain.vue"
import FForm from "./FForm.vue"
</script>

<template>
    <main class="box">
      <div class="box__images">
        <ImageMain class="mb-20 m-m-0" />
        <ImageMain class="m-m-0 ml-m-20 md-ml-0" />
        <slot></slot>
      </div>
      <div class="box__form">
        <FForm />
      </div>
    </main>
</template>

<style scoped lang="scss">
@import "./scss/variables.scss";
.box{
    background-color: $primary-color;
    box-shadow: 0 4px 10px rgba(0,0,0,.15);
    padding: 20px 0 30px;
}
.box__images{
    margin-bottom: 2em;
}

.mb-20{
    margin-bottom: 20px;
}
.box__form{
  display: flex;
  justify-content: center;
}

@media screen and (min-width: 768px) {
  .box{
    width: 58.5%;
    // display: flex;
    // justify-content: center;
    margin: 0 auto;
  }
  .box__images{
  //   width: 58.5%;
    display: flex;
    justify-content: center;
    margin: 0 auto 2em;
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