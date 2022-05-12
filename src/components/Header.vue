<template>
  <header>
    <div class="logo-wrapper">
      <router-link :to="{ name: 'home' }" class="logo">mealsapp</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
header {
  background-color: #f8ede3;
  color: #eee;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  font-family: 'Inter', sans-serif;
  border-bottom: 3px solid #798777;
  margin-bottom: 80px;
}

.logo-wrapper {
  margin: 0 auto;
}

.logo {
  text-align: center;
  font-size: 3rem;
  font-weight: 900;
  -webkit-font-smoothing: antialiased;
  background: -webkit-linear-gradient(#3f87a6, #f69d3c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
}
</style>
