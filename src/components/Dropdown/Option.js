import React from 'react';

export function DropdownOption({ name, content: Content }) {
  return (
    <button className='dropdown-option'>{name}</button>
  );
}