import { useState } from "react";

export const InputComponent = ({ initialValue, callback }) => {
  const [value, setValue] = useState(initialValue);

  const KeyUpHandler = (event) => {
    if (event.key === "Enter") {
      callback(event.target.value);
    }
  };

  return (
    <div className="field m-5">
      <label className="label">X asics labels:</label>
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Text input"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          onBlur={(event) => callback(event.target.value)}
          onKeyUp={KeyUpHandler}
        />
      </div>
    </div>
  );
};
