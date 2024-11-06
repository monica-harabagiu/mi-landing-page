<template>
    <section class="hero text-center py-40 flex flex-col gap-7 relative container">
        <h1>
            Scopri le strategie di <br>
            <span>Web Marketing Immobiliare</span>
        </h1>
        <h6>
            E diventa il n°1 della tua città!
        </h6>
        <a href="#">
            <button class="btn btn-main">Ottieni una consulenza gratuita</button>
        </a>

        <figure class="absolute element top-5 left-0">
            <img src="../assets/img/graphic-elements/hero-element-1.webp" alt="" width="220">
        </figure>
        <figure class="absolute element top-24 right-0">
            <img src="../assets/img/graphic-elements/hero-element-2.webp" alt="" width="220">
        </figure>
        <figure class="absolute element bottom-0 right-72">
            <img src="../assets/img/graphic-elements/hero-element-3.webp" alt="" width="250">
        </figure>
        <figure class="absolute element bottom-32 left-[300px]">
            <img src="../assets/img/graphic-elements/hero-element-4.webp" alt="" width="80">
        </figure>
        <figure class="absolute element bottom-32 right-32">
            <img src="../assets/img/graphic-elements/hero-element-5.webp" alt="" width="20">
        </figure>
        <figure class="absolute element bottom-0 left-40">
            <img src="../assets/img/graphic-elements/hero-element-6.webp" alt="" width="50">
        </figure>
        <figure class="absolute element bottom-52 left-32">
            <img src="../assets/img/graphic-elements/hero-element-7.webp" alt="" width="10">
        </figure>
        <figure class="absolute element bottom-60 right-60">
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
                // endTrigger: "#targets-section",
                end: "bottom top",
                scrub: true,
                // ease: "sine.inOut",
                markers: true,
            },
        })

        tlHero.to(
            ".element",
            {
                y: 50,
            }
        )

    })
</script>

<style scoped>
    h1 {
        font-size: 64px;
        font-weight: 800;

        span {
            color: #3DB8D8;
        }
    }

    h6 {
        font-size: 20px;
    }

    a {
        font-size: 18px;
        font-weight: 500;
    }

    @media only screen and (max-width: 950px) {
        .absolute {
            display: none;
        }
    }
</style>