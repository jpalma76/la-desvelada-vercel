import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C_RyepSS.mjs';
import { $ as $$Layout } from '../chunks/Layout_Bj6UckRA.mjs';
export { renderers } from '../renderers.mjs';

const $$LaPorra = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-row w-full bg-[url('/images/hero.webp')] bg-cover bg-center mask-fade-bottom min-h-screen justify-center items-center"> <h1>La porra</h1> </div> ` })}`;
}, "C:/Users/axl_7/Escritorio/developer/la-desvelada-vercel/src/pages/la-porra.astro", void 0);

const $$file = "C:/Users/axl_7/Escritorio/developer/la-desvelada-vercel/src/pages/la-porra.astro";
const $$url = "/la-porra";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$LaPorra,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
