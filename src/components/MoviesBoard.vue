<template>
    <div class="movies-board">
      <div class="title-wrapper">
        <span v-html="boardTitle" class="title"> </span>
      </div>
      <div class="search-by">
        <search-by :selectOptions="filterSelectOptions"
                   @selected="onsSearchAttrSelected"
                   @termChanged="onsSearchTermChanged"
                   :selectedSearchAttr="searchAttr">
        </search-by>
      </div>
      <div class="board">
        <movies-grid
          :gridData="filteredMoviesArray"
          @onMovieSelected="onMovieSelected">
        </movies-grid>
      </div>
      <div>
        <modal width="1000"
               height="500"
               :adaptive="true"
               :clickToClose="false"
               name="movie-preview-modal">
          <detailed-preview @closeModal="hidePreviewModal"></detailed-preview>
        </modal>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import MoviesGrid from './MoviesGrid.vue';
import SearchBy from './SearchBy.vue';
import DetailedPreview from './DetailedPreview.vue';

export default {
  name: 'MoviesBoard',
  components: {
    SearchBy,
    MoviesGrid,
    DetailedPreview,
  },
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      moviesList: [],
      boardTitle: 'EXPLORE YOUR NEXT<br>MOVIES AND TV SHOWS',
      search: '',
      searchAttr: {
        name: 'Title',
        value: 'title',
      },
      filterSelectOptions: [
        { name: 'Title', value: 'title' },
        { name: 'Rating', value: 'rating' },
        { name: 'Runtime', value: 'runtime' },
      ],
    };
  },
  methods: {
    onsSearchAttrSelected(searchAttr) {
      console.info(`enter MoviesBoard:onsSearchAttrSelected, params: ${JSON.stringify(searchAttr)}`);
      this.searchAttr = searchAttr;
    },
    onsSearchTermChanged(term) {
      console.info(`enter MoviesBoard:onsSearchTermChanged, params: ${term}`);
      this.search = term;
    },
    async onMovieSelected(id) {
      console.info(`enter MoviesBoard:onMovieSelected, params: ${id}`);
      await this.fetchSelectedMovieById(id);
      this.$modal.show('movie-preview-modal');
    },
    hidePreviewModal() {
      console.info('enter MoviesBoard:hidePreviewModal');
      this.$modal.hide('movie-preview-modal');
    },
    ...mapActions({
      fetchSelectedMovieById: 'fetchSelectedMovieById',
    }),
  },
  computed: {
    ...mapGetters({
      moviesData: 'getMoviesList',
    }),
    filteredMoviesArray() {
      console.info('enter MoviesBoard:filteredMoviesArray');
      function compare(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }
      return this.moviesData.filter((movie) => movie[this.searchAttr.value].toLowerCase()
        .includes(this.search.toLowerCase())).sort(compare);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .movies-board {
    min-height: 650px;
    border-right: 1px solid #cccccc;
    border-left: 1px solid #cccccc;
    background: #00D7FF 0% 0% no-repeat padding-box;
    .title-wrapper {
      padding-top: 75px;
      padding-bottom: 35px;
      text-align: center;
      .title {
        font-weight: bold;
        font-size: 80px;
      }
    }
    .search-by {
      padding-bottom: 20px;
    }
  }
</style>
