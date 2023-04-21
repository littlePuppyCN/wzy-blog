<template>
    <Card :config="{scale:true}">
        <h1>{{ title }}</h1>
        <p>{{ content }}</p>
        <div class="bot">
            <div>{{ date }}</div>
            <div class="tags">
                <div v-for="t in tags" :key="t">
                    {{ t }}
                </div>
            </div>
        </div>
    </Card>
</template>

<script setup>
import Card from '../components/Card.vue'

const props = defineProps(['date'])
const { title, content, date, tags } = props.date

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

.tags{
    display: flex;
}

.tags div{
    margin-left: 10px;
}
</style>