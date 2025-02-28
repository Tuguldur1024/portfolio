import ButtonAbout from "./ButtonAbout";
import JobInstance from "./JobInstance";

const data = [
  {
    name: "Ecommerce",
    description:
      "A fully functional eCommerce website, built entirely by me. Users can sign up and sign in seamlessly. They can save their favorite products for easy access. The platform allows users to leave comments, rate products, and view feedback from others. Designed with a robust backend to ensure smooth functionality. While the website is fully operational, it's currently not responsive. Future improvements could include optimizing it for different devices.",
    frameworks: [
      "React",
      "Next.js",
      "Typescript",
      "Express",
      "MongoDb",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Git",
    ],
    imageSource: "/images/ecommerce.png",
    index: 0,
    link : "https://online-shop-tuguldur1024.vercel.app",
    githubLink : "https://github.com/Tuguldur1024/OnlineShop",
  },
  {
    name: "Хоолhub",
    description:
      "The Online Food Delivery System features multiple restaurants, each registered by its respective owner. Users can also register their own restaurant businesses, gaining access to an admin panel for full control. Customers can select their location on a map, and the system calculates the estimated delivery time from the nearest restaurant branch. Admin owners can add restaurant branches by selecting the name and location from the map. Users can leave reviews and comments after successfully ordering and receiving their food. The platform includes many additional features to enhance the user experience. My contributions included implementing the location-based functionality, designing the database structure, and developing both the backend and frontend along with core business logic. *Note: The website is currently not responsive, but future updates could improve adaptability across devices.",
    frameworks: [
      "React",
      "Next.js",
      "Typescript",
      "MongoDb",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Git",
    ],
    imageSource: "/images/foodhub.png",
    index: 1,
    link : "uberdash-psi.vercel.app",
    githubLink : "https://github.com/Pinecone-2024-LEAP-1G/Uberdash",
  },
  {
    name: "Expense tracker website",
    description:
    "A personal finance tracker, built entirely by me. Users can track their income and expenses effortlessly. Displays the current balance for better financial management. Features an intuitive and engaging frontend. Designed to provide a smooth user experience. Currently, the application is not responsive, but future improvements could include optimizing it for various devices." ,   
    frameworks: [
      "React",
      "Next.js",
      "Javascript",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Express",
      "Git",
    ],
    imageSource: "/images/expense.png",
    index: 2,
    link : "https://tuguldur-expense-tracker.vercel.app/home",
    githubLink : "https://github.com/Tuguldur1024/expenseTracker",
  },
  {
    name: "Hotel Booking System",
    description:
      "A collaborative project built with a team of three. Features a complex search system along with a dedicated admin panel. My contributions included designing the database structure and developing the entire backend. Additionally, I worked on parts of the frontend and conducted thorough testing. Successfully implemented GraphQL, MongoDB type systems, and optimized complex queries and mutations. Currently, the application is not responsive, but future improvements could enhance its adaptability across devices.",
    frameworks: [
      "React",
      "Next.js",
      "Typescript",
      "GraphQL",
      "Tailwindcss",
      "Monorepo",
      "Jest Test",
      "Git",
      "e2e testing" 
    ],
    imageSource: "/images/hotel.png",
    index: 1,
    link : "https://intern-1fg-hotel-booking-frontend-prod-43p61zffm.vercel.app",
    githubLink : "https://github.com/orgs/pinecone-studio/projects/255",
  }
];

const Work = () => {
  return (
    <div class="flex flex-col gap-6 items-center px-0 md:px-16 lg:px-16">
      <ButtonAbout text="Work" />
      <p class="font-normal text-gray-600 text-xl mb-2 text-center md:mb-8 lg:smb-8 dark:text-gray-300	 ">
        Some of my projects :
      </p>
      {data.map((OneWork, index) => {
        return (
          <JobInstance
            key={index}
            number={OneWork.index}
            imageSource={OneWork.imageSource}
            name={OneWork.name}
            description={OneWork.description}
            frameworks={OneWork.frameworks}
            link = {OneWork.link}
            githubLink = {OneWork.githubLink}
          />
        );
      })}
    </div>
  );
};

export default Work;
