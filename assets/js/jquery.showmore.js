!function(a,l){"use strict";var s="showmore",i={closedHeight:100,buttonTextMore:"show more",buttonTextLess:"show less",buttonCssClass:"showmore-button",animationSpeed:.5,openHeightOffset:0,onlyWithWindowMaxWidth:0};function e(t,e){this.element=t,this.settings=a.extend({},i,e),this._defaults=i,this._name=s,this.btn,this.init()}a.extend(e.prototype,{init:function(){0<this.settings.onlyWithWindowMaxWidth?(this.bindResize(),this.responsive()):this.showmore()},bindResize:function(){var t,e=this;a(l).on("resize",function(){t&&clearTimeout(t),t=setTimeout(function(){e.responsive()},250)})},responsive:function(){a(l).innerWidth()<=this.settings.onlyWithWindowMaxWidth?this.showmore():this.remove()},showmore:function(){var e,s,i,n,o,t,h;this.btn||(s=a((e=this).element),10<(i=this.settings).animationSpeed&&(i.animationSpeed=i.animationSpeed/1e3),n=a("<div />",{class:i.buttonCssClass+"-inner more",text:i.buttonTextMore}),o=a("<div />",{class:i.buttonCssClass+"-inner less",text:i.buttonTextLess}),s.addClass("closed").css({height:i.closedHeight,overflow:"hidden"}),a(l).on("resize",function(){s.hasClass("closed")||(t&&clearTimeout(t),t=setTimeout(function(){e.setOpenHeight(!0)},150))}),(h=a("<div />",{class:i.buttonCssClass,html:n})).on("click",function(t){t.preventDefault(),s.hasClass("closed")?(e.setOpenHeight(),s.removeClass("closed"),h.html(o)):(s.css({height:i.closedHeight,transition:"all "+i.animationSpeed+"s ease"}).addClass("closed"),h.html(n))}),s.after(h),this.btn=h)},setOpenHeight:function(t){a(this.element).css({height:this.getOpenHeight()}),t?a(this.element).css({transition:"none"}):a(this.element).css({transition:"all "+this.settings.animationSpeed+"s ease"})},getOpenHeight:function(){a(this.element).css({height:"auto",transition:"none"});var t=a(this.element).innerHeight();return a(this.element).css({height:this.settings.closedHeight}),a(this.element).innerHeight(),t},remove:function(){a(this.element).hasClass("closed")&&this.setOpenHeight(),this.btn&&(this.btn.off("click").empty().remove(),this.btn=void 0)}}),a.fn[s]=function(t){return this.each(function(){a.data(this,"plugin_"+s)||a.data(this,"plugin_"+s,new e(this,t))})}}(jQuery,window,document);