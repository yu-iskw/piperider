"use strict";(self.webpackChunkpiperider_report=self.webpackChunkpiperider_report||[]).push([[29],{5147:function(e,t,n){n.d(t,{T:function(){return s}});var a=n(5223),l=n(8735),i=n(8540),o=n(2504),r=n(184);function s(e){var t=e.title,n=e.children,s=e.allowModalPopup,u=e.height,c=void 0===u?300:u,d=(0,a.qY)(),m=d.onOpen,x=d.isOpen,v=d.onClose;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.kC,{px:6,py:6,my:3,mx:3,minHeight:"".concat(c,"px"),maxHeight:"".concat(c,"px"),width:"calc(100% - 24px)",bg:"whiteAlpha.700",rounded:"md",onClick:function(){return s&&m()},children:n}),s&&(0,r.jsxs)(i.u_,{size:"full",isOpen:x,onClose:v,children:[(0,r.jsx)(i.ZA,{}),(0,r.jsxs)(i.hz,{p:12,children:[(0,r.jsx)(i.xB,{children:t}),(0,r.jsx)(i.ol,{}),(0,r.jsx)(i.fe,{children:n}),(0,r.jsx)(i.mz,{children:(0,r.jsx)(l.kC,{mt:6,w:"100%",direction:"row",justify:"center",children:(0,r.jsx)(o.zx,{colorScheme:"blue",mr:3,onClick:v,children:"Close"})})})]})]})]})}},6983:function(e,t,n){n.d(t,{f:function(){return x}});var a=n(8735),l=n(2220),i=n(9113),o=n(5272),r=n(429),s=n(1413),u=n(5987),c=(n(2791),n(184)),d=["label","prefix","children"];function m(e){var t,n=e.label,i=void 0===n?"":n,o=e.prefix,r=e.children,m=(0,u.Z)(e,d),x=i.match("".concat(o,"(?<src>\\w+)$")),v=null!==x&&void 0!==x&&null!==(t=x.groups)&&void 0!==t&&t.src?(0,c.jsxs)(a.xv,{children:[i.slice(0,x.index),(0,c.jsx)(a.xv,{as:"i",color:"gray.400",children:"".concat(o).concat(x.groups.src)})]}):i;return(0,c.jsx)(l.u,(0,s.Z)((0,s.Z)({label:v},m),{},{closeOnEsc:!0,children:r}))}function x(e){var t=e.columnDatum,n=t.description,s=t.name,u=t.schema_type,d=(0,r.MM)(t),x=d.backgroundColor,v=d.icon;return(0,c.jsxs)(a.kC,{p:2,bg:"white",justify:"space-between",alignItems:"center",width:"100%",borderTopRadius:"inherit",children:[(0,c.jsxs)(a.kC,{alignItems:"center",children:[(0,c.jsx)(l.u,{label:u,shouldWrapChildren:!0,children:(0,c.jsx)(i.JO,{mt:1,mx:2,p:1,rounded:"md",color:"white",backgroundColor:x,as:v,boxSize:7})}),(0,c.jsx)(a.xv,{as:"span",fontSize:"xl",fontWeight:"semibold",noOfLines:1,width:280,children:s})]}),(0,c.jsx)(m,{label:n,prefix:" - via ",children:(0,c.jsx)(o.sz,{color:"gray.400",boxSize:"20px",mr:3})})]})}},2296:function(e,t,n){n.d(t,{f:function(){return O},S:function(){return Z}});var a=n(8735),l=n(6523),i=n(429),o=n(6305),r=n(9683),s=n(709),u=n(184);function c(e){var t=e.data,n=t.counts,a=t.labels,l=t.ratios,i={responsive:!0,maintainAspectRatio:!1,animation:!1,layout:{padding:10},plugins:{legend:{position:"left",labels:{textAlign:"left",boxHeight:15,boxWidth:15,generateLabels:function(e){var t=e.data,n=t.datasets,a=t.labels;return n[0].data.map((function(e,t){var i,o;return{text:"".concat(null===a||void 0===a?void 0:a[t]," \n ").concat((0,s.Zn)(l[t])," / ").concat(e),fillStyle:null===n||void 0===n||null===(i=n[0])||void 0===i||null===(o=i.backgroundColor)||void 0===o?void 0:o[t]}}))}}}}},c={labels:a,datasets:[{data:n,borderWidth:0,backgroundColor:["#63B3ED","#D9D9D9","#FF0861","#FFCF36"],hoverOffset:4}]};return(0,u.jsx)(r.by,{data:c,options:i,plugins:[o.De]})}o.kL.register(o.qi,o.u);var d=n(885);function m(e){var t=e.data,n=t.counts,a=t.values,l=e.total,i={responsive:!0,maintainAspectRatio:!1,animation:!1,indexAxis:"y",scales:{x:{display:!1},y:{display:!1}},plugins:{tooltip:{mode:"y",position:"nearest",intersect:!1,callbacks:{title:function(e){var t=(0,d.Z)(e,1)[0],a=t.dataIndex,i=t.dataset.data[a],o=(0,s.Zn)(n[a]/l);return"Count: ".concat(i,"\n(").concat(o,")")}}}}},o={labels:a.slice(0,5),datasets:[{indexAxis:"y",data:n.slice(0,5),backgroundColor:"#63B3ED",hoverBackgroundColor:"#002A53",borderWidth:0,borderColor:"#D9D9D9",borderRadius:10,borderSkipped:!1,barPercentage:.6,categoryPercentage:.5}]},c={id:"progressBar",beforeDatasetDraw:function(e){var t=e.ctx,n=e.data,a=e.chartArea,l=a.left,i=a.right,o=a.height,r=e.scales.y;t.save();var u=n.datasets[0],c="#36454f",d=o/r.ticks.length*.6*.5,m=u.data.length<5?5:0;u.data.forEach((function(e,a){var o,x=r.getPixelForValue(a),v=x-d/2,h=x+d/2,f=v-7,p=m+5,j=u.data[a],g="number"!==typeof j?j:(0,s.J8)(j);t.fillStyle=c,t.textAlign="right",t.textBaseline="middle",t.fillText(String(g),i,f);var b=null===(o=n.labels)||void 0===o?void 0:o[a],y="number"!==typeof b?b:(0,s.J8)(b);t.fillStyle=c,t.textAlign="left",t.textBaseline="middle",t.fillText((0,s.o2)(String(y),30),l,f),function(e,t){var n=t.leftBound,a=t.rightBound,l=t.drawRadius,i=t.barBottomYPos,o=t.barTopYPos,r=t.fillColor;e.beginPath(),e.moveTo(n+l,o),e.lineTo(a-l,o),e.arcTo(a,o,a,o+l,l),e.arcTo(a,i,a-l,i,l),e.lineTo(n+l,i),e.arcTo(n,i,n,i-l,l),e.arcTo(n,o,n+l,o,l),e.fillStyle=r,e.closePath(),e.fill()}(t,{leftBound:l,rightBound:i,barTopYPos:v,barBottomYPos:h,drawRadius:p,fillColor:String(u.borderColor)})}))}};return(0,u.jsx)(r.$Q,{data:o,options:i,plugins:[c]})}o.kL.register(o.uw,o.ZL,o.u);var x=n(5893),v=function(e){var t=e.children;return(0,u.jsx)(a.kC,{p:2,bg:"white",height:"100%",direction:"column",borderBottomRadius:"inherit",children:t})},h=n(5147),f=n(6983),p=n(2220),j=n(5272),g=n(2196),b=function(e){var t=e.label,n=e.value,l=e.subvalue,i=e.metaKey,o="string"===typeof i?g.d[i]:null;return(0,u.jsxs)(a.kC,{direction:"column",w:"100%",mx:2,my:2,children:[(0,u.jsx)(p.u,{label:o,isDisabled:!Boolean(o),placement:"top",children:(0,u.jsxs)(a.kC,{alignItems:"center",w:"fit-content",children:[(0,u.jsx)(a.xv,{lineHeight:"5",fontSize:"small",children:t}),(0,u.jsx)(j.sz,{color:"gray.400",boxSize:"12px",ml:2})]})}),(0,u.jsx)(a.xv,{fontWeight:"bold",children:n}),l&&(0,u.jsx)(a.xv,{fontSize:"smaller",children:l})]})},y=n(2387);function T(e){var t=e.columnDatum,n=e.children,l=t.nulls,o=t.invalids,r=(0,i.gQ)(t),c=r.invalidsOfTotal,d=r.nullsOfTotal;return(0,u.jsxs)(a.kC,{direction:"column",children:[(0,u.jsx)(a.xv,{textAlign:"center",fontWeight:"bold",my:2,children:"Data Composition"}),(0,u.jsx)(a.iz,{}),(0,u.jsxs)(a.kC,{justify:"space-evenly",children:[(0,u.jsx)(b,{metaKey:"nulls",label:y.td,value:(0,s.uy)(d,s.Zn),subvalue:l}),(0,u.jsx)(a.iz,{orientation:"vertical"}),(0,u.jsx)(b,{metaKey:"invalids",label:y.ST,value:(0,s.uy)(c,s.Zn),subvalue:o}),n]})]})}var z=function(e){var t=e.columnDatum,n=t.trues,l=t.falses;return(0,u.jsxs)(a.kC,{direction:"column",children:[(0,u.jsxs)(T,{columnDatum:t,children:[(0,u.jsx)(a.iz,{orientation:"vertical"}),(0,u.jsx)(b,{label:y.aJ,value:(0,s.uy)(l,s.uf),metaKey:"falses"}),(0,u.jsx)(a.iz,{orientation:"vertical"}),(0,u.jsx)(b,{label:y.Y0,value:(0,s.uy)(n,s.uf),metaKey:"trues"})]}),(0,u.jsx)(a.iz,{})]})};function C(e){var t=e.columnDatum,n=t.distinct,l=t.duplicates,o=(0,i.gQ)(t),r=o.distinctOfTotal,c=o.duplicatesOfTotal;return(0,u.jsxs)(a.kC,{direction:"column",children:[(0,u.jsx)(a.xv,{textAlign:"center",fontWeight:"bold",my:2,children:"Uniqueness"}),(0,u.jsx)(a.iz,{}),(0,u.jsxs)(a.kC,{justify:"space-evenly",children:[(0,u.jsx)(b,{metaKey:"distinct",label:y.A$,value:(0,s.uy)(r,s.Zn),subvalue:n}),(0,u.jsx)(a.iz,{orientation:"vertical"}),(0,u.jsx)(b,{metaKey:"duplicates",label:y.hD,value:(0,s.uy)(c,s.Zn),subvalue:l})]})]})}var D=function(e){var t=e.columnDatum,n=(0,i.gQ)(t).validsOfTotal,l=t.valids,o=(0,s.Th)(t),r=o.topValues,c=o.topCounts;return(0,u.jsxs)(a.kC,{direction:"column",children:[(0,u.jsxs)(T,{columnDatum:t,children:[(0,u.jsx)(a.iz,{orientation:"vertical"}),(0,u.jsx)(b,{metaKey:"valids",label:y.Px,value:(0,s.uy)(n,s.Zn),subvalue:l})]}),(0,u.jsx)(a.iz,{}),(0,u.jsx)(C,{columnDatum:t}),(0,u.jsx)(a.iz,{}),r&&c&&(0,u.jsx)(b,{metaKey:"topk",label:y.IK,value:r,subvalue:c})]})};function k(e){var t=e.columnDatum,n=t.avg,l=t.stddev,o=t.min,r=t.max,c="string"===t.type,d=(0,i.JH)(t),m=c&&!d?"Length":"Data";return(0,u.jsxs)(a.kC,{direction:"column",children:[(0,u.jsxs)(a.xv,{textAlign:"center",fontWeight:"bold",my:2,children:[m," Statistics"]}),(0,u.jsx)(a.iz,{}),n&&(0,u.jsxs)(a.kC,{justify:"space-evenly",children:[(0,u.jsx)(b,{metaKey:"avg",label:y.dc,value:(0,s.uy)(n,s.uf)}),(0,u.jsx)(a.iz,{orientation:"vertical"}),(0,u.jsx)(b,{metaKey:"stddev",label:y.lb,value:y.o6+(0,s.uy)(l,s.uf)}),(0,u.jsx)(a.iz,{orientation:"vertical"})]}),(0,u.jsx)(a.iz,{}),(0,u.jsxs)(a.kC,{justify:"space-evenly",children:[(0,u.jsx)(b,{metaKey:"min",label:y.KX,value:(0,s.uy)(o,s.uf)}),(0,u.jsx)(a.iz,{orientation:"vertical"}),(0,u.jsx)(b,{metaKey:"max",label:y.k2,value:(0,s.uy)(r,s.uf)})]})]})}var _=function(e){var t=e.columnDatum;return(0,u.jsxs)(a.kC,{direction:"column",children:[(0,u.jsx)(T,{columnDatum:t}),(0,u.jsx)(a.iz,{}),(0,u.jsx)(C,{columnDatum:t}),(0,u.jsx)(a.iz,{}),(0,u.jsx)(k,{columnDatum:t})]})},w=n(7005),A=n(5984);function K(e){var t=e.columnDatum;l.a$.parse(t);var n=[{label:"Min",value:t.min,metaKey:"min"},{label:"5%",value:t.p5,metaKey:"p5"},{label:"25%",value:t.p25,metaKey:"p25"},{label:"50%",value:t.p50,metaKey:"p50"},{label:"75%",value:t.p75,metaKey:"p75"},{label:"95%",value:t.p95,metaKey:"p95"},{label:"Max",value:t.max,metaKey:"max"}];return(0,u.jsx)(w.xJ,{w:"100%",children:(0,u.jsxs)(w.iA,{size:"sm",variant:"simple",children:[(0,u.jsx)(w.hr,{children:(0,u.jsx)(w.Tr,{children:n.map((function(e){return(0,u.jsx)(w.Th,{pr:0,pl:2,textAlign:"center",children:(0,u.jsx)(p.u,{label:g.d[e.metaKey],children:e.label})},(0,A.x0)())}))})}),(0,u.jsx)(w.p3,{children:(0,u.jsx)(w.Tr,{children:n.map((function(e){return(0,u.jsx)(w.Td,{pr:0,pl:2,textAlign:"center",children:(0,s.uy)(e.value,s.J8)},(0,A.x0)())}))})})]})})}var S=function(e){var t=e.columnDatum,n=t.negatives,l=t.zeros,o=(0,i.gQ)(t),r=o.negativesOfTotal,c=o.zerosOfTotal;return(0,u.jsxs)(a.kC,{direction:"column",children:[(0,u.jsxs)(T,{columnDatum:t,children:[(0,u.jsx)(a.iz,{orientation:"vertical"}),(0,u.jsx)(b,{metaKey:"negatives",label:y.wC,value:(0,s.uy)(r,s.Zn),subvalue:n}),(0,u.jsx)(a.iz,{orientation:"vertical"}),(0,u.jsx)(b,{metaKey:"zeros",label:y.AG,value:(0,s.uy)(c,s.Zn),subvalue:l})]}),(0,u.jsx)(a.iz,{}),(0,u.jsx)(a.iz,{}),(0,u.jsx)(k,{columnDatum:t}),(0,u.jsx)(a.iz,{}),(0,u.jsx)(a.kC,{mt:2,children:(0,u.jsx)(K,{columnDatum:t})})]})},P=function(e){var t=e.columnDatum,n=t.valids,l=(0,i.gQ)(t).validsOfTotal;return(0,u.jsxs)(a.kC,{direction:"column",children:[(0,u.jsxs)(T,{columnDatum:t,children:[(0,u.jsx)(a.iz,{orientation:"vertical"}),(0,u.jsx)(a.iz,{orientation:"vertical"}),(0,u.jsx)(b,{metaKey:"valids",label:y.Px,value:(0,s.uy)(l,s.Zn),subvalue:n})]}),(0,u.jsx)(a.iz,{})]})},E=function(e){var t=e.columnDatum,n=t.zero_length,l=(0,i.gQ)(t).zeroLengthOfTotal;return(0,u.jsxs)(a.kC,{direction:"column",children:[(0,u.jsxs)(T,{columnDatum:t,children:[(0,u.jsx)(a.iz,{orientation:"vertical"}),(0,u.jsx)(b,{metaKey:"zero_length",label:y.cU,value:(0,s.uy)(l,s.Zn),subvalue:n})]}),(0,u.jsx)(a.iz,{}),(0,u.jsx)(C,{columnDatum:t}),(0,u.jsx)(a.iz,{}),(0,u.jsx)(k,{columnDatum:t}),(0,u.jsx)(a.iz,{}),(0,u.jsx)(a.kC,{justify:"space-evenly"})]})};function O(e){var t=e.columnDatum;l.a$.parse(t);var n=t.name;return(0,u.jsxs)(a.kC,{direction:"column",bg:"gray.300",width:{xl:"32%",lg:"45%",md:"100%",base:"100%"},border:"1px solid",borderColor:"gray.300",my:3,rounded:"lg",children:[(0,u.jsx)(f.f,{columnDatum:t}),(0,u.jsx)(h.T,{title:n,allowModalPopup:Boolean((0,i.W9)(t)),children:Z(t)}),(0,u.jsx)(v,{children:R(t)})]})}function Z(e,t){var n=e.total,l=e.name,o=e.type,r=e.schema_type,s=e.histogram,d=e.topk,v=e.trues,h=e.falses,f=e.nulls,p=e.invalids,j=e.valids,g=e.min,b=e.max,T=o===(null===t||void 0===t?void 0:t.type)&&l===(null===t||void 0===t?void 0:t.name),z=(0,i.W9)(T?t:e);if("topk"===z&&d)return(0,u.jsx)(m,{data:d,total:n||0});if("histogram"===z&&s)return(0,u.jsx)(x.K,{data:{histogram:s,min:g,max:b,type:o,total:n}});if("pie"===z){var C=[v,h,f,p].map((function(e){return e||0})),D=[y.Y0,y.aJ,y.td,y.ST].map((function(e){return e.charAt(0)+e.slice(1).toLowerCase()})),k=C.map((function(e){return e/Number(n)}));return(0,u.jsx)(c,{data:{counts:C,labels:D,ratios:k}})}var _=Boolean(j)?"Chart rendering unavailable for (type: ".concat(r,")"):"There are insufficient valid data points in this dataset";return(0,u.jsx)(a.kC,{h:230,alignItems:"center",w:"100%",children:(0,u.jsx)(a.xv,{textAlign:"center",w:"inherit",children:_})})}function R(e){var t=e.type,n=(0,i.JH)(e);return"string"!==t&&"integer"!==t||!n?"numeric"===t||"integer"===t?(0,u.jsx)(S,{columnDatum:e}):"boolean"===t?(0,u.jsx)(z,{columnDatum:e}):"string"===t?(0,u.jsx)(E,{columnDatum:e}):"datetime"===t?(0,u.jsx)(_,{columnDatum:e}):"other"===t?(0,u.jsx)(P,{columnDatum:e}):(0,u.jsxs)(a.xv,{textAlign:"center",w:"inherit",children:["The column type: ",t," cannot be displayed"]}):(0,u.jsx)(D,{columnDatum:e})}},6786:function(e,t,n){n.d(t,{L:function(){return o}});var a=n(1413),l=n(2791),i=n(3442);function o(e){(0,l.useEffect)((function(){(0,i._)((0,a.Z)({},e))}),[])}},2196:function(e,t,n){n.d(t,{d:function(){return a}});var a={total:"The total count of values, regardless validity",nulls:"The count of values that are null type",non_nulls:"The count of non null values",distinct:"The count of distinct kinds of values (e.g. [a,b,c,c] => [a,b,c])",duplicates:"The count of values that are recurring (e.g. [a,b,c,c] => [c,c])",non_duplicates:"The count of values that are non-recurring (e.g. [a,b,c,c] => [a,b])",topk:"The most common or frequent value",name:"Name of this column",description:"Descriptor of this column",type:"Generic types of schema, python-based",schema_type:"The column type definition in SQL database",valids:"The count of values that are non-null and not invalid",invalids:"The count of values that don't match the schema type. For example, a string in a numeric column.",zeros:"The count of numerical values that equal zero exactly",negatives:"The count of numerical values that are less than zero",positives:"The count of numerical values that are more than zero",zero_length:"The count of string values with zero lengths exactly",non_zero_length:"The count of string values with non-zero lengths",trues:"The count of boolean true values",falses:"The count of boolean false values",sum:"The sum of a column's values",avg:"The average of a column's values",stddev:"The standard deviation of a column's values",min:"The minimum value of a column's range",max:"The maximum value of a columns's range",p5:"The quantile value of the dataset (5th percentile)",p25:"The quantile value of the dataset (25th percentile)",p50:"The quantile value of the dataset (50th percentile)",p75:"The quantile value of the dataset (75th percentile)",p95:"The quantile value of the dataset (95th percentile)"}},3442:function(e,t,n){n.d(t,{_:function(){return o},m:function(){return i}});var a=n(1413),l=n(8083),i={PAGE_VIEW:"Page View"};function o(e){var t=e.eventName,n=e.eventProperties,i=void 0===n?{}:n,o=e.eventOptions,r=void 0===o?{}:o,s=window.PIPERIDER_METADATA.amplitude_api_key,u=window.PIPERIDER_METADATA.amplitude_project_id;return s&&"true"!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SINGLE_REPORT:"true"}.REACT_APP_E2E?(0,l.j)(t,(0,a.Z)({project_id:u},i),r):console.info(t,(0,a.Z)({project_id:u},i),r)}}}]);
//# sourceMappingURL=29.eae47fe8.chunk.js.map