<script setup>
import { shoppingcartStore } from '@/store/shoppingcart';
</script>

<template>
    <span>
        <strong>Livraison:</strong>
    </span>
    <select v-model="shoppingcartStore.deliveryCost"
        class="form-select py-1 px-2 block w-full rounded border border-gray-300 ml-2">
        <option value="5" >Standard - €5</option>
        <option value="15">Express - €15</option>
    </select>
</template>

<style scoped>

</style>