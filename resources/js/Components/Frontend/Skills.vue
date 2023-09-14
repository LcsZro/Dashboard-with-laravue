<script setup>
    defineProps({
        skills: Object,
        projects: Object
    })
</script>

<template>
    <section>
        <div class="container mx-auto">
            <div class="grid grid-cols-8 md:grid-flow-col">
                <div class="flex items-center justify-center p-4" v-for="skill in skills.data" :key="skill.id">
                    <img :src="skill.image" :alt="skill.name" class="h-10 lg:h-20">
                </div>
            </div>
        </div>
    </section>
</template>