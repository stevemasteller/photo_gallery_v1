$('.gallery').magnificPopup({
	
	//main options
	delegate: 'a', // child items selector, by clicking on it popup will open
	type: 'image',
	showCloseBtn: false,
	
	// options for gallery
	gallery: {
		markup: '<div class="mfp-figure">'+
					'<div class="mfp-close"></div>'+
					'<div class="mfp-img"></div>'+
					'<div class="mfp-bottom-bar">'+
						'<div class="mfp-title"></div>'+
						'<div class="mfp-counter"></div>'+
					'</div>'+
				'</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag,

		enabled: true
	},
	
	// option for image
	image: {
		titleSrc: 'caption',
		verticalFit: true
	}
});