<script setup lang="ts">
import Skills from '../components/skills/Skills.vue';
import Box from './Box.vue';
</script>

<template>
    <Box class="flex gap-16 py-36" id="about-me">
        <!-- Image -->
        <div class="min-w-64 pt-14">
            <img src="/profile.png" />
        </div>

        <!-- About -->
        <div class="flex flex-col gap-2.5 grow shrink">

            <div class="font-medium text-3xl">
                A Little
                <span class="text-secondary">
                    About Me
                </span>
            </div>

            <div class="w-full leading-7">
                I'm thrilled to introduce myself as a recent graduate of the University of South Australia, where I earned my Bachelor of Information Technology degree in April 2023. This marks the culmination of my academic journey and the beginning of my professional career. During my time at the university, I gained a strong skill set and knowledge base in various information technology domains, including programming, databases, network design, security, and software engineering. Alongside technical proficiency, I developed critical thinking, problem-solving, and communication skills, which I believe are essential for success in any career. Outside of my studies, my role as a Customer Service Representative at TSA Group provided me with valuable experience in responsibility and effective client communication, enhancing my interpersonal abilities. I also actively participated in extracurricular activities, such as volleyball games with friends and a local community club, highlighting my dedication to teamwork and effective time management. My passion lies in using technology to drive positive change, and I am committed to making a significant contribution to the technological landscape for the betterment of society.

                <br />
                <br />
                Here are some technologies I enjoy working with:
            </div>

            <Skills />
        </div>
    </Box>
</template>