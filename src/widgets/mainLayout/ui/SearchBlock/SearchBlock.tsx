import { Box } from "@mui/material";
import { SearchForm } from "../../../../features/SearchForm";
import { useInputText } from "../../../../features/SearchForm/model/searchFormSelector";


export function SearchBlock() {

  const inputText = useInputText()
  return (
   <Box>
    < SearchForm inputText={inputText}/>
   </Box>
  );
}
