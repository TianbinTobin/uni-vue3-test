<template>
  <page-container :show="show" round overlay z-index="999" @enter="onLoginShow" @leave="onLoginClose">
    <view class="mc_login">
      <button class="mc_login-button" open-type="getPhoneNumber" @getphonenumber="onGetPhoneNumber">
        <image class="mc_login-logo" src="@/static/common/icon-wechat.png" mode="aspectFill" />
        <text>微信用户一键登录</text>
      </button>
    </view>
  </page-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['success', 'fail', 'update:show'],
  setup(_, context) {
    const store = useStore();

    const onLoginShow = () => {
      store.dispatch('auth/smallRoutineAuth');
    };

    const onLoginClose = () => {
      context.emit('update:show', false);
    };

    const onGetPhoneNumber = async (event: any) => {
      try {
        uni.showLoading({ title: '请稍后...' });
        const { encryptedData, iv } = event.detail;
        await store.dispatch('auth/smallRoutinePhoneLogin', { encryptedData, iv });
        onLoginClose();
        context.emit('success');
      } catch (error) {
        context.emit('fail', error);
      }
      uni.hideLoading();
    };

    return { onLoginShow, onLoginClose, onGetPhoneNumber };
  },
});
</script>

<style lang="scss" scoped>
.mc_login {
  display: flex;
  align-items: center;
  width: 100%;
  height: 300rpx;
  padding-bottom: env(safe-area-inset-bottom);
  background-color: $uni-bg-color;
  border-radius: 40rpx 40rpx 0 0;

  &-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 560rpx;
    height: 100rpx;
    font-size: $uni-font-size-lg;
    color: $uni-text-color-inverse;
    background-color: #48bd5e;
    border: none;
    border-radius: 50rpx;
  }

  &-logo {
    width: 46rpx;
    height: 46rpx;
    margin-right: 20rpx;
  }
}
</style>
