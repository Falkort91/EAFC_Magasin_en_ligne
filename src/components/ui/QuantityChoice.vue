<script setup>
const props = defineProps({
     item:{type:Object, required:true},
})
</script>

<template>
   <input type="number"
            class="form-input mt-1 block w-16 text-center rounded text-gray-700 border-gray-300 border"
            :value="props.item.quantity"
            min="1"
    />
</template>

<style scoped>

</style>