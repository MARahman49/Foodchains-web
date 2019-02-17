<template>
<div class="bgblue">
    <b-card-group deck>
        <b-card style="margin-top: 10vh; padding: 10px;">
            <div class="imgCenter">
                <div class="iconCircle">
                    <icon name="clipboard-list" scale="1.5"></icon>
                </div>
             </div>
            <h5 class="text-center font-weight-bold"> Low level of interest by offered rewards</h5>
            <p class="card-text text-justify"  style="margin-top: 3vh;">
                All existing loyalty rewards programs are offering points for future consumption, these points have no value and you cannot sell them back to the issuers. Foodchains rewards are in tokens, which have monetary value, and freely convert to fiat currency, making the rewards more interesting. In addition, the tokens are going to be accepted by thousands of restaurants around the world.
            </p>
        </b-card>
         <b-card style="margin-top: 10vh; padding: 10px;">
             <div class="imgCenter">
                <div class="iconCircle">
                    <icon name="clipboard-list" scale="1.5"></icon>
                </div>
             </div>
            <h5 class="text-center font-weight-bold">Low Redemption Rate</h5>
            <p class="card-text text-justify"  style="margin-top: 3vh;">
               Unlike existing programs that reward points, Foodchains rewards are in the form of tokens that credit directly into the consumers’ wallet. The value of these tokens will tend to go up along with the growth of the crypto-economy and the market share of blockchain-based services and infrastructure, which entice consumers to spend the tokens towards consumption.
            </p>
        </b-card>
         <b-card style="margin-top: 10vh; padding: 10px;">
             <div class="imgCenter">
                <div class="iconCircle">
                    <icon name="clipboard-list" scale="1.5"></icon>
                </div>
             </div>
            <h5 class="text-center font-weight-bold">Increased cost of setup and maintenance</h5>
            <p class="card-text text-justify"  style="margin-top: 3vh;">
              Foodchains software is easy to deploy, and set up without requiring any technical knowledge or skills. Restaurants have the ability to customize what they want to offer as a rewards program as long as the rewards do not conflict with our policy. The business process of rewards and redemptions of the FAN tokens are standard across all participating restaurants and customers.
              </p>
        </b-card>
    </b-card-group>
</div>
</template>
<script>
export default {
  name: 'benifits',
};
</script>
<style scoped>
.bgblue{
    margin-top: 10vh;
    padding: 10vh 10vw 10vh 10vw;
    background-color: #2b3547 !important;
}
.iconCircle{
    border-style: double;
    background-color: #ffffff;
    border-color:#ecf0f1;
    color: green;
    text-align: center;
    position: absolute;
    align-content: center;
    padding: 10px 15px;
    border-radius: 100%;
    top: -30px;
    border-spacing: 15px 50px;
}
.iconCircle:hover{
    background-color: #fd7e14;
    color: #ffffff;
}
.imgCenter{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
h5{
    color:#2c3e50;
}
</style>
