import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../../chunks/astro/server_C_RyepSS.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Cvudhqkw.mjs';
import { F as FIGHTERS } from '../../chunks/fighters_cYpoW6kL.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id, name } = Astro2.params;
  const fighter = FIGHTERS.find((fighter2) => fighter2.id === id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative flex flex-col w-full bg-[url('/images/hero.webp')] bg-cover bg-center mask-fade-bottom min-h-screen justify-center items-center" id="hero"> <div class="w-full h-auto flex flex-row gap-3 justify-between items-center px-auto"> <div class="w-full h-auto flex flex-col md:flex-row gap-4 justify-center items-center"> <!-- ASIDE DIV LATERAL IZQUIERDO --> <div class="w-[45%] h-[450px] flex flex-col items-center justify-center rounded-xl gap-y-3"> <!-- frase del boxeador --> <div class="w-[90%] h-24 flex items-center justify-center rounded-tr-2xl rounded-bl-2xl bg-[#c792aa]"> <p class="font-md mx-3">
Siempre gano; y si no, es porque no ha acabado.
</p> </div> <div class="w-[90%] h-24 flex items-center justify-center rounded-tr-2xl rounded-bl-2xl bg-[#c792aa]"> <p class="font-md mx-3">
Siempre gano; y si no, es porque no ha acabado.
</p> </div> <div class="w-[90%] h-24 flex items-center justify-center rounded-tr-2xl rounded-bl-2xl bg-[#c792aa]"> <p class="font-md mx-3">
Siempre gano; y si no, es porque no ha acabado.
</p> </div> </div> <!-- boxer container (luchador) --> <div class="relative w-[40%] min-w-[250px] h-[450px] flex flex-row justify-center items-center"> <!-- Luchador --> <img${addAttribute(`hero-image-${id}`, "data-id")}${addAttribute(`/images/fighters/big/${id}.webp`, "src")}${addAttribute(fighter?.name, "alt")} class="absolute w-auto h-[550px] mb-24 z-0 hover:scale-125 transition-[.6s]"${addAttribute(renderTransition($$result2, "y754yumq", "", `image-${id}`), "data-astro-transition-scope")}> <!-- Nombre --> <img${addAttribute(`hero-text-${id}`, "data-id")}${addAttribute(`/images/fighters/text/${id}.webp`, "src")}${addAttribute("Nombre de " + name, "alt")} class="relative h-auto w-full max-w-[350px] z-10"> </div> </div> <!-- contenedor de la descripción --> <div class="w-[45%]"> <div class="relative w-[65%] h-[270px] mx-auto mt-2! border-2 rounded-2xl overflow-hidden flex justify-end"> <img class="absolute w-32 top-0 h-auto object-cover opacity-100 z-50 bg-gray-500"${addAttribute(`/images/fighters/cards/${id}.webp`, "src")}${addAttribute(`Tarjeta del boxeador ${name}`, "alt")}> </div> </div> </div> </section> ` })}`;
}, "C:/Users/axl_7/Escritorio/developer/la-desvelada-vercel/src/pages/luchador/[id].astro", "self");

const $$file = "C:/Users/axl_7/Escritorio/developer/la-desvelada-vercel/src/pages/luchador/[id].astro";
const $$url = "/luchador/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
