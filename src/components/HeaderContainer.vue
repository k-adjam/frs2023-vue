<script setup>
// import SiteHeader from "./SiteHeader.vue"
import FButton from "./FButton.vue"
import FHamburger from "./FHamburger.vue"
import {ref} from "vue";
import { useBreakpoints } from "../composables/useBreakpoints";     

const menuToggled = ref('no');
const {isMobile} = useBreakpoints();

defineEmits(['showLogo']);

</script>

<template>
    <header class = "wrapper ">
        <h1 class="header">LOGO TEXT</h1>
        <nav class="nav__container"> 
            <button type="button" @click="menuToggled = 'yes'" title="menu" class="button__hamburger d-m-none">
                <label for="menu" class="pointer"> 
                  <FHamburger />
                </label>
            </button>
            <ul class="nav__menu toggle" :class="{ 'untoggle': menuToggled !== 'no'}" >
                <li class="mb-20" :class="{'d-m-none': menuToggled === 'no'}">
                  <button v-if="isMobile" type="button" @click="menuToggled = 'no'" class="pointer close-button">
                    <img alt="close icon"  src="./svg/closeIcon.svg" width="40" height="40" /></button>
                </li>
                <li class="order-1"><FButton :index="1" @click="$emit('showLogo')" class="menu__button pointer" /></li>
                <li><FButton :index="2" class="menu__button"/></li>
                <li><FButton :index="3" class="mb-20 mb-lg-115 menu__button" /></li>
            </ul>
        </nav>
  </header>
</template>

<style scoped lang="scss">
@import "./scss/variables.scss";

h1 {
  position: relative; 
}

.nav__menu{
  background-color: #dedede;
  position: absolute;
  z-index: 1;
  height: 100vh;
  right: 0;
  top: 0;
}
.button__hamburger{
  background-color: inherit;
  border: none;
}
.close-button{
  background-color: inherit;
  margin-top: 20px;
  margin-left: 20px;
  border: none;

}
.toggle {
    transform: translateX(100%);
    transition: transform 0.5s ease;
  }
nav .untoggle{
  &{
  transform: none;
  }
  .menu__button{
    padding: 12px 45px 12px;
    margin-left: 20px;
    margin-right: 20px;
  }
}
.mb-20{
    margin-bottom: 20px;
}
.pointer{
    cursor: pointer;
}

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

    .nav__menu{
      background-color: inherit;
      display: flex;
      justify-content: space-evenly;
      align-items: flex-end;
      position: relative;
      transform: none;
      height: auto;
    }
    .d-m-none{
      display: none;
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

    .header{
        writing-mode: vertical-rl;
        text-orientation: upright;
        word-spacing: -20px;
        letter-spacing: -2px;
        padding: 0 0 10px;
        margin-top: 10px;
    }
    .nav__menu{
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-end;
        margin-bottom: 20px;
    }

    .menu__button{
        &{
        margin: 0 30px;
        }
    }
    .order-1{
    order: 1;
    }
    .mb-lg-115{
    margin-bottom: 100px;
    }
}
</style>