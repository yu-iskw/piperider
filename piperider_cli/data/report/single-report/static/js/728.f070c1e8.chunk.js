"use strict";(self.webpackChunk_infuseai_piperider_ui=self.webpackChunk_infuseai_piperider_ui||[]).push([[728],{5728:function(e,i,n){n.r(i),n.d(i,{CRPage:function(){return X},default:function(){return H}});var t=n(2904),r=n(8794),l=n(3851),s=n(1288),o=n(3182),a=n(1831),d=n(5322),x=n(1431),c=n(7615),h=n(6830),u=n(1756),j=n(2158),v=n(3129),m=n(6564),p=n(2122),f=n(7437),g=n(6629),b=n(3510),C=n(5887);function y(){var e,i,n,t;(0,p.mq)({eventName:a.FP.PAGE_VIEW,eventProperties:{type:a.bB,page:"assertion-list-page"}});var r=(0,u.useState)(""),l=(0,x.Z)(r,2),s=l[0],o=l[1],d=g.n.getState(),y=d.assertionsOnly,w=d.isCloudReport,z=(y||{}).metadata,S=w?b.ee:b.p0;return(0,C.jsxs)(c.xu,{children:[(0,C.jsxs)(h.bZ,{status:"warning",mb:5,children:[(0,C.jsx)(h.zM,{}),(0,C.jsxs)(c.xu,{children:[(0,C.jsx)(h.Cd,{children:"The Assertions page is deprecated and will be removed in the future"}),(0,C.jsxs)(h.X,{fontSize:"sm",children:["If you have a strong need for this page, please contact us by the"," ",(0,C.jsx)(c.rU,{href:S,style:{textDecoration:"underline"},children:"feedback link"}),". Your feedback is important to us. Thank you!"]})]})]}),(0,C.jsx)(c.kC,{w:"100%",children:(0,C.jsx)(c.xv,{fontSize:"xl",fontWeight:"semibold",textAlign:"left",children:"Assertions"})}),(0,C.jsx)(c.kC,{maxW:f.eb-50,w:"100%",mt:5,children:(0,C.jsx)(j.f,{onChange:o,filterString:s})}),(0,C.jsx)(c.kC,{justify:"start",maxW:f.eb-50,w:"100%",my:5,children:(0,C.jsx)(v.z4,{baseAssertionFailed:null===z||void 0===z||null===(e=z.base)||void 0===e?void 0:e.failed,baseAssertionTotal:null===z||void 0===z||null===(i=z.base)||void 0===i?void 0:i.total,targetAssertionFailed:null===z||void 0===z||null===(n=z.target)||void 0===n?void 0:n.failed,targetAssertionTotal:null===z||void 0===z||null===(t=z.target)||void 0===t?void 0:t.total})}),(0,C.jsx)(m.O,{w:f.eb,comparableAssertions:y,filterString:s,setFilterString:o})]})}var w=n(4163);function z(){var e,i;(0,p.mq)({eventName:a.FP.PAGE_VIEW,eventProperties:{type:a.bB,page:"metrics-page"}});var n=a.nq.getState().BMOnly,t=null!==(e=null!==(i=null===n||void 0===n?void 0:n.target)&&void 0!==i?i:null===n||void 0===n?void 0:n.base)&&void 0!==e?e:[];return(0,C.jsxs)(c.xu,{children:[(0,C.jsx)(c.kC,{w:"100%",children:(0,C.jsx)(c.xv,{fontSize:"xl",fontWeight:"semibold",textAlign:"left",children:"Metrics"})}),(0,C.jsxs)(c.rj,{templateColumns:{base:"1fr",xl:"1fr 1fr"},w:"100%",gap:5,children:[t.map((function(e,i){var t,r,l=null===n||void 0===n||null===(t=n.base)||void 0===t?void 0:t.find((function(i){return i.name===e.name}));return(0,C.jsx)(c.P4,{children:(0,C.jsx)(w.l,{data:{base:l,target:null===n||void 0===n||null===(r=n.target)||void 0===r?void 0:r[i]}})},e.name)})),0===t.length&&(0,C.jsx)(r.Jd,{text:"No metrics data available"})]})]})}var S=n(2471),T=n(7708),W=n(962),A=n(4641),k=n(3512),N=n(3214),D=n(421);function E(){var e=(0,t.yj)(d.t3),i=(0,x.Z)(e,2)[1],n=decodeURIComponent((null===i||void 0===i?void 0:i.tableName)||""),r=decodeURIComponent((null===i||void 0===i?void 0:i.columnName)||"");(0,p.mq)({eventName:a.FP.PAGE_VIEW,eventProperties:{type:a.bB,page:"column-details-page"}});var l=g.n.getState().rawData,s=l.base.tables,o=l.input.tables,h=s[n],u=o[n],j=(null===h||void 0===h?void 0:h.columns)||{},v=(null===u||void 0===u?void 0:u.columns)||{},m=j[r],b=v[r],y=b||m,w=(m||{}).type,z=(b||{}).type;if(!m&&!b)return(0,C.jsx)(k.J,{text:"No profile data found for '".concat(n,".").concat(r,"'")});function E(e){var i=e.title,n=e.Comp;return void 0===m?(0,C.jsxs)(c.xu,{width:"100%",children:[(0,C.jsx)(c.xv,{fontSize:"xl",children:i}),(0,C.jsx)(c.iz,{}),(0,C.jsx)(n,{columnDatum:b})]}):void 0===b?(0,C.jsxs)(c.xu,{width:"100%",children:[(0,C.jsx)(c.xv,{fontSize:"xl",children:i}),(0,C.jsx)(c.iz,{}),(0,C.jsx)(n,{columnDatum:m})]}):(0,C.jsxs)(c.xu,{width:"100%",children:[(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[(0,C.jsx)(c.xv,{fontSize:"xl",children:i}),(0,C.jsx)(c.iz,{orientation:"vertical"}),(0,C.jsx)(c.xv,{fontSize:"xl",children:i})]}),(0,C.jsx)(c.iz,{}),(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:8,minWidth:0,children:[(0,C.jsx)(n,{columnDatum:m}),(0,C.jsx)(c.iz,{orientation:"vertical"}),(0,C.jsx)(n,{columnDatum:b})]})]})}function _(e){var i=e.children;function n(){return(0,C.jsx)(c.xu,{bg:"gray.100",width:"100%",height:"100%",borderWidth:"2px",borderColor:"lightgray"})}return void 0===m?(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[(0,C.jsx)(n,{}),(0,C.jsx)(c.iz,{orientation:"vertical"}),i]}):void 0===b?(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[i,(0,C.jsx)(c.iz,{orientation:"vertical"}),(0,C.jsx)(n,{})]}):(0,C.jsx)(C.Fragment,{children:i})}var F=(0,N.MM)(y),I=F.backgroundColor,B=F.icon;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(D.Q,{title:r,subtitle:null===y||void 0===y?void 0:y.schema_type,infoTip:(null===b||void 0===b?void 0:b.description)||(null===m||void 0===m?void 0:m.description),mb:5,borderBottom:f.dx,icon:B,iconColor:I}),(0,C.jsx)(P,{}),(0,C.jsx)(_,{children:(0,C.jsxs)(c.gC,{spacing:10,children:[(0,C.jsx)(E,{title:"Data Composition",Comp:S.t}),((0,N.jl)(w)||(0,N.jl)(z))&&(0,C.jsx)(E,{title:y?"".concat((0,a.B1)(null===y||void 0===y?void 0:y.type)," Statistics"):"Type Statistics",Comp:W.E}),((0,N.hG)(w)||(0,N.hG)(z))&&(0,C.jsx)(E,{title:"Quantile Data",Comp:A.M}),(0,C.jsx)(E,{title:"Visualizations",Comp:T.r})]})})]})}function P(){return(0,C.jsx)(c.rj,{templateColumns:"1fr 1fr",mb:2,gap:10,children:["Base","Target"].map((function(e,i){return(0,C.jsx)(c.kC,{alignItems:"center",w:"100%",children:(0,C.jsx)(c.xv,{fontWeight:"semibold",fontSize:"2xl",color:"gray.400",w:"100%",children:e})},i)}))})}function _(){var e=(0,t.TH)(),i=(0,x.Z)(e,2),n=i[0],r=i[1];return(0,u.useEffect)((function(){n&&"/"!==n||r("/tables")}),[n,r]),(0,C.jsx)(C.Fragment,{})}var F=n(7348),I=n(4777),B=n(6741),R=n(346);function Z(){var e,i=(0,t.yj)(d.WF),n=(0,x.Z)(i,2)[1],r=decodeURIComponent((null===n||void 0===n?void 0:n.tableName)||"");(0,p.mq)({eventName:a.FP.PAGE_VIEW,eventProperties:{type:a.bB,page:"table-details-page"}});var l=g.n.getState(),s=l.tableColumnsOnly,o=void 0===s?[]:s,h=l.rawData,u=h.base.tables,j=h.input.tables,v=o.find((function(e){return(0,x.Z)(e,1)[0]===r}));if(!r||!u||!j||!v)return(0,C.jsx)(k.J,{text:"No profile data found for table '".concat(r,"'")});var m=u[r],f=j[r];function b(e){var i=e.title,n=e.Comp;return void 0===m?(0,C.jsxs)(c.xu,{width:"100%",children:[(0,C.jsx)(c.xv,{fontSize:"xl",children:i}),(0,C.jsx)(c.iz,{my:1}),(0,C.jsx)(n,{tableDatum:f})]}):void 0===f?(0,C.jsxs)(c.xu,{width:"100%",children:[(0,C.jsx)(c.xv,{fontSize:"xl",children:i}),(0,C.jsx)(c.iz,{my:1}),(0,C.jsx)(n,{tableDatum:m})]}):(0,C.jsxs)(c.xu,{width:"100%",children:[(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[(0,C.jsx)(c.xv,{fontSize:"xl",children:i}),(0,C.jsx)(c.iz,{orientation:"vertical"}),(0,C.jsx)(c.xv,{fontSize:"xl",children:i})]}),(0,C.jsx)(c.iz,{my:1}),(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[(0,C.jsx)(n,{tableDatum:m}),(0,C.jsx)(c.iz,{orientation:"vertical"}),(0,C.jsx)(n,{tableDatum:f})]})]})}function y(e){var i=e.title,n=e.children;function t(){return void 0===m||void 0===f?(0,C.jsx)(c.xv,{fontSize:"xl",children:i}):(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[(0,C.jsx)(c.xv,{fontSize:"xl",children:i}),(0,C.jsx)(c.iz,{orientation:"vertical"}),(0,C.jsx)(c.xv,{fontSize:"xl",children:i})]})}return(0,C.jsxs)(c.xu,{width:"100%",children:[(0,C.jsx)(t,{}),(0,C.jsx)(c.iz,{my:1}),n]})}function w(e){var i=e.children;function n(){return(0,C.jsx)(c.xu,{bg:"gray.100",width:"100%",height:"100%",borderWidth:"2px",borderColor:"lightgray"})}return void 0===m?(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[(0,C.jsx)(n,{}),(0,C.jsx)(c.iz,{orientation:"vertical"}),i]}):void 0===f?(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[i,(0,C.jsx)(c.iz,{orientation:"vertical"}),(0,C.jsx)(n,{})]}):(0,C.jsx)(C.Fragment,{children:i})}return(0,C.jsxs)(c.xu,{children:[(0,C.jsx)(D.Q,{title:r,subtitle:"Table",mb:5,infoTip:null===(e=f||m)||void 0===e?void 0:e.description}),(0,C.jsx)(O,{}),(0,C.jsx)(w,{children:(0,C.jsxs)(c.gC,{spacing:10,children:[(0,C.jsx)(b,{title:"Table Statistics",Comp:B.S}),(0,C.jsx)(y,{title:"Schema",children:(0,C.jsx)(q,{tableEntry:v})}),(0,C.jsx)(b,{title:"Duplicate Rows",Comp:R.e})]})})]})}function O(){return(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,mb:10,children:[(0,C.jsx)(c.kC,{alignItems:"center",w:"100%",children:(0,C.jsx)(c.xv,{fontWeight:"semibold",fontSize:"2xl",color:"gray.400",w:"100%",children:"Base"})}),(0,C.jsx)(c.iz,{}),(0,C.jsx)(c.kC,{alignItems:"center",w:"100%",children:(0,C.jsx)(c.xv,{fontWeight:"semibold",fontSize:"2xl",color:"gray.400",w:"100%",children:"Target"})})]})}function q(e){var i=e.tableEntry,n=(0,x.Z)(i,2)[1],t=n.base,r=n.target,l=r||t,s=function(){return(0,C.jsx)(c.kC,{direction:"column",width:"100%",children:(0,C.jsx)(F.xJ,{width:"100%",children:(0,C.jsxs)(F.iA,{variant:"simple",children:[(0,C.jsx)(F.hr,{children:(0,C.jsxs)(F.Tr,{children:[(0,C.jsx)(F.Th,{width:"25%",children:"Base Column"}),(0,C.jsx)(F.Th,{width:"25%",borderRight:"1px",borderRightColor:"gray.200",children:"Base Type"}),(0,C.jsx)(F.Th,{width:"25%",children:"Traget Column"}),(0,C.jsx)(F.Th,{width:"25%",children:"Target Type"})]})}),(0,C.jsx)(F.p3,{children:null===l||void 0===l?void 0:l.columns.map((function(e){var i,n,t,r,l,s,o=(0,x.Z)(e,3),a=o[0],d=o[1],h=d.base,u=d.target,j=o[2];return(0,C.jsxs)(F.Tr,{_hover:{bg:"blackAlpha.50",cursor:"inherit"},"data-cy":"table-list-schema-item",children:[(0,C.jsx)(F.Td,{color:null!==j&&void 0!==j&&j.mismatched?"red.500":"inherit",maxW:"350px",children:(0,C.jsx)(c.xv,{as:"span",fontSize:"xs",noOfLines:1,whiteSpace:"normal",title:null!==(i=null===h||void 0===h?void 0:h.name)&&void 0!==i?i:I.Nj,children:null!==(n=null===h||void 0===h?void 0:h.name)&&void 0!==n?n:I.Nj})}),(0,C.jsx)(F.Td,{color:null!==j&&void 0!==j&&j.mismatched?"red.500":"inherit",borderRight:"1px",borderRightColor:"gray.200",children:(0,C.jsx)(c.xv,{as:"span",fontSize:"xs",children:null!==(t=null===h||void 0===h?void 0:h.schema_type)&&void 0!==t?t:I.Nj})}),(0,C.jsx)(F.Td,{color:null!==j&&void 0!==j&&j.mismatched?"red.500":"inherit",whiteSpace:"normal",children:(0,C.jsx)(c.xv,{fontSize:"xs",as:"span",noOfLines:1,whiteSpace:"normal",title:null!==(r=null===u||void 0===u?void 0:u.name)&&void 0!==r?r:I.Nj,children:null!==(l=null===u||void 0===u?void 0:u.name)&&void 0!==l?l:I.Nj})}),(0,C.jsx)(F.Td,{color:null!==j&&void 0!==j&&j.mismatched?"red.500":"inherit",children:(0,C.jsx)(c.xv,{as:"span",fontSize:"xs",children:null!==(s=null===u||void 0===u?void 0:u.schema_type)&&void 0!==s?s:I.Nj})})]},a)}))})]})})})},o=function(){return(0,C.jsx)(c.kC,{direction:"column",width:"100%",children:(0,C.jsx)(F.xJ,{width:"100%",children:(0,C.jsxs)(F.iA,{variant:"simple",children:[(0,C.jsx)(F.hr,{children:(0,C.jsxs)(F.Tr,{children:[(0,C.jsx)(F.Th,{width:"50%",children:"Column"}),(0,C.jsx)(F.Th,{width:"50%",children:"Type"})]})}),(0,C.jsx)(F.p3,{children:null===l||void 0===l?void 0:l.columns.map((function(e){var i,n,t,r=(0,x.Z)(e,3),l=r[0],s=r[1],o=s.base,a=s.target,d=(r[2],o||a);return(0,C.jsxs)(F.Tr,{_hover:{bg:"blackAlpha.50",cursor:"inherit"},"data-cy":"table-list-schema-item",children:[(0,C.jsx)(F.Td,{maxW:"350px",children:(0,C.jsx)(c.xv,{as:"span",fontSize:"xs",noOfLines:1,whiteSpace:"normal",title:null!==(i=null===d||void 0===d?void 0:d.name)&&void 0!==i?i:I.Nj,children:null!==(n=null===d||void 0===d?void 0:d.name)&&void 0!==n?n:I.Nj})}),(0,C.jsx)(F.Td,{children:(0,C.jsx)(c.xv,{as:"span",fontSize:"xs",children:null!==(t=null===d||void 0===d?void 0:d.schema_type)&&void 0!==t?t:I.Nj})})]},l)}))})]})})})};return void 0===(null===t||void 0===t?void 0:t.name)||void 0===(null===r||void 0===r?void 0:r.name)?(0,C.jsx)(o,{}):(0,C.jsx)(s,{})}var G=n(2175),M=n(5939),V=n(3660),J=n(4236),U=n(5282),L=n(4109);function Q(){var e,i;(0,p.mq)({eventName:U.FP.PAGE_VIEW,eventProperties:{type:U.bB,page:"table-list-page"}});var n=(0,V.qY)(),t=(0,u.useState)(-1),r=(0,x.Z)(t,2),l=r[0],s=r[1],o=g.n.getState(),a=o.tableColumnsOnly,d=void 0===a?[]:a,h=o.assertionsOnly;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(c.kC,{direction:"column",w:"100%",minHeight:"650px",children:[(0,C.jsx)(c.kC,{w:"100%",children:(0,C.jsx)(c.xv,{fontSize:"xl",fontWeight:"semibold",textAlign:"left",children:"Tables"})}),(0,C.jsxs)(c.rj,{templateColumns:f.Dp,maxW:f.xD,px:4,my:6,children:[(0,C.jsx)(c.xv,{children:"Name"}),(0,C.jsx)(c.xv,{children:"Summary"}),(0,C.jsx)(c.xv,{children:"Assertions"})]}),d.map((function(e,i){return(0,C.jsx)(c.kC,{children:(0,C.jsx)(M.h,{combinedAssertions:h,combinedTableEntry:e,onInfoClick:function(){s(i),n.onOpen()}})},i)}))]}),(0,C.jsxs)(L.W,(0,G.Z)((0,G.Z)({},n),{},{size:"2xl",title:-1!==l&&d[l][0],onClose:function(){s(-1),n.onClose()},children:[(0,C.jsxs)(c.xv,{fontSize:"lg",mb:4,children:["Description:"," ",null!==(e=-1!==l&&(null===(i=d[l][1].target)||void 0===i?void 0:i.description))&&void 0!==e?e:(0,C.jsx)(c.xv,{as:"i",children:"No description provided."})]}),-1!==l&&(0,C.jsx)(J.r,{baseTableEntryDatum:d[l][1].base,targetTableEntryDatum:d[l][1].target})]}))]})}function X(e){var i=e.data,n=e.sideNavTop,x=void 0===n?"0px":n;return(0,a.nq)((function(e){return e.setReportRawData}))(i),(0,C.jsx)(t.F0,{hook:o.w,children:(0,C.jsx)(l.$,{sideNavTop:x,children:(0,C.jsxs)(t.rs,{children:[(0,C.jsx)(t.AW,{path:d.bw,children:(0,C.jsx)(_,{})}),(0,C.jsx)(t.AW,{path:d.KX,children:(0,C.jsx)(Q,{})}),(0,C.jsx)(t.AW,{path:d.KX,children:(0,C.jsx)(Q,{})}),(0,C.jsx)(t.AW,{path:d.WF,children:(0,C.jsx)(Z,{})}),(0,C.jsx)(t.AW,{path:d.t3,children:(0,C.jsx)(E,{})}),(0,C.jsx)(t.AW,{path:d.$n,children:(0,C.jsx)(y,{})}),(0,C.jsx)(t.AW,{path:d.cs,children:(0,C.jsx)(z,{})}),(0,C.jsx)(t.AW,{path:d.Mu,children:(0,C.jsx)(r.gb,{})}),(0,C.jsx)(t.AW,{children:(0,C.jsx)(s.T,{})})]})})})}var H=X}}]);
//# sourceMappingURL=728.f070c1e8.chunk.js.map