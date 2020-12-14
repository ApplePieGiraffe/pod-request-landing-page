<script>
    
</script>

<form>
    <input required type="email" placeholder="Email address" aria-label="Enter your email address">
    <button>Request Access</button>
</form>

<style>
    form {
        display: grid;
        grid-template-rows: 6rem 6rem;
        grid-row-gap: 2rem;
        width: 100%;
        max-width: 50rem;
    }

    input,
    button {
        border: none;
        border-radius: 10rem;
        font-family: inherit;
        line-height: inherit;
    }

    input {
        padding-left: 4rem;
        background-color: var(--color-greyish-blue);
        color: var(--color-white);

    }

    input::placeholder {
        color: var(--color-white);
        font-family: inherit;
        line-height: inherit;
        opacity: .5;
    }

    button {
        padding: 1rem 3.5rem;
        background-color: var(--color-pale-green);
        color: var(--color-very-dark-blue);
        font-size: 1.75rem;
        cursor: pointer;
        transition: background-color .3s;
    }

    button:hover {
        background-color: #B3FFE2;
    }

    @media only screen and (min-width: 600px) {
        form {
            grid-template-columns: 1fr max-content;
            grid-template-rows: 7rem;
        }

        input {
            grid-column: 1 / -1;
            grid-row: 1 / -1;
        }

        button {
            grid-column: 2 / -1;
            grid-row: 1 / -1;
            margin: 5px;
        }
    }
</style>