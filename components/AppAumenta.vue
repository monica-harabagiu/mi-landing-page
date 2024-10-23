<template>
   <div>
    <h1 class="title">Nuxt Gsap</h1>
   </div>
</template>


<script setup>
    const { $gsap, $ScrollTrigger } = useNuxtApp()

onMounted(() => {
  $gsap.to('.title', { 
    scrollTrigger: '.title',
    x: 500
   })
})
</script>


<style scoped>
    div {
        height: 100vh;
    }
</style>