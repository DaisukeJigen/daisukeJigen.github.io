(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["test"],{"3a91":function(e,t,s){},"78c1":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("b-container",[null!=e.currentQuestion?t("b-row",[t("b-col",[t("span",[e._v("Answered: ")]),t("span",[e._v(e._s(e.progress)+" / "+e._s(e.questions.length))])])],1):e._e(),t("b-row",[t("b-col",[null==e.currentQuestion?t("options",{on:{optionsSet:e.start}}):0==e.questions.length?t("span",[e._v("All Done")]):t("question",{attrs:{question:e.currentQuestion},on:{next:e.nextQuestion,"update:question":function(t){e.currentQuestion=t}}})],1)],1)],1)},n=[],r=s("9ab4"),c=s("1b40"),i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("b-container",[t("b-row",[t("b-col",[t("ul",[t("li",[t("span",[e._v("Verb: ")]),t("span",[e._v(e._s(e.pathPieces[0]))])]),t("li",[t("span",[e._v("Form: ")]),t("span",[e._v(e._s(e.pathPieces[1]))])]),t("li",[t("span",[e._v("Politeness: ")]),e._v(e._s(e.pathPieces[2])),t("span")]),t("li",[t("span",[e._v("Positivitiy: ")]),t("span",[e._v(e._s(e.pathPieces[3]))])])])])],1),t("b-row",[t("b-col",[t("b-form-input",{ref:"input",on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enter.apply(null,arguments)}},model:{value:e.answer,callback:function(t){e.answer=t},expression:"answer"}}),e.answered?[t("span",{class:e.correct?"correct":"incorrect"},[e._v(e._s(e.correct?"Correct":"Incorrect"))]),t("span",{staticClass:"correctAnswer"},[e._v(" - "+e._s(e.fullQuestion.kanji)+" ("+e._s(e.fullQuestion.kana)+")")])]:e._e()],2)],1),t("b-row",[t("b-col",[e.answered?t("b-button",{on:{click:function(t){return t.preventDefault(),e.$emit("next",!0)}}},[e._v("Next")]):t("b-button",{on:{click:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[e._v("Submit")])],1)],1)],1)},l=[],u=s("2f62"),a=s("eb42"),p=s("6034");let b=class extends c["c"]{mounted(){const e=this;Object(p["a"])(e.$refs["input"].$el)}get pathPieces(){const e=this;return e.fullQuestion.path.split(".")}get fullQuestion(){const e=this;return e.getQuestion()(e.question)}submit(){const e=this;e.correct=e.answer==e.fullQuestion.kana||e.answer==e.fullQuestion.kanji,e.answered=!0,e.updateAnswer({path:e.fullQuestion.path,answer:e.correct?a["a"].Correct:a["a"].Incorrect})}enter(){const e=this;e.answered?e.$emit("next",e.correct?a["a"].Correct:a["a"].Incorrect):e.submit()}questionChange(){const e=this;e.answer="",e.answered=!1}};Object(r["a"])([Object(c["b"])()],b.prototype,"question",void 0),Object(r["a"])([Object(c["d"])("question")],b.prototype,"questionChange",null),b=Object(r["a"])([Object(c["a"])({components:{},methods:{...Object(u["c"])("subjects",["getQuestions","getQuestion"]),...Object(u["b"])("subjects",["updateAnswer"])},data(){return{answer:"",answered:!1}}})],b);var d=b,v=d,f=(s("b3ec"),s("2877")),h=Object(f["a"])(v,i,l,!1,null,"2600274c",null),m=h.exports,_=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("b-container",[t("b-row",[t("b-col",[t("b-form-group",{attrs:{label:"Levels","label-for":"chkLevels"}},[t("b-form-checkbox-group",{attrs:{id:"chkLevels",name:"Levels",options:e.levels},model:{value:e.selectedLevels,callback:function(t){e.selectedLevels=t},expression:"selectedLevels"}})],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Positivity","label-for":"chkPositivity"}},[t("b-form-checkbox-group",{attrs:{id:"chkPositivity",name:"Positivity",options:e.ops.positivity},model:{value:e.selectedPositivity,callback:function(t){e.selectedPositivity=t},expression:"selectedPositivity"}})],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Politeness","label-for":"chkPoliteness"}},[t("b-form-checkbox-group",{attrs:{id:"chkPoliteness",name:"Politeness",options:e.ops.politeness},model:{value:e.selectedPoliteness,callback:function(t){e.selectedPoliteness=t},expression:"selectedPoliteness"}})],1)],1),t("b-col",[t("b-form-group",{attrs:{label:"Form","label-for":"chkForm"}},[t("b-form-checkbox-group",{attrs:{id:"chkForm",name:"Form",options:e.ops.form},model:{value:e.selectedForm,callback:function(t){e.selectedForm=t},expression:"selectedForm"}})],1)],1)],1),t("b-row",[t("b-col",[t("b-button",{on:{click:function(t){return t.preventDefault(),e.$emit("optionsSet",!0)}}},[e._v("Go")])],1)],1)],1)},g=[];let w=class extends c["c"]{get ops(){const e=this;return e.options}get levels(){const e=this;return e.getLevels()}get selectedPositivity(){const e=this;return e.selected.positivity}set selectedPositivity(e){const t=this;t.updateSelectedPositivity(e)}get selectedPoliteness(){const e=this;return e.selected.politeness}set selectedPoliteness(e){const t=this;t.updateSelectedPoliteness(e)}get selectedForm(){const e=this;return e.selected.form}set selectedForm(e){const t=this;t.updateSelectedForm(e)}get selectedLevels(){const e=this;return e.selected.levels}set selectedLevels(e){const t=this;t.updateSelectedLevels(e)}};w=Object(r["a"])([Object(c["a"])({components:{},computed:{...Object(u["d"])("options",["options","selected"])},methods:{...Object(u["b"])("options",["updateSelectedPositivity","updateSelectedPoliteness","updateSelectedForm","updateSelectedLevels"]),...Object(u["c"])("userData",["getLevels"])},data(){return{}}})],w);var P=w,k=P,Q=Object(f["a"])(k,_,g,!1,null,"68bf905f",null),j=Q.exports,y=s("2ef0");let x=class extends c["c"]{mounted(){const e=this;e.questions=e.getQuestions(),e.totalQuestions=e.questions.length}start(){const e=this;e.currentQuestion=e.randomQuestion()}nextQuestion(e=a["a"].Incorrect){const t=this;e==a["a"].Correct&&(t.progress=t.progress+1,t.questions.pop(t.currentQuestion)),t.currentQuestion=t.randomQuestion()}randomQuestion(){const e=this;return e.questions.filter(e=>e.answered!=a["a"].Correct)[Object(y["random"])(0,e.questions.length-1)]}};x=Object(r["a"])([Object(c["a"])({components:{question:m,options:j},methods:{...Object(u["c"])("subjects",["getQuestions"])},data(){return{questions:[],currentQuestion:null,totalQuestions:0,progress:0}}})],x);var O=x,q=O,L=Object(f["a"])(q,o,n,!1,null,"0de26fd7",null);t["default"]=L.exports},b3ec:function(e,t,s){"use strict";s("3a91")}}]);
//# sourceMappingURL=test.0b82cc37.js.map