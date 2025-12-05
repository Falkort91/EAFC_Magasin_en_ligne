<script setup>
import MyButton from '@/components/ui/MyButton.vue';
import DeliveryChoice from './DeliveryChoice.vue';
import { shoppingcartStore } from '@/store/shoppingcart';
</script>

<template>
   <div class="bg-gray-50">
            <div class="p-6">
              <div class="flex justify-between mb-1">
                <span><strong>Total HTVA:</strong></span>
                <span>{{ shoppingcartStore.subPrice }} €</span>
              </div>
              <div class="flex justify-between mb-1">
                <span><strong>Taxe (20%):</strong></span>
                <span>{{shoppingcartStore.TVA}} €</span>
              </div>
              <div class="flex justify-between items-center my-8">
                <delivery-choice/>
              </div>
              <div class="flex justify-between font-bold mb-1 text-xl">
                <span><strong>Total Général:</strong></span>
                <span>{{ shoppingcartStore.totalPrice }} €</span>
              </div>
              <my-button @click="shoppingcartStore.resetCart">
                Procéder au paiement
              </my-button>
            </div>
          </div>
</template>

<style scoped>

</style>