<template>
  <div class="rating" v-if="score">
      <div class="rating-wrapper" >
        <div class="rating-image">
          <img src="../assets/star-1.svg">
        </div>
          <div :class=" views === '' ? 'rating-info-wrapper' : 'rating-views-info-wrapper'">
            <div class="rating-number">
              <div class="text">
                {{ getScoreString(score) }}
              </div>
              <div v-if="views" class="views">
                  {{ views }}
              </div>
            </div>
            <div class="rating-number-small">
              <div class="text">
                {{ getScoreString(score) }} |  {{ views }}
              </div>
            </div>
          </div>
      </div>
    </div>
</template>
<script>

export default {
  name: 'Rating',
  props: {
    score: {
      type: String,
    },
    withDivider: {
      type: Boolean,
      default: false,
    },
    views: {
      type: String,
      default: '',
    },
  },
  methods: {
    getScoreString(score) {
      console.info(`enter Rating:getScoreString, params: { score: ${score} }`);
      let scoreString;
      if (score) {
        if (this.withDivider) {
          scoreString = `${score} / 10`;
        } else {
          scoreString = score;
        }
      }
      return scoreString;
    },
  },
};
</script>

<style lang="scss" scoped>
.rating-wrapper {
  align-items: center;
  display: flex;
  font-family: system-ui;
  .rating-image {
    margin-right: 10px;
  }
  .rating-number {
    text-align: left;
    font-weight: lighter;
  }
  .rating-number-small {
    text-align: left;
    font-weight: lighter;
    display: none;
  }
  .rating-info-wrapper {
    .rating-number {
      font-size: 25px;
    }
    .rating-number-small {
      font-size: 25px;
      display: none;
    }
  }
  .rating-views-info-wrapper {
    .rating-number {
      font-size: 15px;
    }
    .rating-number-small {
      font-size: 15px;
      display: none;
    }
    .views {
      font-size: 15px;
    }
  }
}
</style>
