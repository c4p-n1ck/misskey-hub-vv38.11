import{_ as i,o as c,c as d,b as t,w as r,a as e,d as a,r as s}from"./app.87509b5a.js";const p={},f=e("h1",{id:"ap-show",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ap-show","aria-hidden":"true"},"#"),a(),e("code",null,"ap/show")],-1),u=e("p",null,"Credential required.",-1),h=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),_=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),b=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1),y=e("h3",{id:"no-such-object",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-such-object","aria-hidden":"true"},"#"),a(" NO_SUCH_OBJECT")],-1),m=e("p",null,[a("ID: "),e("code",null,"dc94d745-1262-4e63-a17d-fecaa57efc82")],-1);function j(N,C){const n=s("MkApiConsole"),o=s("ClientOnly"),l=s("MkSchemaViewer");return c(),d("div",null,[f,u,t(o,null,{default:r(()=>[t(n,{name:"ap/show",def:{summary:"",description:"",tags:["federation"],requireCredential:!0,req:{type:"object",properties:{uri:{type:"string"}},required:["uri"]},res:{optional:!1,nullable:!1,oneOf:[{type:"object",properties:{type:{type:"string",optional:!1,nullable:!1,enum:["User"]},object:{type:"object",optional:!1,nullable:!1,ref:"UserDetailedNotMe",$ref:"misskey://UserDetailedNotMe"}},required:["type","object"]},{type:"object",properties:{type:{type:"string",optional:!1,nullable:!1,enum:["Note"]},object:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note"}},required:["type","object"]}]},errors:{"dc94d745-1262-4e63-a17d-fecaa57efc82":{id:"dc94d745-1262-4e63-a17d-fecaa57efc82",code:"NO_SUCH_OBJECT",description:""}}}})]),_:1}),h,t(o,null,{default:r(()=>[t(l,{schema:{type:"object",properties:{uri:{type:"string"}},required:["uri"]}})]),_:1}),_,t(o,null,{default:r(()=>[t(l,{schema:{optional:!1,nullable:!1,oneOf:[{type:"object",properties:{type:{type:"string",optional:!1,nullable:!1,enum:["User"]},object:{type:"object",optional:!1,nullable:!1,ref:"UserDetailedNotMe",$ref:"misskey://UserDetailedNotMe"}},required:["type","object"]},{type:"object",properties:{type:{type:"string",optional:!1,nullable:!1,enum:["Note"]},object:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note"}},required:["type","object"]}]}})]),_:1}),b,y,m])}var w=i(p,[["render",j],["__file","show.html.vue"]]);export{w as default};