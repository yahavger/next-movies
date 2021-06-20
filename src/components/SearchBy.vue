<template>
    <div class="search-by">
      <span class="label">
        Search By :
      </span>
      <v-select label="name"
                :clearable="false"
                class="select"
                :value="selectedSearchAttr"
                :options="selectOptions"
                @input="setSelected"></v-select>
      <input class="search-input" v-model="term">
    </div>
</template>
<script>
export default {
  name: 'SearchBy',
  data() {
    return {
      term: '',
    };
  },
  watch: {
    term(value) {
      console.info(`enter SearchBy:term watch, params: { value: ${value} }`);
      this.$emit('termChanged', value);
    },
  },
  methods: {
    setSelected(value) {
      console.info(`enter SearchBy:setSelected: params: { value: ${JSON.stringify(value)} }`);
      this.selected = value.name;
      this.$emit('selected', value);
    },
  },
  props: {
    selectOptions: {
      type: Array,
    },
    selectedSearchAttr: {
      type: Object,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .search-by{
    display: flex;
    justify-content: center;
    .label {
      display: flex;
      align-items: center;
      margin-right: 3px;
      font-size: 15px;
    }
    .select {
      width: 160px;
    }
  }
</style>
