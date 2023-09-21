<script setup>
    import { useDark, useToggle } from '@vueuse/core'

    const isDark = useDark()
    const toggleDark = useToggle(isDark)
</script>

<template>
    <button @click="toggleDark()">
        <img v-if="isDark" src="../Frontend/Img/moon.svg" alt="Dark Image" class="w-6"/>
        <img v-else src="../Frontend/Img/sun.svg" alt="Light Image" class="w-6"/>
    </button>
</template>