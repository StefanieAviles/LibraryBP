import { FC } from 'react'

export interface TextProps {
  value?: string
}
export const Text: FC<TextProps> = (props: TextProps) => {
  return <p>{props.value}</p>
}
