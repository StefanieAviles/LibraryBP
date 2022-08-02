import { FC } from 'react'

export interface DataBookProps {
  text: string
  info: string
}

export const DataBook: FC<DataBookProps> = (props: DataBookProps) => {
  return (
    <div className="itemInfo">
      <p className="title">{props.text}</p>
      <p>{props.info}</p>
    </div>
  )
}
