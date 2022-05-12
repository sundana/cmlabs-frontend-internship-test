<template>
  <div>
    <h1>All Meal Categories</h1>
    <div class="card-wrapper">
      <div class="card">
        <router-link
          :to="{
            name: 'filter category',
            params: { category: category.strCategory },
          }"
          v-for="category in mealCategory"
          :key="category.idCategory"
          class="card-link"
        >
          <img :src="category.strCategoryThumb" alt="" />
          <h2>{{ category.strCategory }}</h2>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AllMealsCategory',
  data() {
    return {
      mealCategory: [],
    };
  },
  methods: {
    getData() {
      return axios(
        'https://www.themealdb.com/api/json/v1/1/categories.php'
      ).then(res => res.data.categories);
    },
  },
  async created() {
    this.mealCategory = await this.getData();
  },
};
</script>

<style scoped>
.card-wrapper {
  padding: 30px;
}

.card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2%;
  row-gap: 30px;
}

.card-link {
  padding: 1.5rem;
  min-height: 250px;
  text-align: center;
  text-decoration: none;
  background-color: rgba(255, 166, 0, 0.767);
  border-radius: 1rem;
  box-shadow: none;
  transition: all 250ms ease-in-out;
}

.card-link:hover {
  box-shadow: inset 1px 1px 25px black;
}

.card-link > img {
  width: 100%;
  display: block;
  margin: 0 auto;
}

@media only screen and (max-width: 805px) {
  .card {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 533px) {
  .card {
    grid-template-columns: 1fr;
  }
}

@media only screen and (min-width: 1038px) {
  .card {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
