import { ChevronLeftIcon, PencilIcon, PlusIcon, TrashIcon } from "lucide-react";
import React from "react";

interface AppActionButtonProps {
  type: "back" | "create" | "edit" | "delete";
  onClick: () => void;
}

const AppActionButton: React.FC<AppActionButtonProps> = ({ type, onClick }) => {
  let icon = null;
  let buttonClassName =
    "flex items-center justify-center font-bold p-2 ring-1 ring-[#CFD9FE] text-[#B0B1B3] rounded-md";

  switch (type) {
    case "back":
      icon = <ChevronLeftIcon className="w-6 h-6" />;
      buttonClassName =
        "flex items-center justify-center font-bold p-2 ring-1 ring-[#CFD9FE] text-[#B0B1B3] rounded-full";
      break;
    case "create":
      icon = <PlusIcon className="w-6 h-6" />;
      break;
    case "edit":
      icon = <PencilIcon className="w-6 h-6" />;
      break;
    case "delete":
      icon = <TrashIcon className="w-6 h-6" />;
      break;
    default:
      break;
  }

  return (
    <button onClick={onClick} className={buttonClassName}>
      {icon}
    </button>
  );
};

export default AppActionButton;
