<script setup>
import SiteHeader from "./SiteHeader.vue"
</script>

<template>
    <header class = "wrapper ">
      <SiteHeader msg="LOGO TEXT" />
  </header>
</template>

<style scoped lang="scss">
@import "./scss/variables.scss";
.wrapper{
    color: $primary-color;
    background-color: $secondary-color;
    display: flex;
    justify-content: space-between;
    padding: 25px 0 9px 10px;
    line-height: 1.5;
    font-size: 36px;
}

@media screen and (min-width: 768px) {
    .wrapper{
        width: 70%;
        margin: auto;
        align-items: center;
        padding: {
            top: 5px;
            bottom: 0;
        }
    }    
}
@media screen and (min-width: 1280px){
    .wrapper{
        width: auto;
        flex-direction: column;
        justify-content: start;
        margin: 0;
        position: fixed;
        top: 0;
        height: 100vh;
        padding-left: 0;
    }
}
</style>