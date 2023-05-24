import "./App.css";
import { useState } from "react";
import HEADER from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import SingleToDo from "./components/MainContent/SingleToDo";
import {v4 as uuidv4} from "uuid"; 

function App() {
  const [activeStatus, setActiveStatus] = useState("To Do");
  const [newTodoText, setNewTodoText] = useState(""); 
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [todoList, setToDoList] = useState([
    {id: uuidv4(), name: "Write essay", status: "To Do"},
    {id: uuidv4(), name: "Buy one hour CSS course online", status: "To Do"},
    {id: uuidv4(), name: "Buy one way tickets to San Fransico", status: "To Do"},
    {id: uuidv4(), name: "Go to gym", status: "Done"},
    {id: uuidv4(), name: "Buy groceries", status: "Trash"},

  ]);

  const changeStatus = (status) => {
    setIsModalVisible(false);
    setActiveStatus(status);
  };

  const addToTodo = (newTodoText)=> {
    const newTask = {id: uuidv4(), name: newTodoText, status: "To Do"};
    const newTodoList = [newTask, ...todoList];
    setToDoList(newTodoList);
    setIsAddModalVisible(false);
  };

  const removeForever = (id) => {
    const filteredTasks = todoList.filter(item => item.id !== id);
    setToDoList(filteredTasks);
  }

  const filteredTodos = todoList.filter((item)=> item.status === activeStatus);

  const changeStatusSingleTodo = (id, changedStatus)=> {
    const changedItem = todoList.find((item)=> item.id === id);
    changedItem.status = changedStatus;
    const newToDoListWithoutItem = todoList.filter((item) => item.id !== id);
    setToDoList([...newToDoListWithoutItem, changedItem]);
  };

  return (
    <div className="container mt-5">
        <div className="mb-5">
            <HEADER />
        </div>
        <div className="mb-5 mt-5 pt-5 todos">
              <MainContent 
              changeStatus={changeStatus} 
              newTodoText={newTodoText} 
              setNewTodoText={setNewTodoText} 
              addToTodo={addToTodo} 
              setIsAddModalVisible={setIsAddModalVisible} 
              isAddModalVisible={isAddModalVisible}/>
              <h3 className="mt-5">
                <p className="active-status"> 
                  {activeStatus === "To Do" 
                    ? "To Do" 
                    : activeStatus === "Done" 
                    ? "Done" : "Trash"}
                </p>
              </h3>
              <div className="line mt-4 mb-4"></div>
              {filteredTodos.map((item, index)=> (
                <SingleToDo 
                  item={item} 
                  key={index} 
                  changeStatusSingleTodo={changeStatusSingleTodo}
                  removeForever={removeForever}
                  isModalVisible={isModalVisible}
                  setIsModalVisible={setIsModalVisible}
                  todoList={todoList}
                />
              ))}
        </div> 
          
        <div className="pt-5">
              <Footer />
        </div>
    </div>
  );
}

export default App;
