<script setup>
import SiteHeader from "./SiteHeader.vue"
</script>

<template>
    <header class = "bg-gray wrapper header__box">
      <SiteHeader msg="LOGO TEXT" />
  </header>
</template>

<style scoped lang="scss">
@import "./scss/variables.scss";
.wrapper{
    color: $primary-color;
    padding: 25px 0 9px 10px;
    line-height: 1.5;
    font-size: 36px;
}
.bg-gray{
    background-color: $secondary-color;
}

@media screen and (min-width: 768px) {
    .header__box{
        width: 70%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: {
            top: 5px;
            bottom: 0;
        }
    }    
}
</style>