<template>
    <section ref="aumenta">
        <div class="slide1 sm:container flex flex-col justify-center items-center text-white z-[-1] my-[50px] lg:mx-auto mx-[20px]">
            <svg class="title" width="100%" height="100%" preserveAspectratio="xMinYMin">
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white">
                    <tspan class="main-text lg:text-[260px] text-[80px] block">aumenta</tspan>
                    <tspan class="sub-text lg:text-[40px] hidden lg:block block" x="50%" y="70%">le acquisizioni e le vendite</tspan>
                    <tspan class="sub-text lg:hidden text-[20px] block" x="50%" y="60%">le acquisizioni e le vendite</tspan>
                </text>
            </svg>
        </div>
        <div class="slide-finale flex flex-col justify-center items-center gap-8">
            <h2>Diventa il <span>leader</span> nella tua zona come:</h2>
            <div class="logo-carousel flex gap-8">
                <figure v-for="element in logos.companyLogos" class="single-logo">
                    <img :src="`/partnerLogos/${element.src}`" :alt="element.title" width="200">
                </figure>
                <!-- <figure v-for="element in 10" class="single-logo">
                    <img
                      src="https://picsum.photos/200/300"
                      alt="element.title"
                      width="200"
                    />
                </figure> -->
            </div>
        </div>
    </section>
</template>




<script setup>
    import { useLogosStore } from '~/store/companyLogos'
    import { useAnimationsStore } from '~/store/gsapAnimations'
    const logos = useLogosStore()
    const animation = useAnimationsStore()

    import { onMounted, onUnmounted, ref } from 'vue';
    const { $gsap, $ScrollTrigger } = useNuxtApp()
    
    
    const aumenta = ref();
    let ctx;
    
    onMounted(() => {
      ctx = $gsap.context((self) => {
        setTimeout(() => {
          let tl = $gsap.timeline({
            force3D: false,
            scrollTrigger: {
              trigger: '.slide1',
              scrub: true,
              pin: true,
              start: 'center center',
              endTrigger: '.slide-finale',
              end: 'bottom top',
              // markers: true,
            },
          });
    
          tl.to(
            '.slide1',
            {
              borderColor: '#00101C',
            },
            '-=0.5'
          );
    
          tl.to('.slide1', {
            scale: 50,
            ease: 'sine.in',
            transformOrigin: 'center center',
          });
          tl.to(
            '.slide1',
            {
              backgroundColor: 'white',
              duration: 0.3,
            },
            '-=0.3'
          );
          tl.to(
            '.sub-text',
            {
              opacity: 0,
            },
            '-=1'
          );
          tl.fromTo(
            '.slide1',
            {
              opacity: 1,
            },
            {
              opacity: 0,
              ease: 'slow',
            }
          );
          tl.from('.slide-finale', {
            opacity: 0,
          });
    
          let tl2 = $gsap.timeline({
            force3D: false,
            scrollTrigger: {
              trigger: '.slide-finale',
              scrub: true,
              pin: true,
              start: 'bottom bottom',
              end: 'bottom bottom',
              // markers: true,
            },
          });
    
          tl2.to('.slide1', {
            display: 'none',
          });
    
          const singleLogo = $gsap.utils.toArray('.single-logo'),
            loop = animation.horizontalLoop(singleLogo, {
              repeat: true,
              speed: 0.5,
            });
        }, 1000);
      }, aumenta.value); // <- Scope!
    });
    
    onUnmounted(() => {
      ctx.revert(); // <- Easy Cleanup!
    });
</script>


<style scoped>

    .slide1 {
        height: 80vh;
        max-width: 1500px;
        border: 2px solid #3DB8D8;
        border-radius: 50px;
        /* margin: 50px auto; */

        /* h2 {
            margin-top: -250px;
            font-size: 40px;

        } */

    }

    .title .main-text {
        font-weight: 900;
    }


    .slide-finale {
        margin-top: -500px;
        height: 700px;
        overflow: hidden;
        /* border: 2px solid green; */

        h2 {
            margin-top: -450px;

            span {
                color: #3DB8D8;
            }
        }
    }

    .logo-carousel {
        width: max-content;
    }
</style>