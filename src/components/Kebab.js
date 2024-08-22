import Xmark from "./icons/Xmark";
import LightIcon from "./icons/LightIcon";
const Kebab = () => {
  return (
    <div className="bg-gray-100	 flex justify-end ">
      <div className="flex flex-col bg-white w-full">
        <div className="flex justify-between p-4">
          <p class="font-normal text-3xl font-rubikMono dark:text-gray-50	">
            Tuguldur
          </p>
          <Xmark />
        </div>
        <div className="flex flex-col border-y border-gray-100 p-4 gap-4">
          <p className="text-gray-600 text-base	font-medium	">About </p>
          <p className="text-gray-600 text-base	font-medium	">Work </p>
          <p className="text-gray-600 text-base	font-medium	">Testimonials </p>
          <p className="text-gray-600 text-base	font-medium	">Contact </p>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex justify-between items-center">
            <p className="text-base	font-normal"> Switch Theme </p>
            <LightIcon />
          </div>
          <button className="self-stretch flex justify-center items-center bg-[#111827] rounded-lg text-white py-1.5 px-4 font-medium text-xl dark:bg-gray-50	 dark:text-gray-900">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};
export default Kebab;
