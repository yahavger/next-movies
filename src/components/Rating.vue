<template>
  <div class="rating">
      <div class="rating-wrapper">
        <div class="rating-image">
          <img src="../assets/star-1.svg">
        </div>
          <div class="rating-number">
            <span v-if="score">
              {{ score }} / 10
            </span>
            <span v-else>
              Needs review
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
