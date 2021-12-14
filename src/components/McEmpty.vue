<template>
  <view class="mc_empty">
    <view class="mc_empty-icon">
      <image v-if="type === 'course'" class="mc_empty-image" mode="aspectFill" src="@/static/common/empty-course.png" />
      <image
        v-else-if="type === 'server'"
        class="mc_empty-image"
        mode="aspectFill"
        src="@/static/common/empty-server.png"
      />
      <image
        v-else-if="type === 'network'"
        class="mc_empty-image"
        mode="aspectFill"
        src="@/static/common/empty-network.png"
      />
      <image v-else class="mc_empty-image" mode="aspectFill" src="@/static/common/empty-record.png" />
    </view>
    <view v-if="!noTips" class="mc_empty-tips">
      <text v-if="tips">{{ tips }}</text>
      <text v-else-if="type === 'network'">网络异常</text>
      <text v-else-if="type === 'server'">服务器异常</text>
      <text v-else>暂无数据</text>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    type: {
      type: String as PropType<'default' | 'course' | 'server' | 'network'>,
      default: 'default',
    },
    tips: {
      type: String,
      default: '',
    },
    noTips: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.mc_empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  &-icon {
    width: 176rpx;
    height: 176rpx;
  }

  &-image {
    width: 100%;
    height: 100%;
  }

  &-tips {
    margin-top: 10rpx;
    font-size: $uni-font-size-base;
    font-weight: 400;
    color: $uni-text-color-grey;
    text-align: center;
  }
}
</style>
