<template>
    <div class="why">
        <b-container>
            <h2 style="font-size: 36px;color: #ffffff;line-height: 40px;text-align: center;font-family:Open Sans;font-weight:300;font-style:normal">Why Blockchain?</h2>
            <div class="line"></div>
            <p class="text-justify" style="color: #ffffff;">
                Blockchain has the potential to streamline execution and administration of their programs with near real-time transparency, resulting in cost savings that can be realized in the medium term. For larger program providers, it still makes sense to join such a network because of transparency, and for smaller program providers, an interlinked network provides them unprecedented scale. Finally, blockchain has proved able to deploy through social media and digital wallets, interacting with existing loyalty rewards program platforms through smart contracts, which are “self-executing code on a blockchain that automatically implements the terms of an agreement between parties,” and associated digital architecture.
            </p>
        </b-container>
    </div>
</template>

<script>
export default {
  name: 'why',
};
</script>

<style scoped>
.why{
    background-color: #2f2933;
    padding: 10vh 24vw 10vh 24vw;
}
.line{
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
