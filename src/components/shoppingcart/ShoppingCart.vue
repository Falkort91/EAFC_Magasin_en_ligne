<script setup>
import Item from './Item.vue';
import RecapPrice from './components/RecapPrice.vue';
</script>

<template>
   <aside class="w-full md:w-1/3 px-4">
        <h2 class="text-xl font-bold mb-4">Votre Panier</h2>
        <div class="cart bg-white rounded-lg shadow animate__animated">
          <item/>
          <recap-price/>
        </div>
      </aside>
</template>

<style scoped>

</style>