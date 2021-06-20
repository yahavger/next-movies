import {mount, shallowMount} from '@vue/test-utils';
import SearchBy from '../../src/components/SearchBy.vue';

describe('SearchBy', () => {
  let searchBy;
  let $emit;
  let handleClick;
  afterEach(() => {
    jest.clearAllMocks();
    if (searchBy) {
      searchBy.destroy();
    }
  });
  function createSearchByComponent(props, isStub) {
    $emit = jest.fn();
    const stubs = {};
    if (isStub) {
      stubs['v-select'] = {
        template: '<button @click="$listeners.click"></button>',
      };
    }
    return mount(SearchBy, {
      mocks: {
        $emit
      },
      stubs,
      propsData: {
        selectOptions: props && props.selectOptions,
        selectedSearchAttr: props && props.selectedSearchAttr,
      },
    });
  }
  function createSearchByComponentShallowMount(props, isStub) {
    $emit = jest.fn();
    handleClick = jest.fn();
    const stubs = {};
    if (isStub) {
      stubs['v-select'] = {
        template: '<button></button>',
      };
    }
    return shallowMount(SearchBy, {
      mocks: {
        $emit
      },
      listeners: {
        click: handleClick
      },
      stubs,
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
  describe('When text is added to searchBy input', () => {
    it('Should trigger emit event', async () => {
      searchBy = createSearchByComponent();
      const input = searchBy.find('.search-input');
      expect(input.exists()).toBeTruthy();
      await input.setValue('e');
      expect($emit).toHaveBeenCalledWith('termChanged', 'e');
    });
  });
  describe('When method setSelected is triggered', () => {
    it('Should trigger emit event and set the selected value', async () => {
      const localThis = {
        $emit: jest.fn(),
        selected: ''
      };
      SearchBy.methods.setSelected.call(localThis, { name: 'Rating' });
      expect(localThis.$emit).toHaveBeenCalled();
      expect(localThis.selected).toBe('Rating');
    });
  });
});
