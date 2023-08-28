"use client"
import Particles from "react-tsparticles";
import particlesConfig from "../background/config/particles-config";
import lightparticlesconfig from "../background/config/particles-configlight";
import { loadFull } from "tsparticles";
import { useTheme } from "next-themes";


export default function ParticleBackground() {
	const { theme, setTheme } = useTheme();

	const particlesInit = async (main) => {
		console.log(main);
		await loadFull(main);
	};
	const particlesLoaded = (container) => {
		console.log(container);
	};
	return (
		<Particles
			params={theme == 'dark' ? particlesConfig : lightparticlesconfig}
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
		/>
	);
}