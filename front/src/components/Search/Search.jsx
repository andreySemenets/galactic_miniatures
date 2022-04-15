import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

import { useDispatch, useSelector } from 'react-redux'
import { searchItems } from '../../redux/actions/itemsAC';

export default function Search() {
  const [searchInput, setSearchInput] = React.useState('')
  const items = useSelector((store) => store.items)
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(searchItems(searchInput))
  }, [searchInput, dispatch])
  // const top100Films = [
  //   { title: 'The Shawshank Redemption', year: 1994 },
  //   { title: 'The Godfather', year: 1972 },
  //   { title: 'The Godfather: Part II', year: 1974 },
  //   { title: 'The Dark Knight', year: 2008 },
  //   { title: '12 Angry Men', year: 1957 },
  //   { title: "Schindler's List", year: 1993 },
  //   { title: 'Pulp Fiction', year: 1994 },
  // ]
  return (
    <Stack spacing={2} sx={{ width: 300, bgcolor: 'white' }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={items.map((option) => option.titleName)}
        renderInput={(params) => <TextField {...params}/>}
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
      />
      {/* <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      /> */}
    </Stack>
  );
}
