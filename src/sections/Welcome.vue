<script setup lang="ts">
import Box from './Box.vue';
import SocialIcons from '../components/social/SocialIcons.vue'
</script>

<template>
    <Box class="flex justify-between" id="welcome">
        <div class="flex flex-col justify-center items-start gap-2.5 h-full">

            <div class="text-4xl">
                My name is <span class="text-secondary">Shubham</span>
            </div>

            <div class="text-6xl">
                I am a Web Developer
            </div>

            <div class="max-w-3xl leading-8 py-4">
                Greetings! I'm a dedicated and accomplished IT professional with a strong academic foundation in Networking and Cybersecurity. Adept at combining technical expertise with a proactive approach to problem-solving. Proficient in cloud computing, web development, database management, and network architecture. Experienced in Web Development and customer service roles, showcasing excellent communication and interpersonal skills. Passionate about staying up-to-date with the latest technological advancements and contributing to innovative solutions. Recognized for academic excellence, certifications, and consistent contributions to team environments.
            </div>

            <a href="mailto:shubhampatel12344@gmail.com">
                <button class="
                    py-4 px-6
                    border border-secondary text-secondary rounded-full
                    hover:bg-secondary hover:text-white transition-colors
                    flex gap-4 items-center
                ">
                    Contact Me
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 19" fill="none">
                        <path d="M1.78125 1.0625L10.2188 9.5L1.78125 17.9375" stroke="currentColor" stroke-width="2.05078" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </a>
        </div>

        <div class="flex flex-col justify-center h-full">
            <SocialIcons class="flex-col gap-6"/>
        </div>
    </Box>
</template>