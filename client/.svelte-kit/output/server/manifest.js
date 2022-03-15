export const manifest = {
	appDir: "_app",
	assets: new Set(["Aviator Home Left.png","Aviator Home Right.png","background/Background Brush PNG.png","background/bg-content.png","By Apel Design Black.png","By Apel Design White.png","concept/concept-text-brush.png","concept/concept-title-brush.png","floorplans/floorplans-text-brush.png","floorplans/floorplans-title-brush.png","Home Left.jpg","Home Right.jpg","impact/impact-pg-brush.png","impact/impact-title-brush.png","logo.inline.svg","mobile/bg.jpg","mobile/mobile-logo.png","mobile/quotes.png","playButton.png","Quote Left.png","Quote Right.png","video render/video-render-text-brush.png","video render/video-render-title-brush.png","_headers.txt"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		entry: {"file":"start-d4bd72a5.js","js":["start-d4bd72a5.js","chunks/vendor-bb380479.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				key: "",
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		]
	}
};
