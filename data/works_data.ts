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
      "Shareit is a clone of popular photo sharing apps like instagram,... . user can register and post their photos , also they can follow and unfollow each other. other features are like posts, send comment,update and delete their own posts.",
    website_href: "https://shareit-mern.netlify.app/",
    git_href: "https://github.com/JavadAg/shareit-mern",
    techs: ["React", "RTK", "TailwindCSS", "ExpressJS", "MongoDB", "Multer"]
  }
]
export default works
