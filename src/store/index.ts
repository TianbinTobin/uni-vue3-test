import { InjectionKey } from 'vue';
import * as vuex from 'vuex';
import app, { State as AppState } from './app';
import auth, { State as AuthState } from './auth';

// 为 store state 声明类型
export interface State {
  app: AppState;
  auth: AuthState;
}

// define injection key
export const key: InjectionKey<vuex.Store<State>> = Symbol();

// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return vuex.useStore(key);
}

const modules: vuex.ModuleTree<State> = { app, auth };

export const store = vuex.createStore<State>({ modules });
