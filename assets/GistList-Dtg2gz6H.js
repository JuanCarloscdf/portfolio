import{u as n,j as s,b as l,r as a}from"./index-CDBMSXyD.js";import{u as d}from"./useArticlesContext-Bpu_r0oV.js";import{M as x}from"./Section-BahQru22.js";import{S as u}from"./SectionTitle-3eCx87W9.js";const f=({item:t})=>{const r=n();return s.jsxs("article",{onClick:()=>r(`/article/${t.id}`),className:"cursor-pointer rounded-xl p-6 flex flex-col justify-between border border-solid border-black dark:border-gold",children:[s.jsx("span",{className:"text-xs font-light text-black/80 dark:text-white/80",children:t.date.toLocaleString()}),s.jsx("h1",{className:"text-md text-rose dark:text-gold",children:t.title}),s.jsx("p",{children:t.description})]},t.id)},h=()=>{const{category:t}=l(),{getByCat:r}=d(),[i,c]=a.useState([]),o=a.useRef(0);return o.current++,console.log("GistList",o.current),a.useEffect(()=>{if(t){const e=r(t);e&&c(e)}},[]),s.jsxs(x,{children:[t&&s.jsx(u,{text:t}),s.jsx("div",{className:"grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4",children:i&&i.map(e=>s.jsx(f,{item:e},e.id))})]})};export{h as default};
