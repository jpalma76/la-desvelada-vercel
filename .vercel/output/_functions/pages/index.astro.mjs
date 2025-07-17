import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent, g as renderScript, e as renderTransition } from '../chunks/astro/server_C_RyepSS.mjs';
import { F as FIGHTERS } from '../chunks/fighters_cYpoW6kL.mjs';
/* empty css                                 */
import { $ as $$Layout } from '../chunks/Layout_BSG4dqy5.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { class: className, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2${addAttribute([`text-dark-magenta w-full mb-4 flex justify-center items-center`, className], "class:list")}> <div class="block sm:inline"> <strong class="lowercase italic text-center max-sm:text-xl md:text-2xl text-3xl font-semibold text-balance">${title}</strong> </div> </h2>`;
}, "C:/Users/axl_7/Escritorio/developer/la-desvelada-vercel/src/components/SectionTitle.astro", void 0);

const $$Countdown = createComponent(($$result, $$props, $$slots) => {
  const TIMESTAMP_END = 176126442e4;
  return renderTemplate`${maybeRenderHead()}<section class="w-full h-auto py-48! flex flex-col gap-y-10 justify-center items-center"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "title": "Cuenta atr\xE1s para el evento..." })} <div class="flex flex-row max-sm:mx-0 mx-auto gap-x-2 text-primary uppercase font-semibold"${addAttribute(TIMESTAMP_END, "data-date")}> <div class="flex flex-col justify-center text-center items-center gap-y-2 max-sm:w-[60px] md:28 lg:w-[120px]"> <span class="text-2xl md:text-3xl lg:text-4xl tabular-nums text-center" data-days></span> <span class="max-sm:text-[8px] max-md:text-sm text-center">Días</span> </div> <span aria-hidden="true" class="h-full flex items-center text-xl">:</span> <div class="flex flex-col justify-center text-center items-center gap-y-2 max-sm:w-[60px] md:28 lg:w-[120px]"> <span class="text-2xl md:text-3xl lg:text-4xl tabular-nums text-center" data-hours></span> <span class="max-sm:text-[8px] max-md:text-sm text-center">Horas</span> </div> <span aria-hidden="true" class="mt-1 text-xl">:</span> <div class="flex flex-col justify-center items-center text-center gap-y-2 max-sm:w-[60px] md:28 lg:w-[120px]"> <span class="text-2xl md:text-3xl lg:text-4xl tabular-nums text-center" data-minutes></span> <span class="max-sm:text-[8px] max-md:text-sm text-center">Minutos</span> </div> <span aria-hidden="true" class="mt-1 text-xl">:</span> <div class="flex flex-col justify-center items-center text-center gap-y-2 max-sm:w-[60px] md:28 lg:w-[120px]"> <span class="text-2xl md:text-3xl lg:text-4xl tabular-nums text-center" data-seconds></span> <span class="max-sm:text-[8px] max-md:text-sm text-center">Segundos</span> </div> </div> <span aria-hidden="true" class="mt-1 text-xl italic">...para mi cumpleaños 🥳🥳🥳</span> </section> ${renderScript($$result, "C:/Users/axl_7/Escritorio/developer/la-desvelada-vercel/src/components/Countdown.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/axl_7/Escritorio/developer/la-desvelada-vercel/src/components/Countdown.astro", void 0);

const $$Astro = createAstro();
const $$BoxerCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BoxerCard;
  const { id, name } = Astro2.props;
  return renderTemplate`<!-- contenedor de la card -->${maybeRenderHead()}<a class="boxer-card h-auto w-9 sm:w-9 md:w-14 lg:w-24 inline-block transition-all hover:-translate-y-3 relative rounded-md overflow-hidden"${addAttribute(`/luchador/${id}`, "href")}${addAttribute(id, "data-id")}> <!-- imagen del boxeador --> <img class="w-full h-auto object-cover"${addAttribute(`/images/fighters/cards/${id}.webp`, "src")}${addAttribute(`Tarjeta del boxeador ${name}`, "alt")}> <div class="absolute z-10 inset-0 flex flex-col items-center justify-end bg-linear-to-t from-pink-950/90 via-transparent hover:to-transparent p-1 opacity-0 hover:opacity-100 transition-opacity duration-300"> <h3 class="text-theme-tickle-me-pink text-xs">${name}</h3> </div> </a> ${renderScript($$result, "C:/Users/axl_7/Escritorio/developer/la-desvelada-vercel/src/components/BoxerCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/axl_7/Escritorio/developer/la-desvelada-vercel/src/components/BoxerCard.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const firstRowLeft = FIGHTERS.slice(0, 3);
  const firstRowRight = FIGHTERS.slice(3, 6);
  const SecondRowLeft = FIGHTERS.slice(6, 10);
  const SecondRowRight = FIGHTERS.slice(10);
  return renderTemplate`${maybeRenderHead()}<section class="relative flex min-h-screen justify-center w-full px-" id="hero"> <div class="absolute mt-24 z-10 w-full h-44 transparent flex justify-center items-center"> <p class="font-bold text-white/50 italic">
Esta es una copia no oficial de la Página de la Velada V hecha a modo de
      practica.
</p> </div> <div class="bg-[url('/images/hero.webp')] bg-cover bg-center w-full mask-fade-bottom absolute inset-0"></div> <div class="relative flex flex-col items-center justify-end p-y-8 w-full"> <div id="landing" class="absolute inset-0 flex flex-col items-center justify-center w-full text-center"> <h3 class="font-light text-xl text-dark-magenta py-2 leading-[100%] animate-fade-in animate-delay-300"> <strong>26</strong> DE<br><strong>JULIO</strong> </h3> <figure class="relative flex my-5 animate-fade-in"> <img class="w-64 h-auto z-10" src="/images/logo.webp" alt="La Velada del año V"> <div class="absolute bg-pink-400/70 blur-2xl z-0 size-64 top-0"></div> </figure> <h3 class="font-light text-theme-seashell leading-5 mt-2 animate-fade-in animate-delay-500">
ESTADIO<br>LA CARTUJA<br><strong>SEVILLA</strong> </h3> <h3 class="font-light text-theme-raisin-black leading-5 my-5 animate-fade-in animate-delay-700"> <a href="https://twitch.tv/ibai" rel="noopener noreferrer" target="_blank" class="inline-grid transition hover:scale-125">
TWITCH.TV<br><strong>IBAI</strong> </a> </h3> </div> <div id="fighter-container" class="w-full pointer-events-none absolute inset-0 flex flex-col items-center mb-10!"> <div class="relative top-0 mx-auto h-20 flex w-[80%] md:w-full items-center justify-center z-20"> <!-- Nombre del Boxeador --> ${FIGHTERS.map(({ id, name }) => renderTemplate`<img${addAttribute(`hero-text-${id}`, "data-id")}${addAttribute(`/images/fighters/text/${id}.webp`, "src")}${addAttribute("Nombre de " + name, "alt")} class="h-full max-w-[380px] w-auto absolute hidden">`)} </div> <div class="mask-fade-bottom relative mx-auto h-[70vh] flex w-[70%] items-center justify-center z-20"> <!-- Imagen del Boxeador --> ${FIGHTERS.map(({ id, name }) => renderTemplate`<img${addAttribute(`hero-image-${id}`, "data-id")}${addAttribute(`/images/fighters/big/${id}.webp`, "src")}${addAttribute("Imagen de " + name, "alt")} class="w-auto h-[90%] absolute hidden"${addAttribute(renderTransition($$result, "3cyxqgac", "", `image-${id}`), "data-astro-transition-scope")}>`)} </div> </div> <div class="relative bottom-10! flex flex-wrap justify-around w-full max-w-[1100px] gap-y-6 gap-x-24 mb-6 z-30"> <!-- FISRT ROW --> <!-- LEFT --> <div class="flex flex-wrap gap-x-2 md:gap-x-3 m-x-auto transform skew-2"> ${firstRowLeft.map(({ id, name }) => renderTemplate`${renderComponent($$result, "BoxerCard", $$BoxerCard, { "id": id, "name": name })}`)} </div> <!-- RIGHT --> <div class="flex flex-wrap gap-x-2 md:gap-x-3 m-x-auto transform -skew-2"> ${firstRowRight.map(({ id, name }) => renderTemplate`${renderComponent($$result, "BoxerCard", $$BoxerCard, { "id": id, "name": name })}`)} </div> <!-- SECOND ROW --> <div class="flex flex-wrap justify-around w-[1000px] mb-4 z-10"> <div class="flex flex-wrap gap-x-2 md:gap-x-4 m-x-auto transform skew-2"> ${SecondRowLeft.map(({ id, name }) => renderTemplate`${renderComponent($$result, "BoxerCard", $$BoxerCard, { "id": id, "name": name })}`)} </div> <div class="flex flex-wrap gap-x-2 md:gap-x-3 m-x-auto transform -skew-2"> ${SecondRowRight.map(({ id, name }) => renderTemplate`${renderComponent($$result, "BoxerCard", $$BoxerCard, { "id": id, "name": name })}`)} </div> </div> </div> </div> </section> <!-- SCRIPT FOR VISIBILITY OF FIGHTERS --> ${renderScript($$result, "C:/Users/axl_7/Escritorio/developer/la-desvelada-vercel/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/axl_7/Escritorio/developer/la-desvelada-vercel/src/components/Hero.astro", "self");

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Countdown", $$Countdown, {})} ` })}`;
}, "C:/Users/axl_7/Escritorio/developer/la-desvelada-vercel/src/pages/index.astro", void 0);

const $$file = "C:/Users/axl_7/Escritorio/developer/la-desvelada-vercel/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
