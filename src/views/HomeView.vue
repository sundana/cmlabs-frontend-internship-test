<template>
  <div class="home">
    <AllMealsCategory />
  </div>
</template>

<script>
import AllMealsCategory from '../components/AllMealsCategory.vue';
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: { AllMealsCategory },
};
</script>
