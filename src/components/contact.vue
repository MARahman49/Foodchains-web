<template>
  <div class="home">
    <div class="text-center">
        <h1>Contact Us</h1>
        <div class="line"></div>
    </div>
    <div style="margin-top:10vh;">
        <b-card-group deck>
            <b-card>
                 <b-form @submit="onSubmit" v-if="show">
                     <b-form-group id="exampleInputGroup2"
                    label="Your Name:">
        <b-form-input
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group label="Email address:">
        <b-form-input type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group label="Subject:">
        <b-form-input type="text"
                      v-model="form.subject"
                      required
                      placeholder="Enter Subject">
        </b-form-input>
      </b-form-group>
      <b-form-group
                    label="Your Message:">
         <b-form-textarea
                     placeholder="Enter Message"
                     v-model="form.message"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
            </b-card>
            <b-card>
                <iframe frameborder="0"  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU&amp;q=place_id:ChIJ0Qhbdy1lsjURAodCsYcVLy4" allowfullscreen=""></iframe>
            </b-card>
        </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data() {
    return {
      form: {
        email: '',
        name: '',
      },
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
    },
  },
};
</script>

<style scoped>
.home{
    margin-top: 10vh;
    padding: 10vh 8vw 10vh 8vw;
}
iframe{
     width: 100%;
     min-height: 400px;
}
</style>
