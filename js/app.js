
/************************************************/
/* Gallery lightbox setup                       */
/************************************************/
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
		titleSrc: 'title',
		verticalFit: true
	}
});

/************************************************/
/* Search                                       */
/************************************************/
var timeout;

// setup search plugin mixItUp
$('#searchable-container').mixItUp();

// listen for input on search input
$('#search').keyup(function(){
	
	// value to search by
	var searchString = $(this).val().toLowerCase();
	
	// wait to see if input done
	window.clearTimeout(timeout);
	timeout = window.setTimeout( function() {
		
		var $matching = $();
	
		$('.mix').each(function(){
			var $this = $(this);
			
			// Search captions and titles for matches to searchString
			if ($this.attr('title').toLowerCase().indexOf(searchString) > -1) {
				$matching = $matching.add(this);
			} else {
				// removes any previously matched item
				$matching = $matching.not(this);
			}

		});
		
		// This is where magic happens
		$('#searchable-container').mixItUp('filter', $matching);
		
	},250); // timeout delay in milli-seconds
});
