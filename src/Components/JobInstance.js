import ButtonAbout from "./ButtonAbout"
import GoToLinkBtn from "./icons/GoToLinkBtn"
import Image from 'next/image';
const JobInstance = (props) =>{
    let content = <div class="flex drop-shadow-md sm:flex-col">
    <div class="flex justify-center items-center p-12 w-1/2 border border-gray-100 sm:w-full sm:p-8">
         <Image class="drop-shadow-lg" src={props.imageSource} height={384} width={480}/> 
    </div>
    <div class="flex flex-col gap-6 w-1/2 p-12 sm:w-full sm:p-8">
        <p class="font-semibold text-xl text-gray-900"> {props.name} </p>
        <p class="text-gray-600 font-normal text-base"> {props.description} </p>
        <div class="grid grid-cols-4 gap-y-2 gap-x-2 sm: grid-cols-2">
            {props.frameworks.map((framework, index)=>{
                return <ButtonAbout key={index} text={framework}/>
            })}
            </div>
            <GoToLinkBtn/>
        </div>
    </div>
    if(props.number%2 == 1)
    {
        content =<div class="flex drop-shadow-md sm:flex-col-reverse">
        <div class="flex flex-col gap-6 w-1/2 p-12 sm:w-full sm:p-8">
            <p class="font-semibold text-xl text-gray-900"> {props.name} </p>
            <p class="text-gray-600 font-normal text-base"> {props.description} </p>
            <div class="grid grid-cols-4 gap-y-2 gap-x-2 sm:grid-cols-2">
                {props.frameworks.map((framework, index)=>{
                    return <ButtonAbout key={index} text={framework}/>
                })}
            </div>
            <GoToLinkBtn/>
        </div>
        <div class="flex justify-center items-center p-12 w-1/2 border border-gray-100 sm:w-full sm:p-8">
             <Image class="drop-shadow-lg" src={props.imageSource} height={384} width={480}/> 
        </div>
    </div>
    }
    return(
        content
    )
}

export default JobInstance