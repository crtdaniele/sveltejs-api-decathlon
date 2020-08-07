<script>
    import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte'
    import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte'
</script>

<style>
    ul{
        position: absolute;
        right: 10px;
        top: 10px;
        list-style: none;
    }
    ul li{
        display: inline-block;
        margin-left: 7px;
    }
    ul li .icon a{
        color: #FFF;
    }
    ul li .icon{
        width: 30px;
        height: 30px;
    }
</style>

<ul>
    <li>
        <div class="icon">
            <a href="https://www.prova.it">
                <FaLinkedin />
            </a>    
        </div>
    </li>
    <li>
        <div class="icon">
            <a href="https://www.prova.it">
                <FaGithubSquare />
            </a>    
        </div>
    </li>
</ul>