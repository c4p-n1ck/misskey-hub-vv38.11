import{_ as o,o as c,c as l,b as a,w as s,a as e,d as t,r as n}from"./app.87509b5a.js";const h={},p=e("h1",{id:"admin-emoji-update",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-emoji-update","aria-hidden":"true"},"#"),t(),e("code",null,"admin/emoji/update")],-1),m=e("p",null,"Credential required.",-1),u=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),_=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),y=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),t(" Errors")],-1),f=e("h3",{id:"no-such-emoji",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-such-emoji","aria-hidden":"true"},"#"),t(" NO_SUCH_EMOJI")],-1),b=e("p",null,[t("ID: "),e("code",null,"684dec9d-a8c2-4364-9aa8-456c49cb1dc8")],-1);function g(x,C){const d=n("MkApiConsole"),r=n("ClientOnly"),i=n("MkSchemaViewer");return c(),l("div",null,[p,m,a(r,null,{default:s(()=>[a(d,{name:"admin/emoji/update",def:{summary:"",description:"",tags:["admin"],requireCredential:!0,req:{type:"object",properties:{id:{type:"string",format:"misskey:id"},name:{type:"string"},category:{type:"string",nullable:!0,description:"Use `null` to reset the category."},aliases:{type:"array",items:{type:"string"}}},required:["id","name","aliases"]},res:{},errors:{"684dec9d-a8c2-4364-9aa8-456c49cb1dc8":{id:"684dec9d-a8c2-4364-9aa8-456c49cb1dc8",code:"NO_SUCH_EMOJI",description:""}}}},null,8,["def"])]),_:1}),u,a(r,null,{default:s(()=>[a(i,{schema:{type:"object",properties:{id:{type:"string",format:"misskey:id"},name:{type:"string"},category:{type:"string",nullable:!0,description:"Use `null` to reset the category."},aliases:{type:"array",items:{type:"string"}}},required:["id","name","aliases"]}},null,8,["schema"])]),_:1}),_,a(r,null,{default:s(()=>[a(i,{schema:{}})]),_:1}),y,f,b])}var k=o(h,[["render",g],["__file","update.html.vue"]]);export{k as default};