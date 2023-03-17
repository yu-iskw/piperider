"use strict";(self.webpackChunk_infuseai_piperider_ui=self.webpackChunk_infuseai_piperider_ui||[]).push([[102],{5462:function(e,n,t){t.d(n,{B:function(){return c}});var i=t(2175),r=t(7932),a=t(3660),l=t(7615),o=t(6569),s=t(8486),u=t(5887),d=["title","children","allowModalPopup"];function c(e){var n=e.title,t=e.children,c=e.allowModalPopup,x=(0,r.Z)(e,d),h=(0,a.qY)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l.kC,(0,i.Z)((0,i.Z)({bg:"whiteAlpha.700",rounded:"md",onClick:function(){return c&&h.onOpen()}},x),{},{children:t})),c&&(0,u.jsx)(s.W,(0,i.Z)((0,i.Z)({},h),{},{size:"full",title:n,footer:(0,u.jsx)(l.kC,{mt:6,w:"100%",direction:"row",justify:"center",children:(0,u.jsx)(o.zx,{colorScheme:"blue",mr:3,onClick:h.onClose,children:"Close"})}),children:t}))]})}},5871:function(e,n,t){t.d(n,{UZ:function(){return h}});var i=t(2175),r=t(2397),a=t(6125),l=t(5505),o=t(2221),s=t(4361),u=t(8188),d=t(6252),c=t(5887),x="#4780A8";function h(e){var n=e.quantileData,t=e.animation,h=void 0!==t&&t;(0,d.Z)(),r.kL.register(a.LU,a.aS,r.f$,r.uw);var m=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Object.assign({},n),r=(0,s.uB)(e),a=r.max,l=r.min,d=r.mean,c=r.q1,h=r.q3,m=[{text:"box region",fillStyle:u.k8},{text:"p50",fillStyle:x}];return(0,i.Z)({responsive:!0,maintainAspectRatio:!1,layout:{padding:10},indexAxis:"y",scales:{x:{offset:!0},y:{display:!1}},plugins:{legend:{position:"bottom",labels:{boxHeight:10,boxWidth:10,padding:15,generateLabels:function(){return m.map((function(e){return{lineWidth:0,text:e.text,fillStyle:e.fillStyle}}))}}},tooltip:{callbacks:{label:function(){var e=(0,o.J8)(l),n=(0,o.J8)(a),t=(0,o.J8)(d),i=(0,o.J8)(c),r=(0,o.J8)(h);return"MIN: ".concat(e," / P25: ").concat(i," / P50 (median): ").concat(t," / P75: ").concat(r," / MAX: ").concat(n)}}}}},t)}(n,{animation:h}),f=function(e){var n=(0,s.uB)(e),t=n.max,i=n.min,r=n.mean,a=n.q1,l=n.q3;return{labels:[""],datasets:[{data:[{min:i,q1:a,mean:r,q3:l,max:t,median:r,items:[],outliers:[]}],borderWidth:1,itemRadius:1,medianColor:x,meanBackgroundColor:x,backgroundColor:u.k8,borderColor:u.Q,hitPadding:10}]}}(n);return(0,c.jsx)(l.kL,{type:"boxplot",data:f,options:m,plugins:[r.De,r.u]},Date.now())}},3851:function(e,n,t){t.d(n,{$:function(){return o}});var i=t(7615),r=t(1831),a=t(3199),l=t(5887);function o(e){var n=e.children,t=e.singleOnly,o=r.nq.getState().tableColumnsOnly,s=void 0===o?[]:o;return(0,l.jsxs)(i.rj,{width:"100%",h:"100%",templateColumns:"minmax(200px, 400px) 1px minmax(420px, 100%)",children:[(0,l.jsx)(i.P4,{overflowY:"auto",position:"sticky",top:65,maxHeight:"calc(100vh - 65px)",children:(0,l.jsx)(a.UI,{initAsExpandedTables:!0,tableColEntryList:s,singleOnly:t})}),(0,l.jsx)(i.iz,{orientation:"vertical"}),(0,l.jsx)(i.P4,{maxHeight:r.t4,width:"100%",h:"100%",p:9,children:n})]})}},1288:function(e,n,t){t.d(n,{T:function(){return o}});var i=t(7615),r=t(6569),a=t(2904),l=t(5887);function o(){return(0,l.jsxs)(i.kC,{direction:"column",width:"100%",minH:"100vh",justifyContent:"center",alignItems:"center",children:[(0,l.jsx)(i.X6,{fontSize:"3xl",children:"404, Not Found!"}),(0,l.jsx)(r.zx,{mt:4,children:(0,l.jsx)(a.rU,{href:"/",children:"Back to Home"})})]})}},6564:function(e,n,t){t.d(n,{O:function(){return y}});var i=t(2175),r=t(1431),a=t(7932),l=t(2599),o=t(3660),s=t(7615),u=t(7348),d=t(4054),c=t(8765),x=t(6783),h=t(4240),m=t(1756),f=t(1831),v=t(9408),p=t(3554),g=t(3512),b=t(5887),j=["comparableAssertions","filterByTableOnly","filterString","setFilterString","caseSensitiveFilter","singleOnly","tableSize"],C=["status"];function y(e){var n=e.comparableAssertions,t=e.filterByTableOnly,y=e.filterString,S=void 0===y?"":y,k=(e.setFilterString,e.caseSensitiveFilter),w=e.singleOnly,O=e.tableSize,Z=(0,a.Z)(e,j),T=(0,o.qY)(),A=(0,x.Cl)(),B=(0,m.useState)([]),D=(0,r.Z)(B,2),z=D[0],H=D[1],W=(0,m.useState)([]),F=(0,r.Z)(W,2),L=F[0],J=F[1],P=(0,m.useState)(),G=(0,r.Z)(P,2),M=G[0],q=G[1];(0,m.useEffect)((function(){var e,t=(null===n||void 0===n||null===(e=n.target)||void 0===e?void 0:e.map((function(e,t){var r,l,o=(null===n||void 0===n||null===(r=n.base)||void 0===r?void 0:r[t])||{},s=(o.status,(0,a.Z)(o,C)),u=null===n||void 0===n||null===(l=n.base)||void 0===l?void 0:l[t];return(0,i.Z)((0,i.Z)({},e||s||{}),{},{status:w?null===u||void 0===u?void 0:u.status:null===e||void 0===e?void 0:e.status,baseStatus:null===u||void 0===u?void 0:u.status,baseRef:u,targetStatus:null===e||void 0===e?void 0:e.status,targetRef:e})})).sort((function(e){return"failed"===e.status?-1:1})))||[];H(t)}),[]);var I=w?[A.accessor("status",{cell:function(e){return e.getValue()},header:"Status",enableGlobalFilter:!1})]:[A.accessor("baseStatus",{cell:function(e){return e.getValue()},header:"Base Status",enableGlobalFilter:!1}),A.accessor("targetStatus",{cell:function(e){return e.getValue()},header:"Target Status",enableGlobalFilter:!1})],R=w?[A.accessor("expected",{cell:function(e){return e.getValue()},header:"Expected"}),A.accessor("actual",{cell:function(e){return"dbt"===e.row.original.source?e.row.original.message:e.getValue()},header:"Actual"})]:[],E=(0,m.useMemo)((function(){return[].concat(I,[{accessorFn:function(e){var n,t;return"".concat(null!==(n=e.table)&&void 0!==n?n:"",".").concat(null!==(t=e.column)&&void 0!==t?t:"")},id:"testSubject",header:"Test Subject"},A.accessor("name",{cell:function(e){var n,t;return null!==(n=null!==(t=e.row.original.display_name)&&void 0!==t?t:e.getValue())&&void 0!==n?n:e.row.original.id},header:"Assertion"})],R,[A.accessor("source",{cell:function(e){return e.getValue()},header:"Source",enableGlobalFilter:!1})])}),[]),V=(0,h.b7)({columns:E,data:z,getCoreRowModel:(0,x.sC)(),getSortedRowModel:(0,x.tj)(),onSortingChange:J,state:{sorting:L}});return 0===z.length?(0,b.jsx)(s.kC,{direction:"column",justifyContent:"center",alignItems:"center",children:(0,b.jsx)(g.J,{text:"No Tests Available"})}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(u.xJ,(0,i.Z)((0,i.Z)({},Z),{},{children:(0,b.jsxs)(u.iA,{variant:"simple",size:O,children:[(0,b.jsx)(u.hr,{children:(0,b.jsxs)(u.Tr,{children:[V.getFlatHeaders().map((function(e){var n=(0,b.jsx)(d.m$.span,{pl:"4",pos:"absolute",right:0,children:e.column.getIsSorted()?"desc"===e.column.getIsSorted()?(0,b.jsx)(l.AS,{"aria-label":"sorted descending"}):(0,b.jsx)(l.$l,{"aria-label":"sorted ascending"}):null}),t=Boolean(e.id.match(/status/gi));return(0,b.jsxs)(u.Th,{pos:"relative",onClick:e.column.getToggleSortingHandler(),_hover:{cursor:"pointer"},textAlign:t?"center":"left",px:t?0:2,children:[(0,h.ie)(e.column.columnDef.header,e.getContext()),n]},e.id)})),!w&&(0,b.jsx)(u.Th,{textAlign:"center",children:"View"})]})}),(0,b.jsx)(u.p3,{children:V.getSortedRowModel().rows.filter((function(e){var n=e.original,i=new RegExp(S,"g".concat(k?"":"i"));return t?(n.table||"")===S:!S||(((null===n||void 0===n?void 0:n.name)||"").search(i)>-1||(n.table||"").search(i)>-1||(n.column||"").search(i)>-1)})).map((function(e){var n,t=e.original,i=t.id,r=t.table,a=t.column,l=t.name,o=t.expected,d=t.actual,x=t.source,h=t.targetStatus,m=t.baseStatus,p=t.baseRef,g=t.targetRef,j=t.message,C=t.display_name,y="".concat(null!==r&&void 0!==r?r:"").concat(a?"."+a:""),S=(0,f.sG)(o),k=(0,f.sG)("piperider"===x?d:j),O=null!==(n=null!==C&&void 0!==C?C:l)&&void 0!==n?n:i;return(0,b.jsxs)(u.Tr,{children:[(0,b.jsx)(u.Td,{children:(0,b.jsx)(s.kC,{justifyContent:"center",children:(0,b.jsx)(v.Op,{status:m})})}),!w&&(0,b.jsx)(u.Td,{children:(0,b.jsx)(s.kC,{justifyContent:"center",children:(0,b.jsx)(v.Op,{status:h})})}),(0,b.jsx)(u.Td,{maxWidth:"16em",px:2,children:(0,b.jsx)(c.u,{label:y,children:(0,b.jsx)(s.xv,{fontSize:"sm",noOfLines:1,textOverflow:"ellipsis",children:y})})}),(0,b.jsx)(u.Td,{maxWidth:"16em",px:2,children:(0,b.jsx)(c.u,{label:O,children:(0,b.jsx)(s.xv,{noOfLines:1,textOverflow:"ellipsis",children:O})})}),w&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(u.Td,{px:2,children:(0,b.jsx)(c.u,{label:S,children:(0,b.jsx)(s.EK,{maxWidth:"14em",noOfLines:1,color:"gray.700",children:S})})}),(0,b.jsx)(u.Td,{px:2,children:(0,b.jsx)(c.u,{label:k,children:(0,b.jsx)(s.EK,{maxWidth:"14em",noOfLines:1,color:(w?"failed"===m:"failed"===h)?"red.500":"gray.700",children:k})})})]}),(0,b.jsx)(u.Td,{px:2,children:x}),!w&&(0,b.jsx)(u.Td,{textAlign:"center",onClick:function(){q({assertionSource:x||(null===p||void 0===p?void 0:p.source),assertionName:l||(null===p||void 0===p?void 0:p.name),base:p,target:g}),T.onOpen()},children:(0,b.jsx)(s.xv,{as:"span",cursor:"pointer",children:"\ud83d\udd0d"})})]},e.id)}))})]})})),(0,b.jsx)(p.E,(0,i.Z)((0,i.Z)({},T),{},{data:M,onClose:function(){T.onClose(),q(void 0)}}))]})}},4163:function(e,n,t){t.d(n,{l:function(){return p}});var i=t(1431),r=t(2599),a=t(7615),l=t(6468),o=t(8765),s=t(8050),u=t(1102),d=t(1756),c=t(8685),x=t(2397),h=t(5505),m=(t(8989),t(5887));function f(e){var n,t=e.data,r=void 0===t?[]:t,a=e.isHorizontal,l=e.stacked,o=e.hasDimensions;x.kL.register(x.ZL,x.f$,x.uw,x.u);var s=[],u=Array.from(c.Uh.values()),d=!o&&2===r.length;r.forEach((function(e,t){var r,a=(null!==e&&void 0!==e?e:{}).data,l=void 0===a?[]:a,o=(0,i.Z)(l,2),c=o[0],x=o[1];n=null!==(r=n)&&void 0!==r?r:c;var h=(void 0===x?[]:x).map((function(e){return Number(null!==e&&void 0!==e?e:void 0)})),m=d?0===t?"Base":"Target":null===e||void 0===e?void 0:e.label;s.push({label:m,data:h,borderColor:u[t],backgroundColor:u[t]+"50"})}));var f={responsive:!0,maintainAspectRatio:!1,indexAxis:a?"y":"x",plugins:{tooltip:{mode:"index",position:"nearest",intersect:!1,callbacks:{title:function(e){var n=(0,i.Z)(e,1)[0].label,t=n.lastIndexOf(",");return n.slice(0,t)},labelColor:function(e){var n=e.datasetIndex;return{borderColor:c.wC,backgroundColor:u[n]}}}},legend:{position:"bottom",labels:{padding:10,boxWidth:30,generateLabels:function(e){return e.data.datasets.map((function(e,n){return{fillStyle:u[n],text:"".concat(e.label)}}))}}}},scales:{x:{stacked:l},y:{stacked:l}}},v={datasets:s,labels:n};return(0,m.jsx)(h.$Q,{plugins:[x.De],data:v,options:f})}function v(e){var n=e.data,t=void 0===n?[]:n,r=e.timeGrain,a=e.fill,l=e.stacked,o=e.hasDimensions;x.kL.register(x.jn,x.od,x.RM,x.f$,x.uw,x.Gu,x.u);var s=[],u=Array.from(c.Uh.values()),d=!o&&2===t.length;t.forEach((function(e,n){var t=(null!==e&&void 0!==e?e:{}).data,r=void 0===t?[]:t,l=(0,i.Z)(r,2),o=l[0],x=l[1],h=(void 0===x?[]:x).map((function(e,n){return{x:o[n],y:Number(null!==e&&void 0!==e?e:void 0)}})),m=d?0===n?"Base":"Target":null===e||void 0===e?void 0:e.label;s.push({label:m,data:h,borderColor:u[n],pointBackgroundColor:u[n],spanGaps:!0,fill:a,backgroundColor:u[n]+"50",segment:{borderColor:function(e){return(0,c.im)(e,"rgb(0,0,0,0.2)")},borderDash:function(e){return(0,c.im)(e,[6,6])},backgroundColor:function(e){return(0,c.im)(e,"rgb(0,0,0,0.1)")}}})}));var f={responsive:!0,maintainAspectRatio:!1,plugins:{filler:{},tooltip:{mode:"index",position:"nearest",intersect:!1,callbacks:{title:function(e){var n=(0,i.Z)(e,1)[0].label,t=n.lastIndexOf(",");return n.slice(0,t)},labelColor:function(e){var n=e.datasetIndex;return{borderColor:c.wC,backgroundColor:u[n]}}}},legend:{position:"bottom",labels:{padding:10,boxWidth:30,generateLabels:function(e){return e.data.datasets.map((function(e,n){return{fillStyle:u[n],text:"".concat(e.label)}}))}}}},scales:{x:{type:"time",time:{unit:r}},y:{stacked:l}}},v={datasets:s};return(0,m.jsx)(h.x1,{plugins:[x.De],data:v,options:f})}function p(e){var n=e.data,t=n.base,c=n.target,x=e.singleOnly,h=(0,d.useState)("line"),f=(0,i.Z)(h,2),v=f[0],p=f[1],b=c||t,j=null===b||void 0===b?void 0:b.grain,C=[null===b||void 0===b?void 0:b.data[0][0],null===b||void 0===b?void 0:b.data[0].slice(-1)].map((function(e){return String(e)}));return(0,m.jsxs)(a.xu,{p:3,children:[(0,m.jsxs)(a.xu,{pb:3,children:[(0,m.jsxs)(a.kC,{className:"widget-header",alignItems:"center",gap:2,mb:2,justifyContent:"space-between",children:[(0,m.jsxs)(a.kC,{alignItems:"center",gap:2,children:[(0,m.jsx)(l.Vp,{colorScheme:"blue",variant:"subtle",fontWeight:"medium",children:null===b||void 0===b?void 0:b.label}),(0,m.jsx)(o.u,{shouldWrapChildren:!0,label:null===b||void 0===b?void 0:b.description,placement:"right",children:(0,m.jsx)(s.JO,{as:r.sz})})]}),(0,m.jsx)(u.Ph,{w:"initial",size:"sm",value:v,onChange:function(e){return p(e.currentTarget.value)},children:[{type:"line",displayName:"Line Chart"},{type:"y-bar",displayName:"Bar Chart"}].map((function(e){return(0,m.jsx)("option",{value:e.type,children:e.displayName},e.type)}))})]}),(0,m.jsx)(a.kC,{children:(0,m.jsxs)(a.xv,{color:"gray.500",fontSize:"sm",children:["from ",C[0]," to ",C[1]]})})]}),(0,m.jsx)(a.kC,{h:"300px",maxW:"98%",children:g({selectedBMChartType:v,comparableBMData:{base:t,target:c},singleOnly:x,timeGrain:j})})]})}function g(e){var n=e.selectedBMChartType,t=e.singleOnly,i=e.timeGrain,r=e.comparableBMData,a=null!==r&&void 0!==r?r:{},l=a.base,o=a.target,s=t?[l]:[l,o];return"line"===n?(0,m.jsx)(v,{data:s,timeGrain:i}):"stacked-line"===n?(0,m.jsx)(v,{data:s,timeGrain:i,fill:!0,stacked:!0}):"y-bar"===n?(0,m.jsx)(f,{data:s}):"stacked-y-bar"===n?(0,m.jsx)(f,{data:s,stacked:!0}):"x-bar"===n?(0,m.jsx)(f,{data:s,isHorizontal:!0}):"stacked-x-bar"===n?(0,m.jsx)(f,{data:s,stacked:!0,isHorizontal:!0}):(0,c.Jt)()}},7708:function(e,n,t){t.d(n,{r:function(){return x}});var i=t(2175),r=t(7615),a=t(2753),l=t(225),o=t.n(l),s=t(4361),u=t(5462),d=t(4777),c=t(5887);function x(e){var n=e.hasAnimation,t=e.hasSplitView,i=e.baseColumnDatum,l=e.targetColumnDatum,u=e.tabIndex,x=e.onSelectTab,m=i||{},f=m.type,v=m.topk,p=m.histogram,g=m.trues,b=m.falses,j=l||{},C=j.type,y=j.topk,S=j.histogram,k=j.trues,w=j.falses,O=null!==v&&void 0!==v?v:y,Z=null!==f&&void 0!==f?f:C,T=null!==p&&void 0!==p?p:S,A=null!==g&&void 0!==g?g:k,B=null!==b&&void 0!==b?b:w,D=o()(A)&&o()(B),z=T&&Z,H="other"===Z,W=D||z||O||H,F="string"===Z?d.d4:"Histogram";return(0,c.jsxs)(r.xu,{pb:10,width:"100%",children:[(0,c.jsx)(r.xv,{fontSize:"xl",children:"Visualizations"}),(0,c.jsx)(r.iz,{my:1}),W?(0,c.jsxs)(a.mQ,{isLazy:!0,index:u,onChange:function(e){return x(e)},children:[(0,c.jsxs)(a.td,{children:[O&&(0,c.jsx)(a.OK,{children:"Top Categories"}),z&&(0,c.jsx)(a.OK,{children:F}),D&&(0,c.jsx)(a.OK,{children:"Boolean"}),H&&(0,c.jsx)(a.OK,{children:"Other"})]}),(0,c.jsxs)(a.nP,{children:[O&&(0,c.jsx)(a.x4,{px:0,children:h(i,l,t,"topk",n)}),z&&(0,c.jsx)(a.x4,{px:0,children:h(i,l,t,"histogram",n)}),D&&(0,c.jsx)(a.x4,{px:0,children:h(i,l,t,"pie",n)}),H&&(0,c.jsx)(a.x4,{px:0,children:h(i,l,t)})]})]}):(0,s.y2)({valids:null===i||void 0===i?void 0:i.valids,schema_type:null===i||void 0===i?void 0:i.schema_type})]})}function h(e,n,t,a,l){var o={};return"topk"!==a&&(o.minHeight="300px",o.maxHeight="300px"),(0,c.jsxs)(r.rj,{templateColumns:t?"1fr 1fr":"1fr",gap:10,children:[(0,c.jsx)(r.P4,{minWidth:0,children:(0,c.jsx)(u.B,(0,i.Z)((0,i.Z)({px:0,title:null===e||void 0===e?void 0:e.name},o),{},{children:(0,s.SH)(e,n,a,l)}))}),t&&(0,c.jsx)(r.P4,{minWidth:0,children:null!==n&&(0,c.jsx)(u.B,(0,i.Z)((0,i.Z)({p:0,title:null===n||void 0===n?void 0:n.name},o),{},{children:(0,s.SH)(n,e,a,l)}))})]})}},2471:function(e,n,t){t.d(n,{t:function(){return d}});var i=t(7615),r=t(4361),a=t(6367),l=t(2448),o=t(3354),s=t(3214),u=t(5887);function d(e){var n=e.columnDatum,t=e.hasAnimation,d=(0,s.Wx)(n),c=!!t&&{};return(0,u.jsxs)(i.kC,{direction:"column",width:"100%",children:[(0,u.jsx)(i.xu,{h:"2em",flexGrow:1,children:d?(0,u.jsx)(a.Wi,{data:d,animation:c}):(0,r.y2)({})}),(0,u.jsxs)(i.xu,{children:[(0,u.jsx)(l.P,{columnDatum:n,width:"100%"}),(0,u.jsx)(o.Q,{columnDatum:n,width:"100%"})]})]})}},962:function(e,n,t){t.d(n,{E:function(){return o}});var i=t(7615),r=t(4361),a=t(1958),l=t(5887);function o(e){var n=e.columnDatum;return(0,l.jsx)(i.xu,{width:"100%",children:n?(0,l.jsx)(a.Y,{columnDatum:n,width:"100%"}):(0,r.y2)({})})}},4641:function(e,n,t){t.d(n,{M:function(){return s}});var i=t(7615),r=t(4361),a=t(5871),l=t(5717),o=t(5887);function s(e){var n=e.columnDatum,t=n||{},s=t.p50,u=t.max,d=t.min,c=t.p25,x=t.p75;return(0,o.jsx)(i.xu,{minWidth:"0px",width:"100%",children:n?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.xu,{children:(0,o.jsx)(a.UZ,{quantileData:{p50:s,max:u,min:d,p25:c,p75:x}})}),(0,o.jsx)(l.d,{columnDatum:n})]}):(0,r.y2)({})})}},8794:function(e,n,t){t.d(n,{e0:function(){return l.e},gb:function(){return r.gb},Jd:function(){return r.Jd},rH:function(){return a.rH},Se:function(){return a.Se},Jt:function(){return i.Jt},im:function(){return i.ch}});t(9408),t(3344),t(5462),t(5871),t(6367),t(3517),t(9898);var i=t(4361),r=(t(6878),t(5655)),a=(t(2196),t(3129)),l=(t(6564),t(7708),t(2471),t(962),t(346));t(4641)},8685:function(e,n,t){t.d(n,{B1:function(){return a.B1},FP:function(){return a.FP},Jt:function(){return i.Jt},Se:function(){return i.Se},Uh:function(){return a.Uh},e0:function(){return i.e0},im:function(){return i.im},ll:function(){return a.ll},mq:function(){return r.mq},rH:function(){return i.rH},wC:function(){return a.wC}});var i=t(8794),r=t(2122),a=(t(7768),t(6708),t(1831))}}]);
//# sourceMappingURL=102.c4bab252.chunk.js.map