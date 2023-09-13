<script setup>
    defineProps({
        skills: Object,
        projects: Object
    })
</script>

<template>
    <section class="dark:bg-[#242424] py-16">
        <div class="container mx-auto">
            <div class="grid grid-cols-8 md:grid-flow-col">
                <div class="flex items-center justify-center" v-for="skill in skills.data" :key="skill.id">
                    <img :src="skill.image" :alt="skill.name" class="lg:h-20">
                </div>
            </div>
        </div>
    </section>
</template>