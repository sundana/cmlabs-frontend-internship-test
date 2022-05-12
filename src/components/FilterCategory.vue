<template>
  <div>
    <h1>Category: {{ $route.params.category }}</h1>
    <p class="category-description">
      {{ filterCategory[0]?.strCategoryDescription }}
    </p>
    <div class="card-wrapper">
      <div class="card">
        <router-link
          :to="{
            name: 'FoodDetails',
            params: { category: $route.params.category, id: meal.idMeal },
          }"
          v-for="meal in meals"
          :key="meal.idMeal"
          class="card-link"
          :style="{ backgroundImage: 'url(' + meal.strMealThumb + ')' }"
        >
          <h3>{{ meal.strMeal }}</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FilterCategory',
  props: {
    mealCategory: {
      type: Array,
    },
  },
  data() {
    return {
      meals: [],
      filterCategory: [],
      id: this.$route.params.category,
    };
  },
  methods: {
    async fetchData() {
      const res = await axios(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.id}`
      );
      const data = await res.data.meals;
      return data;
    },
  },
  async created() {
    this.meals = await this.fetchData();
    this.filterCategory = this.mealCategory.filter(
      item => item.strCategory === this.$route.params.category
    );
  },
};
</script>

<style scoped>
.category-description {
  background-color: #e4f0e0;
  max-width: 750px;
  padding: 1rem;
  margin: 0 auto;
  margin-bottom: 40px;
  text-align: justify;
  border: 1px solid #575e55;
}

.card-wrapper {
  padding: 2rem;
}

.card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.card-link {
  position: relative;
  border-radius: 9px;
  min-height: 230px;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 500ms;
  padding-top: 50%;
  text-decoration: none;
  overflow: hidden;
  box-shadow: 1px 1px 10px #70776e;
}

.card-link:hover {
  transform: scale(1.05);
  z-index: 1;
  box-shadow: inset 0 -6.5rem 70px hsl(12, 50%, 0%, 0.7);
  padding-left: 10px;
  padding-right: 10px;
}

.card-link > h3 {
  text-align: center;
  color: #eee;
  font-weight: bold;
  transform: translateY(10rem);
  transition: transform 500ms;
}

.card-link:hover > h3 {
  transform: translateY(0);
}

@media only screen and (min-width: 536px) {
  .card {
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (min-width: 914px) {
  .card {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media only screen and (min-width: 1145px) {
  .card {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
