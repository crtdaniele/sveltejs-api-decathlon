<script>
    import sportVision from '../../controllers/sportVision.js';
    import { Circle2 } from 'svelte-loading-spinners'
    import { API_KEY, API_SPORT_VISION } from '../../api/';
    let files;
    let error, loading = false;
    let result = {};

    const handleSubmit = (e) => {
        if(files !== undefined){
            error = false;
            loading = true;
            sportVision(API_KEY, API_SPORT_VISION, files)
            .then(response => {
                result = response;
                loading = false;
            });
        }else{
            error = true;
        }
    }
</script>

<style>
    .formImage{
        margin-top: 90px;
        text-align: center;
        margin-bottom: 90px;
    }
    .formImage__loading{
        text-align: center;
    }
    .formImage__loading div{
        margin: 0 auto;
        max-width: 40px;
    }
    label{
        text-align: left;
        max-width: 700px;
        display: block;
        margin: 0 auto;
        margin-bottom: 8px;
    }
    #formImage{
        max-width: 700px;
        margin: 0 auto;
    }
    button{
        margin-top: 30px !important;
    }
    .formImage__success{

    }
    .formImage__success h2{
        margin-bottom: 20px;
        font-size: 2rem;
    }
    .formImage__success p{
        margin-bottom: 3px;
    }
</style>

<div class="container formImage">
    <div class="row">
        <div class="col-12">
            {#if error}
                <div class="alert alert-danger" role="alert">
                    Please, upload an image!
                </div>
            {/if}
            {#if result.data}
                <div class="formImage__success">
                    <h2>{result.data.sport[0].name.toUpperCase()}? It's right?</h2>
                    <p><strong>Probability:</strong> {result.data.sport[0].probability}</p>
                    <p><strong>Location:</strong> {result.data.location[0].name}</p>
                    <p><a target="_blank" href="https://en.wikipedia.org/wiki/{result.data.sport[0].name}">Look on Wikipedia</a></p>
                </div>
            {:else if loading}
                <div class="formImage__loading">
                    <div>
                        <Circle2 size="40" unit="px"></Circle2>
                    </div>
                </div>
            {:else}
                <form encType="multipart/form-data" on:submit|preventDefault={handleSubmit}>
                    <div class="form-group">
                        <label for="formImage">Upload an image</label>
                        <input type="file" class="form-control-file" id="formImage" bind:files />
                        <button type="submit" class="btn btn-primary">Discover the sport!</button>
                    </div>
                </form>
            {/if}
        </div>
    </div>
</div>