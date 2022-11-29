"use strict";(self.webpackChunkphonebook_typescript=self.webpackChunkphonebook_typescript||[]).push([[808],{6808:function(e,n,t){t.r(n),t.d(n,{default:function(){return M}});var r,a,s=t(1413),i=t(885),o=t(1134),c=t(9434),l=t(4695),u=t(2797),d=t(9085),m=t(2995),h=t(5819),p=t(713),f=t(7735),x=t(2838),b=t(3153),g=t(5501),j=t(168),C=t(9202),y=C.Z.form(r||(r=(0,j.Z)(["\n  margin-top: ","px;\n"])),(function(e){return e.theme.space[3]})),v=t(8828),Z=t(6871),z=t(4173),w=t(7689),k=t(3908),A=C.Z.div(a||(a=(0,j.Z)(["\n  min-width: 200px;\n  min-height: 160px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  p {\n    font-weight: ",";\n    font-size: ",";\n    line-height: 1.18;\n    letter-spacing: 0.05em;\n    color: ",";\n    text-align: center;\n\n    :last-of-type {\n      margin-bottom: ","px;\n\n      "," {\n        margin-bottom: ","px;\n      }\n    }\n\n    "," {\n      font-size: ",";\n    }\n\n    "," {\n      font-size: ",";\n    }\n  }\n"])),(function(e){return e.theme.fontWeight.bold}),(function(e){return e.theme.fontSizes.s}),(function(e){return e.theme.colors.accentTextColor}),(function(e){return e.theme.space[3]}),k.mq.medium,(function(e){return e.theme.space[4]}),k.mq.medium,(function(e){return e.theme.fontSizes.m}),k.mq.large,(function(e){return e.theme.fontSizes.l})),S=t(184),T=function(e){var n=e.contactToUpdate,t=e.closeModal,r=(0,b.T)(),a=(0,w.s0)();return(0,S.jsxs)(A,{children:[(0,S.jsxs)("p",{children:["User ",n.name.toUpperCase()," is already in Contacts."]}),(0,S.jsx)("p",{children:"Do you want to update it?"}),(0,S.jsxs)(v.x,{display:"flex",justifyContent:"center",alignItems:"center",gridGap:"16px",children:[(0,S.jsx)(m.z,{onClick:function(){r((0,g.Tk)(n)),t(),a("/contacts")},name:"primary",children:"Update"}),(0,S.jsx)(m.z,{name:"primary",onClick:t,children:"Cancel"})]})]})},q=t(2791),N={name:"",number:""},U=u.Ry().shape({name:u.Z_().min(4,"Name should be at least 4 characters").max(20,"Name should be at most 20 characters").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Name is required"),number:u.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Number is required")}),I=function(){var e=(0,b.T)(),n=(0,w.s0)(),t=(0,c.v9)(x.l.selectContacts),r=(0,c.v9)(x.l.selectLoading),a=(0,q.useState)(!1),u=(0,i.Z)(a,2),j=u[0],C=u[1],k=(0,q.useState)(null),A=(0,i.Z)(k,2),I=A[0],L=A[1],M=function(){return C((function(e){return!e}))},_=(0,o.cI)({defaultValues:(0,s.Z)({},N),resolver:(0,l.X)(U)}),F=_.register,P=_.handleSubmit,W=_.reset,$=_.formState.errors;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(y,{onSubmit:P((function(r){var a=r.name,i=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=e.toLowerCase();return n.find((function(e){return e.name.toLowerCase()===t}))}(a,t);if(t&&i){d.Am.warn("".concat(null===a||void 0===a?void 0:a.toUpperCase()," is already in CONTACTS"));var o=i.id;return L((0,s.Z)((0,s.Z)({},r),{},{id:o})),void M()}e((0,g.uK)(r)),n("/contacts"),W()})),children:[(0,S.jsx)(h.I,{name:"name",placeholder:"Name",register:F,error:$.name}),(0,S.jsx)(h.I,{type:p.Ar.tel,name:"number",placeholder:"Phone number",register:F,error:$.number}),(0,S.jsx)(f.a,{isLoading:r}),(0,S.jsxs)(v.x,{display:["flex"],justifyContent:"space-between",maxWidth:"280px",mx:"auto",children:[(0,S.jsx)(m.z,{type:"submit",name:"primary",disabled:j,children:"Add Contact"}),(0,S.jsx)(Z.j,{to:"/contacts",children:"To Contacts"})]})]}),j&&(0,S.jsx)(z.u,{closeModal:M,children:I&&(0,S.jsx)(T,{contactToUpdate:I,closeModal:M})})]})},L=t(6155),M=function(){return(0,S.jsx)(L.$,{title:"Create new contact",children:(0,S.jsx)(I,{})})}}}]);
//# sourceMappingURL=808.18e8130f.chunk.js.map