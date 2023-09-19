  <script setup>
  import Project from '../Frontend/Project.vue'
  import { ref } from 'vue'
  
  // Define props
  const props = defineProps({
    skills: Object,
    projects: Object
  });
  
  const filteredProjects = ref(props.projects.data);
  const filteredProjectId = ref(null);
  
  const filterProjects = (id) => {
    console.log('Filtering projects with skill id:', id);
    if (id === "all") {
      filteredProjects.value = props.projects.data;
      filteredProjectId.value = null; 
    } else {
      filteredProjects.value = props.projects.data.filter(project => {
        return project.skill.id === id;
      });
      filteredProjectId.value = id; // Define o id do filtro aplicado
    }
  }
  
  const projectMatchesFilter = (project) => {
    return filteredProjectId.value === null || project.id === filteredProjectId.value;
  }
</script>

<template>
    <div>
      <section id="portfolio" class="dark:bg-[#121212]">
        <div class="container mx-auto">
          <div class="flex flex-col items-center text-center">
            <h1 class="text-6xl m-10">My last projects</h1>
          </div>
        </div>
      </section>
      <div class="container mx-auto">
        <nav class="mb-12 border-b-2">
          <ul class="flex flex-col lg:flex-row justify-evenly items-center">
            <li class="cursor-pointer capitalize m-4">
              <button @click="filterProjects('all')" class="flex text-center dark:text-white px-4 py-2">
                All
              </button>
            </li>
            <li class="cursor-pointer capitalize m-4" v-for="projectSkill in skills.data" :key="projectSkill.id">
              <button @click="filterProjects(projectSkill.id)" class="flex text-center px-4 py-2 dark:text-[#68B42D]">
                {{ projectSkill.name }}
              </button>
            </li>
          </ul>
        </nav>
        <section class="grid gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 items-center justify-center">
          <Project v-for="project in filteredProjects" :key="project.id" :project="project" />
        </section>
      </div>
    </div>
</template>
