<script setup>
    defineProps({
        skills: Object,
        projects: Object
    });
</script>

<template>
    <section id="portfolio" class="dark:bg-[#121212]">
        <div class="container mx-auto">
            <div class="flex flex-col items-center text-center"> 
                <h1 class="text-6xl m-10">My last projects</h1>
            </div>
        </div>
    </section>
    <div class="container mx-auto dark:bg-[#121212]">
        <nav class="mb-12 border-b-2">
            <ul class="flex flex-col lg:flex-row justify-evenly items-center">
                <li class="cursor-pointer capitalize m-4">
                    <button class="flex text-center px-4 py-2">
                        All
                    </button>
                </li>
                <li class="cursor-pointer capitalize m-4" v-for="projectSkill in skills.data" :key="projectSkill.id">
                    <button class="flex text-center px-4 py-2 dark:text-[#68B42D]">
                        {{ projectSkill.name }}
                    </button>
                </li>   
            </ul>
        </nav>
    </div>
</template>