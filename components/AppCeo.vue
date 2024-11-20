<template>
    <section ref="ceo" id="ceo-section" class="mt-80 mx-auto px-4">
        <div class="container lg:flex py-20 mx-auto px-4">
            <div class="basis-1/2 flex justify-center relative">
                <figure class="-mt-40">
                    <img src="../assets/img/gianluca-sgambati-ceo-2.webp" alt="metodo-immobiliare-gianluca-sgambati-ceo" width="370">
                </figure>
                <div class="name-tag absolute bottom-[-5%] right-[5%] lg:right-[15%]">
                    <h6>Gianluca Sgambati</h6>
                    <span>CEO & Founder</span>
                </div>
            </div>
            <div class="basis-1/2 right-half mt-20 lg:mt-0">
                <h2 class="text-[35px] lg:text-[40px]">Duis in felis eu enim ullamcorper placerat sit amet in sapien
                </h2>
                <p class="text-[15px] lg:text-[18px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius et tellus eget condimentum. Nam
                    sit amet venenatis urna. Cras ut lacus quis quam aliquam interdum. Phasellus eu odio nibh. Donec
                    enim ex, commodo scelerisque leo ultricies, luctus gravida diam. Fusce ut tortor vel libero
                    vulputate imperdiet. Morbi nec volutpat ligula, a pretium diam. Vivamus pretium id purus vitae
                    congue.
                </p>
            </div>

        </div>
    </section>
</template>

<script setup>

    import { onMounted, onUnmounted, ref } from 'vue';
    import gsap from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);

    const ceo = ref();
    let ctx;

    onMounted(() => {
        ctx = gsap.context((self) => {
            setTimeout(() => {

                let tlCeo = gsap.timeline({
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
                        y: 200,
                    }
                )

            }, 1000);
        }, results.value);
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