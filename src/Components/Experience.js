import ButtonAbout from "./ButtonAbout";
import JobHistory from "./JobHistory";

const data = [
  { 
    position: "Sr.Frontend Developer",
    date: "Nov 2021 - Present",
    list: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna."
    ] 
  },
  {
    position: "Team Lead",
    date: "Jul 2017 - Oct 2021",
    list: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna."
    ]
  },
  {
    position: "Full Stack Developer",
    date: "Dec 2015 - May 2017",
    list: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
  }
]
const Experience = () => {
  return (
    <div class="flex flex-col gap-4 items-center">
      <ButtonAbout text="Experience" />
      <p class="font-normal text-gray-600 text-xl mb-8">
        Here is a quick summary of my most recent experiences:
      </p>
      <div class="flex flex-col gap-8 ">
        {data.map((OneJob, index)=>{
          return <JobHistory key={index} date={OneJob.date} position={OneJob.position} list={OneJob.list} />
        })}  
      </div>
    </div>
  );
};
export default Experience;
