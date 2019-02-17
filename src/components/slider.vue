<template>
  <div class="carousel">
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                background="#ababab"
                controls
                indicators
                :interval="2000"
                img-width="1024"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <b-carousel-slide img-src="https://food-chains.io/wp-content/uploads/2018/06/01.png">
    <div class="covertext">
      <div class="col-lg-10" style="float:none; margin:0 auto;">
        <h1 class="title">Food-Chains</h1>
        <h2 class="subtitle">A tokenized restaurant loyalty rewards program with transparency and gamification</h2>
      </div>
      <div class="lineb"></div>
    <div>
      <b-button variant="outline-light ">What We Do?</b-button>
      <b-button variant="outline-light">How It Work?</b-button>
    </div>
      <div class="col-xs-12 explore"><button type="button" class="btn btn-lg explorebtn">PRE-Register Now</button>
      </div>
    </div>
  </b-carousel-slide>

      <b-carousel-slide img-src="https://food-chains.io/wp-content/uploads/2018/06/02.png">

  <div class="covertext">
    <div class="col-lg-10" style="float:none; margin:0 auto;">
      <h1 class="title">Food-Chains</h1>
      <h2 class="subtitle">A tokenized restaurant loyalty rewards program with transparency and gamification</h2>
    </div>
    <div class="lineb"></div>
    <div>
      <b-button variant="outline-light ">What We Do?</b-button>
      <b-button variant="outline-light">How It Work?</b-button>
    </div>
    <div class="col-xs-12 explore">
      <a href="#"><button type="button" class="btn btn-lg explorebtn">PRE-Register Now</button></a>
    </div>
  </div>
      </b-carousel-slide>
      <b-carousel-slide img-src="https://food-chains.io/wp-content/uploads/2018/06/03.png">

  <div class="covertext">
    <div class="col-lg-10" style="float:none; margin:0 auto;">
      <h1 class="title">Food-Chains</h1>
      <h2 class="subtitle">A tokenized restaurant loyalty rewards program with transparency and gamification</h2>
    </div>
    <div class="lineb"></div>
    <div>
      <b-button variant="outline-light ">What We Do?</b-button>
      <b-button variant="outline-light">How It Work?</b-button>
    </div>
    <div class="col-xs-12 explore">
      <a href="#"><button type="button" class="btn btn-lg explorebtn">PRE-Register Now</button></a>
    </div>
  </div>
      </b-carousel-slide>
     <b-carousel-slide img-src="https://food-chains.io/wp-content/uploads/2018/06/04.png">
  <div class="covertext">
    <div class="col-lg-10" style="float:none; margin:0 auto;">
      <h1 class="title">Food-Chains</h1>
      <h2 class="subtitle">A tokenized restaurant loyalty rewards program with transparency and gamification</h2>
    </div>
    <div class="lineb"></div>
    <div>
      <b-button variant="outline-light ">What We Do?</b-button>
      <b-button variant="outline-light">How It Work?</b-button>
    </div>
    <div class="col-xs-12 explore">
      <a href="#"><button type="button" class="btn btn-lg explorebtn">PRE-Register Now</button></a>
    </div>
  </div></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'slider',
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>
<style>
#carousel1 , img{
    max-height: 640px;
}
img{
  transform: scale(1.2);
  object-fit: cover;
}
.title {
  font-family: Verdana;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
}
.covertext{
  text-align: center;
}
.lineb{
  width: 20vw;
  height: 1px;
  background-color: #ffffff;
  margin: auto;
  margin-bottom: 2vh;
}
.subtitle {
  font-family: Verdana;
  color: #ffffff;
  text-align: center;
}

.explore {
  text-align: center;
  margin-top: 10px;
}
.buttns{
  margin-top: 1vh;
  padding: 2vw;
}
.explore .btn-lg,
.explore .btn-lg:hover {
  border-radius: 30px;
  padding: 10px 25px;
  background-image: none;
  background: linear-gradient(90deg, rgb(198, 68, 252) 4%, rgb(191, 69, 249) 10%, rgb(94, 85, 216) 87%, rgb(88, 86, 214) 92%);
  color: #ffffff;
}

.btn, .btn:hover {
  background-image: none;
  color: #ffffff;
  box-shadow: none;
  outline: none;
}

.btn:focus,
.btn:active:focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn.active.focus {
  outline: none;
}
.introbtn{
  color: #ffffff;
  background-color: rgb(248, 155, 84);
  background-repeat:no-repeat;
  cursor:pointer;
  overflow: hidden;
  outline:none;
}
</style>
