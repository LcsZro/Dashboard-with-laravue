<script setup>
import { Head, Link } from '@inertiajs/vue3';
import FrontendLayout from '@/Layouts/Frontend.vue';
import Hero from '@/Components/Frontend/Hero.vue';
import Skills from '@/Components/Frontend/Skills.vue';
import Projects from '@/Components/Frontend/Projects.vue';
import Services from '@/Components/Frontend/Services.vue'
import Contact from '@/Components/Frontend/Contact.vue'

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
            <Projects :skills="skills" :projects="projects" />
            <Services />
            <Contact />
        </FrontendLayout>
</template>


