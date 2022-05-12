import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FilterCategoryView from '../views/FilterCategoryView.vue';
import FoodDetails from '../views/FoodDetails.vue';
import PageNotFound from '../views/PageNotFound.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/:category',
    name: 'filter category',
    component: FilterCategoryView,
  },
  {
    path: '/:category/:id',
    name: 'FoodDetails',
    component: FoodDetails,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
