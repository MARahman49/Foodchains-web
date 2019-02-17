<template>
  <div class="about">
    <b-container>
    <b-card-group deck>
        <b-card border-variant="light" >
        <b-container>
             <b-img src="https://food-chains.io/wp-content/uploads/2018/06/03-1.png" fluid alt="Responsive image" />
        </b-container>
        </b-card>
         <b-card border-variant="light" title="What We Do?"
            sub-title="Loyalty Rewards Program with Blockchain Technology">
        <p class="card-text text-justify">
            Foodchains is a B2B2C loyalty rewards solution using blockchain and smart contract technology. The platform allows restaurants to offer Foodchains tokens (FAN) to their customers’ purchases with configurable rewards. Since Foodchainsis a decentralized system, it means that it is highly scalable without geographic limitation. Consumers can redeem rewards from our participating restaurants with our digital wallet that is frictionless and universal.
        </p>
        <div class="infoArea">
            <div class="for">
                <h6 class="font-weight-bold">For restaurants</h6>
                <p>it is a free loyalty reward system that is blockchain enabled,</p>
            </div>
            <div class="for">
                <h6 class="font-weight-bold">For consumers</h6>
                <p>it is an easy to deploy, integrated digital wallet that can be used to dine at any participating restaurant in the network, anywhere in the world.</p>
            </div>
            </div>
            <button class="btn btnhow"><icon name="lightbulb" scale="1.5"></icon> How it works?</button>
        </b-card>
    </b-card-group>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'about',
};
</script>

<style scoped>
.about{
    margin-top: 100px;
}
.aboutRow{
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
}
.wwd{
font-size: 36px;
color: #333333;
font-family:Open Sans;
font-weight:300;
font-style:normal;
}
.infoArea{
    margin-top: 5vh;
}
.for{
    display: flex inline;
    flex-direction: row;
    justify-content: flex-start;
}
.btnhow{
    color: #ffffff;
    background: #f89b54;
    font-weight: 500;
    border-radius: 5px;
}
.btnhow:hover{
    background: #28a745;
    text-decoration: underline;
    color: #ffffff;
}
</style>
