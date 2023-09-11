<script setup>
    import Header from '@/Components/Frontend/Header.vue';
    import Footer from '@/Components/Frontend/FooterComponent.vue';
</script>

<template>
    <div class="bg-slate-200 darkmode:bg-slate-900">
        <!--Header-->
        <Header/>
        <main class="min-h-screen">
            <slot/>
        </main>
        <!--Footer-->
        <Footer/>
    </div>
</template>