(this["webpackJsonph-search"]=this["webpackJsonph-search"]||[]).push([[0],{47:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(18),s=a.n(r),i=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,81)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))},o=a(14),l=a(13),u={searchState:{}},h=["January","February","March","April","May","June","July","August","September","October","November","December"],d={debounce:function(e,t,a){var c;return function(){var n=this,r=arguments,s=function(){c=null,a||e.apply(n,r)},i=a&&!c;clearTimeout(c),c=setTimeout(s,t),i&&e.apply(n,r)}},getFormattedDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=e.getDate()+"";1===c.length&&(c="0".concat(c));var n=h[e.getMonth()],r=e.getFullYear(),s=e.getHours(),i=e.getMinutes();return i<10&&(i="0".concat(i)),t?"".concat(t," at ").concat(s,":").concat(i):a?"".concat(n," ").concat(c,", at ").concat(s,":").concat(i):"".concat(n," ").concat(c,", ").concat(r," at ").concat(s,":").concat(i)},timeAgo:function(e){if(!e)return null;var t="object"===typeof e?e:new Date(e),a=new Date,c=new Date(a-864e5),n=Math.round((a-t)/1e3),r=Math.round(n/60),s=a.toDateString()===t.toDateString(),i=c.toDateString()===t.toDateString(),o=a.getFullYear()===t.getFullYear();return n<5?"now":n<60?"".concat(n," seconds ago"):n<90?"about a minute ago":r<60?"".concat(r," minutes ago"):s?d.getFormattedDate(t,"Today"):i?d.getFormattedDate(t,"Yesterday"):o?d.getFormattedDate(t,!1,!0):d.getFormattedDate(t)},checkIsmobile:function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t},sortObjectArray:function(e,t){return e.sort((function(e,a){var c=void 0===e[t]?0:e[t];return(void 0===a[t]?0:a[t])-c}))}},j=d,b="SEARCH_REQUEST",p="SEARCH_SUCCESS",g="SEARCH_FAILURE",m={searchRequest:function(){return{type:b}},searchResolved:function(e,t){return{type:"success"===t?p:g,value:{response:e,status:t}}}},v=function(e,t){var a=t.value.response,c=Object(l.a)({},e),n=j.sortObjectArray(a.hits,"relevancy_score"),r=n.length>10?10:n.length,s=n.slice(0,r);return c.searchResult=s,c.searchLoading=!1,c.apiError=!1,c},f=function(e,t){return Object(l.a)(Object(l.a)({},e),{},{searchLoading:!0,apiError:!1})};var O=Object(o.b)({searchState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.searchState,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return f();case p:return v(e,t);case g:return Object(l.a)(Object(l.a)({},e),{},{searchLoading:!1,apiError:!0});default:return e}}}),x=a(20),y=a(9),k=a(10),w=a(12),N=a(11),S=a(23),D=a(3),T=(a(47),a(15)),F=a.n(T),R="".concat(window.location.protocol,"//hn.algolia.com/api/v1"),C="/search";F.a.defaults.baseURL=R;F.a.interceptors.request.use((function(e){return e})),F.a.interceptors.response.use((function(e){return function(e){if(200===e.status)return Object(l.a)({},e.data)}(e)}),(function(e){return function(e){var t=e.response;return Promise.reject(Object(l.a)({},t))}(e)}));var E={all:F.a.all,get:function(e,t){return F.a.get(e,t)},post:function(e,t,a){return F.a.post(e,t,a)}},A=function(e){return{searchQuery:function(t){e(m.searchRequest());var a={query:t};return E.get(C,{params:a}).then((function(t){e(m.searchResolved(t,"success"))}),(function(t){return e(m.searchResolved(t,"failure")),Promise.reject(t)}))}}},_=(a(66),a(1)),z=function(e){var t=e.keyToDisplay,a=e.value,c=e.separator;return Object(_.jsx)(n.a.Fragment,{children:Object(_.jsxs)("div",{className:"attributes",children:[!!t&&Object(_.jsxs)("div",{className:"key",children:[t," :"]}),Object(_.jsx)("div",{className:"vaue",children:a}),c&&Object(_.jsx)("div",{className:"separator",children:c})]})})},M=a(25),P=a.n(M),q=(a(68),a(69),function(e){Object(w.a)(a,e);var t=Object(N.a)(a);function a(e){var c;return Object(y.a)(this,a),(c=t.call(this,e)).getTimeElapsedString=function(e){return j.timeAgo(e)},c.searchData=e.searchData,c.searchQuery=e.searchQuery,c.highlightText=e.highlightText?e.highlightText.split(" "):[],c}return Object(k.a)(a,[{key:"render",value:function(){var e=this.searchData,t=e.title,a=e.author,c=e.url,n=e.created_at,r=e.num_comments,s=e.story_text,i=e.relevancy_score;return Object(_.jsxs)("div",{className:"card card-hover search-card",children:[Object(_.jsxs)("section",{className:"section-top",children:[Object(_.jsx)("span",{className:"title",children:!!t&&Object(_.jsx)(P.a,{highlightClassName:"higlight-text",searchWords:this.highlightText,autoEscape:!0,textToHighlight:t})}),Object(_.jsx)("span",{className:"url",children:!!c&&Object(_.jsxs)("a",{href:c,target:"_blank",children:["[ ",c," ]"]})})]}),Object(_.jsxs)("section",{className:"section-bottom",children:[Object(_.jsx)(z,{keyToDisplay:"Score",value:i,separator:"|"}),Object(_.jsx)(z,{keyToDisplay:"Author",value:a,separator:"|"}),Object(_.jsx)(z,{value:this.getTimeElapsedString(n),separator:"|"}),Object(_.jsx)(z,{value:"".concat(r," comments")})]}),Object(_.jsx)("section",{className:"section-story-text",children:!!s&&Object(_.jsx)(P.a,{highlightClassName:"higlight-text",searchWords:this.highlightText,autoEscape:!0,textToHighlight:s})})]})}}]),a}(c.Component)),L=a(38),H={appName:"H-Search",searchPlaceholder:"Search here...",apiErrorMessage:"Error!! Please try after sometime",noResult:"No Result Found",fetchingResult:"Fetching results...",text404:"404",pageNotFound:"Page Not Found"},Q=(a(70),function(e){var t=e.keyPressMethodToCall,a=Object(c.useState)(""),n=Object(L.a)(a,2),r=n[0],s=n[1];return Object(_.jsxs)("div",{className:"input-container",children:[Object(_.jsx)("input",{type:"text",value:r,onChange:function(e){s(e.target.value),t(e.target.value)},className:"input-text",placeholder:H.searchPlaceholder}),Object(_.jsx)("span",{className:"icon search-icon",children:"\u260c"})]})}),J=(a(71),function(e){var t=e.loadingText;return Object(_.jsxs)("div",{className:"loader-container",children:[Object(_.jsxs)("div",{className:"lds-ring",children:[Object(_.jsx)("div",{}),Object(_.jsx)("div",{}),Object(_.jsx)("div",{}),Object(_.jsx)("div",{})]}),Object(_.jsx)("div",{className:"loader-text",children:t})]})}),U=(a(72),function(e){Object(w.a)(a,e);var t=Object(N.a)(a);function a(e){var c;return Object(y.a)(this,a),(c=t.call(this,e)).search=function(e){c.searchString=e,c.fetchSearchResult()},c.fetchSearchResult=j.debounce((function(){c.props.searchQuery(c.searchString)}),250),c.pageRef=null,c.currentCardDragged=null,c.searchString="",c}return Object(k.a)(a,[{key:"componentDidMount",value:function(){this.props.searchQuery()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.searchStateObj,a=t.searchResult,c=t.searchLoading,r=t.apiError;return Object(_.jsxs)("section",{className:"page search-page",children:[Object(_.jsx)("div",{className:"searchContainer",children:Object(_.jsx)(Q,{keyPressMethodToCall:this.search})}),!c&&a&&a.length>0&&Object(_.jsx)(n.a.Fragment,{children:a.map((function(t,a){return Object(_.jsx)(q,{searchData:t,highlightText:e.searchString},"search-card-".concat(a))}))}),a&&0===a.length&&Object(_.jsx)("div",{className:"error-message",children:H.noResult}),c&&Object(_.jsx)(J,{loadingText:H.fetchingResult}),r&&Object(_.jsx)("div",{className:"error-message",children:H.apiError})]})}}]),a}(c.Component)),I=A,Y=Object(o.c)(D.g,Object(x.b)((function(e){return{searchStateObj:e.searchState}}),I))(U),W=(a(74),function(e){Object(w.a)(a,e);var t=Object(N.a)(a);function a(){return Object(y.a)(this,a),t.apply(this,arguments)}return Object(k.a)(a,[{key:"render",value:function(){return Object(_.jsx)(n.a.Fragment,{children:Object(_.jsxs)("section",{className:"page page-404",children:[Object(_.jsx)("div",{className:"title-404",children:H.text404}),Object(_.jsx)("div",{className:"description-404",children:H.pageNotFound})]})})}}]),a}(n.a.Component)),B=(a(75),function(){return Object(_.jsx)("header",{className:"app-header-container",children:Object(_.jsx)("div",{className:"app-header",children:Object(_.jsx)("div",{className:"page-title",children:H.appName})})})}),G=(a(76),a(77),function(e){Object(w.a)(a,e);var t=Object(N.a)(a);function a(){return Object(y.a)(this,a),t.apply(this,arguments)}return Object(k.a)(a,[{key:"render",value:function(){return Object(_.jsxs)("div",{className:"app-container",children:[Object(_.jsx)(B,{}),Object(_.jsx)("main",{className:"page-container",children:this.props.children})]})}}]),a}(c.Component)),K=function(e){Object(w.a)(a,e);var t=Object(N.a)(a);function a(e){return Object(y.a)(this,a),t.call(this,e)}return Object(k.a)(a,[{key:"render",value:function(){return Object(_.jsx)(S.a,{children:Object(_.jsx)(G,{children:Object(_.jsxs)(D.d,{children:[Object(_.jsx)(D.b,{exact:!0,path:"/",render:function(){return Object(_.jsx)(D.a,{to:"/search"})}}),Object(_.jsx)(D.b,{path:"/search",component:Y}),Object(_.jsx)(D.b,{component:W})]})})})}}]),a}(c.Component),V=(a(78),a(79),Object(o.d)(O));s.a.render(Object(_.jsx)(x.a,{store:V,children:Object(_.jsx)(K,{})}),document.getElementById("root")),i()}},[[80,1,2]]]);
//# sourceMappingURL=main.290c68ce.chunk.js.map