<template>
  <div class="header-bar">
      <img class="header-image" alt="Vue logo" src="../assets/Logo2.png">
  </div>
</template>
<script>

export default {
  name: 'PageHeaderBar',
};
</script>

<style lang="scss" scoped>
  .header-bar {
    > img {
      width: 158px
    }
    .header-image {
      margin-left: 105px;
    }
  }
</style>
