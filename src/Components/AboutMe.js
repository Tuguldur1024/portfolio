import ButtonAbout from "./ButtonAbout";

const AboutMe = () => {
  return (
    <div class="flex flex-col gap-12 items-center">
      <ButtonAbout text="About me" />
      <div class="flex gap-12 ">
        <div class="w-2/4"></div>
        <div class="w-2/4 ">
          <div class="flex flex-col gap-4 font-normal text-base text-gray-600">
            <p class="font-semibold text-3xl mb-2">
              Curious about me? Here you have it:
            </p>
            <p>
              I'm a designer turned full stack developer, passionate about
              React.js and Node.js. I excel in blending technical and visual
              aspects to craft exceptional digital products, prioritizing user
              experience, precise design, and optimized code.
            </p>
            <p>
              Since starting my web development journey in 2015, I've embraced
              challenges and kept up with the latest tech trends. Now in my
              early thirties, seven years in, I'm building cutting-edge web apps
              using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and
              more.
            </p>
            <p>
              With a progressive mindset, I enjoy the entire product development
              process, from ideation to execution. Off duty, you'll find me on
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
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
