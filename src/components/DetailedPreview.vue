<template>
  <div class="detailed-preview">
    <div class="image-section">
      <img class="large-image" :src="movie.largeimage">
      <img class="small-image" :src="movie.image">
    </div>
    <div class="details-section">
      <div class="title-section">
          {{ movie.title }}
      </div>
      <div class="rating-section">
        <div class="runtime"> {{ buildRuntimeString() }}  </div>
        <span class="divider"> | </span>
        <rating :withDivider="true" :score="movie.rating"></rating>
      </div>
      <div class="description-section">
        <p v-html="movie.synopsis"></p>
      </div>
      <div class="button-section">
        <button class="back-btn" @click="hidePreviewModal()">
          <div class="btn-arrow">
            <img src="../assets/back-arrow.svg">
          </div>
          <div class="btn-text">Back to list</div>
        </button>
      </div>
    </div>
  </div>
</template>
<script>

import { mapGetters } from 'vuex';
import Rating from './Rating.vue';

export default {
  name: 'DetailedPreview',
  components: {
    Rating,
  },
  methods: {
    hidePreviewModal() {
      this.$emit('closeModal');
    },
    buildRuntimeString() {
      const { runtime } = this.movie;
      const [hours, minutes] = runtime.split('h');
      return `${hours}h  ${minutes}`;
    },
  },
  computed: {
    ...mapGetters({
      movie: 'getSelectedMovie',
    }),
  },
};
</script>

<style lang="scss" scoped>
.detailed-preview {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  .image-section {
    .small-image {
      display: none;
    }
    .large-image {
      display: block;
    }
  }
  .details-section {
    height: 402px;
    width: 500px;
    position: relative;
    .rating-section {
      display: flex;
      font-size: 25px;
      font-family: system-ui;
      font-weight: 100;
      .runtime {
        text-align: left;
        letter-spacing: -0.5px;
        text-transform: capitalize;
      }
      .divider {
        text-align: left;
        letter-spacing: -0.5px;
        text-transform: capitalize;
        margin: 0px 15px;
      }
    }
    .title-section {
      font-size: 40px;
      text-transform: uppercase;
    }
    .description-section {
      text-align: left;
      letter-spacing: -0.6px;
      text-transform: lowercase;
      font-size: 22px;
    }
    .button-section {
      position: absolute;
      bottom: 0px;
      .back-btn {
        width: 150px;
        border-radius: 23px;
        height: 42px;
        border: 1px solid #000000;
        cursor: pointer;
        text-align: left;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .btn-text {
          padding-right: 12px;
        }
        .btn-arrow {
          padding-left: 12px;
        }
      }
    }
  }
}
</style>
