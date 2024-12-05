<template>
    <section ref="ceo" id="ceo-section" class="mt-80 mx-auto px-4">
        <div class="container lg:flex py-20 mx-auto px-4">
            <div class="basis-1/2 flex justify-center relative">
                <figure class="lg:mx-[100px]">
                    <img src="../assets/img/gianluca-sgambati-ceo-4.webp" alt="metodo-immobiliare-gianluca-sgambati-ceo">
                </figure>
                <!-- <div class="name-tag absolute bottom-[-5%] right-[-5%] lg:right-[15%]">
                    <h6>Gianluca Sgambati</h6>
                    <span>CEO & Founder</span>
                </div> -->
                <!-- <div class="ceo-card relative -mt-40 px-1 py-4 lg:pt-7 w-5/6 flex flex-col">
                    <figure>
                        <img src="../assets/img/gianluca-sgambati-ceo-3.webp" alt="metodo-immobiliare-gianluca-sgambati-ceo">
                    </figure>
                    <div class="px-6">
                        <h3 class="mb-3 text-[20px] lg:text-[25px] font-bold text-[#3DB8D8]">
                            La mia missione
                        </h3>
                        <p>
                            Trasformare il <span class="font-bold">mercato immobiliare</span>, rendendolo <span class="font-bold">più efficiente e trasparente</span>, creando nuove opportunità di crescita per i nostri partner e offrendo un servizio di eccellenza.
                        </p>
                    </div>
                    <figure>
                        <img src="../assets/img/gianluca-sgambati-ceo-3.webp" alt="metodo-immobiliare-gianluca-sgambati-ceo">
                    </figure>
                    <div class="name-tag absolute bottom-[30%] right-[5%] lg:right-[2%]">
                        <h6>Gianluca Sgambati</h6>
                        <span>CEO & Founder</span>
                    </div>
                </div> -->
            </div>
            <div class="basis-1/2 right-half mt-20 lg:mt-0">
                <h2 class="text-[35px] lg:text-[40px]">Chi sono</h2>
                <p class="text-[15px] lg:text-[18px]">
                    Sono Gianluca Sgambati, <span class="font-bold">fondatore e CEO di Metodo Immobiliare e socio di altre due aziende attive nel settore immobiliare</span>. Il mio percorso è iniziato da zero, nel settore della ristorazione, ma negli ultimi anni ho dedicato la mia carriera a trasformare il  mercato immobiliare spesso visto come stagnante, <span class="font-bold">introducendo tecnologie ad alto impatto per offrire soluzioni più efficienti e moderne</span>.
                </p>
                <p class="text-[15px] lg:text-[18px] mt-4">
                    Con oltre 5 anni di esperienza, il mio obiettivo è <span class="font-bold">semplificare i processi di acquisizione clienti e migliorare le performance delle aziende immobiliari</span>, rendendo il settore più dinamico e innovativo.
                </p>
                <h4 class="text-[15px] lg:text-[18px] font-bold mt-7">Il nostro gruppo aziendale vanta:</h4>
                <ul class="text-[15px] lg:text-[18px] list-disc ms-5">
                    <li>Circa 10 milioni di euro di fatturato annuo</li>
                    <li>Due sedi in Italia, tra cui un ufficio di 1.500 mq a Torino</li>
                    <li>Oltre 60 professionisti nel team</li>
                </ul>
                <h4 class="text-[15px] lg:text-[18px] font-bold mt-7">La mia missione</h4>
                <p class="text-[15px] lg:text-[18px]">
                    Trasformare il <span class="font-bold">mercato immobiliare</span>, rendendolo <span class="font-bold">più efficiente e trasparente</span>, creando nuove opportunità di crescita per i nostri partner e offrendo un servizio di eccellenza.
                </p>
            </div>

        </div>
    </section>
</template>

<script setup>

    import { onMounted, onUnmounted, ref } from 'vue';
    const { $gsap, $ScrollTrigger } = useNuxtApp()

    const ceo = ref();
    let ctx;

    onMounted(() => {
        ctx = $gsap.context((self) => {
            setTimeout(() => {

                let tlCeo = $gsap.timeline({
                    force3D: false,
                    scrollTrigger: {
                        trigger: "#ceo-section",
                        start: "top bottom",
                        end: "bottom",
                        scrub: true,
                        ease: "power2.inOut",
                        // markers: true,
                    },
                })

                tlCeo.from(
                    ".name-tag",
                    {
                        y: 100,
                    }
                )

            }, 1000);
        }, ceo.value);
    })

</script>

<style scoped>
    section {
        background-color: #AEEEFE;

        /* .ceo-card {
            background-color: #00101C;
            border: 4px solid #3DB8D8;
            border-radius: 24px;

        }

        .name-tag {

            background-color: #00101C;
            border: 4px solid #3DB8D8;
            border-radius: 5px;
            padding: 5px 20px;
            transform: rotate(-15deg);

            h6 {
                font-size: 20px;
            }

            span {
                font-size: 14px;
            }
        } */

        .right-half {

            color: #00101C;

            h2 {
                font-size: 40px;
                font-weight: 800;
                margin-bottom: 20px;
            }
        }

    }
</style>