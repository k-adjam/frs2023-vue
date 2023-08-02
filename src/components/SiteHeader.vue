<script setup>
import ButtonRound from './ButtonRound.vue'
defineProps({
  msg: {
    type: String,
    required: true
  }
})

</script>

<template>
    <h1 >{{ msg }}</h1>
    <nav class="block"> 
      <ButtonRound index = 1 />
      <ButtonRound index = 2 />
      <ButtonRound index = 3 class="mb-20" />
    </nav>
</template>

<style scoped>
h1 {
  position: relative; 
}
.block{
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
}
.mb-20{
    margin-bottom: 20px;
}
</style>
