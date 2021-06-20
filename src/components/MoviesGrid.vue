<template>
    <div class="movies-grid">
      <ul class="movies-grid-container" >
        <li v-for="movie in gridData" :key="movie.id">
          <movie-tile
            :movie="movie"
            @buttonClicked="onTileButtonClicked(movie.id)">
          </movie-tile>
        </li>
      </ul>
    </div>
</template>
<script>

import MovieTile from './MovieTile.vue';

export default {
  name: 'MoviesGrid',
  components: {
    MovieTile,
  },
  props: {
    gridData: {
      type: Array,
    },
  },
  methods: {
    onTileButtonClicked(id) {
      console.info(`MoviesGrid: onTileButtonClicked id:${id}`);
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
