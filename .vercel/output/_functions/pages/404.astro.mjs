import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C_RyepSS.mjs';
import { $ as $$Layout } from '../chunks/Layout_2-Y9T64q.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative pt-24! w-full min-h-screen bg-[url('/images/hero.webp')] bg-cover bg-center mask-fade-bottom text-dark-magenta font-2xl gap-3 flex flex-col items-center text-center"> <h1>404 - No fue posible obtener una respuesta del servidor</h1> <h3 class="text-3xl  my-1">Page not found</h3> <img class="w-[400px] h-auto mask-fade-bottom" src="/40Oj.gif" alt="John Travolta"> <img class="w-[50px] absolute top-10 right-20" src="/bailando.gif" alt=""> </div> ` })}`;
}, "C:/Users/axl_7/Escritorio/developer/la-desvelada-vercel/src/pages/404.astro", void 0);

const $$file = "C:/Users/axl_7/Escritorio/developer/la-desvelada-vercel/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
