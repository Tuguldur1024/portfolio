import ButtonAbout from "./ButtonAbout"
import EnvelopeIcon from "./icons/EnvelopeIcon"
import NewTabIcon from "./icons/NewTabIcon"
import PhoneIcon from "./icons/PhoneIcon"
import TwitterIcon from "./icons/TwitterIcon";
import FigmaIcon from "./icons/FigmaIcon";
import CatIcon from "./icons/CatIcon";
const GetInTouch = () =>{
    return (
        <div class="flex flex-col gap-12 items-center px-8 sm:gap-6 sm:px-0">
            <div class="flex flex-col gap-4 items-center">
                <ButtonAbout text="Get in touch" />
                <p class="font-normal text-gray-600 text-xl mb-8 sm:mb-0 text-center dark:text-gray-300	">
                    What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
                </p>
            </div>
            <div class="flex flex-col gap-4 items-center sm:gap-0">
                <div class="flex gap-5 items-center sm:gap-4">
                    <EnvelopeIcon/>
                    <p class="text-gray-900 font-semibold text-4xl sm:text-lg dark:text-gray-50	"> Tuguldur@pinecone.mn </p>
                    <NewTabIcon/>
                </div>
                <div class="flex gap-5 items-center sm:gap-4">
                    <PhoneIcon/>
                    <p class="text-gray-900 font-semibold text-4xl sm:text-lg dark:text-gray-50	"> +976 99119911 </p>
                    <NewTabIcon/>
                </div>
            </div>
            <div class="flex flex-col gap-2 items-center">
                <p> You may also find me on these platforms! </p>
                <div class="flex gap-1 items-center">
                    <CatIcon />
                    <TwitterIcon />
                    <FigmaIcon />
                </div>
            </div>
        </div>
    )
}

export default GetInTouch