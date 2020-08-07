<script>
    import Social from './social.svelte'
</script>

<style>
    header{
        overflow: hidden;
    }
    .header__bg{
        max-width: 100%;
    }
    .header__title{
        top: 14px;
        position: absolute;
        left: 10px;
        color: #FFF;
        text-transform: uppercase;
        font-weight: bold;
    }
    @media screen and (max-width: 767px){
        .header__bg{
            width: 200%;
            max-width: 200%;
        }
    }
</style>

<header>
    <svg class="header__bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fill-opacity="1" d="M0,320L18.5,309.3C36.9,299,74,277,111,272C147.7,267,185,277,222,288C258.5,299,295,309,332,288C369.2,267,406,213,443,181.3C480,149,517,139,554,144C590.8,149,628,171,665,154.7C701.5,139,738,85,775,106.7C812.3,128,849,224,886,266.7C923.1,309,960,299,997,282.7C1033.8,267,1071,245,1108,234.7C1144.6,224,1182,224,1218,208C1255.4,192,1292,160,1329,170.7C1366.2,181,1403,235,1422,261.3L1440,288L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path>
    </svg>
    <div class="header__title">What sport is it?</div>
    <Social />
</header>