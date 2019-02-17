<template>
<div class="bgblue">
    <b-card-group deck>
        <b-card style="margin-top: 10vh; padding: 10px;">
            <div class="imgCenter">
                <div class="iconCircle file">
                    <icon name="file-contract" scale="2"></icon>
                </div>
             </div>
            <h6 class="text-center font-weight-bold">Smart Contract</h6>
            <p class="card-text text-justify"  style="margin-top: 3vh;">
               The smart contract is simply a software program that executes when certain terms and conditions are fulfilled electronically by negotiating and consenting parties. The smart contract is a necessary component in any financial transaction and is part of many blockchain infrastructure companies.
</p>
        </b-card>
         <b-card style="margin-top: 10vh; padding: 10px;">
             <div class="imgCenter">
                <div class="iconCircle">
                    <icon name="wallet" scale="2"></icon>
                </div>
             </div>
            <h6 class="text-center font-weight-bold">Digital Wallet</h6>
            <p class="card-text text-justify"  style="margin-top: 3vh;">
             The digital wallet is a mobile app that is used to authenticate the user whenever there is a transaction. It is the entry point into the loyalty network. The wallet can also be used for conversion to fiat currency, buy and sell tokens, and order food delivery in the future. Restaurants have their rewards applications.
            </p>
        </b-card>
         <b-card style="margin-top: 10vh; padding: 10px;">
             <div class="imgCenter">
                <div class="iconCircle">
                    <icon name="shopping-cart" scale="2"></icon>
                </div>
             </div>
            <h6 class="text-center font-weight-bold">POS Terminal</h6>
            <p class="card-text text-justify"  style="margin-top: 3vh;">
             The POS terminal is a handheld touch screen Android-based device with a scanner and thermal printer, it is used for accepting our tokens scanning the QR code from the user. The device will print out a small invoice for the user to keep a record. Both the POS terminal and the mobile app can buy and sell tokens using a cryptocurrency exchange.
            </p>
        </b-card>
    </b-card-group>
</div>
</template>
<script>
export default {
  name: 'products',
};
</script>
<style scoped>
.bgblue{
    margin-top: 10vh;
    padding: 10vh 10vw 10vh 10vw;
    background-color: #2b3547;
}
.iconCircle{
    background-color: #1abc9c;
    color: #ffffff;
    text-align: center;
    position: absolute;
    align-content: center;
    padding: 25px 25px;
    border-radius: 100%;
    border: 6px solid white;
    top: -40px;
    border-spacing: 10px 25px;
}
.file{
    padding: 25px 28px;
}
.iconCircle:hover{
    background-color: #343a40;
    border-color: #fd7e14;
    color: #ffffff;
}
.imgCenter{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
h6{
    margin-top: 5vh;
    color:#2c3e50;
}
</style>
