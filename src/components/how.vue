<template>
  <div style="margin-bottom: 10vh;">
    <div class="text-center">
    <h1 class="header">How It Works?</h1>
    <div class="line"></div>
    <p class="txt">FOODCHAINS Ecosystem has Three Major Components</p>
    </div>
      <b-container>
    <b-card-group deck>
        <b-card border-variant="light">
           <div class="imgCenter">
               <div class="iconCircle rounded-circle">
                    <icon name="hand-point-up" scale="2"></icon>
                </div>
           </div>
           <div class="text-center"  style="margin:0 5vh 0 5vh;">
                <h6>Utility Exchange Mechanism</h6>
                <h5>FAN TOKENS</h5>
                <div class="imgCenter">
                <div class="lineA"></div>
                </div>
                <p class="text-justify">The FAN tokens that serve as a utility exchange mechanism. The FAN token is an ERC20 based token.</p>
           </div>
        </b-card>
        <b-card border-variant="light">
            <div class="imgCenter">
               <div class="iconCircle rounded-circle">
                    <icon name="mobile-alt" scale="2"></icon>
                </div>
           </div>
           <div class="text-center"  style="margin:0 5vh 0 5vh;">
               <h6>Digital Wallet</h6>
                <h5>MOBILE APP</h5>
                <div class="imgCenter">
                <div class="lineA"></div>
                </div>
                <p class="text-justify">A consumer front-end mobile app that acts as a digital wallet and restaurant discovery component.</p>
           </div>
        </b-card>
        <b-card border-variant="light">
            <div class="imgCenter">
               <div class="iconCircle rounded-circle">
                    <icon name="utensils" scale="2"></icon>
                </div>
           </div>
           <div class="text-center"  style="margin:0 5vh 0 5vh;">
               <h6>Accepts FAN tokens</h6>
                <h5>RESTAURANT APP</h5>
                <div class="imgCenter">
                <div class="lineA"></div>
                </div>
                <p class="text-justify">A restaurant app to accept FAN tokens, conversion to fiat currency, dashboard, business analytics and CRM.</p>
           </div>
        </b-card>
    </b-card-group>
      </b-container>
  </div>
</template>

<script>
export default {
  name: 'how',
};
</script>

<style scoped>
.header{
    color: #333333;
    line-height: 40px;
    text-align: center;
    font-family: Open Sans;
    font-weight: 300;
    font-style: normal;
    margin-top: 10vh;
    margin-bottom: 4vh;
}
.lineA{
    width:50px;
    height:2px;
    background: rgb(161, 177, 188);
    margin-top: 3vh;
    margin-bottom: 3vh;
}
.txt{
    font-size: 18px;
    color: #999999;
    line-height: 36px;
    font-family:Open Sans;
    font-weight:300;
    font-style:normal;
}
.imgCenter{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.iconCircle{
    color: #ffffff;
    background: #f89b54;
    padding: 50px;
    margin-bottom: 8vh;
}
.iconCircle:hover{
    background-color: #1abc9c;
}
h6{
    color:#f89b54;
}
h5{
    color:#3d404b;
    font-weight: bold;
}
p{
  color: rgb(161, 177, 188);
}
</style>
