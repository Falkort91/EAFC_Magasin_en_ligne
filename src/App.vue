<script setup>
import AppHeader from './components/AppHeader.vue';
import ShoppingCard from './components/shoppingcart/ShoppingCart.vue';
import AppFooter from './components/AppFooter.vue';
import ProductList from './components/catalog/ProductList.vue';
</script>

<template>
  <app-header/>
  <main class="container mx-auto py-8 px-4 flex flex-wrap">
    <product-list apiURL ="https://69307a0a778bbf9e00718f23.mockapi.io"/>
    <ShoppingCard />
  </main>
  <app-footer/>
</template>

<style scoped>

</style>