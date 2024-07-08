import { Select } from '@chakra-ui/react';
import React from 'react';

const themes = ['vs-dark', 'light', 'hc-black']; // Add more themes as needed

const ThemeSelector = ({ theme, onSelect }) => {
  return (
    <Select value={theme} onChange={(e) => onSelect(e.target.value)}>
      {themes.map((t) => (
        <option key={t} value={t}>
          {t}
        </option>
      ))}
    </Select>
  );
};

export default ThemeSelector;