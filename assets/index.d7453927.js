import{N as l,V as p,au as b,b_ as y,b$ as h}from"./index.6def9867.js";function O(t){return y()?(h(t),!0):!1}function m(t){return typeof t=="function"?t():b(t)}const k=typeof window!="undefined"&&typeof document!="undefined";typeof WorkerGlobalScope!="undefined"&&globalThis instanceof WorkerGlobalScope;const g=Object.prototype.toString,w=t=>g.call(t)==="[object Object]",A=()=>{};function _(t,i,n){let e=n!=null&&n.immediate?[]:[...t instanceof Function?t():Array.isArray(t)?t:m(t)];return l(t,(o,S,u)=>{const c=Array.from({length:e.length}),f=[];for(const s of o){let a=!1;for(let r=0;r<e.length;r++)if(!c[r]&&s===e[r]){c[r]=!0,a=!0;break}a||f.push(s)}const d=e.filter((s,a)=>!c[a]);i(o,e,f,d,u),e=[...o]},n)}function v(t,i,n){const e=l(t,(...o)=>(p(()=>e()),i(...o)),n);return e}export{w as a,O as b,v as c,k as i,A as n,m as t,_ as w};