import check_box_empty from "../assets/check-box-empty.png"
import check_box from "../assets/check-box.png"

const ToDoItems = ({text, id, isComplete, deleteTask, toggle}) => {
    return(
        <div className="flex items-center my-3 gap-2">
        <div onClick={()=>{toggle(id)}} className="flex flex-1 items-center cursor-pointer">
            <img className="w-8" src={isComplete ? check_box : check_box_empty}/>
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>{text}</p>
        </div>
        <button onClick={() => {deleteTask(id)}} className="w-3.5 cursor-pointer">X</button>
    </div>
    )
}
export default ToDoItems;