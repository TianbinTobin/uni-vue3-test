import { MutationTree, ActionTree, Module } from 'vuex';
import { State as RootState } from './index';

const SET_IS_IOS = 'SET_IS_IOS';

export interface State {
  isIOS: boolean;
}

const state = (): State => ({
  isIOS: false,
});

const mutations: MutationTree<State> = {
  [SET_IS_IOS](state, value) {
    state.isIOS = value;
  },
};

const actions: ActionTree<State, RootState> = {
  /**
   * 初始化
   */
  initialize({ dispatch }) {
    dispatch('getSystem');
  },
  /**
   * 获取系统信息
   */
  getSystem({ commit }) {
    uni.getSystemInfo({
      success: (result) => {
        commit(SET_IS_IOS, result.system.includes('IOS'));
      },
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
