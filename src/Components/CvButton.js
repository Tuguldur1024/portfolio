const CvButton = (props) => {
  return (
    <button class="flex justify-center items-center bg-[#111827] rounded-lg text-white py-1.5 px-4 font-medium text-xl dark:bg-gray-50	 dark:text-gray-900	">
      {props.text}
    </button>
  );
};
export default CvButton;
