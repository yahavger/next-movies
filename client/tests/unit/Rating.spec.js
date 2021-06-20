import { mount } from '@vue/test-utils';
import Rating from '../../src/components/Rating.vue';

function createRatingComponent(props) {
  return mount(Rating, {
    propsData: {
      score: props && props.score,
      withDivider: props && props.withDivider,
      views: props && props.views,
    },
  });
}

describe('Rating', () => {
  let ratingWrapper;
  describe('when the rating component created', () => {
    it('Should be defined', () => {
      ratingWrapper = createRatingComponent();
      expect(ratingWrapper).toBeDefined();
    });
  });
  describe('when the rating component created with no score', () => {
    it('Should create the component without present the score', () => {
      ratingWrapper = createRatingComponent();
      expect(ratingWrapper.html()).toContain('');
    });
  });
  describe('when the rating component created with score', () => {
    it('Should Create components with the score', () => {
      ratingWrapper = createRatingComponent({
        score: '4.6'
      });
      expect(ratingWrapper.html()).toContain('4.6');
    });
    it('Should Create components with score divided by 10', () => {
      ratingWrapper = createRatingComponent({
        score: '4.6',
        withDivider: true,
      });
      expect(ratingWrapper.html()).toContain('4.6 / 10');
    });
  });
  describe('when the rating component created with score, views and divider', () => {
    it('Should Create components with score divided by 10 and views bellow', () => {
      ratingWrapper = createRatingComponent({
        score: '4.6',
        withDivider: true,
        views: '1,865,173'
      });
      expect(ratingWrapper.html()).toContain('4.6 / 10');
      expect(ratingWrapper.html()).toContain('1,865,173');
    });
  })
  describe('when the rating component created with score, views', () => {
    it('Should Create components with score and views bellow', () => {
      ratingWrapper = createRatingComponent({
        score: '4.6',
        withDivider: true,
        views: '1,865,173'
      });
      expect(ratingWrapper.html()).toContain('4.6');
      expect(ratingWrapper.html()).toContain('1,865,173');
    });
  })
});
