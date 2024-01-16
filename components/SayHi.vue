<script setup lang="ts">
import { rand } from '@vueuse/shared';

const greetings = ['שלום', 'Hi', 'Yo!', 'Hey', 'Hola', 'こんにちは', 'Bonjour', 'Salut', '你好', 'Привет'];
const word = ref('Hello');

function runIt() {
	word.value = greetings[rand(0, greetings.length - 1)];
}

setInterval(runIt, 1250);
</script>

<template>
	<span>{{ word }}</span>
</template>
