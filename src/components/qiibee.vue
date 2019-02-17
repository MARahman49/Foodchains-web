<template>
    <div class="qibee">
      <b-container>
        <b-card-group deck>
        <b-card border-variant="light">
            <div class="text-center">
                <h3>Product Architecture</h3>
                <div class="line"></div>
                <p style="font-size: 18px;color: #999999;"> Overview Diagram of Product</p>
                <b-container>
                 <b-container>
                <b-container>
                 <b-img src="https://food-chains.io/wp-content/uploads/2018/06/architecture.jpg" fluid alt="Responsive image" />
                </b-container>
                </b-container>
                </b-container>
                <div class="line"></div>
                <a href="http://www.cryptoninjas.net/2018/07/18/restaurant-loyalty-program-foodchains-partners-with-blockchain-loyalty-protocol-qiibee/" target="_blank"><p>Press Release Form</p></a>
            </div>
        </b-card>
        <b-card border-variant="light">
           <div class="text-center">
                <h3>Collaboration with qiibee</h3>
                <div class="line"></div>
                <a href="https://www.qiibee.com" target="_blank"><p>(www.qiibee.com)</p></a>
            </div>
            <b-container style="margin-top: 12vh;">
               <p class="text-justify">Foodchains has partnered with qiibee (www.qiibee.com) to broaden the customer base by allowing the FAN and QBX tokens to freely exchange within their respective digital wallets. qiibee is a Switzerland base company providing loyalty rewards blockchain infrastructure to brands like Lattesso (www.lattesso.com) and Sausalitos (www.sausalitos.de) to issue their own tokens. qiibee will allow us to utilize their blockchain expertise to speed up our product development by many months.</p>
           </b-container>
           <b-container>
                <button class="btn btnhow"><icon name="file-download" scale="2"></icon> Download Whitepaper</button>
           </b-container>
           </b-card>
        </b-card-group>
    </b-container>
    </div>
</template>

<script>
export default {
  name: 'qiibee',
};
</script>

<style scoped>
.qibee{
    margin: 15vh 0 15vh 0;
}
h3{
   color: #333333;
   text-align: center;
   font-family:Open Sans;
   font-weight:300;
   font-style:normal;
}
.btnhow{
    color: #ffffff;
    background: #f89b54;
    font-weight: bold;
    margin-top: 10vh;
    padding: 10px;
    border-radius: 5px;
}
.btnhow:hover{
    background: #28a745;
    text-decoration: underline;
    color: #ffffff;
}
</style>
