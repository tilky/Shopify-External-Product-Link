function getShopDomain() {
	var a = document.getElementsByTagName('script');
	for (var i = 0; i < a.length; i++) {
	    if (a[i].src.indexOf('externalproductlinks') > -1 && a[i].src.indexOf('shop=') > -1) {
	        var b = a[i].src.substring(a[i].src.indexOf('shop=') + 5, a[i].src.length);
	        return b;
	    }
	}
	return document.domain;
}


    /*$(document).ready(function(){
        jQuery('body').append('<div class="overlay" style="position:absolute;left:0;top:0;height:100%;width:100%;z-index:99;background:rgba(0,0,0,0.6);"></div>');
    });*/


var appurl = 'https://www.thirstysoftware.com/externalproductlinks/';
var shop_name = getShopDomain();
$.getJSON(document.URL, function(data) {
	$.ajax({
		url: appurl+"getexternalproductslinks.php",
		type: "POST",
		data: {shop_name: shop_name, product_id: data.product.id},
		dataType: "json",
		success: function(response) {
		
		//console.log(response.result);
		
			if(response.result == "true") {
			//console.log(response.data);
			//console.log(response.data.status);
				if(response.data.status == 'on'){
				    // $('form #addToCart').hide();
					$("form").each(function(){
						if($(this).attr('action') == '/cart/add'){
						  $(this).append("<div style='width:100%;margin:10px 0;'><a href="+response.data.external_link+" target='_blank' class='btn btn--full externallink_product btn--fill btn--regular btn--color sss'>"+response.data.buttom_text+"</a></div>");
						  //$('form #addToCart').hide();
				  		}
				  		//$(this).css({'visibility':'initial'});
				  		$("div[itemprop='offers']").css({'visibility':'initial'});
					});
				}else{
				    
					$("form").each(function(){
					    /*if($(this).attr('action') == '/cart/add'){
						   $( this.elements ).show();
      					   $( this).find("div").show();
				  		}*/

				  		if($(this).attr('action') == '/cart/add'){
				  		    $(this).find('.product-single__variants').each(function(){
      					       
      					       //console.log($(this).css('display') == 'none');
      					   		if($(this).css('display') == 'none'){
      					   			//$(this).remove();
      					   		}
      					   });
						   $( this.elements ).show();
						   
      					   $( this).find("div").show();
      					   
				  		}
				  		
				  		//$(this).css({'visibility':'initial'});
				  		$("div[itemprop='offers']").css({'visibility':'initial'});
					});
					$('form[action="/cart/add"] input[type="submit"], form[action="/cart/add"] input[type="button"], form[action="/cart/add"] button').show();
				}
				
			}	
		}
	});
});	
$(document).on("click",".externallink_product",function(){
	$.getJSON(document.URL, function(data) {
	$.ajax({
		url: appurl+"product_count.php",
		type: "POST",
		data: {shop_name: shop_name, product_id: data.product.id},
		dataType: "json",
		success: function(response) {
			if(response.result == "true") {
				//console.log("Success !!");
			}else{
				//console.log("Fail !!")
			}
		}
	});
});	
});
$( document ).ready(function() {
	
	
	
	/* $footer_text = '<script>$( document ).ready(function() {if($("form[action="/cart/add"] select option").length == 1 && $("form[action="/cart/add"] select").find("option:first").val() == "Default Title"){ $("head").append("<style >form[action="/cart/add"] select{display:none !important;}</style>");}});</script>
</body>';
	*/
	
	
	//$('body').append('<style type="text/css">form[action="/cart/add"] input[type="submit"], form[action="/cart/add"] input[type="button"], form[action="/cart/add"] button {display:none;}select[name="id"] {display:none !important;}</style>');
	
	
$('head').append('<style type="text/css">form[action="/cart/add"] input[type="submit"], form[action="/cart/add"] input[type="button"], form[action="/cart/add"] button {display:none;}select[name="id"] {display:none !important;}</style>');

if($('.selector-wrapper select option').length == 1 && $('.selector-wrapper select').find('option:first').val() == 'Default Title'){
	//console.log('here');
	$('head').append('<style type="text/css">form[action="/cart/add"] select{display:none !important;}</style>');
	//$('.selector-wrapper').hide();
}
});