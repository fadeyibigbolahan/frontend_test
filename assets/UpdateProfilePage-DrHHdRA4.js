import{d as h,r as o,j as e,L as f,f as g,g as b,u as j}from"./index-CMmiLUaz.js";import{A as N}from"./arrow-left-F64ZmoVP.js";const v=()=>{const{user:a}=h(),[s,l]=o.useState({username:"",email:"",phoneNumber:"",password:""}),[d,m]=o.useState(!1),[i,n]=o.useState("");o.useEffect(()=>{a&&l({username:a.username,email:a.email,phoneNumber:a.phoneNumber||"",password:""})},[a]);const u=t=>{l({...s,[t.target.name]:t.target.value})},x=async t=>{var p,c;t.preventDefault(),m(!0),n("");try{const r=await b.put(`${j}users/profile/update`,{phoneNumber:s.phoneNumber,password:s.password},{headers:{Authorization:`${localStorage.getItem("token")}`}});n(r.data.message||"Profile updated successfully.")}catch(r){console.log("error",r),n(((c=(p=r.response)==null?void 0:p.data)==null?void 0:c.message)||"Failed to update profile.")}m(!1)};return e.jsx("div",{className:"flex h-screen w-screen items-center justify-center",children:e.jsxs("div",{className:"mx-auto w-full rounded-md bg-white p-4 shadow-md md:w-1/2",children:[e.jsxs("div",{className:"flex flex-row items-start justify-between",children:[e.jsx(f,{to:"/dashboard",children:e.jsx(N,{})}),e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx("img",{src:g,alt:"Logoipsum",style:{width:"100px"}}),e.jsx("h2",{className:"mb-4 text-xl font-semibold",children:"Update Profile"})]}),e.jsx("div",{})]}),i&&e.jsx("p",{className:"text-center text-sm text-red-500",children:i}),e.jsxs("form",{onSubmit:x,className:"flex flex-col gap-4",children:[e.jsx("input",{type:"text",name:"username",value:s.username,disabled:!0,className:"rounded border bg-gray-100 p-2"}),e.jsx("input",{type:"email",name:"email",value:s.email,disabled:!0,className:"rounded border bg-gray-100 p-2"}),e.jsx("input",{type:"text",name:"phoneNumber",value:s.phoneNumber,onChange:u,placeholder:"Phone Number",className:"rounded border p-2"}),e.jsx("input",{type:"password",name:"password",value:s.password,onChange:u,placeholder:"New Password",className:"rounded border p-2"}),e.jsx("button",{type:"submit",disabled:d,className:"rounded bg-green-500 p-2 text-white hover:bg-green-600",children:d?"Updating...":"Update Profile"})]})]})})};export{v as default};
