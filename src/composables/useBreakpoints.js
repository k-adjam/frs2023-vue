import {ref, onMounted, onUnmounted} from 'vue'

export function useBreakpoints() {
    const isMobile = ref(true)
    const isDesktop = ref(true)
    const visibleAd = ref(false);

    const checkWidth = function(){
        isMobile.value = window.innerWidth < 768
        isDesktop.value = window.innerWidth > 1280
        if (!isDesktop.value){
            visibleAd.value = false
        }
    }

    onMounted(() => {
        window.addEventListener('resize', checkWidth);
        checkWidth();
    });
      
    onUnmounted(() => {
      window.removeEventListener('resize', checkWidth);
    });
    return {isMobile, isDesktop, visibleAd}
}