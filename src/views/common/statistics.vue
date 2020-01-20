<template>
  <div class="statistics" :style="style">
    <div :class="['icon', icon]">

    </div>
    <div class="card-right">
      <span class="label">{{label}}</span>
      <span class="value">{{value}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['count', 'backgroundColor', 'icon', 'label', 'value'],
  data() {
    return {
      style: {
        height: '100px'
      }
    }
  },
  mounted() {
    this.style.backgroundColor = this.backgroundColor 
    let width = 'calc(' + (1 / this.count * 100) + '% - 50px)'
    this.style.width = width
    this.$forceUpdate()
  }
}
</script>

<style>
  .statistics {
    padding: 20px;
    margin: 0 5px;
    display: inline-block;
    position: relative;
  }
  .icon {
    display: inline-block;
    width: 30%;
    color: #fff;
    line-height: 100px;
    font-size: 60px;
  }
  .card-right {
    width: 40%;
    position: absolute;
    top: 30px;
    right: 20px;
    display: inline-block;
  }
  .card-right span {
    display: block;
    color: #fff;
    line-height: 30px;
  }
  .label {
    font-size: 12px;
  }
  .value {
    font-size: 22px;
  }
</style>