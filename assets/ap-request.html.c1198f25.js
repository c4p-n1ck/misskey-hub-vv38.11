import{_ as o,o as l,c,b as r,w as i,a as e,d as t,r as s}from"./app.87509b5a.js";const p={},u=e("h1",{id:"charts-ap-request",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#charts-ap-request","aria-hidden":"true"},"#"),t(),e("code",null,"charts/ap-request")],-1),m=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),h=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),y=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),t(" Errors")],-1);function _(f,b){const d=s("MkApiConsole"),a=s("ClientOnly"),n=s("MkSchemaViewer");return l(),c("div",null,[u,r(a,null,{default:i(()=>[r(d,{name:"charts/ap-request",def:{summary:"",description:"",tags:["charts"],requireCredential:!1,req:{type:"object",properties:{span:{type:"string",enum:["day","hour"]},limit:{type:"integer",minimum:1,maximum:500,default:30},offset:{type:"integer",nullable:!0,default:null}},required:["span"]},res:{type:"object",properties:{deliverFailed:{type:"array",items:{type:"number"}},deliverSucceeded:{type:"array",items:{type:"number"}},inboxReceived:{type:"array",items:{type:"number"}}},required:["deliverFailed","deliverSucceeded","inboxReceived"]},errors:{}}})]),_:1}),m,r(a,null,{default:i(()=>[r(n,{schema:{type:"object",properties:{span:{type:"string",enum:["day","hour"]},limit:{type:"integer",minimum:1,maximum:500,default:30},offset:{type:"integer",nullable:!0,default:null}},required:["span"]}})]),_:1}),h,r(a,null,{default:i(()=>[r(n,{schema:{type:"object",properties:{deliverFailed:{type:"array",items:{type:"number"}},deliverSucceeded:{type:"array",items:{type:"number"}},inboxReceived:{type:"array",items:{type:"number"}}},required:["deliverFailed","deliverSucceeded","inboxReceived"]}})]),_:1}),y])}var x=o(p,[["render",_],["__file","ap-request.html.vue"]]);export{x as default};