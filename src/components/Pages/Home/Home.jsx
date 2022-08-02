import { Header } from '../../molecules/Header/Header'
import { TitleBar } from '../../molecules/TitleBar/TitleBar'
import { SearchBar } from '../../molecules/SearchBar/SearchBar'
import { Board } from '../../Organisms/Board/Board'

export function Home({
  setBookById,
  navigateFunction,
  locationFunction,
  searchValue,
  setSearchValue
}) {
  return (
    <>
      <Header></Header>
      <TitleBar></TitleBar>
      <SearchBar></SearchBar>
      <Board
        setBookById={setBookById}
        navigateFunction={navigateFunction}
        locationFunction={locationFunction}
      ></Board>
    </>
  )
}
