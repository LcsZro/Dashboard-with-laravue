import{T as _,o as g,f as x,a as e,u as a,w as o,F as b,Z as k,b as t,e as h,n as v,d as y}from"./app-92c052b8.js";import{_ as w}from"./AuthenticatedLayout-78c1b5a9.js";import{_ as r,a as d,b as u}from"./TextInput-2cf67191.js";import{P as V}from"./PrimaryButton-a6a34b36.js";import{d as $}from"./index-88c69271.js";import"./ApplicationLogo-d8b2fef9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-ba8f2a43.js";const S=t("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Edit Skill ",-1),B={class:"mt-2"},E={class:"max-w-md mx-auto sm:px-6 lg:px-8"},N=["onSubmit"],I={class:"flex items-center justify-end mt-4"},O={__name:"Edit",props:{skill:Object},setup(c){var n;const i=c,s=_({name:(n=i.skill)==null?void 0:n.name,image:null}),p=()=>{$.Inertia.post(`/skills/${i.skill.id}`,{_method:"put",name:s.name,image:s.image})};return(f,l)=>(g(),x(b,null,[e(a(k),{title:"Edit Skill"}),e(w,null,{header:o(()=>[S]),default:o(()=>[t("div",B,[t("div",E,[t("form",{onSubmit:h(p,["prevent"])},[t("div",null,[e(r,{for:"name",value:"Name"}),e(d,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:a(s).name,"onUpdate:modelValue":l[0]||(l[0]=m=>a(s).name=m),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e(u,{class:"mt-2",message:a(s).errors.name},null,8,["message"])]),t("div",null,[e(r,{for:"image",value:"Image"}),e(d,{id:"image",type:"file",class:"mt-1 block w-full",onInput:l[1]||(l[1]=m=>a(s).image=m.target.files[0])}),e(u,{class:"mt-2",message:f.$page.props.errors.image},null,8,["message"])]),t("div",I,[e(V,{class:v(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:o(()=>[y(" Store ")]),_:1},8,["class","disabled"])])],40,N)])])]),_:1})],64))}};export{O as default};