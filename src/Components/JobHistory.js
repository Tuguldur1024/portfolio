import upworkImage from "./images/logo-upwork.png"
import List from "./List";

const JobHistory = (props) => {
  return( <div class="p-8 justify-between flex gap-12 drop-shadow-md"> 
    <div class="w-52 flex justify-start"> <img src={upworkImage} alt="JobHistory"/> </div>
    <div class="flex flex-col gap-1">
      <p class="font-semibold text-xl text-gray-900 mb-3"> {props.position} </p>
      {props.list.map((text, index)=>{
        return <List key={index} listText={text}/>
      })}
    </div>
    <p> {props.date} </p>
  </div>);
};
export default JobHistory