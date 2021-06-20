<template>
  <div class="rating">
      <div class="rating-wrapper">
        <div class="rating-image">
          <img src="../assets/star-1.svg">
        </div>
          <div class="rating-number">
            <span class="text">
              {{ getScoreString(score) }}
            </span>
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
  },
  methods: {
    getScoreString(score) {
      let scoreString = 'Needs Review';
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
  display: flex;
  .rating-image {
    margin-right: 10px;
  }
  .rating-number {
    font-weight: lighter;
    font-size: 25px;
    font-family: system-ui;
  }
}
</style>
