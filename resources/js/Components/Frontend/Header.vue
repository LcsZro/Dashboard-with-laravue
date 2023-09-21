<script setup>
import { ref } from 'vue';
import DarkmodeButton from '../Frontend/ButtonDarkmode.vue' 

const showMobileMenu = ref(false);

const toggleMobileMenu = () => {
    showMobileMenu.value = !showMobileMenu.value;
}

const navigations = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" }, 
    { name: "Contact", href: "#contact" },   
]
</script>
 
<template> 
    <nav class="flex items-start justify-between flex-wrap p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <h2 class="md:ml-12 font-semibold text-xl tracking-tight text-[#69B42D] dark:text-white">Portfólio</h2>
        </div>
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-xl text-white border-[#68B42D] hover:text-white hover:border-white" @click="toggleMobileMenu">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div class="w-full lg:flex lg:items-center lg:w-auto" :class="{ 'hidden': !showMobileMenu }">
            <div class="text-lg lg:flex-grow text-[#68B42D]">
                <a :href="navigation.href" v-for="(navigation, index) in navigations" class="block mt-4 lg:inline-block lg:mt-0 dark:hover:text-white hover:text-slate-700 mr-4">
                   {{ navigation.name }}
                </a>
                <DarkmodeButton/>
            </div>
        </div>
    </nav>
</template>
 
