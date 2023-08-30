<script setup>
import HeaderContainer from "./components/HeaderContainer.vue"
import LogoAds from "./components/LogoAds.vue"
import MainContainer from "./components/MainContainer.vue"
// import FFrom from "./components/FForm.vue"
import { useBreakpoints } from "./composables/useBreakpoints"; 

const {isDesktop} = useBreakpoints();
const {visibleAd} = useBreakpoints();

</script>

<template>
  <HeaderContainer @show-logo="visibleAd = !visibleAd"/>
  <MainContainer>
    <LogoAds v-if="isDesktop" :style="{ visibility: visibleAd ? 'visible' : 'hidden'}"  />
  </MainContainer>
</template>

<style scoped lang="scss">
</style>

