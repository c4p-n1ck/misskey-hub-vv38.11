import{_ as l,o as d,c,b as t,w as i,a as e,d as r,r as s}from"./app.87509b5a.js";const m={},f=e("h1",{id:"i-favorites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#i-favorites","aria-hidden":"true"},"#"),r(),e("code",null,"i/favorites")],-1),p=e("p",null,"Credential required.",-1),u=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),r(" Parameters")],-1),h=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),r(" Response")],-1),_=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),r(" Errors")],-1);function y(v,b){const n=s("MkApiConsole"),a=s("ClientOnly"),o=s("MkSchemaViewer");return d(),c("div",null,[f,p,t(a,null,{default:i(()=>[t(n,{name:"i/favorites",def:{summary:"",description:"",tags:["account"],requireCredential:!0,req:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"}},required:[]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"NoteFavorite",$ref:"misskey://NoteFavorite"}},errors:{}}})]),_:1}),u,t(a,null,{default:i(()=>[t(o,{schema:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"}},required:[]}})]),_:1}),h,t(a,null,{default:i(()=>[t(o,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"NoteFavorite",$ref:"misskey://NoteFavorite"}}})]),_:1}),_])}var x=l(m,[["render",y],["__file","favorites.html.vue"]]);export{x as default};