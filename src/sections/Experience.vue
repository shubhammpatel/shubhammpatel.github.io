<script setup lang="ts">
import Toggle from '../components/Toggle.vue';
import Box from './Box.vue';
</script>

<template>
    <Box class="flex flex-col gap-16 py-36" id="experience">

        <!-- Experience -->
        <div class="flex flex-col gap-9">
            <div class="text-3xl">Experience</div>

            <Toggle 
                title="Web Developer"
                link-title="eBottli Pty. Ltd., Adelaide"
                link="https://google.com"
                date="Oct 2023 - Present"
            >
                Example Content
            </Toggle>

            <Toggle 
                title="Customer Service Representative"
                link-title="TSA Group, Adelaide"
                link="https://google.com"
                date="Feb 2023 - Oct 2023"
            >
            </Toggle>
        </div>


        <!-- Volunteering -->
        <div class="flex flex-col gap-9">
            <div class="text-3xl">Volunteering</div>

            <Toggle 
                title="Animal Welfare"
                link-title="Farishtey, Ahmedabad"
                link="https://google.com"
                date="Mar 2022 - Jul 2022"
            >
            </Toggle>

            <Toggle 
                title="UniMentor"
                link-title="UniSA, Adelaide"
                link="https://google.com"
                date="Jun 2020 - Dec 2020"
            >
            </Toggle>
        </div>
    </Box>
</template>