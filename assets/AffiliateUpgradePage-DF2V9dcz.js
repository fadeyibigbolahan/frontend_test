import{c as h,r as l,a as w,j as e,d as p,u as f}from"./index-jfWhtrrC.js";import{P as S}from"./package-dAIShWjA.js";/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=h("CircleChevronRight",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=h("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]),L=()=>{const[u,j]=l.useState([]),[a,y]=l.useState(null),[k,N]=l.useState(!0),[r,d]=l.useState(""),[o,x]=l.useState(!1),[g,m]=l.useState(""),{user:n,updateUser:v}=w();l.useEffect(()=>{(async()=>{try{const t=await p.get(`${f}package`);j(t.data)}catch(t){d("Failed to load packages."),console.error(t)}finally{N(!1)}})()},[]);const b=async()=>{var s,t;if(!a){alert("Please select a package first.");return}x(!0),d(""),m("");try{const c=await p.put(`${f}package/upgrade-package`,{newPackageId:a._id},{headers:{"Content-Type":"application/json",Authorization:`${localStorage.getItem("token")}`}});m(c.data.message||"Upgrade successful!"),v()}catch(c){d(((t=(s=c.response)==null?void 0:s.data)==null?void 0:t.message)||"Upgrade failed. Try again."),console.error(c)}finally{x(!1)}};return e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx("h1",{className:"title",children:"Affiliate Upgrade"}),e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx("h2",{className:"text-sm font-semibold md:text-lg",children:"Select a package for your FWG Account upgrade"}),k?e.jsx("p",{children:"Loading packages..."}):r?e.jsx("p",{className:"text-red-500",children:r}):e.jsxs("div",{className:"flex w-full flex-col items-center justify-between md:flex-row",children:[e.jsx("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-2 md:w-[420px]",children:u.map((s,t)=>e.jsxs("div",{onClick:()=>y(s),className:`relative flex w-[170px] cursor-pointer flex-row gap-2 rounded-md border bg-white p-2 hover:bg-[#22C55E50] md:w-[200px] ${(a==null?void 0:a._id)===(s==null?void 0:s._id)?"border-2 border-green-400":""}`,children:[e.jsx("div",{className:"flex h-[40px] w-[40px] items-center justify-center rounded-full bg-green-200",children:e.jsx(S,{size:20,color:"green"})}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-base font-semibold",children:s.name}),e.jsxs("h3",{className:"text-xs font-semibold text-black/50",children:["NGN ",s.price]})]}),(n==null?void 0:n.package)===(s==null?void 0:s._id)&&e.jsx(C,{size:15,className:"absolute right-2"})]},t))}),a&&e.jsxs("div",{className:"mt-4 flex flex-col items-start justify-start gap-4 md:w-1/2",children:[e.jsx("p",{className:"text-gray-500",children:"Package benefits"}),e.jsxs("div",{className:"flex flex-row gap-2 md:gap-4",children:[e.jsxs("ul",{className:"flex flex-col gap-2 md:gap-4",children:[e.jsxs("li",{className:"flex items-center justify-start gap-2 text-sm",children:[e.jsx(i,{size:16})," ",a.bv," BV"]}),e.jsxs("li",{className:"flex items-center justify-start gap-2 text-sm",children:[e.jsx(i,{size:16}),"NGN ",a.price*.2," Signup Bonus"]})]}),e.jsxs("ul",{className:"flex flex-col gap-2 md:gap-4",children:[e.jsxs("li",{className:"flex items-center justify-start gap-2 text-sm",children:[e.jsx(i,{size:16}),"Earn up to level ",a.commissionLevels.length]}),e.jsxs("li",{className:"flex items-center justify-start gap-2 text-sm",children:[e.jsx(i,{size:16}),"Unlimited referrals"]})]})]}),r&&e.jsx("p",{className:"text-red-500",children:r}),g&&e.jsx("p",{className:"text-green-500",children:g}),e.jsx("button",{onClick:b,disabled:o,className:"flex w-full items-center justify-center rounded-md bg-[#22C55E] p-2 text-white hover:bg-black md:w-2/3",children:o?"Upgrading...":"Upgrade your package"})]})]})]})]})};export{L as default};
