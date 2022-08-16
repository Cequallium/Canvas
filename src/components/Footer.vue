<template>
    <footer>
        <section class="Comingsoon">
            <h1>Coming soon</h1>
        </section>
    </footer>
</template>
<script>
    export default{
        name: "Footer",
        components:{}
    }
</script>
<style>
footer{
        /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
        color: var(--grey3);
        display: flex;
        height: 100vh;
        font-weight: bold;
        background: #94b0c2;
        background: linear-gradient(0deg, rgba(148,176,194,1) 59%, rgba(244,244,244,1) 100%); 
        align-items: center;
        justify-content: space-evenly;

    }
    .Comingsoon{
        font-size: 5vw;
        display: flex;
        height: 80vh;
        align-items: center;
        justify-content: center;
    }
</style>