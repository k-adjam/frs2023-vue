<script setup>
import FButton from './FButton.vue'
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
    <h1 >{{ msg }}</h1>
    <nav> 
      <ul class="block">
        <li><FButton :index="1" /></li>
        <li><FButton :index="2" /></li>
        <li><FButton :index="3" class="mb-20" /></li>
      </ul>
    </nav>
</template>

<style scoped lang="scss">
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
