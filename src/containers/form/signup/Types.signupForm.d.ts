export interface IfuncDir {
  [key: string]: React.Dispatch
  email: React.Dispatch
  name: React.Dispatch
  workspace: React.Dispatch
  password: React.Dispatch
  confirmPassword: React.Dispatch
}

export interface IState {}
export interface IProps {}

interface ISubmitContent {
  email: string
  name: string
  workspace: string
  password: string
  confirmPassword: string
}

interface IHooksFunctions {
  setLoading: React.Dispatch
  setSendRegistration: React.Dispatch
}

declare type FhandleSubmit = (
  event: React.MouseEvent<HTMLElement>,
  SubmitContent: ISubmitContent,
  HooksFunctions: IHooksFunctions
) => Promise<void>

declare type FproofInput = (SubmitContent: ISubmitContent) => boolean
