import { FC } from 'react'
import './DataBook.scss'

export interface DataBookProps {
  text: string
  info: string
}

export const DataBook: FC<DataBookProps> = (props: DataBookProps) => {
  return (
    <div className="dataBook">
      <p className="dataBook__item">{props.text}</p>
      <p>{props.info}</p>
    </div>
  )
}
