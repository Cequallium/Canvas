<template>
    <Navbar/>
    <div>
        <head>
            <Title Page="Home"/>
        </head>
        <section class="contribute">
                <div class="text">
                    <h1>
                        Canvas
                    </h1>
                <h2>
                    an Open Source r/place clone.
                </h2>
                <a class="button" href="https://github.com/Cequallium/Canvas/">Contribute</a>
            </div>
            <div class="github">
                <img draggable="false" src="@/assets/home/contribute.png" alt="github logo" width="150px">
            </div>
        </section>
    </div>
</template>

<script>
    import Title from '@/components/Title.vue';
    import Navbar from '@/components/Navbar.vue';

    export default {
        name: 'Home',
        components: { Title, Navbar }
    }
</script>

<style>
        /* Helps in debugging css */
    /* *{border: solid red 3px;} */


    section{
        align-items: center;
        height: 40vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .button{
        padding: 3vh;
        font-size: 3vh;
        border-style: solid;
        border-width: 4px;
    }
    .contribute .button:hover{
        border-top-color: var(--yellow);
        border-left-color: var(--yellow);
        border-bottom-color: var(--red);
        border-right-color: var(--red);
    }
    .button::before{
        content: ">>";      
        opacity: 0;
        margin-right:-3vh ;
        transition: all 260ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .button:hover::before{
        font-size: inherit;
        display: initial;
        opacity: 1.0;
        margin-right: 4px;
    }
    .contribute .button{
        background-color: var(--orange);
        color: var(--white);
    }


    .text{
        width: 30ch;
    }
    .text h1{
        color: var(--grey3);
        font-size: 10vh;
        margin-bottom: 2vh;
    }
    .text *{
        color: var(--grey2);
    }
    section .text h2{
        margin-bottom: 13vh;
    }
    @media screen and (max-width: 500px){
        .github{
            display: none;
        }
    }
    .text h2{
        font-size: 4vh;
    }
    section .text{
        margin-left: 3vw;
        color: var(--black);
    }
    .github img{
        user-select: none;
        margin-top: 5vh;
        height: 40vh;
        width: auto;
        margin-right: 7vw;
        image-rendering: pixelated;
    }
</style>