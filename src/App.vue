<script setup>
import HeaderContainer from "./components/HeaderContainer.vue"
import LogoAds from "./components/LogoAds.vue"
import MainContainer from "./components/MainContainer.vue"
import {ref, onMounted, onUnmounted} from 'vue';

const screenWidth = ref(screen.innerWidth)
const windowWidth = ref(null);
// const desktop = computed(() => screenWidth.value >1280); 
const visibleAd= ref('hidden');

window.addEventListener('resize', () => {
  screenWidth.value = window.innerWidth;
});

const checkWidth = () => {
    windowWidth.value = window.innerWidth;
    if (windowWidth.value <= 1280) {
      visibleAd.value =  'hidden';
    } 
    };
  
  onMounted(() => {
    window.addEventListener('resize', checkWidth);
    checkWidth();
  });

  onUnmounted(() => {
  window.removeEventListener('resize', checkWidth);
  });

const changeVisibility = () => {
  if (visibleAd.value === 'hidden') {
    visibleAd.value = 'visible';
  } else {
    visibleAd.value = 'hidden';
  }
};

</script>

<template>
  <HeaderContainer @show-logo="changeVisibility"/>
  <MainContainer>
    <LogoAds :style="{ visibility: visibleAd }"  />
  </MainContainer>
</template>

