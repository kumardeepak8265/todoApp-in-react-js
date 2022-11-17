import { memo } from "react";
const Navbar = () => {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-8 lg:px-10">
      <div className="flex items-center justify-between h-16">
        <p className="text-xl font-medium leading-6 text-gray-900 sm:truncate">
          XTodo
        </p>
      </div>
    </div>
  );
};
export default memo(Navbar);
