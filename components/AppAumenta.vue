<template>
    <section>
        <!-- SVG content -->
        <div class="section__content">
            <svg>
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
                    Rocketseat
                </text>
            </svg>
        </div>

        <!-- Video content -->
        <section>
            <video src="https://assets.codepen.io/605876/chameleon.mp4" autoplay playsinline muted loop></video>
            <div class="section__content">
                <p>
                    Animations that run off the main thread. That can be driven by either
                    the scroll position of a container or an element's position within a
                    container! No JavaScript.<br />Pretty cool.
                </p>
            </div>
        </section>

        <!-- End text -->
        <section>
            <div class="section__content">
                <h2>the end.</h2>
            </div>
        </section>
    </section>
</template>

<script setup lang="ts">
    import { ref, onMounted, nextTick } from 'vue'

    const target = ref(null)

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                triggerAnimation()
            }
        },
        {
            threshold: 0.5
        }
    )

    onMounted(() => {
        nextTick(() => {
            if (target.value) {
                observer.observe(target.value)
            }
        })
    })

    const triggerAnimation = () => {
        // Fade-in animation for text
        const textElement = document.querySelector('text') as SVGTextElement
        if (textElement) {
            textElement.setAttributeNS(null, 'font-size', 'clamp(2rem, 10vw + 1rem, 10rem)')
            textElement.setAttributeNS(null, 'font-weight', '600')
            textElement.style.opacity = '0.4'
            textElement.style.transform = 'translate(-50%, -50%) scale(1)'
        }

        // Blow-out animation for SVG
        const svgElement = document.querySelector('svg') as SVGSVGElement
        if (svgElement) {
            svgElement.style.animation = 'blow-out 1s ease-in forwards'
        }

        // Fade-in animation for video
        const videoElement = document.querySelector('video') as HTMLVideoElement
        if (videoElement) {
            videoElement.style.opacity = '1'
            videoElement.style.filter = 'none'
        }

        // Fade-in animation for paragraph
        const pElement = document.querySelector('p') as HTMLElement
        if (pElement) {
            pElement.style.opacity = '1'
            pElement.style.fontSize = 'clamp(1.625rem, 2vw + 1rem, 8rem)'
            pElement.style.lineHeight = '1'
            pElement.style.width = '30ch'
            pElement.style.maxWidth = 'calc(100% - 4rem)'
            pElement.style.position = 'fixed'
            pElement.style.top = '50%'
            pElement.style.left = '50%'
            pElement.style.translate = '-50% -50%'
        }

        // End text animation
        const endTextElement = document.querySelector('h2') as HTMLElement
        if (endTextElement) {
            endTextElement.style.fontSize = 'clamp(2rem, 3vw + 1rem, 8rem)'
        }

        // Trigger CSS animations
        const styleElement = document.createElement('style')
        styleElement.textContent = `
        @keyframes blow-out {
          to { transform: translate3d(0.05ch, 0, 99vh); }
        }
        @keyframes fade-in {
          to {
            opacity: var(--opacity, 0.2);
          }
        }
        @keyframes fade-out {
          to {
            opacity: 0;
          }
        }
      `
        document.head.appendChild(styleElement)
    }

    // Add other necessary methods and properties
</script>




<style scoped lang="scss">
    /* Include all the CSS here */
    *,
    *:after,
    *:before {
        box-sizing: border-box;
    }

    body {
        display: grid;
        place-items: center;
        min-height: 100vh;
        font-family: "SF Pro Text", "SF Pro Icons", "AOS Icons", "Helvetica Neue", Helvetica, Arial, sans-serif, system-ui;
        color: hsl(0 0% 100%);
        overflow-x: hidden;
    }

    section {
        min-height: 100vh;
        width: 100vw;
        view-timeline-name: --section;
    }

    section:nth-of-type(1),
    section:nth-of-type(3) {
        background: hsl(0 0% 100%);
    }

    main {
        overflow: auto;
        overflow-x: hidden;
        height: 100vh;
        width: 100vw;
    }

    h2 {
        font-size: clamp(2rem, 3vw + 1rem, 8rem);
    }

    .section__content {
        min-height: 100vh;
        width: 100vw;
        display: grid;
        place-items: center;
        position: sticky;
        top: 0;
        overflow: hidden;
    }

    section:nth-of-type(1),
    section:nth-of-type(3) {
        color: hsl(0 0% 0%);
    }

    section:nth-of-type(1) .section__content {
        overflow: hidden;
    }

    section:nth-of-type(2) {
        z-index: 2;
        color: hsl(0 0% 0%);
        min-height: 200vh;
        background: hsl(0 0% 0%);
    }

    section:nth-of-type(2) p {
        --opacity: 1;
        color: hsl(0 0% 100%);
        font-size: clamp(1.625rem, 2vw + 1rem, 8rem);
        letter-spacing: 0;
        font-weight: bold;
        line-height: 1;
        width: 30ch;
        max-width: calc(100% - 4rem);
        position: fixed;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        opacity: 0;
        animation: fade-in both linear, fade-out both linear;
        animation-timeline: --section;
        animation-range: entry 10% entry 35%, exit 0% exit 25%;
    }

    section:nth-of-type(1) svg {
        --opacity: 1;
        animation: blow-out both ease-in, fade-in both ease-in;
        font-weight: 600;
        animation-timeline: --section;
        animation-range: exit-crossing 10% exit 0%, exit-crossing 10% exit-crossing 25%;
        font-size: clamp(2rem, 10vw + 1rem, 10rem);
        transform-origin: 50% 50%;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 50%;
        left: 50%;
        opacity: 0.4;
        translate: -50% -50%;
        overflow: hidden;
    }

    section:nth-of-type(3) {
        z-index: 4;
    }

    section:nth-of-type(3) svg {
        width: 30vmin;
        position: absolute;
        stroke: hsl(0 0% 0%);
        right: 10%;
        bottom: 10%;
        rotate: 10deg;
    }

    section:nth-of-type(1) .section__content {
        overflow: visible;
        transform-style: preserve-3d;
        perspective: 100vh;
    }

    svg text {
        font-size: clamp(2rem, 6vw + 1rem, 6rem);
        font-weight: 600;
    }

    /* Add keyframes and animations here */
    @keyframes blow-out {
        to {
            transform: translate3d(0.05ch, 0, 99vh);
        }
    }

    section:nth-of-type(1) {
        height: 200vh;
    }

    video {
        position: fixed;
        inset: 0;
        object-fit: cover;
        width: 100%;
        height: 100vh;
        filter: saturate(1) brightness(1);
        opacity: 0;
        animation: fade-in both linear, fade-out both linear;
        animation-timeline: --section;
        animation-range: entry 0% entry 25%, exit 10% exit 35%;
    }

    @keyframes fade-in {
        to {
            opacity: var(--opacity, 0.2);
        }
    }

    @keyframes fade-out {
        to {
            opacity: 0;
        }
    }
</style>