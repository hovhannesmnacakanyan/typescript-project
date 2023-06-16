interface IInputProps {
  children: string;
  value: string;
  onChange: (value: string) => void;
  type?: React.HTMLInputTypeAttribute;
}

export const Input = (props: IInputProps) => {
  const { children, type = "text", value, onChange } = props;

  const handleOnChange = (value: string) => {
    onChange(value);
  };

  return (
    <label>
      {children}
      <input
        type={type}
        value={value}
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </label>
  );
};
