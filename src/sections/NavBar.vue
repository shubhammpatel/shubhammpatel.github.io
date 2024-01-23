<script setup lang="ts">

const links = [
    { title: "About Me", section: "about-me" },
    { title: "Education", section: "education" },
    { title: "Experience", section: "experience" },
    { title: "Contact", section: "contact-me" },
]

const scrollTo = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
    setTimeout(() => window.location.hash = section, 700)
}
</script>

<template>
    <header class="
        px-12 py-5 w-full
        flex justify-between items-center 
        fixed top-0
        bg-white/65 backdrop-blur-lg
    ">
        <div class="text-secondary text-lg cursor-pointer" @click="scrollTo('welcome')">
            Shubham
        </div>

        <!-- Links -->
        <div class="font-fira-code text-sm flex gap-10">
            <div class="flex gap-2 cursor-pointer"
                v-for="(link, i) in links"
                @click="scrollTo(link.section)"
            >
                <span class="text-secondary">0{{ i + 1 }}.</span>
                <span>{{ link.title }}</span>
            </div>
        </div>
    </header>
</template>
