(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,a){e.exports=a(312)},122:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},311:function(e,t,a){},312:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(12),c=a.n(r),o=(a(122),a(123),a(9)),i=a(14),s=a(13),u=a(15),d=a(110),m=a.n(d),p=a(111),f=a(112),h=(a(148),function(e){var t=e.text,a=e.selected,n=e.selectPlaceHandle;return l.a.createElement("div",{title:t,className:a?"marker selected":"marker",onClick:function(){return n()}},l.a.createElement(p.a,{icon:f.a,size:"3x"}))}),b=(a(149),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).onSelectMaker=function(e){var t=a.props,n=t.filterhandler,l=t.selectPlaceHandle,r=t.selectedPlace;l(e.id!==r?e.id:null),n(e.id!==r?e.name:"")},a.onApiLoaded=function(e,t){t.event.addListener(e,"tilesloaded",function(){[].slice.apply(document.querySelectorAll("#map button")).forEach(function(e){e.setAttribute("tabindex","-1")}),[].slice.apply(document.querySelectorAll("#map a")).forEach(function(e){e.setAttribute("tabindex","-1")})}),a.props.onGoogleMapApiLoad()},a.render=function(){var e=a.props,t=e.center,n=e.apiKey,r=e.places,c=e.selectedPlace;return l.a.createElement("div",{className:"map",id:"map",tabIndex:"-1"},l.a.createElement(m.a,{bootstrapURLKeys:{key:n},defaultCenter:t,yesIWantToUseGoogleMapApiInternals:!0,tabIndex:"-1",defaultZoom:16,onGoogleApiLoaded:function(e){var t=e.map,n=e.maps;return a.onApiLoaded(t,n)}},r.map(function(e){return l.a.createElement(h,{key:e.id,text:e.name,tabIndex:"-1",lat:e.coordinates.latitude,lng:e.coordinates.longitude,selected:e.id===c,selectPlaceHandle:function(){return a.onSelectMaker(e)}})})))},a}return Object(u.a)(t,e),t}(n.Component)),g=a(324),E=a(325),y=a(326),P=a(313),v=a(314),w=a(315),O=a(327),k=a(316),C=a(317),j=a(318),x=a(113),A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.toggle=function(){a.setState({isOpen:!a.state.isOpen})},a.onChangeHandler=function(e){var t=a.props,n=t.selectPlaceHandle,l=t.filterhandler;e.length>0?(n(e[0].id),l(e[0].name)):n(null)},a.render=function(){var e=a.props,t=e.places,n=e.filterhandler;return l.a.createElement("header",null,l.a.createElement(P.a,{color:"dark",dark:!0,expand:"md"},l.a.createElement(v.a,{style:{color:"white"}},"Vizinhan\xe7a Blumenau"),l.a.createElement(w.a,{onClick:a.toggle}),l.a.createElement(O.a,{isOpen:a.state.isOpen,navbar:!0},l.a.createElement(k.a,{className:"ml-auto",navbar:!0},l.a.createElement(C.a,null,l.a.createElement(x.Typeahead,{id:"search-bar",tabIndex:"1",placeholder:"Pesquisar estabelecimento","aria-label":"Pesquisar estabelecimento",onChange:function(e){return a.onChangeHandler(e)},onInputChange:function(e){return n(e)},options:t,filterBy:["name"],labelKey:"name"})),l.a.createElement(C.a,{tabIndex:"-1 "},l.a.createElement(j.a,{tabIndex:"3",href:"https://github.com/antomarsi/blumenau_places",target:"_blank"},"GitHub"))))))},a}return Object(u.a)(t,e),t}(n.Component),S=function e(t){var a=this;Object(o.a)(this,e),this.url="https://api.yelp.com/v3/",this.bussiness_search="/businesses/search",this.cors="https://cors-anywhere.herokuapp.com/",this.getBussinessSearchUrl=function(){return"".concat(a.cors).concat(a.url).concat(a.bussiness_search)},this.findBlumenau=function(){return fetch("".concat(a.getBussinessSearchUrl(),"?location=Blumenau+Santa+Catarina&limit=50"),{mode:"cors",headers:{Authorization:"Bearer ".concat(a.apikey),"Content-Type":"application/json"}}).then(function(e){return e.json()}).catch(function(e){console.error(e.message)})},this.apikey=t},H=a(115),I=a(319),L=a(320),_=a(321),B=a(322),N=a(323),G=(a(311),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.places,a=e.selectPlaceHandle,n=e.selectedPlace;return l.a.createElement("ul",{tabIndex:"-1",className:"sidebar"},t.map(function(e,t){return l.a.createElement("li",{key:e.id,tabIndex:"2"},l.a.createElement(I.a,{outline:!0,color:e.id===n?"success":"",id:e.id,style:{width:"100%",marginBottom:"1rem"},onClick:function(){return a(e.id)}},l.a.createElement(L.a,null,e.name),l.a.createElement(_.a,null,e.image_url&&e.image_url&&l.a.createElement(B.a,{top:!0,width:"100%",src:e.image_url,alt:e.name}),e.location.address1&&l.a.createElement(N.a,null,"".concat(e.location.address1)))))}),t.length<=0&&l.a.createElement(I.a,{outline:!0,color:"danger",style:{width:"100%",marginBottom:"1rem"}},l.a.createElement(L.a,null,"Nenhum resultado encontrado")))}}]),t}(n.Component)),K={backgroundColor:"#343a40"},M={backgroundColor:"#343a40",paddingRight:"0"},U=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).YELP_API_KEY="QjVC2QvHNdWRktXHpZlxSuWHI9lX1wy_iopCzsyO7HENNSif2t2KuoIymwL5kl5k_YNHNplif_ojGZd-CLPGLVEAaR4BMod20JeCJ4V83N_7N2H2nsVyFlZFe55-XHYx",a.state={isOpen:!1,center:{lat:-26.9187,lng:-49.066},places:[],filter:"",selectedPlace:null},a.onGoogleMapApiLoad=function(){new S(a.YELP_API_KEY).findBlumenau().then(function(e){a.setState({places:e.businesses.sort(function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}),center:{lat:e.region.center.latitude,lng:e.region.center.longitude}})})},a.setSelectedPlace=function(e){a.setState({selectedPlace:e})},a.setFilterPlace=function(e){a.setState({filter:e})},a.toggle=function(){a.setState({isOpen:!a.state.isOpen})},a.render=function(){return l.a.createElement("div",null,l.a.createElement(A,{places:a.state.places,selectPlaceHandle:a.setSelectedPlace,filterhandler:a.setFilterPlace}),l.a.createElement(g.a,{fluid:!0},l.a.createElement(E.a,null,l.a.createElement(y.a,{xs:"12",sm:"3",style:K},l.a.createElement(G,{places:a.state.places.filter(function(e){return e.name.toLowerCase().includes(a.state.filter.toLowerCase())}),selectPlaceHandle:a.setSelectedPlace,selectedPlace:a.state.selectedPlace})),l.a.createElement(y.a,{xs:"12",sm:"9",style:M},l.a.createElement(b,{tabIndex:"-1",places:a.state.places.filter(function(e){return e.name.toLowerCase().includes(a.state.filter.toLowerCase())}),center:a.state.center,apiKey:"AIzaSyDlH8Id0Zsx_UuWS6nXc5K1ExPq5-U6Auw",language:"pt-BR",filterhandler:a.setFilterPlace,selectPlaceHandle:a.setSelectedPlace,selectedPlace:a.state.selectedPlace,onGoogleMapApiLoad:a.onGoogleMapApiLoad})))))},a}return Object(u.a)(t,e),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[117,1,2]]]);
//# sourceMappingURL=main.83b15cf2.chunk.js.map