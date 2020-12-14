<script>
    // components
	import Form from './Form.svelte';
</script>

<main>
    <h1>Publish Your Podcasts <br> <span>Everywhere.</span></h1>
    <p>Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>
    <div class="logos">
        <img src="/assets/img/spotify.svg" alt="Spotify logo">
        <img src="/assets/img/apple-podcast.svg" alt="Apple Podcast logo">
        <img src="/assets/img/google-podcasts.svg" alt="Google Podcasts logo">
        <img src="/assets/img/pocket-casts.svg" alt="Pocket Casts logo">
    </div>
    <Form/>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 90.375rem;
        padding: 3rem;
        background-color: transparent;
    }

    h1, p {
        font-weight: 300;
        text-align: center;
    }
    
    h1 {
        margin-bottom: 2rem;
        color: var(--color-pale-green);
        font-size: 3.375rem;
        line-height: 4.75rem;
        text-transform: uppercase;
    }

    h1 span {
        color: var(--color-white);
    }

    p {
        max-width: 445px;
        margin-bottom: 4rem;
        color: var(--color-light-greyish-blue);
        font-size: 1.875rem;
        line-height: 3.125rem;
    }

    .logos {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 50rem;
        margin-bottom: 6rem;
    }

    /* logos */

    img:nth-child(1) {
        width: 7rem;
    }

    img:nth-child(2) {
        width: 5.625rem;
    }

    img:nth-child(3) {
        width: 9rem;
    }

    img:nth-child(4) {
        width: 9.625rem;
    }

    /* media queries */

    @media only screen and (min-width: 600px) {
        main {
            align-items: flex-start;
            padding: 0;
            padding-top: 11rem;
            background-color: var(--color-very-dark-blue);
        }

        h1, p {
            text-align: start;
        }

        h1 {
            margin-bottom: 4rem;
            font-size: 6rem;
            line-height: 7rem;
        }

        p {
            margin-bottom: 5rem;
            font-size: inherit;
            line-height: inherit;
        }

        .logos {
            order: 1;
            justify-content: flex-start;
            max-width: initial;
            margin-top: 8rem;
            margin-bottom: 0;
        }

        /* logos */

        .logos img {
            width: initial;
        }

        img:nth-child(1) {
            margin-right: 5rem;
        }

        img:nth-child(2) {
            margin-right: 5rem;
        }

        img:nth-child(3) {
            margin-right: 3.375rem;
        }
    }

    @media only screen and (min-width: 1100px) {
        main {
            padding: 0;
            padding-top: 11rem;
        }

        h1 {
            margin-bottom: 3rem;
            font-size: 6.5rem;
            line-height: 7.75rem;
        }

        /* logos */

        .logos img {
            width: initial;
        }

        img:nth-child(1) {
            margin-right: 5rem;
        }

        img:nth-child(2) {
            margin-right: 5rem;
        }

        img:nth-child(3) {
            margin-right: 3.375rem;
        }
    }
</style>