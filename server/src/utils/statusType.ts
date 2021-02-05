/**
 * 状态
 */

type CodeType = boolean | number;

interface StatusSuccess {
  code?: CodeType;
  data?: any;
  msg?: string;
}

interface StatusError {
  code?: CodeType;
  msg?: string;
}

export function statusSuccess(params: StatusSuccess) {
  return {
    code: params.code || true,
    data: params.data || null,
    msg: params.msg || 'success',
  };
}

export function statusError(params: StatusError) {
  return {
    code: params.code || false,
    msg: params.msg || '网络异常～',
  };
}
