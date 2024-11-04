<template>
    <section>
        <div class="slide1 flex flex-col justify-center items-center text-white z-[-1]">
            <!-- <div class="frame"> -->
            <svg class="title" width="100%" height="100%" preserveAspectratio="xMinYMin">
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white">
                    <tspan class="main-text">aumenta</tspan>
                    <tspan class="sub-text" x="50%" y="70%">le acquisizioni e le vendite</tspan>
                </text>
            </svg>
            <!-- </div> -->
        </div>
        <div class="slide-finale flex flex-col justify-center items-center gap-8">
            <h2>Diventa il <span>leader</span> nella tua zona come:</h2>
            <div class="logo-carousel flex gap-8">
                <!-- <figure v-for="element in logos.companyLogos">
                    <img :src="`/partnerLogos/${element.src}`" :alt="element.title" width="200">
                </figure> -->
                <figure v-for="element in 10" class="single-logo">
                    <img src="/partnerLogos/concept-home.png" width="200">
                </figure>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { useLogosStore } from '~/store/companyLogos'
    const logos = useLogosStore()

    const { $gsap, $ScrollTrigger } = useNuxtApp()


    onMounted(() => {

        let tl = $gsap.timeline({
            scrollTrigger: {
                trigger: ".slide1",
                scrub: true,
                pin: true,
                start: "center center",
                endTrigger: ".slide-finale",
                end: "bottom top",
                // markers: true,
            },
        })

        tl.to(
            ".slide1",
            {
                borderColor: "#00101C"
            },
            "-=0.5"
        )

        tl.to(
            ".slide1",
            {
                scale: 50,
                ease: "sine.in",
                transformOrigin: "center center",
            }
        )
        tl.to(
            ".slide1",
            {
                backgroundColor: "white",
                duration: 0.3
            },
            "-=0.3"
        )
        tl.to(
            ".sub-text",
            {
                opacity: 0
            },
            "-=1"
        )
        tl.fromTo(
            ".slide1",
            {
                opacity: 1,
            },
            {
                opacity: 0,
                ease: "slow"
            }
        )
        tl.from(
            ".slide-finale",
            {
                opacity: 0,
            }
        )

        let tl2 = $gsap.timeline({
            scrollTrigger: {
                trigger: ".slide-finale",
                scrub: true,
                pin: true,
                start: "bottom bottom",
                end: "bottom bottom",
                // markers: true,
            }

        })

        tl2.to(
            ".slide1",
            {
                display: "none",
            }
        )
        

        let logoCarousel = document.querySelector(".logo-carousel").offsetWidth;

        $gsap.timeline({
            repeat: -1,
            defaults: {
                ease: "none",
            },
        })
        .fromTo(
            ".card",
            {
                x: (i, el) => innerWidth * i
            },
            {
                x: (i, el, t) => -innerWidth * (t.length - i),
                duration: 10,
            }
        )

    })
</script>


<style scoped>
    .slide1 {
        height: 80vh;
        border: 2px solid #3DB8D8;
        border-radius: 50px;
        margin: 50px;

        /* h2 {
            margin-top: -250px;
            font-size: 40px;

        } */

    }

    .title .main-text {
        font-size: 260px;
        font-weight: 900;
    }

    .title .sub-text {
        font-size: 40px;
    }

    .slide-finale {
        margin-top: -70vh;
        height: 60vh;
        overflow: hidden;
        /* border: 2px solid green; */

        h2 {
            margin-top: -500px;

            span {
                color: #3DB8D8;
            }
        }
    }

    .logo-carousel {
        width: max-content;
    }
</style>