import React from 'react';
import {Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <label>
    Filter contacts by name:
    <Input type="text" value={value} onChange={onChange} />
  </label>
);

