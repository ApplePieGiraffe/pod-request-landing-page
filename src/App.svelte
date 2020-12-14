<script>
	// components
	import TextContent from './components/TextContent.svelte';
</script>

<div class="container">
	<img src="/assets/img/logo.svg" alt="Pod logo">
	<TextContent/>
</div>

<style>
	:global(body) {
		min-height: 100vh;
		background-color: var(--color-very-dark-blue);
	}

	.container {
		position: relative;
		z-index: -1;
		width: 100%;
		max-width: 1440px;
		margin: 0 auto;
		margin-bottom: 12rem;
		padding-top: 12.75rem;
		padding-left: 20.625rem;
		background-image: url('/assets/img/image-host-mobile.jpg');
		background-size: cover;
		background-repeat: no-repeat;
	}

	img {
		margin: 0 auto;
		margin-bottom: 7rem;
	}

	/* media queries */

	@media only screen and (min-width: 600px) {
        .container {
			padding-top: 6.25rem;
			padding-left: 5rem;
			background-image: url('/assets/img/image-host-tablet.jpg');
			background-size: initial;
			background-position: top right;
		}

		img {
			margin-bottom: 12rem;
		}
    }

	@media only screen and (min-width: 1100px) {
        .container {
			padding-top: 12.75rem;
			padding-left: 20.625rem;
			background-image: url('/assets/img/image-host-desktop.jpg');
			background-position: top 16.25rem right;
		}
    }
</style>