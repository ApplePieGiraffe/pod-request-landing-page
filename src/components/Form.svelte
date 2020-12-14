<script>
    
</script>

<form>
    <input required type="email" placeholder="Email address" aria-label="Enter your email address">
    <button>Request Access</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 53.5rem;
        border-radius: 10rem;
        background-color: var(--color-greyish-blue);
        padding: 5px;
    }

    input {
        flex: 1;
        width: 100%;
        border: none;
        border-radius: 10rem;
        padding-left: 4rem;
        background-color: var(--color-greyish-blue);
        color: var(--color-white);
        font-family: inherit;
        line-height: inherit;
    }

    input::placeholder {
        color: var(--color-white);
        font-family: inherit;
        line-height: inherit;
        opacity: .5;
    }

    button {
        border: none;
        border-radius: 10rem;
        padding: 1rem 3.5rem;
        background-color: var(--color-pale-green);
        color: var(--color-very-dark-blue);
        font-family: inherit;
        font-size: 1.75rem;
        line-height: inherit;
        cursor: pointer;
        transition: background-color .3s;
    }

    button:hover {
        background-color: #B3FFE2;
    }

    @media only screen and (min-width: 600px) {
         form {
             flex-direction: row;
         }

         input {
             width: initial;
         }
    }
</style>