export interface ActionType {
  type: string,
  payload?: ApiResponse[]
}

// export interface MainState {
//   menu: ApiResponse[],
//   menuLoadingStatus: string,
// }

export interface ApiResponse {
  name: string,
  img: { 
    url: string
  },
  description?: string,
  sale?: number,
}