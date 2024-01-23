<script setup lang="ts">
import { ref } from 'vue';

// Scroll Section State
const scrollSections = ref<Element[]>([])

const currentActiveSection = ref(0)

const scrollToSection = (index: number) => {
    if(scrollSections.value.length <= index) return

    // Scroll to that section
    scrollSections.value[index].scrollIntoView({
        behavior: "smooth",
    })
}


document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.snap-start')

    const o = new IntersectionObserver((entries) => {
        const intersecting  = entries.find(x => x.isIntersecting)

        if(!intersecting) return

        const insIndex = scrollSections.value.findIndex(x => x === intersecting.target)

        if(insIndex === -1) return

        currentActiveSection.value = insIndex
    }, {
        threshold: 0.5
    })

    sections.forEach(sec => {
        scrollSections.value.push(sec)
        o.observe(sec)
    })
})

</script>

<template>
    <div class="flex flex-col gap-3 absolute right-4 top-1/2">
        <button
            v-for="(_, i) in scrollSections"
            class="rounded-full h-2 w-2 border border-black"
            @click="scrollToSection(i)"
        >
            <div :class="{ 'bg-black': i === currentActiveSection }" class="h-full w-full"></div>
        </button>
    </div>
</template>