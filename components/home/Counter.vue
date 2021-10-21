<template>
  <div class="w-full min-h-screen shadow stats">
    <div
      class="stat place-items-center place-content-center bg-cover bg-fixed text-white"
      style=" background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(149, 95, 49, 0.9)), url('https://www.luckybelly.com/wp-content/uploads/2020/08/For-the-best-flavor-freshly-roasted-coffee-beans-need-time-to-degas.jpg');
"
    >
      <div v-observe-visibility="visibilityChanged" class="stat-title">
        Roasted
      </div>
      <div class="stat-value">
        <number
          ref="number1"
          animation-paused
          :from="0"
          :to="310"
          :duration="5"
          easing="Power4.easeIn"
          @complete="completed"
        />KG
      </div>
      <div class="stat-desc">
        Jan 1st - Feb 1st
      </div>
    </div>
    <div
      class="stat place-items-center place-content-center bg-cover bg-fixed text-white"
      style=" background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(149, 95, 49, 0.9)), url('https://unblast.com/wp-content/uploads/2018/06/Coffee-Bag-Package-Mockup-PSD.jpg');
"
    >
      <div v-observe-visibility="visibilityChanged" class="stat-title">
        Total Sales
      </div>
      <div class="stat-value">
        >
        <number
          ref="number2"
          animation-paused
          :from="0"
          :to="4200"
          :duration="5"
          easing="Power4.easeIn"
          @complete="completed"
        />
        bags
      </div>
      <div class="stat-desc">
        That is the truth
      </div>
    </div>
    <div
      class="stat place-items-center place-content-center bg-cover bg-fixed text-white"
      style=" background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(149, 95, 49, 0.9)), url('https://www.bigblogofgardening.com/wp-content/uploads/2020/11/coffee-beans-1650788_1280-B.jpg');
"
    >
      <div v-observe-visibility="visibilityChanged" class="stat-title">
        Export
      </div>
      <div class="stat-value">
        <number
          ref="number3"
          animation-paused
          :from="0"
          :to="22"
          :duration="5"
          easing="Power4.easeIn"
          @complete="completed"
        />
        Countries
      </div>
      <div class="stat-desc">
        We keep expanding
      </div>
    </div>
  </div>
</template>

<script>
export default {

  methods: {
    visibilityChanged (isVisible, entry) {
      // console.log('isVisible', isVisible)

      if (isVisible) {
        this.$refs.number1.play()
        this.$refs.number2.play()
        this.$refs.number3.play()
      }
    },
    completed () {
      console.log('Animation ends!')
    }
  }

}
</script>

<style scoped>
.opacity-50 {
    opacity: 0.5;
}
</style>
