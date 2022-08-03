import './Header.scss'
import { FC } from 'react'

export interface HeaderProps {
  principalText?: string
  secondaryText?: string
}
export const Header: FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <section className="header">
      <div className="header__h1">
        <h1 className="header__text">{props.principalText}</h1>
      </div>
      <div className="header__h2">
        <h2>{props.secondaryText}</h2>
      </div>
    </section>
  )
}
