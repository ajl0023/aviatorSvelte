import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths, assets } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

<<<<<<< HEAD
const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/logo.inline.svg\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";
=======
const template = ({ head, body }) => "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<link rel=\"icon\" href=\"/logo.inline.svg\" />\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n\t\t" + head + "\r\n\t</head>\r\n\t<body>\r\n\t\t<div id=\"svelte\">" + body + "</div>\r\n\t</body>\r\n</html>\r\n";
>>>>>>> bf4bdecb92398b2e1375113f515ab94f4bdee812

let options = null;

const default_settings = { paths: {"base":"","assets":""} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	const hooks = get_hooks(user_hooks);

	options = {
		amp: false,
		dev: false,
		entry: {
<<<<<<< HEAD
			file: assets + "/_app/start-d099ea12.js",
			css: [assets + "/_app/assets/start-61d1577b.css"],
			js: [assets + "/_app/start-d099ea12.js",assets + "/_app/chunks/vendor-9b70e41c.js"]
=======
			file: assets + "/_app/start-4cc6516e.js",
			css: [assets + "/_app/assets/start-61d1577b.css"],
			js: [assets + "/_app/start-4cc6516e.js",assets + "/_app/chunks/vendor-9b70e41c.js"]
>>>>>>> bf4bdecb92398b2e1375113f515ab94f4bdee812
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => assets + "/_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: (error, request) => {
			hooks.handleError({ error, request });
			error.stack = options.get_stack(error);
		},
		hooks,
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		prerender: true,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
<<<<<<< HEAD
	assets: [{"file":"_headers.txt","size":32,"type":"text/plain"},{"file":"logo.inline.svg","size":37724,"type":"image/svg+xml"}],
=======
	assets: [{"file":"logo.inline.svg","size":37735,"type":"image/svg+xml"},{"file":"_headers.txt","size":35,"type":"text/plain"}],
>>>>>>> bf4bdecb92398b2e1375113f515ab94f4bdee812
	layout: ".svelte-kit/build/components/layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: [".svelte-kit/build/components/layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

const module_lookup = {
<<<<<<< HEAD
	".svelte-kit/build/components/layout.svelte": () => import("./components/layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte")
};

const metadata_lookup = {".svelte-kit/build/components/layout.svelte":{"entry":"layout.svelte-c096017f.js","css":[],"js":["layout.svelte-c096017f.js","chunks/vendor-9b70e41c.js"],"styles":[]},".svelte-kit/build/components/error.svelte":{"entry":"error.svelte-527e4908.js","css":[],"js":["error.svelte-527e4908.js","chunks/vendor-9b70e41c.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-57cfb59a.js","css":["assets/pages/index.svelte-4314b938.css"],"js":["pages/index.svelte-57cfb59a.js","chunks/vendor-9b70e41c.js"],"styles":[]}};
=======
	".svelte-kit/build/components/layout.svelte": () => import("./components\\layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components\\error.svelte"),"src/routes/index.svelte": () => import("..\\..\\src\\routes\\index.svelte")
};

const metadata_lookup = {".svelte-kit/build/components/layout.svelte":{"entry":"layout.svelte-568fd069.js","css":[],"js":["layout.svelte-568fd069.js","chunks/vendor-9b70e41c.js"],"styles":[]},".svelte-kit/build/components/error.svelte":{"entry":"error.svelte-6bc0041d.js","css":[],"js":["error.svelte-6bc0041d.js","chunks/vendor-9b70e41c.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-d3171d28.js","css":["assets/pages/index.svelte-e993cab7.css"],"js":["pages/index.svelte-d3171d28.js","chunks/vendor-9b70e41c.js"],"styles":[]}};
>>>>>>> bf4bdecb92398b2e1375113f515ab94f4bdee812

async function load_component(file) {
	const { entry, css, js, styles } = metadata_lookup[file];
	return {
		module: await module_lookup[file](),
		entry: assets + "/_app/" + entry,
		css: css.map(dep => assets + "/_app/" + dep),
		js: js.map(dep => assets + "/_app/" + dep),
		styles
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}