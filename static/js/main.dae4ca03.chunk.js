(this.webpackJsonpwedding_test=this.webpackJsonpwedding_test||[]).push([[0],[,,,,function(t,e,n){t.exports={middleText:"Start_middleText__ABC8s",smallText:"Start_smallText__2KdWU",lightText:"Start_lightText__23jlj",blueText:"Start_blueText__1Whar",needBlock:"Start_needBlock__kw1jQ",arrow:"Start_arrow__1LDTE",button:"Start_button__2v2Or"}},,function(t,e,n){t.exports={container:"Invitation_container__1Vlu8",bar:"Invitation_bar__1Heen",link:"Invitation_link__3HT17",share:"Invitation_share__sbbLG",downloadIcon:"Invitation_downloadIcon__5R6k5",downloadButton:"Invitation_downloadButton__3mEo-",shareIcon:"Invitation_shareIcon__3agvz",shareButton:"Invitation_shareButton__sn-HR"}},function(t,e,n){t.exports={component:"Button_component__1zOHU",fill:"Button_fill__2xA88",danger:"Button_danger__MFy4p",large:"Button_large__3WaeW",small:"Button_small__2alWC",disabled:"Button_disabled__ihgWn",fullWidth:"Button_fullWidth__1a_SP"}},,,,,function(t,e,n){t.exports={popover:"Modal_popover__1tfVp",modalWrapper:"Modal_modalWrapper__3EE6V",modal:"Modal_modal__3x_Xo",title:"Modal_title__lM996",actions:"Modal_actions__1I0aC"}},,,function(t,e,n){t.exports={title:"Question_title__1w5lR",smallTitle:"Question_smallTitle__3zn2S",list:"Question_list__33-H8",buttons:"Question_buttons__39mPh"}},,,,function(t,e,n){t.exports={component:"Field_component__1sguj",active:"Field_active__3TEki"}},function(t,e,n){t.exports={container:"Details_container__IL-Ba",palette:"Details_palette__1ZQNg"}},function(t,e,n){t.exports={component:"Card_component__3MhYV"}},function(t,e,n){t.exports={component:"Arrow_component__20Jdy"}},function(t,e,n){t.exports={container:"End_container__2w1y2",details:"End_details__2WPsB",pic:"End_pic__lLhUl",bar:"End_bar__8fHV9"}},function(t,e,n){t.exports={component:"Download_component__1c8Ie"}},function(t,e,n){t.exports={component:"Share_component__2kieO"}},,function(t,e,n){t.exports={container:"App_container__1AVF8"}},,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(16),s=n.n(i),l=n(3),r=n(13),o=n(5),j=n(2),d=n(15),b=n.n(d),u=n(21),p=n.n(u),h=n(0),O=function(t){var e=t.children,n=t.className;return Object(h.jsx)("div",{className:Object(j.a)(p.a.component,n),children:e})},_=n(19),x=n.n(_),m=function(t){var e,n=t.children,a=t.active,c=t.onClick,i=t.className;return Object(h.jsx)("button",{className:Object(j.a)((e={},Object(l.a)(e,x.a.component,!0),Object(l.a)(e,x.a.active,!!a),Object(l.a)(e,"".concat(i),!!i),e)),onClick:c,children:n})},v=n(7),g=n.n(v),f=function(t){var e,n=t.children,a=t.fullWidth,c=t.variant,i=void 0===c?"outline":c,s=t.type,r=void 0===s?"primary":s,o=t.size,d=void 0===o?"large":o,b=t.disabled,u=t.onClick,p=t.className;return Object(h.jsx)("button",{className:Object(j.a)((e={},Object(l.a)(e,g.a.component,!0),Object(l.a)(e,g.a[i],!0),Object(l.a)(e,g.a[r],!0),Object(l.a)(e,g.a[d],!0),Object(l.a)(e,g.a.fullWidth,a),Object(l.a)(e,g.a.disabled,b),Object(l.a)(e,"".concat(p),!!p),e)),onClick:u,children:n})},w=n(22),y=n.n(w),N=function(t){var e=t.direction,n=t.className;return Object(h.jsx)("svg",{width:"33",height:"21",viewBox:"0 0 33 21",xmlns:"http://www.w3.org/2000/svg",className:Object(j.a)(y.a.component,n),children:"right"===e?Object(h.jsx)("path",{d:"M0 10.5H30M30 10.5L21.3559 2M30 10.5L21.3559 19",strokeWidth:"3"}):Object(h.jsx)("path",{d:"M33 10.5L3 10.5M3 10.5L11.6441 19M3 10.5L11.6441 2",strokeWidth:"3"})})},k=function(t){var e=t.question,n=e.question,c=e.answers,i=t.handleAnswer,s=t.goBack,l=Object(a.useState)(null),r=Object(o.a)(l,2),d=r[0],u=r[1];return Object(h.jsxs)(O,{children:[Object(h.jsx)("h2",{className:Object(j.a)(b.a.title,n.length>2?b.a.smallTitle:""),children:n.map((function(t){return Object(h.jsx)("span",{children:t},t)}))}),Object(h.jsxs)("ul",{className:b.a.list,children:[Object(h.jsx)(m,{onClick:function(){return u(c.a.type)},active:d===c.a.type,children:c.a.title}),Object(h.jsx)(m,{onClick:function(){return u(c.b.type)},active:d===c.b.type,children:c.b.title}),Object(h.jsx)(m,{onClick:function(){return u(c.c.type)},active:d===c.c.type,children:c.c.title})]}),Object(h.jsxs)("div",{className:b.a.buttons,children:[Object(h.jsx)(f,{onClick:function(){u(null),s()},children:Object(h.jsx)(N,{direction:"left"})}),Object(h.jsx)(f,{onClick:function(){d&&i(d),u(null)},disabled:!d,children:Object(h.jsx)(N,{direction:"right"})})]})]})},C=n(4),S=n.n(C),I=n.p+"static/media/hourglass.987b9247.svg",B=n.p+"static/media/brain.5593032a.svg",T=function(t){var e=t.start;return Object(h.jsxs)(O,{children:[Object(h.jsx)("h1",{children:"\u041f\u0440\u0438\u0432\u0435\u0442!"}),Object(h.jsxs)("span",{className:Object(j.a)(S.a.middleText),children:["\u042d\u0442\u043e \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0442\u0435\u0441\u0442 \u0432 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0435,",Object(h.jsx)("br",{}),"\u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u0442\u043e\u0438\u0442 \u043f\u0440\u043e\u0439\u0442\u0438"]}),Object(h.jsx)("span",{className:Object(j.a)(S.a.middleText,S.a.blueText),children:"\u0412\u0430\u043c \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u044f\u0442\u0441\u044f:"}),Object(h.jsxs)("div",{className:Object(j.a)(S.a.needBlock,S.a.smallText,S.a.blueText),children:[Object(h.jsx)("img",{src:I,alt:"\u041f\u0435\u0441\u043e\u0447\u043d\u044b\u0435 \u0447\u0430\u0441\u044b"}),Object(h.jsx)("img",{src:B,alt:"\u041c\u043e\u0437\u0433"}),Object(h.jsx)("span",{children:"2 \u043c\u0438\u043d\u0443\u0442\u044b"}),Object(h.jsx)("span",{children:"(\u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e)"})]}),Object(h.jsxs)("span",{className:Object(j.a)(S.a.smallText,S.a.lightText),children:["\u041e\u0442\u0432\u0435\u0447\u0430\u0439\u0442\u0435 \u0447\u0435\u0441\u0442\u043d\u043e, \u0432\u044b\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u043c\u0443\u0434\u0440\u043e",Object(h.jsx)("br",{}),"\u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435,",Object(h.jsx)("br",{}),"\u043e\u0442 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f"]}),Object(h.jsxs)(f,{onClick:e,className:S.a.button,children:[Object(h.jsx)("span",{children:"\u0427\u0442\u043e \u0436, \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u0438\u043c"}),Object(h.jsx)(N,{className:S.a.arrow,direction:"right"})]})]})},M=n(23),W=n.n(M),E=n(28),L=n(37),q=n(38),z=n(39),A=n(40),D=n(41),F=n(42),H={pic11:n.p+"static/media/pic11.4f204235.png",pic12:n.p+"static/media/pic12.f0ac1dfe.png",pic13:n.p+"static/media/pic13.42602b97.png",pic21:n.p+"static/media/pic21.3b37fda8.png",pic22:n.p+"static/media/pic22.fb5c1a0b.png",pic23:n.p+"static/media/pic23.864160bc.png",pic31:n.p+"static/media/pic31.19da0aad.png",pic32:n.p+"static/media/pic32.c34222f0.png",pic33:n.p+"static/media/pic33.83740217.png"},J=n(12),Q=n.n(J),R=function(t){var e=t.children,n=t.onClose,a=t.onSubmit,c=t.title,s=t.submitTitle,l=t.cancelTitle,r=t.visible,o=document.getElementById("root");if(!o||!r)return null;var j=Object(h.jsx)("div",{className:Q.a.popover,onClick:n,children:Object(h.jsx)("div",{className:Q.a.modalWrapper,children:Object(h.jsxs)("div",{className:Q.a.modal,children:[Object(h.jsx)("h3",{className:Q.a.title,children:c}),e,Object(h.jsxs)("div",{className:Q.a.actions,children:[s&&Object(h.jsx)(f,{type:"danger",variant:"fill",size:"small",onClick:a,children:s}),l&&Object(h.jsx)(f,{type:"danger",size:"small",onClick:n,children:l})]})]})})});return Object(i.createPortal)(j,o)},V=n(6),P=n.n(V),U=n(24),G=n.n(U),K=function(t){var e=t.className;return Object(h.jsx)("svg",{width:"23",height:"26",viewBox:"0 0 23 26",xmlns:"http://www.w3.org/2000/svg",className:Object(j.a)(G.a.component,e),children:Object(h.jsx)("path",{d:"M11.375 0L11.375 16M11.375 16L17.75 9.51694M11.375 16L5 9.51694",stroke:"white",strokeWidth:"2"})})},X=n(25),Y=n.n(X),Z=function(t){var e=t.className;return Object(h.jsxs)("svg",{width:"17",height:"23",viewBox:"0 0 17 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:Y.a.component,children:[Object(h.jsx)("path",{d:"M8.37497 15.5L8.37497 2M8.37497 2L3.99997 6M8.37497 2L13 6",stroke:"#6781C6",strokeWidth:"2",className:e}),Object(h.jsx)("path",{d:"M13.5238 8.72461C14.5472 9.74805 15.2442 11.052 15.5266 12.4715C15.8089 13.8911 15.664 15.3625 15.1101 16.6997C14.5562 18.0369 13.6183 19.1798 12.4148 19.9839C11.2114 20.788 9.79654 21.2172 8.34918 21.2172C6.90182 21.2172 5.48696 20.788 4.28352 19.9839C3.08009 19.1798 2.14212 18.0369 1.58824 16.6997C1.03436 15.3625 0.889439 13.8911 1.17181 12.4715C1.45417 11.052 2.15114 9.74805 3.17458 8.72461",stroke:"#6781C6",strokeWidth:"2"})]})},$="\u0421\u0435\u0440\u0451\u0433\u0430 \u0438 \u041c\u0430\u0440\u0438\u043d\u043a\u0430 \u0436\u0435\u043d\u044f\u0442\u0441\u044f!",tt=function(t){var e,n=t.answers,c=t.age,i=t.reset,s=Object(a.useState)(!1),l=Object(o.a)(s,2),r=l[0],j=l[1],d=Object(a.useState)(!1),b=Object(o.a)(d,2),u=b[0],p=b[1];if(localStorage.getItem("result"))e=H[localStorage.getItem("result")];else{var O=Object.values(n).reduce((function(t,e){return t[e]=t[e]+1,t}),{1:0,2:0,3:0}),_=Math.max.apply(Math,Object(E.a)(Object.values(O))),x=Object.keys(O).find((function(t){return O[t]===_}));e=H["pic".concat(c).concat(x)],localStorage.setItem("result","pic".concat(c).concat(x))}return Object(h.jsxs)("div",{className:P.a.container,children:[Object(h.jsx)(R,{visible:u,title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submitTitle:"\u0414\u0430",cancelTitle:"\u041e\u0439!",onSubmit:i,onClose:function(){return p(!1)},children:Object(h.jsx)("p",{children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u044b"})}),Object(h.jsx)(R,{visible:r,title:"\u041f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435.png",cancelTitle:"\u041e\u0442\u043c\u0435\u043d\u0430",onClose:function(){return j(!1)},children:Object(h.jsxs)("div",{className:P.a.share,children:[Object(h.jsx)(L.a,{title:$,url:"https://bulkinhrust.github.io".concat(e),children:Object(h.jsx)(q.a,{size:40,borderRadius:20})}),Object(h.jsx)(z.a,{title:$,url:"https://bulkinhrust.github.io".concat(e),children:Object(h.jsx)(A.a,{size:40,borderRadius:20})}),Object(h.jsx)(D.a,{title:$,url:"https://bulkinhrust.github.io".concat(e),children:Object(h.jsx)(F.a,{size:40,borderRadius:20})})]})}),Object(h.jsx)("img",{src:e,alt:"\u043e\u0442\u043a\u0440\u044b\u0442\u043a\u0430",className:P.a.invitation}),Object(h.jsxs)("div",{className:P.a.bar,children:[Object(h.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",download:"\u041f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435.png",className:P.a.link,children:Object(h.jsxs)(f,{variant:"fill",fullWidth:!0,className:P.a.downloadButton,children:[Object(h.jsx)("span",{children:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c"}),Object(h.jsx)(K,{className:P.a.downloadIcon})]})}),Object(h.jsxs)(f,{onClick:function(){return j(!0)},fullWidth:!0,className:P.a.shareButton,children:[Object(h.jsx)("span",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"}),Object(h.jsx)(Z,{className:P.a.shareIcon})]})]}),Object(h.jsx)(f,{onClick:function(){return p(!0)},type:"danger",fullWidth:!0,children:"\u0425\u043e\u0447\u0443 \u043f\u0440\u043e\u0439\u0442\u0438 \u0442\u0435\u0441\u0442 \u0435\u0449\u0451 \u0440\u0430\u0437!"})]})},et=n(20),nt=n.n(et),at=["#FAE5D9","#F4DCE1","#DCECD4","#BEC7D1","#6A3517","#671729","#2F6316","#143458"],ct=function(){return Object(h.jsxs)("div",{className:nt.a.container,children:[Object(h.jsx)("h2",{children:"\u0423\u0440\u0430, \u044d\u0442\u043e \u043d\u0430\u043a\u043e\u043d\u0435\u0446 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u043e\u0441\u044c!"}),Object(h.jsx)("h3",{children:"\u041d\u0430\u0441\u043b\u0430\u0436\u0434\u0430\u0439\u0442\u0435\u0441\u044c \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435\u043c, \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0432\u0430\u0448\u0438\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432, \u0438 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u043d\u0438\u0436\u0435."}),Object(h.jsxs)("div",{children:[Object(h.jsx)("strong",{children:"\u0414\u0430\u0442\u0430 \u0446\u0435\u0440\u0435\u043c\u043e\u043d\u0438\u0438: "}),"20 \u0430\u0432\u0433\u0443\u0441\u0442\u0430"]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("strong",{children:"\u0412\u0440\u0435\u043c\u044f \u043d\u0430\u0447\u0430\u043b\u0430: "}),"17:00 (\u043f\u0440\u0438\u0435\u0437\u0436\u0430\u0439\u0442\u0435 \u0437\u0430\u0440\u0430\u043d\u0435\u0435)"]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("strong",{children:"\u041c\u0435\u0441\u0442\u043e: "}),"\u0433. \u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c, \u0443\u043b. \u041c\u0438\u0447\u0443\u0440\u0438\u043d\u0430 102/2"]}),Object(h.jsx)("h4",{children:"\u0414\u0435\u0442\u0430\u043b\u0438:"}),Object(h.jsx)("div",{children:"- \u0417\u0430\u0445\u0432\u0430\u0442\u0438\u0442\u0435 \u043a\u0443\u043f\u0430\u043b\u044c\u043d\u0438\u043a\u0438 \u0438 \u043f\u043b\u0430\u0432\u043a\u0438, \u043d\u0430 \u0432\u0442\u043e\u0440\u043e\u0439 \u0434\u0435\u043d\u044c \u0431\u0443\u0434\u0435\u0442 \u0431\u0430\u043d\u044f \u0438 \u0434\u0436\u0430\u043a\u0443\u0437\u0438."}),Object(h.jsx)("div",{children:"- \u0412\u0441\u0435\u043c \u043f\u0440\u0438\u0435\u0437\u0436\u0438\u043c \u0438\u0437 \u0434\u0440\u0443\u0433\u0438\u0445 \u0433\u043e\u0440\u043e\u0434\u043e\u0432 \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0441\u043f\u0430\u043b\u044c\u043d\u044b\u0435 \u043c\u0435\u0441\u0442\u0430."}),Object(h.jsx)("div",{children:"- \u0412\u044b\u0435\u0437\u0434 \u0438\u0437 \u0433\u043e\u0441\u0442\u0435\u0432\u043e\u0433\u043e \u0434\u043e\u043c\u0430 \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d 22 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 \u0432 12:00, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0441\u0442\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0434\u0432\u0435 \u043d\u043e\u0447\u0438."}),Object(h.jsx)("div",{children:"- \u0423\u043a\u0440\u0430\u0448\u0430\u0442\u044c \u0441\u0432\u043e\u0451 \u0430\u0432\u0442\u043e \u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e, \u0442\u0430\u043a \u043a\u0430\u043a \u0432\u0441\u0451 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442\u044c \u0432 \u043e\u0434\u043d\u043e\u043c \u043c\u0435\u0441\u0442\u0435 \u0438 \u043c\u0430\u0448\u0438\u043d\u0430 \u0432\u0430\u043c \u043d\u0435 \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u0441\u044f."}),Object(h.jsx)("div",{children:"- \u041d\u0435 \u0437\u0430\u0431\u0443\u0434\u044c\u0442\u0435 \u0441\u043e\u043b\u043d\u0446\u0435\u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0434\u043b\u044f \u043b\u0438\u0446\u0430 \u0438 \u0442\u0435\u043b\u0430."}),Object(h.jsx)("div",{children:"- \u041d\u0435 \u043d\u0430\u0434\u0435\u0432\u0430\u0439\u0442\u0435 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u044f\u0440\u043a\u0443\u044e \u0438\u043b\u0438 \u043f\u0451\u0441\u0442\u0440\u0443\u044e \u043e\u0434\u0435\u0436\u0434\u0443. \u041f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0438\u0442\u0435 \u044d\u0442\u043e\u043c\u0443 \u043f\u0430\u0441\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0438\u043b\u0438 \u043f\u0440\u0438\u0433\u043b\u0443\u0448\u0435\u043d\u043d\u044b\u0435 \u0442\u0451\u043c\u043d\u044b\u0435 \u043e\u0442\u0442\u0435\u043d\u043a\u0438. \u0412 \u043f\u043e\u043c\u043e\u0449\u044c \u0432\u0430\u043c \u0432\u043d\u0438\u0437\u0443 \u0443\u043a\u0430\u0437\u0430\u043d\u044b \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u044b\u0435 \u0446\u0432\u0435\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0440\u0430\u0432\u044f\u0442\u0441\u044f \u043d\u0435\u0432\u0435\u0441\u0442\u0435."}),Object(h.jsx)("div",{className:nt.a.palette,children:at.map((function(t){return Object(h.jsx)("span",{style:{backgroundColor:t}},t)}))})]})},it=function(t){return Object(h.jsxs)("div",{className:W.a.container,children:[Object(h.jsx)(tt,Object(r.a)({},t)),Object(h.jsx)("hr",{}),Object(h.jsx)(ct,{})]})},st=[{question:["\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u043c \u043b\u0435\u0442?","(\u043c\u044b \u043d\u0438\u043a\u043e\u043c\u0443 \u043d\u0435 \u0441\u043a\u0430\u0436\u0435\u043c)"],value:"age",answers:{a:{title:"\u041c\u0435\u043d\u044c\u0448\u0435 35",type:"1"},b:{title:"\u041e\u0442 35 \u0434\u043e 45",type:"2"},c:{title:"\u041e\u0442 45",type:"3"}}},{question:["\u0427\u0442\u043e \u0432\u0430\u0436\u043d\u0435\u0435 \u043d\u0430 \u043f\u0435\u0440\u0432\u043e\u043c","\u0441\u0432\u0438\u0434\u0430\u043d\u0438\u0438?"],value:"type",answers:{a:{title:"\u0420\u043e\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043e\u0431\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",type:"3"},b:{title:"\u0412\u043a\u0443\u0441\u043d\u043e \u043f\u043e\u0435\u0441\u0442\u044c",type:"2"},c:{title:"\u041d\u0435 \u043e\u043f\u043e\u0437\u043e\u0440\u0438\u0442\u044c\u0441\u044f",type:"1"}}},{question:["\u0412 \u0434\u043e\u043c\u0435 \u0432\u044b\u043a\u043b\u044e\u0447\u0438\u043b\u0438 \u0441\u0432\u0435\u0442.","\u0427\u0435\u043c \u0432\u044b \u0437\u0430\u0439\u043c\u0451\u0442\u0435\u0441\u044c?"],value:"type",answers:{a:{title:"\u041f\u043e\u0435\u043c \u0438 \u043f\u043e\u0439\u0434\u0443 \u0441\u043f\u0430\u0442\u044c",type:"2"},b:{title:"\u0410 \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u043c \u0431\u0430\u0440\u0435 \u0435\u0441\u0442\u044c \u0441\u0432\u0435\u0442?",type:"1"},c:{title:"\u041e\u0442\u043b\u0438\u0447\u043d\u044b\u0439 \u043f\u043e\u0432\u043e\u0434 \u0437\u0430\u0436\u0435\u0447\u044c \u0430\u0440\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0441\u0432\u0435\u0447\u0438",type:"3"}}},{question:["\u041a\u0435\u043c \u0431\u044b \u0432\u044b \u0431\u044b\u043b\u0438","\u0432 \u0444\u0438\u043b\u044c\u043c\u0435 \u043f\u0440\u043e \u0437\u043e\u043c\u0431\u0438?"],value:"type",answers:{a:{title:"\u0427\u043b\u0435\u043d\u043e\u043c \u0431\u0430\u043d\u0434\u044b \u0430\u043d\u0430\u0440\u0445\u0438\u0441\u0442\u043e\u0432",type:"1"},b:{title:"\u0425\u043e\u0437\u044f\u0438\u043d\u043e\u043c \u0445\u043e\u0440\u043e\u0448\u043e \u0437\u0430\u0449\u0438\u0449\u0451\u043d\u043d\u043e\u0439 \u0444\u0435\u0440\u043c\u044b",type:"2"},c:{title:"\u0411\u0435\u0441\u0441\u0442\u0440\u0430\u0448\u043d\u044b\u043c \u043b\u0438\u0434\u0435\u0440\u043e\u043c \u0433\u0440\u0443\u043f\u043f\u044b \u0432\u044b\u0436\u0438\u0432\u0448\u0438\u0445",type:"3"}}},{question:["\u0412\u044b \u043b\u0438\u0434\u0435\u0440","\u043c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u044b.","\u041e \u0447\u0451\u043c \u0432\u0430\u0448 \u0433\u043b\u0430\u0432\u043d\u044b\u0439 \u0445\u0438\u0442?"],value:"type",answers:{a:{title:"\u041e \u043b\u044e\u0431\u0432\u0438, \u043a\u043e\u043d\u0435\u0447\u043d\u043e \u0436\u0435",type:"3"},b:{title:"\u041e \u043a\u0440\u0430\u0441\u0438\u0432\u043e\u0439 \u0436\u0438\u0437\u043d\u0438",type:"2"},c:{title:"\u041e \u043f\u0440\u043e\u0433\u043d\u0438\u0432\u0448\u0435\u043c \u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0435 \u0438 \u0442\u0443\u043f\u044b\u0445 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430\u0445",type:"1"}}},{question:["\u041a\u0435\u043c \u0432\u044b \u0445\u043e\u0442\u0435\u043b\u0438 \u0441\u0442\u0430\u0442\u044c","\u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u0435?"],value:"type",answers:{a:{title:"\u041a\u043e\u0441\u043c\u043e\u043d\u0430\u0432\u0442\u043e\u043c",type:"3"},b:{title:"\u0420\u043e\u043a-\u0437\u0432\u0435\u0437\u0434\u043e\u0439",type:"1"},c:{title:"\u041c\u0438\u043b\u043b\u0438\u043e\u043d\u0435\u0440\u043e\u043c",type:"2"}}},{question:["\u0412 \u043a\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0435 \u0432\u0430\u043c","\u0431\u044b\u043b\u043e \u0431\u044b \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u0435\u0435?"],value:"type",answers:{a:{title:"\u0418\u0442\u0430\u043b\u0438\u044f",type:"2"},b:{title:"\u0413\u0435\u0440\u043c\u0430\u043d\u0438\u044f",type:"1"},c:{title:"\u0424\u0440\u0430\u043d\u0446\u0438\u044f",type:"3"}}},{question:["\u041a\u0443\u0434\u0430 \u0431\u044b \u0432\u044b","\u0445\u043e\u0442\u0435\u043b\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f","20 \u0430\u0432\u0433\u0443\u0441\u0442\u0430?"],value:"type",answers:{a:{title:"\u041d\u0430 \u0431\u043e\u0433\u0430\u0442\u043e\u0435 \u0437\u0430\u0441\u0442\u043e\u043b\u044c\u0435",type:"2"},b:{title:"\u041d\u0430 \u0440\u043e\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0446\u0435\u0440\u0435\u043c\u043e\u043d\u0438\u044e",type:"3"},c:{title:"\u041d\u0430 \u0432\u0435\u0441\u0451\u043b\u0443\u044e \u0433\u0443\u043b\u044f\u043d\u043a\u0443",type:"1"}}}],lt=n(27),rt=n.n(lt),ot=function(){var t=Object(a.useState)(!0),e=Object(o.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)("start"),s=Object(o.a)(i,2),j=s[0],d=s[1],b=Object(a.useState)(),u=Object(o.a)(b,2),p=u[0],O=u[1],_=Object(a.useState)({}),x=Object(o.a)(_,2),m=x[0],v=x[1];if(Object(a.useEffect)((function(){localStorage.getItem("result")?(v(JSON.parse(localStorage.getItem("answers")||"")),O(JSON.parse(localStorage.getItem("age")||"")),d(st.length)):d("start"),c(!1)}),[]),n)return null;return Object(h.jsxs)("div",{className:rt.a.container,children:["start"===j&&Object(h.jsx)(T,{start:function(){d(0)}}),j>-1&&j<st.length&&Object(h.jsx)(k,{question:st[+j],handleAnswer:function(t){if(0===j)O(t),localStorage.setItem("age",t);else{var e=Object(r.a)(Object(r.a)({},m),{},Object(l.a)({},j,t));v(e),localStorage.setItem("answers",JSON.stringify(e))}d(+j+1)},goBack:function(){d(j>0?+j-1:"start")}}),j===st.length&&Object(h.jsx)(it,{answers:m,reset:function(){d("start"),v({}),localStorage.setItem("answers",""),localStorage.setItem("age",""),localStorage.setItem("result","")},age:p})]})};n(34);s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(ot,{})}),document.getElementById("root"))}],[[35,1,2]]]);
//# sourceMappingURL=main.dae4ca03.chunk.js.map