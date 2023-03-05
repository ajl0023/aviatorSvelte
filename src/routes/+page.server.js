// import pageData from '$lib/page-data.json';
// import { textPages } from '$lib/pageContent.js';
import pageData from '$lib/page-data.json';
import { textPages } from '$lib/pageContent.js';
import _ from 'lodash';

export async function load({ fetch }) {
	// const pageLayout = {};
	// const categories = (await (await fetch('http://localhost:8080/api/categories')).json()).reduce(
	// 	(acc, item) => {
	// 		acc[item._id] = item;
	// 		return acc;
	// 	},
	// 	{}
	// );

	// const imagePages = await fetch('http://localhost:8080/api/bg-pages');
	// const pageCarousels = await fetch('http://localhost:8080/api/page-carousels');
	// const mobile = await fetch('http://localhost:8080/api/mobile');
	// pageLayout['image-pages'] = await imagePages.json();
	// pageLayout['page-carousels'] = await pageCarousels.json();
	// pageLayout['mobile'] = await mobile.json();
	// pageLayout['mobile'] = pageLayout['mobile'].map((item) => {
	// 	item['type'] = categories[item.category].category;
	// 	return item;
	// });

	// function isObjectOrArray(item) {
	// 	return _.isPlainObject(item) || Array.isArray(item);
	// }
	// const arr2 = [];
	// let shouldExit = false;
	// function changeUrls(obj) {
	// 	if (Array.isArray(obj)) {
	// 		for (const item of obj) {
	// 			changeUrls(item);
	// 		}
	// 		return;
	// 	}
	// 	if (!isObjectOrArray(obj)) {
	// 		return;
	// 	} else {
	// 		if (obj.url) {
	// 			shouldExit = true;
	// 			arr2.push(obj);
	// 			return;
	// 		} else {
	// 			for (const key in obj) {
	// 				if (isObjectOrArray(obj[key])) {
	// 					if (Array.isArray(obj[key])) {
	// 						obj[key] = obj[key].sort((a, b) => {
	// 							return a.order - b.order;
	// 						});
	// 					}
	// 					if (shouldExit) {
	// 						continue;
	// 					} else {
	// 						changeUrls(obj[key]);
	// 						shouldExit = false;
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// 	return arr2;
	// }
	// function changeAllUrls(urls) {
	// 	urls.map((item) => {
	// 		return item;
	// 	});
	// }

	// changeAllUrls(changeUrls(pageLayout, false));

	// fs.writeFileSync('./page-data.json', JSON.stringify(pageLayout));
	// return {};

	// const arr2 = [];
	// let shouldExit = false;
	// function isObjectOrArray(item) {
	// 	return _.isPlainObject(item) || Array.isArray(item);
	// }
	// function findImageUrls(obj) {
	// 	if (Array.isArray(obj)) {
	// 		for (const item of obj) {
	// 			findImageUrls(item);
	// 		}
	// 		return;
	// 	}
	// 	if (!isObjectOrArray(obj)) {
	// 		return;
	// 	} else {
	// 		if (obj.url) {
	// 			shouldExit = true;
	// 			arr2.push(obj);
	// 			return;
	// 		} else {
	// 			for (const key in obj) {
	// 				if (isObjectOrArray(obj[key])) {
	// 					if (Array.isArray(obj[key])) {
	// 						obj[key] = obj[key].sort((a, b) => {
	// 							return a.order - b.order;
	// 						});
	// 					}
	// 					if (shouldExit) {
	// 						continue;
	// 					} else {
	// 						findImageUrls(obj[key]);
	// 						shouldExit = false;
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// 	return arr2;
	// }
	// findImageUrls(pageData);
	// if (!browser) {
	// 	fs.writeFileSync('./page-data.json', JSON.stringify(pageData));
	// }

	return {
		pagesData: pageData,
		data_loaded: true,
		pageContent: {
			textPages
		}
	};
}
