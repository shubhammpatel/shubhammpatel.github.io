<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
    title: string,
    linkTitle: string,
    link?: string,
    date: string,
}>();


const isOpen = ref(false)
const toggle = () => isOpen.value = !isOpen.value

</script>

<template>
    <div class="bg-[#F1F1F1] rounded-[46px] overflow-hidden">
        <div class="
            w-full p-8 cursor-pointer
            select-none flex
        "
            @click="toggle"
        >
            <div class="grow flex justify-between items-center">
                <!-- Title, Link -->
                <div class="flex gap-8 text-sm">
                    <div>{{ title }}</div>

                    <a class="text-secondary hover:text-secondary/60 hover:underline" :href="link" target="_blank" v-if="link" @click.stop="">{{ linkTitle }}</a>
                    <div class="text-secondary" v-else>{{ linkTitle }}</div>
                </div>
                
                <!-- Date -->
                <div class="font-fira-code text-xs">
                    {{ date }}
                </div>
            </div>

            <div class="
                transition hover:bg-black/15
                h-6 w-6 ml-16
                flex items-center justify-center
                rounded-full
            "
                :class="{
                    'rotate-90': isOpen,
                }"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 20" fill="none">
                    <path d="M1.5625 2L10 10.4375L1.5625 18.875" stroke="#272A32" stroke-width="2.05078" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>

        <Transition>
            <div v-if="isOpen" class="w-full border-t">
                <div class="px-24 py-8">
                    <slot>
                        Content <br/>
                        Content <br/>
                        Content <br/>
                        Content <br/>
                    </slot>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition-property: max-height;
  transition-duration: 500ms;
  transition-timing-function: ease;
}

.v-enter-from,
.v-leave-to {
  max-height: 0px;
  overflow: hidden;
  border: 0px;
}

.v-enter-to {
    max-height: 1000px;
}

.v-leave-from {
    max-height: 200px;
}

</style>