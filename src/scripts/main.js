/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(h,j,e){var a="placeholder" in j.createElement("input");var f="placeholder" in j.createElement("textarea");var k=e.fn;var d=e.valHooks;var b=e.propHooks;var m;var l;if(a&&f){l=k.placeholder=function(){return this};l.input=l.textarea=true}else{l=k.placeholder=function(){var n=this;n.filter((a?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":c,"blur.placeholder":g}).data("placeholder-enabled",true).trigger("blur.placeholder");return n};l.input=a;l.textarea=f;m={get:function(o){var n=e(o);var p=n.data("placeholder-password");if(p){return p[0].value}return n.data("placeholder-enabled")&&n.hasClass("placeholder")?"":o.value},set:function(o,q){var n=e(o);var p=n.data("placeholder-password");if(p){return p[0].value=q}if(!n.data("placeholder-enabled")){return o.value=q}if(q==""){o.value=q;if(o!=j.activeElement){g.call(o)}}else{if(n.hasClass("placeholder")){c.call(o,true,q)||(o.value=q)}else{o.value=q}}return n}};if(!a){d.input=m;b.value=m}if(!f){d.textarea=m;b.value=m}e(function(){e(j).delegate("form","submit.placeholder",function(){var n=e(".placeholder",this).each(c);setTimeout(function(){n.each(g)},10)})});e(h).bind("beforeunload.placeholder",function(){e(".placeholder").each(function(){this.value=""})})}function i(o){var n={};var p=/^jQuery\d+$/;e.each(o.attributes,function(r,q){if(q.specified&&!p.test(q.name)){n[q.name]=q.value}});return n}function c(o,p){var n=this;var q=e(n);if(n.value==q.attr("placeholder")&&q.hasClass("placeholder")){if(q.data("placeholder-password")){q=q.hide().next().show().attr("id",q.removeAttr("id").data("placeholder-id"));if(o===true){return q[0].value=p}q.focus()}else{n.value="";q.removeClass("placeholder");n==j.activeElement&&n.select()}}}function g(){var r;var n=this;var q=e(n);var p=this.id;if(n.value==""){if(n.type=="password"){if(!q.data("placeholder-textinput")){try{r=q.clone().attr({type:"text"})}catch(o){r=e("<input>").attr(e.extend(i(this),{type:"text"}))}r.removeAttr("name").data({"placeholder-password":q,"placeholder-id":p}).bind("focus.placeholder",c);q.data({"placeholder-textinput":r,"placeholder-id":p}).before(r)}q=q.removeAttr("id").hide().prev().attr("id",p).show()}q.addClass("placeholder");q[0].value=q.attr("placeholder")}else{q.removeClass("placeholder")}}}(this,document,jQuery));

// easing plugin
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-cssclasses-teststyles-prefixes
 */
;window.Modernizr=function(a,b,c){function w(a){j.cssText=a}function x(a,b){return w(m.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var B in n)v(n,B)&&(s=B.toLowerCase(),e[s]=n[B](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),i=k=null,e._version=d,e._prefixes=m,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document);
Modernizr.addTest('android',function(){return!!navigator.userAgent.match(/Android/i)});
Modernizr.addTest('chrome',function(){return!!navigator.userAgent.match(/Chrome/i)});
Modernizr.addTest('firefox',function(){return!!navigator.userAgent.match(/Firefox/i)});
Modernizr.addTest('iemobile',function(){return!!navigator.userAgent.match(/IEMobile/i)});
Modernizr.addTest('ie',function(){return!!navigator.userAgent.match(/MSIE/i)});
Modernizr.addTest('ie10',function(){return!!navigator.userAgent.match(/MSIE 10/i)});
Modernizr.addTest('ie11',function(){return!!navigator.userAgent.match(/Trident.*rv:11\./)});
Modernizr.addTest('ios',function(){return!!navigator.userAgent.match(/iPhone|iPad|iPod/i)});
Modernizr.addTest('ios7 ipad',function(){return!!navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i)});


/////// start Memaar mmodule here...
var Memaar = (function($, window){

	// cache variables
	var $win = $(window), $doc = $(document), $body = $(document.body);
	var $aside = $('#aside');
	var $mainContent = $('#mainContent');

	// calls
	changeSliderMobleBG();

	//// common functions
	function isRTL() {

		return $('html').attr('dir') === 'rtl';
	}
	function changeSliderMobleBG() {
		if ($('[data-background]').length > 0) {
			$('[data-background]').each(function() {
			  var $background, $backgroundmobile, $this;
			  $this = $(this);
			  $background = $(this).attr('data-background');
			  $backgroundmobile = $(this).attr('data-background-mobile');
			  if ($this.attr('data-background').substr(0, 1) === '#') {
			    return $this.css('background-color', $background);
			  } else if ($this.attr('data-background-mobile') && device.mobile()) {
			    return $this.css('background-image', 'url(' + $backgroundmobile + ')');
			  } else {
			    return $this.css('background-image', 'url(' + $background + ')');
			  }
			});
		}
	}
	function applySlickPlugin(ele, opts) {
		var defaults = $.extend(opts, {rtl: isRTL()});
		$(ele).slick(defaults);
	}

	// change default scroll
	$('.scrollable').scrollbar();

	// home main slider
	applySlickPlugin('[data-slider="slick"]');

	// carousel slider with 3 item only display
	applySlickPlugin('.carousel-three-items', {
		slidesToShow:3, slidesToScroll:1,
		responsive: [
			{ breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
			{ breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }
		]
	});

	// placeholder
	$('input[placeholder], textarea[placeholder]').placeholder();

	// tooltip
	$("[data-toggle=tooltip]").tooltip();

	// popover
	$("[data-toggle=popover]").popover();
	$doc.on('click', '.popover-title .close', function(e){
		var $target = $(e.target), $popover = $target.closest('.popover').prev();
		$popover && $popover.popover('hide');
	});

	// wow ... to animate into view
	new WOW().init();

	// ajax modal
	$doc.on('click', '[data-toggle="ajaxModal"]', function(e){
		e && e.preventDefault();
		var $this = $(this)
		, $remote = $this.data('remote') || $this.attr('href')
		, $modal = $('<div class="modal" tabindex="-1" role="dialog" id="ajaxModal"></div>');
		$body.append($modal);
		$modal.append('<div class="spinner center white"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>')
		.modal('show')
		.on('hide.bs.modal', function(event){ $('#ajaxModal').remove(); });

		$modal.load($remote, function(responseTxt, statusTxt, xhr){
			if(statusTxt == "error") $('#ajaxModal').remove();
		});
	});


	/// custom fileinput upload style
	$('.inputfile').each(function(i, item){
		var $item = $(item)
			, $label = $item.next('label')
			, labelVal = $label.html();

		$item.on('change', function(evt){
			var fileName = '';

			fileName = this.files && this.files.length > 1 ?
				( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length )
				: evt.target.value.split( '\\' ).pop();

			if( fileName ){
				$label.find( 'span' ).html(fileName);
			}else{
				$label.html(labelVal);
			}
		})
	});


	// Add minus icon for collapse element which is open by default
	$(".collapse.in").each(function(){
		$(this).siblings(".panel-heading").find(".fa").addClass("fa-minus-square").removeClass("glyphicon-plus");
	});
        
	// Toggle plus minus icon on show hide of collapse element
	$(".collapse").on('show.bs.collapse', function(){
		$(this).parent().find(".fa").removeClass("fa-plus-square").addClass("fa-minus-square");
	}).on('hide.bs.collapse', function(){
		$(this).parent().find(".fa").removeClass("fa-minus-square").addClass("fa-plus-square");
	});


	// dropdown menu
	$.fn.dropdown.Constructor.prototype.change = function(e){
		e.preventDefault();
		var $item = $(e.target), $select, $checked = false, $menu, $label;
		!$item.is('a') && ($item = $item.closest('a'));
		$menu = $item.closest('.dropdown-menu');
		$label = $menu.parent().find('.dropdown-label');
		$labelHolder = $label.text();
		$select = $item.find('input');
		$checked = $select.is(':checked');
		if($select.is(':disabled')) return;
		if($select.attr('type') == 'radio' && $checked) return;
		if($select.attr('type') == 'radio') $menu.find('li').removeClass('active');
		$item.parent().removeClass('active');
		!$checked && $item.parent().addClass('active');
		$select.prop("checked", !$select.prop("checked"));

		$items = $menu.find('li > a > input:checked');
		if ($items.length) {
			$text = [];
			$items.each(function () {
			var $str = $(this).parent().text();
			$str && $text.push($.trim($str));
			});

			$text = $text.length < 4 ? $text.join(', ') : $text.length + ' selected';
			$label.html($text);
		}else{
			$label.html($label.data('placeholder'));
		}      
	}
	$doc.on('click.dropdown-menu', '.dropdown-select > li > a', $.fn.dropdown.Constructor.prototype.change);

	// toggle class content
	$doc.on('click', '[data-toggle^="class"]', function(e){
		e && e.preventDefault();
		var $this = $(e.target), $class , $target, $tmp, $classes, $targets;
		!$this.data('toggle') && ($this = $this.closest('[data-toggle^="class"]'));
		$class = $this.data()['toggle'];
		$target = $this.data('target') || $this.attr('href');
		$class && ($tmp = $class.split(':')[1]) && ($classes = $tmp.split(','));
		$target && ($targets = $target.split(','));
		$targets && $targets.length && $.each($targets, function( index, value ) {
			($targets[index] !='#') && $($targets[index]).toggleClass($classes[index]);
		});
		$this.toggleClass('active');
	});

	// toggle drawer menu on mobile display
	$doc.on('click', '.nav-icon', function(e){
		e && e.preventDefault();
		$(this).toggleClass('open');
		var isOpened = $body.hasClass('aside-opened');

		return !isOpened ?
			$body.addClass('aside-opened').append('<div class="aside-drop"></div>'):
			$body.removeClass('aside-opened').find('.aside-drop').remove();
	});

	// close drawer menu on mobile when click on damed overlay
	$doc.on('click', '.aside-drop', function(e){
		e && e.preventDefault();
		$('.nav-icon').removeClass('open');
		$body.removeClass('aside-opened').find('.aside-drop').remove();
	});

}(jQuery, window));


