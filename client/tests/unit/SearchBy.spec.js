import { mount } from '@vue/test-utils';
import SearchBy from '../../src/components/SearchBy.vue';

describe('SearchBy', () => {
  let searchBy;
  let $emit;
  afterEach(() => {
    jest.clearAllMocks();
    if (searchBy) {
      searchBy.destroy();
    }
  });
  function createSearchByComponent(props) {
    $emit = jest.fn();
    return mount(SearchBy, {
      mocks: {
        $emit
      },
      propsData: {
        selectOptions: props && props.selectOptions,
        selectedSearchAttr: props && props.selectedSearchAttr,
      },
    });
  }

  let ratingWrapper;
  describe('When searchBy component created', () => {
    it('Should be defined', () => {
      searchBy = createSearchByComponent();
      expect(searchBy).toBeDefined();
    });
  });
});
