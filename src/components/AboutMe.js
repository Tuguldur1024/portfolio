import ButtonAbout from "./ButtonAbout";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div class="flex flex-col gap-12 items-center sm:gap-6">
      <ButtonAbout text="About me" />
      <div class="flex gap-12 flex-col md:flex-row sm:w-full ">
        <div class="flex sm:w-full justify-center">
          <div class="border-8 border-solid items-center border-gray-50">
            <Image
              src="/images/png"
              width={440}
              height={520}
              alt="img"
            />
          </div>
        </div>
        <div class="sm:w-full">
          <div class="flex flex-col gap-4 font-normal text-base text-gray-600 dark:text-gray-300	">
            <p class="font-semibold text-3xl mb-2 dark:text-gray-50	">
              Curious about me? :
            </p>
            <p>
            I am a passionate full-stack developer with a strong focus on MERN stack development. Lately, I have also been diving into AI models and expanding my knowledge in the field.            </p>
            <p>
            Having mastered the MERN stack, I have built several projects—both individually and collaboratively. I usually handle the logical aspects of projects, including database structuring and API development. However, that does not mean I shy away from frontend work—I am quite skilled at it too!
            </p>
            <p>
            I love solving programming challenges and actively participate in competitive programming, earning some notable awards along the way.            </p>
            <p>Finally, some quick bits about me.</p>
            <div>
              <li>A sports enthusiast</li>
              <li>Passionate about programming and AI</li>
              <li>Avid learner and dedicated worker</li>
              <li>Highly motivated to showcase my skills and potential</li>
            </div>
            <p>
            Lastly, I am eager to work and confident that I can be a valuable asset to your company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
