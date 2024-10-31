import axios from "axios"
import { pick, replace } from 'lodash'

const requestApi = (responseFields: any = null, baseUrl = undefined) => {
    let sourceRequest: any = {}
  
    /** CREATE AXIOS INSTANCE */
    const axiosInstance = axios.create({
      baseURL: baseUrl ? baseUrl : process.env.API_BASE_URL,
    })
  
    /** HANDLE AXIOS REQUEST */
    axiosInstance.interceptors.request.use(async (config: any) => {
      // Removed Bearer token logic
      return config
    })
  
    axiosInstance.interceptors.request.use((request: any) => {
      // If the application exists cancel
      if (sourceRequest[request.url]) {
        sourceRequest[request.url].cancel('Automatic cancellation')
      }
      return request
    })
  
    /** HANDLE AXIOS RESPONSE */
    axiosInstance.interceptors.response.use(
      (resp) => {
        if (responseFields) return pick(resp, responseFields)
        return resp?.data
      },
      async (error) => {
        const originalConfig = error.config
  
        // if (originalConfig?.url !== process.env.API_MAIN_SERVICE + '/v1/auth/login' && error.response) {
        //   if (originalConfig?.method == 'get' && error.response.status !== 401) {
        //     // const notification = notificationTemplate(error?.message, 'danger')
        //     // const respMsg = error.response?.data?.message ? replace(error.response?.data?.message, 'Page', 'Path') : ''
        //     // let msg1 = error.message ? `${respMsg}` : ''
        //     // msg1 = msg1 ? msg1 : 'Oops... Something not working properly.'
        //     // store.dispatch(
        //     //   addNotification({
        //     //     ...notification,
        //     //     title: `Error ${error.response.status}`,
        //     //     message: [msg1],
        //     //     type: 'danger',
        //     //   }),
        //     // )
        //   }
        // }
  
        return Promise.reject(error)
      },
    )
    return axiosInstance
  }

export default requestApi
