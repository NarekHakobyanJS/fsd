import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { changeInputText, openAndCloseResult } from '../model/searchFormHelpers';

type SearchFormPropsType = {
  inputText : string,
  refetch : () => void
}
export const SearchForm = ({inputText, refetch} : SearchFormPropsType) => {
  

  const handleSearch = () => {
    refetch()
    openAndCloseResult(true)
  }
  
  return (
    <Paper
    component="form"
    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
  >
   
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Search Films By Name"
      value={inputText}
      onChange={(e) => changeInputText(e.target.value)}
    />
    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon onClick={handleSearch}/>
    </IconButton>
    
  </Paper>
  )
}
