const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MagicWords-CcAiCm9z.js","assets/index-D1cqudJi.js","assets/index-DTX4JL0N.css"])))=>i.map(i=>d[i]);
import{r as l,j as t,_ as u}from"./index-D1cqudJi.js";import{M as m}from"./Section-cCWrQN1G.js";import{S as d}from"./SectionTitle-CghVty6N.js";const f=()=>{const[c,n]=l.useState("Welcome,  Dream Big!"),o=l.useRef(null);function i(e){const s=o.current;if(s){if(e%2!==0&&e>=0){const a=s.children[e],r=s.children[e-1];a&&r&&(a.classList.add("push-text"),r.classList.add("push-text"))}else if(e%2===0&&e>=0){const a=s.children[e],r=s.children[e+1];a&&r&&(a.classList.add("push-text"),r.classList.add("push-text"))}}}function h(e){const s=o.current;if(s){if(e%2!==0&&e>=0){const a=s.children[e],r=s.children[e-1];a&&r&&(a.classList.remove("push-text"),r.classList.remove("push-text"))}else if(e%2===0&&e>=0){const a=s.children[e],r=s.children[e+1];a&&r&&(a.classList.remove("push-text"),r.classList.remove("push-text"))}}}return t.jsxs("div",{className:"mt-4",children:[t.jsx("p",{ref:o,className:"skew-title",children:c.length>0&&c.split("").map((e,s)=>e===" "?t.jsx("strong",{className:"inline-block w-[1rem]",children:e},s):t.jsx("span",{className:"",onMouseLeave:()=>h(s),onMouseEnter:()=>i(s),children:e},s))}),t.jsxs("div",{className:"mt-4 rounded-lg p-2",children:[t.jsx("label",{className:"text-xs bg-rose dark:bg-gold  rounded-xl px-2 text-white dark:text-black ",htmlFor:"skew-message-textarea",children:"Change the message"}),t.jsx("textarea",{id:"skew-message-textarea",placeholder:"type your message",className:" mt-2 w-full bg-black/80 text-white p-2 truncate rounded-lg h-[40px]",onChange:e=>n(e.target.value),value:c})]})]})},p=l.lazy(()=>u(()=>import("./MagicWords-CcAiCm9z.js"),__vite__mapDeps([0,1,2]))),v=()=>t.jsxs(m,{children:[t.jsx(d,{text:"Tools"}),t.jsx(f,{}),t.jsxs("section",{className:"w-full",children:[t.jsx("h1",{className:"text-base font-light mb-3 text-rose dark:text-gold",children:"Push and drag to reveal the message"}),t.jsx(l.Suspense,{children:t.jsx(p,{canvasHeight:500})})]})]});export{v as default};