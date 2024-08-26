import List from "./List";

const JobHistory = (props) => {
  return (
    <div class="bg-white p-8 justify-between flex md:gap-12 drop-shadow-md flex-col md:flex-row gap-6 dark:bg-gray-800	">
      <div class="w-52 flex justify-start">
        <img class="w-1/2 h-7" src="/images/logo-upwork.png" alt="JobHistory" />{" "}
      </div>
      <div class="flex flex-col gap-1">
        <p class="font-semibold text-xl text-gray-900 mb-3 dark:text-gray-50	">
          {props.position}
        </p>
        {props.list.map((text, index) => {
          return <List key={index} listText={text} />;
        })}
      </div>
      <p className="dark:text-gray-300	"> {props.date} </p>
    </div>
  );
};
export default JobHistory;
