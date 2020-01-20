<template>
  <div>
      <statistics
        v-for="(item, index) in statistics"
        :key="index"
        :count="statistics.length"
        :backgroundColor="item.backgroundColor"
        :label="item.label"
        :value="item.value"
        :icon="item.icon"
      ></statistics>
  </div>
</template>

<script>
import statistics from './statistics'

export default {
  components: {statistics},
  data() {
    return {
      statistics: [{
        backgroundColor: '#33cabb',
        label: '今日收入',
        value: '102,125.00',
        icon: 'el-icon-money'
      },{
        backgroundColor: '#15c377',
        label: '成功率',
        value: '85%',
        icon: 'el-icon-check'
      },{
        backgroundColor: '#b8c315d9',
        label: '用户总量',
        value: '102',
        icon: 'el-icon-user'
      },{
        backgroundColor: '#f96868',
        label: '异常订单',
        value: '8',
        icon: 'el-icon-error'
      }]
    }
  }
}
</script>

<style>

</style>