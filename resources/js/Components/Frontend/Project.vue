<script setup>
    import { Link } from '@inertiajs/vue3';

    defineProps({
        project: Object,
    })
</script>

<template>
    <div class="overflow-hidden rounded-lg has-shadow md:w-80 p-2">
      <div class="relative">
        <img
          :src="project.image"
          class="object-cover object-center h-48 w-full"
          :alt="project.name"
        />
      </div>
      <div class="p-4 flex flex-col gap-2">
        <a :href="project.project_url" class="group flex-col items-center text-center cursor-pointer">
          <h3 class="text-xl font-semibold">{{ project.skill.name }}</h3>
        </a>
        <div class="text-sm">
          <p class="dark:text-white">
            🕹 Customizable and 😍 accessible design system which provides
            TailwindCSS component class name library to build modern UI. 💥
          </p>
        </div>
        <div class="flex flex-wrap gap-2">
          <span class="badge light info"> Design </span>
          <span class="badge light primary"> Product </span>
          <span class="badge light danger"> Developer </span>
        </div>
      </div>
    </div>
</template>
  