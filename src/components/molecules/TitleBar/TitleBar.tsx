import { Button } from '../../atoms/Button/Button'
import { FC } from 'react'
import './TitleBar.css'

export type ButtonColor = 'complementary' | 'destructive' | 'primary' | 'secondary' | 'tertiary'

export type ButtonSize = 'extra-large' | 'large' | 'medium' | 'small'
export interface TitleBarProps {
  text?: string
  textButton: string
  buttonColor: ButtonColor
  buttonSize: ButtonSize
}
export const TitleBar: FC<TitleBarProps> = (props: TitleBarProps) => {
  return (
    <section className="containerTitle">
      <div className="divTitle1">
        <h2>{props.text}</h2>
      </div>
      <div className="divTitle2">
        <Button color={props.buttonColor} size={props.buttonSize}>
          {props.textButton}
        </Button>
      </div>
    </section>
  )
}
