/*
url:josn文件路径
prov:默认省份
city:默认城市
dist:默认地区
saler:默认经销商
selectcity:是否关联城市
nodata:无数据状态
required:必选项
*/
(function($){
	$.fn.citySelect=function(settings){
		if(this.length<1){return;};
		//默认值
		settings=$.extend({
			url:"http://zt.emao.com/common/json/city-json.txt",
			prov:null,
			city:null,
			dist:null,
			saler:null,
			selectcity:false,
			nodata:null,
			required:true
		},settings);

		var box_obj=this;
		var prov_obj=box_obj.find(".prov");
		var city_obj=box_obj.find(".city");
		var dist_obj=box_obj.find(".dist");
		var saler_obj=box_obj.find(".saler");
		var prov_val=settings.prov;
		var city_val=settings.city;
		var dist_val=settings.dist;
		var saler_val=settings.saler;
		var select_prehtml=(settings.required) ? "" : "<option value=''>请选择</option>";
		var city_json;

		//赋值市级函数
		var cityStart=function(){
			var prov_id=prov_obj.get(0).selectedIndex;
			if(!settings.required){
				prov_id--;
			};
			city_obj.empty().attr("disabled","disabled");
			dist_obj.empty().attr("disabled","disabled");
			saler_obj.empty().attr("disabled","disabled");

			if(prov_id<0||typeof(city_json.citylist[prov_id].c)=="undefined"){
				if(settings.nodata=="none"){
					city_obj.css("display","none");
					dist_obj.css("display","none");
					saler_obj.css("display","none");
				}else if(settings.nodata=="hidden"){
					city_obj.css("visibility","visible");
					dist_obj.css("visibility","visible");
					saler_obj.css("visibility","visible");
				};
				return;
			};
			
			//遍历赋值市级下拉列表
			temp_html=select_prehtml;
			$.each(city_json.citylist[prov_id].c,function(i,city){
				temp_html+="<option value='"+city.n+"'>"+city.n+"</option>";
			});
			city_obj.html(temp_html).removeAttr("disabled").css({"display":"","visibility":""});
			distStart();
		};

		//赋值地区函数
		var distStart=function(){
			var prov_id=prov_obj.get(0).selectedIndex;
			var city_id=city_obj.get(0).selectedIndex;
			if(!settings.required){
				prov_id--;
				city_id--;
			};
			dist_obj.empty().attr("disabled",true);

			if(prov_id<0||city_id<0||typeof(city_json.citylist[prov_id].c[city_id].a)=="undefined"){
				if(settings.nodata=="none"){
					dist_obj.css("display","none");
				}else if(settings.nodata=="hidden"){
					dist_obj.css("visibility","visible");
				};
				return;
			};
			
			//遍历赋值区级下拉列表
			temp_html=select_prehtml;
			$.each(city_json.citylist[prov_id].c[city_id].a,function(i,dist){
				temp_html+="<option value='"+dist.s+"'>"+dist.s+"</option>";
			});
			dist_obj.html(temp_html).removeAttr("disabled").css({"display":"","visibility":""});
			salerStart();
		};

		//赋值经销商函数
		var salerStart=function(){

			var prov_id=prov_obj.get(0).selectedIndex;
			var city_id=city_obj.get(0).selectedIndex;
			var dist_id=dist_obj.get(0).selectedIndex;
			
			if(!settings.required){
				prov_id--;
				city_id--;
				if(!settings.selectcity){
				dist_id--;
					}
			};
			saler_obj.empty().attr("disabled","disabled");

			if(prov_id<0||city_id<0||dist_id<0||typeof(city_json.citylist[prov_id].c[city_id].a[dist_id].m)=="undefined"){
				if(settings.nodata=="none"){
					saler_obj.css("display","none");
				}else if(settings.nodata=="hidden"){
					saler_obj.css("visibility","visible");
				};
				return;
			};
			
			//遍历赋值经销商下拉列表
			temp_html=select_prehtml;
			//关联城市或区
			if(settings.selectcity){
				$.each(city_json.citylist[prov_id].c[city_id].a,function(i,saler){
					$.each(saler.m,function(i,saler_all){
						  temp_html+="<option value='"+saler_all.o+"'>"+saler_all.o+"</option>";
						});
				});
			}else{
				$.each(city_json.citylist[prov_id].c[city_id].a[dist_id].m,function(i,saler){
					temp_html+="<option value='"+saler.o+"'>"+saler.o+"</option>";
				});
			}
			
			saler_obj.html(temp_html).removeAttr("disabled").css({"display":"","visibility":""});
		};

		var init=function(){
			//遍历赋值省份下拉列表
			temp_html=select_prehtml;
			$.each(city_json.citylist,function(i,prov){
				temp_html+="<option value='"+prov.p+"'>"+prov.p+"</option>";
			});
			prov_obj.html(temp_html);

			//若有传入省份与市级的值，则选中。（setTimeout为兼容IE6而设置）
			setTimeout(function(){
				if(settings.prov!=null){
					prov_obj.val(settings.prov);
					cityStart();
					setTimeout(function(){
						if(settings.city!=null){
							city_obj.val(settings.city);
							distStart();
							setTimeout(function(){
								if(settings.dist!=null){
									dist_obj.val(settings.dist);
									salerStart();
									setTimeout(function(){
										if(settings.saler!=null){
											saler_obj.val(settings.saler);
										}
										},1);
								};
							},1);
						};
					},1);
				};
			},1);

			var citymode=false;
			
			//选择省份时发生事件
			prov_obj.bind("change",function(){
				cityStart();
				citymode=false;
			});

			//选择市级时发生事件
			city_obj.bind("change",function(){
				distStart();
				citymode=false;
			});
			
			//选择县区时发生事件
			dist_obj.bind("change",function(){
				if(!citymode){
						salerStart();
					}
				if(settings.selectcity){citymode=true}
			});

			//选择经销商时发生事件
			saler_obj.bind("change",function(){
				if(settings.selectcity){citymode=true}
			});

		};

		//设置省市json数据
		if(typeof(settings.url)=="string"){
			$.getJSON(settings.url,function(json){
				city_json=json;
				init();
			});
		}else{
			city_json=settings.url;
			init();
		};
	};
	
})(Zepto);