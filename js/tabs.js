if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),r=n.data("bs.tab");r||n.data("bs.tab",r=new a(this)),"string"==typeof e&&r[e]()})}var a=function(e){this.element=t(e)};a.VERSION="3.3.7",a.TRANSITION_DURATION=150,a.prototype.show=function(){var e=this.element,a=e.closest("ul:not(.dropdown-menu)"),n=e.data("target");if(n||(n=e.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var r=a.find(".active:last a"),i=t.Event("hide.bs.tab",{relatedTarget:e[0]}),s=t.Event("show.bs.tab",{relatedTarget:r[0]});if(r.trigger(i),e.trigger(s),!s.isDefaultPrevented()&&!i.isDefaultPrevented()){var o=t(n);this.activate(e.closest("li"),a),this.activate(o,o.parent(),function(){r.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:r[0]})})}}},a.prototype.activate=function(e,n,r){function i(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),o?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),r&&r()}var s=n.find("> .active"),o=r&&t.support.transition&&(s.length&&s.hasClass("fade")||!!n.find("> .fade").length);s.length&&o?s.one("bsTransitionEnd",i).emulateTransitionEnd(a.TRANSITION_DURATION):i(),s.removeClass("in")};var n=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=a,t.fn.tab.noConflict=function(){return t.fn.tab=n,this};var r=function(a){a.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',r).on("click.bs.tab.data-api",'[data-toggle="pill"]',r)}(jQuery);