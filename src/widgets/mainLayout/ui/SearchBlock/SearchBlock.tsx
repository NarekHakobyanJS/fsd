import { Box } from "@mui/material";
import { SearchForm } from "../../../../features/SearchForm";
import { useInputText, useIsOpenResult } from "../../../../features/SearchForm/model/searchFormSelector";
import { SearchResult, useSearchFilm } from "../../../../entities/search";
import { useRef } from "react";


export function SearchBlock() {

  const inputText = useInputText()
  const anchorRef = useRef(null)
  const isOpenResult = useIsOpenResult()
  const {searchFilms, refetch} = useSearchFilm(inputText)

  // console.log(searchFilms);
  
  return (
   <Box>
    <div ref={anchorRef}>
     < SearchForm inputText={inputText} refetch={refetch}/>
    </div>
  
    {
      isOpenResult && < SearchResult 
        searchFilms={searchFilms}
        isOpenResult={isOpenResult} 
        anchorRef={anchorRef}/>
    }
    
   </Box>
  );
}
