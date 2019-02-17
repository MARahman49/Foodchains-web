<template>
<div>
 <b-navbar
 toggleable="md"
 variant="faded"
 type="dark"
 fixed="top">
<b-container>
 <b-navbar-brand href="#">
      <img src="../../public/icon.png" class="navbarLogo" alt="logo">
    </b-navbar-brand>

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="#">About</b-nav-item>
      <b-nav-item href="#">How It Works</b-nav-item>
      <b-nav-item href="#">Token Distribution</b-nav-item>
      <b-nav-item href="#">Product Roadmap</b-nav-item>
      <b-nav-item href="#">Team</b-nav-item>
      <b-nav-item href="#">Advisors</b-nav-item>
      <b-nav-item href="#">Contact Us</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
    </b-navbar-nav>

  </b-collapse></b-container>
</b-navbar></div>

</template>

<script>
export default {
  name: 'navBar',
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.navbar{
    z-index: 19999;
    padding: 5px;
}
b-nav-item{
   color: rgba(255,255,255,0.85)
}
.navbarLogo{
    max-width: 72px;
    height: 72px;
}
</style>
