<script>
    const pop = new Audio('/assets/audio/pop.mp3');
    const whoosh = new Audio('/assets/audio/whoosh.mp3');

    let active = false;

    function handleClick() {
        if (active) {
            whoosh.play();
        } else {
            pop.play();
        }
        active = !active;
    }
</script>

<div class="attribution" class:active={active} on:click={handleClick}>
    <img  class="attribution__img" src="/assets/img/attribution-avatar.png" alt="ApplePieGiraffe avatar">
    <div class="attribution__bubble">
        <p class="attribution__text">Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. <br> Coded by <a href="https://github.com/ApplePieGiraffe" target="_blank">ApplePieGiraffe</a>.</p>
    </div>
</div>

<style>
    /* attribution */

    .attribution {
        position: fixed;
        right: 4rem;
        bottom: 2.5rem;
        opacity: .5;
        transition: opacity .3s;
    }

    .attribution:hover {
        opacity: 1;
    }

    /* image */

    .attribution__img {
        width: 7rem;
        border-radius: 50%;
        box-shadow: 4px 8px 8px -2px rgba(0, 0, 0, .2);
        cursor: pointer;
        transition: transform .3s ease-out;
    }

    .attribution__img:hover {
        transform: rotate(-360deg);
    }

    .attribution__img:active {
        transform: scale(1.2);
    }

    /* bubble */

    .attribution__bubble {
        /* position */
        position: absolute;
        top: -20rem;
        left: -21.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20rem;
        width: 28rem;
        /* background image */
        background: url('/assets/img/bubble.png');
        background-size: contain;
        background-repeat: no-repeat;
        /* other */
        visibility: hidden;
        transform-origin: bottom right;
        transform: translate(0, 2rem) rotate(-10deg) scale(.5);
        opacity: 0;
        transition: all .1s;
    }

    /* text */

    .attribution__text {
        width: 14rem;
        margin-top: -1rem;
        font-family: 'Patrick Hand', cursive;
        font-size: 2rem;
        line-height: 2.25rem;
        text-align: center;
    }

    .attribution__text a {
        color: #FDFDCC;
    }

    /* active */

    .attribution.active {
        opacity: 1;
    }

    .active .attribution__img {
        transform: rotate(-360deg);
    }

    .active .attribution__img:active {
        transform: scale(1.2);
    }

    .active .attribution__bubble {
        visibility: initial;
        transform: translate(0) rotate(0) scale(1);
        opacity: 1;
        transition: all .3s;
    }
</style>