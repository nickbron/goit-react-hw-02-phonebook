(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{20:function(n,e,t){},33:function(n,e,t){"use strict";t.r(e);var a,r,o,c,i=t(1),s=t.n(i),d=t(11),l=t.n(d),u=(t(20),t(5)),b=t(14),p=t(6),h=t(7),m=t(9),j=t(8),x=t(12),f=t.n(x),O=t(2),g=t(3),v=g.a.form(a||(a=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),C=g.a.input(r||(r=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n  width: 50%;\n  :focus {\n    border: 3px solid #555;\n  }\n"]))),y=g.a.button(o||(o=Object(O.a)(["\n  display: inline-block;\n  padding: 5px 10px;\n  margin-left: 10px;\n  font-size: 14px;\n  width: 100px;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  color: #fff;\n  background-color: #4caf50;\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 9px #999;\n\n  :hover {\n    background-color: #3e8e41;\n  }\n  :active {\n    background-color: #3e8e41;\n    box-shadow: 0 5px #666;\n    transform: translateY(4px);\n  }\n"]))),w=t(0),k=function(n){Object(m.a)(t,n);var e=Object(j.a)(t);function t(){var n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={name:"",number:""},n.handleInputChange=function(e){var t=e.currentTarget,a=t.name,r=t.value;n.setState(Object(u.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault(),n.props.onAdd(n.state),n.reset()},n.reset=function(){return n.setState({name:"",number:""})},n}return Object(h.a)(t,[{key:"render",value:function(){return Object(w.jsx)("div",{children:Object(w.jsxs)(v,{onSubmit:this.handleSubmit,children:[Object(w.jsx)(C,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:this.state.name,onChange:this.handleInputChange,required:!0}),Object(w.jsx)(C,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:this.state.number,onChange:this.handleInputChange,required:!0}),Object(w.jsx)(y,{type:"submit",children:"Add contact"})]})})}}]),t}(i.Component),A=g.a.button(c||(c=Object(O.a)(["\n  display: inline-block;\n  padding: 5px 5px;\n  margin-left: 10px;\n  font-size: 10px;\n  width: 50px;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  color: #fff;\n  background-color: #4caf50;\n  border: none;\n  border-radius: 15px;\n  /* box-shadow: 0 9px #999; */\n\n  :hover {\n    background-color: red;\n  }\n  :active {\n    background-color: red;\n    box-shadow: 0 5px #666;\n    transform: translateY(4px);\n  }\n"])));var S=function(n){var e=n.contacts,t=n.onDeleteContact;return Object(w.jsx)(w.Fragment,{children:e.length>0?Object(w.jsx)("ul",{children:e.map((function(n){return Object(w.jsxs)("li",{children:[Object(w.jsxs)("span",{children:[n.name,":"]}),Object(w.jsx)("span",{children:n.number}),Object(w.jsx)(A,{onClick:function(){return t(n.id)},type:"button",children:"Delete"})]},n.id)}))}):Object(w.jsx)("p",{children:"Contact list is empty"})})};var z,I=function(n){var e=n.filter,t=n.onChange;return Object(w.jsxs)(w.Fragment,{children:["Find contacts by name:",Object(w.jsx)(C,{type:"text",name:"filter",autoComplete:"off",value:e,onChange:t})]})},D=g.a.div(z||(z=Object(O.a)(["\n  width: 400px;\n  padding: 20px;\n  margin: 20px;\n  border: 1px solid black;\n"]))),N=function(n){Object(m.a)(t,n);var e=Object(j.a)(t);function t(){var n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},n.addNewContact=function(e){var t={id:f.a.generate(),name:e.name,number:e.number};n.state.contacts.find((function(n){return n.name===e.name}))?alert("".concat(e.name," is already in contacts.")):n.setState((function(n){return{contacts:[t].concat(Object(b.a)(n.contacts))}}))},n.handleInputChange=function(e){var t=e.currentTarget,a=t.name,r=t.value;n.setState(Object(u.a)({},a,r))},n.deleteContact=function(e){n.setState((function(n){return{contacts:n.contacts.filter((function(n){return n.id!==e}))}}))},n}return Object(h.a)(t,[{key:"render",value:function(){var n=this.state,e=n.contacts,t=n.filter,a=t.toLowerCase(),r=e.filter((function(n){return n.name.toLowerCase().includes(a)}));return Object(w.jsxs)(D,{children:[Object(w.jsx)("h1",{className:"title",children:"Phonebook"}),Object(w.jsx)(k,{onAdd:this.addNewContact}),Object(w.jsx)("h2",{className:"title",children:"Contacts"}),Object(w.jsx)(I,{filter:t,onChange:this.handleInputChange}),Object(w.jsx)(S,{contacts:r,onDeleteContact:this.deleteContact})]})}}]),t}(i.Component);l.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(N,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.840e9bd0.chunk.js.map