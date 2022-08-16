<template>
    <nav>
        <router-link class="nav" to="/">
            <img src="@/assets/logo.svg" alt="Canvas logo">
            <div class="logotext">Canvas</div>
        </router-link>

        <!-- <router-view/> -->
    </nav>
</template>

<script>
    export default{
        name: "Navbar",
        components:{},
        props: ["onPage"]
    }
</script>

<style>
    nav{
        position: sticky;
        margin-bottom: 12vh;
    }
    .nav{
        height: 12vh;
        background-color: var(--black);
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-items: center;
        border-bottom: solid var(--green2) 5px;
    }
    .nav img{
        margin: 3vw;
        width: 6vh;
    }
    .logotext{
        color: var(--white);
        height: 8vh;
        font-size: 6vh;
        margin-top: 1.6vh;
    }
</style>