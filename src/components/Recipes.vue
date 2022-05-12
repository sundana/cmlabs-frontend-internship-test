<template>
  <div class="recipe">
    <ul>
      <li v-if="details[0].strIngredient1 != '' || null">
        {{ details[0].strMeasure1 }} {{ details[0].strIngredient1 }}
      </li>
      <li v-if="details[0].strIngredient2 != '' || null">
        {{ details[0].strMeasure2 }} {{ details[0].strIngredient2 }}
      </li>
      <li v-if="details[0].strIngredient3 != '' || null">
        {{ details[0].strMeasure3 }} {{ details[0].strIngredient3 }}
      </li>
      <li v-if="details[0].strIngredient4 != '' || null">
        {{ details[0].strMeasure4 }} {{ details[0].strIngredient4 }}
      </li>
      <li v-if="details[0].strIngredient5 != '' || null">
        {{ details[0].strMeasure5 }} {{ details[0].strIngredient5 }}
      </li>
      <li v-if="details[0].strIngredient6 != '' || null">
        {{ details[0].strMeasure6 }} {{ details[0].strIngredient6 }}
      </li>
      <li v-if="details[0].strIngredient7 != '' || null">
        {{ details[0].strMeasure7 }} {{ details[0].strIngredient7 }}
      </li>
      <li v-if="details[0].strIngredient8 != '' || null">
        {{ details[0].strMeasure8 }} {{ details[0].strIngredient8 }}
      </li>
      <li v-if="details[0].strIngredient9 != '' || null">
        {{ details[0].strMeasure9 }} {{ details[0].strIngredient9 }}
      </li>
      <li v-if="details[0].strIngredient10 != '' || null">
        {{ details[0].strMeasure10 }} {{ details[0].strIngredient10 }}
      </li>
      <li v-if="details[0].strIngredient11 != '' || null">
        {{ details[0].strMeasure11 }} {{ details[0].strIngredient11 }}
      </li>
      <li v-if="details[0].strIngredient12 != '' || null">
        {{ details[0].strMeasure12 }} {{ details[0].strIngredient12 }}
      </li>
      <li v-if="details[0].strIngredient13 != '' || null">
        {{ details[0].strMeasure13 }} {{ details[0].strIngredient13 }}
      </li>
      <li v-if="details[0].strIngredient14 != '' || null">
        {{ details[0].strMeasure14 }} {{ details[0].strIngredient14 }}
      </li>
      <li v-if="details[0].strIngredient15 != '' || null">
        {{ details[0].strMeasure15 }} {{ details[0].strIngredient15 }}
      </li>
      <li v-if="details[0].strIngredient16 != '' || null">
        {{ details[0].strMeasure16 }} {{ details[0].strIngredient16 }}
      </li>
      <li v-if="details[0].strIngredient17 != '' || null">
        {{ details[0].strMeasure17 }} {{ details[0].strIngredient17 }}
      </li>
      <li v-if="details[0].strIngredient18 != '' || null">
        {{ details[0].strMeasure18 }} {{ details[0].strIngredient18 }}
      </li>
      <li v-if="details[0].strIngredient19 != '' || null">
        {{ details[0].strMeasure19 }} {{ details[0].strIngredient19 }}
      </li>
      <li v-if="details[0].strIngredient20 != '' || null">
        {{ details[0].strMeasure20 }} {{ details[0].strIngredient20 }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    details: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.recipe > ul > li {
  color: #383b37;
}
</style>
