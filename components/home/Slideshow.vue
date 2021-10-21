<template>
  <div class="min-h-screen p-0">
    <VueSlickCarousel v-bind="settings" class="h-full object-cover overflow-hidden">
      <div
        v-for="image in imageList"
        :key="image"
        class="min-h-screen bg-cover hero"
        :style="{ backgroundImage: `url(${require('@/assets/coffee/' + image)})` }"
      >
        <div class="hero-overlay bg-opacity-60" />

        <div class="text-center hero-content text-neutral-content h-screen max-w-full">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">
              Hello there
            </h1>
            <p
              class="mb-5"
            >
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button class="btn btn-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>

export default {

  data () {
    return {
      imageList: [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg'
      ],
      settings: {
        lazyLoad: 'ondemand',
        dots: false,
        fade: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        centerPadding: '0%'

      }
    }
  }

}

</script>

<style>
.hero {
  /* background-image: url('~/assets/coffee/4.jpg'); */
}

div.slick_track {
  width: 100vw !important;
}
</style>
