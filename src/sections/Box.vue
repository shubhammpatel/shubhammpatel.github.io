<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})

</script>

<template>
    <div class="flex justify-center min-h-screen snap-start">
        <div class="w-[1020px] overflow-hidden" v-bind="$attrs">
            <slot>
                This is a box !
            </slot>
        </div>
    </div>
</template>