<template>
    <section ref="target" id="targets-section" class="container mt-32 mx-auto px-4">

        <h5>Target</h5>
        <hr>

        <div class="lg:flex justify-between targets-intro">
            <div class="basis-1/2">
                <h2 class="text-[35px] lg:text-[40px]">Tutta la nostra esperienza nel marketing immobiliare a tua
                    disposizione</h2>
            </div>
            <div class="mt-7 lg:mt-0">
                <a href="https://form.typeform.com/to/jd4BaOPX" target="_blank">
                    <button class="btn btn-main">Prenota una consulenza gratuita</button>
                </a>
            </div>
        </div>

        <div class="targets lg:flex lg:mt-6 mt-16 gap-20">
            <div class="single-target basis-1/3">
                <figure>
                    <img src="../assets/img/graphic-elements/target-element-1.webp" alt="illustrazione-con-agente-su-piedistallo">
                </figure>
                <h4>Consulenti Immobiliari</h4>
                <span>
                    Attraverso strategie su misura, aiutiamo i consulenti immobiliari a raggiungere più clienti,
                    costruire relazioni di fiducia e ottenere maggiore riconoscibilità nel settore migliorandone la tua
                    visibilità online
                </span>
            </div>

            <div class="single-target basis-1/3">
                <figure>
                    <img src="../assets/img/graphic-elements/target-element-2.webp" alt="illustrazione-casa">
                </figure>
                <h4>Agenzie Immobiliari</h4>
                <span>
                    Dal marketing digitale alla gestione dei social media, lavoriamo per aumentare l'autorevolezza delle
                    agenzie immobiliari e attrarre potenziali clienti, con strategie che generano visibilità e
                    conversioni
                </span>
            </div>

            <div class="single-target basis-1/3">
                <figure>
                    <img src="../assets/img/graphic-elements/target-element-3.webp" alt="illustrazione-moneta-euro">
                </figure>
                <h4>Investitori Immobiliari</h4>
                <span>
                    Aiutiamo gli investitori immobiliari a connettersi con partner e clienti, a promuovere i propri
                    progetti e a valorizzare ogni opportunità d'investimento, con soluzioni innovative e orientate al
                    successo
                </span>
            </div>
        </div>

    </section>
</template>

<script setup>

    import { onMounted, onUnmounted, ref } from 'vue';
    const { $gsap, $ScrollTrigger } = useNuxtApp()

    const target = ref();
    let ctx;

    onMounted(() => {
        ctx = $gsap.context((self) => {
            setTimeout(() => {

                let tlTargets = $gsap.timeline({
                    force3D: false,
                    scrollTrigger: {
                        trigger: ".targets-intro",
                        start: "top bottom",
                        endTrigger: "#targets-section",
                        end: "bottom bottom",
                        scrub: true,
                        // ease: "sine.inOut",
                        // markers: true,
                    },
                })

                tlTargets.from(
                    ".targets-intro",
                    {
                        y: 100,
                    }
                )

                tlTargets.from(
                    ".targets",
                    {
                        y: 100,
                    }
                )
            }, 1000);
        }, target.value);
    })

</script>

<style scoped>
    .container {
        margin-bottom: 100px;
    }

    h5 {
        font-size: 20px;
        font-weight: 700;
        color: #3DB8D8;
        margin-bottom: 10px;
    }

    hr {
        border: 1px solid #3DB8D8;
        margin-bottom: 50px;
    }

    h2 {
        font-weight: 700;
    }

    p {

        span {
            color: #3DB8D8;
        }
    }

    .targets {

        figure {

            img {
                display: block;
                width: 100%;
                height: auto;
            }
        }

        .single-target {

            h4 {
                color: #3DB8D8;
                font-weight: 700;
                font-size: 20px;
                margin-bottom: 20px;
            }
        }

    }
</style>