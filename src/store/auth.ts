import { MutationTree, ActionTree, Module } from 'vuex';
import { State as RootState } from './index';

const SET_INIT = 'SET_INIT';
const SET_TOKEN = 'SET_TOKEN';
const SET_OPEN_ID = 'SET_OPEN_ID';
const SET_SESSION = 'SET_SESSION';
const SET_CHANNEL = 'SET_CHANNEL';
const SET_INVITE_LINK_ID = 'SET_INVITE_LINK_ID';
const SET_LAST_SESSION_TIME = 'SET_LAST_SESSION_TIME';

export interface State {
  token: string;
  openId: string;
  isInit: Boolean;
  channel: string;
  inviteLinkId: string;
  lastSessionTime?: number;
  session: { key: string; openid: string; unionid: string };
}

const state = (): State => ({
  token: '',
  openId: '',
  channel: '',
  isInit: false,
  inviteLinkId: '',
  session: { key: '', openid: '', unionid: '' },
});

const mutations: MutationTree<State> = {
  [SET_INIT](state, value) {
    state.isInit = value;
  },
  [SET_TOKEN](state, value) {
    state.token = value;
  },
  [SET_OPEN_ID](state, value) {
    state.openId = value;
  },
  [SET_SESSION](state, value) {
    Object.assign(state.session, value);
  },
  [SET_CHANNEL](state, value) {
    state.channel = value;
  },
  [SET_INVITE_LINK_ID](state, value) {
    state.inviteLinkId = value;
  },
  [SET_LAST_SESSION_TIME](state, value) {
    state.lastSessionTime = value;
  },
};

const actions: ActionTree<State, RootState> = {
  /**
   * 初始化
   */
  initialize({ commit, dispatch }, { token, channel, inviteLinkId }) {
    if (channel) commit(SET_CHANNEL, channel);
    if (inviteLinkId) commit(SET_INVITE_LINK_ID, inviteLinkId);
  },
  /**
   * 获取小程序登陆凭证
   */
  getLoginCode() {
    return new Promise<string>((resolve, reject) => {
      uni.login({
        provider: 'weixin',
        success: ({ code }) => resolve(code),
        fail: (result) => reject(result),
      });
    });
  },
  /**
   * 小程序支付
   */
  requestPayment(_, { timeStamp, nonceStr, prepayId, signType, paySign }) {
    return new Promise<string>((resolve, reject) => {
      uni.requestPayment({
        provider: 'wxpay',
        timeStamp,
        nonceStr,
        signType,
        paySign,
        orderInfo: '',
        package: prepayId,
        success: ({ code }) => resolve(code),
        fail: (result) => reject(result),
      });
    });
  },
};

const module: Module<State, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default module;
