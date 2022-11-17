const Input = ({ value, onChange, type, theme, checked }) => {
  let className;
  if (type === undefined) {
    type = "text";
  }
  if (theme === undefined) {
    theme = "primary";
  }
  if (theme === "primary") {
    className =
      " p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm ";
  } else if (theme === "secondary") {
    className =
      "w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500";
  }
  return (
    <div>
      <input
        checked={checked}
        value={value}
        onChange={onChange}
        id="new-todo"
        type={type}
        name="new-todo"
        className={className}
        placeholder="Write an article about XState"
      ></input>
    </div>
  );
};
export default Input;
