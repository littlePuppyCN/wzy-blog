<template>
    <Card :style="{'margin-top':'20px'}" :config="{ scale : true}">
        <div>
            Github: <span class="color">littlePuppyCN</span>
        </div>
        <div>
            Wechat: <span class="color">osakinana1</span>
        </div>
        <div>
            QQ: <span class="color">402759136</span>
        </div>
 
    </Card>
</template>

<script setup>
import Card from './Card.vue'

</script>

<style scoped>
div{
    margin-bottom: 4px;
}
div:last-child{
    margin-bottom: 0;
}
.color{
    color: #3273dc;
    user-select: all;
}

</style>