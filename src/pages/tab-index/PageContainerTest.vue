<template>
  <page-container :show="true">
    <view class="dialog_vip">
      <view class="dialog_vip-body">
        <view class="dialog_vip-body-title">
          <text>免费好课程</text>
        </view>
        <view class="dialog_vip-body-course"></view>
        <button class="dialog_vip-body-submit">
          <text class="dialog_vip-body-submit-big">立即获取</text>
          <text class="dialog_vip-body-submit-small">（限时9.9元/月）</text>
        </button>
      </view>
    </view>
  </page-container>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.dialog_vip {
  position: relative;
  width: 660rpx;
  height: 868rpx;
  overflow: hidden;
  border-radius: 40rpx;

  &-body {
    box-sizing: border-box;
    width: 660rpx;
    height: 750rpx;
    padding: 30rpx 50rpx;
    background: $uni-bg-color-black;
    border-radius: 40rpx;
    box-shadow: 0rpx 4rpx 40rpx 0rpx rgba(0, 0, 0, 0.05);

    &-title {
      margin-top: 6rpx;
      font-size: 40rpx;
      font-weight: 600;
      line-height: 56rpx;
      color: #ffc443;
      text-align: center;
    }

    &-submit {
      width: 560rpx;
      height: 100rpx;
      margin-top: 30rpx;
      font-size: $uni-font-size-base;
      line-height: 100rpx;
      color: $uni-text-color-inverse;
      background-color: #ffd06b;
      border-radius: 50rpx;

      &::after {
        content: none;
        border: none;
      }

      &-big {
        font-size: 36rpx;
        font-weight: 600;
        color: $uni-text-color;
      }

      &-small {
        font-size: 28rpx;
        font-weight: 600;
        color: $uni-text-color;
      }
    }

    &-course {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;

      .course_card {
        width: 270rpx;
        height: 224rpx;
        margin-top: 20rpx;
        overflow: hidden;
        background: $uni-bg-color;
        border-radius: 20rpx;

        &-cover {
          width: 270rpx;
          height: 160rpx;

          &-image {
            width: 100%;
            height: 100%;
          }
        }

        &-title {
          box-sizing: border-box;
          width: 100%;
          height: 64rpx;
          padding: 18rpx;
          overflow: hidden;
          font-size: $uni-font-size-sm;
          line-height: 32rpx;
          color: $uni-text-color;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }

  &-close {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    width: 76rpx;
    height: 76rpx;
    margin: 0 auto;
    border-radius: 50%;

    &-image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
