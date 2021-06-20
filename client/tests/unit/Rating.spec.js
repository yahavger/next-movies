import { mount } from '@vue/test-utils';
import Rating from '../../src/components/Rating.vue';

function createRatingComponent(props) {
  return mount(Rating, {
    propsData: {
      score: props && props.score,
      withDivider: props && props.withDivider,
    },
  });
}

describe('Rating', () => {
  let ratingWrapper;
  describe('when the rating component created no score rating', () => {
    it('Should be defined', () => {
      ratingWrapper = createRatingComponent();
      expect(ratingWrapper).toBeDefined();
    });
    it('Should create component that present "Needs Review"', () => {
      ratingWrapper = createRatingComponent();
      expect(ratingWrapper.html()).toContain('Needs Review');
    });
    it('Should Create components that present score of 4.6', () => {
      ratingWrapper = createRatingComponent({
        score: '4.6'
      });
      expect(ratingWrapper.html()).toContain('4.6');
    });
    it('Should Create components that present score with divider of 4.6 / 10', () => {
      ratingWrapper = createRatingComponent({
        score: '4.6',
        withDivider: true,
      });
      expect(ratingWrapper.html()).toContain('4.6 / 10');
    });
  });
});
