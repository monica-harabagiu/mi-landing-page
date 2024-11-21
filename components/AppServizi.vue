<template>
    <section ref="services" id="services-section" class="container mt-40 mx-auto px-4">

        <h5>Servizi</h5>
        <hr>

        <div class="lg:flex justify-between services-intro">
            <div class="basis-1/2">
                <h2 class="text-[35px] lg:text-[40px]">Ricevi notizie targetizzate alla vendita e crea il tuo team di
                    professionisti</h2>
                <p class="text-[15px] lg:text-[18px]">Grazie a strategie mirate e personalizzate <span>in base alle tue
                        esigenze</span> ti forniamo un asset completo per raggiungere i tuoi obiettivi</p>
            </div>
            <div class="mt-7 lg:mt-0">
                <a href="https://form.typeform.com/to/jd4BaOPX" target="_blank">
                    <button class="btn btn-main">Prenota una consulenza gratuita</button>
                </a>
            </div>
        </div>

        <div class="services lg:flex lg:mt-6 mt-16 gap-20">
            <div class="single-service service-1 basis-1/3">
                <figure>
                    <img src="../assets/img/graphic-elements/services-element-1.webp" alt="illustrazione-con-razzo-e-bersagli">
                </figure>
                <h4>Incrementa le acquisizioni e le vendite</h4>
                <span>Ottieni immediatamente un metodo testato e continuativo per ricevere notizie profilate</span>
            </div>

            <div class="single-service basis-1/3">
                <figure>
                    <img src="../assets/img/graphic-elements/services-element-2.webp" alt="illustrazione-con-computer-e-statistiche">
                </figure>
                <h4>Migliora il tuo posizionamento online</h4>
                <span>Utilizza strategie di marketing mirate e focalizzate per migliorare il tuo posizionamento online e
                    diventare il leader di zona</span>
            </div>

            <div class="single-service basis-1/3">
                <figure>
                    <img src="../assets/img/graphic-elements/services-element-3.webp" alt="illustrazione-con-candidati">
                </figure>
                <h4>Recruiting</h4>
                <span>Attrai candidati interessati a intraprendere un nuovo percorso professionale nel settore
                    immobiliare</span>
            </div>
        </div>

    </section>
</template>

<script setup>

    import { onMounted, onUnmounted, ref } from 'vue';
    const { $gsap, $ScrollTrigger } = useNuxtApp()

    const services = ref();
    let ctx;

    onMounted(() => {
        ctx = $gsap.context((self) => {
            setTimeout(() => {

                let tlServices = $gsap.timeline({
                    force3D: false,
                    scrollTrigger: {
                        trigger: ".services-intro",
                        start: "top bottom",
                        endTrigger: "#services-section",
                        end: "bottom bottom",
                        scrub: true,
                        // ease: "sine.inOut",
                        // markers: true,
                    },
                })

                tlServices.from(
                    ".services-intro",
                    {
                        y: 100,
                    }
                )

                tlServices.from(
                    ".services",
                    {
                        y: 100,
                    }
                )

            }, 1000);
        }, services.value);
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
        margin-top: 30px;

        span {
            color: #3DB8D8;
        }
    }

    .services {

        figure {

            img {
                display: block;
                width: 100%;
                height: auto;
            }
        }

        .single-service {

            h4 {
                color: #3DB8D8;
                font-weight: 700;
                font-size: 20px;
                margin-bottom: 20px;
            }
        }
    }
</style>