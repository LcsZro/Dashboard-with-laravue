<script setup>
    import Header from '@/Components/Frontend/Header.vue';
    import FooterComponent from '@/Components/Frontend/FooterComponent.vue';
</script>

<template>
    <div>
        <!--Header-->
        <Header/>
        <main class="min-h-screen">
            <slot/>
        </main>

        <!--Footer-->
        <FooterComponent/>
    </div>
</template>