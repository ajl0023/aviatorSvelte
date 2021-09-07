import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({
			// default options are shown
			pages: '../server/build',
			assets: '../server/build',
			fallback: null
		})
	},
	preprocess: sveltePreprocess({})
};
