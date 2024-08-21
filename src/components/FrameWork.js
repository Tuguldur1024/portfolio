const Framework = (props) => {
  return (
    <div class="flex flex-col gap-2 items-center">
      {props.icon}
      <p class="font-normal text-gray-600 text-lg dark:text-gray-300	">
        {props.text}
      </p>
    </div>
  );
};

export default Framework;
