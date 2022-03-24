const Input = ({ value, updateValue }) => {
  return (
    <input
      {...{
        value,
        type: "number",
        onChange: (e) => updateValue(e.target.value),
      }}
    />
  );
};

export default Input;
