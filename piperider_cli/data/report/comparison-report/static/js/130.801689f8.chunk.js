"use strict";(self.webpackChunk_infuseai_piperider_ui=self.webpackChunk_infuseai_piperider_ui||[]).push([[130],{4130:function(e,n,t){t.r(n),t.d(n,{SRPage:function(){return B},default:function(){return H}});var i=t(2904),l=t(8794),s=t(952),a=t(1288),o=t(3182),r=t(1831),d=t(5322),x=t(1431),c=t(7615),u=t(6830),v=t(1756),j=t(1676),h=t(2158),p=t(6564),m=t(2122),f=t(7437),b=t(5432),g=t(5887);function y(){var e,n,t;(0,m.mq)({eventName:r.FP.PAGE_VIEW,eventProperties:{type:r.ll,page:"assertion-list-page"}});var i=(0,v.useState)(""),l=(0,x.Z)(i,2),s=l[0],a=l[1],o=r.nq.getState(),d=o.assertionsOnly,y=o.isCloudReport,W=(d||{}).metadata,A=y?b.ee:b.p0;return(0,g.jsxs)(c.xu,{children:[(0,g.jsxs)(u.bZ,{status:"warning",mb:5,children:[(0,g.jsx)(u.zM,{}),(0,g.jsxs)(c.xu,{children:[(0,g.jsx)(u.Cd,{children:"The Assertions page is deprecated and will be removed in the future"}),(0,g.jsxs)(u.X,{fontSize:"sm",children:["If you have a strong need for this page, please contact us by the"," ",(0,g.jsx)(c.rU,{href:A,style:{textDecoration:"underline"},children:"feedback link"}),". Your feedback is important to us. Thank you!"]})]})]}),(0,g.jsx)(c.xv,{fontSize:"xl",fontWeight:"semibold",textAlign:"left",children:"Assertions"}),(0,g.jsx)(c.kC,{maxW:f.eb-50,w:"100%",children:(0,g.jsx)(h.f,{onChange:a,filterString:s})}),(0,g.jsx)(c.kC,{justify:"start",maxW:f.eb-50,w:"100%",my:5,children:Number(null===W||void 0===W||null===(e=W.base)||void 0===e?void 0:e.total)>0&&(0,g.jsx)(j.F,{total:null===W||void 0===W||null===(n=W.base)||void 0===n?void 0:n.total,failed:null===W||void 0===W||null===(t=W.base)||void 0===t?void 0:t.failed})}),(0,g.jsx)(p.O,{maxW:f.eb-50,w:"100%",singleOnly:!0,filterString:s,comparableAssertions:d})]})}var W=t(4163);function A(){var e,n;(0,m.mq)({eventName:r.FP.PAGE_VIEW,eventProperties:{type:r.ll,page:"metrics-page"}});var t=r.nq.getState().BMOnly;return(0,g.jsxs)(c.xu,{children:[(0,g.jsx)(c.xv,{fontSize:"xl",fontWeight:"semibold",textAlign:"left",children:"Metrics"}),(0,g.jsxs)(c.rj,{templateColumns:{base:"1fr",xl:"1fr 1fr"},w:"100%",gap:5,children:[(null!==(e=null===t||void 0===t?void 0:t.base)&&void 0!==e?e:[]).map((function(e){return(0,g.jsx)(c.P4,{children:(0,g.jsx)(W.l,{data:{base:e},singleOnly:!0})},e.name)})),!(null!==t&&void 0!==t&&null!==(n=t.base)&&void 0!==n&&n.length)&&(0,g.jsx)(l.Jd,{text:"No metrics data available"})]})]})}var _=t(2471),C=t(7708),S=t(4641),w=t(962),N=t(3512),z=t(7267),P=t(8685),k=t(421),D=t(5737);function O(){var e,n=(0,d.vs)(),t=null===n||void 0===n?void 0:n.uniqueId,i=decodeURIComponent((null===n||void 0===n?void 0:n.tableName)||""),l=decodeURIComponent((null===n||void 0===n?void 0:n.columnName)||"");(0,P.mq)({eventName:P.FP.PAGE_VIEW,eventProperties:{type:P.ll,page:"column-details-page"}});var s=D.n.getState().tableColumnsOnly,a=void 0===s?[]:s,o=t||"table.".concat(i);if(void 0===o)return(0,g.jsx)(N.J,{text:"No data found for '".concat(o,".").concat(l,"'")});var r=a.find((function(e){return(0,x.Z)(e,1)[0]===o}));if(!r)return(0,g.jsx)(N.J,{text:"No data found for '".concat(o,".").concat(l,"'")});var u=null===(e=r[1].base)||void 0===e?void 0:e.__table,v=null===u||void 0===u?void 0:u.columns,j=v?v[l]:void 0,h=j||{},p=h.type,m=h.histogram,f=h.schema_type,b=(0,z.MM)(null===j||void 0===j?void 0:j.type),y=b.backgroundColor,W=b.icon;if(!o||!u||!r||!j)return(0,g.jsx)(N.J,{text:"No data found for '".concat(o,".").concat(l,"'")});var A=(0,z.hG)(p);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(k.Q,{title:l,subtitle:f,infoTip:null===j||void 0===j?void 0:j.description,icon:W,iconColor:y,mb:5}),(0,g.jsxs)(c.rj,{width:"100%",templateColumns:{base:"1fr",xl:"1fr 1px 1fr"},gap:5,children:[(0,g.jsxs)(c.gC,{spacing:10,flex:"1",width:"100%",flexGrow:1,flexShrink:1,children:[(0,g.jsxs)(c.xu,{width:"100%",children:[(0,g.jsx)(c.xv,{fontSize:"xl",children:"Data Composition"}),(0,g.jsx)(c.iz,{}),(0,g.jsx)(_.t,{columnDatum:j})]}),(0,z.jl)(p)&&(0,g.jsxs)(c.xu,{width:"100%",children:[(0,g.jsxs)(c.xv,{fontSize:"xl",children:[j?(0,P.B1)(null===j||void 0===j?void 0:j.type):"Type "," ","Statistics"]}),(0,g.jsx)(c.iz,{}),(0,g.jsx)(w.E,{columnDatum:j})]}),A&&m&&(0,g.jsxs)(c.xu,{width:"100%",children:[(0,g.jsx)(c.xv,{fontSize:"xl",children:"Quantile Data"}),(0,g.jsx)(c.iz,{}),(0,g.jsx)(S.M,{columnDatum:j})]})]}),(0,g.jsx)(c.iz,{orientation:"vertical"}),(0,g.jsx)(c.gC,{spacing:10,width:"100%",children:(0,g.jsx)(C.r,{columnDatum:j})})]})]})}function F(){var e,n,t=(0,d.e$)(),i=t.tableName,l=t.uniqueId;(0,P.mq)({eventName:P.FP.PAGE_VIEW,eventProperties:{type:P.ll,page:"table-details-page"}});var s=D.n.getState().tableColumnsOnly,a=void 0===s?[]:s,o=i||l;if(void 0===o)return(0,g.jsx)(N.J,{text:"No data found for '".concat(o,"'")});var r=l||"table.".concat(i),u=a.find((function(e){return(0,x.Z)(e,1)[0]===r}));if(!u)return(0,g.jsx)(N.J,{text:"No data found for '".concat(o,"'")});var v=null===(e=u[1].base)||void 0===e?void 0:e.__table;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(k.Q,{title:v.name,subtitle:"Table",infoTip:v.description,mb:5}),(0,g.jsxs)(c.rj,{width:"100%",templateColumns:{base:"1fr","2xl":"1fr 1px 1fr"},gap:5,children:[(0,g.jsxs)(c.gC,{spacing:10,children:[(0,g.jsxs)(c.xu,{width:"100%",children:[(0,g.jsx)(c.xv,{fontSize:"xl",children:"Table Statistics"}),(0,g.jsx)(c.iz,{my:1}),(0,g.jsx)(P.Se,{tableDatum:v})]}),(0,g.jsxs)(c.xu,{width:"100%",children:[(0,g.jsx)(c.xv,{fontSize:"xl",children:"Duplicate Rows"}),(0,g.jsx)(c.iz,{my:1}),(0,g.jsx)(P.e0,{tableDatum:v})]})]}),(0,g.jsx)(c.iz,{orientation:"vertical"}),(0,g.jsx)(P.rH,{columns:null===u||void 0===u||null===(n=u[1].base)||void 0===n?void 0:n.__columns,singleOnly:!0})]})]})}var E=t(2175),T=t(3660),I=t(5939),q=t(4236),Z=t(1352),G=t(5282),M=t(3066),R=t(4911),J=t.n(R);function V(){var e,n,t=(0,T.qY)(),i=(0,v.useState)(-1),l=(0,x.Z)(i,2),s=l[0],a=l[1],o=D.n.getState(),r=o.tableColumnsOnly,d=void 0===r?[]:r,u=o.assertionsOnly,j=o.isLegacy;(0,Z.m)({eventName:G.FP.PAGE_VIEW,eventProperties:{type:G.ll,page:"table-list-page"}});var h=J().sortBy(d,(function(e){var n,t=(0,x.Z)(e,2)[1],i=t.base,l=t.target,s=null!==l&&void 0!==l?l:i;return null===s||void 0===s||null===(n=s.__table)||void 0===n?void 0:n.name})),p=-1!==s?h[s][1].base:void 0;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.xv,{fontSize:"xl",fontWeight:"semibold",textAlign:"left",children:"Tables"}),(0,g.jsxs)(c.kC,{direction:"column",width:"100%",minHeight:"650px",children:[(0,g.jsxs)(c.rj,{templateColumns:f.Dp,maxW:f.xD,px:4,my:6,children:[(0,g.jsx)(c.xv,{children:"Name"}),(0,g.jsx)(c.xv,{children:"Summary"}),(0,g.jsx)(c.xv,{children:"Assertions"})]}),h.map((function(e,n){var i=(0,x.Z)(e,2)[1],l=i.base,s=i.target,o=null!==l&&void 0!==l?l:s;return null!==o&&void 0!==o&&o.__table&&(j||"table"!==(null===o||void 0===o?void 0:o.resource_type))?(0,g.jsx)(I.h,{combinedAssertions:u,combinedTableEntry:e,singleOnly:!0,onInfoClick:function(){a(n),t.onOpen()}},n):(0,g.jsx)(g.Fragment,{})}))]}),(0,g.jsxs)(M.W,(0,E.Z)((0,E.Z)({},t),{},{size:"2xl",title:null!==(e=null===p||void 0===p||null===(n=p.__table)||void 0===n?void 0:n.name)&&void 0!==e?e:"No title",onClose:function(){a(-1),t.onClose()},children:[(0,g.jsxs)(c.xv,{fontSize:"lg",mb:4,children:["Description:"," ",(null===p||void 0===p?void 0:p.description)||(0,g.jsx)(c.xv,{as:"i",children:"No description provided."})]}),-1!==s&&(0,g.jsx)(q.r,{singleOnly:!0,columns:null===p||void 0===p?void 0:p.__columns})]}))]})}function B(e){var n=e.data,t=e.sideNavTop,x=void 0===t?"0px":t;return(0,r.nq)((function(e){return e.setReportRawData}))({base:n}),(0,g.jsx)(i.F0,{hook:o.w,children:(0,g.jsx)(s.$,{sideNavTop:x,singleOnly:!0,children:(0,g.jsxs)(i.rs,{children:[(0,g.jsx)(i.AW,{path:d.bw,children:(0,g.jsx)(V,{})}),(0,g.jsx)(i.AW,{path:d.KX,children:(0,g.jsx)(V,{})}),(0,g.jsx)(i.AW,{path:d.WF,children:(0,g.jsx)(F,{})}),(0,g.jsx)(i.AW,{path:d.t3,children:(0,g.jsx)(O,{})}),(0,g.jsx)(i.AW,{path:d.mo,children:(0,g.jsx)(F,{})}),(0,g.jsx)(i.AW,{path:d.n3,children:(0,g.jsx)(O,{})}),(0,g.jsx)(i.AW,{path:d.d2,children:(0,g.jsx)(F,{})}),(0,g.jsx)(i.AW,{path:d.Sx,children:(0,g.jsx)(O,{})}),(0,g.jsx)(i.AW,{path:d.iB,children:(0,g.jsx)(F,{})}),(0,g.jsx)(i.AW,{path:d.dF,children:(0,g.jsx)(O,{})}),(0,g.jsx)(i.AW,{path:d.$n,children:(0,g.jsx)(y,{})}),(0,g.jsx)(i.AW,{path:d.xH,children:(0,g.jsx)(A,{})}),(0,g.jsx)(i.AW,{path:d.Mu,children:(0,g.jsx)(l.gb,{})}),(0,g.jsx)(i.AW,{children:(0,g.jsx)(a.T,{})})]})})})}var H=B}}]);
//# sourceMappingURL=130.801689f8.chunk.js.map