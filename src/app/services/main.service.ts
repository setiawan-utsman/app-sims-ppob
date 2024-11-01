import requestApi from "./api.service"

const postRequest = ({ path, params, sourceToken }: any) => {
    return requestApi().post(
      `${path}`,
      params,
      { cancelToken: sourceToken }, // <-- IMPORTANT!
    )
  }

  const getAll = (path: any = null, params: any = {}, sourceToken: any) => {
    return requestApi().request({
      url: path,
      method: 'GET',
      params: params,
      cancelToken: sourceToken, // <-- IMPORTANT!
    })
  }

  export { postRequest, getAll }