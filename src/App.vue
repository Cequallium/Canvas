<script setup>
    import Home from "./views/Index.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Home/>
  <Footer/>
</template>

<style>
    @import url('@/styles/base.css');
      body{
        height: 100vh;
      }
    :root{
        --white:#f4f4f4;
        --black:#1a1c2c;


        --red:#b13e53;
        --maroon:#5d275d;


        --orange:#ef7d57;
        --yellow:#ffcd75;


        --green:#a7f070;
        --green2:#38b764;
        --green3:#257179;


        --blue:#73eff7;
        --blue2:#41a6f6;


        --blue3:#3b5dc9;
        --blue4:#29366f;


        --grey:#94b0c2;
        --grey2:#566c86;
        --grey3:#333c57;
    }
    html{
        color:var(--white) !important;
        font-family: consoleBold;
    }
    ::selection{
        background-color: var(--green2);
        color: var(--white);
    }
    @font-face{
        font-family: consoleRegular;
        src: 
            url('@/assets/BrokenConsole-Regular.otf')
            format('opentype');
    }
    @font-face{
        font-family: consoleBold;
        src: 
            url('@/assets/BrokenConsole-Bold.otf')
            format('opentype');
    }
    body{
        height: calc(100vh-11vh);
        background-color: var(--white);
    }
</style>
