function initMasonry(){var a=document.querySelector("#projects");a&&new Masonry(a,{itemSelector:".project",gutter:20})}initMasonry(),document.onclick=function(a){a=a||window.event;for(var b=a.target||a.srcElement;b&&"A"!==b.tagName;)b=b.parentNode||null;if(b){var c="site",d=document.getElementById(c);if(a.which>1||a.metaKey||a.ctrlKey)return;return a.preventDefault?a.preventDefault():a.returnValue=!1,document.location.href===b.href?!1:(Velocity(d,{opacity:[0,1],translateY:20,translateZ:0},{queue:!1,duration:100,complete:function(){pjax.invoke({url:b.href||"/",container:d,parseLinksOnload:!1,complete:function(){console.log("complete"),initMasonry(),Velocity(d,{opacity:[1,0],translateY:[0,20],translateZ:0},{duration:300})}})}}),!1)}};