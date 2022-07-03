import React from "react";
import { mutate } from "swr";
import EditMenu from "./EditMenu";
//helper when fetching data from the server
const fetcher = (...args) => fetch(...args).then((res) => res.json());
//props
const Todos = ({id,title,isChecked, isPinned }) => {

  //Checked-Unchecked Todo
const checkTodo = async (id, check) => {
    await fetcher("/api/todos/" + `${id}`, {
      method: "PATCH",
      body: JSON.stringify({ checked: check }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    mutate("/api/todos");
  };
  

  return (
    <div className=" mt-2 w-full flex justify-between text-[#010A1B] font-['Inter'] ">
      <label className="relative flex items-center justify-items-start">
      {isPinned ? <svg //the pin icon
            className="absolute  -left-7 rotate-[315deg]"
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#FF7964"
            >
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <path d="M14,4v5c0,1.12,0.37,2.16,1,3H9c0.65-0.86,1-1.9,1-3V4H14 M17,2H7C6.45,2,6,2.45,6,3c0,0.55,0.45,1,1,1c0,0,0,0,0,0l1,0v5 c0,1.66-1.34,3-3,3v2h5.97v7l1,1l1-1v-7H19v-2c0,0,0,0,0,0c-1.66,0-3-1.34-3-3V4l1,0c0,0,0,0,0,0c0.55,0,1-0.45,1-1 C18,2.45,17.55,2,17,2L17,2z" />
              </g>
            </svg> : ""}
        <input
          type="checkbox"
          className=" w-4 h-4 accent-blue-500   "
          id="checkbox"
          checked={isChecked}
          onChange={(e) => checkTodo(id, e.target.checked)}
        />
        <span className="ml-2">
          <li key={id}>{title}</li>
        </span>
      </label>
      <EditMenu  //edit menu component
      id = {id}
      isPinned = {isPinned}
      title = {title}
      />
    </div>
  );
};

export default Todos;