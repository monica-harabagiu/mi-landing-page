<template>
    <section id="targets-section" class="container mt-32">
        
        <h5>Target</h5>
        <hr>

        <div class="flex justify-between targets-intro">
            <div class="basis-1/2">
                <h2>Tutta la nostra esperienza nel marketing immobiliare a tua disposizione</h2>
            </div>
            <div>
                <a href="#">
                    <button class="btn btn-main">Prenota una consulenza gratuita</button>
                </a>
            </div>
        </div>

        <div class="targets flex mt-6 gap-20">
            <div class="single-target basis-1/3">
                <figure>
                    <img src="../assets/img/graphic-elements/target-element-1.webp" alt="">       
                </figure>
                <h4>Consulenti Immobiliari</h4>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius et tellus eget condimentum</span>
            </div>

            <div class="single-target basis-1/3">
                <figure>
                    <img src="../assets/img/graphic-elements/target-element-2.webp" alt="">
                </figure>
                <h4>Agenzie Immobiliari</h4>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius et tellus eget condimentum</span>
            </div>

            <div class="single-target basis-1/3">
                <figure>
                    <img src="../assets/img/graphic-elements/target-element-3.webp" alt="">
                </figure>
                <h4>Investitori Immobiliari</h4>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius et tellus eget condimentum</span>
            </div>
        </div>

    </section>
</template>

<script setup>

    const { $gsap, $ScrollTrigger,} = useNuxtApp()

    onMounted(() => {

        let tlTargets = $gsap.timeline({
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
        font-size: 40px;
        font-weight: 700;
    }

    p {
        font-size: 18px;
        margin-top: 30px;

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