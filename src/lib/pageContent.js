export const pageLayout = {};

export const pageContent = [
	'home',
	'quote',
	'the background',
	'the concept',
	'the impact',
	'video render',
	'floorplans',
	'contact'
];
export const navButtons = [
	'home',
	'quote',
	'the background',
	'the concept',
	'the impact',
	'video render',
	'floorplans',
	'contact'
];
export const pageLength = pageContent.length;
export const textPages = [
	{
		header: 'The Background',
		paragraphs: [
			'The 2019 Woolsey Malibu fire wiped out many structures, one of which was a dome-like building (like an observatory). What was left was a secluded property with a breathtaking 360-degree view of the Pacific Ocean and the Malibu mountains.   Apel Design accepted the challenge of creating a piece of architecture that would have a minimal environment impact and yet evoke and complete the site conditions. The site dictated three major criteria, first that it was a fire-rebuilt home, second the challenges of accessibility to the site and finally, it must be an “off the grid” home.'
		],
		headerBrush: 'background/Background Brush PNG.png',
		pgBrush: 'background/bg-content.png'
	},
	{
		header: 'The Concept',
		paragraphs: [
			'Conceptually, Apel Design wanted to create the notion that the architecture of building continues beyond. In a sense, the forms flow throughout and never stop. The architecture forms emerge from the ground, extends to the horizon and divides into two beautiful irregular volumetric elements as if the architecture was slicing the space, emphasizing the gorgeous views of the Malibu mountains and the Pacific Ocean. The bird-like building program also incorporates the ideas of flow and continuation; the first level proposes an open floor plan with a glass facade that opens up the space to a beautiful deck and a second floor for bedrooms that are elevated from the ground to again emphasize this notion of flow and lightness.'
		],
		headerBrush: '/concept/concept-title-brush.png',
		pgBrush: '/concept/concept-text-brush.png'
	},
	{
		header: 'The Impact',
		paragraphs: [
			'Apel Design designed this project to have minimal environmental impact, this off-grid house will fully be powered by solar and biodiesel. The project will implement the latest technology to power the house. All the materials use will be LEED compliant to assure rigorous and environmentally friendly materials.'
		],
		headerBrush: '/impact/impact-title-brush.png',
		pgBrush: '/impact/impact-pg-brush.png'
	},
	{
		header: 'Video Render',
		paragraphs: [
			'Take a dive into The Aviator with our 3D rendering. To get a feeling of the completed project and vision, please click on the video to the right.'
		],
		headerBrush: '/video render/video-render-title-brush.png',
		pgBrush: '/video render/video-render-text-brush.png'
	},

	{
		header: 'Floorplans',
		paragraphs: [
			"Look through some of aviator's highly detailed floorplans to get a full layout of the design."
		],
		headerBrush: '/floorplans/floorplans-title-brush.png',
		pgBrush: '/floorplans/floorplans-text-brush.png'
	}
];
export const creditsContent = [
	{
		header: 'stout design build (landscape architect)',
		paragraphs: [
			'https://www.stoutdesignbuild.com/ Tom@stoutdesignbuild.com ',
			'License # B, C-27, C-53 980007',
			'Office 310.876.1018',
			'12405 Venice Blvd. #352 ',
			'LA CA 90066'
		]
	},
	{
		header: 'SCOTT JAMES OF DOUGLAS ELLIMAN (REAL ESTATE)',
		paragraphs: [
			'scottjamesluxuryestates.com / Scott.James@elliman.com',
			'DRE 01911554',
			'Direct: 626.327.1836',
			'Office: 626.204.5252',
			'Mobile: 626.327.1836',
			'70 S Lake Ave, Suite 1020',
			'Pasadena, CA 91101'
		]
	},
	{
		header: 'SHANE - TIERRA SITE WORKS INC (CONCRETE FOUNDATION)',
		paragraphs: [
			'tierrasiteworks@gmail.com',
			'Cell: (818) 921-5150',
			'Office: (818) 616-4204',
			'7263 Woodley Ave, Van Nuys, CA 91406'
		]
	},
	{
		header: 'ELAD - POWER BY SPARK, INC (ELECTRICIAN)',
		paragraphs: [
			'invoice@powerbyspark.com',
			'Phone: 818-277-0994',
			'19528 Ventura Blvd Suite 386',
			'Tarzana, CA 91356'
		]
	},
	{
		header: 'ALEX/RUBEN - PRONTO PLUMBING (PLUMBER)',
		paragraphs: ['alexsimental@gmail.com', 'Phone: 805-249-0050']
	},
	{
		header: 'BENITO - SANCHEZ IRON WORKS INC (STRUCTURAL STEEL)',
		paragraphs: ['sanchezwelding@yahoo.com', 'Phone: (310) 630-4835']
	}
];
export const navToLink = navButtons.map((item) => {
	return item.replace(/\s/g, '-');
});
export const highResBts = [];
