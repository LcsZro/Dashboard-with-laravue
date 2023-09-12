<script setup>
import { Head, Link } from '@inertiajs/vue3';
import FrontendLayout from '@/Layouts/Frontend.vue';
import Hero from '@/Components/Frontend/Hero.vue';
import About from '@/Components/Frontend/About.vue';
</script>

<template>
    <Head title="Welcome to portfolio" />
    <FrontendLayout>
        <Hero/>
        <About/>
    </FrontendLayout>
</template>


