<template>
  <div class="movies-page">
    <div class="header">
      <page-header-bar></page-header-bar>
    </div>
    <div class="content">
      <movies-board></movies-board>
    </div>
    <div class="footer">
      <page-footer></page-footer>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import MoviesBoard from './MoviesBoard.vue';
import PageFooter from './PageFooter.vue';
import PageHeaderBar from './PageHeaderBar.vue';

export default {
  name: 'MoviesPage',
  components: {
    MoviesBoard,
    PageFooter,
    PageHeaderBar,
  },
  async beforeMount() {
    await this.fetchMovies();
  },
  methods: {
    ...mapActions({
      fetchMovies: 'fetchMovies',
    }),
  },
};
</script>

<style lang="scss" scoped>
  .movies-page {
    min-width: 375px;
    .header {
      height: 90px;
      border: 1px solid #cccccc;
      display: flex;
      align-items: center;
      .header-image {
        margin-left: 105px;
      }
    }
    .content {
      width: 100%;
    }
  }
  @media only screen and (max-width: 1100px) {
    /deep/ .vm--modal {
      width: 294px !important;
      height: 670px !important;
      top: 50px !important;
      margin: 0 auto;
      .detailed-preview {
        display: flex;
        flex-direction: column;
        .image-section {
          .large-image {
            display: none;
          }
          .small-image {
            display: block;
          }
        }
        .details-section {
          width: 215px;
        }
        .description-section {
          font-size: 20px;
        }
        .title-section {
          font-size: 18px;
          text-align: center;
          .rating-section {
            .rating-wrapper {
              .rating-views-info-wrapper {
                .rating-number {
                  display: none;
                }
                .rating-number-small {
                  display: block;
                }
              }
            }
          }
          .wrapper {
            .runtime-section {
              line-height: 30px;
              font-size: 16px;
            }
          }
        }
        .button-section {
          .back-btn {
            width: 215px;
          }
        }
        .image-section {
          > img {
            width: 180px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 770px) {
    .header {
      height: 78px;
    }
    /deep/ .header-bar {
      .header-image {
        margin-left: 10px;
      }
    }
    /deep/ .tile {
      width: 143px;
      height: 400px;
      .name {
        font-size: 17px;
      }
      .image {
        height: 214px;
        > img {
          width: 143px
        }
      }
    }
    /deep/ .movies-board {
      .title-wrapper {
        .title {
          font-size: 28px;
        }
      }
    }
    /deep/ .movies-grid {
      .movies-grid-container {
        padding: 0px 35px;
        grid-template-columns: repeat(auto-fill, 143px);
        grid-gap: 0.3rem;
      }
    }
  }
</style>
