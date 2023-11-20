import{a as E,K as S}from"./subjects-55248b84.js";import{I as z,o as i,c as u,m as k,a as s,J as x,X as L,K as p,O as I,d as $,f as g,t as T,x as d,F as f,E as _,_ as F,h as j}from"./index-d335fa14.js";import"./index.esm-5823ac72.js";var O={name:"ChevronRightIcon",extends:z},H=s("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"},null,-1),B=[H];function D(l,n,o,t,e,a){return i(),u("svg",k({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.pti()),B,16)}O.render=D;var R={name:"ChevronDownIcon",extends:z},A=s("path",{d:"M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",fill:"currentColor"},null,-1),K=[A];function M(l,n,o,t,e,a){return i(),u("svg",k({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.pti()),K,16)}R.render=M;var N=`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    /* contain: content; */
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller .p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-virtualscroller-loader.p-component-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: 2rem;
}

.p-virtualscroller-loading-icon.p-icon {
    width: 2rem;
    height: 2rem;
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

/* Inline */
.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`;x(N,{name:"virtualscroller",manual:!0});var Z=`
.p-dropdown {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
}

.p-dropdown-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}

.p-dropdown-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.p-dropdown-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    text-overflow: ellipsis;
    cursor: pointer;
}

.p-dropdown-label-empty {
    overflow: hidden;
    opacity: 0;
}

input.p-dropdown-label {
    cursor: default;
}

.p-dropdown .p-dropdown-panel {
    min-width: 100%;
}

.p-dropdown-panel {
    position: absolute;
    top: 0;
    left: 0;
}

.p-dropdown-items-wrapper {
    overflow: auto;
}

.p-dropdown-item {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
}

.p-dropdown-item-group {
    cursor: auto;
}

.p-dropdown-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.p-dropdown-filter {
    width: 100%;
}

.p-dropdown-filter-container {
    position: relative;
}

.p-dropdown-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}

.p-fluid .p-dropdown {
    display: flex;
}

.p-fluid .p-dropdown .p-dropdown-label {
    width: 1%;
}
`;x(Z,{name:"dropdown",manual:!0});var V=`
.p-inputnumber {
    display: inline-flex;
}

.p-inputnumber-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
}

.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,
.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label {
    display: none;
}

.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding: 0;
}

.p-inputnumber-buttons-stacked .p-inputnumber-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    padding: 0;
}

.p-inputnumber-buttons-stacked .p-inputnumber-button-group {
    display: flex;
    flex-direction: column;
}

.p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button {
    flex: 1 1 auto;
}

.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up {
    order: 3;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-inputnumber-buttons-horizontal .p-inputnumber-input {
    order: 2;
    border-radius: 0;
}

.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down {
    order: 1;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-inputnumber-buttons-vertical {
    flex-direction: column;
}

.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up {
    order: 1;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    width: 100%;
}

.p-inputnumber-buttons-vertical .p-inputnumber-input {
    order: 2;
    border-radius: 0;
    text-align: center;
}

.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down {
    order: 3;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    width: 100%;
}

.p-inputnumber-input {
    flex: 1 1 auto;
}

.p-fluid .p-inputnumber {
    width: 100%;
}

.p-fluid .p-inputnumber .p-inputnumber-input {
    width: 1%;
}

.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input {
    width: 100%;
}
`;x(V,{name:"inputnumber",manual:!0});var J=`
.p-paginator-default {
    display: flex;
}

.p-paginator {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.p-paginator-left-content {
    margin-right: auto;
}

.p-paginator-right-content {
    margin-left: auto;
}

.p-paginator-page,
.p-paginator-next,
.p-paginator-last,
.p-paginator-first,
.p-paginator-prev,
.p-paginator-current {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    user-select: none;
    overflow: hidden;
    position: relative;
}

.p-paginator-element:focus {
    z-index: 1;
    position: relative;
}
`;x(J,{name:"paginator",manual:!0});var P=L.extend({});P.extend("focustrap",{mounted:function(n,o){var t=o.value||{},e=t.disabled;e||(this.createHiddenFocusableElements(n,o),this.bind(n,o),this.autoFocus(n,o)),n.setAttribute("data-pd-focustrap",!0),this.$el=n},updated:function(n,o){var t=o.value||{},e=t.disabled;e&&this.unbind(n)},unmounted:function(n){this.unbind(n)},methods:{getComputedSelector:function(n){return':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(n??"")},bind:function(n,o){var t=this,e=o.value||{},a=e.onFocusIn,r=e.onFocusOut;n.$_pfocustrap_mutationobserver=new MutationObserver(function(c){c.forEach(function(v){if(v.type==="childList"&&!n.contains(document.activeElement)){var w=function h(b){var m=p.isFocusableElement(b)?p.isFocusableElement(b,t.getComputedSelector(n.$_pfocustrap_focusableselector))?b:p.getFirstFocusableElement(n,t.getComputedSelector(n.$_pfocustrap_focusableselector)):p.getFirstFocusableElement(b);return I.isNotEmpty(m)?m:h(b.nextSibling)};p.focus(w(v.nextSibling))}})}),n.$_pfocustrap_mutationobserver.disconnect(),n.$_pfocustrap_mutationobserver.observe(n,{childList:!0}),n.$_pfocustrap_focusinlistener=function(c){return a&&a(c)},n.$_pfocustrap_focusoutlistener=function(c){return r&&r(c)},n.addEventListener("focusin",n.$_pfocustrap_focusinlistener),n.addEventListener("focusout",n.$_pfocustrap_focusoutlistener)},unbind:function(n){n.$_pfocustrap_mutationobserver&&n.$_pfocustrap_mutationobserver.disconnect(),n.$_pfocustrap_focusinlistener&&n.removeEventListener("focusin",n.$_pfocustrap_focusinlistener)&&(n.$_pfocustrap_focusinlistener=null),n.$_pfocustrap_focusoutlistener&&n.removeEventListener("focusout",n.$_pfocustrap_focusoutlistener)&&(n.$_pfocustrap_focusoutlistener=null)},autoFocus:function(n,o){var t=o.value||{},e=t.autoFocusSelector,a=e===void 0?"":e,r=t.firstFocusableSelector,c=r===void 0?"":r,v=t.autoFocus,w=v===void 0?!1:v,h=p.getFirstFocusableElement(n,"[autofocus]".concat(this.getComputedSelector(a)));w&&!h&&(h=p.getFirstFocusableElement(n,this.getComputedSelector(c))),p.focus(h)},onFirstHiddenElementFocus:function(n){var o,t=n.currentTarget,e=n.relatedTarget,a=e===t.$_pfocustrap_lasthiddenfocusableelement||!((o=this.$el)!==null&&o!==void 0&&o.contains(e))?p.getFirstFocusableElement(t.parentElement,this.getComputedSelector(t.$_pfocustrap_focusableselector)):t.$_pfocustrap_lasthiddenfocusableelement;p.focus(a)},onLastHiddenElementFocus:function(n){var o,t=n.currentTarget,e=n.relatedTarget,a=e===t.$_pfocustrap_firsthiddenfocusableelement||!((o=this.$el)!==null&&o!==void 0&&o.contains(e))?p.getLastFocusableElement(t.parentElement,this.getComputedSelector(t.$_pfocustrap_focusableselector)):t.$_pfocustrap_firsthiddenfocusableelement;p.focus(a)},createHiddenFocusableElements:function(n,o){var t=this,e=o.value||{},a=e.tabIndex,r=a===void 0?0:a,c=e.firstFocusableSelector,v=c===void 0?"":c,w=e.lastFocusableSelector,h=w===void 0?"":w,b=function(C){return p.createElement("span",{class:"p-hidden-accessible p-hidden-focusable",tabIndex:r,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:C==null?void 0:C.bind(t)})},m=b(this.onFirstHiddenElementFocus),y=b(this.onLastHiddenElementFocus);m.$_pfocustrap_lasthiddenfocusableelement=y,m.$_pfocustrap_focusableselector=v,m.setAttribute("data-pc-section","firstfocusableelement"),y.$_pfocustrap_firsthiddenfocusableelement=m,y.$_pfocustrap_focusableselector=h,y.setAttribute("data-pc-section","lastfocusableelement"),n.prepend(m),n.append(y)}}});var U=`
.p-datatable {
    position: relative;
}

.p-datatable-table {
    border-spacing: 0px;
    width: 100%;
}

.p-datatable .p-sortable-column {
    cursor: pointer;
    user-select: none;
}

.p-datatable .p-sortable-column .p-column-title,
.p-datatable .p-sortable-column .p-sortable-column-icon,
.p-datatable .p-sortable-column .p-sortable-column-badge {
    vertical-align: middle;
}

.p-datatable .p-sortable-column .p-sortable-column-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.p-datatable-hoverable-rows .p-selectable-row {
    cursor: pointer;
}

/* Scrollable */
.p-datatable-scrollable > .p-datatable-wrapper {
    position: relative;
}

.p-datatable-scrollable-table > .p-datatable-thead {
    top: 0;
    z-index: 1;
}

.p-datatable-scrollable-table > .p-datatable-frozen-tbody {
    position: sticky;
    z-index: 1;
}

.p-datatable-scrollable-table > .p-datatable-tfoot {
    bottom: 0;
    z-index: 1;
}

.p-datatable-scrollable .p-frozen-column {
    position: sticky;
    background: inherit;
}

.p-datatable-scrollable th.p-frozen-column {
    z-index: 1;
}

.p-datatable-flex-scrollable {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.p-datatable-flex-scrollable > .p-datatable-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
}

.p-datatable-scrollable-table > .p-datatable-tbody > .p-rowgroup-header {
    position: sticky;
    z-index: 1;
}

/* Resizable */
.p-datatable-resizable-table > .p-datatable-thead > tr > th,
.p-datatable-resizable-table > .p-datatable-tfoot > tr > td,
.p-datatable-resizable-table > .p-datatable-tbody > tr > td {
    overflow: hidden;
    white-space: nowrap;
}

.p-datatable-resizable-table > .p-datatable-thead > tr > th.p-resizable-column:not(.p-frozen-column) {
    background-clip: padding-box;
    position: relative;
}

.p-datatable-resizable-table-fit > .p-datatable-thead > tr > th.p-resizable-column:last-child .p-column-resizer {
    display: none;
}

.p-datatable .p-column-resizer {
    display: block;
    position: absolute !important;
    top: 0;
    right: 0;
    margin: 0;
    width: 0.5rem;
    height: 100%;
    padding: 0px;
    cursor: col-resize;
    border: 1px solid transparent;
}

.p-datatable .p-column-header-content {
    display: flex;
    align-items: center;
}

.p-datatable .p-column-resizer-helper {
    width: 1px;
    position: absolute;
    z-index: 10;
    display: none;
}

.p-datatable .p-row-editor-init,
.p-datatable .p-row-editor-save,
.p-datatable .p-row-editor-cancel {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

/* Expand */
.p-datatable .p-row-toggler {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

/* Reorder */
.p-datatable-reorder-indicator-up,
.p-datatable-reorder-indicator-down {
    position: absolute;
    display: none;
}

.p-reorderable-column,
.p-datatable-reorderablerow-handle {
    cursor: move;
}

/* Loader */
.p-datatable .p-datatable-loading-overlay {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

/* Filter */
.p-column-filter-row {
    display: flex;
    align-items: center;
    width: 100%;
}

.p-column-filter-menu {
    display: inline-flex;
    margin-left: auto;
}

.p-column-filter-row .p-column-filter-element {
    flex: 1 1 auto;
    width: 1%;
}

.p-column-filter-menu-button,
.p-column-filter-clear-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}

.p-column-filter-row-items {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-column-filter-row-item {
    cursor: pointer;
}

.p-column-filter-add-button,
.p-column-filter-remove-button {
    justify-content: center;
}

.p-column-filter-add-button .p-button-label,
.p-column-filter-remove-button .p-button-label {
    flex-grow: 0;
}

.p-column-filter-buttonbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.p-column-filter-buttonbar .p-button:not(.p-button-icon-only) {
    width: auto;
}

/* Responsive */
.p-datatable .p-datatable-tbody > tr > td > .p-column-title {
    display: none;
}

/* VirtualScroller */
.p-datatable-virtualscroller-spacer {
    display: flex;
}

.p-datatable .p-virtualscroller .p-virtualscroller-loading {
    transform: none !important;
    min-height: 0;
    position: sticky;
    top: 0;
    left: 0;
}
`;x(U,{name:"datatable",manual:!0});const X={class:"row"},q={class:"col"},G={class:"col"},Q=$({__name:"FormTable",props:{form:{}},setup(l){const n=l;E();const o=g(()=>{var e;const t=Object.values(n.form)[0];return t==null?"":(e=t.path)==null?void 0:e.split(".")[2]});return T(()=>{}),(t,e)=>(i(),u("div",X,[s("div",q,[s("span",null,d(o.value),1)]),(i(!0),u(f,null,_(n.form,a=>(i(),u("div",G,[s("span",null,d(a.kanji),1)]))),256))]))}});const W=F(Q,[["__scopeId","data-v-f3637050"]]),Y={class:"conjTable"},nn={class:"row header"},tn={class:"col name"},en={class:"col"},on=$({__name:"ConjTable",props:{conj:{}},setup(l){const n=l,o=g(()=>{var r;const e=Object.values(n.conj)[0],a=Object.values(e)[0];return a==null?"":(r=a.path)==null?void 0:r.split(".")[1]}),t=g(()=>{const e=Object.values(n.conj)[0];return Object.keys(e)});return(e,a)=>(i(),u("div",Y,[s("div",nn,[s("div",tn,[s("span",null,d(o.value),1)]),(i(!0),u(f,null,_(t.value,r=>(i(),u("div",en,[s("span",null,d(r),1)]))),256))]),(i(!0),u(f,null,_(e.conj,r=>(i(),j(W,{form:r},null,8,["form"]))),256))]))}});const an=F(on,[["__scopeId","data-v-c655e17a"]]),rn={class:"row"},ln={class:"col"},sn={class:"col"},un=$({__name:"ShortFormTable",props:{form:{}},setup(l){const n=l;E();const o=g(()=>{var e;const t=Object.values(n.form)[0];return t==null?"":(e=t.path)==null?void 0:e.split(".")[2]});return T(()=>{}),(t,e)=>(i(),u("div",rn,[s("div",ln,[s("span",null,d(o.value),1)]),(i(!0),u(f,null,_(n.form,a=>(i(),u("div",sn,[s("span",null,d(a.kanji),1)]))),256))]))}});const pn=F(un,[["__scopeId","data-v-23929b18"]]),cn={class:"conjTable"},dn={class:"row header"},bn={class:"col"},mn={class:"col"},fn=$({__name:"ShortConjTable",props:{conj:{}},setup(l){const n=l,o=g(()=>{var r;const e=Object.values(n.conj)[0],a=Object.values(e)[0];return a==null?"":(r=a.path)==null?void 0:r.split(".")[1]}),t=g(()=>{const e=Object.values(n.conj)[0];return Object.keys(e)});return(e,a)=>(i(),u("div",cn,[s("div",dn,[s("div",bn,[s("span",null,d(o.value),1)]),(i(!0),u(f,null,_(t.value,r=>(i(),u("div",mn,[s("span",null,d(r),1)]))),256))]),(i(!0),u(f,null,_(e.conj,r=>(i(),j(pn,{form:r},null,8,["form"]))),256))]))}});const _n=F(fn,[["__scopeId","data-v-67156dc8"]]),vn={class:"container"},hn={class:"row"},gn={class:"col"},wn={class:"title"},yn={class:"row conjRow"},xn={class:"col"},$n={class:"row conjRow"},Fn={class:"col"},jn=$({__name:"ItemDetails",props:{type:{},item:{}},setup(l){const n=l;E();const o=g(()=>({short:Object.values(n.item.conjugations).filter(t=>t instanceof S),long:Object.values(n.item.conjugations).filter(t=>!(t instanceof S))}));return(t,e)=>(i(),u("div",vn,[s("div",hn,[s("div",gn,[s("span",wn,"item: "+d(t.item.slug),1)])]),s("div",yn,[s("div",xn,[(i(!0),u(f,null,_(o.value.long,(a,r)=>(i(),j(an,{key:r,class:"table",type:Object.keys(a)[0],conj:a},null,8,["type","conj"]))),128))])]),s("div",$n,[s("div",Fn,[(i(!0),u(f,null,_(o.value.long,(a,r)=>(i(),j(_n,{key:r,class:"table",type:Object.keys(a)[0],conj:a},null,8,["type","conj"]))),128))])])]))}});const kn=F(jn,[["__scopeId","data-v-96407d4b"]]);export{kn as I,R as a,O as s};
