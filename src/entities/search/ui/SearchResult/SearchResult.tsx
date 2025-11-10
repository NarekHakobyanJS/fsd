import { Menu, MenuItem } from "@mui/material"
import { openAndCloseResult } from "../../../../features/SearchForm/model/searchFormHelpers"
import type { IFilms } from "../../../../shared/types"
import { NavLink } from "react-router-dom"


type SearchResultPropsType = {
  isOpenResult : boolean
  anchorRef : any
  searchFilms : IFilms[] | undefined
}

const SearchResult = ({isOpenResult, anchorRef, searchFilms} : SearchResultPropsType) => {
  
  return (
    <Menu
        id="basic-menu"
        anchorEl={anchorRef?.current}
        open={isOpenResult}
        // Sxala Arxitekturayi  masov
        onClose={() => openAndCloseResult(false)}
      >
        {
          searchFilms?.map((searchFilm) => {
            return <MenuItem 
            component={NavLink}
            to={`/${searchFilm.id}`}
            key={searchFilm.id}
            >{searchFilm?.title}</MenuItem>
          })
        }
        
      
      </Menu>
  )
}

export default SearchResult