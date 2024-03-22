import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

const config: Config = {
	title: "Velo Documentation",
	tagline: "Learn how to (⬆️,⬇️)",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://docs.velo.space",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "velo-dao", // Usually your GitHub org/user name.
	projectName: "velo-docs", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"]
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts"
				},
				blog: false,
				theme: {
					customCss: "./src/css/custom.css"
				}
			} satisfies Preset.Options
		]
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/social-card.jpg",
		announcementBar: {
			id: "velo_launch",
			content:
				'Velo Launch is coming, keep an eye on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/velo_space">our Twitter</a>',
			backgroundColor: "#f7f7f7",
			textColor: "#161616",
			isCloseable: true
		},
		navbar: {
			title: "Velo Docs",
			logo: {
				alt: "Velo Logo",
				src: "img/logo.svg",
				href: "/"
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "veloSidebar",
					position: "left",
					label: "Documentation"
				},
				{
					href: "https://github.com/velo-dao",
					label: "GitHub",
					position: "right"
				}
			]
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Documentation",
					items: [
						{
							label: "Get Started",
							to: "/docs/"
						},
						{
							label: "Profiles",
							to: "/docs/category/profiles"
						},
						{
							label: "Price Predictions",
							to: "/docs/category/price-predictions"
						},
						{
							label: "Reward Center",
							to: "/docs/category/reward-center"
						}
					]
				},
				{
					title: "Community",
					items: [
						{
							label: "Telegram",
							href: "https://t.me/velochat"
						},
						{
							label: "Twitter",
							href: "https://twitter.com/velo_space"
						}
					]
				},
				{
					title: "More",
					items: [
						{
							label: "GitHub",
							href: "https://github.com/velo_dao"
						}
					]
				}
			],
			copyright: `Copyright © ${new Date().getFullYear()} Velo DAO. Built with Docusaurus.`
		},
		prism: {
			theme: prismThemes.duotoneLight,
			darkTheme: prismThemes.duotoneDark
		}
	} satisfies Preset.ThemeConfig
}

export default config
