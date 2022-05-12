<template>
  <div>
    <div v-for="detail in details" class="food-container">
      <h2 class="food-name dark-text">{{ detail.strMeal }}</h2>
      <div class="post-container">
        <div class="post-img">
          <img class="feature-img" :src="detail.strMealThumb" alt="" />
        </div>
        <div class="food-post">
          <h3 class="dark-text">Instructions</h3>
          <p class="dark-text">{{ detail.strInstructions }}</p>
          <h3 class="dark-text">Recipes</h3>
          <Recipes :details="details" />
        </div>
        <div class="food-tutorial">
          <h3 class="dark-text">Tutorial Video</h3>
          <iframe
            :src="youtube"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Recipes from '../components/Recipes.vue';

export default {
  name: 'FoodDetails',
  components: { Recipes },
  data() {
    return {
      details: [],
      youtube: [],
      id: this.$route.params.id,
    };
  },
  methods: {
    async fetchData() {
      const res = await axios(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.id}`
      );
      const data = await res.data.meals;
      return data;
    },
  },
  async created() {
    this.details = await this.fetchData();
    this.youtube = this.details[0].strYoutube.replace('watch?v=', 'embed/');
  },
};
</script>

<style>
p {
  line-height: 1.75;
}

.dark-text {
  color: #383b37;
}

.food-container {
  padding: 2%;
}

.food-name {
  font-weight: bold;
  font-size: 2rem;
}

.post-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1.5rem;
  padding: 1.25rem;
}

.post-img {
  padding: 1rem;
}

.feature-img {
  display: block;
  width: 100%;
  border-radius: 1rem;
  box-shadow: 2px 2px 5px #383b37;
}

.food-post {
  padding: 1rem;
}

.food-post > h3 {
  margin: 0;
}

.food-tutorial {
  grid-column: 1 / 3;
  text-align: center;
}

.food-tutorial > iframe {
  display: block;
  margin: 0 auto;
  width: 100%;
  min-height: 480px;
}

@media only screen and (max-width: 651px) {
  .post-container {
    display: block;
  }
}
</style>
