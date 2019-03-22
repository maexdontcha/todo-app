export interface IfuncDir {
  [key: string]: Function
  email: Function
  password: Function
}

export interface IHooks {
  email: string
  password: string
  setLoading?: Function | undefined
  props?: any
}

declare type FvalidateForm = ({ email, password }: IHooks) => boolean | Error

declare type FhandleSubmit = ({ email, password, setLoading }: IHooks) => void

declare type FhandleHookChange = (
  event: React.FormEvent<HTMLInputElement>
) => void
