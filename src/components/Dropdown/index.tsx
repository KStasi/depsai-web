import { useState } from 'react';

import Select from 'react-select';

const options = [
  { value: 'eth', label: 'ETH' },
  { value: 'glm', label: 'GLM' }
];

export const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Select
      defaultValue={selectedOption}
      onChange={() => setSelectedOption}
      options={options}
      className="dropdown"
      classNamePrefix="dropdown"
      placeholder="Coin"
    />
  );
};
