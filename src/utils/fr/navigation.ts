
const navBarLinks = [
	{ name: "Accueil",					url: "/fr" },
	{ name: "Produits",					url: "/fr/products" },
	{ name: "Services",					url: "/fr/services" },
	{ name: "Blog",						url: "/fr/blog" },
	{ name: "Contact",					url: "/fr/contact" },
];

const footerLinks = [
	{
		section: "Écosystème",
		links: [
			{ name: "Documentation",	url: "/fr/welcome-to-docs/" },
			{ name: "Équipements",		url: "/fr/products" },
			{ name: "Services",			url: "/fr/services" },
		],
	},
	{
		section: "Société",
		links: [
			{ name: "À propos de nous",	url: "#" },
			{ name: "Blog",				url: "/fr/blog" },
			{ name: "Carrières",		url: "#" },
			{ name: "Clients",			url: "#" },
		],
	},
];

const socialLinks = {
	facebook:	"https://www.facebook.com/",
	instagram:	"https://www.instagram.com/",
	tiktok:		"https://www.tiktok.com/",
	whatsapp:	"https://www.whatsapp.com/",
	telegram:	"https://www.telegram.com/",
	discord:	"https://www.discord.com/",

};

export default {
	navBarLinks,
	footerLinks,
	socialLinks,
};