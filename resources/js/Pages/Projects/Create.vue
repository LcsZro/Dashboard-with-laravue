<script setup>
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import { Head, useForm } from '@inertiajs/vue3';
    import InputError from '@/Components/InputError.vue';
    import InputLabel from '@/Components/InputLabel.vue';
    import PrimaryButton from '@/Components/PrimaryButton.vue';
    import TextInput from '@/Components/TextInput.vue';

    defineProps({
        skills: Array
    })

    const form = useForm({
        name: "",
        image: null,
        skill_id: "",
        project_url: "",
        description: "",
        selectedSkills: [],
        color: []
    });

    const submit = () => {
        form.data.color = form.color;

        form.post(route('projects.store'));
    };
</script>

<template>
    <Head title="New Skill" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                New Project
            </h2>
        </template>

        <div class="mt-2">
            <div class="max-w-md mx-auto sm:px-6 lg:px-8">
                <form @submit.prevent="submit">
                    <div>
                        <select 
                            class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500  focus:border-indigo-500 sm:text-sm rounded-md"
                            v-model="form.skill_id" 
                            id="skill_id" 
                            name="skill_id"
                        >
                            <option v-for="skill in skills" :key="skill.id" :value="skill.id">
                                {{ skill.name }}
                            </option>
                        </select>
                        <InputError class="mt-2" :message="form.errors.skill_id" />
                    </div>

                    <div>
                        <InputLabel for="name" value="Name" />
                        <TextInput
                            id="name"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.name"
                            autofocus
                            autocomplete="name"
                        />
                        <InputError class="mt-2" :message="form.errors.name" />
                    </div>

                    <div>
                        <InputLabel for="project_url" value="URL" />

                        <TextInput
                            id="project_url"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.project_url"
                            autocomplete="projecturl"
                        />

                        <InputError class="mt-2" :message="form.errors.project_url" />
                    </div>

                    <div>
                        <InputLabel for="description" value="Description" />
                        <TextInput
                            id="description"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.description"
                            autofocus
                            autocomplete="description"
                        />
                        <InputError class="mt-2" :message="form.errors.description" />
                    </div>

                    <div>
                        <InputLabel for="selectedSkills" value="Hashtags" />
                            <div class="mt-1 space-y-2">
                                <template v-for="(skill, index) in skills">
                                    <label class="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            :id="'skill_' + skill.id"
                                            :value="skill.name"
                                            v-model="form.selectedSkills"
                                            class="form-checkbox h-5 w-5 text-indigo-600 border-gray-300 rounded"
                                        />
                                        <span :style="{ color: form.color[index] }" class="text-white">{{ skill.name }}</span>
                                        <input
                                            type="color"
                                            :id="'color_' + skill.id"
                                            v-model="form.color[index]"
                                        />
                                    </label>
                                </template>
                            </div>
                        <InputError class="mt-2" :message="form.errors.selectedSkills" />
                    </div>

                    <div>
                        <InputLabel for="image" value="Image" />
                        <TextInput
                            id="image"
                            type="file"
                            class="mt-1 block w-full"
                            @input="form.image = $event.target.files[0]"        
                        />

                        <InputError class="mt-2" :message="form.errors.image" />
                    </div>

                    <div class="flex items-center justify-end mt-4">
                        <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            Store
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

