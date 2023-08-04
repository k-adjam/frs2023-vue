<script setup>
defineProps({
    index: Number,
});
</script>

<template>
    <button type="button" class="block__button mr-m-20"> button {{ index }} </button>
</template>

<style scoped lang="scss">
@import "./scss/variables.scss";
.block__button{
    background-color: $primary-color;
    font-size: 18px;
    padding: 12px 10px; 
    margin-bottom: 10px;
    border: none{
     radius: 8px;
    }
}
@media screen and (min-width: 768px) {
    .mr-m-20{
        margin-right: 20px;
    }
}
</style>