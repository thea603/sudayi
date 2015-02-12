 (function() {
    if ("-ms-user-select" in document.documentElement.style && navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
            document.createTextNode("@-ms-viewport{width:auto!important}")
        );
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
    }
})();





            function loadedPanel(what) {
                //We are going to set the badge as the number of li elements inside the target
                $.ui.updateBadge("#aflink", $("#af").find("li").length);
            }


            function unloadedPanel(what) {
                console.log("unloaded " + what.id);
            }

            if (!((window.DocumentTouch && document instanceof DocumentTouch) || 'ontouchstart' in window)) {
                var script = document.createElement("script");
                script.src = "plugins/af.desktopBrowsers.js";
                var tag = $("head").append(script);
                //$.os.desktop=true;
            }



           /* This function runs once the page is loaded, but intel.xdk is not yet active */
            //$.ui.animateHeaders=false;
           
            
			
			$.ui.ready(function(){
                    $("#afui").get(0).className='myandroid';
					
					//$.ui.loadContent("#bangdan_panel",false,false,"up");
            });
            // $.os.android=true;
            //$.ui.autoLaunch = false;
            $.ui.openLinksNewTab = false;
            $.ui.splitview=false;
			$.ui.slideSideMenu = false;
			$.ui.animateHeaders = false;
            $(document).ready(function(){
                  $.ui.launch();
            });     
			
			//设置选中
			function tabTopNav(e){	
				var li=document.getElementById('top_tab_ul').getElementsByTagName('li');	
				for (var i = 0; i <li.length; i++) {
					li[i].className = "";
				}				
				document.getElementById(e).className = "select";	
			}
			
			//panelload
		 	//推荐
		  	function load_tuijian_panel(){
				tabTopNav('tuijian_tab');
			}
			function  unload_tuijian_panel(){
				
			}
			//榜单
			function load_bangdan_panel(){
				tabTopNav('bangdan_tab');
			}
			function unload_bangdan_panel(){
				
			}
			//分类
            function load_fenlei_panel(){
				tabTopNav('fenlei_tab');
			}
			function unload_fenlei_panel(){
				
			}			
			//我的
			function load_wode_panel(){
				tabTopNav('wode_tab');
			}
			function unload_wode_panel(){
				
			}		        
			





			 //推荐
        $("footer").hide();
        $("#navbar").hide();
              $('.home_list').bind("swipeLeft", function() {				 
                $.ui.loadContent("#bangdan_panel", false, false, "slide");
              });

              //榜单
              $('#bangdan_panel').bind("swipeLeft", function() {
                $.ui.loadContent("#fenlei_panel", false, false, "slide");
              })
              $('#bangdan_panel').bind("swipeRight", function() {
                $.ui.loadContent("#tuijian_panel", false, true, "slideright");
              });
              //分类
              $('#fenlei_panel').bind("swipeLeft", function() {
                $.ui.loadContent("#wode_panel", false, false, "slide");
              });
              $('#fenlei_panel').bind("swipeRight", function() {
                $.ui.loadContent("#bangdan_panel", false, true, "slideright");
              });
              //我的
              $('#wode_panel').bind("swipeRight", function() {
                $.ui.loadContent("#fenlei_panel", false, true, "slideright");
              });
			  
			
			  $('.showSide').bind("swipeRight", function() {
              	 af.ui.toggleSideMenu();
              });
        
              

                function showPopup4() {
                            $("#afui").popup({
                                title: "送货地址",
                                message: "<select><option value='0'>广东省</option><option value='1'>北京市</option><option value='2'>广西省</option><option value='3'>上海</option><option value='4'>四川省</option></select>",
                                cancelText: "确定",
                                doneCallback: function () {
                                    alert("Logging in")},
                                doneText: "取消",
                                doneCallback: function () {},
                                cancelOnly: false
                            });
                        }

                 var carousel;
      function init_carousel() {
        carousel=$("#carousel").carousel({
          pagingDiv: "carousel_dots",
          pagingCssName: "carousel_paging2",
          pagingCssNameSelected: "carousel_paging2_selected",
          preventDefaults:false,
          wrap:true //Set to false to disable the wrap around
        });
      }
      window.addEventListener("load", init_carousel, false);