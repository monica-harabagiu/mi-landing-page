<template>
    <section id="team-section">
        <div class="container">

            <div class="flex">
                <div class="basis-1/2">
                    <h2>Giovani, smart e determinati</h2>
                    <p>
                        Il nostro obiettivo? Portare risultati sempre più grandi ai nostri partner grazie alle nostre capacità nel mondo del digital marketing immobiliare, continuando ad affinarle giorno dopo giorno.
                    </p>
                    <p>
                        Un team specializzato le cui competenze sono volte a far arrivare notizie, gestire campagn e creare asset brandizzati, offrendo una vasta gamma di servizi mirati per curare l'immagine del cliente portandogli incarichi.
                    </p>
                </div>
            </div>

            <div class="team-box">
                <div class="team-slider flex">  

                    <div v-for="element in teams.companyTeam" class="single-team text-center basis-1/5">
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

    import { useTeamsStore } from '~/store/companyTeam'
    const { $gsap, $ScrollTrigger,} = useNuxtApp()

    const teams = useTeamsStore()

    onMounted(() => {

        let tlTeam = $gsap.timeline({
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
            font-size: 40px;
            font-weight: 800;
            margin-bottom: 30px;
        }

        p {
            margin-bottom: 20px;
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