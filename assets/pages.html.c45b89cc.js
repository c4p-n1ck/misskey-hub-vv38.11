import{_ as l,o as d,c as m,b as s,w as t,a as e,d as a,r as i}from"./app.87509b5a.js";const c={},p=e("h1",{id:"users-pages",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#users-pages","aria-hidden":"true"},"#"),a(),e("code",null,"users/pages")],-1),u=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),f=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),h=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1);function _(y,g){const o=i("MkApiConsole"),r=i("ClientOnly"),n=i("MkSchemaViewer");return d(),m("div",null,[p,s(r,null,{default:t(()=>[s(o,{name:"users/pages",def:{summary:"",description:"",tags:["users"],requireCredential:!1,req:{type:"object",properties:{userId:{type:"string",format:"misskey:id"},limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"}},required:["userId"]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Page",$ref:"misskey://Page"}},errors:{}}})]),_:1}),u,s(r,null,{default:t(()=>[s(n,{schema:{type:"object",properties:{userId:{type:"string",format:"misskey:id"},limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"}},required:["userId"]}})]),_:1}),f,s(r,null,{default:t(()=>[s(n,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Page",$ref:"misskey://Page"}}})]),_:1}),h])}var b=l(c,[["render",_],["__file","pages.html.vue"]]);export{b as default};