<script>
    import sportVision from '../../controllers/sportVision.js';
    import { Circle2 } from 'svelte-loading-spinners'
    import { API_KEY, API_SPORT_VISION } from '../../api/';
    let files, name, probability, location;
    let error, loading, result = false;

    const handleSubmit = (e) => {
        if(files !== undefined){
            error = false;
            loading = true;
            sportVision(API_KEY, API_SPORT_VISION, files)
            .then(response => {
                if(response.hasOwnProperty('data')){
                    if(response.data.hasOwnProperty('sport')){
                        result = true;
                        name = response.data.sport[0].hasOwnProperty('name') ? response.data.sport[0].name.replace("_", " ") : '';
                        probability = response.data.sport[0].hasOwnProperty('probability') ? response.data.sport[0].probability : '';
                    }
                    if(response.data.hasOwnProperty('location')){
                        let newOrderLocation = [...response.data.location];
                        newOrderLocation.hasOwnProperty('probability') ? newOrderLocation.sort((a, b) => b.probability - a.probability) : '';
                        location = newOrderLocation[0].hasOwnProperty('name') ? newOrderLocation[0].name : '';
                    }
                }
                loading = false;
            })
            .catch(err => {
                error = true;
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
            {#if result}
                <div class="formImage__success">
                    <h2>{name.toUpperCase()}? It's right?</h2>
                    <p><strong>Probability:</strong> {probability}</p>
                    <p><strong>Location:</strong> {location}</p>
                    <p><a target="_blank" href="https://en.wikipedia.org/wiki/{name}">Look on Wikipedia</a></p>
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