import './Header.css'
import { FC } from 'react'

export interface HeaderProps {
  principalText?: string
  secondaryText?: string
}
export const Header: FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <section className="container">
      <div className="divHeader1">
        <h1>{props.principalText}</h1>
      </div>
      <div className="divHeader2">
        <h2>{props.secondaryText}</h2>
      </div>
    </section>
  )
}
