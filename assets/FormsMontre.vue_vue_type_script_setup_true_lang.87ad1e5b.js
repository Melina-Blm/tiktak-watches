import{d as C,o as u,c as h,f as e,j as x,e as f,n as k,t as v,u as y,a as g,s as p,k as E,w as F,b as o,m as M,l as $}from"./index.463ae2a6.js";const B={width:"250",height:"280",viewBox:"0 0 450 480",fill:"none",xmlns:"http://www.w3.org/2000/svg"},V=["fill"],S=["fill"],N=["fill"],A=e("path",{id:"vide",d:"M132.421 343.68L105.779 350.499C99.9135 359.845 106.476 366.664 110.49 368.905L138.1 361.839C142.029 352.988 135.951 346.045 132.421 343.68Z",fill:"white",stroke:"black","stroke-width":"3"},null,-1),K=C({__name:"SvgMontre",props:{bracelet:{default:"white"},ecran:{default:"white"},boitier:{default:"white"}},setup(t){return(l,r)=>(u(),h("div",null,[(u(),h("svg",B,[e("path",{id:"boitier",d:"M212.132 245.159C169.332 106.759 194.299 58.1587 212.132 51.1587C231.132 41.6587 282.632 21.6587 364.132 51.1587C445.632 80.6587 446.132 263.659 446.132 270.159C441.632 361.659 277.132 327.159 275.132 327.159C233.132 316.659 215.132 255.659 212.132 245.159Z",stroke:"black","stroke-width":"3",fill:t.boitier,class:"boitier"},null,8,V),e("path",{id:"bracelet",d:"M330.509 39.1176C289.085 14.8195 184.03 -22.1934 95.205 24.1393C91.6397 25.6371 37.6522 62.5835 12.1863 170.427C12.1863 172.424 -10.7329 198.886 12.1863 230.839C14.7329 233.835 49.3665 263.791 53.441 293.249C53.441 296.244 52.9317 340.18 43.764 350.665C42.236 353.162 43.2547 428.053 94.1863 420.064C96.7329 421.562 147.665 507.937 269.901 466.996C272.957 466.996 391.627 422.061 412 323.704C409.453 324.703 340.696 344.674 282.634 329.196C282.634 332.192 267.863 417.568 238.323 433.545C235.267 431.048 202.161 402.091 194.522 384.117C196.05 380.622 203.18 354.16 158.36 315.716C156.323 313.719 127.801 283.263 155.814 238.328C156.832 237.33 164.981 224.349 142.571 190.398C142.571 186.404 175.168 85.5501 155.814 82.5545C153.776 82.5545 58.5342 62.0842 43.764 113.51C43.764 115.507 20.8447 200.383 24.9193 213.864C27.4658 216.36 35.6149 234.334 87.5652 230.839C89.6025 230.839 142.571 225.846 141.553 191.896C140.534 157.945 157.851 116.505 158.87 113.51C159.888 110.514 166 92.0407 160.907 84.0523C162.435 82.5545 194.012 37.1205 201.143 39.6168C203.689 41.1147 208.783 42.6125 215.913 52.598C223.553 45.6081 252.075 35.1234 287.217 36.1219C322.36 37.1205 328.472 38.6183 330.509 39.1176Z",stroke:"black","stroke-width":"3",fill:t.bracelet,class:"bracelet"},null,8,S),e("path",{id:"ecran",d:"M256.632 44.6587C193.432 44.6587 230.298 185.325 256.632 255.659C283.632 317.159 322.132 313.659 323.132 313.659C352.132 318.159 413.632 307.159 417.632 307.159C481.632 297.659 423.132 128.159 422.632 126.659C408.232 60.6587 355.965 44.4921 331.632 44.6587H256.632Z",stroke:"black","stroke-width":"3",fill:t.ecran,class:"bracelet"},null,8,N),A]))]))}}),O={"#111111":"Noir","#677E6C":"Vert","#678FA6":"Bleu","#8E77A1":"Violet","#C16E5C":"Orange","#9E3939":"Rouge","#606060":"Gris","#333687":"Bleu fon\xE7\xE9"},R={class:"sr-only"},b=C({__name:"FormKitMontre",props:{name:null,label:null},setup(t){return(l,r)=>{const a=g("FormKit");return u(),x(a,{name:t.name,label:t.label,value:"#FFFFFF",type:"radio",options:y(O),"sections-schema":{inner:{$el:null},decorator:{$el:null}},"input-class":"peer sr-only","options-class":"flex gap-4 my-3 flex-wrap"},{label:f(n=>[e("div",{class:"h-9 w-9 rounded-full border-4 peer-checked:border-blue-500 hover:border-zinc-300",style:k({backgroundColor:n.option.value})},null,4),e("span",R,v(n.option.label),1)]),_:1},8,["name","label","options"])}}}),T={},Z=T,j={class:"grid grid-cols-1 lg:grid-cols-2 justify-around gap-8 mx-20 my-10 rounded"},I={class:"bg-white p-7 flex-wrap justify-center rounded-3xl shadow-lg"},z=e("h2",{class:"font-reemkufi text-2xl text-center mb-6"},"PREVIEW",-1),L={class:"bg-white p-7 rounded-3xl shadow-lg"},P=e("h2",{class:"font-reemkufi text-2xl text-center"},"CUSTOMISATION",-1),U={class:"font-reemkufi m-6 uppercase"},D=C({__name:"FormsMontre",props:{data:null,id:null},async setup(t){var _;let l,r;const a=t;p.auth.user();const n=$(),i=E((_=a.data)!=null?_:{});async function w(c,s){const{data:m,error:d}=await p.from("MONTRE").upsert(c);d?s.setErrors([d.message]):(s.setErrors([]),n.push({name:"montres-edit-id",params:{id:m[0].id}}))}if(a.id){let{data:c,error:s}=([l,r]=F(()=>p.from("MONTRE").select("*").eq("id",a.id)),l=await l,r(),l);s?console.log("n'a pas pu charger le table Montres :",s):i.value=c[0]}return(c,s)=>{const m=g("FormKit");return u(),h("div",j,[e("div",I,[z,o(K,M({class:"w-64 text-center block m-auto"},i.value),null,16)]),e("div",L,[P,e("div",U,[o(m,{type:"form","submit-label":"Add to basket",modelValue:i.value,"onUpdate:modelValue":s[0]||(s[0]=d=>i.value=d),onSubmit:w,config:{classes:{input:"",label:""}},"submit-attrs":{classes:{input:"bg-blue-700 p-3 block m-auto my-4 hover:bg-blue-800 rounded-lg font-raleway text-white hover:bg-indigo-40"}}},{default:f(()=>[o(b,{name:"ecran",label:"Screen -"}),o(b,{name:"boitier",label:"Case - "}),o(b,{name:"bracelet",label:"Bracelet -"}),o(Z,{name:"",label:"Mat\xE9riaux -"})]),_:1},8,["modelValue"])])])])}}});export{K as _,D as a};
