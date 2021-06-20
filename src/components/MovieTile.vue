<template>
    <div class="tile">
      <div class="image">
        <img :src="movie.image" >
      </div>
      <div class="name">
        <span class="name-text" v-html="movie.title"></span>
      </div>
      <div class="rating">
        <rating :score="movie.rating"></rating>
      </div>
      <div class="more">
        <button class="more-btn" @click="onButtonClicked">
          <div class="btn-text">Read More</div>
          <div class="btn-arrow">
            <img src="../assets/arrow.svg">
          </div>
        </button>
      </div>
    </div>
</template>
<script>
import Rating from './Rating.vue';

export default {
  name: 'MovieTile',
  components: {
    Rating,
  },
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onButtonClicked() {
      console.info(`MovieTile: onButtonClicked enter id selected ${this.id}`);
      this.$emit('buttonClicked', this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
  .tile {
    padding: 5px;
    width: 260px;
    margin-bottom: 70px;
    .image {
      height: 364px;
      > img {
        width: 260px
      }
    }
    .name {
      height: 95px;
      margin-top: 10px;
      font-size: 25px;
      letter-spacing: -0.6px;
      text-align: left;
      text-transform: capitalize;
    }
    .more {
      padding-top: 20px;
      .more-btn {
        cursor: pointer;
        width: 100%;
        height: 42px;
        text-align: left;
        border-radius: 23px;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .btn-text {
          padding-left: 12px;
        }
        .btn-arrow {
          padding-right: 12px;
        }
      }
    }
  }
</style>
