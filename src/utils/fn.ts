/**
 * 延时函数
 *
 * @export
 * @param {*} time 延时时长
 * @returns {Promise}
 */
export function delay(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
