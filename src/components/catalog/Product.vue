<script setup>
import MyButton from '@/components/ui/MyButton.vue';
import {shoppingcartStore} from '@/store/shoppingcart';

const props = defineProps({
     product:{type:Object, required:true},
})
const srcimg = `https://picsum.photos/300/200/?random=${props.product.id}`
</script>

<template>
    <article class="bg-white rounded-lg overflow-hidden shadow-md">
        <img :src="srcimg"
            alt="Product image"
            class="w-full"
        />
        <div class="p-4">
            <h2 class="font-bold text-lg mb-2">
                {{ product.name }}
            </h2>
            <p class="text-gray-700">{{ product.price }} €</p>
            <my-button @click="shoppingcartStore.addItem(props.product)">
                Ajouter
            </my-button>
        </div>
    </article>
</template>

<style scoped>

</style>