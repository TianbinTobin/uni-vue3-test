import { store } from '@/store';

const PRODUCT_ID = 1011;
const TERMINAL_TYPE = 6;
const RESPONSE_SUCCESS_CODE = [0, '0', 'SUCCESS'];
const CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded';

class Request {
  request(options: UniApp.RequestOptions) {
    let requestResolve: (value: any) => void;
    let requestReject: (value: any) => void;
    const requestAsyncResult = new Promise<any>((resolve, reject) => {
      requestResolve = resolve;
      requestReject = reject;
    });
    const header = { productId: PRODUCT_ID, terminalType: TERMINAL_TYPE, token: store.state.auth.token };
    if (options.header) {
      options.header = Object.assign(header, options.header);
    } else {
      options.header = header;
    }
    const requestTask = uni.request({
      timeout: 10000,
      ...options,
      success: (result) => {
        if (result.statusCode !== 200) {
          return requestReject(result);
        }
        const data = result.data as { status: string; code: number; data: any; message: string; msg: string };
        if (RESPONSE_SUCCESS_CODE.includes(data.status) || RESPONSE_SUCCESS_CODE.includes(data.code)) {
          requestResolve(result.data);
        } else {
          return requestReject(result);
        }
      },
      fail: (reason) => {
        requestReject(reason);
      },
    });
    return { requestTask, requestAsyncResult: () => requestAsyncResult };
  }

  get(url: string, data?: any) {
    return this.request({ url, method: 'GET', data });
  }

  post(url: string, data?: any) {
    return this.request({ url, method: 'POST', data });
  }

  postForm(url: string, data?: any) {
    const header = { 'content-type': CONTENT_TYPE_FORM };
    return this.request({ url, method: 'POST', header, data });
  }
}

export default new Request();
