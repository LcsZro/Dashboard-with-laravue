<template> 
    <nav class="flex items-center justify-between flex-wrap bg-[#242424] p-6">
            <!-- Logo à esquerda -->
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <img class="w-28" src="https://a.storyblok.com/f/248205/440x250/8c8b00c03a/logo.png?cv=1694461402429">
            </div>
            <!-- Botão do menu à direita -->
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-xl text-white border-white hover:text-white hover:border-white" @click="toggleMobileMenu">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <!-- Itens de menu -->
            <div class="w-full lg:flex lg:items-center lg:w-auto" :class="{ 'hidden': !showMobileMenu }">
                <div class="text-lg lg:flex-grow text-[#68B42D]">
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
                    Home
                </a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
                    About
                </a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
                    Services
                </a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white">
                    Projects
                </a>
            </div>
        </div>
    </nav>
</template>
 
<script setup>
    import { ref } from 'vue';
 
    const showMobileMenu = ref(false);
 
    const toggleMobileMenu = () => {
        showMobileMenu.value = !showMobileMenu.value;
    }
</script>
 