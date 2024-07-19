import { aboutInfoType } from '@/types';
import { pwaLightLogo, pwaDarkLogo, shadcnDarkLogo, shadcnLightLogo, flashScriptLogo, reactLogo, viteLogo, tailwindLogo, typescriptLogo, rapidAPILogo, reactqueryLogo, framermotionLogo, reactrouterLogo } from './index';
import { useTheme } from '@/theme/theme-provider';

const useAbout = () => {

    const { theme } = useTheme();
    
    const aboutInfo: aboutInfoType[] = [
        { 
            id: 1, 
            aTagClassName: 'absolute w-40 h-40 translate-x-[200%] translate-y-[200%] hover:border-4 hover:border-transparent border-transparent rounded-full cursor-pointer transition-all', 
            transitionDelay: 0.5,
            href: "https://github.com/FlashScript-Main/codetube",
            imgSrc: flashScriptLogo,
            imgAlt: "FlashScript Logo",
            imgClassName: "rounded-full"
        },
        { 
            id: 2, 
            aTagClassName: 'absolute w-20 h-20 translate-x-[450%] translate-y-[200%] hover:border-4 hover:border-transparent border-transparent rounded-full cursor-pointer transition-all', 
            transitionDelay: 0.7,
            href: "https://react.dev/",
            imgSrc: reactLogo,
            imgAlt: "ReactJS Logo",
            imgClassName: ""
        },
        { 
            id: 3, 
            aTagClassName: 'absolute w-20 h-20 translate-x-[600%] translate-y-[250%] hover:border-4 hover:border-transparent border-transparent rounded-full cursor-pointer transition-all', 
            transitionDelay: 0.9,
            href: "https://vitejs.dev/",
            imgSrc: viteLogo,
            imgAlt: "Vite Logo",
            imgClassName: ""
        },
        { 
            id: 4, 
            aTagClassName: 'absolute w-20 h-20 translate-x-[300%] translate-y-[250%] hover:border-4 hover:border-transparent border-transparent rounded-full cursor-pointer transition-all', 
            transitionDelay: 1.1,
            href: "https://tailwindcss.com/",
            imgSrc: tailwindLogo,
            imgAlt: "Tailwind CSS Logo",
            imgClassName: ""
        },
        { 
            id: 5, 
            aTagClassName: 'absolute w-16 h-16 translate-x-[320%] translate-y-[480%] hover:border-4 hover:border-transparent border-transparent rounded-full cursor-pointer transition-all', 
            transitionDelay: 1.3,
            href: "https://www.typescriptlang.org/",
            imgSrc: typescriptLogo,
            imgAlt: "TypeScript Logo",
            imgClassName: ""
        },
        { 
            id: 6, 
            aTagClassName: 'absolute w-20 h-20 translate-x-[650%] translate-y-[380%] hover:border-4 hover:border-transparent border-transparent rounded-full cursor-pointer transition-all', 
            transitionDelay: 1.5,
            href: "https://rapidapi.com/ytdlfree/api/youtube-v31/playground/apiendpoint_568ae1b5-7353-441d-8753-cfa5337ade8f",
            imgSrc: rapidAPILogo,
            imgAlt: "RapidAPI Logo",
            imgClassName: ""
        },
        { 
            id: 7, 
            aTagClassName: 'absolute w-20 h-20 translate-x-[640%] translate-y-[550%] hover:border-4 hover:border-transparent border-transparent rounded-full cursor-pointer transition-all', 
            transitionDelay: 1.7,
            href: "https://tanstack.com/query/latest",
            imgSrc: reactqueryLogo,
            imgAlt: "React Query Logo",
            imgClassName: ""
        },
        { 
            id: 8, 
            aTagClassName: 'absolute w-16 h-16 translate-x-[330%] translate-y-[690%] hover:border-4 hover:border-transparent border-transparent rounded-full cursor-pointer transition-all', 
            transitionDelay: 1.9,
            href: "https://www.framer.com/motion/",
            imgSrc: framermotionLogo,
            imgAlt: "Framer Motion Logo",
            imgClassName: ""
        },
        { 
            id: 9, 
            aTagClassName: 'absolute w-20 h-20 translate-x-[330%] translate-y-[690%] hover:border-4 hover:border-transparent border-transparent rounded-full cursor-pointer transition-all', 
            transitionDelay: 2.1,
            href: "https://reactrouter.com/en/main",
            imgSrc: reactrouterLogo,
            imgAlt: "React Router Logo",
            imgClassName: "rounded-full"
        },
        { 
            id: 10, 
            aTagClassName: 'absolute w-20 h-20 translate-x-[580%] translate-y-[680%] hover:border-4 hover:border-transparent border-transparent rounded-full cursor-pointer transition-all', 
            transitionDelay: 2.3,
            href: "https://web.dev/explore/progressive-web-apps",
            imgSrc: theme === "dark" ? pwaDarkLogo : pwaLightLogo,
            imgAlt: "PWA Logo",
            imgClassName: ""
        },
        { 
            id: 11, 
            aTagClassName: 'absolute w-20 h-20 translate-x-[450%] translate-y-[780%] hover:border-4 hover:border-transparent border-transparent rounded-full cursor-pointer transition-all', 
            transitionDelay: 2.5,
            href: "https://ui.shadcn.com/",
            imgSrc: theme === "dark" ? shadcnDarkLogo : shadcnLightLogo,
            imgAlt: "ShadCN Logo",
            imgClassName: "rounded-full"
        }
    ];

    return aboutInfo

}

export default useAbout