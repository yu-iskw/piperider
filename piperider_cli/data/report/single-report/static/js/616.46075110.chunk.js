"use strict";(self.webpackChunk_infuseai_piperider_ui=self.webpackChunk_infuseai_piperider_ui||[]).push([[616],{5462:function(n,e,t){t.d(e,{B:function(){return c}});var i=t(2175),r=t(7932),l=t(3660),o=t(7615),a=t(6569),s=t(4719),u=t(5887),d=["title","children","allowModalPopup","height"];function c(n){var e=n.title,t=n.children,c=n.allowModalPopup,x=n.height,m=void 0===x?300:x,h=(0,r.Z)(n,d),p=(0,l.qY)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.kC,(0,i.Z)((0,i.Z)({minHeight:"".concat(m,"px"),maxHeight:"".concat(m,"px"),bg:"whiteAlpha.700",rounded:"md",onClick:function(){return c&&p.onOpen()}},h),{},{children:t})),c&&(0,u.jsx)(s.W,(0,i.Z)((0,i.Z)({},p),{},{size:"full",title:e,footer:(0,u.jsx)(o.kC,{mt:6,w:"100%",direction:"row",justify:"center",children:(0,u.jsx)(a.zx,{colorScheme:"blue",mr:3,onClick:p.onClose,children:"Close"})}),children:t}))]})}},5871:function(n,e,t){t.d(e,{UZ:function(){return x}});var i=t(2175),r=t(2295),l=t(4574),o=t(169),a=t(2221),s=t(4361),u=t(8188),d=t(5887),c="#4780A8";function x(n){var e=n.quantileData,t=n.animation,x=void 0!==t&&t;r.kL.register(l.LU,l.aS,r.f$,r.uw);var m=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Object.assign({},e),r=(0,s.uB)(n),l=r.max,o=r.min,d=r.mean,x=r.q1,m=r.q3,h=[{text:"box region",fillStyle:u.k8},{text:"p50",fillStyle:c}];return(0,i.Z)({responsive:!0,maintainAspectRatio:!1,layout:{padding:10},indexAxis:"y",scales:{x:{offset:!0},y:{display:!1}},plugins:{legend:{position:"bottom",labels:{boxHeight:10,boxWidth:10,padding:15,generateLabels:function(){return h.map((function(n){return{lineWidth:0,text:n.text,fillStyle:n.fillStyle}}))}}},tooltip:{callbacks:{label:function(){var n=(0,a.J8)(o),e=(0,a.J8)(l),t=(0,a.J8)(d),i=(0,a.J8)(x),r=(0,a.J8)(m);return"MIN: ".concat(n," / P25: ").concat(i," / P50 (median): ").concat(t," / P75: ").concat(r," / MAX: ").concat(e)}}}}},t)}(e,{animation:x}),h=function(n){var e=(0,s.uB)(n),t=e.max,i=e.min,r=e.mean,l=e.q1,o=e.q3;return{labels:[""],datasets:[{data:[{min:i,q1:l,mean:r,q3:o,max:t,median:r,items:[],outliers:[]}],borderWidth:1,itemRadius:1,medianColor:c,meanBackgroundColor:c,backgroundColor:u.k8,borderColor:u.Q,hitPadding:10}]}}(e);return(0,d.jsx)(o.kL,{type:"boxplot",data:h,options:m,plugins:[r.De,r.u]})}},7708:function(n,e,t){t.d(e,{r:function(){return c}});var i=t(7615),r=t(9355),l=t(225),o=t.n(l),a=t(4361),s=t(5462),u=t(4777),d=t(5887);function c(n){var e=n.hasAnimation,t=n.hasSplitView,l=n.baseColumnDatum,s=n.targetColumnDatum,c=n.tabIndex,m=n.onSelectTab,h=l||{},p=h.type,j=h.topk,f=h.histogram,v=h.trues,g=h.falses,b=s||{},y=b.type,C=b.topk,S=b.histogram,D=b.trues,k=b.falses,w=null!==j&&void 0!==j?j:C,P=null!==p&&void 0!==p?p:y,A=null!==f&&void 0!==f?f:S,T=null!==v&&void 0!==v?v:D,Z=null!==g&&void 0!==g?g:k,O=o()(T)&&o()(Z),W=A&&P,z="other"===P,B=O||W||w||z,R="string"===P?u.d4:"Histogram";return(0,d.jsxs)(i.xu,{pb:10,children:[(0,d.jsx)(i.xv,{fontSize:"xl",mb:3,children:"Visualizations"}),(0,d.jsx)(i.iz,{mb:3}),B?(0,d.jsxs)(r.mQ,{isLazy:!0,index:c,onChange:function(n){return m(n)},children:[(0,d.jsxs)(r.td,{children:[w&&(0,d.jsx)(r.OK,{children:"Top Categories"}),W&&(0,d.jsx)(r.OK,{children:R}),O&&(0,d.jsx)(r.OK,{children:"Boolean"}),z&&(0,d.jsx)(r.OK,{children:"Other"})]}),(0,d.jsxs)(r.nP,{children:[w&&(0,d.jsx)(r.x4,{px:0,children:x(l,s,t,"topk",e)}),W&&(0,d.jsx)(r.x4,{px:0,children:x(l,s,t,"histogram",e)}),O&&(0,d.jsx)(r.x4,{px:0,children:x(l,s,t,"pie",e)}),z&&(0,d.jsx)(r.x4,{px:0,children:x(l,s,t)})]})]}):(0,a.y2)({valids:null===l||void 0===l?void 0:l.valids,schema_type:null===l||void 0===l?void 0:l.schema_type})]})}function x(n,e,t,r,l){return(0,d.jsxs)(i.rj,{templateColumns:t?"1fr 1fr":"1fr",gap:10,children:[(0,d.jsx)(i.P4,{minWidth:0,children:(0,d.jsx)(s.B,{px:0,title:null===n||void 0===n?void 0:n.name,children:(0,a.SH)(n,e,r,l)})}),t&&(0,d.jsx)(i.P4,{minWidth:0,children:null!==e&&(0,d.jsx)(s.B,{p:0,title:null===e||void 0===e?void 0:e.name,children:(0,a.SH)(e,n,r,l)})})]})}},2471:function(n,e,t){t.d(e,{t:function(){return d}});var i=t(7615),r=t(4361),l=t(6367),o=t(2448),a=t(3354),s=t(6062),u=t(5887);function d(n){var e=n.columnDatum,t=n.hasAnimation,d=(0,s.Wx)(e),c=!!t&&{};return(0,u.jsxs)(i.kC,{direction:"column",pb:6,children:[(0,u.jsx)(i.xv,{fontSize:"xl",children:"Data Composition"}),(0,u.jsx)(i.iz,{my:3}),(0,u.jsx)(i.xu,{h:"4em",flexGrow:1,children:d?(0,u.jsx)(l.Wi,{data:d,animation:c}):(0,r.y2)({})}),(0,u.jsxs)(i.xu,{children:[(0,u.jsx)(o.P,{columnDatum:e,width:"100%"}),(0,u.jsx)(a.Q,{columnDatum:e,width:"100%"})]})]})}},962:function(n,e,t){t.d(e,{E:function(){return s}});var i=t(7615),r=t(4361),l=t(2221),o=t(1958),a=t(5887);function s(n){var e=n.columnDatum;return(0,a.jsxs)(i.xu,{children:[(0,a.jsxs)(i.xv,{fontSize:"xl",children:[e?(0,l.B1)(null===e||void 0===e?void 0:e.type):"Type "," Statistics"]}),(0,a.jsx)(i.iz,{my:3}),e?(0,a.jsx)(o.Y,{columnDatum:e,width:"100%"}):(0,r.y2)({})]})}},4641:function(n,e,t){t.d(e,{M:function(){return s}});var i=t(7615),r=t(4361),l=t(5871),o=t(3162),a=t(5887);function s(n){var e=n.columnDatum,t=e||{},s=t.p50,u=t.max,d=t.min,c=t.p25,x=t.p75;return(0,a.jsxs)(i.xu,{bg:"gray.50",minWidth:"0px",children:[(0,a.jsx)(i.xv,{fontSize:"xl",children:"Quantile Data"}),(0,a.jsx)(i.iz,{my:3}),e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.xu,{my:5,children:(0,a.jsx)(l.UZ,{quantileData:{p50:s,max:u,min:d,p25:c,p75:x}})}),(0,a.jsx)(o.d,{columnDatum:e})]}):(0,r.y2)({})]})}},2061:function(n,e,t){t.d(e,{mk:function(){return a.mk},Ox:function(){return l.O},FC:function(){return i.FC},gA:function(){return a.gA},ll:function(){return a.ll},rH:function(){return r.rH},SR:function(){return r.SR},Lp:function(){return o.Lp},jr:function(){return o.jr}});var i=t(9408),r=(t(3344),t(5462),t(5871),t(6367),t(3517),t(2626),t(4361),t(6878),t(2948),t(5569)),l=t(1039),o=(t(7708),t(2471),t(962),t(346),t(4641),t(1055)),a=(t(7768),t(6708),t(6674))},5616:function(n,e,t){t.r(e),t.d(e,{default:function(){return W}});var i=t(1431),r=t(7615),l=t(9355),o=t(2904),a=t(1756),s=t(4657),u=t(7255),d=t(2471),c=t(7708),x=t(996),m=t(7437),h=t(962),p=t(4641),j=t(5607),f=t(6062),v=t(2282),g=t(4236),b=t(2175),y=t(7932),C=t(5887),S=["added","deleted","changed"];function D(n){var e=n.added,t=void 0===e?0:e,i=n.deleted,l=void 0===i?0:i,o=n.changed,a=void 0===o?0:o,s=(0,y.Z)(n,S);return(0,C.jsxs)(r.kC,(0,b.Z)((0,b.Z)({gap:2},s),{},{children:["( Added:",(0,C.jsx)(r.xv,{as:"span",fontWeight:700,children:t}),"Deleted:",(0,C.jsx)(r.xv,{as:"span",fontWeight:700,children:l}),"Changed:",(0,C.jsx)(r.xv,{as:"span",fontWeight:700,children:a}),")"]}))}var k=t(421),w=t(3015),P=t(1039),A=t(2622),T=t(1055),Z=t(6674),O=t(2061);function W(n){var e,t,b,y=n.data,S=n.columnName,W=n.tableName;(0,T.jr)("Comparison Report: Table Column Details"),(0,T.Lp)({eventName:Z.mk.PAGE_VIEW,eventProperties:{type:Z.bB,page:"column-details-page"}});var B=y.base.tables,R=y.input.tables,H=(0,o.TH)(),L=(0,i.Z)(H,2)[1],_=(0,a.useState)(0),E=(0,i.Z)(_,2),N=E[0],q=E[1],M=0===S.length,F=(0,w.n)((function(n){return n.setReportRawData})),K=(0,s.Z)(Z.gA,""),Q=(0,i.Z)(K,1)[0],I=(0,a.useState)(Boolean(Q)),J=(0,i.Z)(I,2),Y=J[0],G=J[1];F({base:y.base,input:y.input});var V=w.n.getState(),U=V.tableColumnsOnly,X=void 0===U?[]:U,$=V.assertionsOnly,nn=X.find((function(n){return(0,i.Z)(n,1)[0]===W}));if(!W||!B||!R||!nn)return(0,C.jsx)(u.o,{isSingleReport:!1,children:(0,C.jsx)(j.J,{text:"No profile data found for table name: ".concat(W)})});var en=(0,i.Z)(nn,3),tn=en[1],rn=tn.base,ln=tn.target,on=en[2],an=B[W],sn=R[W],un=(null===an||void 0===an?void 0:an.columns)||{},dn=(null===sn||void 0===sn?void 0:sn.columns)||{},cn=un[S],xn=dn[S],mn=xn||cn,hn=(cn||{}).type,pn=(xn||{}).type,jn=(0,O.SR)((null===$||void 0===$||null===(e=$.base)||void 0===e?void 0:e.filter((function(n){return(null===n||void 0===n?void 0:n.table)===W})))||[]),fn=jn.failed,vn=jn.total,gn=(0,O.SR)((null===$||void 0===$||null===(t=$.target)||void 0===t?void 0:t.filter((function(n){return(null===n||void 0===n?void 0:n.table)===W})))||[]),bn=gn.failed,yn=gn.total,Cn=(0,f.MM)(mn),Sn=Cn.backgroundColor,Dn=Cn.icon;return(0,C.jsx)(u.o,{isSingleReport:!1,maxHeight:m.t4,children:(0,C.jsxs)(r.rj,{width:"inherit",templateColumns:Y?m.L0:m.Lj,children:[(0,C.jsx)(r.P4,{overflowY:"scroll",maxHeight:m.t4,children:(0,C.jsx)(x._,{tableColEntryList:X,tableColEntry:nn,currentTable:W,currentColumn:S,onSelect:function(n){var e=n.tableName,t=n.columnName;q(0),L("/tables/".concat(e,"/columns/").concat(t))},onNavBack:function(){L("/")},onNavToTableDetail:function(n){L("/tables/".concat(n,"/columns/").concat(S))},onToggleShowExtra:function(){return G((function(n){return!n}))}})}),M?(0,C.jsxs)(r.P4,{maxHeight:m.t4,overflowY:"auto",p:10,children:[(0,C.jsx)(k.Q,{title:W,subtitle:"Table",mb:5,infoTip:null===(b=sn||an)||void 0===b?void 0:b.description}),(0,C.jsxs)(l.mQ,{defaultIndex:0,children:[(0,C.jsxs)(l.td,{children:[(0,C.jsx)(l.OK,{children:"Overview"}),(0,C.jsx)(l.OK,{children:"Assertions"}),(0,C.jsx)(l.OK,{children:"Schema"})]}),(0,C.jsxs)(l.nP,{children:[(0,C.jsxs)(l.x4,{children:[(0,C.jsx)(z,{}),(0,C.jsxs)(r.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[(0,C.jsx)(v.m,{tableDatum:an}),(0,C.jsx)(r.iz,{orientation:"vertical"}),(0,C.jsx)(v.m,{tableDatum:sn})]})]}),(0,C.jsxs)(l.x4,{children:[Number(vn)>0&&(0,C.jsx)(r.kC,{mb:5,children:(0,C.jsx)(A.z,{baseAssertionFailed:fn,baseAssertionTotal:vn,targetAssertionFailed:bn,targetAssertionTotal:yn})}),(0,C.jsx)(r.rj,{templateColumns:"1fr",gap:3,height:"100%",children:(0,C.jsx)(P.O,{filterString:W,filterByTableOnly:!0,caseSensitiveFilter:!0,comparableAssertions:$,tableSize:"sm"})})]}),(0,C.jsxs)(l.x4,{children:[(0,C.jsx)(r.kC,{pb:3,children:(0,C.jsx)(D,{fontWeight:"semibold",color:"gray.600",added:on.added,deleted:on.deleted,changed:on.changed})}),(0,C.jsx)(r.rj,{templateColumns:"1fr",gap:3,height:"100%",children:(0,C.jsx)(g.r,{baseTableEntryDatum:rn,targetTableEntryDatum:ln})})]})]})]})]}):(0,C.jsxs)(r.rj,{templateColumns:"1fr 1fr",width:"100%",maxHeight:m.t4,overflowY:"auto",children:[(0,C.jsxs)(r.P4,{colSpan:2,rowSpan:2,p:9,children:[(0,C.jsx)(k.Q,{title:S,subtitle:null===mn||void 0===mn?void 0:mn.schema_type,infoTip:(null===xn||void 0===xn?void 0:xn.description)||(null===cn||void 0===cn?void 0:cn.description),mb:5,borderBottom:m.dx,icon:Dn,iconColor:Sn}),(0,C.jsx)(z,{})]}),(0,C.jsx)(r.P4,{colSpan:2,px:9,py:2,bg:"gray.50",children:(0,C.jsxs)(r.rj,{templateColumns:"1fr 1fr",gap:8,minWidth:0,children:[(0,C.jsx)(d.t,{columnDatum:cn}),(0,C.jsx)(d.t,{columnDatum:xn})]})}),((0,f.jl)(hn)||(0,f.jl)(pn))&&(0,C.jsx)(r.P4,{colSpan:2,gridRow:"span 1",px:9,py:2,bg:"gray.50",children:(0,C.jsxs)(r.rj,{templateColumns:"1fr 1fr",gap:8,children:[(0,C.jsx)(h.E,{columnDatum:cn}),(0,C.jsx)(h.E,{columnDatum:xn})]})}),((0,f.hG)(hn)||(0,f.hG)(pn))&&(0,C.jsx)(r.P4,{colSpan:2,gridRow:"span 1",p:9,bg:"gray.50",children:(0,C.jsxs)(r.rj,{templateColumns:"1fr 1fr",gap:8,children:[(0,C.jsx)(p.M,{columnDatum:cn}),(0,C.jsx)(p.M,{columnDatum:xn})]})}),(0,C.jsx)(r.P4,{colSpan:2,gridRow:"span 1",minWidth:0,p:9,bg:"gray.50",children:(0,C.jsx)(c.r,{baseColumnDatum:cn,targetColumnDatum:xn,hasSplitView:!0,hasAnimation:!0,tabIndex:N,onSelectTab:function(n){return q(n)}})})]})]})})}function z(){return(0,C.jsx)(r.rj,{templateColumns:"1fr 1fr",mb:2,gap:10,children:["Base","Target"].map((function(n,e){return(0,C.jsx)(r.kC,{alignItems:"center",w:"100%",children:(0,C.jsx)(r.xv,{fontWeight:"semibold",fontSize:"2xl",color:"gray.400",w:"100%",children:n})},e)}))})}}}]);
//# sourceMappingURL=616.46075110.chunk.js.map