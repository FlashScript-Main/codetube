export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'JavaScript Mastery';
export const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png'

    
import vscodeLogo from '../assets/logo/vs-code.svg';
import htmlLogo from '../assets/logo/html.svg';
import cssLogo from '../assets/logo/css.svg';
import sassLogo from '../assets/logo/sass.svg';
import tailwindLogo from '../assets/logo/tailwind.svg';
import materialUILogo from '../assets/logo/material-ui.svg';
import javascriptLogo from '../assets/logo/javascript.svg';
import typescriptLogo from '../assets/logo/typescript.svg';
import reduxLogo from '../assets/logo/redux.svg';
import githubLightLogo from '../assets/logo/github-light.svg';
import githubDarkLogo from '../assets/logo/github-dark.svg';
import reactrouterLogo from '../assets/logo/react-router.svg';
import jestLogo from '../assets/logo/jest.svg';
import pwaLogo from '../assets/logo/pwa.svg';
import viteLogo from '../assets/logo/vite.svg';
import reactLogo from '../assets/logo/reactjs.svg';
import nextDarkLogo from '../assets/logo/nextjs-dark.svg';
import nextLightLogo from '../assets/logo/nextjs-light.svg';
import codetubeDarkLogo from '../assets/logo/codetube-dark.svg';
import codetubeLightLogo from '../assets/logo/codetube-light.svg';
import { CategoriesType } from '../types';

const isDark = true;

export const categories: CategoriesType[] = [
  { id: 1, name: 'VS Code', icon: vscodeLogo, },
  { id: 2, name: 'HTML', icon: htmlLogo, },
  { id: 3, name: 'CSS', icon: cssLogo, },
  { id: 4, name: 'Sass', icon: sassLogo, },
  { id: 5, name: 'TailwindCSS', icon: tailwindLogo, },
  { id: 6, name: 'Material UI', icon: materialUILogo, },
  { id: 7, name: 'JavaScript', icon: javascriptLogo },
  { id: 8, name: 'TypeScript', icon: typescriptLogo, },
  { id: 9, name: 'Redux', icon: reduxLogo, },
  { id: 10, name: 'Github', icon: isDark ? githubDarkLogo : githubLightLogo, },
  { id: 11, name: 'React Router', icon: reactrouterLogo, },
  { id: 12, name: 'PWA', icon: pwaLogo, },
  { id: 13, name: 'Jest', icon: jestLogo, },
  { id: 14, name: 'Vite', icon: viteLogo, },
  { id: 15, name: 'ReactJS', icon: reactLogo, },
  { id: 16, name: 'NextJS', icon: isDark ? nextDarkLogo : nextLightLogo, },
];

export {
    codetubeDarkLogo,
    codetubeLightLogo,
}

export const searchLink: string = "search?part=snippet&q=learn%20";


export const channelLink: string = "channels?part=snippet&id=";

export const searchChannelLink: string = "search?part=snippet&order=date&channelId=";

export const searchUserLink: string = "search?part=snippet&q=";