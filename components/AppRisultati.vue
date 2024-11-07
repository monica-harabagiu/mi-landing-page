<template>
    <section id="results" class="container pt-14 -mt-20 relative">
        <h5>Risultati</h5>
        <hr>

        <figure class="results-element-1 absolute right-10">
            <img src="../assets/img/graphic-elements/result-element-1.webp" alt="" width="70">
        </figure>
        <figure class="results-element-2 absolute right-0 top-60 rotate-45">
            <img src="../assets/img/graphic-elements/hero-element-8.webp" alt="" width="40">
        </figure>
        

        <div class="flex gap-52 justify-between my-32">

            <div class="boxes basis-1/3 ms-20 relative">
                <div id="box-1"class="result-box">
                    <div class="flex items-center gap-4 mb-8">
                        <svg width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15" cy="16" r="15" fill="#3DB8D8" fill-opacity="0.35"/>
                            <path d="M7 15.3833L11.8295 21.5926C11.9925 21.8044 12.2013 21.9765 12.4403 22.0961C12.6792 22.2155 12.9422 22.2793 13.2094 22.2825C13.4722 22.2857 13.7325 22.23 13.9712 22.12C14.2098 22.0097 14.421 21.8477 14.5892 21.6457L29.9976 3" stroke="#3DB8D8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h6>TI mostreremo:</h6>
                    </div>
                    <p>
                        Come <span>costruire un sistema</span> di attrazione e profilazione di clienti venditori.
                    </p>
                </div>
    
                <div id="box-2"class="result-box top-[30px]">
                    <div class="flex items-center gap-4 mb-8">
                        <svg width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15" cy="16" r="15" fill="#3DB8D8" fill-opacity="0.35"/>
                            <path d="M7 15.3833L11.8295 21.5926C11.9925 21.8044 12.2013 21.9765 12.4403 22.0961C12.6792 22.2155 12.9422 22.2793 13.2094 22.2825C13.4722 22.2857 13.7325 22.23 13.9712 22.12C14.2098 22.0097 14.421 21.8477 14.5892 21.6457L29.9976 3" stroke="#3DB8D8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h6>TI mostreremo:</h6>
                    </div>
                    <p>
                        Come i nostri clienti utilizzano l'<span>online marketing</span> in maniera profittevole.                    
                    </p>
                </div>
    
                <div id="box-3"class="result-box top-[60px]">
                    <div class="flex items-center gap-4 mb-8">
                        <svg width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15" cy="16" r="15" fill="#3DB8D8" fill-opacity="0.35"/>
                            <path d="M7 15.3833L11.8295 21.5926C11.9925 21.8044 12.2013 21.9765 12.4403 22.0961C12.6792 22.2155 12.9422 22.2793 13.2094 22.2825C13.4722 22.2857 13.7325 22.23 13.9712 22.12C14.2098 22.0097 14.421 21.8477 14.5892 21.6457L29.9976 3" stroke="#3DB8D8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h6>TI mostreremo:</h6>
                    </div>
                    <p>
                        Le <span>strategie</span> delle agenzie milionarie che crescono di anno in anno.
                    </p>
                </div>
    
                <div id="box-4"class="result-box top-[90px]">
                    <div class="flex items-center gap-4 mb-8">
                        <svg width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15" cy="16" r="15" fill="#3DB8D8" fill-opacity="0.35"/>
                            <path d="M7 15.3833L11.8295 21.5926C11.9925 21.8044 12.2013 21.9765 12.4403 22.0961C12.6792 22.2155 12.9422 22.2793 13.2094 22.2825C13.4722 22.2857 13.7325 22.23 13.9712 22.12C14.2098 22.0097 14.421 21.8477 14.5892 21.6457L29.9976 3" stroke="#3DB8D8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h6>TI mostreremo:</h6>
                    </div>
                    <p class="mb-20">
                        Come avere la fila di persone che vogliono collaborare con la tua agenzia.
                    </p>
                    <a href="https://form.typeform.com/to/jd4BaOPX" target="_blank">
                        <button class="btn btn-main">Prenota una consulenza gratuita</button>
                    </a>
                </div>
            </div>

            <div class="numbers basis-1/3 flex flex-col gap-14">
                <div class="number">
                    <span>90%</span>
                    <p>Obiettivi prefissati raggiunti</p>
                </div>
                <div class="number">
                    <span>+200</span>
                    <p>Agenzie gestite negli ultimi 3 anni</p>
                </div>
                <div class="number">
                    <span>+15</span>
                    <p>Professionisti a tua disposizione</p>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>

    const { $gsap, $ScrollTrigger,} = useNuxtApp()

    onMounted(() => {

        const bottomScreen = window.innerHeight

        let tlBoxes = $gsap.timeline({
            scrollTrigger: {
                trigger: "#results",
                start: "top",
                pin: "#results",
                scrub: true,
                pinSpacing: true,
                // markers: true,
                toggleActions: "restart none restart none"
            },
        })

        tlBoxes.from(
            "#box-2",
            {
                y: bottomScreen,
                ease: "Power4.inOut",
                duration: 500,
            }
        )

        tlBoxes.from(
            "#box-3",
            {
                y: bottomScreen,
                ease: "Power4.inOut",
                duration: 500,
            }
        )

        tlBoxes.from(
            "#box-4",
            {
                y: bottomScreen,
                ease: "Power4.inOut",
                duration: 500,
            }
        )

        // let tlResultElements = $gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".results",
        //         start: "top top",
        //         end: "bottom top",
        //         scrub: true,
        //         ease: "sine.inOut",
        //         markers: true,
        //     },
        // })

        // tlResultElements.to(
        //     ".results-element-1",
        //     {
        //         y: 100
        //     }
        // )

    })

</script>

<style scoped>

    /* .container {
        height: 100vh;
    } */

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

    .boxes {

        #box-1 {
            --index: 1;
        }

        #box-2 {
            --index: 2;
        }

        #box-3 {
            --index: 3;
        }

        #box-4 {
            --index: 4;
        }

        .result-box {
            border: 2px solid #3DB8D8;
            border-radius: 20px;
            padding: 50px 30px;
            background-color: #00101C;
            position: absolute;

            h6 {
                font-size: 18px;
                font-weight: 700;
                color: #3DB8D8;
            }

            p {

                span {
                    color: #3DB8D8;
                    font-weight: 700;
                }
            }
        }
    }

    .numbers {

        .number {

            span {
                font-size: 120px;
                -webkit-text-stroke: 2px #fff;
                color: #00101C;
                font-weight: 900;
                line-height: 1;
            }

            p {
                font-size: 20px;
                font-weight: 800;
            }
        }
    }

</style>