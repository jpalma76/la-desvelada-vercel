import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_kMhVoNja.mjs';
import { manifest } from './manifest_CwcrRNOk.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/combate/_id_.astro.mjs');
const _page3 = () => import('./pages/la-porra.astro.mjs');
const _page4 = () => import('./pages/luchador/_id_.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.11.2_@types+node@24_272ba3a8b4cbf7a7b347955a38b17c9f/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/combate/[id].astro", _page2],
    ["src/pages/la-porra.astro", _page3],
    ["src/pages/luchador/[id].astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1fcb2e52-2903-4c7a-81dd-26224017f8c4",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
