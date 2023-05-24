import React from "react";
import Menu from "./Menu";
import { useState } from "react";
import "./index.css"


export default function MainContent({ changeStatus, newTodoText, setNewTodoText, addToTodo, setIsAddModalVisible, isAddModalVisible}) {
  return (
    <div className="container">
      <div className="d-flex justify-content-between ">

        <div className="d-flex mt-2">
          < Menu changeStatus={changeStatus}/>
        </div>

        <div className="">
          <button className="button" onClick={()=>setIsAddModalVisible(!isAddModalVisible)}>
            <p className="button-text">+</p></button>
          {isAddModalVisible && ( 
            <div className="modal">
              <p className="modal-add-new-to-do">Add New To Do</p>
              < textarea onChange={(e)=>setNewTodoText(e.target.value) } className="modal-textarea" placeholder={"Your text"} />
              <button onClick={() => addToTodo(newTodoText)} className="modal-addbutton">Add</button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
