import{f as k,F as R,h as w,H as Q,bU as j,r as z,n as d,Y as D,o as y,a8 as P,J as K,bV as N,ak as U,L as v,j as E}from"./index.6def9867.js";var Y=k({name:"QRating",props:{...R,...w,modelValue:{type:Number,required:!0},max:{type:[String,Number],default:5},icon:[String,Array],iconHalf:[String,Array],iconSelected:[String,Array],iconAriaLabel:[String,Array],color:[String,Array],colorHalf:[String,Array],colorSelected:[String,Array],noReset:Boolean,noDimming:Boolean,readonly:Boolean,disable:Boolean},emits:["update:modelValue"],setup(e,{slots:L,emit:I}){const{proxy:{$q:g}}=E(),H=Q(e),$=j(e),x=N($),o=z(0);let u={};const f=d(()=>e.readonly!==!0&&e.disable!==!0),C=d(()=>`q-rating row inline items-center q-rating--${f.value===!0?"":"non-"}editable`+(e.noDimming===!0?" q-rating--no-dimming":"")+(e.disable===!0?" disabled":"")+(e.color!==void 0&&Array.isArray(e.color)===!1?` text-${e.color}`:"")),V=d(()=>{const l=Array.isArray(e.icon)===!0?e.icon.length:0,n=Array.isArray(e.iconSelected)===!0?e.iconSelected.length:0,t=Array.isArray(e.iconHalf)===!0?e.iconHalf.length:0,c=Array.isArray(e.color)===!0?e.color.length:0,i=Array.isArray(e.colorSelected)===!0?e.colorSelected.length:0,a=Array.isArray(e.colorHalf)===!0?e.colorHalf.length:0;return{iconLen:l,icon:l>0?e.icon[l-1]:e.icon,selIconLen:n,selIcon:n>0?e.iconSelected[n-1]:e.iconSelected,halfIconLen:t,halfIcon:t>0?e.iconHalf[n-1]:e.iconHalf,colorLen:c,color:c>0?e.color[c-1]:e.color,selColorLen:i,selColor:i>0?e.colorSelected[i-1]:e.colorSelected,halfColorLen:a,halfColor:a>0?e.colorHalf[a-1]:e.colorHalf}}),q=d(()=>{if(typeof e.iconAriaLabel=="string"){const l=e.iconAriaLabel.length!==0?`${e.iconAriaLabel} `:"";return n=>`${l}${n}`}if(Array.isArray(e.iconAriaLabel)===!0){const l=e.iconAriaLabel.length;if(l>0)return n=>e.iconAriaLabel[Math.min(n,l)-1]}return(l,n)=>`${n} ${l}`}),_=d(()=>{const l=[],n=V.value,t=Math.ceil(e.modelValue),c=f.value===!0?0:null,i=e.iconHalf===void 0||t===e.modelValue?-1:t;for(let a=1;a<=e.max;a++){const r=o.value===0&&e.modelValue>=a||o.value>0&&o.value>=a,s=i===a&&o.value<a,m=o.value>0&&(s===!0?t:e.modelValue)>=a&&o.value<a,b=s===!0?a<=n.halfColorLen?e.colorHalf[a-1]:n.halfColor:n.selColor!==void 0&&r===!0?a<=n.selColorLen?e.colorSelected[a-1]:n.selColor:a<=n.colorLen?e.color[a-1]:n.color,F=(s===!0?a<=n.halfIconLen?e.iconHalf[a-1]:n.halfIcon:n.selIcon!==void 0&&(r===!0||m===!0)?a<=n.selIconLen?e.iconSelected[a-1]:n.selIcon:a<=n.iconLen?e.icon[a-1]:n.icon)||g.iconSet.rating.icon;l.push({name:(s===!0?a<=n.halfIconLen?e.iconHalf[a-1]:n.halfIcon:n.selIcon!==void 0&&(r===!0||m===!0)?a<=n.selIconLen?e.iconSelected[a-1]:n.selIcon:a<=n.iconLen?e.icon[a-1]:n.icon)||g.iconSet.rating.icon,attrs:{tabindex:c,role:"radio","aria-checked":e.modelValue===a?"true":"false","aria-label":q.value(a,F)},iconClass:"q-rating__icon"+(r===!0||s===!0?" q-rating__icon--active":"")+(m===!0?" q-rating__icon--exselected":"")+(o.value===a?" q-rating__icon--hovered":"")+(b!==void 0?` text-${b}`:"")})}return l}),M=d(()=>{const l={role:"radiogroup"};return e.disable===!0&&(l["aria-disabled"]="true"),e.readonly===!0&&(l["aria-readonly"]="true"),l});function h(l){if(f.value===!0){const n=U(parseInt(l,10),1,parseInt(e.max,10)),t=e.noReset!==!0&&e.modelValue===n?0:n;t!==e.modelValue&&I("update:modelValue",t),o.value=0}}function A(l){f.value===!0&&(o.value=l)}function B(l,n){switch(l.keyCode){case 13:case 32:return h(n),v(l);case 37:case 40:return u[`rt${n-1}`]&&u[`rt${n-1}`].focus(),v(l);case 39:case 38:return u[`rt${n+1}`]&&u[`rt${n+1}`].focus(),v(l)}}function S(){o.value=0}return D(()=>{u={}}),()=>{const l=[];return _.value.forEach(({iconClass:n,name:t,attrs:c},i)=>{const a=i+1;l.push(y("div",{key:a,ref:r=>{u[`rt${a}`]=r},class:"q-rating__icon-container flex flex-center",...c,onClick(){h(a)},onMouseover(){A(a)},onMouseout:S,onFocus(){A(a)},onBlur:S,onKeyup(r){B(r,a)}},P(L[`tip-${a}`],[y(K,{class:n,name:t})])))}),e.name!==void 0&&e.disable!==!0&&x(l,"push"),y("div",{class:C.value,style:H.value,...M.value},l)}}});export{Y as Q};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVJhdGluZy5hMWUwMDc0Mi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9yYXRpbmcvUVJhdGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCBvbkJlZm9yZVVwZGF0ZSwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcblxuaW1wb3J0IHVzZVNpemUsIHsgdXNlU2l6ZVByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2Utc2l6ZS91c2Utc2l6ZS5qcydcbmltcG9ydCB7IHVzZUZvcm1Qcm9wcywgdXNlRm9ybUF0dHJzLCB1c2VGb3JtSW5qZWN0IH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvdXNlLWZvcm0vcHJpdmF0ZS51c2UtZm9ybS5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC9ldmVudC5qcydcbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FSYXRpbmcnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlU2l6ZVByb3BzLFxuICAgIC4uLnVzZUZvcm1Qcm9wcyxcblxuICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcblxuICAgIG1heDoge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogNVxuICAgIH0sXG5cbiAgICBpY29uOiBbIFN0cmluZywgQXJyYXkgXSxcbiAgICBpY29uSGFsZjogWyBTdHJpbmcsIEFycmF5IF0sXG4gICAgaWNvblNlbGVjdGVkOiBbIFN0cmluZywgQXJyYXkgXSxcblxuICAgIGljb25BcmlhTGFiZWw6IFsgU3RyaW5nLCBBcnJheSBdLFxuXG4gICAgY29sb3I6IFsgU3RyaW5nLCBBcnJheSBdLFxuICAgIGNvbG9ySGFsZjogWyBTdHJpbmcsIEFycmF5IF0sXG4gICAgY29sb3JTZWxlY3RlZDogWyBTdHJpbmcsIEFycmF5IF0sXG5cbiAgICBub1Jlc2V0OiBCb29sZWFuLFxuICAgIG5vRGltbWluZzogQm9vbGVhbixcblxuICAgIHJlYWRvbmx5OiBCb29sZWFuLFxuICAgIGRpc2FibGU6IEJvb2xlYW5cbiAgfSxcblxuICBlbWl0czogWyAndXBkYXRlOm1vZGVsVmFsdWUnIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCBzaXplU3R5bGUgPSB1c2VTaXplKHByb3BzKVxuICAgIGNvbnN0IGZvcm1BdHRycyA9IHVzZUZvcm1BdHRycyhwcm9wcylcbiAgICBjb25zdCBpbmplY3RGb3JtSW5wdXQgPSB1c2VGb3JtSW5qZWN0KGZvcm1BdHRycylcblxuICAgIGNvbnN0IG1vdXNlTW9kZWwgPSByZWYoMClcblxuICAgIGxldCBpY29uUmVmcyA9IHt9XG5cbiAgICBjb25zdCBlZGl0YWJsZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5yZWFkb25seSAhPT0gdHJ1ZSAmJiBwcm9wcy5kaXNhYmxlICE9PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1yYXRpbmcgcm93IGlubGluZSBpdGVtcy1jZW50ZXInXG4gICAgICArIGAgcS1yYXRpbmctLSR7IGVkaXRhYmxlLnZhbHVlID09PSB0cnVlID8gJycgOiAnbm9uLScgfWVkaXRhYmxlYFxuICAgICAgKyAocHJvcHMubm9EaW1taW5nID09PSB0cnVlID8gJyBxLXJhdGluZy0tbm8tZGltbWluZycgOiAnJylcbiAgICAgICsgKHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAnIGRpc2FibGVkJyA6ICcnKVxuICAgICAgKyAoXG4gICAgICAgIHByb3BzLmNvbG9yICE9PSB2b2lkIDAgJiYgQXJyYXkuaXNBcnJheShwcm9wcy5jb2xvcikgPT09IGZhbHNlXG4gICAgICAgICAgPyBgIHRleHQtJHsgcHJvcHMuY29sb3IgfWBcbiAgICAgICAgICA6ICcnXG4gICAgICApXG4gICAgKVxuXG4gICAgY29uc3QgaWNvbkRhdGEgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdFxuICAgICAgICBpY29uTGVuID0gQXJyYXkuaXNBcnJheShwcm9wcy5pY29uKSA9PT0gdHJ1ZSA/IHByb3BzLmljb24ubGVuZ3RoIDogMCxcbiAgICAgICAgc2VsSWNvbkxlbiA9IEFycmF5LmlzQXJyYXkocHJvcHMuaWNvblNlbGVjdGVkKSA9PT0gdHJ1ZSA/IHByb3BzLmljb25TZWxlY3RlZC5sZW5ndGggOiAwLFxuICAgICAgICBoYWxmSWNvbkxlbiA9IEFycmF5LmlzQXJyYXkocHJvcHMuaWNvbkhhbGYpID09PSB0cnVlID8gcHJvcHMuaWNvbkhhbGYubGVuZ3RoIDogMCxcbiAgICAgICAgY29sb3JMZW4gPSBBcnJheS5pc0FycmF5KHByb3BzLmNvbG9yKSA9PT0gdHJ1ZSA/IHByb3BzLmNvbG9yLmxlbmd0aCA6IDAsXG4gICAgICAgIHNlbENvbG9yTGVuID0gQXJyYXkuaXNBcnJheShwcm9wcy5jb2xvclNlbGVjdGVkKSA9PT0gdHJ1ZSA/IHByb3BzLmNvbG9yU2VsZWN0ZWQubGVuZ3RoIDogMCxcbiAgICAgICAgaGFsZkNvbG9yTGVuID0gQXJyYXkuaXNBcnJheShwcm9wcy5jb2xvckhhbGYpID09PSB0cnVlID8gcHJvcHMuY29sb3JIYWxmLmxlbmd0aCA6IDBcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWNvbkxlbixcbiAgICAgICAgaWNvbjogaWNvbkxlbiA+IDAgPyBwcm9wcy5pY29uWyBpY29uTGVuIC0gMSBdIDogcHJvcHMuaWNvbixcbiAgICAgICAgc2VsSWNvbkxlbixcbiAgICAgICAgc2VsSWNvbjogc2VsSWNvbkxlbiA+IDAgPyBwcm9wcy5pY29uU2VsZWN0ZWRbIHNlbEljb25MZW4gLSAxIF0gOiBwcm9wcy5pY29uU2VsZWN0ZWQsXG4gICAgICAgIGhhbGZJY29uTGVuLFxuICAgICAgICBoYWxmSWNvbjogaGFsZkljb25MZW4gPiAwID8gcHJvcHMuaWNvbkhhbGZbIHNlbEljb25MZW4gLSAxIF0gOiBwcm9wcy5pY29uSGFsZixcbiAgICAgICAgY29sb3JMZW4sXG4gICAgICAgIGNvbG9yOiBjb2xvckxlbiA+IDAgPyBwcm9wcy5jb2xvclsgY29sb3JMZW4gLSAxIF0gOiBwcm9wcy5jb2xvcixcbiAgICAgICAgc2VsQ29sb3JMZW4sXG4gICAgICAgIHNlbENvbG9yOiBzZWxDb2xvckxlbiA+IDAgPyBwcm9wcy5jb2xvclNlbGVjdGVkWyBzZWxDb2xvckxlbiAtIDEgXSA6IHByb3BzLmNvbG9yU2VsZWN0ZWQsXG4gICAgICAgIGhhbGZDb2xvckxlbixcbiAgICAgICAgaGFsZkNvbG9yOiBoYWxmQ29sb3JMZW4gPiAwID8gcHJvcHMuY29sb3JIYWxmWyBoYWxmQ29sb3JMZW4gLSAxIF0gOiBwcm9wcy5jb2xvckhhbGZcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaWNvbkxhYmVsID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBwcm9wcy5pY29uQXJpYUxhYmVsID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCBsYWJlbCA9IHByb3BzLmljb25BcmlhTGFiZWwubGVuZ3RoICE9PSAwID8gYCR7IHByb3BzLmljb25BcmlhTGFiZWwgfSBgIDogJydcbiAgICAgICAgcmV0dXJuIGkgPT4gYCR7IGxhYmVsIH0keyBpIH1gXG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BzLmljb25BcmlhTGFiZWwpID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGlNYXggPSBwcm9wcy5pY29uQXJpYUxhYmVsLmxlbmd0aFxuXG4gICAgICAgIGlmIChpTWF4ID4gMCkge1xuICAgICAgICAgIHJldHVybiBpID0+IHByb3BzLmljb25BcmlhTGFiZWxbIE1hdGgubWluKGksIGlNYXgpIC0gMSBdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChpLCBsYWJlbCkgPT4gYCR7IGxhYmVsIH0gJHsgaSB9YFxuICAgIH0pXG5cbiAgICBjb25zdCBzdGFycyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0XG4gICAgICAgIGFjYyA9IFtdLFxuICAgICAgICBpY29ucyA9IGljb25EYXRhLnZhbHVlLFxuICAgICAgICBjZWlsID0gTWF0aC5jZWlsKHByb3BzLm1vZGVsVmFsdWUpLFxuICAgICAgICB0YWJpbmRleCA9IGVkaXRhYmxlLnZhbHVlID09PSB0cnVlID8gMCA6IG51bGxcblxuICAgICAgY29uc3QgaGFsZkluZGV4ID0gcHJvcHMuaWNvbkhhbGYgPT09IHZvaWQgMCB8fCBjZWlsID09PSBwcm9wcy5tb2RlbFZhbHVlXG4gICAgICAgID8gLTFcbiAgICAgICAgOiBjZWlsXG5cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHByb3BzLm1heDsgaSsrKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgYWN0aXZlID0gKG1vdXNlTW9kZWwudmFsdWUgPT09IDAgJiYgcHJvcHMubW9kZWxWYWx1ZSA+PSBpKSB8fCAobW91c2VNb2RlbC52YWx1ZSA+IDAgJiYgbW91c2VNb2RlbC52YWx1ZSA+PSBpKSxcbiAgICAgICAgICBoYWxmID0gaGFsZkluZGV4ID09PSBpICYmIG1vdXNlTW9kZWwudmFsdWUgPCBpLFxuICAgICAgICAgIGV4U2VsZWN0ZWQgPSBtb3VzZU1vZGVsLnZhbHVlID4gMCAmJiAoaGFsZiA9PT0gdHJ1ZSA/IGNlaWwgOiBwcm9wcy5tb2RlbFZhbHVlKSA+PSBpICYmIG1vdXNlTW9kZWwudmFsdWUgPCBpLFxuICAgICAgICAgIGNvbG9yID0gaGFsZiA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyAoaSA8PSBpY29ucy5oYWxmQ29sb3JMZW4gPyBwcm9wcy5jb2xvckhhbGZbIGkgLSAxIF0gOiBpY29ucy5oYWxmQ29sb3IpXG4gICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICBpY29ucy5zZWxDb2xvciAhPT0gdm9pZCAwICYmIGFjdGl2ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgPyAoaSA8PSBpY29ucy5zZWxDb2xvckxlbiA/IHByb3BzLmNvbG9yU2VsZWN0ZWRbIGkgLSAxIF0gOiBpY29ucy5zZWxDb2xvcilcbiAgICAgICAgICAgICAgICAgIDogKGkgPD0gaWNvbnMuY29sb3JMZW4gPyBwcm9wcy5jb2xvclsgaSAtIDEgXSA6IGljb25zLmNvbG9yKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgIG5hbWUgPSAoXG4gICAgICAgICAgICBoYWxmID09PSB0cnVlXG4gICAgICAgICAgICAgID8gKGkgPD0gaWNvbnMuaGFsZkljb25MZW4gPyBwcm9wcy5pY29uSGFsZlsgaSAtIDEgXSA6IGljb25zLmhhbGZJY29uKVxuICAgICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICAgIGljb25zLnNlbEljb24gIT09IHZvaWQgMCAmJiAoYWN0aXZlID09PSB0cnVlIHx8IGV4U2VsZWN0ZWQgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgID8gKGkgPD0gaWNvbnMuc2VsSWNvbkxlbiA/IHByb3BzLmljb25TZWxlY3RlZFsgaSAtIDEgXSA6IGljb25zLnNlbEljb24pXG4gICAgICAgICAgICAgICAgICAgIDogKGkgPD0gaWNvbnMuaWNvbkxlbiA/IHByb3BzLmljb25bIGkgLSAxIF0gOiBpY29ucy5pY29uKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICApIHx8ICRxLmljb25TZXQucmF0aW5nLmljb25cblxuICAgICAgICBhY2MucHVzaCh7XG4gICAgICAgICAgbmFtZTogKFxuICAgICAgICAgICAgaGFsZiA9PT0gdHJ1ZVxuICAgICAgICAgICAgICA/IChpIDw9IGljb25zLmhhbGZJY29uTGVuID8gcHJvcHMuaWNvbkhhbGZbIGkgLSAxIF0gOiBpY29ucy5oYWxmSWNvbilcbiAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgICBpY29ucy5zZWxJY29uICE9PSB2b2lkIDAgJiYgKGFjdGl2ZSA9PT0gdHJ1ZSB8fCBleFNlbGVjdGVkID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICA/IChpIDw9IGljb25zLnNlbEljb25MZW4gPyBwcm9wcy5pY29uU2VsZWN0ZWRbIGkgLSAxIF0gOiBpY29ucy5zZWxJY29uKVxuICAgICAgICAgICAgICAgICAgICA6IChpIDw9IGljb25zLmljb25MZW4gPyBwcm9wcy5pY29uWyBpIC0gMSBdIDogaWNvbnMuaWNvbilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgKSB8fCAkcS5pY29uU2V0LnJhdGluZy5pY29uLFxuXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHRhYmluZGV4LFxuICAgICAgICAgICAgcm9sZTogJ3JhZGlvJyxcbiAgICAgICAgICAgICdhcmlhLWNoZWNrZWQnOiBwcm9wcy5tb2RlbFZhbHVlID09PSBpID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogaWNvbkxhYmVsLnZhbHVlKGksIG5hbWUpXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGljb25DbGFzczogJ3EtcmF0aW5nX19pY29uJ1xuICAgICAgICAgICAgKyAoYWN0aXZlID09PSB0cnVlIHx8IGhhbGYgPT09IHRydWUgPyAnIHEtcmF0aW5nX19pY29uLS1hY3RpdmUnIDogJycpXG4gICAgICAgICAgICArIChleFNlbGVjdGVkID09PSB0cnVlID8gJyBxLXJhdGluZ19faWNvbi0tZXhzZWxlY3RlZCcgOiAnJylcbiAgICAgICAgICAgICsgKG1vdXNlTW9kZWwudmFsdWUgPT09IGkgPyAnIHEtcmF0aW5nX19pY29uLS1ob3ZlcmVkJyA6ICcnKVxuICAgICAgICAgICAgKyAoY29sb3IgIT09IHZvaWQgMCA/IGAgdGV4dC0keyBjb2xvciB9YCA6ICcnKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBhdHRycyA9IHsgcm9sZTogJ3JhZGlvZ3JvdXAnIH1cblxuICAgICAgaWYgKHByb3BzLmRpc2FibGUgPT09IHRydWUpIHtcbiAgICAgICAgYXR0cnNbICdhcmlhLWRpc2FibGVkJyBdID0gJ3RydWUnXG4gICAgICB9XG4gICAgICBpZiAocHJvcHMucmVhZG9ubHkgPT09IHRydWUpIHtcbiAgICAgICAgYXR0cnNbICdhcmlhLXJlYWRvbmx5JyBdID0gJ3RydWUnXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhdHRyc1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBzZXQgKHZhbHVlKSB7XG4gICAgICBpZiAoZWRpdGFibGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgICBtb2RlbCA9IGJldHdlZW4ocGFyc2VJbnQodmFsdWUsIDEwKSwgMSwgcGFyc2VJbnQocHJvcHMubWF4LCAxMCkpLFxuICAgICAgICAgIG5ld1ZhbCA9IHByb3BzLm5vUmVzZXQgIT09IHRydWUgJiYgcHJvcHMubW9kZWxWYWx1ZSA9PT0gbW9kZWwgPyAwIDogbW9kZWxcblxuICAgICAgICBuZXdWYWwgIT09IHByb3BzLm1vZGVsVmFsdWUgJiYgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBuZXdWYWwpXG4gICAgICAgIG1vdXNlTW9kZWwudmFsdWUgPSAwXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0SG92ZXJWYWx1ZSAodmFsdWUpIHtcbiAgICAgIGlmIChlZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBtb3VzZU1vZGVsLnZhbHVlID0gdmFsdWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbktleXVwIChlLCBpKSB7XG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgIHNldChpKVxuICAgICAgICAgIHJldHVybiBzdG9wQW5kUHJldmVudChlKVxuICAgICAgICBjYXNlIDM3OiAvLyBMRUZUIEFSUk9XXG4gICAgICAgIGNhc2UgNDA6IC8vIERPV04gQVJST1dcbiAgICAgICAgICBpZiAoaWNvblJlZnNbIGBydCR7IGkgLSAxIH1gIF0pIHtcbiAgICAgICAgICAgIGljb25SZWZzWyBgcnQkeyBpIC0gMSB9YCBdLmZvY3VzKClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgICAgIGNhc2UgMzk6IC8vIFJJR0hUIEFSUk9XXG4gICAgICAgIGNhc2UgMzg6IC8vIFVQIEFSUk9XXG4gICAgICAgICAgaWYgKGljb25SZWZzWyBgcnQkeyBpICsgMSB9YCBdKSB7XG4gICAgICAgICAgICBpY29uUmVmc1sgYHJ0JHsgaSArIDEgfWAgXS5mb2N1cygpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdG9wQW5kUHJldmVudChlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0TW91c2VNb2RlbCAoKSB7XG4gICAgICBtb3VzZU1vZGVsLnZhbHVlID0gMFxuICAgIH1cblxuICAgIG9uQmVmb3JlVXBkYXRlKCgpID0+IHtcbiAgICAgIGljb25SZWZzID0ge31cbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gW11cblxuICAgICAgc3RhcnMudmFsdWUuZm9yRWFjaCgoeyBpY29uQ2xhc3MsIG5hbWUsIGF0dHJzIH0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGkgPSBpbmRleCArIDFcblxuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgIHJlZjogZWwgPT4geyBpY29uUmVmc1sgYHJ0JHsgaSB9YCBdID0gZWwgfSxcbiAgICAgICAgICAgIGNsYXNzOiAncS1yYXRpbmdfX2ljb24tY29udGFpbmVyIGZsZXggZmxleC1jZW50ZXInLFxuICAgICAgICAgICAgLi4uYXR0cnMsXG4gICAgICAgICAgICBvbkNsaWNrICgpIHsgc2V0KGkpIH0sXG4gICAgICAgICAgICBvbk1vdXNlb3ZlciAoKSB7IHNldEhvdmVyVmFsdWUoaSkgfSxcbiAgICAgICAgICAgIG9uTW91c2VvdXQ6IHJlc2V0TW91c2VNb2RlbCxcbiAgICAgICAgICAgIG9uRm9jdXMgKCkgeyBzZXRIb3ZlclZhbHVlKGkpIH0sXG4gICAgICAgICAgICBvbkJsdXI6IHJlc2V0TW91c2VNb2RlbCxcbiAgICAgICAgICAgIG9uS2V5dXAgKGUpIHsgb25LZXl1cChlLCBpKSB9XG4gICAgICAgICAgfSwgaE1lcmdlU2xvdChcbiAgICAgICAgICAgIHNsb3RzWyBgdGlwLSR7IGkgfWAgXSxcbiAgICAgICAgICAgIFsgaChRSWNvbiwgeyBjbGFzczogaWNvbkNsYXNzLCBuYW1lIH0pIF1cbiAgICAgICAgICApKVxuICAgICAgICApXG4gICAgICB9KVxuXG4gICAgICBpZiAocHJvcHMubmFtZSAhPT0gdm9pZCAwICYmIHByb3BzLmRpc2FibGUgIT09IHRydWUpIHtcbiAgICAgICAgaW5qZWN0Rm9ybUlucHV0KGNoaWxkLCAncHVzaCcpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc2l6ZVN0eWxlLnZhbHVlLFxuICAgICAgICAuLi5hdHRyaWJ1dGVzLnZhbHVlXG4gICAgICB9LCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iXSwibmFtZXMiOlsiUVJhdGluZyIsImNyZWF0ZUNvbXBvbmVudCIsInVzZVNpemVQcm9wcyIsInVzZUZvcm1Qcm9wcyIsInByb3BzIiwic2xvdHMiLCJlbWl0IiwiJHEiLCJnZXRDdXJyZW50SW5zdGFuY2UiLCJzaXplU3R5bGUiLCJ1c2VTaXplIiwiZm9ybUF0dHJzIiwidXNlRm9ybUF0dHJzIiwiaW5qZWN0Rm9ybUlucHV0IiwidXNlRm9ybUluamVjdCIsIm1vdXNlTW9kZWwiLCJyZWYiLCJpY29uUmVmcyIsImVkaXRhYmxlIiwiY29tcHV0ZWQiLCJjbGFzc2VzIiwiaWNvbkRhdGEiLCJpY29uTGVuIiwic2VsSWNvbkxlbiIsImhhbGZJY29uTGVuIiwiY29sb3JMZW4iLCJzZWxDb2xvckxlbiIsImhhbGZDb2xvckxlbiIsImljb25MYWJlbCIsImxhYmVsIiwiaSIsImlNYXgiLCJzdGFycyIsImFjYyIsImljb25zIiwiY2VpbCIsInRhYmluZGV4IiwiaGFsZkluZGV4IiwiYWN0aXZlIiwiaGFsZiIsImV4U2VsZWN0ZWQiLCJjb2xvciIsIm5hbWUiLCJhdHRyaWJ1dGVzIiwiYXR0cnMiLCJzZXQiLCJ2YWx1ZSIsIm1vZGVsIiwiYmV0d2VlbiIsIm5ld1ZhbCIsInNldEhvdmVyVmFsdWUiLCJvbktleXVwIiwiZSIsInN0b3BBbmRQcmV2ZW50IiwicmVzZXRNb3VzZU1vZGVsIiwib25CZWZvcmVVcGRhdGUiLCJjaGlsZCIsImljb25DbGFzcyIsImluZGV4IiwiaCIsImVsIiwiaE1lcmdlU2xvdCIsIlFJY29uIl0sIm1hcHBpbmdzIjoiOElBWUEsSUFBQUEsRUFBZUMsRUFBZ0IsQ0FDN0IsS0FBTSxVQUVOLE1BQU8sQ0FDTCxHQUFHQyxFQUNILEdBQUdDLEVBRUgsV0FBWSxDQUNWLEtBQU0s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