import ButtonAbout from "./ButtonAbout";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div class="flex flex-col gap-12 items-center sm:flex-col sm:gap-6">
      <ButtonAbout text="About me" />
      <div class="flex gap-12 sm:flex sm:w-full ">
        <div class="w-2/4 flex justify-start sm:w-full">
          <div class="border-8 border-solid border-gray-50	">
            <Image
              src="/images/AboutMe.png"
              width={400}
              height={480}
              alt="img"
            />
          </div>
        </div>
        <div class="w-2/4 sm:w-full">
          <div class="flex flex-col gap-4 font-normal text-base text-gray-600 dark:text-gray-300	">
            <p class="font-semibold text-3xl mb-2 dark:text-gray-50	">
              Curious about me? Here you have it:
            </p>
            <p>
              Im a designer turned full stack developer, passionate about
              React.js and Node.js. I excel in blending technical and visual
              aspects to craft exceptional digital products, prioritizing user
              experience, precise design, and optimized code.
            </p>
            <p>
              Since starting my web development journey in 2015, Ive embraced
              challenges and kept up with the latest tech trends. Now in my
              early thirties, seven years in, Im building cutting-edge web apps
              using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and
              more.
            </p>
            <p>
              With a progressive mindset, I enjoy the entire product development
              process, from ideation to execution. Off duty, youll find me on
              Twitter, tracking startup journeys, or unwinding. Follow me for
              tech insights and public project updates on Twitter or GitHub.
            </p>
            <p>Finally, some quick bits about me.</p>
            <div>
              <li>B.E. in Computer Engineering</li>
              <li>Avid learner </li>
              <li>Full time freelancer</li>
            </div>
            <p>
              One last thing, Im available for freelance work, so feel free to
              reach out and say hello! I promise I dont bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
