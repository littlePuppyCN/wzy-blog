<template>
    <div class="card box_shadow" :class="{ scale: props.config?.scale || false }" :style="{ ...props.style || {} }">
        <slot />
    </div>
</template>

<script setup>
const props = defineProps(['config', 'style'])
</script>

<style  scoped>
.card {
    height: 220px;
    color: black;
    padding: 20px;
}

h1 {
    text-align: center;
    font-size: 1.5em;
    margin: 20px 0;
}

p {
    height: 80px;
}

.bot {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.tags {
    display: flex;
}

.tags div {
    margin-left: 10px;
}
</style>