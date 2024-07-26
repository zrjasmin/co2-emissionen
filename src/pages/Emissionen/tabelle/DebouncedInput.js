import React from "react";
import searchTable from "../../../assets/images/search-table.png";

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <>
      <input
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="filter__textInput"
      />
    </>
  );
}

export default DebouncedInput;
