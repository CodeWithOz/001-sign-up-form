import React from 'react';

export default function Button({ icon, text }) {
  return (
    <button className="Button" data-icon={icon}>
      {text}
    </button>
  );
}
