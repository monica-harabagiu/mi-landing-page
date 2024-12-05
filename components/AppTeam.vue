<template>
    <section ref="team" id="team-section">
        <div class="container mx-auto px-4">

            <div class="lg:flex lg:gap-28">
                <div class="basis-1/2">
                    <h2 class="text-[35px] lg:text-[40px]">Giovani, smart e determinati</h2>
                    <p class="text-[15px] lg:text-[18px]">
                        Il nostro obiettivo? Portare risultati sempre più grandi ai nostri partner grazie alle nostre
                        capacità nel mondo del digital marketing immobiliare, continuando ad affinarle giorno dopo
                        giorno.
                    </p>
                    <p class="text-[15px] lg:text-[18px]">
                        Un team specializzato le cui competenze sono volte a far arrivare notizie, gestire campagn e
                        creare asset brandizzati, offrendo una vasta gamma di servizi mirati per curare l'immagine del
                        cliente portandogli incarichi.
                    </p>
                </div>

                <div class="overflow-hidden box-video width-[560px]">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/_-tjGmnf1TA?si=DLiwgEDRI-WBby1n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            <div class="team-box overflow-hidden">
                <div class="team-slider flex w-full gap-7 lg:gap-0">

                    <div v-for="element in teams.companyTeam" class="single-team text-center w-1/2 lg:w-1/5 shrink-0">
                        <figure class="flex justify-center mb-5">
                            <img :src="`/teamMembers/${element.src}`" :alt="element.alt" width="100">
                        </figure>
                        <h5>{{ element.name }}</h5>
                        <h6>{{ element.role }}</h6>
                    </div>

                </div>
            </div>
        </div>

    </section>
</template>

<script setup>

    import { onMounted, onUnmounted, ref } from 'vue';

    import { useTeamsStore } from '~/store/companyTeam'
    import { useAnimationsStore } from '~/store/gsapAnimations'

    const teams = useTeamsStore()
    const animation = useAnimationsStore()

    const { $gsap, $ScrollTrigger } = useNuxtApp()

    const team = ref();
    let ctx;


    onMounted(() => {
        ctx = $gsap.context((self) => {
            setTimeout(() => {

                let tlTeam = $gsap.timeline({
                    force3D: false,
                    scrollTrigger: {
                        trigger: "#team-section",
                        start: "top bottom",
                        end: "bottom",
                        scrub: true,
                        ease: "power2.inOut",
                        // markers: true,
                    },
                })

                tlTeam.from(
                    ".team-box",
                    {
                        y: 200,
                    }
                )

                const singleTeam = $gsap.utils.toArray(".single-team"),
                    loop = animation.horizontalLoop(singleTeam, { repeat: true, speed: 0.5 });

            }, 1000);
        }, results.value);

    })

</script>

<style scoped>
    section {
        background-image: url(../assets/img/metodo-immobiliare-background-1.webp);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding-top: 200px;
        padding-bottom: 300px;
        color: #00101C;
        margin-bottom: 200px;

        h2 {
            font-weight: 800;
            margin-bottom: 30px;
        }

        p {
            margin-bottom: 20px;
        }

        .box-video {
            border: 2px solid #3DB8D8;
            border-radius: 15px;
        }

        .team-box {
            border: 2px solid #3DB8D8;
            background-color: #00101C;
            color: white;
            padding: 40px;
            margin-top: 80px;
            margin-bottom: -400px;
            border-radius: 20px;

            .team-slider {

                h5 {
                    font-size: 20px;
                    font-weight: 700;
                }

                h6 {
                    font-size: 16px;
                }
            }
        }
    }
</style>