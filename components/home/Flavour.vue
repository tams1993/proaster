<template>
  <div class="min-h-screen text-center p-20">
    <h1
      v-observe-visibility="visibilityChanged"
      class="text-6xl font-bold"
    >
      By Flavour?
    </h1>
    <!-- <div class="flex items-center justify-around my-10 before-enter " :class="[addClass]"> -->
    <div>
      <transition-group tag="div" name="slide" class="flex items-center justify-around my-10">
        <div
          v-for="flavour in FlavoursArray"
          :key="flavour.title"
          class="card text-center shadow-md flex-1 mx-5 bg-opacity-50 hover:bg-opacity-100 hover:scale-110 transition-all duration-100 ease-linear"
          :class="flavour.color"
        >
          <div>
            <figure class>
              <img
                src="http://unblast.com/wp-content/uploads/2018/06/Coffee-Bag-Mockup.jpg"
                class
              >
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                {{ flavour.title }}
              </h2>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script lang="typescript">
export default {

  data () {
    return {
      show: false,
      addClass: '',
      flavourVisible: false,
      flavours: [
        {
          title: 'Fruity',
          description: 'Best coffee 1',
          taste_note: ['Orange, Sweet aroma'],
          roast_level: 'Dark',
          color: 'bg-red-500'
        }, {
          title: 'Citrus + Floral',
          description: 'Best coffee 2',
          taste_note: ['Orange, Sweet aroma'],
          roast_level: 'Dark',
          color: 'bg-yellow-500'
        }, {
          title: 'Nutty',
          description: 'Best coffee 3',
          taste_note: ['Orange, Sweet aroma'],
          roast_level: 'Dark',
          color: 'bg-yellow-700'

        },
        {
          title: 'Choclate + Caramel',
          description: 'Best coffee 3',
          taste_note: ['Orange, Sweet aroma'],
          roast_level: 'Dark',
          color: 'bg-yellow-900'

        }

      ]
    }
  },
  computed: {
    FlavoursArray () {
      return this.flavourVisible ? this.flavours : []
    }
  },
  methods: {
    visibilityChanged (isVisible, entry) {
      console.log('isVisible', isVisible)

      if (isVisible) {
        this.flavourVisible = isVisible
        // this.addClass = 'enter'
      }
    }
  }

}
</script>

<style>

.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(0, 100%);
}
.slide-leave-to {
  transform: translate(0, -100%);
}

.before-enter  {
  opacity: 0;
  transform: scale(0.6);
  transition: all 0.5s ease-out;
}

.enter {
    opacity: 1;
  transform: scale(1);
}

</style>
