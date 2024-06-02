// Garden Gnome Software - Skin
// Pano2VR 6.1.11/18043
// Filename: thayduy.ggsk
// Generated 2024-06-02T21:51:40

function pano2vrSkin(player,base) {
	player.addVariable('vis_video_youtube', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._webpageloading=document.createElement('div');
		els=me._webpageloading__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="WebPageLoading";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<b>Please wait, page loading...<\/b>";
		el.appendChild(els);
		me._webpageloading.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._webpageloading.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((118-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.divSkin.appendChild(me._webpageloading);
		el=me._webpagedisplay=document.createElement('div');
		els=me._webpagedisplay__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="WebPageDisplay";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 9.56%;';
		hs+='position : absolute;';
		hs+='top : 8.15%;';
		hs+='visibility : hidden;';
		hs+='width : 80.7813%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._webpagedisplay.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._webpagedisplay.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._webpagedisplay);
		el=me._webpageclose=document.createElement('div');
		els=me._webpageclose__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bW'+
			'w6c3BhY2U9InByZXNlcnZlIiBoZWlnaHQ9IjMycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlPSIjM0MzQzNDIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTIsMTZsMy40NC0zLjQ0YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI1LDAtMS42OTMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MWMtMC40NjctMC40NjctMS4yMjQt'+
			'MC40NjctMS42OTEsMC4wMDEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjcsMC40NjctMC40NjcsMS4yMjQsMCwxLjY5TDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNiwwLDEuNjkyYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2wzLjQ0LTMuNDRsMy40MzksMy40MzljMC40NjgsMC40NjgsMS4yMjUsMC40NjgsMS42OTEsMC4wMDFDMjEuNTk5LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy'+
			'42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNjc4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDAmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOS43MiwxOS45NTYsMjkuNzIsMTIuMDQyLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41ODktMC4wMDEtNS4xNy0wLjk4NS03LjE0Ni0yLjk2MVM1Ljg5NSwxOC41OSw1Ljg5NCwxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMi41OTEsMC45ODQtNS4xNywyLjk2LTcuMTQ3QzEwLjgzLDYuODc4LDEzLjQwOSw1Ljg5NCwxNiw1Ljg5NGMyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5JiN4ZDsmI3hhOyYjeDk7JiN4'+
			'OTtjMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIyLDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KIDwvZz4KIDxnPgogIDxwYXRoIHN0cm9rZT0iIzAwMDAwMCIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFjLTAuNDY3LTAuNDY3LTEuMj'+
			'I0LTAuNDY3LTEuNjkxLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODIt'+
			'MTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5Oy'+
			'YjeDk7YzEuOTc2LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._webpageclose__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._webpageclose__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bW'+
			'w6c3BhY2U9InByZXNlcnZlIiBoZWlnaHQ9IjMycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBzdHJva2U9IiMzQzNDM0MiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MywxNmwzLjQzOS0zLjQ0YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEu'+
			'MjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY2LTAuNDY3LDEuMjI0LDAsMS42OTFjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMC4wMDEmI3hkOyYjeGE7JiN4OTsmI3g5O2wzLjQ0LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwQzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTT'+
			'I0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OGM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDAmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOS43MiwxOS45NTcsMjkuNzIxLDEyLjA0MywyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTksMC01LjE3MS0wLjk4NC03LjE0Ni0yLjk1OUM2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYs'+
			'NC41NTYtMi45NTksNy4xNDgtMi45NmMyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS45NzUsMS45NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OEMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6IiBzdHJva2Utd2lkdGg9IjEuNSIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBzdHJva2U9IiMwMDAwMDAiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MywxNmwzLjQzOS'+
			'0zLjQ0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjgtMC40NjcsMC40NjgtMS4yMjYsMC4wMDEtMS42OTNjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY4LTAuNDY4LTEuMjI1LTAuNDY3LTEuNjkzLDBjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY2LTAuNDY3LDEuMjI0LDAsMS42OTEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMWwzLjQ0LTMuNDRsMy40NCwzLjQz'+
			'OWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjEuNTk4LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxYy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzQuODgyLDQuODgxLDEyLjc5Niw0Ljg4MSwxNy42NzgsMEMyOS43MiwxOS45NTcsMjkuNzIxLDEyLjA0MywyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTksMC01LjE3MS0wLjk4NC03LjE0Ni0yLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qz'+
			'YuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNmMwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYsNC41NTYtMi45NTksNy4xNDgtMi45NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTljMS45NzUsMS45NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjE3LDI1LjEyMywxOC41OTEsMjYuMTA3LDE2LDI2LjEwNnoiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._webpageclose__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="WebPageClose";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 63px;';
		hs+='top : 39px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._webpageclose.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._webpageclose.onclick=function (e) {
			me._webpagedisplay.ggText="";
			me._webpagedisplay.ggTextDiv.innerHTML=me._webpagedisplay.ggText;
			if (me._webpagedisplay.ggUpdateText) {
				me._webpagedisplay.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._webpagedisplay.ggUpdatePosition) {
				me._webpagedisplay.ggUpdatePosition();
			}
			me._webpagedisplay.ggTextDiv.scrollTop = 0;
			me._webpagedisplay.style[domTransition]='none';
			me._webpagedisplay.style.visibility='hidden';
			me._webpagedisplay.ggVisible=false;
			me._webpageloading.style[domTransition]='none';
			me._webpageloading.style.visibility='hidden';
			me._webpageloading.ggVisible=false;
			me._webpageclose.style[domTransition]='none';
			me._webpageclose.style.visibility='hidden';
			me._webpageclose.ggVisible=false;
		}
		me._webpageclose.onmouseover=function (e) {
			me._webpageclose__img.style.visibility='hidden';
			me._webpageclose__imgo.style.visibility='inherit';
			me.elementMouseOver['webpageclose']=true;
			me._websiteclose.logicBlock_visible();
		}
		me._webpageclose.onmouseout=function (e) {
			me._webpageclose__img.style.visibility='inherit';
			me._webpageclose__imgo.style.visibility='hidden';
			me.elementMouseOver['webpageclose']=false;
			me._websiteclose.logicBlock_visible();
		}
		me._webpageclose.ontouchend=function (e) {
			me.elementMouseOver['webpageclose']=false;
			me._websiteclose.logicBlock_visible();
		}
		me._webpageclose.ggUpdatePosition=function (useTransition) {
		}
		el=me._websiteclose=document.createElement('div');
		els=me._websiteclose__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="WebSiteClose";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 38px;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 78px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 78px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 3px 0px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<b>Close<\/b>";
		el.appendChild(els);
		me._websiteclose.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._websiteclose.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['webpageclose'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._websiteclose.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._websiteclose.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._websiteclose.style[domTransition]='';
				if (me._websiteclose.ggCurrentLogicStateVisible == 0) {
					me._websiteclose.style.visibility=(Number(me._websiteclose.style.opacity)>0||!me._websiteclose.style.opacity)?'inherit':'hidden';
					me._websiteclose.ggVisible=true;
				}
				else {
					me._websiteclose.style.visibility="hidden";
					me._websiteclose.ggVisible=false;
				}
			}
		}
		me._websiteclose.ggUpdatePosition=function (useTransition) {
		}
		me._webpageclose.appendChild(me._websiteclose);
		me.divSkin.appendChild(me._webpageclose);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_url_mouseover = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._tt_ht_url && hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 314px;';
		hs+='position : absolute;';
		hs+='top : 243px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url.onclick=function (e) {
			skin._webpagedisplay.ggText="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>";
			skin._webpagedisplay.ggTextDiv.innerHTML=skin._webpagedisplay.ggText;
			if (skin._webpagedisplay.ggUpdateText) {
				skin._webpagedisplay.ggUpdateText=function() {
					var hs="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._webpagedisplay.ggUpdatePosition) {
				skin._webpagedisplay.ggUpdatePosition();
			}
			skin._webpagedisplay.ggTextDiv.scrollTop = 0;
			skin._webpagedisplay.style[domTransition]='none';
			skin._webpagedisplay.style.visibility=(Number(skin._webpagedisplay.style.opacity)>0||!skin._webpagedisplay.style.opacity)?'inherit':'hidden';
			skin._webpagedisplay.ggVisible=true;
			skin._webpageclose.style[domTransition]='none';
			skin._webpageclose.style.visibility=(Number(skin._webpageclose.style.opacity)>0||!skin._webpageclose.style.opacity)?'inherit':'hidden';
			skin._webpageclose.ggVisible=true;
			skin._webpageloading.style[domTransition]='none';
			skin._webpageloading.style.visibility=(Number(skin._webpageloading.style.opacity)>0||!skin._webpageloading.style.opacity)?'inherit':'hidden';
			skin._webpageloading.ggVisible=true;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			me._tt_ht_url.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_url']=false;
			me._tt_ht_url.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.ontouchend=function (e) {
			me.elementMouseOver['ht_url']=false;
			me._tt_ht_url.logicBlock_visible();
		}
		me._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_image=document.createElement('div');
		els=me._ht_url_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOmdyYXBoPSJodHRwOi8vbnMuYWRvYmUuY29tL0dyYXBocy8xLjAvIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMiAzMiIgeG1sbnM6aT0iaHR0cDovL25zLm'+
			'Fkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgeT0iMHB4IiB3aWR0aD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBoZWlnaHQ9IjMycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIGlkPSJMYXllcl8xIi8+'+
			'CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxnIG9wYWNpdHk9IjAuNCIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJtdWx0aXBseSI+CiAgICA8cGF0aCBzdHJva2U9IiMxQTE3MUIiIGQ9Ik0yOC4wODQsMTYmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAtNi40NzctNS4yNy0xMS43NDYtMTEuNzQ2LTExLjc0NkM5Ljg2MSw0LjI1NCw0LjU5Miw5LjUyMiw0LjU5MiwxNmMwLDYuNDMyLDUuMiwxMS42NywxMS42MTUsMTEuNzQxJiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjAzNywwLjAwNCwwLjA3MiwwLjAwNiwwLjEwNywwLjAwNmMwLjAxMiwwLDAuMDIyLTAuMDAyLDAuMDMyLTAuMDAyQz'+
			'IyLjgxOSwyNy43NCwyOC4wODQsMjIuNDczLDI4LjA4NCwxNnogTTUuOTkzLDE2LjY4NiYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtoMy4zMDRjMC4wNTYsMS42NTYsMC4zMDYsMy4yMDksMC43MTYsNC42SDcuNDJDNi42MDgsMTkuOTIsNi4xMDMsMTguMzU5LDUuOTkzLDE2LjY4NnogTTI2LjY4NCwxNS4zMTJoLTMuMzUyJiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4wNTUtMS42NTEtMC4zMDMtMy4yLTAuNzEyLTQuNTg2aDIuNjQ0QzI2LjA3LDEyLjA4NiwyNi41NzIsMTMuNjQ2LDI2LjY4NCwxNS4zMTJ6IE0yMS45NTcsMTUuMzEyaC00LjkzMnYtNC41ODZoNC4xMyYjeGE7JiN4OTsmI3g5'+
			'OyYjeDk7JiN4OTtDMjEuNjA3LDEyLjA5NCwyMS44OTQsMTMuNjU3LDIxLjk1NywxNS4zMTJ6IE0xNy4wMjUsOS4zNTFWNS43MTljMS40MTgsMC4zNDMsMi42ODksMS42OTIsMy41ODksMy42MzJIMTcuMDI1eiBNMTUuNjUxLDUuNzA3JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O3YzLjY0NGgtMy42MzVDMTIuOTI0LDcuMzkxLDE0LjIxMyw2LjAzMywxNS42NTEsNS43MDd6IE0xNS42NTEsMTAuNzI3djQuNTg2aC00Ljk3N2MwLjA2My0xLjY1NiwwLjM0Ny0zLjIxOSwwLjgtNC41ODZIMTUuNjUxeiYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsgTTkuMjk3LDE1LjMxMkg1Ljk5M2MwLjEwOC0xLjY2Ni'+
			'wwLjYxNC0zLjIyNiwxLjQyLTQuNTg2aDIuNTk4QzkuNjAyLDEyLjExMyw5LjM1MywxMy42NjEsOS4yOTcsMTUuMzEyeiBNMTAuNjc0LDE2LjY4Nmg0Ljk3NyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTt2NC42aC00LjE3NEMxMS4wMjIsMTkuOTE0LDEwLjczNywxOC4zNDgsMTAuNjc0LDE2LjY4NnogTTE1LjY1MSwyMi42NnYzLjYzM2MtMS40MzUtMC4zMjQtMi43MjItMS42NzgtMy42My0zLjYzM0gxNS42NTF6JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyBNMTcuMDI1LDI2LjI4MVYyMi42NmgzLjU4M0MxOS43MTEsMjQuNTk0LDE4LjQ0LDI1LjkzOSwxNy4wMjUsMjYuMjgxeiBNMTcuMDI1LDIx'+
			'LjI4NXYtNC42aDQuOTMyJiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4wNjMsMS42NjItMC4zNSwzLjIyOS0wLjgwNSw0LjZIMTcuMDI1eiBNMjMuMzMyLDE2LjY4NmgzLjM1MmMtMC4xMTEsMS42NzQtMC42MTcsMy4yMzQtMS40MjgsNC42aC0yLjYzOSYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDMjMuMDI3LDE5Ljg5NSwyMy4yNzcsMTguMzQyLDIzLjMzMiwxNi42ODZ6IE0yNC4yODksOS4zNTFoLTIuMTQ1Yy0wLjQ0Ny0xLjEwMi0xLjAwMi0yLjA2NC0xLjY0NS0yLjg0OCYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDMjEuOTczLDcuMTUyLDIzLjI3LDguMTMyLDI0LjI4OSw5LjM1MXogTT'+
			'EyLjEwMyw2LjUzOGMtMC42MywwLjc3Ni0xLjE3NywxLjcyNy0xLjYxNiwyLjgxM0g4LjM4NSYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDOS4zOTEsOC4xNTIsMTAuNjU5LDcuMTg2LDEyLjEwMyw2LjUzOHogTTguMzk3LDIyLjY2aDIuMDk0YzAuNDM4LDEuMDgyLDAuOTgxLDIuMDI3LDEuNjA5LDIuODAxJiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MxMC42NjIsMjQuODE0LDkuMzk4LDIzLjg1NCw4LjM5NywyMi42NnogTTIwLjUwMiwyNS40OTRjMC42MzktMC43NzksMS4xOTItMS43MzgsMS42MzgtMi44MzRoMi4xNCYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDMjMuMjYsMjMuODczLDIxLjk3'+
			'LDI0Ljg1LDIwLjUwMiwyNS40OTR6IiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuNSIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiLz4KICAgPC9nPgogICA8cGF0aCBkPSJNMTYuMTk3LDI3Ljg0QzkuNzQ3LDI3Ljc3LDQuNDkyLDIyLjQ1OCw0LjQ5MiwxNmMwLTYuNTMyLDUuMzE0LTExLjg0NiwxMS44NDYtMTEuODQ2JiN4YTsmI3g5OyYjeDk7JiN4OTtjNi41MzIsMCwxMS44NDYsNS4zMTQsMTEuODQ2LDExLjg0NmMwLDYuNTI3LTUuMzEsMTEuODQtMTEuODM3LDExLjg0NGwtMC4wMzIsMC4wMDJDMTYuMjc2LDI3Ljg0NiwxNi4yMzcsMjcuODQ0LDE2LjE5NywyNy44NHomI3hhOy'+
			'YjeDk7JiN4OTsmI3g5OyBNMTIuMTc4LDIyLjc2YzAuODk0LDEuODU3LDIuMDgzLDMuMDU5LDMuMzczLDMuNDA1VjIyLjc2SDEyLjE3OHogTTE3LjEyNSwyNi4xNTFjMS4yNzEtMC4zNjIsMi40NDQtMS41NTksMy4zMjUtMy4zOTJoLTMuMzI1JiN4YTsmI3g5OyYjeDk7JiN4OTtWMjYuMTUxeiBNMjIuMjA3LDIyLjc2Yy0wLjM4NSwwLjkzNS0wLjg0NiwxLjc2My0xLjM3MSwyLjQ3YzEuMjE5LTAuNTk3LDIuMzI1LTEuNDQyLDMuMjI2LTIuNDdIMjIuMjA3eiBNOC42MTQsMjIuNzYmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjg3OCwxLjAwMiwxLjk1OCwxLjgzNSwzLjE1MSwyLjQzMmMtMC41MTUtMC42'+
			'OTktMC45NjUtMS41MTUtMS4zNDItMi40MzJIOC42MTR6IE02LjEsMTYuNzg1JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4xMjEsMS41ODYsMC41OTMsMy4wODIsMS40MDYsNC40NDlsMi4zNzUtMC4wNDdDOS40ODgsMTkuODE2LDkuMjYsMTguMzM3LDkuMiwxNi43ODVINi4xeiBNMjUuMjU2LDIxLjE4NiYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNzI4LTEuMzIsMS4xOTktMi44MTUsMS4zMi00LjRoLTMuMTQ3Yy0wLjA1OSwxLjU1MS0wLjI4NiwzLjAyOS0wLjY3OSw0LjRIMjUuMjU2eiBNMjEuMDgsMjEuMTg2JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40MzgtMS4zNDYsMC43MDUtMi44NjMsMC43NzItNC'+
			'40aC00LjcyOHY0LjRIMjEuMDh6IE0xNS41NTEsMjEuMTg2di00LjRoLTQuNzczYzAuMDY3LDEuNTM3LDAuMzMzLDMuMDU1LDAuNzcxLDQuNEgxNS41NTF6JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTI2LjU3NiwxNS4yMTJjLTAuMTIxLTEuNTYzLTAuNjA0LTMuMDk1LTEuMzk4LTQuNDM1bC0yLjQyNSwwLjA0N2MwLjM5LDEuMzYzLDAuNjE3LDIuODM4LDAuNjc2LDQuMzg4SDI2LjU3NnogTTIxLjg1MywxNS4yMTImI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4wNjctMS41MjktMC4zMzMtMy4wNDItMC43Ny00LjM4NmgtMy45NTh2NC4zODZIMjEuODUzeiBNMTUuNTUxLDE1LjIxMnYtNC4zODZoLTQuMDA1'+
			'Yy0wLjQzNiwxLjM0LTAuNzAxLDIuODUzLTAuNzY4LDQuMzg2JiN4YTsmI3g5OyYjeDk7JiN4OTtIMTUuNTUxeiBNOS4yLDE1LjIxMmMwLjA2LTEuNTQ3LDAuMjg3LTMuMDIxLDAuNjc3LTQuMzg2SDcuNDdjLTAuNzgxLDEuMzM1LTEuMjUzLDIuODQ4LTEuMzcsNC4zODZIOS4yeiBNMjQuMDcyLDkuMjUxJiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuODk5LTEuMDI5LTIuMDA5LTEuODgtMy4yMzctMi40ODJjMC41MjcsMC43MDksMC45OSwxLjU0MiwxLjM3NywyLjQ4MkgyNC4wNzJ6IE0yMC40NTYsOS4yNTEmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC44ODItMS44MzgtMi4wNTgtMy4wMzktMy4zMzEtMy'+
			'40MDJ2My40MDJIMjAuNDU2eiBNMTUuNTUxLDkuMjUxVjUuODM1Yy0xLjI5MiwwLjM0OC0yLjQ4MywxLjU1My0zLjM3NywzLjQxNkgxNS41NTF6JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTEwLjQxOSw5LjI1MWMwLjM3OC0wLjkyMSwwLjgzMS0xLjc0MiwxLjM0OS0yLjQ0NGMtMS4xOTcsMC41OTctMi4yODEsMS40MzQtMy4xNjYsMi40NDRIMTAuNDE5eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNMTYuMzM4LDQuMjU0YzYuNDc3LDAsMTEuNzQ2LDUuMjY5LDExLjc0NiwxMS43NDZjMCw2LjQ3My01LjI2NSwxMS43NDEtMTEuNzM3LDExLjc0NSYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjAx'+
			'LDAtMC4wMjEsMC4wMDItMC4wMzIsMC4wMDJjLTAuMDM1LDAtMC4wNy0wLjAwMi0wLjEwNy0wLjAwNkM5Ljc5MiwyNy42Nyw0LjU5MiwyMi40MzIsNC41OTIsMTYmI3hhOyYjeDk7JiN4OTsmI3g5O0M0LjU5Miw5LjUyMiw5Ljg2MSw0LjI1NCwxNi4zMzgsNC4yNTQgTTEyLjAxNiw5LjM1MWgzLjYzNVY1LjcwN0MxNC4yMTMsNi4wMzMsMTIuOTI0LDcuMzkxLDEyLjAxNiw5LjM1MSBNMTcuMDI1LDkuMzUxaDMuNTg5JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuODk5LTEuOTQtMi4xNzEtMy4yODktMy41ODktMy42MzJWOS4zNTEgTTIyLjE0NSw5LjM1MWgyLjE0NWMtMS4wMi0xLjIxOS0yLjMxNi0yLj'+
			'E5OS0zLjc4OS0yLjg0OCYjeGE7JiN4OTsmI3g5OyYjeDk7QzIxLjE0Myw3LjI4NywyMS42OTcsOC4yNDksMjIuMTQ1LDkuMzUxIE04LjM4NSw5LjM1MWgyLjEwMWMwLjQzOS0xLjA4NiwwLjk4Ni0yLjAzNywxLjYxNi0yLjgxMyYjeGE7JiN4OTsmI3g5OyYjeDk7QzEwLjY1OSw3LjE4Niw5LjM5MSw4LjE1Miw4LjM4NSw5LjM1MSBNMjMuMzMyLDE1LjMxMmgzLjM1MmMtMC4xMTEtMS42NjYtMC42MTMtMy4yMjYtMS40Mi00LjU4NkgyMi42MiYjeGE7JiN4OTsmI3g5OyYjeDk7QzIzLjAyOSwxMi4xMTMsMjMuMjc3LDEzLjY2MSwyMy4zMzIsMTUuMzEyIE0xNy4wMjUsMTUuMzEyaDQuOTMyYy0wLjA2'+
			'My0xLjY1Ni0wLjM1LTMuMjE5LTAuODAyLTQuNTg2aC00LjEzVjE1LjMxMiYjeGE7JiN4OTsmI3g5OyYjeDk7IE0xMC42NzQsMTUuMzEyaDQuOTc3di00LjU4NmgtNC4xNzdDMTEuMDIxLDEyLjA5NCwxMC43MzcsMTMuNjU3LDEwLjY3NCwxNS4zMTIgTTUuOTkzLDE1LjMxMmgzLjMwNCYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMDU2LTEuNjUxLDAuMzA1LTMuMiwwLjcxMy00LjU4Nkg3LjQxM0M2LjYwNywxMi4wODYsNi4xMDEsMTMuNjQ2LDUuOTkzLDE1LjMxMiBNMjIuNjE3LDIxLjI4NWgyLjYzOSYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuODExLTEuMzY1LDEuMzE2LTIuOTI2LDEuNDI4LTQuNmgtMy'+
			'4zNTJDMjMuMjc3LDE4LjM0MiwyMy4wMjcsMTkuODk1LDIyLjYxNywyMS4yODUgTTE3LjAyNSwyMS4yODVoNC4xMjcmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQ1NS0xLjM3MSwwLjc0MS0yLjkzOCwwLjgwNS00LjZoLTQuOTMyVjIxLjI4NSBNMTEuNDc3LDIxLjI4NWg0LjE3NHYtNC42aC00Ljk3N0MxMC43MzcsMTguMzQ4LDExLjAyMiwxOS45MTQsMTEuNDc3LDIxLjI4NSYjeGE7JiN4OTsmI3g5OyYjeDk7IE03LjQyLDIxLjI4NWgyLjU5M2MtMC40MS0xLjM5MS0wLjY2MS0yLjk0My0wLjcxNi00LjZINS45OTNDNi4xMDMsMTguMzU5LDYuNjA4LDE5LjkyLDcuNDIsMjEuMjg1IE0yMC41MDIsMjUu'+
			'NDk0JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS40NjgtMC42NDUsMi43NTgtMS42MjEsMy43NzctMi44MzRoLTIuMTRDMjEuNjk0LDIzLjc1NiwyMS4xNDEsMjQuNzE1LDIwLjUwMiwyNS40OTQgTTE3LjAyNSwyNi4yODEmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjQxNS0wLjM0MiwyLjY4Ni0xLjY4OCwzLjU4My0zLjYyMWgtMy41ODNWMjYuMjgxIE0xNS42NTEsMjYuMjkzVjIyLjY2aC0zLjYzQzEyLjkyOSwyNC42MTUsMTQuMjE2LDI1Ljk2OSwxNS42NTEsMjYuMjkzJiN4YTsmI3g5OyYjeDk7JiN4OTsgTTEyLjEsMjUuNDYxYy0wLjYyNy0wLjc3My0xLjE3MS0xLjcxOS0xLjYwOS0yLjgwMUg4LjM5N0'+
			'M5LjM5OCwyMy44NTQsMTAuNjYyLDI0LjgxNCwxMi4xLDI1LjQ2MSBNMTYuMzM4LDQuMDU0JiN4YTsmI3g5OyYjeDk7JiN4OTtDOS43NTEsNC4wNTQsNC4zOTIsOS40MTMsNC4zOTIsMTZjMCw2LjUxMyw1LjI5OSwxMS44NywxMS44MTMsMTEuOTQxYzAuMDI1LDAuMDAzLDAuMDY3LDAuMDA2LDAuMTA5LDAuMDA2JiN4YTsmI3g5OyYjeDk7JiN4OTtjNi42MTQtMC4wMDYsMTEuOTctNS4zNjQsMTEuOTctMTEuOTQ3QzI4LjI4NCw5LjQxMywyMi45MjUsNC4wNTQsMTYuMzM4LDQuMDU0TDE2LjMzOCw0LjA1NHogTTEyLjMzNCw5LjE1MSYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuODQyLTEuNjk0LDEuOTM1'+
			'LTIuODEsMy4xMTctMy4xODN2My4xODNIMTIuMzM0TDEyLjMzNCw5LjE1MXogTTE3LjIyNiw5LjE1MVY1Ljk4NGMxLjE2MywwLjM4NywyLjIzOSwxLjQ5NywzLjA3LDMuMTY3SDE3LjIyNiYjeGE7JiN4OTsmI3g5OyYjeDk7TDE3LjIyNiw5LjE1MXogTTIyLjI3OCw5LjE1MWMtMC4zMjQtMC43NzgtMC43MDEtMS40ODMtMS4xMjQtMi4xMDRjMS4wMDgsMC41NDUsMS45MjQsMS4yNiwyLjY5NCwyLjEwNEgyMi4yNzhMMjIuMjc4LDkuMTUxeiYjeGE7JiN4OTsmI3g5OyYjeDk7IE04LjgyNiw5LjE1MWMwLjc1NC0wLjgyNCwxLjY0Ni0xLjUyNSwyLjYyMi0yLjA2MmMtMC40MTMsMC42MTItMC43NzksMS'+
			'4zMDMtMS4wOTYsMi4wNjJIOC44MjZMOC44MjYsOS4xNTF6IE0yMi44ODYsMTAuOTI3JiN4YTsmI3g5OyYjeDk7JiN4OTtoMi4yNjRjMC43MzQsMS4yNzIsMS4xODgsMi43MTMsMS4zMTgsNC4xODZoLTIuOTQzQzIzLjQ2MiwxMy42MzksMjMuMjQ4LDEyLjIzMiwyMi44ODYsMTAuOTI3TDIyLjg4NiwxMC45Mjd6IE0xNy4yMjYsMTAuOTI3JiN4YTsmI3g5OyYjeDk7JiN4OTtoMy43ODRjMC40MTEsMS4yODgsMC42NjUsMi43MjgsMC43MzgsNC4xODZoLTQuNTIyVjEwLjkyN0wxNy4yMjYsMTAuOTI3eiBNMTEuNjE5LDEwLjkyN2gzLjgzMnY0LjE4NmgtNC41NjgmI3hhOyYjeDk7JiN4OTsmI3g5O0Mx'+
			'MC45NTYsMTMuNjUsMTEuMjA5LDEyLjIxLDExLjYxOSwxMC45MjdMMTEuNjE5LDEwLjkyN3ogTTcuNTI3LDEwLjkyN2gyLjIxOGMtMC4zNjIsMS4zMDgtMC41NzgsMi43MTMtMC42NDEsNC4xODZINi4yMDgmI3hhOyYjeDk7JiN4OTsmI3g5O0M2LjMzNiwxMy42NDYsNi43ODksMTIuMjA1LDcuNTI3LDEwLjkyN0w3LjUyNywxMC45Mjd6IE0yMy41MjQsMTYuODg2aDIuOTQzYy0wLjEzLDEuNDkxLTAuNTc1LDIuOTAzLTEuMzI2LDQuMTk5aC0yLjI1OSYjeGE7JiN4OTsmI3g5OyYjeDk7QzIzLjI0NywxOS43NzEsMjMuNDYyLDE4LjM2MSwyMy41MjQsMTYuODg2TDIzLjUyNCwxNi44ODZ6IE0xNy4yMj'+
			'YsMTYuODg2aDQuNTIyYy0wLjA3MywxLjQ2Ni0wLjMyOCwyLjkxLTAuNzQxLDQuMTk5aC0zLjc4MSYjeGE7JiN4OTsmI3g5OyYjeDk7VjE2Ljg4NkwxNy4yMjYsMTYuODg2eiBNMTAuODgzLDE2Ljg4Nmg0LjU2OHY0LjE5OWgtMy44MjlDMTEuMjA5LDE5Ljc5NiwxMC45NTYsMTguMzUyLDEwLjg4MywxNi44ODZMMTAuODgzLDE2Ljg4NnomI3hhOyYjeDk7JiN4OTsmI3g5OyBNNi4yMDgsMTYuODg2aDIuODk2YzAuMDYzLDEuNDc2LDAuMjc5LDIuODg2LDAuNjQ0LDQuMTk5SDcuNTM0QzYuNzgzLDE5Ljc4OSw2LjMzNywxOC4zNzgsNi4yMDgsMTYuODg2TDYuMjA4LDE2Ljg4NnomI3hhOyYjeDk7JiN4'+
			'OTsmI3g5OyBNMjIuMjczLDIyLjg2aDEuNTY0Yy0wLjc3MSwwLjg0MS0xLjY4NCwxLjU1Mi0yLjY4MywyLjA5MkMyMS41NzYsMjQuMzMzLDIxLjk1MSwyMy42MzMsMjIuMjczLDIyLjg2TDIyLjI3MywyMi44NnomI3hhOyYjeDk7JiN4OTsmI3g5OyBNMTcuMjI2LDIyLjg2aDMuMDY0Yy0wLjgyOSwxLjY2NC0xLjkwMywyLjc3MS0zLjA2NCwzLjE1NVYyMi44NkwxNy4yMjYsMjIuODZ6IE0xMi4zMzksMjIuODZoMy4xMTJ2My4xNzImI3hhOyYjeDk7JiN4OTsmI3g5O0MxNC4yNzEsMjUuNjYsMTMuMTgxLDI0LjU0OSwxMi4zMzksMjIuODZMMTIuMzM5LDIyLjg2eiBNOC44MzgsMjIuODZoMS41MThjMC'+
			'4zMTQsMC43NTUsMC42NzksMS40NCwxLjA4OCwyLjA1JiN4YTsmI3g5OyYjeDk7JiN4OTtDMTAuNDczLDI0LjM3NCw5LjU4NywyMy42NzgsOC44MzgsMjIuODZMOC44MzgsMjIuODZ6IiBmaWxsPSIjMUExNzFCIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_url_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_url_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOmdyYXBoPSJodHRwOi8vbnMuYWRvYmUuY29tL0dyYXBocy8xLjAvIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMiAzMiIgeG1sbnM6aT0iaHR0cDovL25zLm'+
			'Fkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgeT0iMHB4IiB3aWR0aD0iMzJweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBoZWlnaHQ9IjMycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIGlkPSJMYXllcl8xIi8+'+
			'CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxnIG9wYWNpdHk9IjAuNCIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJtdWx0aXBseSI+CiAgICA8cGF0aCBzdHJva2U9IiMxQTE3MUIiIGQ9Ik0yOS4yNTksMTUuOTk5JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLTcuMTI1LTUuNzk2LTEyLjkyLTEyLjkyMS0xMi45MmMtNy4xMjQsMC0xMi45Miw1Ljc5NS0xMi45MiwxMi45MmMwLDcuMDc1LDUuNzIsMTIuODM4LDEyLjc3NywxMi45MTUmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMDQsMC4wMDQsMC4wNzgsMC4wMDcsMC4xMTcsMC4wMDdjMC4wMTMsMCwwLjAyNC0wLjAwMywwLjAzNS0wLj'+
			'AwM0MyMy40NjgsMjguOTE0LDI5LjI1OSwyMy4xMiwyOS4yNTksMTUuOTk5eiBNNC45NTksMTYuNzU0JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2gzLjYzNGMwLjA2MiwxLjgyMiwwLjMzNywzLjUzLDAuNzg4LDUuMDZINi41MjhDNS42MzYsMjAuMzEyLDUuMDgsMTguNTk1LDQuOTU5LDE2Ljc1NHogTTI3LjcxOSwxNS4yNDNoLTMuNjg3JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4wNjEtMS44MTYtMC4zMzMtMy41Mi0wLjc4My01LjA0NGgyLjkwN0MyNy4wNDQsMTEuNjk1LDI3LjU5NiwxMy40MTEsMjcuNzE5LDE1LjI0M3ogTTIyLjUyLDE1LjI0M2gtNS40MjV2LTUuMDQ0aDQuNTQzJiN4'+
			'YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MyMi4xMzUsMTEuNzAzLDIyLjQ0OSwxMy40MjIsMjIuNTIsMTUuMjQzeiBNMTcuMDk1LDguNjg2VjQuNjljMS41NiwwLjM3OCwyLjk1OCwxLjg2MSwzLjk0NywzLjk5NUgxNy4wOTV6IE0xNS41ODMsNC42Nzh2NC4wMDgmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7aC0zLjk5OUMxMi41ODMsNi41MjksMTQuMDAxLDUuMDM2LDE1LjU4Myw0LjY3OHogTTE1LjU4MywxMC4xOTl2NS4wNDRoLTUuNDc2YzAuMDY5LTEuODIxLDAuMzgyLTMuNTQsMC44OC01LjA0NEgxNS41ODN6JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyBNOC41OTMsMTUuMjQzSDQuOTU5YzAuMT'+
			'E5LTEuODMyLDAuNjc1LTMuNTQ4LDEuNTYyLTUuMDQ0aDIuODU3QzguOTI5LDExLjcyNCw4LjY1NCwxMy40MjcsOC41OTMsMTUuMjQzeiBNMTAuMTA3LDE2Ljc1NGg1LjQ3NiYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTt2NS4wNmgtNC41OTJDMTAuNDkxLDIwLjMwNiwxMC4xNzcsMTguNTgyLDEwLjEwNywxNi43NTR6IE0xNS41ODMsMjMuMzI2djMuOTk2Yy0xLjU3OC0wLjM1Ni0yLjk5NS0xLjg0Ni0zLjk5NC0zLjk5NkgxNS41ODN6JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyBNMTcuMDk1LDI3LjMxdi0zLjk4M2gzLjk0MUMyMC4wNDksMjUuNDUzLDE4LjY1MSwyNi45MzQsMTcuMDk1LDI3LjMx'+
			'eiBNMTcuMDk1LDIxLjgxM3YtNS4wNmg1LjQyNSYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMDcsMS44MjgtMC4zODUsMy41NTItMC44ODYsNS4wNkgxNy4wOTV6IE0yNC4wMzIsMTYuNzU0aDMuNjg3Yy0wLjEyMywxLjg0MS0wLjY3OSwzLjU1OC0xLjU3LDUuMDZoLTIuOTAzJiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MyMy42OTYsMjAuMjg0LDIzLjk3MiwxOC41NzYsMjQuMDMyLDE2Ljc1NHogTTI1LjA4NSw4LjY4NmgtMi4zNTljLTAuNDkyLTEuMjEyLTEuMTAzLTIuMjcxLTEuODA5LTMuMTMzJiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MyMi41MzYsNi4yNjcsMjMuOTYzLDcuMzQ1LD'+
			'I1LjA4NSw4LjY4NnogTTExLjY4LDUuNTkyYy0wLjY5MywwLjg1NC0xLjI5NSwxLjg5OS0xLjc3OCwzLjA5NEg3LjU5MSYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDOC42OTYsNy4zNjcsMTAuMDkyLDYuMzA0LDExLjY4LDUuNTkyeiBNNy42MDQsMjMuMzI2aDIuMzAzYzAuNDgxLDEuMTksMS4wOCwyLjIyOSwxLjc3LDMuMDgxJiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MxMC4wOTUsMjUuNjk1LDguNzA0LDI0LjYzOSw3LjYwNCwyMy4zMjZ6IE0yMC45MTksMjYuNDQzYzAuNzAyLTAuODU3LDEuMzEyLTEuOTEyLDEuODAyLTMuMTE3aDIuMzU0JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MyMy45'+
			'NTIsMjQuNjYsMjIuNTMzLDI1LjczNCwyMC45MTksMjYuNDQzeiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibm9ybWFsIi8+CiAgIDwvZz4KICAgPHBhdGggZD0iTTE2LjE4NiwyOS4wMTRDOS4wOTQsMjguOTM3LDMuMzE4LDIzLjA5OCwzLjMxOCwxNS45OTljMC03LjE3OSw1Ljg0MS0xMy4wMiwxMy4wMi0xMy4wMiYjeGE7JiN4OTsmI3g5OyYjeDk7YzcuMTgsMCwxMy4wMjEsNS44NDEsMTMuMDIxLDEzLjAyYzAsNy4xNzUtNS44MzYsMTMuMDE1LTEzLjAxMSwxMy4wMTlsLTAuMDM1LDAuMDAzQzE2LjI3LDI5LjAyMSwxNi4yMjksMjkuMDE4LD'+
			'E2LjE4NiwyOS4wMTR6JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTExLjc0NywyMy40MjZjMC45ODgsMi4wNjEsMi4zMDcsMy4zOTEsMy43MzYsMy43Njl2LTMuNzY5SDExLjc0N3ogTTE3LjE5NCwyNy4xOGMxLjQwOS0wLjM5NiwyLjcxLTEuNzIxLDMuNjg0LTMuNzU0aC0zLjY4NCYjeGE7JiN4OTsmI3g5OyYjeDk7VjI3LjE4eiBNMjIuNzg4LDIzLjQyNmMtMC40MywxLjA0NC0wLjk0NSwxLjk2OC0xLjUzNSwyLjc1M2MxLjM2My0wLjY2LDIuNi0xLjYwNCwzLjYwNC0yLjc1M0gyMi43ODh6IE03LjgyMSwyMy40MjYmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjk3NywxLjEyLDIuMTg0LDIuMDUsMy41Miwy'+
			'LjcxM2MtMC41NzktMC43OC0xLjA4My0xLjY5LTEuNTAyLTIuNzEzSDcuODIxeiBNNS4wNjYsMTYuODU0YzAuMTMxLDEuNzUsMC42NTEsMy40LDEuNTQ4LDQuOTA5JiN4YTsmI3g5OyYjeDk7JiN4OTtsMi42MzQtMC4wNDdjLTAuNDM1LTEuNTEzLTAuNjg3LTMuMTQ3LTAuNzUyLTQuODYySDUuMDY2eiBNMjYuMTQ4LDIxLjcxNGMwLjgxMS0xLjQ2LDEuMzMtMy4xMSwxLjQ2My00Ljg2aC0zLjQ4MiYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjA2NCwxLjcxNC0wLjMxNiwzLjM0Ny0wLjc1MSw0Ljg2SDI2LjE0OHogTTIxLjU2MiwyMS43MTRjMC40ODUtMS40ODMsMC43NzktMy4xNiwwLjg1NC00Ljg2aC'+
			'01LjIyMXY0Ljg2SDIxLjU2MnomI3hhOyYjeDk7JiN4OTsmI3g5OyBNMTUuNDgzLDIxLjcxNHYtNC44NmgtNS4yNzFjMC4wNzQsMS42OTgsMC4zNjcsMy4zNzUsMC44NTIsNC44NkgxNS40ODN6IE0yNy42MTEsMTUuMTQzYy0wLjEzMy0xLjcyNi0wLjY2NC0zLjQxNS0xLjU0MS00Ljg5MyYjeGE7JiN4OTsmI3g5OyYjeDk7bC0yLjY4OCwwLjA0NmMwLjQzMiwxLjUwMywwLjY4MywzLjEzMiwwLjc0Nyw0Ljg0NkgyNy42MTF6IE0yMi40MTUsMTUuMTQzYy0wLjA3NC0xLjY4OS0wLjM2Ny0zLjM2LTAuODUtNC44NDRoLTQuMzcxdjQuODQ0JiN4YTsmI3g5OyYjeDk7JiN4OTtIMjIuNDE1eiBNMTUuNDgz'+
			'LDE1LjE0M3YtNC44NDRIMTEuMDZjLTAuNDgyLDEuNDc5LTAuNzc0LDMuMTUtMC44NDgsNC44NDRIMTUuNDgzeiBNOC40OTYsMTUuMTQzJiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4wNjUtMS43MDgsMC4zMTctMy4zMzcsMC43NDktNC44NDRINi41NzhjLTAuODYzLDEuNDczLTEuMzg0LDMuMTQ1LTEuNTExLDQuODQ0SDguNDk2eiBNMjQuODY4LDguNTg1JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuMDAyLTEuMTUxLTIuMjQyLTIuMS0zLjYxNi0yLjc2OGMwLjU5MiwwLjc4OSwxLjEwOSwxLjcxOCwxLjU0MSwyLjc2OEgyNC44Njh6IE0yMC44ODUsOC41ODUmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC45Nz'+
			'YtMi4wMzktMi4yNzgtMy4zNjgtMy42OS0zLjc2NnYzLjc2NkgyMC44ODV6IE0xNS40ODMsOC41ODV2LTMuNzhjLTEuNDMzLDAuMzgtMi43NTMsMS43MTQtMy43NDEsMy43OEgxNS40ODN6JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTkuODM0LDguNTg1YzAuNDIyLTEuMDMsMC45MjktMS45NDQsMS41MS0yLjcyNWMtMS4zMzksMC42NjItMi41NTEsMS41OTYtMy41MzYsMi43MjVIOS44MzR6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0xNi4zMzgsMy4wNzljNy4xMjUsMCwxMi45MjEsNS43OTUsMTIuOTIxLDEyLjkyYzAsNy4xMjEtNS43OTEsMTIuOTE1LTEyLjkxMSwxMi45MTkmI3hhOyYj'+
			'eDk7JiN4OTsmI3g5O2MtMC4wMTEsMC0wLjAyMiwwLjAwMy0wLjAzNSwwLjAwM2MtMC4wMzksMC0wLjA3Ny0wLjAwMy0wLjExNy0wLjAwN2MtNy4wNTgtMC4wNzctMTIuNzc3LTUuODQtMTIuNzc3LTEyLjkxNSYjeGE7JiN4OTsmI3g5OyYjeDk7QzMuNDE4LDguODc0LDkuMjE0LDMuMDc5LDE2LjMzOCwzLjA3OSBNMTEuNTg0LDguNjg2aDMuOTk5VjQuNjc4QzE0LjAwMSw1LjAzNiwxMi41ODMsNi41MjksMTEuNTg0LDguNjg2IE0xNy4wOTUsOC42ODZoMy45NDcmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC45ODktMi4xMzQtMi4zODgtMy42MTctMy45NDctMy45OTVWOC42ODYgTTIyLjcyNiw4LjY4Nm'+
			'gyLjM1OWMtMS4xMjItMS4zNDEtMi41NDktMi40MTktNC4xNjgtMy4xMzMmI3hhOyYjeDk7JiN4OTsmI3g5O0MyMS42MjMsNi40MTUsMjIuMjMzLDcuNDc0LDIyLjcyNiw4LjY4NiBNNy41OTEsOC42ODZoMi4zMTFjMC40ODMtMS4xOTQsMS4wODUtMi4yNCwxLjc3OC0zLjA5NCYjeGE7JiN4OTsmI3g5OyYjeDk7QzEwLjA5Miw2LjMwNCw4LjY5Niw3LjM2Nyw3LjU5MSw4LjY4NiBNMjQuMDMyLDE1LjI0M2gzLjY4N2MtMC4xMjMtMS44MzItMC42NzUtMy41NDgtMS41NjItNS4wNDRoLTIuOTA3JiN4YTsmI3g5OyYjeDk7JiN4OTtDMjMuNjk5LDExLjcyNCwyMy45NzIsMTMuNDI3LDI0LjAzMiwxNS4y'+
			'NDMgTTE3LjA5NSwxNS4yNDNoNS40MjVjLTAuMDctMS44MjEtMC4zODUtMy41NC0wLjg4Mi01LjA0NGgtNC41NDNWMTUuMjQzJiN4YTsmI3g5OyYjeDk7JiN4OTsgTTEwLjEwNywxNS4yNDNoNS40NzZ2LTUuMDQ0aC00LjU5NkMxMC40ODksMTEuNzAzLDEwLjE3NywxMy40MjIsMTAuMTA3LDE1LjI0MyBNNC45NTksMTUuMjQzaDMuNjM0JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4wNjItMS44MTYsMC4zMzYtMy41MiwwLjc4NS01LjA0NEg2LjUyMUM1LjYzNCwxMS42OTUsNS4wNzgsMTMuNDExLDQuOTU5LDE1LjI0MyBNMjMuMjQ1LDIxLjgxM2gyLjkwMyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuODkyLT'+
			'EuNTAyLDEuNDQ3LTMuMjE5LDEuNTctNS4wNmgtMy42ODdDMjMuOTcyLDE4LjU3NiwyMy42OTYsMjAuMjg0LDIzLjI0NSwyMS44MTMgTTE3LjA5NSwyMS44MTNoNC41MzkmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjUwMS0xLjUwOCwwLjgxNS0zLjIzMSwwLjg4Ni01LjA2aC01LjQyNVYyMS44MTMgTTEwLjk5MSwyMS44MTNoNC41OTJ2LTUuMDZoLTUuNDc2QzEwLjE3NywxOC41ODIsMTAuNDkxLDIwLjMwNiwxMC45OTEsMjEuODEzJiN4YTsmI3g5OyYjeDk7JiN4OTsgTTYuNTI4LDIxLjgxM2gyLjg1M2MtMC40NTEtMS41MjktMC43MjctMy4yMzctMC43ODgtNS4wNkg0Ljk1OUM1LjA4LDE4LjU5NSw1'+
			'LjYzNiwyMC4zMTIsNi41MjgsMjEuODEzIE0yMC45MTksMjYuNDQzJiN4YTsmI3g5OyYjeDk7JiN4OTtjMS42MTQtMC43MDksMy4wMzMtMS43ODMsNC4xNTUtMy4xMTdoLTIuMzU0QzIyLjIzLDI0LjUzMSwyMS42MjEsMjUuNTg2LDIwLjkxOSwyNi40NDMgTTE3LjA5NSwyNy4zMSYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuNTU3LTAuMzc2LDIuOTU0LTEuODU2LDMuOTQxLTMuOTgzaC0zLjk0MVYyNy4zMSBNMTUuNTgzLDI3LjMyMnYtMy45OTZoLTMuOTk0QzEyLjU4OCwyNS40NzcsMTQuMDA1LDI2Ljk2NiwxNS41ODMsMjcuMzIyJiN4YTsmI3g5OyYjeDk7JiN4OTsgTTExLjY3NiwyNi40MDdjLTAuNj'+
			'g5LTAuODUyLTEuMjg4LTEuODkxLTEuNzctMy4wODFINy42MDRDOC43MDQsMjQuNjM5LDEwLjA5NSwyNS42OTUsMTEuNjc2LDI2LjQwNyBNMTYuMzM4LDIuODc5JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTcuMjM0LDAtMTMuMTIsNS44ODYtMTMuMTIsMTMuMTJjMCw3LjE1Myw1LjgyMSwxMy4wMzcsMTIuOTc2LDEzLjExNWMwLjAyOSwwLjAwMywwLjA3NCwwLjAwNywwLjExOSwwLjAwNyYjeGE7JiN4OTsmI3g5OyYjeDk7YzcuMjY1LTAuMDA3LDEzLjE0Ni01Ljg5MywxMy4xNDYtMTMuMTIyQzI5LjQ1OSw4Ljc2NSwyMy41NzMsMi44NzksMTYuMzM4LDIuODc5TDE2LjMzOCwyLjg3OXogTTExLjkwMSw4'+
			'LjQ4NSYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuOTM3LTEuODk3LDIuMTU5LTMuMTQyLDMuNDgxLTMuNTQ3djMuNTQ3SDExLjkwMUwxMS45MDEsOC40ODV6IE0xNy4yOTUsOC40ODVWNC45NTVjMS4zMDIsMC40MjIsMi41MDUsMS42NiwzLjQzLDMuNTMxSDE3LjI5NSYjeGE7JiN4OTsmI3g5OyYjeDk7TDE3LjI5NSw4LjQ4NXogTTIyLjg1OSw4LjQ4NWMtMC4zNjktMC44ODgtMC44LTEuNjg4LTEuMjg2LTIuMzkyYzEuMTUxLDAuNjEyLDIuMTk3LDEuNDI2LDMuMDcyLDIuMzkySDIyLjg1OUwyMi44NTksOC40ODV6JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTguMDMxLDguNDg1YzAuODU2LTAuOTQzLDEuOD'+
			'c1LTEuNzQxLDIuOTkxLTIuMzQ2Yy0wLjQ3NCwwLjY5My0wLjg5NSwxLjQ3OS0xLjI1NSwyLjM0Nkg4LjAzMUw4LjAzMSw4LjQ4NXogTTIzLjUxNSwxMC4zOTkmI3hhOyYjeDk7JiN4OTsmI3g5O2gyLjUyN2MwLjgxNiwxLjQxLDEuMzE5LDMuMDA5LDEuNDYxLDQuNjQ0aC0zLjI3OEMyNC4xNTYsMTMuNDA1LDIzLjkxOCwxMS44NDYsMjMuNTE1LDEwLjM5OUwyMy41MTUsMTAuMzk5eiBNMTcuMjk1LDEwLjM5OSYjeGE7JiN4OTsmI3g5OyYjeDk7aDQuMTk3YzAuNDU3LDEuNDI3LDAuNzM4LDMuMDI1LDAuODE4LDQuNjQ0aC01LjAxNlYxMC4zOTlMMTcuMjk1LDEwLjM5OXogTTExLjEzMiwxMC4zOTlo'+
			'NC4yNXY0LjY0NGgtNS4wNjYmI3hhOyYjeDk7JiN4OTsmI3g5O0MxMC4zOTYsMTMuNDIxLDEwLjY3NiwxMS44MjMsMTEuMTMyLDEwLjM5OUwxMS4xMzIsMTAuMzk5eiBNNi42MzUsMTAuMzk5aDIuNDc4Yy0wLjQwNCwxLjQ1LTAuNjQ0LDMuMDEtMC43MTIsNC42NDRINS4xNzQmI3hhOyYjeDk7JiN4OTsmI3g5O0M1LjMxMiwxMy40MTUsNS44MTUsMTEuODE2LDYuNjM1LDEwLjM5OUw2LjYzNSwxMC4zOTl6IE0yNC4yMjUsMTYuOTU0aDMuMjc4Yy0wLjE0MiwxLjY1Ni0wLjYzNSwzLjIyMy0xLjQ2OSw0LjY1OWgtMi41MjMmI3hhOyYjeDk7JiN4OTsmI3g5O0MyMy45MTcsMjAuMTU3LDI0LjE1NywxOC'+
			'41OTIsMjQuMjI1LDE2Ljk1NEwyNC4yMjUsMTYuOTU0eiBNMTcuMjk1LDE2Ljk1NGg1LjAxNmMtMC4wOCwxLjYyOS0wLjM2MiwzLjIzMi0wLjgyMiw0LjY1OWgtNC4xOTMmI3hhOyYjeDk7JiN4OTsmI3g5O1YxNi45NTRMMTcuMjk1LDE2Ljk1NHogTTEwLjMxNiwxNi45NTRoNS4wNjZ2NC42NTloLTQuMjQ3QzEwLjY3NywyMC4xODUsMTAuMzk2LDE4LjU4MSwxMC4zMTYsMTYuOTU0TDEwLjMxNiwxNi45NTR6JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTUuMTc1LDE2Ljk1NEg4LjRjMC4wNjksMS42MzksMC4zMDksMy4yMDQsMC43MTUsNC42NTlINi42NDNDNS44MDgsMjAuMTc2LDUuMzE0LDE4LjYxLDUu'+
			'MTc1LDE2Ljk1NEw1LjE3NSwxNi45NTR6JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTIyLjg1NCwyMy41MjZoMS43NzljLTAuODc2LDAuOTYyLTEuOTE3LDEuNzcxLTMuMDU5LDIuMzc3QzIyLjA1OSwyNS4yMDQsMjIuNDg3LDI0LjQwOCwyMi44NTQsMjMuNTI2TDIyLjg1NCwyMy41MjZ6JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTE3LjI5NSwyMy41MjZoMy40MjRjLTAuOTIzLDEuODY1LTIuMTI1LDMuMDk5LTMuNDI0LDMuNTJWMjMuNTI2TDE3LjI5NSwyMy41MjZ6IE0xMS45MDcsMjMuNTI2aDMuNDc2djMuNTM2JiN4YTsmI3g5OyYjeDk7JiN4OTtDMTQuMDYzLDI2LjY1OCwxMi44NDMsMjUuNDE4LDExLj'+
			'kwNywyMy41MjZMMTEuOTA3LDIzLjUyNnogTTguMDQzLDIzLjUyNmgxLjcyOWMwLjM1NywwLjg2LDAuNzc0LDEuNjQyLDEuMjQ3LDIuMzMyJiN4YTsmI3g5OyYjeDk7JiN4OTtDOS45MDUsMjUuMjU0LDguODkzLDI0LjQ2MSw4LjA0MywyMy41MjZMOC4wNDMsMjMuNTI2eiIgZmlsbD0iIzFBMTcxQiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_url_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_image.onmouseover=function (e) {
			me._ht_url_image__img.style.visibility='hidden';
			me._ht_url_image__imgo.style.visibility='inherit';
		}
		me._ht_url_image.onmouseout=function (e) {
			me._ht_url_image__img.style.visibility='inherit';
			me._ht_url_image__imgo.style.visibility='hidden';
		}
		me._ht_url_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_image);
		el=me._tt_ht_url=document.createElement('div');
		els=me._tt_ht_url__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -49px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_url'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_url.style[domTransition]='';
				if (me._tt_ht_url.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_url.style.visibility=(Number(me._tt_ht_url.style.opacity)>0||!me._tt_ht_url.style.opacity)?'inherit':'hidden';
					me._tt_ht_url.ggVisible=true;
				}
				else {
					me._tt_ht_url.style.visibility="hidden";
					me._tt_ht_url.ggVisible=false;
				}
			}
		}
		me._tt_ht_url.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		el=me._tt_ht_url_white=document.createElement('div');
		els=me._tt_ht_url_white__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_url_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_url_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_url_white.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._tt_ht_url.appendChild(me._tt_ht_url_white);
		me._ht_url.appendChild(me._tt_ht_url);
		me.__div = me._ht_url;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
			hotspot.skinid = 'ht_url';
			hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_url_mouseover();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				hotspotTemplates['ht_url'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_url_mouseover(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};