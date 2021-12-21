<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { getToken } from '@/utils/domain';

export default defineComponent({
  name: 'App',
  onLaunch(options: any) {
    console.log('App Launch');
    // this.getQuery(options ? options.query : {});
    this.$store.dispatch('app/initialize');
  },
  onShow() {
    console.log('App Show');
  },
  onHide() {
    console.log('App Hide');
  },
  setup() {
    const store = useStore();

    const getQuery = async (query: AnyObject) => {
      let token = query.token;
      const { channel, inviteLinkId } = query;
      try {
        if (!token) {
          token = await getToken();
        }
      } catch (error) {}
      store.dispatch('auth/initialize', { token, channel, inviteLinkId });
    };

    return { getQuery };
  },
});
</script>
<style>
/* 每个页面公共css */
@import '@/wxcomponents/vant/common/index.wxss';

button::after {
  content: none;
  border: none;
}
</style>
