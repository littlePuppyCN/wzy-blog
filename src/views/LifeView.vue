<template>
    <Layout :style="{ 'height': '500px'}" :bg="'article'">
        <template #content>
            <div class="w1000">
                <Card :style="{
                        'display': 'flex',
                        'flex-direction': 'row',
                        'justify-content': 'space-between',
                        'flex-wrap':'wrap'
                    }">
                    <Lazyload  v-for="i in store.DB.life" :src="i.content" :key="i.id" :id="i.id" :width="470" :height="360" />
                </Card>
            </div>
        </template>
    </Layout>
</template>
  
<script setup>
import Layout from './Layout.vue';
import Lazyload from '../components/Lazyload.vue';
import Card from '../components/Card.vue';
import { store } from '@/stores/db';
import { useLazy } from '../utils/lazy';
useLazy(store.DB.life)

</script>
  
<style scoped>
@media (max-width: 1024px) {
   .w1000 > div{
    padding: 0!important;
   }
   .w1000 img{
    margin-top: 10px;
    width: 100%;
   }
}
</style>