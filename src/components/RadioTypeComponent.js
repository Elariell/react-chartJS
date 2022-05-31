export const RadioTypeComponent = ({ type, isChecked, onChange }) => {
  return (
    <label className="radio p-3">
      <input
        type="radio"
        name="answer"
        value={type}
        onChange={onChange}
        checked={isChecked}
      />
      {type}
    </label>
  );
};
