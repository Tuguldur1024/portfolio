import ButtonAbout from "./ButtonAbout"
import JobInstance from "./JobInstance"

const data = [
    {name: "UBCab",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        frameworks: ["React","Next.js","Typescript","Nest.js","PostgreSQL","Tailwindcss","Figma","Cypress","Storybook","Git"],
        imageSource : "./images/Ubcab.png"
    },
    {name: "Mentorhub",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        frameworks: ["React","Next.js","Typescript","Nest.js","PostgreSQL","Tailwindcss","Figma","Cypress","Storybook","Git"],
        imageSource : "./images/MentorHub.png"
    },
    {name: "iToim",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        frameworks: ["React","Next.js","Typescript","Nest.js","PostgreSQL","Tailwindcss","Figma","Cypress","Storybook","Git"],
        imageSource : "./images/iToim.png"
    }
]

const Work = ()=>{
    return(
        <div class="flex flex-col gap-4 items-center px-16">
            <ButtonAbout text="Work" />
            <p class="font-normal text-gray-600 text-xl mb-8">
                Some of the noteworthy projects I have built:
            </p>
            {data.map((OneWork, index)=>{
                return <JobInstance key={index} imageSource={OneWork.imageSource} name={OneWork.name} description={OneWork.description} frameworks={OneWork.frameworks}/>
            })}
        </div>
    )
}

export default Work