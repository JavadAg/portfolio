import commerce_img from '../public/assets/projects/commerce.jpg'
import shareit_img from '../public/assets/projects/shareit.jpg'
import tiercreator_img from '../public/assets/projects/tiercreator.jpg'
import chatty_img from '../public/assets/projects/chatty.jpg'

const works = [
  {
    id: 1,
    imgSrc: tiercreator_img,
    title: 'Tier-Creator',
    description:
      'Tiercreator is clone of Tiermaker using supabase and CRA . user is able to create tier, templates, votes, share it and delete their own tier . used supabase as backend and google Oath for authentication',
    website_href: 'http://tier-creator.vercel.app',
    git_href: 'https://github.com/JavadAg/tier-creator',
    techs: [
      'React',
      'TypeScript',
      'Supabase',
      'React-Query',
      'TailwindCSS',
      'DnD-Kit'
    ]
  },
  {
    id: 2,
    imgSrc: commerce_img,
    title: 'Ecommerce-NextJS',
    description:
      'Ecommerce website for shoes. users can manage cart, see their purchase history and their wishlist in dashboard panel. built by graphCMS as content management and NextJS.',
    website_href: 'http://tier-creator.vercel.app',
    git_href: 'https://github.com/JavadAg/tier-creator',
    techs: ['NextJS', 'GraphCMS', 'NextAuth', 'TailwindCSS']
  },

  {
    id: 3,
    imgSrc: shareit_img,
    title: 'Social media app',
    description:
      'Shareit is a social media app like instagram,... . user can register and post their photos or video, they can also follow and unfollow each other. other features are like posts, send comment and save them.',
    website_href: 'http://shareit-v2-sanity-nextjs.vercel.app/',
    git_href: 'https://github.com/JavadAg/shareit-v2-sanity-nextjs',
    techs: ['Nextjs', 'Sanity', 'Tailwind', 'Cloudinary', 'Nextauth']
  },
  {
    id: 4,
    imgSrc: chatty_img,
    title: 'Chaty ( Chat app )',
    description:
      'simple chat app using firebase realtime , user can search another user name and start a chat',
    website_href: 'https://chatapp-firebase-vite.vercel.app/',
    git_href: 'https://github.com/JavadAg/chatapp-firebase',
    techs: ['Vite for react', 'Typescript', 'Tailwind', 'Firebase', 'Zustand']
  }
]
export default works
