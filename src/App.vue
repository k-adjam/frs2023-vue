<script setup>
import HeaderContainer from "./components/HeaderContainer.vue"
//import ImageMain from "./components/ImageMain.vue"
import LogoAds from "./components/LogoAds.vue"
import MainContainer from "./components/MainContainer.vue"
import {computed, ref} from 'vue';

const screenWidth = ref(screen.innerWidth)

const desktop = computed(() => screenWidth.value >1280); 

window.addEventListener('resize', () => {
  screenWidth.value = window.innerWidth;
});
</script>

<template>
  <HeaderContainer />
  <MainContainer>
    <LogoAds v-if="desktop" />
  </MainContainer>
</template>