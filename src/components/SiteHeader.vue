<script setup>
import FButton from "./FButton.vue"
import { ref } from "vue";
import FHamburger from "./FHamburger.vue"
const menuToggled = ref('no');

const showLogo = ref(true)

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
    <h1 class="header">{{ msg }}</h1>
    <nav class="nav__container"> 
      <!-- <input type="checkbox" class="checkbox d-m-none" id="menu"/> -->
      <button type="button" @click="menuToggled = 'yes'" title="menu" class="button__hamburger d-m-none">
        <label for="menu" class="pointer"> 
          <FHamburger />
        </label>
      </button>
      <ul  class="nav__menu toggle" :class="{ 'untoggle': menuToggled !== 'no' }" >
        <li class="mb-20" :class="{'d-m-none': menuToggled === 'no'}">
          <button type="button" @click="menuToggled = 'no'" class="pointer close-button">
            <img alt="close icon"  src="./svg/closeIcon.svg" width="40" height="40" /></button>
        </li>
        <li class="order-1"><FButton :index="1" @click="showLogo" class="menu__button"/></li>
        <li><FButton :index="2" class="menu__button"/></li>
        <li><FButton :index="3" class="mb-20 mb-lg-115 menu__button" /></li>
      </ul>
    </nav>
</template>

<style scoped lang="scss">
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

@media (min-width: 768px) {
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
@media (min-width: 1280px){
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
