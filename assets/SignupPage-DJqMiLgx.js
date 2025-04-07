import{e as g,b,r as d,j as e,f as w,L as x,d as j,u as N}from"./index-DE4o4Nd4.js";import{n as v}from"./network-CfNJEYb2.js";const E=()=>{const[c]=g(),h=b(),[s,i]=d.useState({referredBy:"",name:"",username:"",email:"",phoneNumber:"",packageCode:"",password:"",confirmPassword:""}),[m,l]=d.useState(""),[u,p]=d.useState(!1);d.useEffect(()=>{const t=c.get("r");t&&i(r=>({...r,referredBy:t}))},[c]);const a=t=>{const{name:r,value:n}=t.target;i({...s,[r]:r==="username"?n.toLowerCase():n})},f=async t=>{var r,n;if(t.preventDefault(),l(""),!s.name||!s.username||!s.packageCode||!s.password||!s.confirmPassword){l("Please fill in all required fields.");return}if(s.password!==s.confirmPassword){l("Passwords do not match");return}p(!0);try{const o=await j.post(`${N}users/register-user`,s);console.log("Signup successful:",o.data),h("/signin")}catch(o){console.error("Signup failed:",o),l(((n=(r=o.response)==null?void 0:r.data)==null?void 0:n.message)||"Signup failed. Please try again.")}finally{p(!1)}};return e.jsxs("div",{className:"flex flex-col items-center justify-center bg-[#F5F6FA] md:flex-row",children:[e.jsx("div",{className:"hidden h-full w-[60%] items-center justify-center md:flex",children:e.jsx("div",{className:"w-[60%] shadow-md",children:e.jsx("img",{src:v,alt:"Network",style:{width:"100%",height:"300px"}})})}),e.jsx("div",{className:"h-full w-full bg-[#FFFFFF] md:w-[40%]",children:e.jsx("div",{className:"flex items-center justify-center",children:e.jsxs("div",{className:"flex w-full flex-col items-center justify-center rounded-xl bg-white p-8",children:[e.jsx("img",{src:w,alt:"Logo",style:{width:"100px"}}),e.jsx("h2",{className:"mb-4 text-center text-2xl font-semibold",children:"Join Us Now!"}),e.jsx("h2",{className:"mb-4 text-center text-sm font-semibold text-[#22C55E]",children:"Start by creating your FWG account"}),m&&e.jsx("p",{className:"mb-2 text-center text-sm text-red-500",children:m}),e.jsxs("form",{onSubmit:f,className:"w-full",children:[e.jsx("div",{className:"mb-4",children:e.jsx("input",{type:"text",name:"referredBy",value:s.referredBy,onChange:a,className:"mt-1 w-full rounded border bg-[#E8F0FE] p-2",placeholder:"Enter referrer ID (optional)"})}),e.jsx("div",{className:"mb-4",children:e.jsx("input",{type:"text",name:"name",value:s.name,onChange:a,className:"mt-1 w-full rounded border bg-[#E8F0FE] p-2",placeholder:"Full name *"})}),e.jsx("div",{className:"mb-4",children:e.jsx("input",{type:"text",name:"username",value:s.username,onChange:a,className:"mt-1 w-full rounded border bg-[#E8F0FE] p-2",placeholder:"Username *"})}),e.jsx("div",{className:"mb-4",children:e.jsx("input",{type:"email",name:"email",value:s.email,onChange:a,className:"mt-1 w-full rounded border bg-[#E8F0FE] p-2",placeholder:"Email (optional)"})}),e.jsx("div",{className:"mb-4",children:e.jsx("input",{type:"text",name:"phoneNumber",value:s.phoneNumber,onChange:a,className:"mt-1 w-full rounded border bg-[#E8F0FE] p-2",placeholder:"Phone number (optional)"})}),e.jsxs("div",{className:"mb-4",children:[e.jsx("input",{type:"text",name:"packageCode",value:s.packageCode,onChange:a,className:"mt-1 w-full rounded border bg-[#E8F0FE] p-2",placeholder:"Package code *"}),e.jsxs("p",{className:"mt-2 text-sm text-gray-600",children:["You do not have a code?"," ",e.jsx(x,{className:"text-sm text-[#22C55E]",to:"/contact-vendor",children:"Get Code"})]})]}),e.jsx("div",{className:"mb-4",children:e.jsx("input",{type:"password",name:"password",value:s.password,onChange:a,className:"mt-1 w-full rounded border bg-[#E8F0FE] p-2",placeholder:"Password"})}),e.jsx("div",{className:"mb-4",children:e.jsx("input",{type:"password",name:"confirmPassword",value:s.confirmPassword,onChange:a,className:"mt-1 w-full rounded border bg-[#E8F0FE] p-2",placeholder:"Confirm password"})}),e.jsx("button",{type:"submit",className:"w-full rounded bg-[#22C55E] py-2 text-white hover:bg-blue-600",disabled:u,children:u?"Signing Up...":"Sign Up"})]}),e.jsxs("p",{className:"mt-4 text-center text-gray-600",children:["Already have an account?"," ",e.jsx(x,{to:"/signin",className:"text-[#22C55E]",children:"Login"})]})]})})})]})};export{E as default};
