<template>
  <div class="min-h-screen text-center p-20">
    <h1 class="text-6xl font-bold">
      Our best selling coffee ever!
    </h1>

    <div class="flex items-center justify-around my-10">
      <div
        v-for="coffee in bestselling"
        :key="coffee.title"
        class="card text-center shadow-md flex-1 mx-5"
      >
        <figure class>
          <img
            src="http://unblast.com/wp-content/uploads/2018/06/Coffee-Bag-Mockup.jpg"
            class
          >
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            {{ coffee.title }}
          </h2>
          <p>{{ coffee.description }}</p>
          <p>Roast level: {{ coffee.roast_level }}</p>
          <p>Taste note: {{ coffee.taste_note.toString() }}</p>
          <div class="justify-center card-actions">
            <button class="btn btn-outline btn-accent">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="typescript">
export default {

  data () {
    return {
      bestselling: [
        {
          title: 'Coffee 1',
          description: 'Best coffee 1',
          taste_note: ['Orange, Sweet aroma'],
          roast_level: 'Dark'
        }, {
          title: 'Coffee 2',
          description: 'Best coffee 2',
          taste_note: ['Orange, Sweet aroma'],
          roast_level: 'Dark'
        }, {
          title: 'Coffee 3',
          description: 'Best coffee 3',
          taste_note: ['Orange, Sweet aroma'],
          roast_level: 'Dark'
        }

      ]
    }
  }

}
</script>

<style>
</style>
