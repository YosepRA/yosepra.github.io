var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,c=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&l(e,a,t[a]);if(n)for(var a of n(t))s.call(t,a)&&l(e,a,t[a]);return e},o=(e,n)=>t(e,a(n));import{R as m,C as i,a as u,b as d,c as E,d as p,r as _,e as f,f as g,F as y,g as b,M as h,I as N,h as v,A as j,i as w,j as I,k as S,l as k,m as C,E as O,S as x,n as T,o as L,p as A,q as D,s as M,t as P,u as z,v as F,w as R,x as q}from"./vendor.56e18dce.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var V="_content-section_1fyje_2",B="_section-header_1fyje_6",Y="_section-title_1fyje_9",J="_section-subtitle_1fyje_12",U="_main-button_1fyje_18",G="_btn-disabled_1fyje_32",K="_main-button-link_1fyje_37",W="_toast_1fyje_62",H="_toast-active_1fyje_69",X="_alert-override_1fyje_72",Z="_footer_1fyje_78";function $(){return m.createElement(i,{as:"footer",className:Z},m.createElement(u,null,m.createElement(d,null,m.createElement("p",null,"StudioYosepRA © ",(new Date).getFullYear()))))}function Q(e){const{children:t}=e;return m.createElement("div",{className:"layout"},m.createElement("main",{className:"content"},t),m.createElement($,null))}var ee="_hero_1yvf3_2",te="_hero-logo_1yvf3_10",ae="_hero-subtitle_1yvf3_13";function ne(){return m.createElement(u,{className:V,as:"section"},m.createElement(d,null,m.createElement("section",{className:ee},m.createElement("img",{src:"/assets/logo.780c04cc.svg",alt:"StudioYosepRA",className:te}),m.createElement("p",{className:ae},"MERN Stack Web Developer"))))}var re="_carousel-content_1fmdj_2";const se=["Most people don't realize that their business problems can be solved by building a web application.","Say you are a restaurant owner. I can build a reservation system with fully interactive seat layout according to your restaurant.","Or maybe you are a farmer. I can build an online market for your commodities so that you can reach an even wider customers.","Or perhaps you are an illustrator. I can build your online gallery that is fully customized to your style. A style which defines you as an artist.","And so much more. If you want your idea to reach the whole world, building a web application is one of the best solution.","My name is Yosep Ryan Agusta and I'm a MERN stack web developer. Using cutting edge web technologies, I will turn your ideas into reality. Contact me to discuss your ideas."];function le(){const e=se.map((e=>m.createElement(E.Item,{key:e.substring(0,10)},m.createElement("p",{className:re},e))));return m.createElement(u,{className:V,as:"section"},m.createElement(d,null,m.createElement("section",{className:"why-web-application"},m.createElement("header",{className:B},m.createElement("h2",{className:Y},"Why Do You Need Web Application?"),m.createElement("h3",{className:J},"and why I can build it for you.")),m.createElement(E,{interval:6e3},e))))}var ce="_project_18m7m_2",oe="_project-overlay_18m7m_5",me="_project-overlay-btn_18m7m_19",ie="_project-modal-header_18m7m_22",ue="_modal-header-override_18m7m_26",de="_project-modal-slider_18m7m_29",Ee="_project-modal-title_18m7m_32",pe="_project-modal-meta-data_18m7m_36",_e="_project-modal-link-btn_18m7m_39",fe="_project-modal-body_18m7m_47",ge="_project-modal-container_18m7m_57",ye="_modal-container-override_18m7m_57";async function be(e){try{return[await e,null]}catch(t){return console.error(t),[null,t]}}const he=p({space:"1s4zpuwof3xj",accessToken:"bgsNnpIDgBJoVZMXmup5j7e2KLFAmaOyb0DBcJdt6JU"});function Ne({project:e,show:t,handleModalClose:a}){const{fields:{name:n,images:r,githubLink:s,liveLink:l,body:c}}=e,o=function(e,t){const a=e.map((e=>m.createElement(E.Item,{key:e},m.createElement(N,{src:e,alt:t,fluid:!0}))));return m.createElement(E,{interval:null,className:"project-slider"},a)}(r,n),p=b.documentToReactComponents(c);return m.createElement(h,{show:t,onHide:a,className:"project-modal"},m.createElement(h.Header,{closeButton:!0,className:g(ie,ue)}),m.createElement(i,{className:g(ge,ye)},m.createElement(u,{className:de},m.createElement(d,null,o)),m.createElement(u,{className:pe},m.createElement(d,{xs:12},m.createElement("h2",{className:Ee},n)),m.createElement(d,{xs:12},m.createElement("a",{href:l,className:g(K,_e,{[G]:!l}),rel:"noreferrer",target:"_blank"},m.createElement(y,{icon:"play"})," ",l?"Live":"Coming soon"),m.createElement("a",{href:s,className:g(K,_e,{[G]:!s}),rel:"noreferrer",target:"_blank"},m.createElement(y,{icon:["fab","github"]})," ",s?"Github":"Coming soon"))),m.createElement(u,{className:fe},m.createElement(d,null,p))))}function ve(){const[e,t]=_.exports.useState(!1),[a,n]=_.exports.useState([]),[r,s]=_.exports.useState(null);_.exports.useEffect((async()=>{const e=he.getEntries({content_type:"project"}),[t,a]=await be(e);n(t.items)}),[]);if(0===a.length)return null;const l=function(e,t){return e.map((e=>{const{sys:{id:a},fields:{images:n,githubLink:r,liveLink:s}}=e;return m.createElement(d,{key:a,md:6,lg:4,as:"article"},m.createElement(f,{className:g(ce,"bg-dark")},m.createElement(f.Img,{src:n[0],alt:"Card image"}),m.createElement(f.ImgOverlay,{className:oe},m.createElement("button",{type:"button",className:g(U,me),onClick:()=>t(e)},m.createElement(y,{icon:"info-circle"})," Details"),m.createElement("a",{href:s,className:g(K,me,{[G]:!s}),rel:"noreferrer",target:"_blank"},m.createElement(y,{icon:"play"})," ",s?"Live":"Coming soon"),m.createElement("a",{href:r,className:g(K,me,{[G]:!r}),rel:"noreferrer",target:"_blank"},m.createElement(y,{icon:["fab","github"]})," ",r?"Github":"Coming soon"))))}))}(a,(e=>{s(e),t(!0)}));return m.createElement(u,{className:V,as:"section"},m.createElement(d,null,m.createElement("section",{className:"projects"},m.createElement("header",{className:B},m.createElement("h2",{className:Y},"What I Have Built So Far"),m.createElement("h3",{className:J},"and it keeps counting.")),m.createElement("div",{className:"project-list"},m.createElement(u,null,l)),null!==r&&m.createElement(Ne,{show:e,handleModalClose:()=>t(!1),project:r}))))}var je="_contact-list-row_1gnzg_2",we="_contact-info_1gnzg_5",Ie="_contact-point_1gnzg_13",Se="_contact-logo_1gnzg_20",ke="_contact-message-input_1gnzg_23",Ce="_form-control-override_1gnzg_23",Oe="_contact-send-btn_1gnzg_26",xe="_contact-send-btn-spinner_1gnzg_50",Te="_spinner-border-override_1gnzg_50";const{VITE_API_ENDPOINT:Le}={VITE_CONTENTFUL_SPACE_ID:"1s4zpuwof3xj",VITE_CONTENTFUL_ACCESS_TOKEN:"bgsNnpIDgBJoVZMXmup5j7e2KLFAmaOyb0DBcJdt6JU",VITE_API_ENDPOINT:"https://mysterious-gorge-86728.herokuapp.com",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0};async function Ae(e,t,a){return await async function(e,t,a,n,r={}){const s=v.request(c({method:e,url:t,data:a},r)),[l,o]=await be(s);return o?n(o):l.data}("POST",e,t,a)}const De=_.exports.createContext({showToast:()=>{}});function Me({show:e,setShow:t,variant:a,message:n,timeoutId:r}){return m.createElement(j,{variant:a,className:g(W,X,{[H]:e}),dismissible:!0,onClose:()=>{t(!1),clearTimeout(r)}},n)}function Pe({children:e}){const[t,a]=_.exports.useState(!1),[n,r]=_.exports.useState("success"),[s,l]=_.exports.useState("Default message"),[c,o]=_.exports.useState(null);return m.createElement(De.Provider,{value:{showToast:(e,t)=>{a(!0),r(e),l(t),o(setTimeout((()=>{a(!1)}),5e3))}}},m.createElement(Me,{show:t,setShow:a,variant:n,message:s,timeoutId:c}),e)}const ze={email:"",subject:"",message:""},Fe=w().shape({email:I().email("Please enter a valid email.").required("This field is required."),subject:I().required("This field is required."),message:I().required("This field is required.")});function Re(){const{showToast:e}=_.exports.useContext(De),t=t=>{const{response:a}=t;a.status>=300&&e("danger",a.data.message)};return m.createElement(u,{className:V,as:"section"},m.createElement(d,null,m.createElement("section",{className:"contacts"},m.createElement("header",{className:B},m.createElement("h2",{className:Y},"Contact Me"),m.createElement("h3",{className:J},"and I will turn your ideas to reality.")),m.createElement("div",{className:"contact-list"},m.createElement(u,{className:je},m.createElement(d,{md:8,lg:4,className:we},m.createElement("div",{className:Ie},m.createElement("span",{className:Se},m.createElement(y,{icon:"envelope"})),m.createElement("span",{className:"contact-text"},"studioyosepra@gmail.com")),m.createElement("div",{className:Ie},m.createElement("span",{className:Se},m.createElement(y,{icon:["fab","discord"]})),m.createElement("span",{className:"contact-text"},"YosepRA#4863")),m.createElement("div",{className:Ie},m.createElement("span",{className:Se},m.createElement(y,{icon:["fab","telegram"]})),m.createElement("span",{className:"contact-text"},"YosepRA")),m.createElement("div",{className:Ie},m.createElement("span",{className:Se},m.createElement(y,{icon:["fab","instagram"]})),m.createElement("span",{className:"contact-text"},"studioyosepra")),m.createElement("div",{className:Ie},m.createElement("span",{className:Se},m.createElement(y,{icon:["fab","twitter"]})),m.createElement("span",{className:"contact-text"},"studioyosepra"))),m.createElement(d,{md:8,lg:6,className:"contact-form"},m.createElement(S,{initialValues:ze,onSubmit:async(a,{resetForm:n})=>{const r=await Ae(`${Le}/mail`,a,t);e("success",r.message),n()},validationSchema:Fe},(({handleSubmit:e,isSubmitting:t,errors:a,touched:n})=>m.createElement(k,{noValidate:!0,onSubmit:e},m.createElement(k.Group,{controlId:"email"},m.createElement(k.Label,null,"Email address"),m.createElement(C,{name:"email"},(({field:e})=>m.createElement(k.Control,o(c({},e),{type:"email",placeholder:"your_email@mail.com",isInvalid:n.email&&!!a.email,disabled:t})))),m.createElement(O,{name:"email"},(e=>m.createElement(k.Control.Feedback,{type:"invalid"},e)))),m.createElement(k.Group,{controlId:"subject"},m.createElement(k.Label,null,"Subject"),m.createElement(C,{name:"subject"},(({field:e})=>m.createElement(k.Control,o(c({},e),{placeholder:"Message title",isInvalid:n.subject&&!!a.subject,disabled:t})))),m.createElement(O,{name:"subject"},(e=>m.createElement(k.Control.Feedback,{type:"invalid"},e)))),m.createElement(k.Group,{controlId:"message"},m.createElement(k.Label,null,"Message"),m.createElement(C,{name:"message"},(({field:e})=>m.createElement(k.Control,o(c({},e),{as:"textarea",placeholder:"Tell me more about your ideas. Or ask me any questions.",className:g(ke,Ce),isInvalid:n.message&&!!a.message,disabled:t})))),m.createElement(O,{name:"message"},(e=>m.createElement(k.Control.Feedback,{type:"invalid"},e)))),m.createElement("button",{className:Oe,type:"submit",disabled:t},t?m.createElement(m.Fragment,null,m.createElement(x,{animation:"border",role:"status",className:g(xe,Te)},m.createElement("span",{className:"sr-only"},"Sending..."))," ","Sending"):"Send"))))))))))}function qe(){return m.createElement(Q,null,m.createElement(i,null,m.createElement(Pe,null,m.createElement(ne,null),m.createElement(le,null),m.createElement(ve,null),m.createElement(Re,null))))}T.add(L,A,D,M,P,z,F,R),q.render(m.createElement(m.StrictMode,null,m.createElement(qe,null)),document.getElementById("root"));
