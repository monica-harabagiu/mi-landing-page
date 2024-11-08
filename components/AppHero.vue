<template>
    <section class="hero text-center py-40 flex flex-col gap-7 relative container">
        <h1 class="lg:text-[64px] text-[32px]">
            Scopri le strategie di <br>
            <span>Web Marketing Immobiliare</span>
        </h1>
        <h6 class="lg:text-[20px]">
            E diventa il n°1 della tua città!
        </h6>
        <a href="https://form.typeform.com/to/jd4BaOPX" target="_blank">
            <button class="btn btn-main">Ottieni una consulenza gratuita</button>
        </a>

        <figure class="hidden lg:block absolute element-1 top-5 left-0">
            <img src="../assets/img/graphic-elements/hero-element-1.webp" alt="" width="220">
        </figure>
        <figure class="hidden lg:block absolute element-2 top-24 right-0">
            <img src="../assets/img/graphic-elements/hero-element-2.webp" alt="" width="220">
        </figure>
        <figure class="hidden lg:block absolute element-3 bottom-0 right-72">
            <img src="../assets/img/graphic-elements/hero-element-3.webp" alt="" width="250">
        </figure>
        <figure class="hidden lg:block absolute element-4 bottom-32 left-[300px]">
            <img src="../assets/img/graphic-elements/hero-element-4.webp" alt="" width="80">
        </figure>
        <figure class="hidden lg:block absolute element-5 bottom-32 right-32">
            <img src="../assets/img/graphic-elements/hero-element-5.webp" alt="" width="20">
        </figure>
        <figure class="hidden lg:block absolute element-6 bottom-0 left-40">
            <img src="../assets/img/graphic-elements/hero-element-6.webp" alt="" width="50">
        </figure>
        <figure class="hidden lg:block absolute element-7 bottom-52 left-32">
            <img src="../assets/img/graphic-elements/hero-element-7.webp" alt="" width="10">
        </figure>
        <figure class="hidden lg:block absolute element-8 bottom-60 right-60">
            <img src="../assets/img/graphic-elements/hero-element-8.webp" alt="" width="30">
        </figure>
    </section>
</template>

<script setup>
    const { $gsap, $ScrollTrigger,} = useNuxtApp()

    onMounted(() => {

        let tlHero = $gsap.timeline({
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: true,
                ease: "sine.inOut",
                // markers: true,
            },
        })

        tlHero.from(
            ".element-1",
            {
                y: 50,
                duration: 0.5,
            }
        )
        tlHero.to(
            ".element-2",
            {
                y: 60,
            },
            "<"
        )
        tlHero.from(
            ".element-3",
            {
                y: 40,
            },
            "<"
        )
        tlHero.to(
            ".element-4",
            {
                y: 60,
            },
            "<"
        )
        tlHero.to(
            ".element-5",
            {
                y: 20,
            },
            "<"
        )
        tlHero.from(
            ".element-6",
            {
                y: 20,
            },
            "<"
        )
        tlHero.from(
            ".element-7",
            {
                y: 30,
            },
            "<"
        )
        tlHero.to(
            ".element-8",
            {
                y: 30,
            },
            "<"
        )

    })
</script>

<style scoped>
    h1 {
        font-weight: 800;

        span {
            color: #3DB8D8;
        }
    }

    /* h6 {
        font-size: 20px;
    } */

    a {
        font-size: 18px;
        font-weight: 500;
    }


</style>