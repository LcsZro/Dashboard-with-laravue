<script setup>
import { Head, Link } from '@inertiajs/vue3';
import FrontendLayout from '@/Layouts/Frontend.vue';
import Hero from '@/Components/Frontend/Hero.vue';
import Skills from '@/Components/Frontend/Skills.vue';
import Portfolio from '@/Components/Frontend/Portfolio.vue';

defineProps({
    skills: Object,
    projects: Object
})
</script>

<template>
    <Head title="Welcome to portfolio" />
    <FrontendLayout>
        <Hero/>
        <About/> 
        <Skills :skills="skills" />
        <Portfolio :skills="skills" :projects="projects"/>
    </FrontendLayout>
</template>


