import {AiFillHome, AiFillCode} from "react-icons/ai"
import {PiNewspaperClippingFill} from "react-icons/pi"

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Andrew's Portfolio",
	description: "Get to know me better",
	navItems: [
		{
			label: "Home",
			href: "#first",
		},
    {
      label: "Resume",
      href: "#second",
    },
    {
      label: "Portfolio",
      href: "#third",
    },
   
	],
	
	links: {
		github: "https://github.com/yihao2000",
		discord: "https://discordapp.com/users/endru2000",
    	instagram: "https://www.instagram.com/andrewgiovanniw/",
		linkedin: "https://www.linkedin.com/in/andrew-winoto-26a16b21a/"
	},
};
