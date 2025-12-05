<script setup>

const emits = defineEmits(['deleteItem'])

</script>


<template>
   <button class="ml-2 text-red-500 hover:text-red-700"
            @click="$emit('deleteItem')">
        <i class="fas fa-times"></i>
    </button>
</template>

<style scoped>

</style>