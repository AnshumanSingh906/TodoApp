import React, { useState } from "react";
import "./todo.css";

function ToDoList() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  //console.log(listData)
  const addActivity = () => {
    if(activity!=="")
    {
    let newData = [...listData, activity];
    setListData(newData);
    setActivity("");
    }
    else{
        alert("Enter some activities")
    }
  };
  const deleteActivity = (value) => {
     const newData = listData.filter((item,id) =>{
        return id!==value;
     });
    setListData(newData);
  };


  return (
    <>
      <div className="container">
        <div className="header">TO DO LIST</div>
      </div>
      <br />
      <div className="body">
        <input
          type="text"
          className="input"
          placeholder="ADD YOUR ACTIVITIES"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button className="btn" onClick={addActivity}>
          Add
        </button>
      </div>
      <div className="list-item">
        <ul className="ul-list">
            { 
                listData.map( (value,key) =>{
                    return(
                        <div className="curr-list" key={key}>
                            <li className="list-content">{value} <button className="delete-btn" onClick={()=>deleteActivity(key)}>delete</button>
                            </li>
                           
                        </div>
                    
                    )
            })}
        </ul>
      </div>
    </>
  );
}

export default ToDoList;
