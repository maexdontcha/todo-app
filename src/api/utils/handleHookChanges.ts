export const handleHookChange = (
  event: React.FormEvent<HTMLInputElement>,
  funcDir: any
): void => {
  funcDir[event.currentTarget.id](event.currentTarget.value)
}
