<script setup lang="ts">
import TwitterButton from './TwitterButton.vue'
import GithubButton from './GithubButton.vue'
import LinkedinButton from './LinkedinButton.vue'
import InstagramButton from './InstagramButton.vue'
import EmailButton from './EmailButton.vue'

</script>

<template>
    <div class="flex gap-2">
        <TwitterButton href="https://x.com/shubham7458"/>
        <GithubButton href="https://github.com/shubhammpatel"/>
        <LinkedinButton href="https://www.linkedin.com/in/shubham-patel-99a838172"/>
        <InstagramButton href="https://instagram.com/shubhamm.patel"/>
        <EmailButton href="mailto:shubhampatel12344@gmail.com"/>
    </div>
</template>
