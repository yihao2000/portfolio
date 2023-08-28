import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";
import styles from "../styles/custom.module.css";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { AiFillHome, AiFillCode } from "react-icons/ai";
import { PiNewspaperClippingFill } from "react-icons/pi";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="lg" position="sticky" className={styles.fadedown}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <ul className=" flex gap-4 justify-start ml-2">
          {/* {siteConfig.navItems.map((item) => ( */}
          <NavbarItem key={"Home"}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href={"#first"}
            >
              <span className="text-xl">
                <AiFillHome size={28} />
              </span>
            </NextLink>
          </NavbarItem>
          <NavbarItem key={"Resume"}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href={"#second"}
            >
              <span className="text-xl">
                <PiNewspaperClippingFill size={28} />
              </span>
            </NextLink>
          </NavbarItem>
          <NavbarItem key={"Portfolio"}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href={"#third"}
            >
              <span className="text-xl">
                <AiFillCode size={28} />
              </span>
            </NextLink>
          </NavbarItem>

          {/* <NavbarItem key={item.href}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href={item.href}
            >
              <span className="text-xl">{item.label}</span>
            </NextLink>
          </NavbarItem> */}
          {/* // ))} */}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            isExternal
            href={siteConfig.links.linkedin}
            aria-label="LinkedIn"
          >
            <AiFillLinkedin
              color="grey"
              size={24}
              className={styles.gloweffect}
            />
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <AiFillGithub
              color="grey"
              size={24}
              className={styles.gloweffect}
            />
          </Link>

          <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
            <BsDiscord color="grey" size={24} className={styles.gloweffect} />
          </Link>
          <Link
            isExternal
            href={siteConfig.links.instagram}
            aria-label="Github"
          >
            <AiFillInstagram
              color="grey"
              size={24}
              className={styles.gloweffect}
            />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
      </NavbarContent>
    </NextUINavbar>
  );
};
