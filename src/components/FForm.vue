<script setup>
import {ref} from 'vue'

const email = ref("")
const name = ref("")
const checkbox = ref(['content error'])
const date = ref(new Date())
const desc = ref("")

</script>

<template>
    <form class="d-form">
        <label for="email">E-mail: <input v-model="email" type="email" placeholder="E-mail" id="email"></label>
        <label for="name">Name: <input v-model="name" pattern="[A-Z].*" placeholder="Name" id="name"></label>
        <fieldset class="fieldset_errors">
            <legend for="error">Choose a problem</legend>
            <label for="content_err">Content Error
            <input v-model="checkbox" type="checkbox" id="content_err" value="content error"></label>
            <label for="other">Other
            <input v-model="checkbox" type="checkbox" id="other" value="other"></label>
            <label for="value_err">Value error
            <input v-model="checkbox" type="checkbox" id="value_err" value="value error"></label>
        </fieldset>
        <label for="date">Date: <input v-model="date" type="datetime-local" placeholder="Date" id="date"></label>
        <label for="desc"></label>
        <textarea v-model="desc" maxlength="150" rows="3" id="desc" placeholder="Description of the problem"></textarea>

        <button>submit</button>
        <button type="reset">reset</button>
    </form>

</template>
<style scoped lang="scss">
.d-form, .fieldset_errors {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1em;
    }

</style>