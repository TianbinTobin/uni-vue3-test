<template>
  <view class="page_home">
    <view class="page_board">
      <view class="search_board">111</view>
      <view class="adv_board">222</view>
      <view class="banner_board">333</view>
      <PageContainerTest />
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageContainerTest from './PageContainerTest.vue';

export default defineComponent({
  name: 'PageTabHome',
  components: {
    PageContainerTest,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.page_home {
  position: relative;
  width: 100%;
  min-height: 100%;
  background-color: $uni-bg-color;

  .page_board {
    width: 100%;
  }

  .search_board {
    box-sizing: border-box;
    width: 100%;
    padding: 0 30rpx;
    background-color: $uni-bg-color-grey;
  }

  .adv_board {
    box-sizing: border-box;
    width: 100%;
    height: 446rpx;
    padding: 22rpx 30rpx 0;
    background-color: $uni-bg-color-grey;
    border-radius: 0rpx 0rpx 24rpx 24rpx;
  }

  .banner_board {
    box-sizing: border-box;
    width: 100%;
    padding: 0 30rpx;
    margin-top: 32rpx;
  }

  .mc-tabs-swiper {
    min-height: 500rpx;
  }
}
</style>
