(self.webpackChunksims_ppob=self.webpackChunksims_ppob||[]).push([[433],{140:(e,t,a)=>{"use strict";a.d(t,{Am:()=>l});var s=a(43),r=a(579);const o=["as","disabled"];function l(e){let{tagName:t,disabled:a,href:s,target:r,rel:o,role:l,onClick:n,tabIndex:i=0,type:c}=e;t||(t=null!=s||null!=r||null!=o?"a":"button");const d={tagName:t};if("button"===t)return[{type:c||"button",disabled:a},d];const f=e=>{(a||"a"===t&&function(e){return!e||"#"===e.trim()}(s))&&e.preventDefault(),a?e.stopPropagation():null==n||n(e)};return"a"===t&&(s||(s="#"),a&&(s=void 0)),[{role:null!=l?l:"button",disabled:void 0,tabIndex:a?void 0:i,href:s,target:"a"===t?r:void 0,"aria-disabled":a||void 0,rel:"a"===t?o:void 0,onClick:f,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),f(e))}},d]}const n=s.forwardRef(((e,t)=>{let{as:a,disabled:s}=e,n=function(e,t){if(null==e)return{};var a={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)>=0)continue;a[s]=e[s]}return a}(e,o);const[i,{tagName:c}]=l(Object.assign({tagName:a,disabled:s},n));return(0,r.jsx)(c,Object.assign({},n,i,{ref:t}))}));n.displayName="Button"},497:(e,t,a)=>{"use strict";var s=a(218);function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,o,l){if(l!==s){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return a.PropTypes=a,a}},173:(e,t,a)=>{e.exports=a(497)()},218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},282:(e,t,a)=>{"use strict";a.d(t,{A:()=>d});var s=a(139),r=a.n(s),o=a(43),l=a(140),n=a(852),i=a(579);const c=o.forwardRef(((e,t)=>{let{as:a,bsPrefix:s,variant:o="primary",size:c,active:d=!1,disabled:f=!1,className:m,...p}=e;const u=(0,n.oU)(s,"btn"),[b,{tagName:y}]=(0,l.Am)({tagName:a,disabled:f,...p}),x=y;return(0,i.jsx)(x,{...b,...p,ref:t,disabled:f,className:r()(m,u,d&&"active",o&&`${u}-${o}`,c&&`${u}-${c}`,p.href&&f&&"disabled")})}));c.displayName="Button";const d=c},814:(e,t,a)=>{"use strict";a.d(t,{A:()=>D});var s=a(139),r=a.n(s),o=a(173),l=a.n(o),n=a(43),i=a(579);const c={type:l().string,tooltip:l().bool,as:l().elementType},d=n.forwardRef(((e,t)=>{let{as:a="div",className:s,type:o="valid",tooltip:l=!1,...n}=e;return(0,i.jsx)(a,{...n,ref:t,className:r()(s,`${o}-${l?"tooltip":"feedback"}`)})}));d.displayName="Feedback",d.propTypes=c;const f=d,m=n.createContext({});var p=a(852);const u=n.forwardRef(((e,t)=>{let{id:a,bsPrefix:s,className:o,type:l="checkbox",isValid:c=!1,isInvalid:d=!1,as:f="input",...u}=e;const{controlId:b}=(0,n.useContext)(m);return s=(0,p.oU)(s,"form-check-input"),(0,i.jsx)(f,{...u,ref:t,type:l,id:a||b,className:r()(o,s,c&&"is-valid",d&&"is-invalid")})}));u.displayName="FormCheckInput";const b=u,y=n.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,htmlFor:o,...l}=e;const{controlId:c}=(0,n.useContext)(m);return a=(0,p.oU)(a,"form-check-label"),(0,i.jsx)("label",{...l,ref:t,htmlFor:o||c,className:r()(s,a)})}));y.displayName="FormCheckLabel";const x=y;const h=n.forwardRef(((e,t)=>{let{id:a,bsPrefix:s,bsSwitchPrefix:o,inline:l=!1,reverse:c=!1,disabled:d=!1,isValid:u=!1,isInvalid:y=!1,feedbackTooltip:h=!1,feedback:v,feedbackType:N,className:g,style:j,title:w="",type:k="checkbox",label:I,children:F,as:C="input",...R}=e;s=(0,p.oU)(s,"form-check"),o=(0,p.oU)(o,"form-switch");const{controlId:P}=(0,n.useContext)(m),O=(0,n.useMemo)((()=>({controlId:a||P})),[P,a]),T=!F&&null!=I&&!1!==I||function(e,t){return n.Children.toArray(e).some((e=>n.isValidElement(e)&&e.type===t))}(F,x),$=(0,i.jsx)(b,{...R,type:"switch"===k?"checkbox":k,ref:t,isValid:u,isInvalid:y,disabled:d,as:C});return(0,i.jsx)(m.Provider,{value:O,children:(0,i.jsx)("div",{style:j,className:r()(g,T&&s,l&&`${s}-inline`,c&&`${s}-reverse`,"switch"===k&&o),children:F||(0,i.jsxs)(i.Fragment,{children:[$,T&&(0,i.jsx)(x,{title:w,children:I}),v&&(0,i.jsx)(f,{type:N,tooltip:h,children:v})]})})})}));h.displayName="FormCheck";const v=Object.assign(h,{Input:b,Label:x});a(440);const N=n.forwardRef(((e,t)=>{let{bsPrefix:a,type:s,size:o,htmlSize:l,id:c,className:d,isValid:f=!1,isInvalid:u=!1,plaintext:b,readOnly:y,as:x="input",...h}=e;const{controlId:v}=(0,n.useContext)(m);return a=(0,p.oU)(a,"form-control"),(0,i.jsx)(x,{...h,type:s,size:l,ref:t,readOnly:y,id:c||v,className:r()(d,b?`${a}-plaintext`:a,o&&`${a}-${o}`,"color"===s&&`${a}-color`,f&&"is-valid",u&&"is-invalid")})}));N.displayName="FormControl";const g=Object.assign(N,{Feedback:f}),j=n.forwardRef(((e,t)=>{let{className:a,bsPrefix:s,as:o="div",...l}=e;return s=(0,p.oU)(s,"form-floating"),(0,i.jsx)(o,{ref:t,className:r()(a,s),...l})}));j.displayName="FormFloating";const w=j,k=n.forwardRef(((e,t)=>{let{controlId:a,as:s="div",...r}=e;const o=(0,n.useMemo)((()=>({controlId:a})),[a]);return(0,i.jsx)(m.Provider,{value:o,children:(0,i.jsx)(s,{...r,ref:t})})}));k.displayName="FormGroup";const I=k;var F=a(602);const C=n.forwardRef(((e,t)=>{let{as:a="label",bsPrefix:s,column:o=!1,visuallyHidden:l=!1,className:c,htmlFor:d,...f}=e;const{controlId:u}=(0,n.useContext)(m);s=(0,p.oU)(s,"form-label");let b="col-form-label";"string"===typeof o&&(b=`${b} ${b}-${o}`);const y=r()(c,s,l&&"visually-hidden",o&&b);return d=d||u,o?(0,i.jsx)(F.A,{ref:t,as:"label",className:y,htmlFor:d,...f}):(0,i.jsx)(a,{ref:t,className:y,htmlFor:d,...f})}));C.displayName="FormLabel";const R=C,P=n.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,id:o,...l}=e;const{controlId:c}=(0,n.useContext)(m);return a=(0,p.oU)(a,"form-range"),(0,i.jsx)("input",{...l,type:"range",ref:t,className:r()(s,a),id:o||c})}));P.displayName="FormRange";const O=P,T=n.forwardRef(((e,t)=>{let{bsPrefix:a,size:s,htmlSize:o,className:l,isValid:c=!1,isInvalid:d=!1,id:f,...u}=e;const{controlId:b}=(0,n.useContext)(m);return a=(0,p.oU)(a,"form-select"),(0,i.jsx)("select",{...u,size:o,ref:t,className:r()(l,a,s&&`${a}-${s}`,c&&"is-valid",d&&"is-invalid"),id:f||b})}));T.displayName="FormSelect";const $=T,U=n.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,as:o="small",muted:l,...n}=e;return a=(0,p.oU)(a,"form-text"),(0,i.jsx)(o,{...n,ref:t,className:r()(s,a,l&&"text-muted")})}));U.displayName="FormText";const _=U,S=n.forwardRef(((e,t)=>(0,i.jsx)(v,{...e,ref:t,type:"switch"})));S.displayName="Switch";const L=Object.assign(S,{Input:v.Input,Label:v.Label}),z=n.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,children:o,controlId:l,label:n,...c}=e;return a=(0,p.oU)(a,"form-floating"),(0,i.jsxs)(I,{ref:t,className:r()(s,a),controlId:l,...c,children:[o,(0,i.jsx)("label",{htmlFor:l,children:n})]})}));z.displayName="FloatingLabel";const A=z,V={_ref:l().any,validated:l().bool,as:l().elementType},E=n.forwardRef(((e,t)=>{let{className:a,validated:s,as:o="form",...l}=e;return(0,i.jsx)(o,{...l,ref:t,className:r()(a,s&&"was-validated")})}));E.displayName="Form",E.propTypes=V;const D=Object.assign(E,{Group:I,Control:g,Floating:w,Check:v,Switch:L,Label:R,Text:_,Range:O,Select:$,FloatingLabel:A})},440:e=>{"use strict";var t=function(){};e.exports=t}}]);
//# sourceMappingURL=433.d77015f1.chunk.js.map