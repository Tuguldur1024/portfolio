import ButtonAbout from "./ButtonAbout"

const GetInTouch = () =>{
    return (
        <div class="flex flex-col gap-12 items-center px-8">
            <div class="flex flex-col gap-4 items-center">
                <ButtonAbout text="Get in touch" />
                <p class="font-normal text-gray-600 text-xl mb-8">
                    What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
                </p>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default GetInTouch