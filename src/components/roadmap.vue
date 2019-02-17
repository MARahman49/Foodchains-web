<template>
  <div class="roadmap text-center">
    <h2>Product Roadmap</h2>
    <div class="line"></div>
    <h5>There are seven stages of development, contingent on the amount of money raised, and feedback from the early adopters, the plan will alter accordingly.</h5>
    <div id="roadmap">
      <h6 class="evtSchedule">October 2018</h6>
      <div class="connector"></div>
         <b-card bg-variant="success"
                text-variant="white"
                class="text-center cardManual">
                <div class="card-text">
                  <h6 class="font-weight-bold">STAGE 1: IN BETA</h6>
                   <p class="text-justify font-weight-light">
              Development of a point-based loyalty rewards system, using a dynamic QR code for redemption. We have released our Wechat miniprograms in China that are designed for fast execution and without the need of installing any apps. The miniprograms are able to accept wechat payment for purchasing tokens for consumption. We have also released our API to integrate with any POS system.</p>
              <p class="text-justify">The goal is to launch a product for testing and get feedback from early adopters for refinement and improvements. We have implemented “give away” points to the early adopters, and covering the cost of redemption to fiat..</p>
                </div>
           </b-card>
      <div class="connector"></div>
      <h6 class="evtSchedule">December 2018</h6>
      <div class="connector"></div>
         <b-card bg-variant="success"
                text-variant="white"
                class="text-center cardManual">
                <div class="card-text">
                  <h6 class="font-weight-bold">STAGE 2: 2 TO 3 MONTHS</h6>
                   <p class="text-justify font-weight-light">
                     Integrating the points system into a private blockchain infrastructure using IOS and Android native apps with the ability to support different payment gateways such as Alipay, Wechat pay, Linepay, Venmo and others. We will launch Taiwan during this stage as well as testing with Wheely Café. During this stage, only restaurants are allowed to exchange tokens for fiat, consumers are only allowed to purchase, but not selling.
                   </p>
              <p class="text-justify">The goal is to test the transaction speed of actual usage, and its operation using points for redemption. Tokens will be available for private sale during this stage. We estimate the cost of implementing a blockchain to be around $200,000, which includes development and smart contract auditing.</p>
                </div>
           </b-card>
      <div class="connector"></div>
      <h6 class="evtSchedule">1st Quater 2019</h6>
      <div class="connector"></div>
           <b-card bg-variant="success"
                text-variant="white"
                class="text-center cardManual">
                <div class="card-text">
                  <h6 class="font-weight-bold">STAGE 3: 3 TO 4 MONTHS</h6>
                   <p class="text-justify font-weight-light">
                    We will release a fully functional digital wallet using tokens for redemption with ability to buy or sell tokens within our exchange.</p>
              <p class="text-justify">The goal is to test price stability by implementing an algorithm to limit trading volume and not allowing consumers to sell tokens.</p>
                   <p class="text-justify">
                    We estimate the cost for this stage to be <span class="font-weight-bold">$1.2M to $2M</span> (depending on the number of transactions), which includes building a reserve for different fiat currency to support the operation.</p>
                </div>
           </b-card>
           <div class="connector"></div>
      <h6 class="evtSchedule">2nd Quater 2019</h6>
      <div class="connector"></div>
         <b-card bg-variant="success"
                text-variant="white"
                class="text-center cardManual">
                <div class="card-text">
                  <h6 class="font-weight-bold">STAGE 4: 3 TO 4 MONTHS</h6>
                   <p class="text-justify font-weight-light">
                    At this stage, we should have enough users on the system with enough transactions to support the price. We will allow consumers to sell tokens at this stage.</p>
                <p class="text-justify">
                   We estimate the cost for this stage to be <span class="font-weight-bold">$2M to $3M</span>, which includes development, implementation and additional reserve capital.</p>
                 </div>
           </b-card>
           <div class="connector"></div>
      <h6 class="evtSchedule">3rd Quater 2019</h6>
      <div class="connector"></div>
         <b-card bg-variant="success"
                text-variant="white"
                class="text-center cardManual">
                <div class="card-text">
                  <h6 class="font-weight-bold">STAGE 5: 1 TO 2 MONTH</h6>
                   <p class="text-justify font-weight-light">
                    We will start integration with any public blockchain infrastructure that is capable of providing the transaction speed for our volume.</p>
              <p class="text-justify">The goal is to speed up the transaction time. At this stage, we expect daily large volume transactions within our network.</p>
                   <p class="text-justify font-weight-light">
                   We are not sure which infrastructure is ready by this time, so it is difficult to put an estimate on cost. However, we expect any new infrastructure should be easy and cost effective to implement, therefore the cost for this stage should not be significant.</p>
                </div>
           </b-card>
           <div class="connector"></div>
      <h6 class="evtSchedule">4th Quater 2019</h6>
      <div class="connector"></div>
         <b-card bg-variant="success"
                text-variant="white"
                class="text-center cardManual">
                <div class="card-text">
                  <h6 class="font-weight-bold">STAGE 6: 3 TO 4 MONTHS</h6>
                   <p class="text-justify font-weight-light">
                     Gamification of the user experience, encourage users to write reviews.
                   </p>
                  <p class="text-justify">The goal is to encourage more adoption.</p>
                  <p class="text-justify font-weight-light">
                     We estimate the cost for the stage is <span class="font-weight-bold">$5M</span> with majority of the capital spend towards marketing. The gamification development cost should be around <span class="font-weight-bold">$200,000</span>.
                   </p>
                </div>
           </b-card>
        <div class="connector"></div>
        <h6 class="evtSchedule">1st Quater 2020</h6>
        <div class="connector"></div>
          <b-card bg-variant="success"
                  text-variant="white"
                class="text-center cardManual">
                  <div class="card-text">
                    <h6 class="font-weight-bold">Future development</h6>
                    <p class="text-justify font-weight-light">
                      As the FAN token’s value increases and stabilizes, the time will come to increase its utility value by working with other horizontal markets such as groceries, convenience stores, food markets, restaurant delivery services, and other food merchants in the supply chain. In this context, restaurants would be able to use FAN tokens to purchase their food supplies, for example.
                    </p>
                    <p class="text-justify">foodchains’ objective is to create a sustainable ecosystem by extending the FAN token to the food industry, where every participant will benefit with transparency and accountability, along with monetary rewards.</p>
                  </div>
           </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'roadmap',
};
</script>

<style scoped>
.roadmap{
    padding: 15vh 20vw 10vh 20vw;
    text-align: center;
}
h2{
    color: #333333;
    line-height: 40px;
    text-align: center;
    font-weight: 300;
    font-style: normal;
}
h5{
    font-size: 18px;
    color: #999999;
    line-height: 36px;
    text-align: center;
    font-style:normal;
}
#roadmap{
  margin-top: 5vh;
  text-align: center;
}
.evtSchedule{
  background-color: rgb(241, 89, 42);
  color: rgb(255, 255, 255);
  border: solid 1px rgb(226, 226, 226);
  border-radius: 5px;
  padding: 5px;
  width: 150px;
  margin: auto;
}
.connector{
  margin: auto;
  height: 60px;
  width: 1px;
  background-color: #00aeef;
}
.cardManual{
  border:1px solid #00aeef;
  margin: auto;
  width: 400px;
  }
  @media only screen and (max-width: 900px) {
  .cardManual{
  width: auto;
  }
}
</style>
