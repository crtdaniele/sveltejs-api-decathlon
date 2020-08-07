<script>
    import { Email, LinkedIn, WhatsApp, Facebook, Twitter } from 'svelte-share-buttons-component';

	const url = 'https://whatsportisit.netlify.app';
	const title = 'What sport is it?';
	const desc = 'Upload an image e discover what kind of sport is it!';
</script>

<style>
	.socialShare{
		text-align: center;
	}
	.socialShare h2{
		font-size: 2rem;
		text-align: center;
		color: #666;
		font-weight: 400;
		margin-bottom: 20px;
	}
    @media screen and (max-width: 767px){
        .socialShare h2{
            font-size: 1.6rem;
        }
    }
</style>

<div class="container socialShare">
	<div class="row">
		<div class="col-12">
			<h2>Feel free to share!</h2>
		</div>
	</div>
	<div class="row">
		<div class="col-12">
			<Email subject="{title}" body="{desc} {url}" />
			<LinkedIn class="share-button" {url} />
			<WhatsApp class="share-button" text="{title} {url}" />
			<Facebook class="share-button" {url} />
			<Twitter class="share-button" text="{title}" {url} />
		</div>
	</div>
</div>