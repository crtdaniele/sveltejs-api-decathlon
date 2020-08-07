<script>
	import Header from './components/header/index.svelte';
	import Title from './components/title/index.svelte';
	import FormImage from './components/formImage/index.svelte';
	import SocialShare from './components/socialShare/index.svelte'
	import Footer from './components/footer/index.svelte';
</script>

<main>
	<Header />
	<Title />
	<FormImage />
	<SocialShare />
	<Footer />
</main>

<style>
	:global(body){
		margin: 0;
		padding: 0;
		text-align: center;
	}
</style>