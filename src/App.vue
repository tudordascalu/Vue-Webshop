<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/* 
@font-face {
  font-family: 'Trade Gothic Condensed';
  src: url('./assets/TRADEGOC.TTF') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Trade Gothic Condensed';
  src: url('static/img/TRADEGCI.TTF') format('opentype');
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: 'Trade Gothic Condensed';
  src: url('./assets/fonts/TRADEGCB.TTF') format('truetype');
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'Trade Gothic Condensed';
  src: url('./assets/fonts/TRADEGOC.TTF') format('truetype');
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: 'Trade Gothic Condensed';
  src: url('./assets/fonts/TRADEGCBI.TTF') format('opentype');
  font-weight: bold;
  font-style: italic;
}
/* 
@font-face {
  font-family: 'Lato Bold';
  src: url('../fonts/Lato-Bold.TTF') format('opentype');
} */

#app {
  font-family: 'Trade Gothic Condensed', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #474e5d;
  /* margin-top: 60px; */
}
header{
  color: #fff;
}

</style>
