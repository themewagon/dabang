import { InputAdornment, TextField } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

const Search = () => {
  return (
    <TextField
      id="input-with-searchIcon-textfield"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconifyIcon
              icon="gravity-ui:magnifier"
              sx={{ color: 'primary.main', fontSize: 32, mr: 1 }}
            />
          </InputAdornment>
        ),
      }}
      type="text"
      variant="filled"
      placeholder="Search here..."
      hiddenLabel
      fullWidth
      sx={{
        display: { xs: 'none', md: 'block' },
        minWidth: 300,
        // width: '50%',
        // mx: 3
      }}
    />
  );
};

export default Search;
