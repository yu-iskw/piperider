"use strict";(self.webpackChunk_infuseai_piperider_ui=self.webpackChunk_infuseai_piperider_ui||[]).push([[354],{34130:function(e,n,i){i.r(n),i.d(n,{SRPage:function(){return U},default:function(){return B}});var t=i(82904),l=i(68794),s=i(78282),r=i(11288),o=i(53182),a=i(1831),d=i(5322),c=i(61431),x=i(7615),u=i(86830),v=i(31756),j=i(41676),h=i(12158),m=i(26564),p=i(82122),f=i(87437),b=i(50874),g=i(15887);function y(){var e,n,i;(0,p.mq)({eventName:a.FP.PAGE_VIEW,eventProperties:{type:a.ll,page:"assertion-list-page"}});var t=(0,v.useState)(""),l=(0,c.Z)(t,2),s=l[0],r=l[1],o=a.nq.getState(),d=o.assertionsOnly,y=o.isCloudReport,A=(d||{}).metadata,W=y?b.ee:b.p0;return(0,g.jsxs)(x.xu,{children:[(0,g.jsxs)(u.bZ,{status:"warning",mb:5,children:[(0,g.jsx)(u.zM,{}),(0,g.jsxs)(x.xu,{children:[(0,g.jsx)(u.Cd,{children:"The Assertions page is deprecated and will be removed in the future"}),(0,g.jsxs)(u.X,{fontSize:"sm",children:["If you have a strong need for this page, please contact us by the"," ",(0,g.jsx)(x.rU,{href:W,style:{textDecoration:"underline"},children:"feedback link"}),". Your feedback is important to us. Thank you!"]})]})]}),(0,g.jsx)(x.xv,{fontSize:"xl",fontWeight:"semibold",textAlign:"left",children:"Assertions"}),(0,g.jsx)(x.kC,{maxW:f.eb-50,w:"100%",children:(0,g.jsx)(h.f,{onChange:r,filterString:s})}),(0,g.jsx)(x.kC,{justify:"start",maxW:f.eb-50,w:"100%",my:5,children:Number(null===A||void 0===A||null===(e=A.base)||void 0===e?void 0:e.total)>0&&(0,g.jsx)(j.F,{total:null===A||void 0===A||null===(n=A.base)||void 0===n?void 0:n.total,failed:null===A||void 0===A||null===(i=A.base)||void 0===i?void 0:i.failed})}),(0,g.jsx)(m.O,{maxW:f.eb-50,w:"100%",singleOnly:!0,filterString:s,comparableAssertions:d})]})}var A=i(4911),W=i.n(A),_=i(52912),C=i(44163);function S(){var e,n;(0,p.mq)({eventName:a.FP.PAGE_VIEW,eventProperties:{type:a.ll,page:"metrics-page"}});var i=a.nq.getState(),s=i.tableColumnsOnly,r=i.rawData,o=(0,t.yj)(d.TQ),u=(0,c.Z)(o,2),v=u[0],j=u[1],h=null!==(e=null===r||void 0===r||null===(n=r.base)||void 0===n?void 0:n.metrics)&&void 0!==e?e:[],m="All metrics",f="All metric queries";if(v){var b=null===j||void 0===j?void 0:j.uniqueId,y=W().find(s,(function(e){return(0,c.Z)(e,1)[0]===b}));if(y){var A,S=(0,c.Z)(y,2)[1].base;h=(null===S||void 0===S?void 0:S.__queries)||[],m=null!==(A=null===S||void 0===S?void 0:S.label)&&void 0!==A?A:null===S||void 0===S?void 0:S.name,f=null===S||void 0===S?void 0:S.description}}var w=h.map((function(e){return e.name}));return(0,g.jsxs)(x.xu,{children:[!v&&(0,g.jsx)(x.xv,{fontSize:"xl",fontWeight:"semibold",textAlign:"left",children:"Metrics"}),v&&(0,g.jsx)(l.QN,{subtitle:"Metric",title:m,icon:_.NMh,infoTip:f}),(0,g.jsxs)(x.rj,{templateColumns:{base:"1fr",xl:"1fr 1fr"},w:"100%",gap:5,children:[w.map((function(e){var n=h.find((function(n){return n.name===e}));return(0,g.jsx)(x.P4,{children:(0,g.jsx)(C.l,{data:{base:n},singleOnly:!0})},e)})),0===w.length&&(0,g.jsxs)(x.xv,{color:"gray.500",children:["No metric queries available. To enable, see"," ",(0,g.jsx)(x.rU,{isExternal:!0,textDecoration:"underline",href:"https://docs.piperider.io/get-started/run/metrics",children:"metrics docs"})]})]})]})}var w=i(12471),N=i(67708),z=i(84641),P=i(20962),D=i(83512),T=i(7267),k=i(48685),q=i(50421),O=i(86629);function E(){var e,n=(0,d.vs)(),i=null===n||void 0===n?void 0:n.uniqueId,t=decodeURIComponent((null===n||void 0===n?void 0:n.tableName)||""),l=decodeURIComponent((null===n||void 0===n?void 0:n.columnName)||"");(0,k.mq)({eventName:k.FP.PAGE_VIEW,eventProperties:{type:k.ll,page:"column-details-page"}});var s=O.n.getState().tableColumnsOnly,r=void 0===s?[]:s,o=i||"table.".concat(t);if(void 0===o)return(0,g.jsx)(D.J,{text:"No data found for '".concat(o,".").concat(l,"'")});var a=r.find((function(e){return(0,c.Z)(e,1)[0]===o}));if(!a)return(0,g.jsx)(D.J,{text:"No data found for '".concat(o,".").concat(l,"'")});var u=null===(e=a[1].base)||void 0===e?void 0:e.__table,v=null===u||void 0===u?void 0:u.columns,j=v?v[l]:void 0,h=j||{},m=h.type,p=h.histogram,f=h.schema_type,b=(0,T.MM)(null===j||void 0===j?void 0:j.type),y=b.backgroundColor,A=b.icon;if(!o||!u||!a||!j)return(0,g.jsx)(D.J,{text:"No data found for '".concat(o,".").concat(l,"'")});var W=(0,T.hG)(m);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(q.Q,{title:l,subtitle:f,infoTip:null===j||void 0===j?void 0:j.description,icon:A,iconColor:y,mb:5}),(0,g.jsxs)(x.rj,{width:"100%",templateColumns:{base:"1fr",xl:"1fr 1px 1fr"},gap:5,children:[(0,g.jsxs)(x.gC,{spacing:10,flex:"1",width:"100%",flexGrow:1,flexShrink:1,children:[(0,g.jsxs)(x.xu,{width:"100%",children:[(0,g.jsx)(x.xv,{fontSize:"xl",children:"Data Composition"}),(0,g.jsx)(x.iz,{}),(0,g.jsx)(w.t,{columnDatum:j})]}),(0,T.jl)(m)&&(0,g.jsxs)(x.xu,{width:"100%",children:[(0,g.jsxs)(x.xv,{fontSize:"xl",children:[j?(0,k.B1)(null===j||void 0===j?void 0:j.type):"Type "," ","Statistics"]}),(0,g.jsx)(x.iz,{}),(0,g.jsx)(P.E,{columnDatum:j})]}),W&&p&&(0,g.jsxs)(x.xu,{width:"100%",children:[(0,g.jsx)(x.xv,{fontSize:"xl",children:"Quantile Data"}),(0,g.jsx)(x.iz,{}),(0,g.jsx)(z.M,{columnDatum:j})]})]}),(0,g.jsx)(x.iz,{orientation:"vertical"}),(0,g.jsx)(x.gC,{spacing:10,width:"100%",children:(0,g.jsx)(N.r,{columnDatum:j})})]})]})}function F(){var e,n,i=(0,d.e$)(),t=i.tableName,l=i.uniqueId;(0,k.mq)({eventName:k.FP.PAGE_VIEW,eventProperties:{type:k.ll,page:"table-details-page"}});var s=O.n.getState().tableColumnsOnly,r=void 0===s?[]:s,o=t||l;if(void 0===o)return(0,g.jsx)(D.J,{text:"No data found for '".concat(o,"'")});var a=l||"table.".concat(t),u=r.find((function(e){return(0,c.Z)(e,1)[0]===a}));if(!u)return(0,g.jsx)(D.J,{text:"No data found for '".concat(o,"'")});var v=null===(e=u[1].base)||void 0===e?void 0:e.__table;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(q.Q,{title:v.name,subtitle:"Table",infoTip:v.description,mb:5}),(0,g.jsxs)(x.rj,{width:"100%",templateColumns:{base:"1fr","2xl":"1fr 1px 1fr"},gap:5,children:[(0,g.jsxs)(x.gC,{spacing:10,children:[(0,g.jsxs)(x.xu,{width:"100%",children:[(0,g.jsx)(x.xv,{fontSize:"xl",children:"Table Statistics"}),(0,g.jsx)(x.iz,{my:1}),(0,g.jsx)(k.Se,{tableDatum:v})]}),(0,g.jsxs)(x.xu,{width:"100%",children:[(0,g.jsx)(x.xv,{fontSize:"xl",children:"Duplicate Rows"}),(0,g.jsx)(x.iz,{my:1}),(0,g.jsx)(k.e0,{tableDatum:v})]})]}),(0,g.jsx)(x.iz,{orientation:"vertical"}),(0,g.jsx)(k.rH,{columns:null===u||void 0===u||null===(n=u[1].base)||void 0===n?void 0:n.__columns,singleOnly:!0})]})]})}var I=i(82175),Z=i(33660),M=i(85939),G=i(24236),R=i(1352),Q=i(95282),J=i(93354);function V(){var e,n,i=(0,Z.qY)(),t=(0,v.useState)(-1),l=(0,c.Z)(t,2),s=l[0],r=l[1],o=O.n.getState(),a=o.tableColumnsOnly,d=void 0===a?[]:a,u=o.assertionsOnly,j=o.isLegacy;(0,R.m)({eventName:Q.FP.PAGE_VIEW,eventProperties:{type:Q.ll,page:"table-list-page"}});var h=W().sortBy(d,(function(e){var n,i=(0,c.Z)(e,2)[1],t=i.base,l=i.target,s=null!==l&&void 0!==l?l:t;return null===s||void 0===s||null===(n=s.__table)||void 0===n?void 0:n.name})),m=-1!==s?h[s][1].base:void 0;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(x.xv,{fontSize:"xl",fontWeight:"semibold",textAlign:"left",children:"Tables"}),(0,g.jsxs)(x.kC,{direction:"column",width:"100%",minHeight:"650px",children:[(0,g.jsxs)(x.rj,{templateColumns:f.Dp,maxW:f.xD,px:4,my:6,children:[(0,g.jsx)(x.xv,{children:"Name"}),(0,g.jsx)(x.xv,{children:"Summary"}),(0,g.jsx)(x.xv,{children:"Assertions"})]}),h.map((function(e,n){var t=(0,c.Z)(e,2)[1],l=t.base,s=t.target,o=null!==l&&void 0!==l?l:s;return null!==o&&void 0!==o&&o.__table&&(j||"table"!==(null===o||void 0===o?void 0:o.resource_type))?(0,g.jsx)(M.h,{combinedAssertions:u,combinedTableEntry:e,singleOnly:!0,onInfoClick:function(){r(n),i.onOpen()}},n):(0,g.jsx)(g.Fragment,{})}))]}),(0,g.jsxs)(J.W,(0,I.Z)((0,I.Z)({},i),{},{size:"2xl",title:null!==(e=null===m||void 0===m||null===(n=m.__table)||void 0===n?void 0:n.name)&&void 0!==e?e:"No title",onClose:function(){r(-1),i.onClose()},children:[(0,g.jsxs)(x.xv,{fontSize:"lg",mb:4,children:["Description:"," ",(null===m||void 0===m?void 0:m.description)||(0,g.jsx)(x.xv,{as:"i",children:"No description provided."})]}),-1!==s&&(0,g.jsx)(G.r,{singleOnly:!0,columns:null===m||void 0===m?void 0:m.__columns})]}))]})}function U(e){var n=e.data,i=e.cloud,c=e.sideNavTop,x=void 0===c?"0px":c;return(0,a.nq)((function(e){return e.setReportRawData}))({base:n}),(0,g.jsx)(t.F0,{hook:o.w,children:(0,g.jsx)(t.rs,{children:(0,g.jsx)(s.$,{sideNavTop:x,cloud:i,singleOnly:!0,children:(0,g.jsxs)(t.rs,{children:[(0,g.jsx)(t.AW,{path:d.bw,children:(0,g.jsx)(V,{})}),(0,g.jsx)(t.AW,{path:d.KX,children:(0,g.jsx)(V,{})}),(0,g.jsx)(t.AW,{path:d.WF,children:(0,g.jsx)(F,{})}),(0,g.jsx)(t.AW,{path:d.t3,children:(0,g.jsx)(E,{})}),(0,g.jsx)(t.AW,{path:d.mo,children:(0,g.jsx)(F,{})}),(0,g.jsx)(t.AW,{path:d.n3,children:(0,g.jsx)(E,{})}),(0,g.jsx)(t.AW,{path:d.d2,children:(0,g.jsx)(F,{})}),(0,g.jsx)(t.AW,{path:d.Sx,children:(0,g.jsx)(E,{})}),(0,g.jsx)(t.AW,{path:d.iB,children:(0,g.jsx)(F,{})}),(0,g.jsx)(t.AW,{path:d.dF,children:(0,g.jsx)(E,{})}),(0,g.jsx)(t.AW,{path:d.$n,children:(0,g.jsx)(y,{})}),(0,g.jsx)(t.AW,{path:d.xH,children:(0,g.jsx)(S,{})}),(0,g.jsx)(t.AW,{path:d.TQ,children:(0,g.jsx)(S,{})}),(0,g.jsx)(t.AW,{path:d.Mu,children:(0,g.jsx)(l.gb,{})}),(0,g.jsx)(t.AW,{children:(0,g.jsx)(r.T,{})})]})})})})}var B=U}}]);
//# sourceMappingURL=354.48be7890.chunk.js.map