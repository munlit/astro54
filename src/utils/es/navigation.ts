// An array of links for navigation bar
const navBarLinks = [
	{ name: "Inicio",					url: "/" },
	{ name: "Productos",				url: "/productos" },
	{ name: "Servicios",				url: "/servicios" },
	{ name: "Precios",					url: "/precios" },
	{ name: "Testimonios",				url: "/testimonios" },
	{ name: "Contactanos",				url: "/contactanos" },
];
// An array of links for footer
const footerLinks = [
	{
		section: "Ecosistema",
		links: [
			{ name: "Documentación",	url: "/documentos/" },
			{ name: "Terminos",			url: "/terminos/" },
			{ name: "Herramientas",		url: "/herramientas" },
			{ name: "Servicios",		url: "/servicios" },
		],
	},
	{
		section: "Compañia",
		links: [
			{ name: "Nosotros",			url: "#" },
			{ name: "Profesionales",	url: "#" },
			{ name: "Opciones",			url: "#" },
			{ name: "Clientes",			url: "#" },
		],
	},
];
// An object of links for social icons
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