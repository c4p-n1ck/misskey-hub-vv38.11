import{_ as b,o as l,c as _,b as d,w as r,a as e,d as o,r as a}from"./app.6a488ab0.js";const f={},h=e("h1",{id:"app-show",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#app-show","aria-hidden":"true"},"#"),o(),e("code",null,"app/show")],-1),m=e("h2",{id:"\u30CF\u309A\u30E9\u30E1\u30FC\u30BF",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30CF\u309A\u30E9\u30E1\u30FC\u30BF","aria-hidden":"true"},"#"),o(" \u30D1\u30E9\u30E1\u30FC\u30BF")],-1),u=e("h2",{id:"\u30EC\u30B9\u30DB\u309A\u30F3\u30B9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30EC\u30B9\u30DB\u309A\u30F3\u30B9","aria-hidden":"true"},"#"),o(" \u30EC\u30B9\u30DD\u30F3\u30B9")],-1),A=e("h2",{id:"\u30A8\u30E9\u30FC",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30A8\u30E9\u30FC","aria-hidden":"true"},"#"),o(" \u30A8\u30E9\u30FC")],-1),E=e("h2",{id:"\u30EA\u30BD\u30FC\u30B9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30EA\u30BD\u30FC\u30B9","aria-hidden":"true"},"#"),o(" \u30EA\u30BD\u30FC\u30B9")],-1);function y(I,k){const s=a("MkApiConsole"),c=a("ClientOnly"),t=a("MkSchemaViewerItemObject"),i=a("MkSchemaViewer"),n=a("MkApiErrors"),p=a("MkApiResources");return l(),_("div",null,[h,d(c,null,{default:r(()=>[d(s,{name:"app/show",def:{summary:"",description:"",tags:["app"],requireCredential:!1,req:{type:"object",properties:{appId:{type:"string",format:"misskey:id"}},required:["appId"]},res:{type:"object",optional:!1,nullable:!1,ref:"App",$ref:"misskey://App"},errors:{"dce83913-2dc6-4093-8a7b-71dbb11718a3":{id:"dce83913-2dc6-4093-8a7b-71dbb11718a3",code:"NO_SUCH_APP",description:""}}}})]),_:1}),m,d(c,null,{default:r(()=>[d(t,{schema:{type:"object",properties:{appId:{type:"string",format:"misskey:id"}},required:["appId"]}})]),_:1}),u,d(c,null,{default:r(()=>[d(i,{schema:{type:"object",optional:!1,nullable:!1,ref:"App",$ref:"misskey://App"}})]),_:1}),A,d(c,null,{default:r(()=>[d(n,{errors:{"dce83913-2dc6-4093-8a7b-71dbb11718a3":{id:"dce83913-2dc6-4093-8a7b-71dbb11718a3",code:"NO_SUCH_APP",description:""}},"common-errors":{"1384574d-a912-4b81-8601-c7b1c4085df1":{id:"1384574d-a912-4b81-8601-c7b1c4085df1",code:"CREDENTIAL_REQUIRED",description:"\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u5FC5\u9808\u306E\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306B\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u7121\u3057\u3067\u30EA\u30AF\u30A8\u30B9\u30C8\u3055\u308C\u307E\u3057\u305F\u3002"},"d5826d14-3982-4d2e-8011-b9e9f02499ef":{id:"d5826d14-3982-4d2e-8011-b9e9f02499ef",code:"RATE_LIMIT_EXCEEDED",description:"\u30EC\u30FC\u30C8\u30EA\u30DF\u30C3\u30C8\u306B\u3088\u308B\u5236\u9650\u306E\u305F\u3081\u4E00\u6642\u7684\u306B\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"},"56f35758-7dd5-468b-8439-5d6fb8ec9b8e":{id:"56f35758-7dd5-468b-8439-5d6fb8ec9b8e",code:"ACCESS_DENIED",description:"\u30A2\u30AF\u30BB\u30B9\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002"},"1370e5b7-d4eb-4566-bb1d-7748ee6a1838":{id:"1370e5b7-d4eb-4566-bb1d-7748ee6a1838",code:"PERMISSION_DENIED",description:"\u4E0E\u3048\u3089\u308C\u305F\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u306B\u306F\u5FC5\u8981\u306A\u30D1\u30FC\u30DF\u30C3\u30B7\u30E7\u30F3\u304C\u3042\u308A\u307E\u305B\u3093\u3002"},"a8c724b3-6e9c-4b46-b1a8-bc3ed6258370":{id:"a8c724b3-6e9c-4b46-b1a8-bc3ed6258370",code:"YOUR_ACCOUNT_SUSPENDED",description:"\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u51CD\u7D50\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"},"3d81ceae-475f-4600-b2a8-2bc116157532":{id:"3d81ceae-475f-4600-b2a8-2bc116157532",code:"INVALID_PARAM",description:"\u30EA\u30AF\u30A8\u30B9\u30C8\u30D1\u30E9\u30E1\u30FC\u30BF\u306B\u8AA4\u308A\u304C\u3042\u308A\u307E\u3059\u3002"},"5d37dbcb-891e-41ca-a3d6-e690c97775ac":{id:"5d37dbcb-891e-41ca-a3d6-e690c97775ac",code:"INTERNAL_ERROR",description:"\u30B5\u30FC\u30D0\u30FC\u5185\u90E8\u3067\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u5F15\u304D\u7D9A\u304D\u554F\u984C\u304C\u767A\u751F\u3059\u308B\u5834\u5408\u306F\u7BA1\u7406\u8005\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002"}}})]),_:1}),E,d(c,null,{default:r(()=>[d(p,{def:{summary:"",description:"",tags:["app"],requireCredential:!1,req:{type:"object",properties:{appId:{type:"string",format:"misskey:id"}},required:["appId"]},res:{type:"object",optional:!1,nullable:!1,ref:"App",$ref:"misskey://App"},errors:{"dce83913-2dc6-4093-8a7b-71dbb11718a3":{id:"dce83913-2dc6-4093-8a7b-71dbb11718a3",code:"NO_SUCH_APP",description:""}}}})]),_:1})])}var N=b(f,[["render",y],["__file","show.html.vue"]]);export{N as default};