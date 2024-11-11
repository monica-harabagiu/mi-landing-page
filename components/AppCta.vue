<template>
    <section class="cta-section container relative mx-auto px-4">
        <figure class="absolute element-1 z-10">
            <img src="../assets/img/graphic-elements/cta-element-1.webp" alt="" width="150">
        </figure>
        <div class="cta-box lg:flex overflow-hidden gap-20 items-center mb-32 relative flex-row-reverse">  
            <div class="left-image lg:absolute lg:top-0 lg:bottom-0 lg:left-0 lg:w-[45%] lg:h-full h-[400px]">
                
            </div>
            <div class="basis-1/2 lg:p-20 p-10">
                <h2 class="text-[35px] lg:text-[40px]">Vuoi acquisire nuovi incarichi di vendita grazie al nostro Metodo?</h2>
                <p class="mb-10">
                    Sarai contattato telefonicamente da un nostro consulente per stabilire se ci sono i requisiti per raggiungere i tuoi obiettivi aziendali.
                </p>
                <a href="https://form.typeform.com/to/jd4BaOPX" target="_blank">
                    <button class="btn btn-main">Prenota una consulenza gratuita</button>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>

    const { $gsap, $ScrollTrigger,} = useNuxtApp()

    onMounted(() => {

        let tlCta = $gsap.timeline({
            scrollTrigger: {
                trigger: ".cta-section",
                start: "bottom bottom",
                end: "bottom top",
                scrub: true,
                ease: "sine.inOut",
                // markers: true,
            },
        })

        tlCta.to(
            ".element-1",
            {
                y: 20,
            }
        )

    })

</script>

<style scoped>

    .left-image {
        background-image: url("../assets/img/metodo-immobiliare-background-2.webp");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .element-1 {
        left: 40%;
        top:  -5%;
    }

    .cta-box {
        border: 2px solid #3DB8D8;
        border-radius: 20px;
    }

    h2 {
        font-weight: 800;
        margin-bottom: 30px;
    }

</style>