<script setup>
import AppServizi from './components/AppServizi.vue';
import AppTestimonianze from './components/AppTestimonianze.vue';
import { useWindowScroll } from '@vueuse/core';

const { x, y } = useWindowScroll()
console.log(x.value)
y.value = 100



const scrollTop = () => {
  window.scrollTo(0, 0)
}

// const isUserScrolling = (window.scrollY > 20);


// onMounted(() => {
// })
// Get the button
// let mybutton = document.getElementById("myBtn");


// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <AppHeader />

    <NuxtLink :class="{'nav-section-scrolling': y > 100}" id="top-button" class="btn btn-main fixed bottom-5 right-5" @click="scrollTop">Top</NuxtLink>

    <AppHero />
    <AppAumenta />
    <!-- <AppRisultati />
    <AppServizi />
    <AppTestimonianze />
    <AppTarget />
    <AppCeo />
    <AppTeam />
    <AppCta />
    <AppFooter /> -->
  </div>
</template>

<style scoped>
  /* #myBtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: red;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
}

#myBtn:hover {
  background-color: #555;
} */
</style>
