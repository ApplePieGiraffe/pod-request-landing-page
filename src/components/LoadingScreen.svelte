<script>
    
</script>

<div class="loading-screen">
    <div class="container">
        <img class="intro-logo" src="/assets/img/logo.svg" alt="Pod logo">
        <div class="divider"></div>
        <div class="mask"></div>
        <div class="intro-heading">Publish Your Podcasts <br> <span>Everywhere.</span></div>
    </div>
</div>

<style>
    .loading-screen {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        background-color: black;
    }

    .container {
        position: relative;
        display: flex;
        width: 88rem;
        align-items: center;
    }

    img,
    .divider,
    .mask,
    .intro-heading {
        position: absolute;
    }

    img,
    .mask {
        left: calc(50% + 2px);
    }

    .divider {
        left: 50%;
        width: 5px;
        height: 0rem;
        margin: 0 auto;
        background-color: white;
    }

    .mask {
        z-index: 20;
        align-self: 8rem;
        width: 40rem;
        height: 8rem;
        background-color: black;
    }
    
    .intro-heading {
        left: 50%;
        z-index: 30;
        color: var(--color-pale-green);
        font-size: 3rem;
        font-weight: 300;
        line-height: 4rem;
        text-align: center;
        text-transform: uppercase;
        opacity: 0;
    }

    .intro-heading span {
        color: var(--color-white);
    }
</style>