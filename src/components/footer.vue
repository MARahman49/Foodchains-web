<template>
  <div class="home">
        <h6>&copy; Copyright 2018 <span class="team">Foodchains Team</span>  |  All Rights Reserved</h6>
  </div>
</template>

<script>
export default {
  name: 'Bfooter',
};
</script>

<style scoped>
.home{
    margin-top: 10vh;
    padding: 4vh 8vw 4vh 8vw;
    background-color: #282b39;
}
h6{
    color: #a1b1bc;
    font-weight: 400;
}
.team{
    color: #1abc9c;
    font-weight: 500;
}
.team:hover{
    color: white;
    text-decoration: underline;
    transition-duration: 1s;
}
</style>
