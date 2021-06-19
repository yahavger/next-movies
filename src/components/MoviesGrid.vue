<template>
    <div class="movies-grid">
      <ul class="movies-grid-container" >
        <li v-for="movie in gridData" :key="movie.id">
          <movie-card
            :movie="movie"
            @buttonClicked="onCardButtonClicked(movie.id)">
          </movie-card>
        </li>
      </ul>
    </div>
</template>
<script>

import MovieCard from './MovieCard.vue';

export default {
  name: 'MoviesGrid',
  components: {
    MovieCard,
  },
  props: {
    gridData: {
      type: Array,
    },
  },
  methods: {
    onCardButtonClicked(id) {
      console.info(`MoviesGrid: onCardButtonClicked id:${id}`);
      this.$emit('onMovieSelected', id);
    },
  },
};

</script>
<style lang="scss" scoped>
  .movies-grid {
    .movies-grid-container {
      padding: 0px 106px;
      display: grid;
      grid-template-columns: repeat(auto-fill, 260px);
      grid-gap: 1rem;
      justify-content: space-between;
      margin-block-end: 0px;

      /* boring properties */
      list-style: none;
      .movies-grid-item {
        height: auto;
      }
    }
  }
</style>
