import VueRouter from 'vue-router';
import MoviesPage from '../components/MoviesPage.vue';

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/next-movies',
    },
    {
      name: 'nextMovies',
      path: '/next-movies',
      component: MoviesPage,
    },
  ],
});
