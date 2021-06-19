<template>
  <div class="footer">
    <div class="next-image">
      <img src="../assets/favicon.svg">
    </div>
    <div class="contact-us">
      Contact us
    </div>
    <div class="support">
      <div>support@nextmovies.com</div>
      <div> Mon - Fri | 6:00 am - 5:00 pm PT</div>
    </div>
    <div class="social">
      <img src="../assets/facebook-share-icon.svg">
      <img src="../assets/linkedin-share-icon.svg">
      <img src="../assets/twitter-share-icon.svg">
      <img src="../assets/instagram-share-icon.svg">
      <img src="../assets/youtube-share-icon.svg">
    </div>
  </div>
</template>
<script>

export default {
  name: 'PageFooter',
};
</script>

<style lang="scss" scoped>
  .footer {
    height: 289px;
    background: #231F20 0% 0% no-repeat padding-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
      .next-image {
        padding: 30px;
      }
      .contact-us {
        font-size: 43px;
        font-family: Georgia;
        margin-bottom: 13px;
      }
      .support {
        text-align: center;
        font-family: Georgia;
        font-size: 16px;
        margin-bottom: 35px;
      }
      .social {
        > img {
          padding: 0px 15px;
        }
      }
    }

</style>
