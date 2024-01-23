<script setup lang="ts">
import Toggle from '../components/Toggle.vue';
import Box from './Box.vue';
</script>

<template>
    <Box class="flex flex-col gap-16 py-36" id="education">

        <!-- Education -->
        <div class="flex flex-col gap-9">
            <div class="text-3xl">Education</div>

            <Toggle 
                title="Professional Year"
                link-title="Performance Education, Adelaide"
                link="https://google.com"
                date="Feb 2023 - Oct 2023"
            >
            </Toggle>

            <Toggle 
                title="Bachelor of Information Technology (Networking and Cybersecurity)"
                link-title="UniSA, Adelaide"
                link="https://google.com"
                date="Feb 2019 - Dec 2022"
            >
            </Toggle>

            <Toggle 
                title="High School"
                link-title="H.B.Kapadia New High School, Ahmedabad"
                link="https://google.com"
                date="May 2017 - Mar 2018"
            >
            </Toggle>
        </div>


        <!-- Projects -->
        <div class="flex flex-col gap-9">
            <div class="text-3xl">Projects</div>

            <Toggle 
                title="Data Security"
                link-title="Moi Sante, Adelaide"
                link="https://google.com"
                date="Aug 2022 - Dec 2022"
            >
            </Toggle>

            <Toggle 
                title="Course Evaluation"
                link-title="Palo Alto, Adelaide"
                link="https://google.com"
                date="Jul 2021 - Dec 2021"
            >
            </Toggle>
        </div>
    </Box>
</template>