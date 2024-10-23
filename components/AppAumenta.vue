<template>
    <div id="sections-animation">

        <section class="section-1 text-center flex flex-col justify-center container">
            <h1>aumenta</h1>
            <p>le acquisizioni e le vendite</p>
        </section>

        <section class="section-2 text-center">
            <p>Diventa il <span>leader</span> nella tua zona come:</p>
        </section>

    </div>
</template>


<script>
 
</script>


<style scoped>

    #sections-animation {
        padding-block: 100px;

        position: sticky;
        top: 0;
	    overflow: hidden;
    }

    .section-1 {
        height: 80vh;
        border: 2px solid #3DB8D8;
        border-radius: 30px;

        animation: blow-out both ease-in;
        overflow: hidden;
        animation-timeline: --section;
        animation-range: exit-crossing 10% exit 0%, exit-crossing 10% exit-crossing 25%;


        h1 {
            font-size: 18em;
            font-weight: 900;
            line-height: 1em;
        }

        p {
            font-size: 25px;
        }
    }

    @keyframes blow-out {
	    to { transform: translate3d(0.05ch, 0, 99vh); }
    }

    .section-2 {
        padding-block: 50px;

        p {
            font-size: 18px;

            span {
                color: #3DB8D8;
            }
        }
    }
</style>