<template>
  <div class="block">
    <span class="demonstration">请为外卖评分: </span>
    <ul class="rate-list">
      <li>
        <!-- TODO: 补全 el-rate 属性 -->
        送餐速度：<el-rate show-score="true" :value="speed" :show-score="true" @change="speedChange" ></el-rate>
      </li>
      <li>
        <!-- TODO: 补全 el-rate 属性 -->
        外卖口味：<el-rate show-score="true" :value="flavour" :show-score="true" @change="flavourChange"></el-rate>
      </li>
      <li>
        <!-- TODO: 补全 el-rate 属性 -->
        外卖包装：<el-rate show-score="true" :value="pack" :show-score="true" @change="packChange" ></el-rate>
      </li>
    </ul>
  </div>
</template>
<style>
.block {
  border: 1px solid #c7c5c5;
  padding: 10px;
}
.rate-list {
  list-style: none;
  padding-inline-start: 20px;
  margin-block-start: 10px;
  margin-block-end: 10px;
}
.el-rate {
  display: inline-block;
}
</style>

<script>
module.exports = {
  data() {
    return {
      speed: 0, // 送餐速度
      flavour: 0, // 外卖口味
      pack: 0, // 外卖包装
    };
  },
  methods: {
    /* TODO：待补充代码 */
    speedChange(e) {
      this.speed = e
      this.completed()
    },
    flavourChange(e) {
      this.flavour = e
      this.completed()
    },
    packChange(e) {
      this.pack = e
      this.completed()
    },
    completed() {
      if(!this.speed || !this.flavour || !this.pack) return;
      this.$emit('change', this._data)
    }
  }

  
};
</script>
