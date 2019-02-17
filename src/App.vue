<template>
  <div id="app">
    <navBar />
    <slider />
    <about />
    <benifits />
    <how />
    <why />
    <qiibee />
    <tech />
    <distribution />
    <intro />
    <roadmap />
    <products />
    <team />
    <usage />
    <advisor />
    <patners />
    <screens />
    <media />
    <contact />
    <Bfooter />
  </div>
</template>

<script>
import slider from './components/slider.vue';
import navBar from './components/navbar.vue';
import about from './components/about.vue';
import benifits from './components/benifts.vue';
import how from './components/how.vue';
import why from './components/why.vue';
import qiibee from './components/qiibee.vue';
import tech from './components/tech.vue';
import distribution from './components/distribution.vue';
import intro from './components/intro.vue';
import roadmap from './components/roadmap.vue';
import products from './components/products.vue';
import team from './components/team.vue';
import usage from './components/usage.vue';
import advisor from './components/advisor.vue';
import patners from './components/patners.vue';
import screens from './components/screens.vue';
import media from './components/media.vue';
import contact from './components/contact.vue';
import Bfooter from './components/footer.vue';

export default {
  name: 'app',
  components: {
    slider,
    navBar,
    about,
    benifits,
    how,
    why,
    qiibee,
    tech,
    distribution,
    intro,
    roadmap,
    products,
    team,
    usage,
    advisor,
    patners,
    screens,
    media,
    contact,
    Bfooter,
  },
};
</script>

<style>
#app {
  padding: 0;
  margin: 0;
  width: 100%;
}
img{
  width: 100vw;
}
.line{
    margin: auto;
    width:100px;
    height:1px;
    background: #f89b54;
    background: -moz-linear-gradient(90deg, #f89b54 0%, #ebacfd 100%);
    background: -webkit-linear-gradient(90deg, #f89b54 0%,#ebacfd 100%);
    background: -o-linear-gradient(90deg, #f89b54 0%,#ebacfd 100%);
    background: -ms-linear-gradient(90deg, #f89b54 0%,#ebacfd 100%);
    background: linear-gradient(90deg, #f89b54 0%,#ebacfd 100%);
    margin-top: 5vh;
    margin-bottom: 5vh;
}
</style>
