<script setup>
import { Head, Link } from '@inertiajs/vue3';
import FrontendLayout from '@/Layouts/Frontend.vue';
import Hero from '@/Components/Frontend/Hero.vue';
import Skills from '@/Components/Frontend/Skills.vue';
import Projects from '@/Components/Frontend/Projects.vue';

defineProps({
    skills: Object,
    projects: Object
})
</script>

<template>
    <Head title="Welcome to portfolio" />
    <html>
        <FrontendLayout>
            <Hero/>
            <About/>
            <Skills :skills="skills" />
            <Projects :skills="skills" :projects="projects" />
        </FrontendLayout>
    </html>
</template>


