import { InputAdornment, TextField } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

const Search = () => {
  return (
    <TextField
      id="input-with-searchIcon-textfield"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconifyIcon icon="gravity-ui:magnifier" sx={{ color: 'primary.main', fontSize: 24 }} />
          </InputAdornment>
        ),
      }}
      type="text"
      variant="filled"
      placeholder="Search here..."
      //   fullWidth
      //   hiddenLabel
      sx={{
        display: { xs: 'none', md: 'block' },
        // maxWidth: 348,
      }}
    />
  );
};

export default Search;
