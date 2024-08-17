import ButtonAbout from "./ButtonAbout"
import GoToLinkBtn from "./icons/GoToLinkBtn"

const JobInstance = (props) =>{
    return(
        <div class="flex">
            <div class="flex justify-center items-center p-12 w-1/2 border border-gray-100">
                {/* <Image class="drop-shadow-lg" src={props.imageSource}/> */}
            </div>
            <div class="flex flex-col gap-6 w-1/2">
                <p class="font-semibold text-xl text-gray-900"> {props.name} </p>
                <p class="text-gray-600 font-normal text-base"> {props.description} </p>
                <div class="grid grid-cols-4 gap-y-2 gap-x-2">
                    {props.frameworks.map((framework, index)=>{
                        return <ButtonAbout key={index} text={framework}/>
                    })}
                </div>
                <GoToLinkBtn/>
            </div>
        </div>
    )
}

export default JobInstance