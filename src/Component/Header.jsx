import Button from "./Button";
import { memo } from "react";
const Header = ({ Refresh }) => {
  console.log("header reanunig");
  return (
    <div className=" md:flex md:items-center md:justify-between my-8">
      <div className="flex-1 min-w-0">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          Things to get done
        </h1>
      </div>
      <div className="flex mt-4 md:mt-0 md:ml-4">
        <Button onClick={Refresh}>Refresh</Button>
      </div>
    </div>
  );
};
export default memo(Header);
