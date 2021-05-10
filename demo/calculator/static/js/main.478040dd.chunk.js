(this["webpackJsonpyarn-costing"]=this["webpackJsonpyarn-costing"]||[]).push([[0],{143:function(e,t,a){},174:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(13),i=a.n(c),o=(a(143),a(240)),s=a(238),l=a(29),d=a(12),u=a(120),j=a(219),b=a(2),p=Object(u.a)(),h=Object(u.a)({palette:{primary:{main:"#0089ef"},secondary:{main:"#c0d6df"},info:{main:"#fde74c"}},typography:{fontSize:14}}),O=Object(u.a)({mixins:Object(d.a)(Object(d.a)({},h.mixins),{},{border:"1px solid "+h.palette.grey[300]}),transitions:{duration:{shortest:50,shorter:100,short:150,standard:200,complex:175,enteringScreen:125,leavingScreen:95}},props:{MuiTextField:{size:"small",variant:"outlined"},MuiButton:{size:"medium",disableTouchRipple:!0},MuiIconButton:{size:"small",disableTouchRipple:!0}},overrides:{MuiTabs:{root:{minHeight:0}},MuiTab:{root:Object(l.a)({minHeight:"40px"},p.breakpoints.up("sm"),{minWidth:"80px"}),textColorInherit:{textTransform:"none",opacity:1}},MuiButton:{root:{textTransform:"none"}},MuiFormLabel:{root:{color:p.palette.text.primary,fontSize:p.typography.fontSize},asterisk:{color:p.palette.error.main}},MuiToolbar:{dense:{minHeight:"42px"}},MuiOutlinedInput:{input:{padding:p.spacing(1,1.5),"&[readonly]":{backgroundColor:p.palette.grey[200],opacity:.75}},inputMarginDense:{padding:p.spacing(1,1.5)}},MuiAutocomplete:{inputRoot:{padding:"0px"}},MuiDialogTitle:{root:{padding:p.spacing(1)}},MuiDialogContent:{dividers:{padding:p.spacing(1,.5)}}}},h);function g(e){return Object(b.jsx)(j.a,{theme:O,children:e.children})}var m=a(63),f=a(64),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_QUALITIES":return Object(f.a)(t.payload);default:return e}},y="error",w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIFICATION":return Object(d.a)(Object(d.a)({},e),{},{message:t.payload.message,type:t.payload.type});default:return e}},v=function(e,t){return{type:"SET_NOTIFICATION",payload:{type:e||"info",message:t||""}}};var _=a(45),C=a(53),T=a(16),M=a(73),q=a.n(M),N=a(113),R=a(36),S=a(224),H=a(239),I=a(236),k=a(237),F=a(92),W=a(244),A=a(26),z=a(220),P=Object(T.h)((function(e){var t=e.path,a=Object(R.a)(e,["path"]),r=Object(A.a)(),n=a.children,c=Object(R.a)(a,["children"]),i=Object(T.g)({path:t});return Object(b.jsx)(z.a,Object(d.a)(Object(d.a)({style:{fontSize:1.1*r.typography.fontSize},component:C.b,to:t},c),{},{color:i?"primary":"default",disableTouchRipple:!0,children:n}))})),B=a(242),E=a(223);a(151);var G=a(21),D=a(187),L=a(89),Q=a(3),U=Object(S.a)((function(e){return{grid:{borderSpacing:0,width:"100%",overflow:"auto",border:e.mixins.border},tableCell:{margin:0,textAlign:"left",fontWeight:"initial",padding:e.spacing(1),borderRight:e.mixins.border,borderBottom:e.mixins.border}}}));function J(e){var t=e.columns,a=e.data,n=e.filterText,c=e.showFooter,i=void 0!==c&&c,o=e.tdClassName,s=U(),l=Object(L.useTable)({columns:t,data:a},L.useGlobalFilter),u=l.getTableProps,j=l.getTableBodyProps,p=l.headerGroups,h=l.footerGroups,O=l.rows,g=l.prepareRow,m=l.setGlobalFilter;return Object(r.useEffect)((function(){m(n)}),[n]),Object(b.jsxs)("table",Object(d.a)(Object(d.a)({},u()),{},{className:s.grid,children:[Object(b.jsx)("thead",{children:p.map((function(e){return Object(b.jsx)("tr",Object(d.a)(Object(d.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(b.jsx)("th",Object(d.a)(Object(d.a)({},e.getHeaderProps()),{},{className:s.tableCell,children:e.render("Header")}))}))}))}))}),Object(b.jsx)("tbody",Object(d.a)(Object(d.a)({},j()),{},{children:O.map((function(e,t){return g(e),Object(b.jsx)("tr",Object(d.a)(Object(d.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(b.jsx)("td",Object(d.a)(Object(d.a)({},e.getCellProps()),{},{className:Object(Q.a)(s.tableCell,o),children:e.render("Cell")}))}))}))}))})),i&&Object(b.jsx)("tfoot",{children:h.map((function(e){return Object(b.jsx)("tr",Object(d.a)(Object(d.a)({},e.getFooterGroupProps()),{},{children:e.headers.map((function(e){return Object(b.jsx)("td",Object(d.a)(Object(d.a)({},e.getFooterProps()),{},{className:Object(Q.a)(s.tableCell,o),children:e.render("Footer")}))}))}))}))})]}))}var Y=a(78),K=a(231),V=a(243),X=a(233),Z=a(234),$=a(230),ee=a(122),te=a(227),ae=a(235),re=a(39),ne=a.n(re),ce=(a(115),a(116),a(180)),ie=a(228),oe=a(178),se=a(226),le=a(182),de=(a(229),a(184),a(245),a(232),a(241),a(90),a(118)),ue=a.n(de),je=Object(S.a)((function(e){return{formRoot:{padding:"1rem"},formRow:{paddingTop:"1rem"},formInput:{marginTop:"0.25rem"},autoComplete:{padding:e.spacing(.25)},img:{maxWidth:"100%",height:"auto"},info:{color:e.palette.info.main,marginLeft:"0.25rem",fontSize:"1rem"},formDate:{}}}));function be(e){var t=e.children,a=je(),r={xs:12},c=n.a.Children.count(t);return r.md=r.sm=r.lg={1:12,4:3,3:4,6:2}[c]||12,Object(b.jsx)($.a,{container:!0,spacing:1,className:a.formRow,children:n.a.Children.map(t,(function(e){return n.a.cloneElement(e,r)}))})}function pe(e){var t=e.children,a=Object(R.a)(e,["children"]);return Object(b.jsx)($.a,Object(d.a)(Object(d.a)({item:!0},a),{},{children:t}))}function he(e){var t=e.children,a=e.info,n=Object(R.a)(e,["children","info"]),c=je(),i=Object(r.useState)(null),o=Object(G.a)(i,2),s=o[0],l=o[1],d=function(){l(null)},u=Boolean(s);return Object(b.jsxs)(H.a,{children:[Object(b.jsxs)(H.a,{display:"flex",style:{alignItems:"flex-end"},children:[Object(b.jsx)(ce.a,{component:H.a,required:n.required,children:n.label}),a&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(ue.a,{className:c.info,onMouseEnter:function(e){l(e.currentTarget)},onMouseLeave:d}),Object(b.jsx)(ie.a,{style:{pointerEvents:"none"},open:u,anchorEl:s,anchorOrigin:{vertical:"center",horizontal:"right"},transformOrigin:{vertical:"center",horizontal:"left"},onClose:d,disableRestoreFocus:!0,children:a})]})]}),t]})}function Oe(e){var t=e.InputIcon,a=e.errorMsg,r=e.required,n=e.onChange,c=e.label,i=e.readOnly,o=e.info,s=Object(R.a)(e,["InputIcon","errorMsg","required","onChange","label","readOnly","info"]),l=je();return Object(b.jsx)(he,{required:r,label:c,info:o,children:Object(b.jsxs)(oe.a,{error:Boolean(a),fullWidth:!0,children:[Object(b.jsx)(D.a,Object(d.a)({variant:"outlined",startAdornment:t&&Object(b.jsx)(se.a,{position:"start",children:"string"===typeof t?Object(b.jsx)("span",{children:t}):Object(b.jsx)(t,{fontSize:"small"})}),fullWidth:!0,className:l.formInput,error:Boolean(a),"data-label":c,"data-required":r,inputProps:{"data-label":c,"data-required":r,readOnly:Boolean(i)},onChange:n,onBlur:n},s)),Object(b.jsx)(le.a,{children:a})]})})}var ge=a(119),me=a.n(ge),fe=void 0,xe=Object(S.a)((function(e){return{root:{display:"flex",flexDirection:"column",height:"100%"},searchbar:{padding:e.spacing(1),display:"flex"},gridarea:{flexGrow:1},inputGridTd:{padding:"0px"},gridCell:{"&:not(.Mui-focused)":{"& .MuiOutlinedInput-notchedOutline":{border:0}}}}})),ye=function(e,t){var a=ne.a.cloneDeep(e),r=null;switch(t.type){case"set_value":ne.a.set(a,t.path,t.value),t.gridReducer&&(a=t.gridReducer(a,!0));break;case"add_grid_row":(r=ne.a.get(a,t.path,[])).push(t.value),ne.a.set(a,t.path,r),t.gridReducer&&(a=t.gridReducer(a));break;case"remove_grid_row":(r=ne.a.get(a,t.path,[])).splice(t.value,1),ne.a.set(a,t.path,r),t.gridReducer&&(a=t.gridReducer(a))}return a},we=function(e){var t=e.warps;if(!t)return e;var a=100/t.length;e.warp_total_ends=e.warp_reed*(e.warp_panna+e.warp_reed_space),e.warp_weight=0;var r,n=Object(Y.a)(t);try{for(n.s();!(r=n.n()).done;){var c=r.value;c.perct=a;var i=e.warp_total_ends*e.warp_lassa_yards/1852/c.count/e.warp_metre*(c.perct/100);c.weight=i+c.wastage*i/100,e.warp_weight+=c.weight,c.cost=c.weight*c.rate,c.sizing_cost=c.weight*c.sizing_rate}}catch(o){n.e(o)}finally{n.f()}return e},ve=function(e){var t=e.wefts;if(!t)return e;var a=100/t.length;e.weaving_charges=e.weft_peek*e.weft_job_rate,e.weft_weight=0;var r,n=Object(Y.a)(t);try{for(n.s();!(r=n.n()).done;){var c=r.value;c.perct=a;var i=e.weft_metre*(e.weft_panna+e.weft_reed_space)*e.weft_peek/(1693.33*c.count)*(c.perct/100);c.weight=i+c.wastage*i/100,e.weft_weight+=c.weight,c.cost=c.weight*c.rate}}catch(o){n.e(o)}finally{n.f()}return e};function _e(e,t,a,r,c){var i,o=[{Header:"",id:"id",Cell:function(e){var t=e.row;return Object(b.jsx)("span",{style:{paddingLeft:"0.25rem",paddingRight:"0.25rem",fontWeight:"bold"},children:t.index+1})}},{Header:"",id:"btn-del",Cell:function(r){var n=r.row;return Object(b.jsx)(K.a,{onClick:function(r){r.preventDefault(),t({type:"remove_grid_row",path:e,value:n.index,gridReducer:a})},children:Object(b.jsx)(me.a,{})})}}],s=Object(Y.a)(r);try{var l=function(){var r=i.value;o.push({Header:r.Header,accessor:r.accessor,Footer:r.showTotal?function(e){var t=n.a.useMemo((function(){return e.rows.reduce((function(e,t){return(t.values[r.accessor]||0)+e}),0)}),[e.rows]);return Object(b.jsx)(D.a,{fullWidth:!0,inputProps:{style:{fontWeight:"bold"}},className:c,value:t,type:"number",readOnly:!0})}:"",Cell:function(n){var i=n.value,o=n.row,s=n.column;return Object(b.jsx)(D.a,{fullWidth:!0,className:c,type:"number",value:i,readOnly:r.readOnly,onChange:function(r){var n=r.target.value;t({type:"set_value",path:e.concat([o.index,s.id]),value:n,gridReducer:a})}})}})};for(s.s();!(i=s.n()).done;)l()}catch(d){s.e(d)}finally{s.f()}return o}var Ce=Object(_.b)((function(e){return{qualities:e.qualities}}),(function(e){return{setNotification:function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];e(v.apply(fe,a))},clearNotification:function(){e(v(null,null))}}}))((function(e){var t,a=e.open,n=e.onClose,c=e.data,i=xe(),o=!ne.a.isNull(c)&&!ne.a.isUndefined(c),s=Object(r.useReducer)(ye,c),d=Object(G.a)(s,2),u=d[0],j=d[1],p=Object(r.useState)({}),h=Object(G.a)(p,2),O=h[0],g=(h[1],Object(r.useCallback)((function(e,t){var a=e;e&&e.target&&(t=e.target.name,a=e.target.value),j({type:"set_value",path:t,value:a,gridReducer:we})}))),m=Object(r.useCallback)((function(e,t){var a=e;e&&e.target&&(t=e.target.name,a=e.target.value),j({type:"set_value",path:t,value:a,gridReducer:ve})})),f=Object(r.useMemo)((function(){return _e(["warps"],j,we,[{Header:"Count",accessor:"count"},{Header:"Perct.",accessor:"perct"},{Header:"Wastage",accessor:"wastage"},{Header:"Rate",accessor:"rate"},{Header:"Sizing rate",accessor:"sizing_rate",Footer:"check;"},{Header:"Weight",accessor:"weight",readOnly:!0,showTotal:!0},{Header:"Warp cost",accessor:"cost",readOnly:!0,showTotal:!0},{Header:"Warp sizing cost",accessor:"sizing_cost",readOnly:!0,showTotal:!0}],i.gridCell)}),[]),x=Object(r.useMemo)((function(){return _e(["wefts"],j,ve,[{Header:"Count",accessor:"count"},{Header:"Perct.",accessor:"perct"},{Header:"Wastage",accessor:"wastage"},{Header:"Rate",accessor:"rate"},{Header:"Weight",accessor:"weight",readOnly:!0,showTotal:!0},{Header:"Weft cost",accessor:"cost",readOnly:!0,showTotal:!0}],i.gridCell)}),[]),y=function(e){var t={};return e.forEach((function(e){t[e.accessor]=0})),t};return Object(b.jsxs)(V.a,{onClose:n,"aria-labelledby":"simple-dialog-title",open:a,fullScreen:!0,scroll:"paper",children:[Object(b.jsx)(X.a,{id:"simple-dialog-title",children:o?"Update quality":"Add new quality"}),Object(b.jsxs)(Z.a,{dividers:!0,children:[Object(b.jsx)(Oe,{autoFocus:!0,label:"Name",name:"name",value:u.name,required:!0,errorMsg:O.name,onChange:m}),Object(b.jsxs)($.a,{container:!0,spacing:1,children:[Object(b.jsx)($.a,{item:!0,sm:12,md:12,lg:10,xl:10,children:Object(b.jsxs)(ee.a,{style:{height:"100%"},children:[Object(b.jsx)(F.a,{variant:"h6",style:{textAlign:"center",padding:"0.5rem"},children:"Warp"}),Object(b.jsx)(te.a,{}),Object(b.jsx)(H.a,{style:{padding:"0.5rem"},children:Object(b.jsxs)(be,{children:[Object(b.jsx)(pe,{children:Object(b.jsx)(Oe,(t={type:"number"},Object(l.a)(t,"type","number"),Object(l.a)(t,"label","Reed"),Object(l.a)(t,"name","warp_reed"),Object(l.a)(t,"value",u.warp_reed),Object(l.a)(t,"required",!0),Object(l.a)(t,"errorMsg",O.warp_reed),Object(l.a)(t,"onChange",g),t))}),Object(b.jsx)(pe,{children:Object(b.jsx)(Oe,{type:"number",label:"Panna",name:"warp_panna",value:u.warp_panna,required:!0,errorMsg:O.warp_panna,onChange:g})}),Object(b.jsx)(pe,{children:Object(b.jsx)(Oe,{type:"number",label:"Reed space",name:"warp_reed_space",value:u.warp_reed_space,required:!0,errorMsg:O.warp_reed_space,onChange:g})}),Object(b.jsx)(pe,{children:Object(b.jsx)(Oe,{type:"number",label:"Lassa(Yards)",name:"warp_lassa_yards",value:u.warp_lassa_yards,required:!0,errorMsg:O.warp_lassa_yards,onChange:g})}),Object(b.jsx)(pe,{children:Object(b.jsx)(Oe,{type:"number",label:"Metre",name:"warp_metre",value:u.warp_metre,required:!0,errorMsg:O.warp_metre,onChange:g})}),Object(b.jsx)(pe,{children:Object(b.jsx)(Oe,{type:"number",label:"Total ends",name:"warp_total_ends",value:u.warp_total_ends,readOnly:!0})})]})}),Object(b.jsx)(J,{columns:f,data:u.warps||[],showFooter:!0,tdClassName:i.inputGridTd}),Object(b.jsx)(z.a,{variant:"outlined",color:"primary",onClick:function(){j({type:"add_grid_row",path:"warps",value:y(f),gridReducer:we})},children:"Add warp"}),Object(b.jsx)(te.a,{style:{marginTop:"0.5rem"}}),Object(b.jsx)(F.a,{variant:"h6",style:{textAlign:"center",padding:"0.5rem"},children:"Weft"}),Object(b.jsx)(te.a,{}),Object(b.jsx)(H.a,{style:{padding:"0.5rem"},children:Object(b.jsxs)(be,{children:[Object(b.jsx)(pe,{children:Object(b.jsx)(Oe,{type:"number",label:"Metre",name:"weft_metre",value:u.weft_metre,required:!0,errorMsg:O.weft_metre,onChange:m})}),Object(b.jsx)(pe,{children:Object(b.jsx)(Oe,{type:"number",label:"Panna",name:"weft_panna",value:u.weft_panna,required:!0,errorMsg:O.panna,onChange:m})}),Object(b.jsx)(pe,{children:Object(b.jsx)(Oe,{type:"number",label:"Reed space",name:"weft_reed_space",value:u.weft_reed_space,required:!0,errorMsg:O.reed_space,onChange:m})}),Object(b.jsx)(pe,{children:Object(b.jsx)(Oe,{type:"number",label:"Peek",name:"weft_peek",value:u.weft_peek,required:!0,errorMsg:O.weft_peek,onChange:m})}),Object(b.jsx)(pe,{children:Object(b.jsx)(Oe,{type:"number",label:"Job rate",name:"weft_job_rate",value:u.weft_job_rate,required:!0,errorMsg:O.weft_job_rate,onChange:m})}),Object(b.jsx)(pe,{children:Object(b.jsx)(Oe,{type:"number",label:"Weaving charges",name:"weaving_charges",value:u.weaving_charges,readOnly:!0})})]})}),Object(b.jsx)(J,{columns:x,data:u.wefts||[],showFooter:!0,tdClassName:i.inputGridTd}),Object(b.jsx)(z.a,{variant:"outlined",color:"primary",onClick:function(){j({type:"add_grid_row",path:"wefts",value:y(x),gridReducer:ve})},children:"Add weft"})]})}),Object(b.jsx)($.a,{item:!0,sm:12,md:12,lg:2,xl:2,children:Object(b.jsxs)(ee.a,{style:{height:"100%"},children:[Object(b.jsx)(F.a,{variant:"h6",style:{textAlign:"center",padding:"0.5rem"},children:"Summary"}),Object(b.jsx)(te.a,{}),Object(b.jsxs)(H.a,{style:{padding:"0.5rem"},children:[Object(b.jsx)(Oe,{type:"number",label:"Warp weight",name:"warp_weight",value:u.warp_weight,readOnly:!0}),Object(b.jsx)(H.a,{style:{marginTop:"0.5rem"},children:Object(b.jsx)(Oe,{type:"number",label:"Warp weight w/wastage",name:"warp_weight_wastage",value:u.warp_weight_wastage,readOnly:!0})}),Object(b.jsx)(H.a,{style:{marginTop:"0.5rem"},children:Object(b.jsx)(Oe,{type:"number",label:"Weft weight",name:"weft_weight",value:u.weft_weight,readOnly:!0})}),Object(b.jsx)(H.a,{style:{marginTop:"0.5rem"},children:Object(b.jsx)(Oe,{type:"number",label:"Weft weight w/wastage",name:"weft_weight_wastage",value:u.weft_weight_wastage,readOnly:!0})}),Object(b.jsx)(H.a,{style:{marginTop:"0.5rem"},children:Object(b.jsx)(Oe,{type:"number",label:"Total weight",name:"total_weight",value:u.total_weight,readOnly:!0})}),Object(b.jsx)(H.a,{style:{marginTop:"0.5rem"},children:Object(b.jsx)(Oe,{type:"number",label:"Total weight w/wastage",name:"total_weight_wastage",value:u.total_weight_wastage,readOnly:!0})}),Object(b.jsx)(H.a,{style:{marginTop:"0.5rem"},children:Object(b.jsx)(Oe,{type:"number",label:"Actual cost",name:"actual_cost",value:u.actual_cost,readOnly:!0})})]})]})})]})]}),Object(b.jsxs)(ae.a,{style:{justifyContent:"flex-start"},children:[Object(b.jsx)(z.a,{variant:"contained",color:"primary",children:"Save"}),Object(b.jsx)(z.a,{variant:"outlined",color:"primary",style:{marginLeft:"0.5rem"},children:"Cancel"})]})]})})),Te=void 0,Me=Object(S.a)((function(e){return{root:{display:"flex",flexDirection:"column",height:"100%"},searchbar:{padding:e.spacing(1),display:"flex"},gridarea:{flexGrow:1}}}));var qe=Object(_.b)((function(e){return{qualities:e.qualities}}),(function(e){return{setNotification:function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];e(v.apply(Te,a))},clearNotification:function(){e(v(null,null))}}}))((function(e){var t=e.qualities,a=(e.onQualityClick,Me()),n=Object(r.useState)(!1),c=Object(G.a)(n,2),i=c[0],o=c[1],s=Object(r.useState)({}),l=Object(G.a)(s,2),d=l[0],u=l[1],j=Object(r.useRef)(),p=Object(r.useMemo)((function(){return[{Header:"Name",accessor:"name",Cell:function(e){var t=e.value,a=e.row;return Object(b.jsx)(E.a,{onClick:function(){u(a.original),o(!0)},href:"#",children:t})}},{Header:"Notes",accessor:"notes"}]}),[]),h=Object(r.useState)(""),O=Object(G.a)(h,2),g=O[0],m=O[1];return Object(b.jsxs)(H.a,{children:[Object(b.jsxs)(H.a,{className:a.root,ref:j,children:[Object(b.jsxs)(H.a,{className:a.searchbar,children:[Object(b.jsx)(D.a,{value:g,onChange:function(e){m(e.target.value)},style:{minWidth:"20%"},placeholder:"Search quality"}),Object(b.jsx)(z.a,{variant:"contained",color:"primary",onClick:function(){u(null),o(!0)},style:{marginLeft:"0.5rem"},children:"Add new"})]}),Object(b.jsx)(H.a,{className:a.gridarea,children:Object(b.jsx)(J,{columns:p,data:t,filterText:g})})]}),Object(b.jsx)(Ce,{open:i,onClose:function(){return o(!1)},data:d})]})})),Ne=void 0,Re=Object(S.a)((function(e){return{dashboardRoot:{display:"flex",height:"100%",flexDirection:"column"},subMenu:{top:"42px"},bottomMenuContent:{flexGrow:1,display:"flex",flexDirection:"column",position:"relative"},rightContent:{flexGrow:1,display:"flex",flexDirection:"column"}}})),Se=[{label:"Yarn costing",path:"/yarncosting",component:qe},{label:"About",path:"/about",component:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(F.a,{children:"Attendance and Payroll management is one of our milestone project. We've done research and worked hard to make this software easy to use."}),Object(b.jsxs)(F.a,{children:[Object(b.jsx)(F.a,{children:"Contact:"}),Object(b.jsxs)(F.a,{children:["Aditya Toshniwal - ",Object(b.jsx)(E.a,{href:"mailto: aditya.toshniwal14@gmail.com",children:"aditya.toshniwal14@gmail.com"})]}),Object(b.jsxs)(F.a,{children:["Shreegopal Totala - ",Object(b.jsx)(E.a,{href:"mailto: rajatotala@gmail.com",children:"rajatotala@gmail.com"})]})]})]})}}];function He(e){var t=e.navItems;return Object(b.jsx)(H.a,{children:t.map((function(e){return Object(b.jsx)(P,{path:e.path,children:e.label},e.path)}))})}function Ie(e){var t=e.item,a=Re();return Object(T.g)({path:t.path})?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(H.a,{children:Object(b.jsx)(I.a,{variant:"dense"})}),Object(b.jsx)(k.a,{color:"default",elevation:1,component:"div",className:a.subMenu,children:Object(b.jsx)(I.a,{variant:"dense",children:Object(b.jsx)(He,{navItems:t.submenu})})})]}):Object(b.jsx)(b.Fragment,{})}var ke=Object(_.b)((function(e){return{notify:e.notify}}),(function(e){return{setNotification:function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];e(v.apply(Ne,a))},clearNotification:function(){e(v(null,null))},setQualities:function(t){e({type:"SET_QUALITIES",payload:t})}}}))((function(e){e.location;var t=Object(R.a)(e,["location"]),a=Re(),n=Object(r.useMemo)((function(){var e=[];return Se.filter((function(e){return Boolean(e.submenu)})).forEach((function(t){e.push.apply(e,Object(f.a)(t.submenu))})),e}));return Object(r.useEffect)((function(){function e(){return(e=Object(N.a)(q.a.mark((function e(){var a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a={data:[{id:1,name:"aditya",notes:"the best quality"},{id:2,name:"aditya tosh",notes:"the best quality"},{id:2,name:"aditya tosh",notes:"the best quality"},{id:2,name:"aditya tosh",notes:"the best quality"},{id:2,name:"aditya tosh",notes:"the best quality"},{id:2,name:"aditya tosh",notes:"the best quality"},{id:2,name:"aditya tosh",notes:"the best quality"},{id:2,name:"aditya tosh",notes:"the best quality"}]},t.setQualities(a.data)}catch(r){t.setNotification(y,r)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(b.jsxs)(H.a,{className:a.dashboardRoot,children:[Object(b.jsx)(H.a,{children:Object(b.jsx)(I.a,{variant:"dense"})}),Object(b.jsx)(k.a,{color:"default",elevation:1,component:"div",children:Object(b.jsxs)(I.a,{variant:"dense",disableGutters:!0,children:[Object(b.jsx)(H.a,{display:"flex",style:{padding:"0rem 0.5rem"},alignItems:"center",children:Object(b.jsx)(F.a,{variant:"h6",style:{color:"#d94874"},children:"Calculators"})}),Object(b.jsx)(He,{navItems:Se})]})}),Se.filter((function(e){return Boolean(e.submenu)})).map((function(e){return Object(b.jsx)(Ie,{item:e})})),Object(b.jsx)(H.a,{className:a.bottomMenuContent,children:Object(b.jsxs)(T.d,{children:[[].concat(Se,Object(f.a)(n)).map((function(e){return Object(b.jsx)(T.b,{exact:!0,path:e.path,component:e.component,children:e.redirect&&Object(b.jsx)(T.a,{to:e.redirect})},e.path)})),Object(b.jsx)(T.b,{children:Object(b.jsx)(T.a,{to:"/yarncosting"})})]})}),Object(b.jsx)(W.a,{open:Boolean(t.notify.message),autoHideDuration:2500,onClose:function(e,a){"clickaway"!==a&&t.clearNotification()},children:Object(b.jsx)(B.a,{severity:t.notify.type,children:t.notify.message})})]})})),Fe=Object(m.c)(Object(m.b)({qualities:x,notify:w}),{qualities:[],notify:{type:null,message:null}});function We(){return Object(b.jsx)(g,{children:Object(b.jsxs)(o.b,{injectFirst:!0,children:[Object(b.jsx)(s.a,{}),Object(b.jsx)(_.a,{store:Fe,children:Object(b.jsx)(C.a,{children:Object(b.jsx)(T.b,{path:"/",component:ke})})})]})})}var Ae=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,247)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(We,{})}),document.getElementById("root")),Ae()}},[[174,1,2]]]);
//# sourceMappingURL=main.478040dd.chunk.js.map