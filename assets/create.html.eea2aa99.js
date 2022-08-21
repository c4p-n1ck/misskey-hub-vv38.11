import{_ as t,o as n,c as l,b as a,w as c,a as e,d,e as f,r as o}from"./app.87509b5a.js";const h={},b=e("h1",{id:"following-create",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#following-create","aria-hidden":"true"},"#"),d(),e("code",null,"following/create")],-1),p=e("p",null,"Credential required.",-1),_=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),d(" Parameters")],-1),u=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),d(" Response")],-1),m=f('<h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h2><h3 id="no-such-user" tabindex="-1"><a class="header-anchor" href="#no-such-user" aria-hidden="true">#</a> NO_SUCH_USER</h3><p>ID: <code>fcd2eef9-a9b2-4c4f-8624-038099e90aa5</code></p><h3 id="followee-is-yourself" tabindex="-1"><a class="header-anchor" href="#followee-is-yourself" aria-hidden="true">#</a> FOLLOWEE_IS_YOURSELF</h3><p>ID: <code>26fbe7bb-a331-4857-af17-205b426669a9</code></p><h3 id="already-following" tabindex="-1"><a class="header-anchor" href="#already-following" aria-hidden="true">#</a> ALREADY_FOLLOWING</h3><p>ID: <code>35387507-38c7-4cb9-9197-300b93783fa0</code></p><h3 id="blocking" tabindex="-1"><a class="header-anchor" href="#blocking" aria-hidden="true">#</a> BLOCKING</h3><p>ID: <code>4e2206ec-aa4f-4960-b865-6c23ac38e2d9</code></p><h3 id="blocked" tabindex="-1"><a class="header-anchor" href="#blocked" aria-hidden="true">#</a> BLOCKED</h3><p>ID: <code>c4ab57cc-4e41-45e9-bfd9-584f61e35ce0</code></p>',11);function L(O,y){const i=o("MkApiConsole"),r=o("ClientOnly"),s=o("MkSchemaViewer");return n(),l("div",null,[b,p,a(r,null,{default:c(()=>[a(i,{name:"following/create",def:{summary:"",description:"",tags:["following"],requireCredential:!0,req:{type:"object",properties:{userId:{type:"string",format:"misskey:id"}},required:["userId"]},res:{type:"object",optional:!1,nullable:!1,ref:"UserLite",$ref:"misskey://UserLite"},errors:{"fcd2eef9-a9b2-4c4f-8624-038099e90aa5":{id:"fcd2eef9-a9b2-4c4f-8624-038099e90aa5",code:"NO_SUCH_USER",description:""},"26fbe7bb-a331-4857-af17-205b426669a9":{id:"26fbe7bb-a331-4857-af17-205b426669a9",code:"FOLLOWEE_IS_YOURSELF",description:""},"35387507-38c7-4cb9-9197-300b93783fa0":{id:"35387507-38c7-4cb9-9197-300b93783fa0",code:"ALREADY_FOLLOWING",description:""},"4e2206ec-aa4f-4960-b865-6c23ac38e2d9":{id:"4e2206ec-aa4f-4960-b865-6c23ac38e2d9",code:"BLOCKING",description:""},"c4ab57cc-4e41-45e9-bfd9-584f61e35ce0":{id:"c4ab57cc-4e41-45e9-bfd9-584f61e35ce0",code:"BLOCKED",description:""}}}})]),_:1}),_,a(r,null,{default:c(()=>[a(s,{schema:{type:"object",properties:{userId:{type:"string",format:"misskey:id"}},required:["userId"]}})]),_:1}),u,a(r,null,{default:c(()=>[a(s,{schema:{type:"object",optional:!1,nullable:!1,ref:"UserLite",$ref:"misskey://UserLite"}})]),_:1}),m])}var k=t(h,[["render",L],["__file","create.html.vue"]]);export{k as default};