import Select from 'react-select';

type Option = {
  value: string;
  label: string;
};
export const options: Option[] = [
  { value: 'eth', label: 'ETH' },
  { value: '0x33af15c79d64b85ba14aaffaa4577949104b22e8', label: 'GLM' }
];

export const Dropdown = ({
  selectedOption,
  setSelectedOption
}: {
  selectedOption: Option;
  setSelectedOption: (option: Option) => void;
}) => {
  return (
    <Select
      defaultValue={selectedOption}
      onChange={() => setSelectedOption}
      options={options}
      className="dropdown"
      classNamePrefix="dropdown"
    />
  );
};
