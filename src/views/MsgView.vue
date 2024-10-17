<template>
    <Layout :style="{ 'height': '500px' }" :bg="'article'">
        <template #content>
            <div class="w1000">
                <div class="game" @click="click">
                    <div v-for="bb in b.initBg()"
                        :style="{ position: 'absolute', left: bb.x + 'px', top: bb.y + 'px', width: 50 + 'px', height: 50 + 'px', fontSize: 12 + 'px', border: '1px solid black' }">
                        {{ bb.x }},{{ bb.y }}
                    </div>

                    <div v-for="bb in b.shape"
                        :style="{ background: 'green', position: 'absolute', left: bb.x + 'px', top: bb.y + 'px', width: 50 + 'px', height: 50 + 'px', fontSize: 12 + 'px' }">
                        {{ bb }}
                    </div>
                </div>
            </div>
        </template>
    </Layout>
</template>

<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
import Layout from './Layout.vue';

cs.sayNo()
</script>

<style scoped>
.game {
    position: relative;
    width: 100%;

    height: 1600px;
}
</style>