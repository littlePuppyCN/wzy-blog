<template>
  <Layout :style="{ 'height': '500px' }" :bg="'about'">
    <template #content>
      <div class="w1000">
        <Card>
          
          <div class="progress" v-for="c in store.DB.construct" :key="c.id">
            <h1>
              <div class="dot">
                <div class="inner_dot"></div>
              </div>
              {{ c.update }}
            </h1>

            <Card :config="{ scale: false }" style="margin-left:16px;background: rgb(1, 52, 133);color: white;">
              <pre v-html="c.content"></pre>
            </Card>
          </div>
        </Card>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import Layout from './Layout.vue';
import Card from '../components/Card.vue';
import { store } from '@/stores/db'

</script>

<style scoped>
.progress {
  border-left: 6px solid rgb(1, 52, 133);
  margin-left: 20px;
}

h1 {
  position: relative;
  padding-left: 20px;
}

.dot {
  -ms-flex-pack: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: rgb(1, 52, 133);
  border-radius: 50%;
  display: -ms-flexbox;
  display: flex;
  height: 30px;
  justify-content: center;
  left: -18px;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 30px;
}

h1:hover .inner_dot {
  height: 18px;
  width: 18px;
}

.inner_dot {
  background-color: white;
  border-radius: 50%;
  height: 14px;
  width: 14px;
  transition: 0.3s all;
}

pre{
  line-height: 32px;
}
</style>