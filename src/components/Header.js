import React from 'react';
import {
  InputLabel,
  Select,
  MenuItem,
  Box,
  FormControl
} from '@mui/material';
import Cities from "./Cities";
import { useCity } from "../context/CityContext";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 160,
    },
  },
};

const Header = () => {
  const { city, setCity } = useCity();

  const handleCity = (event) => {
    setCity(event.target.value);
  };

  return (
    <Box sx={{display: 'flex', alignItems: 'flex-start', width: '100%', background: '#f6fafd'}}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">{city || 'Select City'}</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={city}
          MenuProps={MenuProps}
          label={city || 'Select City'}
          onChange={handleCity}
        >
          {Object.values(Cities).map((cityTr, index) => (
            <MenuItem
              key={index}
              value={cityTr}
            >
              {cityTr}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default Header