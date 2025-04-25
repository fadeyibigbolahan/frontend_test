import{r as q,j as G}from"./index-64oIz3hZ.js";function H(e,r){return r||(r=e.slice(0)),e.raw=r,e}var Ee=function(){function e(n){var t=this;this._insertTag=function(a){t.container.insertBefore(a,t.tags.length===0?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling),t.tags.push(a)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(i){var s=document.createElement("style");return s.setAttribute("data-emotion",i.key),i.nonce!==void 0&&s.setAttribute("nonce",i.nonce),s.appendChild(document.createTextNode("")),s.setAttribute("data-s",""),s}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var a=function(i){if(i.sheet)return i.sheet;for(var s=0;s<document.styleSheets.length;s++)if(document.styleSheets[s].ownerNode===i)return document.styleSheets[s]}(t);try{a.insertRule(n,a.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},e}(),C="-ms-",g="-webkit-",Ne=Math.abs,Q=String.fromCharCode,Oe=Object.assign;function be(e){return e.trim()}function p(e,r,n){return e.replace(r,n)}function ne(e,r){return e.indexOf(r)}function $(e,r){return 0|e.charCodeAt(r)}function L(e,r,n){return e.slice(r,n)}function N(e){return e.length}function ae(e){return e.length}function K(e,r){return r.push(e),e}var X=1,I=1,ye=0,A=0,k=0,M="";function D(e,r,n,t,a,i,s){return{value:e,root:r,parent:n,type:t,props:a,children:i,line:X,column:I,length:s,return:""}}function W(e,r){return Oe(D("",null,null,"",null,null,0),e,{length:-e.length},r)}function Re(){return k=A>0?$(M,--A):0,I--,k===10&&(I=1,X--),k}function S(){return k=A<ye?$(M,A++):0,I++,k===10&&(I=1,X++),k}function R(){return $(M,A)}function U(){return A}function V(e,r){return L(M,e,r)}function F(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function we(e){return X=I=1,ye=N(M=e),A=0,[]}function ke(e){return M="",e}function Y(e){return be(V(A-1,te(e===91?e+2:e===40?e+1:e)))}function _e(e){for(;(k=R())&&k<33;)S();return F(e)>2||F(k)>3?"":" "}function Pe(e,r){for(;--r&&S()&&!(k<48||k>102||k>57&&k<65||k>70&&k<97););return V(e,U()+(r<6&&R()==32&&S()==32))}function te(e){for(;S();)switch(k){case e:return A;case 34:case 39:e!==34&&e!==39&&te(k);break;case 40:e===41&&te(e);break;case 92:S()}return A}function Ge(e,r){for(;S()&&e+k!==57&&(e+k!==84||R()!==47););return"/*"+V(r,A-1)+"*"+Q(e===47?e:S())}function Te(e){for(;!F(R());)S();return V(e,A)}function Ie(e){return ke(Z("",null,null,null,[""],e=we(e),0,[0],e))}function Z(e,r,n,t,a,i,s,f,w){for(var v=0,h=0,c=s,l=0,u=0,o=0,b=1,j=1,d=1,y=0,x="",P=a,_=i,E=t,m=x;j;)switch(o=y,y=S()){case 40:if(o!=108&&m.charCodeAt(c-1)==58){ne(m+=p(Y(y),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:m+=Y(y);break;case 9:case 10:case 13:case 32:m+=_e(o);break;case 92:m+=Pe(U()-1,7);continue;case 47:switch(R()){case 42:case 47:K(Me(Ge(S(),U()),r,n),w);break;default:m+="/"}break;case 123*b:f[v++]=N(m)*d;case 125*b:case 59:case 0:switch(y){case 0:case 125:j=0;case 59+h:u>0&&N(m)-c&&K(u>32?se(m+";",t,n,c-1):se(p(m," ","")+";",t,n,c-2),w);break;case 59:m+=";";default:if(K(E=ie(m,r,n,v,h,a,f,x,P=[],_=[],c),i),y===123)if(h===0)Z(m,r,E,E,P,i,c,f,_);else switch(l){case 100:case 109:case 115:Z(e,E,E,t&&K(ie(e,E,E,0,0,a,f,x,a,P=[],c),_),a,_,c,f,t?P:_);break;default:Z(m,E,E,E,[""],_,0,f,_)}}v=h=u=0,b=d=1,x=m="",c=s;break;case 58:c=1+N(m),u=o;default:if(b<1){if(y==123)--b;else if(y==125&&b++==0&&Re()==125)continue}switch(m+=Q(y),y*b){case 38:d=h>0?1:(m+="\f",-1);break;case 44:f[v++]=(N(m)-1)*d,d=1;break;case 64:R()===45&&(m+=Y(S())),l=R(),h=c=N(x=m+=Te(U())),y++;break;case 45:o===45&&N(m)==2&&(b=0)}}return i}function ie(e,r,n,t,a,i,s,f,w,v,h){for(var c=a-1,l=a===0?i:[""],u=ae(l),o=0,b=0,j=0;o<t;++o)for(var d=0,y=L(e,c+1,c=Ne(b=s[o])),x=e;d<u;++d)(x=be(b>0?l[d]+" "+y:p(y,/&\f/g,l[d])))&&(w[j++]=x);return D(e,r,n,a===0?"rule":f,w,v,h)}function Me(e,r,n){return D(e,r,n,"comm",Q(k),L(e,2,-2),0)}function se(e,r,n,t){return D(e,r,n,"decl",L(e,0,t),L(e,t+1,-1),t)}function xe(e,r){switch(function(n,t){return(((t<<2^$(n,0))<<2^$(n,1))<<2^$(n,2))<<2^$(n,3)}(e,r)){case 5103:return g+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return g+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return g+e+"-moz-"+e+C+e+e;case 6828:case 4268:return g+e+C+e+e;case 6165:return g+e+C+"flex-"+e+e;case 5187:return g+e+p(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return g+e+C+"flex-item-"+p(e,/flex-|-self/,"")+e;case 4675:return g+e+C+"flex-line-pack"+p(e,/align-content|flex-|-self/,"")+e;case 5548:return g+e+C+p(e,"shrink","negative")+e;case 5292:return g+e+C+p(e,"basis","preferred-size")+e;case 6060:return g+"box-"+p(e,"-grow","")+g+e+C+p(e,"grow","positive")+e;case 4554:return g+p(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return p(p(p(e,/(zoom-|grab)/,g+"$1"),/(image-set)/,g+"$1"),e,"")+e;case 5495:case 3959:return p(e,/(image-set\([^]*)/,g+"$1$`$1");case 4968:return p(p(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+g+e+e;case 4095:case 3583:case 4068:case 2532:return p(e,/(.+)-inline(.+)/,g+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(N(e)-1-r>6)switch($(e,r+1)){case 109:if($(e,r+4)!==45)break;case 102:return p(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1-moz-"+($(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~ne(e,"stretch")?xe(p(e,"stretch","fill-available"),r)+e:e}break;case 4949:if($(e,r+1)!==115)break;case 6444:switch($(e,N(e)-3-(~ne(e,"!important")&&10))){case 107:return p(e,":",":"+g)+e;case 101:return p(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+g+($(e,14)===45?"inline-":"")+"box$3$1"+g+"$2$3$1"+C+"$2box$3")+e}break;case 5936:switch($(e,r+11)){case 114:return g+e+C+p(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return g+e+C+p(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return g+e+C+p(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return g+e+C+e+e}return e}function T(e,r){for(var n="",t=ae(e),a=0;a<t;a++)n+=r(e[a],a,e,r)||"";return n}function We(e,r,n,t){switch(e.type){case"@import":case"decl":return e.return=e.return||e.value;case"comm":return"";case"@keyframes":return e.return=e.value+"{"+T(e.children,t)+"}";case"rule":e.value=e.props.join(",")}return N(n=T(e.children,t))?e.return=e.value+"{"+n+"}":""}function qe(e){var r=Object.create(null);return function(n){return r[n]===void 0&&(r[n]=e(n)),r[n]}}var Be=function(e,r,n){for(var t=0,a=0;t=a,a=R(),t===38&&a===12&&(r[n]=1),!F(a);)S();return V(e,A)},oe=new WeakMap,Le=function(e){if(e.type==="rule"&&e.parent&&!(e.length<1)){for(var r=e.value,n=e.parent,t=e.column===n.column&&e.line===n.line;n.type!=="rule";)if(!(n=n.parent))return;if((e.props.length!==1||r.charCodeAt(0)===58||oe.get(n))&&!t){oe.set(e,!0);for(var a=[],i=function(h,c){return ke(function(l,u){var o=-1,b=44;do switch(F(b)){case 0:b===38&&R()===12&&(u[o]=1),l[o]+=Be(A-1,u,o);break;case 2:l[o]+=Y(b);break;case 4:if(b===44){l[++o]=R()===58?"&\f":"",u[o]=l[o].length;break}default:l[o]+=Q(b)}while(b=S());return l}(we(h),c))}(r,a),s=n.props,f=0,w=0;f<i.length;f++)for(var v=0;v<s.length;v++,w++)e.props[w]=a[f]?i[f].replace(/&\f/g,s[v]):s[v]+" "+i[f]}}},Fe=function(e){if(e.type==="decl"){var r=e.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(e.return="",e.value="")}},He=[function(e,r,n,t){if(e.length>-1&&!e.return)switch(e.type){case"decl":e.return=xe(e.value,e.length);break;case"@keyframes":return T([W(e,{value:p(e.value,"@","@"+g)})],t);case"rule":if(e.length)return function(a,i){return a.map(i).join("")}(e.props,function(a){switch(function(i,s){return(i=/(::plac\w+|:read-\w+)/.exec(i))?i[0]:i}(a)){case":read-only":case":read-write":return T([W(e,{props:[p(a,/:(read-\w+)/,":-moz-$1")]})],t);case"::placeholder":return T([W(e,{props:[p(a,/:(plac\w+)/,":-webkit-input-$1")]}),W(e,{props:[p(a,/:(plac\w+)/,":-moz-$1")]}),W(e,{props:[p(a,/:(plac\w+)/,C+"input-$1")]})],t)}return""})}}],Ve={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Je=/[A-Z]|^ms/g,Ke=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ce=function(e){return e.charCodeAt(1)===45},ce=function(e){return e!=null&&typeof e!="boolean"},ee=qe(function(e){return Ce(e)?e:e.replace(Je,"-$&").toLowerCase()}),le=function(e,r){switch(e){case"animation":case"animationName":if(typeof r=="string")return r.replace(Ke,function(n,t,a){return O={name:t,styles:a,next:O},t})}return Ve[e]===1||Ce(e)||typeof r!="number"||r===0?r:r+"px"};function B(e,r,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":if(n.anim===1)return O={name:n.name,styles:n.styles,next:O},n.name;if(n.styles!==void 0){var t=n.next;if(t!==void 0)for(;t!==void 0;)O={name:t.name,styles:t.styles,next:O},t=t.next;var a=n.styles+";";return a}return function(w,v,h){var c="";if(Array.isArray(h))for(var l=0;l<h.length;l++)c+=B(w,v,h[l])+";";else for(var u in h){var o=h[u];if(typeof o!="object")v!=null&&v[o]!==void 0?c+=u+"{"+v[o]+"}":ce(o)&&(c+=ee(u)+":"+le(u,o)+";");else if(!Array.isArray(o)||typeof o[0]!="string"||v!=null&&v[o[0]]!==void 0){var b=B(w,v,o);switch(u){case"animation":case"animationName":c+=ee(u)+":"+b+";";break;default:c+=u+"{"+b+"}"}}else for(var j=0;j<o.length;j++)ce(o[j])&&(c+=ee(u)+":"+le(u,o[j])+";")}return c}(e,r,n);case"function":if(e!==void 0){var i=O,s=n(e);return O=i,B(e,r,s)}break}if(r==null)return n;var f=r[n];return f!==void 0?f:n}var O,ue=/label:\s*([^\s;\n{]+)\s*(;|$)/g,re=function(e,r,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var t=!0,a="";O=void 0;var i=e[0];i==null||i.raw===void 0?(t=!1,a+=B(n,r,i)):a+=i[0];for(var s=1;s<e.length;s++)a+=B(n,r,e[s]),t&&(a+=i[s]);ue.lastIndex=0;for(var f,w="";(f=ue.exec(a))!==null;)w+="-"+f[1];var v=function(h){for(var c,l=0,u=0,o=h.length;o>=4;++u,o-=4)c=1540483477*(65535&(c=255&h.charCodeAt(u)|(255&h.charCodeAt(++u))<<8|(255&h.charCodeAt(++u))<<16|(255&h.charCodeAt(++u))<<24))+(59797*(c>>>16)<<16),l=1540483477*(65535&(c^=c>>>24))+(59797*(c>>>16)<<16)^1540483477*(65535&l)+(59797*(l>>>16)<<16);switch(o){case 3:l^=(255&h.charCodeAt(u+2))<<16;case 2:l^=(255&h.charCodeAt(u+1))<<8;case 1:l=1540483477*(65535&(l^=255&h.charCodeAt(u)))+(59797*(l>>>16)<<16)}return(((l=1540483477*(65535&(l^=l>>>13))+(59797*(l>>>16)<<16))^l>>>15)>>>0).toString(36)}(a)+w;return{name:v,styles:a,next:O}};function $e(e,r,n){var t="";return n.split(" ").forEach(function(a){e[a]!==void 0?r.push(e[a]+";"):t+=a+" "}),t}var Ue=function(e,r,n){(function(i,s,f){var w=i.key+"-"+s.name;f===!1&&i.registered[w]===void 0&&(i.registered[w]=s.styles)})(e,r,n);var t=e.key+"-"+r.name;if(e.inserted[r.name]===void 0){var a=r;do e.insert(r===a?"."+t:"",a,e.sheet,!0),a=a.next;while(a!==void 0)}};function fe(e,r){if(e.inserted[r.name]===void 0)return e.insert("",r,e.sheet,!0)}function de(e,r,n){var t=[],a=$e(e,t,n);return t.length<2?n:a+r(t)}var he,pe,ve,ge,me,Ye=function e(r){for(var n="",t=0;t<r.length;t++){var a=r[t];if(a!=null){var i=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))i=e(a);else for(var s in i="",a)a[s]&&s&&(i&&(i+=" "),i+=s);break;default:i=a}i&&(n&&(n+=" "),n+=i)}}return n},Ae=function(e){var r=function(t){var a=t.key;if(a==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(d){d.getAttribute("data-emotion").indexOf(" ")!==-1&&(document.head.appendChild(d),d.setAttribute("data-s",""))})}var s=t.stylisPlugins||He,f,w,v={},h=[];f=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+a+' "]'),function(d){for(var y=d.getAttribute("data-emotion").split(" "),x=1;x<y.length;x++)v[y[x]]=!0;h.push(d)});var c=[Le,Fe],l,u,o=[We,(u=function(d){l.insert(d)},function(d){d.root||(d=d.return)&&u(d)})],b=function(d){var y=ae(d);return function(x,P,_,E){for(var m="",z=0;z<y;z++)m+=d[z](x,P,_,E)||"";return m}}(c.concat(s,o));w=function(d,y,x,P){l=x,T(Ie(d?d+"{"+y.styles+"}":y.styles),b),P&&(j.inserted[y.name]=!0)};var j={key:a,sheet:new Ee({key:a,container:f,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:v,registered:{},insert:w};return j.sheet.hydrate(h),j}({key:"css"});r.sheet.speedy=function(t){this.isSpeedy=t},r.compat=!0;var n=function(){for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];var s=re(a,r.registered,void 0);return Ue(r,s,!1),r.key+"-"+s.name};return{css:n,cx:function(){for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return de(r.registered,n,Ye(a))},injectGlobal:function(){for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];var s=re(a,r.registered);fe(r,s)},keyframes:function(){for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];var s=re(a,r.registered),f="animation-"+s.name;return fe(r,{name:s.name,styles:"@keyframes "+f+"{"+s.styles+"}"}),f},hydrate:function(t){t.forEach(function(a){r.inserted[a]=!0})},flush:function(){r.registered={},r.inserted={},r.sheet.flush()},sheet:r.sheet,cache:r,getRegisteredStyles:$e.bind(null,r.registered),merge:de.bind(null,r.registered,n)}}(),Ze=Ae.cx,J=Ae.css,je=J(he||(he=H([`
  content: '';
  position: absolute;
  top: 0;
  height: var(--tree-line-height);
  box-sizing: border-box;
`]))),Qe=J(pe||(pe=H([`
  display: flex;
  padding-inline-start: 0;
  margin: 0;
  padding-top: var(--tree-line-height);
  position: relative;

  ::before {
    `,`;
    left: calc(50% - var(--tree-line-width) / 2);
    width: 0;
    border-left: var(--tree-line-width) var(--tree-node-line-style)
      var(--tree-line-color);
  }
`])),je),Xe=J(ve||(ve=H([`
  flex: auto;
  text-align: center;
  list-style-type: none;
  position: relative;
  padding: var(--tree-line-height) var(--tree-node-padding) 0
    var(--tree-node-padding);
`]))),De=J(ge||(ge=H([`
  ::before,
  ::after {
    `,`;
    right: 50%;
    width: 50%;
    border-top: var(--tree-line-width) var(--tree-node-line-style)
      var(--tree-line-color);
  }
  ::after {
    left: 50%;
    border-left: var(--tree-line-width) var(--tree-node-line-style)
      var(--tree-line-color);
  }

  :only-of-type {
    padding: 0;
    ::after,
    :before {
      display: none;
    }
  }

  :first-of-type {
    ::before {
      border: 0 none;
    }
    ::after {
      border-radius: var(--tree-line-border-radius) 0 0 0;
    }
  }

  :last-of-type {
    ::before {
      border-right: var(--tree-line-width) var(--tree-node-line-style)
        var(--tree-line-color);
      border-radius: 0 var(--tree-line-border-radius) 0 0;
    }
    ::after {
      border: 0 none;
    }
  }
`])),je);function Se(e){var r=e.children,n=e.label;return q.createElement("li",{className:Ze(Xe,De,e.className)},n,q.Children.count(r)>0&&q.createElement("ul",{className:Qe},r))}function rr(e){var r=e.children,n=e.label,t=e.lineHeight,a=t===void 0?"20px":t,i=e.lineWidth,s=i===void 0?"1px":i,f=e.lineColor,w=f===void 0?"black":f,v=e.nodePadding,h=v===void 0?"5px":v,c=e.lineStyle,l=c===void 0?"solid":c,u=e.lineBorderRadius,o=u===void 0?"5px":u;return q.createElement("ul",{className:J(me||(me=H([`
        padding-inline-start: 0;
        margin: 0;
        display: flex;

        --line-height: `,`;
        --line-width: `,`;
        --line-color: `,`;
        --line-border-radius: `,`;
        --line-style: `,`;
        --node-padding: `,`;

        --tree-line-height: var(--line-height, 20px);
        --tree-line-width: var(--line-width, 1px);
        --tree-line-color: var(--line-color, black);
        --tree-line-border-radius: var(--line-border-radius, 5px);
        --tree-node-line-style: var(--line-style, solid);
        --tree-node-padding: var(--node-padding, 5px);
      `])),a,s,w,o,l,h)},q.createElement(Se,{label:n},r))}const ze=({node:e})=>G.jsx(Se,{label:G.jsxs("div",{className:"bg-white shadow p-2 rounded-md text-sm text-center border border-gray-300",children:[G.jsx("strong",{children:e.username}),G.jsxs("div",{className:"text-sm",children:[e.package.name," (",e.package.bv," bv)"]}),G.jsxs("div",{className:"text-sm",children:["Total BV: ",e.bv]})]}),children:e.referrals.map(r=>G.jsx(ze,{node:r},r.username))});export{rr as G,ze as R};
