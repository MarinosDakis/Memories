(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{115:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(9),c=a.n(r),i=a(18),s=a(36),o=a(69),l=a(79),u="CREATE",d="UPDATE",p="DELETE",j="FETCH_ALL",b="LIKE",f=Object(s.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return e.filter((function(e){return e._id!==t.payload}));case d:case b:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case j:return t.payload;case u:return[].concat(Object(l.a)(e),[t.payload]);default:return e}}}),m=a(50),x=a(156),h=a(157),O=a(151),g=a(160),v=a(155),y=a(14),C=a.n(y),w=a(23),k=a(37),I=a.n(k),N="https://memories-deployment.herokuapp.com/posts",E=function(e,t){return I.a.patch("".concat(N,"/").concat(e),t)},S=function(e){return I.a.delete("".concat(N,"/").concat(e))},D=function(e){return I.a.patch("".concat(N,"/").concat(e,"/likePost"))},_=function(e){return function(){var t=Object(w.a)(C.a.mark((function t(a){var n,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,I.a.post(N,c);case 3:n=t.sent,r=n.data,a({type:u,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},z=function(e,t){return function(){var a=Object(w.a)(C.a.mark((function a(n){var r,c;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E(e,t);case 3:r=a.sent,c=r.data,n({type:d,payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},T=a(154),W=a(148),A=a(150),B=a(159),F=a(152),L=a(153),M=a(76),R=a.n(M),H=a(77),J=a.n(H),P=a(75),K=a.n(P),U=a(70),V=a.n(U),q=a(145),G=Object(q.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),Q=a(5),X=function(e){var t=e.post,a=e.setCurrentId,n=Object(i.b)(),r=G();return Object(Q.jsxs)(W.a,{className:r.card,children:[Object(Q.jsx)(A.a,{className:r.media,image:t.selectedFile,title:t.title}),Object(Q.jsxs)("div",{className:r.overlay,children:[Object(Q.jsx)(O.a,{variant:"h6",children:t.creator}),Object(Q.jsx)(O.a,{variant:"body2",children:V()(t.createdAt).fromNow()})]}),Object(Q.jsx)("div",{className:r.overlay2,children:Object(Q.jsx)(B.a,{style:{color:"white"},size:"small",onClick:function(){return a(t._id)},children:Object(Q.jsx)(K.a,{fontSize:"medium"})})}),Object(Q.jsx)("div",{className:r.details,children:Object(Q.jsx)(O.a,{variant:"body2",color:"textSecondary",children:t.tags.map((function(e){return"#".concat(e," ")}))})}),Object(Q.jsx)(O.a,{className:r.title,variant:"h5",gutterBottom:!0,children:t.title}),Object(Q.jsx)(F.a,{children:Object(Q.jsx)(O.a,{variant:"body2",color:"textSecondary",component:"p",children:t.message})}),Object(Q.jsxs)(L.a,{className:r.cardActions,children:[Object(Q.jsxs)(B.a,{size:"small",color:"primary",onClick:function(){return n((e=t._id,function(){var t=Object(w.a)(C.a.mark((function t(a){var n,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D(e);case 3:n=t.sent,r=n.data,a({type:d,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(Q.jsx)(R.a,{fontSize:"small"}),"\xa0 Like \xa0",t.likeCount]}),Object(Q.jsxs)(B.a,{size:"small",color:"primary",onClick:function(){return n((e=t._id,function(){var t=Object(w.a)(C.a.mark((function t(a){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S(e);case 3:a({type:p,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(Q.jsx)(J.a,{fontSize:"small"}),"\xa0 Delete \xa0"]})]})]})},Y=Object(q.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),Z=function(e){var t=e.setCurrentId,a=Object(i.c)((function(e){return e.posts})),n=Y();return console.log(a),a.length?Object(Q.jsx)(v.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3,children:a.map((function(e){return Object(Q.jsx)(v.a,{item:!0,xs:12,sm:6,children:Object(Q.jsx)(X,{post:e,setCurrentId:t})},e._id)}))}):Object(Q.jsx)(T.a,{})},$=a(19),ee=a(81),te=a(158),ae=a(78),ne=a.n(ae),re=Object(q.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),ce=function(e){var t=e.currentId,a=e.setCurrentId,r=Object(n.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),c=Object(m.a)(r,2),s=c[0],o=c[1],l=Object(i.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),u=Object(i.b)(),d=re();Object(n.useEffect)((function(){l&&o(l)}),[l]);var p=function(){a(0),o({creator:"",title:"",message:"",tags:"",selectedFile:""})},j=function(){var e=Object(w.a)(C.a.mark((function e(a){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),0===t?(u(_(s)),p()):(u(z(t,s)),p());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(Q.jsx)(ee.a,{className:d.paper,children:Object(Q.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(d.root," ").concat(d.form),onSubmit:j,children:[Object(Q.jsx)(O.a,{variant:"h6",children:t?'Editing "'.concat(l.title,'"'):"Creating a Memory"}),Object(Q.jsx)(te.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:s.creator,onChange:function(e){return o(Object($.a)(Object($.a)({},s),{},{creator:e.target.value}))}}),Object(Q.jsx)(te.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return o(Object($.a)(Object($.a)({},s),{},{title:e.target.value}))}}),Object(Q.jsx)(te.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:s.message,onChange:function(e){return o(Object($.a)(Object($.a)({},s),{},{message:e.target.value}))}}),Object(Q.jsx)(te.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:s.tags,onChange:function(e){return o(Object($.a)(Object($.a)({},s),{},{tags:e.target.value.split(",")}))}}),Object(Q.jsx)("div",{className:d.fileInput,children:Object(Q.jsx)(ne.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return o(Object($.a)(Object($.a)({},s),{},{selectedFile:t}))}})}),Object(Q.jsx)(B.a,{className:d.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(Q.jsx)(B.a,{variant:"contained",color:"secondary",size:"small",onClick:p,fullWidth:!0,children:"Clear"})]})})},ie=a.p+"static/media/memories.9cfa8a46.png",se=a(49),oe=Object(q.a)((function(e){return Object(se.a)({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}},e.breakpoints.down("sm"),{mainContainer:{flexDirection:"column-reverse"}})})),le=function(){var e=Object(n.useState)(0),t=Object(m.a)(e,2),a=t[0],r=t[1],c=oe(),s=Object(i.b)();return Object(n.useEffect)((function(){s(function(){var e=Object(w.a)(C.a.mark((function e(t){var a,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get(N);case 3:a=e.sent,n=a.data,t({type:j,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,s]),Object(Q.jsxs)(x.a,{maxWidth:"lg",children:[Object(Q.jsxs)(h.a,{className:c.appBar,position:"static",color:"inherit",children:[Object(Q.jsx)(O.a,{variant:"h2",align:"center",children:"Memories"}),Object(Q.jsx)("img",{className:c.image,src:ie,alt:"memories",height:"60"})]}),Object(Q.jsx)(g.a,{in:!0,children:Object(Q.jsx)(x.a,{children:Object(Q.jsxs)(v.a,{className:c.mainContainer,container:!0,"justify-content":"space-between",alignItems:"stretch",spacing:3,children:[Object(Q.jsx)(v.a,{item:!0,xs:12,sm:7,children:Object(Q.jsx)(Z,{setCurrentId:r})}),Object(Q.jsx)(v.a,{item:!0,xs:12,sm:4,children:Object(Q.jsx)(ce,{currentId:a,setCurrentId:r})})]})})})]})},ue=(a(115),Object(s.d)(f,Object(s.c)(Object(s.a)(o.a))));c.a.render(Object(Q.jsx)(i.a,{store:ue,children:Object(Q.jsx)(le,{})}),document.getElementById("root"))}},[[116,1,2]]]);
//# sourceMappingURL=main.87c69b30.chunk.js.map