import React from "react";
import More from "./More";

export default function SingleToDo({
  item,
  changeStatusSingleTodo,
  removeForever,
  isModalVisible,
  setIsModalVisible,
  todoList,
}) {
  const changeTaskStatus = () => {
    if (item.status !== "Trash") {
      if (item.status === "Done") {
        changeStatusSingleTodo(item.id, "To Do");
      } else {
        changeStatusSingleTodo(item.id, "Done");
      }
    }
  };

  return (
    <>
      <div className="d-flex mb-2">
        {todoList.map((todos) => {
        })}
        <More
          item={item}
          removeForever={removeForever}
          changeStatusSingleTodo={changeStatusSingleTodo}
          isMoreVisible={isModalVisible}
          setIsMoreVisible={setIsModalVisible}
        />

        <input
          type="checkbox"
          checked={item.status === "Done"}
          onChange={changeTaskStatus}
        />
        <p
          className="d-flex justify-content-center align-items-center m-0 mb-1"
          style={{
            textDecoration: item.status === "Done" ? "line-through" : "none",
          }}
        >
          {" "}
          {item.name}
        </p>
      </div>
    </>
  );
}
