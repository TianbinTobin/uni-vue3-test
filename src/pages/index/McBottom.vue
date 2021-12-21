<template>
  <view class="mc_bottom">
    <text v-if="loading">数据加载中...</text>
    <text v-else>已经到底了~</text>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.mc_bottom {
  width: 100%;
  padding: 20rpx 0;
  font-size: $uni-font-size-base;
  line-height: 40rpx;
  color: $uni-text-color-grey;
  text-align: center;
}
</style>
