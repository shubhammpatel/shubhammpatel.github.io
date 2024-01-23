<script setup lang="ts">
import NavBar from './sections/NavBar.vue';
import Welcome from './sections/Welcome.vue';
import AboutMe from './sections/AboutMe.vue';
import Education from './sections/Education.vue';
import Experience from './sections/Experience.vue';
import ContactMe from './sections/ContactMe.vue';
import ScrollIndicator from './components/ScrollIndicator.vue';
</script>

<template>
    <NavBar />
    <div class="snap-y snap-mandatory h-screen w-screen overflow-y-auto static">
        <Welcome />
        <AboutMe />
        <Education />
        <Experience />
        <ContactMe />
        <ScrollIndicator />
    </div>
</template>
