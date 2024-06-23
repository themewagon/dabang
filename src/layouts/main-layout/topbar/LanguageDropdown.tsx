import { Button, ListItemIcon, Menu, MenuItem, Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { MouseEvent, useState } from 'react';

interface Language {
  id: number;
  code: string;
  lang: string;
  flag: string;
}

const languages: Language[] = [
  {
    id: 0,
    code: 'en-US',
    lang: 'Eng (US)',
    flag: 'circle-flags:us',
  },
  {
    id: 1,
    code: 'eng',
    lang: 'English',
    flag: 'circle-flags:gb-eng',
  },

  {
    id: 2,
    code: 'ban',
    lang: 'বাংলা',
    flag: 'circle-flags:bd',
  },
  {
    id: 3,
    code: 'zh',
    lang: '中文',
    flag: 'circle-flags:cn',
  },
  {
    id: 4,
    code: 'tr',
    lang: 'Türkçe',
    flag: 'circle-flags:tr',
  },
];

const LanguageDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);

  const handleSelectedLanguage = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (id: number) => {
    setSelectedIndex(id);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={handleSelectedLanguage}
        aria-controls={open ? 'language-dropdown' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <Stack direction="row" alignItems="center" columnGap={2}>
          <IconifyIcon icon={languages[selectedIndex].flag} fontSize={24} />
          <Typography variant="h5" color="text.secondary" width={80}>
            {languages[selectedIndex].lang}
          </Typography>
          <IconifyIcon icon="ph:caret-down-bold" fontSize={16} color="grey.400" />
        </Stack>
      </Button>

      <Menu
        id="language-dropdown"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {languages?.map((language) => (
          <MenuItem
            key={language.id}
            selected={language.id === selectedIndex}
            onClick={() => handleMenuItemClick(language.id)}
          >
            <ListItemIcon>
              <IconifyIcon icon={language.flag} />
            </ListItemIcon>
            <Typography variant="body1">{language.lang}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageDropdown;
