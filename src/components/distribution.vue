<template>
  <div class="dist">
      <div style="text-align: center;">
      <h1>Token Distribution</h1>
      <div class="line"></div>
      <h5>Initial Distribution of Tokens</h5>
      </div>
        <b-container style="margin-top:5vh;">
            <b-card-group deck>
             <b-card
             border-variant="light"
             style="text-align: center; min-width: 160px;"
             >
                <icon name="check" color="rgb(248, 155, 84)" scale="2"></icon>
                <div style="margin-top:2vh;">
                <h3>47%</h3>
                <h6>ICO</h6>
                </div>
            </b-card>
             <b-card
             border-variant="light"
             style="text-align: center; min-width: 160px;"
             >
                <icon name="check" color="rgb(248, 155, 84)" scale="2"></icon>
                <div style="margin-top:2vh;">
                <h3>20%</h3>
                <h6>Distribution Partners</h6>
                </div>
            </b-card>
             <b-card
             border-variant="light"
             style="text-align: center; min-width: 160px;"
             >
                <icon name="check" color="rgb(248, 155, 84)" scale="2"></icon>
                <div style="margin-top:2vh;">
                <h3>15%</h3>
                <h6>Advisors</h6>
                </div>
            </b-card>
             <b-card
             border-variant="light"
             style="text-align: center; min-width: 160px;"
             >
                <icon name="check" color="rgb(248, 155, 84)" scale="2"></icon>
                <div style="margin-top:2vh;">
                <h3>10%</h3>
                <h6>Team</h6>
                </div>
            </b-card>
             <b-card
             border-variant="light"
             style="text-align: center; min-width: 160px;"
             >
                <icon name="check" color="rgb(248, 155, 84)" scale="2"></icon>
                <div style="margin-top:2vh;">
                <h3>5%</h3>
                <h6>Bounty</h6>
                </div>
            </b-card>
             <b-card
             border-variant="light"
             style="text-align: center; min-width: 160px;"
             >
                <icon name="check" color="rgb(248, 155, 84)" scale="2"></icon>
                <div style="margin-top:2vh;">
                <h3>5%</h3>
                <h6>Private Sale</h6>
                </div>
            </b-card>
        </b-card-group>
        </b-container>
  </div>
</template>

<script>
export default {
  name: 'distribution',
  methods: {
  },
};

</script>

<style scoped>
.dist{
    padding: 15vh 0 10vh 0;
    text-align: center;
}
h1{
    color: #333333;
    line-height: 40px;
    text-align: center;
    font-weight:300;
}
h5{
    font-size: 18px;
    color: #999999;
    line-height: 36px;
    text-align: center;
    font-weight:300;
}
</style>
