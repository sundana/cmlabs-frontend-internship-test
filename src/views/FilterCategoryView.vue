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
      // sintaks this.axios tidak selalu berjalan, oleh sebab itu saya gunakan sintaks umum
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
