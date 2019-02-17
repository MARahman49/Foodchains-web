<template>
  <div class="home text-center">
    <h1>Sample Screens</h1>
    <div class="line"></div>
  <carousel-3d :width="400"  :height="460" autoplay :autoplayTimeout="1000" display="7" dir="ltr">
    <slide :index="0">
        <img src="../../public/screens/02.png">
    </slide>
     <slide :index="1">
        <img src="../../public/screens/03.png">
    </slide>
     <slide :index="2">
        <img src="../../public/screens/04.png">
    </slide>
     <slide :index="3">
        <img src="../../public/screens/05.png">
    </slide>
     <slide :index="4">
        <img src="../../public/screens/06.png">
    </slide>
     <slide :index="5">
        <img src="../../public/screens/08.png">
    </slide>
     <slide :index="6">
        <img src="../../public/screens/09.png">
    </slide>
     <slide :index="7">
        <img src="../../public/screens/10.png">
    </slide>
    <slide :index="8">
        <img src="../../public/screens/11.png">
    </slide>
     <slide :index="9">
        <img src="../../public/screens/12.png">
    </slide>
     <slide :index="10">
        <img src="../../public/screens/13.png">
    </slide>
     <slide :index="11">
        <img src="../../public/screens/15.png">
    </slide>
  </carousel-3d>
</div>
</template>

<script>
export default {
  name: 'screens',
};
</script>

<style scoped>
.home{
    margin-top: 10vh;
    padding: 10vh 8vw 10vh 8vw;
}
.carousel-3d-slide{
    margin-top: 10vh;
  background-color: transparent;
  border: none;
}
</style>
