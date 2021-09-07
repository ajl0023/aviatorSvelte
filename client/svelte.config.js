import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({
			// default options are shown
			pages: '../server/api/build',
			assets: '../server/api/build',
			fallback: null
		})
	},
	preprocess: sveltePreprocess({})
};
