
function Masonry(wrapper){
	var items = wrapper.children;
		var columnNumber= 0;
		var vw=window.innerWidth;
		if (vw>= 1280){
			columnNumber= 4;
			setGridData (wrapper , "22.77% 22.77% 22.77% 22.77%")
		}else if((vw< 1280)&&(vw>=768)) {
			columnNumber= 3;
			setGridData (wrapper , "31.88% 31.88% 31.88%")
		}
		else if((vw< 768)&&(vw>=475)) {
			
			columnNumber= 2;
			setGridData (wrapper , "48.33% 48.33%")
		}
			else   {
			columnNumber= 1;
			setGridData (wrapper , "100%")
		}
	wrapper.style.gridTemplateRows="repeat("+Math.ceil(items.length/columnNumber)+", auto 40px auto 40px)";
			
	var i;
	var rowPair;
	var rowImpair;
	for(var j=0;j<items.length;j++){
	i= Math.trunc(j / columnNumber);
	if(i == 0){
	
	if(j % 2){
	items[j].style.gridRow = '1/3';
	}else{
	items[j].style.gridRow = '1/2';
	}
	}else{
			if(columnNumber % 2){
				if(j % 3 == 1 ){
						
	rowImpair = (2*i+1)+'/'+(2*i+3);
	items[j].style.gridRow = rowImpair;
	
	}else{
					
	rowPair = (2*i)+'/'+(2*i+2);
	items[j].style.gridRow = rowPair;
	}
			}
		else{
			if(j % 2){
	rowImpair = (2*i+1)+'/'+(2*i+3);
	items[j].style.gridRow = rowImpair;
	}else{
	rowPair = (2*i)+'/'+(2*i+2);
	items[j].style.gridRow = rowPair;
	}
		}
	
	}
	}
	}
		function MasonryAllResponsive(){
			var wrapper=document.querySelectorAll('.wrapper-grid');
		for(var k=0; k<wrapper.length;k++){
			Masonry(wrapper[k]);
		}	
		}
		jQuery( document ).ready(function() {
		MasonryAllResponsive();
	});
	function getGridData (grid) {
		// calc computed style
	  const gridComputedStyle = window.getComputedStyle(grid);
	  return gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length
	  
	}
	function setGridData (grid , val) {
		// calc computed style
	   grid.style.gridTemplateColumns = val;
	  
	}
	// window.addEventListener("DOMContentLoaded", outputGridData);
	var lastWindowWidth;
	window.addEventListener("resize", function(e){
		
		var $window = jQuery(this),
			   windowWidth = $window.width();
		if(((lastWindowWidth>= 1280)&&(windowWidth<1280))|| ((lastWindowWidth< 1280)&&(windowWidth>=1280))){
			console.log("lastWindowWidth> 1280)&&(windowWidth>768");
				MasonryAllResponsive();
		}
		else if(((lastWindowWidth> 768)&&(windowWidth<=768)||(lastWindowWidth< 768)&&(windowWidth<=768))){
					console.log("lastWindowWidth>= 1280)&&(windowWidth<1280");
	
				MasonryAllResponsive();
		}
		else if(((lastWindowWidth> 475)&&(windowWidth<=475)||(lastWindowWidth<=475)&&(windowWidth>475))){
				MasonryAllResponsive();
		}
		lastWindowWidth = windowWidth;
	});

const $grid = $('.grid').imagesLoaded(function() {
	// init Isotope after all images have loaded
	$grid.isotope({
		itemSelector: '.grid-item',
		percentPosition: true
	});
});
// filter functions
const filterFns = {
	// show if number is greater than 50
	numberGreaterThan50: function() {
		var number = $(this).find('.number').text();
		return parseInt(number, 10) > 50;
	},
	// show if name ends with -ium
	ium: function() {
		var name = $(this).find('.name').text();
		return name.match(/ium$/);
	}
};
// bind filter button click
$('.filter-button-group').on('click', 'button', function() {
	var filterValue = $(this).attr('data-filter');
	// use filterFn if matches value
	filterValue = filterFns[filterValue] || filterValue;
	$grid.isotope({
		filter: filterValue
	});
});
// change is-checked class on buttons
$('.button-group').each(function(i, buttonGroup) {
	var $buttonGroup = $(buttonGroup);
	$buttonGroup.on('click', 'button', function() {
		$buttonGroup.find('.is-checked').removeClass('is-checked');
		$(this).addClass('is-checked');
	});
});

lightbox.option({
	'resizeDuration': 200,
	'wrapAround': true
})