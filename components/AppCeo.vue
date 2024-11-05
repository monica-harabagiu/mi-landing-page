<template>
    <section id="ceo-section" class="mt-80">
        <div class="container flex py-20">
            <div class="basis-1/2 flex justify-center relative">
                <figure class="-mt-40">
                    <img src="../assets/img/gianluca-sgambati-ceo.webp" alt="" width="370">
                </figure>
                <div class="name-tag absolute">
                    <h6>Gianluca Sgambati</h6>
                    <span>CEO & Founder</span>
                </div>
            </div>
            <div class="basis-1/2 right-half">
                <h2>Duis in felis eu enim ullamcorper placerat sit amet in sapien</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius et tellus eget condimentum. Nam sit amet venenatis urna. Cras ut lacus quis quam aliquam interdum. Phasellus eu odio nibh. Donec enim ex, commodo scelerisque leo ultricies, luctus gravida diam. Fusce ut tortor vel libero vulputate imperdiet. Morbi nec volutpat ligula, a pretium diam. Vivamus pretium id purus vitae congue.
                </p>
            </div>

        </div>
    </section>
</template>

<script setup>

    const { $gsap, $ScrollTrigger,} = useNuxtApp()

    onMounted(() => {

        let tlCeo = $gsap.timeline({
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
                y: 200,
            }
        )
    })

</script>

<style scoped>
    section {
        background-color: #AEEEFE;

        .name-tag {

            background-color: #00101C;
            border: 2px solid #3DB8D8;
            border-radius: 5px;
            padding: 5px 20px;
            transform: rotate(-15deg);
            bottom: -5%;
            right: 15%;
            
            h6 {
                font-size: 20px;
            }

            span {
                font-size: 14px;
            }
        }

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