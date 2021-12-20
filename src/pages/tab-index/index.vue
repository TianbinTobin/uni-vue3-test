<template>
  <view class="page_home">
    <view class="page_board">
      <SlotTest>
        <div>1111</div>
      </SlotTest>
      <SlotNameTest>
        <div>2222</div>
      </SlotNameTest>
      <SlotTest>
        <template #default>
          <div>3333</div>
        </template>
      </SlotTest>
      <SlotNameTest>
        <template #default>
          <div>4444</div>
        </template>
      </SlotNameTest>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import SlotTest from './SlotTest.vue';
import SlotNameTest from './SlotNameTest.vue';

export default defineComponent({
  name: 'PageTabHome',
  components: {
    SlotTest,
    SlotNameTest,
  },
  setup() {
    const show = ref(true);

    const onBeforeEnterFilter = () => {
      console.log(1);
    };

    const onAfterLeaveFilter = () => {
      console.log(2);
    };
    return { show, onBeforeEnterFilter, onAfterLeaveFilter };
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
