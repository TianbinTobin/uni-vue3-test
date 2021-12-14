import { ref } from 'vue';
import { delay } from '@/utils/fn';

export default function useRequest<T>(requestFn: (...args: T[]) => Promise<any>, options = { delay: 0 }) {
  const pending = ref(false);
  const request = async (...args: T[]) => {
    try {
      pending.value = true;
      if (options.delay) {
        await Promise.all([delay(options.delay), requestFn(...args)]);
      } else {
        await requestFn(...args);
      }
      pending.value = false;
    } catch (error) {
      pending.value = false;
    }
  };
  return { request, pending };
}
