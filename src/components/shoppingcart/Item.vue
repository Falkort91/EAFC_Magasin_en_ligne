<script setup>
import DeleteButton from '@/components/ui/DeleteButton.vue';
import QuantityChoice from '@/components/ui/QuantityChoice.vue';
import { shoppingcartStore } from '@/store/shoppingcart';

const props = defineProps({
     item:{type:Object, required:true},
})
const srcimg = `https://picsum.photos/300/200/?random=${props.item.id}`
</script>

<template>
   <ul class="divide-y divide-gray-200 space-y-4 p-6">
            <li class="flex justify-between items-center py-3">
              <div class="flex items-center">
                <img
                  :src="srcimg"
                  alt="Product"
                  class="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <span class="font-semibold">{{ props.item.name }}</span>
                  <span class="block text-sm text-gray-500">{{ props.item.price }} €</span>
                </div>
              </div>
              <div class="flex items-center">
                <quantity-choice :item="props.item"/>
                <delete-button @deleteItem="shoppingcartStore.deleteItem(props.item.id)"/>
              </div>
            </li>
            <!-- Repeat for other cart items -->
          </ul>
</template>

<style scoped>

</style>