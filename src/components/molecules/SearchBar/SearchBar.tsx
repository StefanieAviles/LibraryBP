import { Input } from '../../atoms/Input/Input'
import { Select } from '../../atoms/Select/Select'
import { useState, useEffect } from 'react'
import { UserService } from '../../../services/user.service'
import { ICategory } from '../../../interfaces/interfaces'
import './SearchBar.scss'

export function SearchBar(
  setSearchValue: (value: string) => void,
  setSearchCategoryBook: () => void
) {
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
            setSearchValue(event.currentTarget.value)
          }
          type="text"
        ></Input>
      </div>
      <div className="search__select">
        <Select
          //onChange={(event) => setSearchCategoryBook(event.target.value)}
          options={categories}
        ></Select>
      </div>
    </section>
  )
}
