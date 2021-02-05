
/**
 * 
 * @param list 目标数组
 * @param childKey 子集字段
 * @param key 匹配字段
 * @param val 匹配字段对应值
 * @param result 返回数组 
 */
interface getNodeParams<T> {
  list: Array<T>;
  childKey: string;
  key: string;
  val: string;
  result: Array<T>;
}

export function getNode<T>(params: getNodeParams<T>): Array<T> {
  params.list.forEach((item: any) => {
    if (item[params.key] === params.val) {
      params.result.push(item);
    }
    if (item[params.childKey] && item[params.childKey].length > 0) {
      getNode({
        list: item[params.childKey],
        childKey: params.childKey,
        key: params.key,
        val: params.val,
        result: params.result
      })
    }
  });
  return params.result;
}




