<script setup>
import DeleteButton from '@/components/ui/DeleteButton.vue';
import QuantityChoice from '@/components/ui/QuantityChoice.vue';
</script>

<template>
   <ul class="divide-y divide-gray-200 space-y-4 p-6">
            <li class="flex justify-between items-center py-3">
              <div class="flex items-center">
                <img
                  src="https://picsum.photos/300/200/?random=1"
                  alt="Product"
                  class="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <span class="font-semibold">Produit 1</span>
                  <span class="block text-sm text-gray-500">€50.00</span>
                </div>
              </div>
              <div class="flex items-center">
                <quantity-choice/>
                <delete-button/>
              </div>
            </li>
            <!-- Repeat for other cart items -->
          </ul>
</template>

<style scoped>

</style>