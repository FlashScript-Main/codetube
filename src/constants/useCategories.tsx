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
import pwaLightLogo from '../assets/logo/pwa-light.svg';
import pwaDarkLogo from '../assets/logo/pwa-dark.svg';
import viteLogo from '../assets/logo/vite.svg';
import reactLogo from '../assets/logo/reactjs.svg';
import nextDarkLogo from '../assets/logo/nextjs-dark.svg';
import nextLightLogo from '../assets/logo/nextjs-light.svg';
import { CategoriesType } from '../types';
import { useTheme } from '@/theme/theme-provider';

const useCategories = () => {

    const { theme } = useTheme()

    const categories: CategoriesType[] = [
        { id: 1, name: 'VS Code', icon: vscodeLogo, },
        { id: 2, name: 'HTML', icon: htmlLogo, },
        { id: 3, name: 'CSS', icon: cssLogo, },
        { id: 4, name: 'Sass', icon: sassLogo, },
        { id: 5, name: 'TailwindCSS', icon: tailwindLogo, },
        { id: 6, name: 'Material UI', icon: materialUILogo, },
        { id: 7, name: 'JavaScript', icon: javascriptLogo },
        { id: 8, name: 'TypeScript', icon: typescriptLogo, },
        { id: 9, name: 'Redux', icon: reduxLogo, },
        { id: 10, name: 'Github', icon: theme === "dark" ? githubDarkLogo : githubLightLogo, },
        { id: 11, name: 'React Router', icon: reactrouterLogo, },
        { id: 12, name: 'PWA', icon: theme === "dark" ? pwaDarkLogo : pwaLightLogo, },
        { id: 13, name: 'Jest', icon: jestLogo, },
        { id: 14, name: 'Vite', icon: viteLogo, },
        { id: 15, name: 'ReactJS', icon: reactLogo, },
        { id: 16, name: 'NextJS', icon: theme === "dark" ? nextDarkLogo : nextLightLogo, },
      ];

    return categories

}

export default useCategories