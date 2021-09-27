/**
 * Get array element at an index
 * supports negative and overflow indexing
 *
 * @param arr
 * @param index
 * @returns
 */
export function at<T>(arr: T[], index: number): T {
  // implements reverse indexing and index wrapping
  let _index = (index >= 0 ? index : (arr.length + index)) % arr.length;
  // console.log(`index [${index}/${arr.length - 1}]: ${index} -> ${_index}`);
  return arr[_index % arr.length];
}
