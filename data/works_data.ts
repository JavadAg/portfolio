import commerce_img from "../public/assets/projects/commerce.jpg"
import countries_img from "../public/assets/projects/countries.jpg"
import shareit_img from "../public/assets/projects/shareit.jpg"
import tiercreator_img from "../public/assets/projects/tiercreator.jpg"
import todo_img from "../public/assets/projects/todo.jpg"
import weather_img from "../public/assets/projects/weather.jpg"

const works = [
  {
    id: 1,
    imgSrc: tiercreator_img,
    title: "Tier-Creator",
    description:
      "Tiercreator is clone of Tiermaker using supabase and CRA . user is capable of creating tier , templates , vote on it , share it and delete their own tier . used supabase as backend and google for authentication",
    website_href: "http://tier-creator.vercel.app",
    git_href: "https://github.com/JavadAg/tier-creator",
    techs: [
      "React",
      "TypeScript",
      "Supabase",
      "React-Query",
      "TailwindCSS",
      "DnD-Kit"
    ]
  },
  {
    id: 2,
    imgSrc: commerce_img,
    title: "Ecommerce-NextJS",
    description:
      "Ecommerce website to purchase shoes from different categories. users can manage cart, see their purchase history and their wishlist in dashboard panel. built by graphCMS as content management and NextJS.",
    website_href: "http://tier-creator.vercel.app",
    git_href: "https://github.com/JavadAg/tier-creator",
    techs: ["NextJS", "GraphCMS", "NextAuth", "TailwindCSS"]
  },

  {
    id: 3,
    imgSrc: shareit_img,
    title: "ShareIt-MERN",
    description:
      "Shareit is a clone of popular photo sharing apps like instagram,... . it was actually my first big project after learning react. user can register and post their photos , also they can follow and unfollow each other. other features are like posts, send comment,update and delete their own posts.",
    website_href: "https://shareit-mern.netlify.app/",
    git_href: "https://github.com/JavadAg/shareit-mern",
    techs: ["React", "RTK", "TailwindCSS", "ExpressJS", "MongoDB", "Multer"]
  },
  {
    id: 4,
    imgSrc: weather_img,
    title: "Weather-app",
    description:
      "Simple Weather app as part of projects i made to practice typescript. user can search through cities provided by geo api. current weather and forecast provided by openweather api.",
    website_href: "http://weather-app-javadag.vercel.app",
    git_href: "https://github.com/JavadAg/weather-app",
    techs: ["React", "TypeScript", "OpenWeatherApi", "GeoApi", "TailwinCSS"]
  },
  {
    id: 5,
    imgSrc: todo_img,
    title: "Todo-app",
    description:
      "simple todo app as part of projects i made to practice typescript. login using google authentication. features are add todo, set as done and delete it.",
    website_href: "https://todo-ts-supabase.netlify.app/",
    git_href: "https://github.com/JavadAg/simple-todo",
    techs: ["React", "TypeScript", "Supabase", "TailwindCSS"]
  },
  {
    id: 6,
    imgSrc: countries_img,
    title: "Countries-app",
    description:
      "made this app to practice api . its part of challenges in frontendmentor website . user can see all countries, filter by region and see specific country detail.",
    website_href: "http://frontendmentor-restapicounteries.vercel.app/",
    git_href: "https://github.com/JavadAg/frontendmentor-restapicounteries",
    techs: ["React", "RestcountriesApi", "TailwindCSS"]
  }
]
export default works
