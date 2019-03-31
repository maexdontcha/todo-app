export interface IfuncDir {
  [key: string]: Function
  title: string
  password: Function
}

export interface IHooks {
  email: string
  password: string
  setLoading?: Function | undefined
}
