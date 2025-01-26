import React from "react"
import { MdDelete } from "react-icons/md";
import { IconContext } from "react-icons";

function Container({obj , removeTask , changeState}) {
    return (
        <div className="container">
            <ul id="listContainer">
                { obj.map((elem)=>(
                    <li key={elem.name.charAt(0)}>
                        <div className="checkbox">
                            <input type="checkbox" onChange={() => changeState(elem.name)} checked={elem.isChecked}/>
                        </div>
                        <div className="task-details">
                            <h3 style={elem.isChecked ? {textDecoration : 'line-through'} : {}}>{elem.name}</h3>
                            <p style={elem.isChecked ? {textDecoration : 'line-through'} : {}}>{elem.date}</p>
                            <p style={elem.isChecked ? {textDecoration : 'line-through'} : {}}>{elem.description}</p>
                        </div>
                        <IconContext.Provider
                        value={{ color: 'blue', size: '30px' }}
                        >
                            <MdDelete className="delete-task" onClick={()=>{
                                removeTask(elem.name);
                                }
                            } />
                        </IconContext.Provider>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Container