"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[518],{9518:function(n,e,t){t.r(e),t.d(e,{default:function(){return K}});var o,i,r,a,c,s,d,l,p,u=t(168),x=t(4934),f=x.Z.div(o||(o=(0,u.Z)(["\n    padding: 50px;   \n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    justify-content: center;\n    align-items: center;\n    font-size: 20px;\n    color: #8b00ff;\n   "]))),h=x.Z.p(i||(i=(0,u.Z)(["\n   color: green;\n   font-size: 25px;\n   font-weight: 500;\n"]))),m=(x.Z.button(r||(r=(0,u.Z)(["\n  width: 150px;\n  border-radius: 4px;\n  font-size: 14px;\n  padding: 2px 0;\n  border: 1px solid gray;\n    &:hover {\n    background-color: #bbe4e9;\n    font-weight: 700;\n    color: #f95959;\n  }\n"]))),t(5705)),g=(0,x.Z)(m.l0)(a||(a=(0,u.Z)(["\ndisplay: flex;\ngap:20px;\nflex-direction: column;\nwidth: 450px;\npadding: 10px;\nborder: 1px solid black;\nborder-radius:4px;\n"]))),b=x.Z.label(c||(c=(0,u.Z)(["\ngap:4px;\ndisplay: flex;\nflex-direction: column;\n"]))),y=(0,x.Z)(m.Bc)(s||(s=(0,u.Z)(["\ncolor: red;\n"]))),v=x.Z.button(d||(d=(0,u.Z)(["\n\n  border-radius: 4px;\n  font-size: 14px;\n  padding: 2px 0;\n  border: 1px solid gray;\n    &:hover {\n    background-color: #bbe4e9;\n    font-weight: 700;\n    color: #f95959;\n  }\n"]))),j=t(6727),Z=t(9434),w=t(208),N=function(n){return n.contacts.items},k=function(n){return n.filter},C=function(n){return n.contacts.isLoading},z=function(n){return n.contacts.error},A=t(1686),L=t.n(A),_=t(3329),P=j.Ry().shape({name:j.Z_().min(2,"Too Short!").max(50,"Too Long!").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Required, please Add Name!!!"),number:j.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required("Required, please Add Phone Number!!!")}),R=function(){var n=(0,Z.I0)(),e=(0,Z.v9)(N),t=(0,Z.v9)(z);return t&&L().Notify.failure("".concat(t," Reload the page, please.")),(0,_.jsx)(m.J9,{initialValues:{name:"",number:""},validationSchema:P,onSubmit:function(t,o){var i=o.resetForm;if(console.log("Hello"),e.some((function(n){return n.name.toLowerCase()===t.name.toLowerCase()})))return L().Notify.info('Hey, "'.concat(t.name,'" is already in contacts!')),void i();console.log(t),n((0,w.uK)(t)),i()},children:(0,_.jsxs)(g,{children:[(0,_.jsxs)(b,{children:["Name",(0,_.jsx)(m.gN,{type:"text",name:"name"}),(0,_.jsx)(y,{name:"name",component:"div"})]}),(0,_.jsxs)(b,{children:["Number",(0,_.jsx)(m.gN,{type:"tel",name:"number"}),(0,_.jsx)(y,{name:"number",component:"div"})]}),(0,_.jsx)(v,{type:"submit",children:"Add contact"})]})})};L().Notify.init({position:"right-top",width:"400px",distance:"10px",opacity:1,rtl:!1,timeout:1500});var q,F=x.Z.li(l||(l=(0,u.Z)(["\npadding-bottom: 10px;\n//  display: flex;\nalign-items: center;\ntext-content: center:\n gap: 15px;\n "]))),T=x.Z.button(p||(p=(0,u.Z)(["\n  \nwidth: 60px;\n  border-radius: 4px;\n  font-size: 14px;\n  padding: 2px 0;\n  border: 1px solid gray;\n    &:hover {\n    background-color: #bbe4e9;\n    font-weight: 700;\n    color: #f95959;\n  }\n"]))),I=t(2791),S=function(){var n=(0,Z.I0)(),e=(0,Z.v9)(z),t=(0,Z.v9)(N),o=(0,Z.v9)(k),i=t.filter((function(n){return n.name.toLowerCase().includes(o.toLowerCase())}));return(0,I.useEffect)((function(){n((0,w.yF)())}),[n]),e&&L().Notify.failure("".concat(e," Reload the page, please.")),(0,_.jsx)("ul",{children:i.map((function(e){return(0,_.jsxs)(F,{children:[(0,_.jsxs)("span",{children:[" ",e.name," : ",e.number," "]}),(0,_.jsx)(T,{onClick:function(){n((0,w.GK)(e.id))},children:"Delete"})]},e.id)}))})};L().Notify.init({position:"right-top",width:"400px",distance:"10px",opacity:1,rtl:!1,timeout:1500});var B=x.Z.div(q||(q=(0,u.Z)(["\ndisplay: flex;\ngap: 10px;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\n"]))),H=t(6895),J=function(){var n=(0,Z.I0)(),e=(0,Z.v9)(k);return(0,_.jsxs)(B,{children:[(0,_.jsx)("h3",{children:"Find contacts by name"}),(0,_.jsx)("input",{type:"text",value:e,onChange:function(e){return n((0,H.T)(e.currentTarget.value))}})]})};L().Notify.init({position:"right-top",width:"400px",distance:"10px",opacity:1,rtl:!1,timeout:2e3});var K=function(){var n=(0,Z.v9)(N),e=(0,Z.v9)(C),t=(0,Z.v9)(z);return t&&L().Notify.failure("Please reload the page. ".concat(t," ")),(0,_.jsxs)(f,{children:[(0,_.jsx)("h1",{children:"Phonebook"}),(0,_.jsx)(R,{}),(0,_.jsx)("h2",{children:"Contacts"}),e&&(0,_.jsx)("div",{children:"Loading contacts..."}),(0,_.jsx)(J,{}),(0,_.jsx)(S,{}),n.length>0?(0,_.jsx)(h,{children:" All Contacts have been succesfully uploaded"}):(0,_.jsx)(h,{children:" Phonebook is empty"})]})}}}]);
//# sourceMappingURL=518.2658002e.chunk.js.map