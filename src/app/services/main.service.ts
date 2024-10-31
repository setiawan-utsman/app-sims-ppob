import requestApi from "./api.service"

const postRequest = ({ path, params, sourceToken }: any) => {
    return requestApi().post(
      `${path}`,
      params,
      { cancelToken: sourceToken }, // <-- IMPORTANT!
    )
  }

  export { postRequest }