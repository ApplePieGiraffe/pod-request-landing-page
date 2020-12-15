<script>
	// components
	import LoadingScreen from './components/LoadingScreen.svelte';
	import TextContent from './components/TextContent.svelte';
	import Attribution from './components/Attribution.svelte';
</script>

{#if window.innerWidth >= 800}
	<LoadingScreen/>
{/if}

<div class="container">
	<img src="/assets/img/logo.svg" alt="Pod logo">
	<TextContent/>
	<Attribution/>
</div>

<style>
	:global(body) {
		overflow: hidden;
		min-height: 100vh;
		background-color: var(--color-very-dark-blue);
	}

	.container {
		position: relative;
		width: 100%;
		height: 100%;
		max-width: 1440px;
		margin: 0 auto;
		padding-bottom: 12rem;
		padding-top: 7.75rem;
	}

	.container::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		background-image: url('/assets/img/image-host-mobile.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		opacity: .1;
	}

	img {
		display: block;
		margin: 0 auto;
		margin-bottom: 7rem;
	}

	/* media queries */

	@media only screen and (min-width: 600px) {
        .container {
			padding-top: 6.25rem;
			padding-left: 5rem;
		}

		.container::before {
			background-image: url('/assets/img/image-host-tablet.jpg');
			background-size: initial;
			background-position: top right;
			opacity: .9;
		}

		.container::after {
			content: url('/assets/img/bg-pattern-dots.svg');
			position: absolute;
			left: 4rem;
			bottom: -12rem;
			z-index: -1;
		}

		img {
			margin: 0;
			margin-bottom: 20rem;
		}
    }

	@media only screen and (min-width: 1100px) {
        .container {
			padding-top: 12.75rem;
			padding-left: 20.625rem;
		}

		.container::before {
			background-image: url('/assets/img/image-host-desktop.jpg');
			background-position: top 16.25rem right;
			background-repeat: no-repeat;
		}

		.container::after {
			left: initial;
			right: 0;
			bottom: 4.625rem;
			z-index: -1;
		}

		img {
			margin-bottom: 13rem;
		}
    }
</style>