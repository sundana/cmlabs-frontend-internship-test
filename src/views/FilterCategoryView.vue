<template>
  <FilterCategory :mealCategory="mealCategory" />
</template>

<script>
import FilterCategory from '../components/FilterCategory.vue';
import axios from 'axios';

export default {
  name: 'FilterCategoryView',
  components: { FilterCategory },
  data() {
    return {
      mealCategory: [],
    };
  },
  methods: {
    async getData() {
      const res = await axios(
        'https://www.themealdb.com/api/json/v1/1/categories.php'
      );
      const data = res.data.categories;
      return data;
    },
  },
  async created() {
    this.mealCategory = await this.getData();
  },
};
</script>
