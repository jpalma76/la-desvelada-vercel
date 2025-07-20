import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent, f as renderScript, g as renderTransition } from '../chunks/astro/server_0kCClvUH.mjs';
import { F as FIGHTERS } from '../chunks/fighters_cYpoW6kL.mjs';
/* empty css                                 */
import { $ as $$Layout } from '../chunks/Layout_58kTTUdt.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://la-desvelada-vercel.vercel.app/");
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { class: className, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2${addAttribute([`text-dark-magenta w-full mb-4 flex justify-center items-center`, className], "class:list")}> <div class="block sm:inline"> <strong class="lowercase italic text-center max-sm:text-xl md:text-2xl text-3xl font-semibold text-balance">${title}</strong> </div> </h2>`;
}, "C:/Users/axl_7/Escritorio/developer/la-desvelada-vercel/src/components/SectionTitle.astro", void 0);

const $$Countdown = createComponent(($$result, $$props, $$slots) => {
  const TIMESTAMP_END = 176126442e4;
  return renderTemplate`${maybeRenderHead()}<section class="my-32 flex flex-col gap-y-10 justify-center items-center"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "title": "Cuenta regresiva para el Evento" })} <div class="w-mfull gap-x-2 flex flex-row"${addAttribute(TIMESTAMP_END, "data-date")}> <div class="boxer-date"> <span class="text-5xl font-normal text-center" data-days></span> <span class="text-[8px] text-center">Días</span> </div> <div class="boxer-date"> <span class="text-5xl font-normal text-center" data-hours></span> <span class="text-[8px] text-center">Horas</span> </div> <div class="boxer-date"> <span class="text-5xl font-normal text-center" data-minutes></span> <span class="text-[8px] text-center">Minutos</span> </div> <div class="boxer-date"> <span class="text-5xl font-normal text-center" data-seconds></span> <span class="text-[8px] text-center">Segundos</span> </div> </div> <span aria-hidden="true" class="mt-1 text-xl italic">...para mi cumpleaños 🥳🥳🥳</span> </section> ${renderScript($$result, "C:/Users/axl_7/Escritorio/developer/la-desvelada-vercel/src/components/Countdown.astro?astro&type=script&index=0&lang.ts")} <style>
  .boxer-date {
    background-color: var(--color-theme-dark-date);
    color: var(--color-theme-seashell);
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
    width: 5rem;
    height: 4.5rem;
    transform: skew(-0.03turn);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
</style>`;
}, "C:/Users/axl_7/Escritorio/developer/la-desvelada-vercel/src/components/Countdown.astro", void 0);

const $$Astro = createAstro("https://la-desvelada-vercel.vercel.app/");
const $$BoxerCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BoxerCard;
  const { id, name } = Astro2.props;
  return renderTemplate`<!-- contenedor de la card -->${maybeRenderHead()}<a class="boxer-card h-auto w-9 sm:w-9 md:w-14 lg:w-24 transition-all hover:-translate-y-3 relative rounded-md overflow-hidden"${addAttribute(`/luchador/${id}`, "href")}${addAttribute(id, "data-id")}${addAttribute(`Tarjeta del boxeador ${name}`, "title")}> <!-- imagen del boxeador --> <img${addAttribute(`Imagen de ${name}`, "aria-label")} class="w-full h-full object-cover"${addAttribute(`/images/fighters/cards/${id}.webp`, "src")} fetch-priority="high"${addAttribute(`Tarjeta del boxeador ${name}`, "alt")}> <div class="absolute z-10 inset-0 flex flex-col items-center justify-end bg-linear-to-top from-pink-950/90 via-transparent hover:to-transparent p-1 opacity-0 hover:opacity-100 transition-opacity duration-300"> <h3 class="text-theme-tickle-me-pink text-xs">${name}</h3> </div> </a> ${renderScript($$result, "C:/Users/axl_7/Escritorio/developer/la-desvelada-vercel/src/components/BoxerCard.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/axl_7/Escritorio/developer/la-desvelada-vercel/src/components/BoxerCard.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const firstRowLeft = FIGHTERS.slice(0, 3);
  const firstRowRight = FIGHTERS.slice(3, 6);
  const SecondRowLeft = FIGHTERS.slice(6, 10);
  const SecondRowRight = FIGHTERS.slice(10);
  return renderTemplate`${maybeRenderHead()}<section class="relative flex min-h-screen justify-center w-full" id="hero"> <div class="bg-[url('/images/hero.avif')] fetchpriority-hight bg-cover bg-center w-full mask-fade-bottom absolute inset-0"></div> <div class="absolute mt-24 z-10 w-full transparent flex justify-center items-center top-12"> <p class="font-bold text-white/50 italic">
Esta es una copia no oficial de la Página de la Velada V hecha a modo de
      practica.
</p> </div> <div class="relative flex flex-col items-center justify-end p-y-8 w-full"> <div id="landing" class="absolute inset-0 flex flex-col items-center justify-center w-full text-center"> <h3 class="font-light text-xl text-dark-magenta py-2 leading-[100%]"> <strong>26</strong> DE<br><strong>JULIO</strong> </h3> <div class="relative flex animate-fade-in"> <img aria-label="Logo de La Velada del Año V" class="w-64 h-64 object-cover z-10" src="/images/logo.avif" alt="La Velada del año V" fetchpriority="high"> </div> <h3 class="font-light text-theme-seashell leading-5 mt-2 animate-fade-in animate-delay-200">
ESTADIO<br>LA CARTUJA<br><strong>SEVILLA</strong> </h3> <div class="font-light text-theme-raisin-black leading-5 my-3! animate-fade-in animate-delay-300"> <a href="https://twitch.tv/ibai" rel="noopener noreferrer" target="_blank" class="inline transition hover:scale-125" title="Twitch de Ibai Llanos">
TWITCH.TV<br><strong>IBAI</strong> </a> <span class="sr-only">Icono de la velada V</span> </div> </div> <div id="fighter-container" class="w-full pointer-events-none absolute inset-0 flex flex-col justify-center items-center mb-10!"> <div class="relative top-20 mx-auto h-20 flex w-[80%] md:w-full items-center justify-center z-20"> <!-- Nombre del Boxeador --> ${FIGHTERS.map(({ id, name }) => renderTemplate`<img fetchpriority="high"${addAttribute(`Nombre de ${name}`, "aria-label")}${addAttribute(`hero-text-${id}`, "data-id")}${addAttribute(`/images/fighters/text/${id}.webp`, "src")}${addAttribute("Nombre de " + name, "alt")} class="h-full max-w-[380px] w-auto absolute hidden">`)} </div> <div class="mask-fade-bottom relative mx-auto h-[70vh] flex w-[70%] items-center justify-center z-20"> <!-- Imagen del Boxeador --> ${FIGHTERS.map(({ id, name }) => renderTemplate`<img${addAttribute(`Nombre de ${name}`, "aria-label")}${addAttribute(`hero-image-${id}`, "data-id")}${addAttribute(`/images/fighters/big/${id}.webp`, "src")}${addAttribute("Imagen de " + name, "alt")} fetchpriority="high" class="w-[350px] h-[90%] absolute hidden items-center"${addAttribute(renderTransition($$result, "3cyxqgac", "", `image-${id}`), "data-astro-transition-scope")}>`)} </div> </div> <div class="relative !bottom-10 flex flex-wrap justify-around w-full max-w-[1100px] gap-y-6 gap-x-24 mb-6 z-30"> <!-- FISRT ROW --> <!-- LEFT --> <div class="flex flex-wrap gap-x-2 md:gap-x-3 m-x-auto transform skew-2"> ${firstRowLeft.map(({ id, name }) => renderTemplate`${renderComponent($$result, "BoxerCard", $$BoxerCard, { "id": id, "name": name })}`)} </div> <!-- RIGHT --> <div class="flex flex-wrap gap-x-2 md:gap-x-3 m-x-auto transform -skew-2"> ${firstRowRight.map(({ id, name }) => renderTemplate`${renderComponent($$result, "BoxerCard", $$BoxerCard, { "id": id, "name": name })}`)} </div> <!-- SECOND ROW --> <div class="flex flex-wrap justify-around w-[1000px] mb-4 z-10"> <div class="flex flex-wrap gap-x-2 md:gap-x-4 m-x-auto transform skew-2"> ${SecondRowLeft.map(({ id, name }) => renderTemplate`${renderComponent($$result, "BoxerCard", $$BoxerCard, { "id": id, "name": name })}`)} </div> <div class="flex flex-wrap gap-x-2 md:gap-x-3 m-x-auto transform -skew-2"> ${SecondRowRight.map(({ id, name }) => renderTemplate`${renderComponent($$result, "BoxerCard", $$BoxerCard, { "id": id, "name": name })}`)} </div> </div> </div> </div> </section> <!-- SCRIPT FOR VISIBILITY OF FIGHTERS --> ${renderScript($$result, "C:/Users/axl_7/Escritorio/developer/la-desvelada-vercel/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
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
