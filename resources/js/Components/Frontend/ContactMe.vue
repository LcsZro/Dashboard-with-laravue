<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3'

const showMessage = ref(false);

const form = useForm({
    name: "",
    email:"",
    body: ""
});

function setShowMessage(value){
    showMessage.value = value;
}

function cleanForm(){
    form.reset();
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
}

const submit = () => {
    form.post(route("contact"),{
        preserveScroll: true,
        onSuccess: () => cleanForm(),
    });
}
</script>

<template>
    <section class="py-16">
        <div class="container mx-auto text-center">
            <h2 class="text-4xl md:text-6xl mb-8">Contact Me</h2>
        </div>
        <div class="container mx-auto flex flex-col md:flex-row gap-x-8 mt-8 md:mt-0">
            <div class="flex-1 flex flex-col items-center md:items-start space-y-4 md:space-y-8 mb-12">
                <div class="flex items-center space-x-2">
                    <div class="w-14 h-14 flex items-center justify-center text-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#68b42d" d="M5.856 6.84a.75.75 0 0 0-1.106.66V17a.75.75 0 0 0 1.5 0V8.756l5.394 2.904c.222.12.49.12.712 0l5.394-2.904V17a.75.75 0 0 0 1.5 0V7.5a.75.75 0 0 0-1.106-.66L12 10.148L5.856 6.84Z"/><path fill="#68b42d" fill-rule="evenodd" d="M17.31 3.722a59.632 59.632 0 0 0-10.62 0l-1.518.135a3.53 3.53 0 0 0-3.179 3.006a35.508 35.508 0 0 0 0 10.274a3.53 3.53 0 0 0 3.18 3.005l1.516.136c3.534.316 7.088.316 10.622 0l1.517-.136a3.53 3.53 0 0 0 3.179-3.005a35.508 35.508 0 0 0 0-10.274a3.53 3.53 0 0 0-3.18-3.006l-1.516-.135ZM6.824 5.216a58.133 58.133 0 0 1 10.354 0l1.517.136a2.03 2.03 0 0 1 1.829 1.728a34.005 34.005 0 0 1 0 9.84a2.03 2.03 0 0 1-1.829 1.728l-1.517.136c-3.444.308-6.91.308-10.354 0l-1.517-.136a2.03 2.03 0 0 1-1.829-1.728a34.008 34.008 0 0 1 0-9.84a2.03 2.03 0 0 1 1.829-1.728l-1.517-.136Z" clip-rule="evenodd"/></svg>
                    </div>
                    <div>
                        <h4 class="text-xl font-semibold">Have a question?</h4>
                        <p class="text-gray-600">I am here to help you</p>
                    </div>
                </div>
                <p class="text-[#68B42D]">Email me at random@gmail.com</p>
            </div>
            <form @submit.prevent="submit" class="w-full max-w-md">
                <div v-if="showMessage" class="m-2 p-4 bg-teal-200 rounded-lg">
                    Thank you for contacting me.
                </div>
                <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div class="flex-1">
                        <input v-model="form.name" type="text" class="w-full border p-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your Name">
                        <span v-if="form.errors.name" class="text-red-500 text-sm m-2">{{ form.errors.name }}</span> 
                    </div>
                    <div class="flex-1">
                        <input v-model="form.email" type="email" class="w-full border p-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your Email">   
                        <span v-if="form.errors.name" class="text-red-500 text-sm m-2">{{ form.errors.email }}</span>              
                    </div>
                </div>
                <div class="mt-4">
                    <textarea v-model="form.body" class="w-full border p-2 pb-28 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your Message" spellcheck="false"></textarea>
                    <span v-if="form.errors.email" class="text-red-500 text-sm m-2">{{ form.errors.email }}</span>
                </div>
                <button class="bg-[#68B42D] hover:bg-[#68b42de8] text-white font-bold py-2 px-4 rounded meu-botao">
                    Send Message
                </button>
            </form>
        </div>
    </section>
</template>
