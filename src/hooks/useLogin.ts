import { ref, computed } from 'vue';
import { useStore } from '@/store';
import { Events } from '@/utils/constants';

export default function useLogin() {
  const store = useStore();

  const showLogin = ref(false);
  const authInit = computed(() => store.state.auth.isInit);
  const isLogin = computed(() => Boolean(store.state.auth.token));

  const createLogin = () => {
    // 权限已经初始化
    if (authInit.value) {
      setShowLogin(true);
    } else {
      uni.$once(Events.AUTH_INITIALIZED, onAuthInitialized);
    }
  };

  const destroyLogin = () => {
    setShowLogin(false);
    uni.$off(Events.AUTH_INITIALIZED, onAuthInitialized);
  };

  // 权限初始化回调
  const onAuthInitialized = (data: { isLogin: boolean }) => {
    if (!data.isLogin) {
      setShowLogin(true);
    }
  };

  const setShowLogin = (value: boolean) => {
    if (showLogin.value === value) return;
    // 已经登录的情况下不能打开登录
    if (value && isLogin.value) {
      return;
    }
    showLogin.value = value;
  };

  return { isLogin, showLogin, createLogin, setShowLogin, destroyLogin };
}
