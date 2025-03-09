<!--  // ─────────────────────────────────────────────────────────────── -->

# astro54 &middot; Astro.build [5.4.2*]

### **Tailwind - Typescript - Inter**

<!--  // ─────────────────────────────────────────────────────────────── -->
<!--  Install ───────────────────── -->

## Init

- Instalamos framework [ver 5.4.2*] con Pnpm

- Opciones de instalacion elegidas

  * Where should we create your new project?
    astro54

  * How would you like to start your new project?
    A basic, minimal starter

  * Install dependencies?
    yes

  * Initialize a new git repository?
    yes

````
pnpm create astro@latest
````
````
cd astro54

git init && git add . && git commit -m "Init"
````

<!--  // ─────────────────────────────────────────────────────────────── -->
<!--  React ─────────────────────── -->

## Md

- Incorporamos carpeta Ms (markdown) y actualizamos

````
git add . && git commit -m "Add (md #002)"
````

<!--  // ─────────────────────────────────────────────────────────────── -->
<!--  React ─────────────────────── -->

## React

- Requerimos dependencias de react

- Astro will run the following command:
  * continue ?  (yes/no) yes

- Astro will make the following changes to your config file:
  * continue ?  (yes/no) yes

- Astro will make the following changes to your tsconfig.json:
  * continue ?  (yes/no) yes

````
pnpm astro add react
*pnpm dlx astro add react
pnpm add @astrojs/react@^4.2.1 @types/react@^19.0.10 @types/react-dom@^19.0.4 react@^19.0.0 react-dom@^19.0.0
````

````
git add . && git commit -m "Require (react #003)"
````

<!--  // ─────────────────────────────────────────────────────────────── -->
<!--  Tailwind ────────────────── -->

## Tailwind

- Requerimos dependencias de tailwind

- Astro will scaffold ./src/styles/global.css.
  * continue ?  (yes/no) yes

- Astro will make the following changes to your config file:
  * continue ?  (yes/no) yes

- Vinculamos el site con tailwind 

- *Generamos archivo de configuracion de ser necesario tailwind.config.mjs

````
pnpm astro add tailwind
*pnpm dlx astro add tailwind
pnpm add @tailwindcss/vite@^4.0.7 tailwindcss@^4.0.7

*pnpm dlx tailwindcss init
````

````
git add . && git commit -m "Require (tailwind #004)"
````

<!--  // ─────────────────────────────────────────────────────────────── -->
<!--  Astro xtras ────────────────── -->

## Astro xtras

- Requerimos dependencias adicionales de astro

````
pnpm add @astrojs/mdx @astrojs/sitemap @astrojs/check @astrojs/mdx @astrojs/starlight @astrojs/starlight-tailwind

pnpm add astro-compressor astro-navbar astro-vtbot astro-seo
````

````
pnpm add @astrojs/mdx

pnpm add @astrojs/sitemap

pnpm add @astrojs/check

pnpm add @astrojs/mdx

pnpm add @astrojs/starlight

pnpm add @astrojs/starlight-tailwind

pnpm add astro-compressor

pnpm add astro-navbar

pnpm add astro-vtbot

pnpm add astro-seo
````

````
git add . && git commit -m "Require (astro xtras #005)"
````

<!--  // ─────────────────────────────────────────────────────────────── -->
<!--  Dependencias ──────────────── -->

## Dependencias

- Requerimos dependencias complementarias

````
pnpm add typescript @typescript-eslint/scope-manager

pnpm add eslint-plugin-astro eslint eslint-plugin-jsx-a11y prettier-plugin-astro prettier sharp sass --save-dev
````

````
pnpm add typescript

*pnpm add @typescript-eslint/parser
pnpm add @typescript-eslint/scope-manager

pnpm add eslint-plugin-astro eslint

pnpm add eslint-plugin-jsx-a11y

pnpm add prettier-plugin-astro prettier

pnpm add sharp sass
````

````
git add . && git commit -m "Require (extras #006)"
````

<!--  // ─────────────────────────────────────────────────────────────── -->
<!--  Fonts ───────────────────── -->

## Fonts

- Requerimos Fuentes

````
pnpm add @tailwindcss/forms @tailwindcss/typography @fontsource-variable/inter @fontsource-variable/urbanist @fontsource-variable/dm-sans @fontsource-variable/outfit --save-dev
````

````
pnpm add @tailwindcss/forms

pnpm add @tailwindcss/typography

pnpm add @fontsource-variable/inter

pnpm add @fontsource-variable/urbanist

pnpm add @fontsource-variable/dm-sans

pnpm add @fontsource-variable/outfit
````

````
git add . && git commit -m "Require (fonts #007)"
````

<!--  // ─────────────────────────────────────────────────────────────── -->
<!--  Personalizar ──────────────── -->

## Extras theme

- Requerimos paquetes adicionales usamos por el theme
- Separados por prioridad

````
pnpm add @preline/accordion @preline/collapse @preline/dropdown @preline/overlay @preline/tabs preline --save-dev

pnpm add prettier-plugin-tailwindcss html-minifier-terser clipboard globby gsap lenis rimraf sharp-ico --save-dev
````

````
pnpm add @preline/accordion
pnpm add @preline/collapse
pnpm add @preline/dropdown
pnpm add @preline/overlay
pnpm add @preline/tabs
pnpm add preline

pnpm add prettier-plugin-tailwindcss
pnpm add html-minifier-terser
pnpm add clipboard
pnpm add globby
pnpm add gsap
pnpm add lenis
pnpm add rimraf
pnpm add sharp-ico
````

````
git add . && git commit -m "Require (xtras theme #008)"
````

<!--  // ─────────────────────────────────────────────────────────────── -->
<!--  Personalizar ──────────────── -->

## Personalizar

- Editamos los archivos de configuracion de typescript (tsconfig.json)
- Editamos los archivos de configuracion de astro (astro.config.mjs)

````
git add . && git commit -m "Customized (tsconfig #009)"
````

<!--  // ─────────────────────────────────────────────────────────────── -->
<!--  Github ─────────────────── -->

## GitHub

- Vinculamos con github
- Push repositorio

  * Containers
  * Components/Footer
  * Components/Header

````
git remote add origin https://github.com/munlit/astro54.git

git add . && git commit -m "Remote (github)"
````

<!--  // ─────────────────────────────────────────────────────────────── -->
<!--  Funcional ─────────────────── -->

## Funcional

- Generamos extenciones de los archivos(.astro)
- Modificamos archivos
- Correjimos hasta tener una landing funcional

````
git add . && git commit -m "Update (functional)"
````

<!--  // ─────────────────────────────────────────────────────────────── -->
