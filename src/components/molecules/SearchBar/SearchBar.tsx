import { Input } from '../../atoms/Input/Input'
import { Select } from '../../atoms/Select/Select'
import { useState, useEffect } from 'react'
import { UserService } from '../../../services/user.service'
import { ICategory } from '../../../interfaces/interfaces'
import { FC } from 'react'
import './SearchBar.scss'

export interface SearchBarProps {
  setSearchValue: (value: string) => void
  setSearchCategoryBook: (value: string) => void
}
export const SearchBar: FC<SearchBarProps> = (props: SearchBarProps) => {
  const [categories, setCategories] = useState<ICategory[]>([])
  useEffect(() => {
    UserService.booksByCategory().then((response: ICategory[]) => {
      if (response.length > 0) {
        setCategories(response)
      }
    })
    //booksByCategory(setCategories)
  }, [])

  return (
    <section className="search">
      <div className="search__input">
        <Input
          placeholder="Ej. Angular, React"
          onChange={(event: React.FormEvent<HTMLInputElement>) =>
            props.setSearchValue(event.currentTarget.value)
          }
          type="text"
        ></Input>
      </div>
      <div className="search__select">
        <Select
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            props.setSearchCategoryBook(event.currentTarget.value)
          }
          options={categories}
        ></Select>
      </div>
    </section>
  )
}
