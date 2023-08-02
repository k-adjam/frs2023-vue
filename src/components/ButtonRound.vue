<script setup>
defineProps({
    index: Number,
});
</script>

<template>
    <button type="button" class="block__button"> button {{ index }} </button>
</template>

<style scoped>
.block__button{
    border: none;
    border-radius: 8px;
    background-color: #f8f8f8;
    font-size: 18px;
    padding: 12px 10px;
    margin-bottom: 10px;
}
</style>