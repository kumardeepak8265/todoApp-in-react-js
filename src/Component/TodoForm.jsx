import Button from "./Button";
import Input from "./Input";

const TodoForm = ({ onClick, formCancle, value, onChange }) => {
  return (
    <div className="bg-gray-200 p-2">
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Create a todo
      </h3>
      <form className="my-5 ">
        <div className="w-full sm:max-w-xs space-y-2">
          <Input value={value} onChange={onChange}></Input>
          <div className="flex space-x-2">
            <Button onClick={onClick}>Save</Button>
            <Button theme="secondary" onClick={formCancle}>
              Cancle
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default TodoForm;
