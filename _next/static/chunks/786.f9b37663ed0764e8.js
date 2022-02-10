"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[786],{786:function(e,t,n){n.r(t);var o=n(4051),r=n.n(o),l=n(5893),a=n(4981),i=n(5215),s=(n(9253),n(442),n(4387),n(6588),n(2028),n(2270),n(1612),n(2827),n(9323),n(7294));function c(e,t,n,o,r,l,a){try{var i=e[l](a),s=i.value}catch(c){return void n(c)}i.done?t(s):Promise.resolve(s).then(o,r)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var l=e.apply(t,n);function a(e){c(l,o,r,a,i,"next",e)}function i(e){c(l,o,r,a,i,"throw",e)}a(void 0)}))}}var h=[{value:"hello_world.mol",label:"\uc548\ub155, \uc138\uc0c1"},{value:"mol_ru.mol",label:"\ubab0?\ub8e8"},{value:"a-z.mol",label:"A-Z\ucd9c\ub825"},{value:"star2.mol",label:"\ubcc4\ucc0d\uae30"}],m=[{value:"textarea",label:"\ud14d\uc2a4\ud2b8 \uc785\ub825"},{value:"clouds",label:"\uc5d0\ub514\ud130 clouds"},{value:"xcode",label:"\uc5d0\ub514\ud130 xcode"},{value:"solarized_light",label:"\uc5d0\ub514\ud130 solarized_light"},{value:"ambiance",label:"\uc5d0\ub514\ud130 ambiance"},{value:"nord_dark",label:"\uc5d0\ub514\ud130 nord_dark"},{value:"monokai",label:"\uc5d0\ub514\ud130 monokai"},{value:"one_dark",label:"\uc5d0\ub514\ud130 one_dark"}];t.default=function(e){var t=e.code,n=e.setCode,o=(0,s.useState)("textarea"),c=o[0],d=o[1],g=function(){var e=u(r().mark((function e(t){var o,l,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.value,e.prev=1,e.next=4,fetch("/examples/".concat(o));case 4:if(200===(l=e.sent).status){e.next=7;break}throw new Error("file not found");case 7:return e.next=9,l.text();case 9:a=e.sent,n(a),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),n("\uc608\uc81c\ub97c \uac00\uc838\uc624\uc9c0 \ubabb\ud558\uc600\uc2b5\ub2c8\ub2e4.");case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=u(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.value,d(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"flex flex-row w-full",children:[(0,l.jsx)("div",{className:"mt-4 w-full",children:"\ucf54\ub4dc"}),(0,l.jsxs)("div",{className:"flex gap-x-3 mb-1",children:[(0,l.jsx)(i.ZP,{className:"w-36",defaultValue:m[0],onChange:f,options:m}),(0,l.jsx)(i.ZP,{className:"w-36",onChange:g,options:h})]})]}),(0,l.jsx)("div",{className:"bg-white w-full shadow-lg rounded-lg resize-y",children:"textarea"===c?(0,l.jsx)("textarea",{className:"w-full rounded-lg resize-y px-3 py-3",value:t,onChange:function(e){return n(e.target.value)},rows:10}):(0,l.jsx)(a.ZP,{placeholder:"\uc6b0\uce21\uc0c1\ub2e8\uc5d0\uc11c \uc608\uc81c\ub97c \uc120\ud0dd\ud558\uc5ec \ubcf4\uc138\uc694!",mode:"mol",theme:c,name:"asdf",fontSize:14,value:t,onChange:function(e){return n(e)},showPrintMargin:!1,enableLiveAutocompletion:!1,enableBasicAutocompletion:!1,enableSnippets:!1,showGutter:!0,highlightActiveLine:!0,width:"100%",setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2}})})]})}},442:function(e,t,n){e=n.nmd(e);var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n(3239));o.config.set("basePath","."),o.define("ace/mode/mol_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){var o=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,l=function(e){this.$rules={start:[{token:"support.function",regex:"\ubab0\\?\ub8e8|\ubaa8\uc62c\\?\ub8e8|\ubaa8\uc624\uc62c\\?\ub8e8"},{token:"constant.character.escape",regex:"\uc65c(\ubab0\\?|\uc544!)\ub8e8(\uc6b0)*"},{token:"constant.numeric",regex:"\ubab0\ub8e8|\uc544\ub8e8|\ubaa8\uc62c\ub8e8|\uc544\uc544\ub8e8"},{token:"keyword.operator",regex:"(\\?{1,2})|(!{1,2})"},{token:"keyword",regex:"\uc544!\ub8e8\uc6b0*"},{token:"variable.name",regex:"\ub8e8\uc6b0*"},{token:"string.quoted",regex:"\uc544{1,2}\\?\ub8e8"},{token:"support.function",regex:"(\ubab0|\ubaa8\uc62c)!\ub8e8"},{token:"comment.line",regex:"//[^\n]*\n?"},{token:"comment.line",regex:"=>[^\n]*\n?"},{token:"comment.block",regex:"\\/\\*",next:"comment"},{token:"comment.start",regex:"<--",next:"comment"}],comment:[{token:"comment.end",regex:"--\x3e",next:"start"},{token:"comment.end",regex:"\\*\\/",next:"start"},{defaultToken:"comment.block"}]}};o.inherits(l,r),t.MolHighlightRules=l})),o.define("ace/mode/mol",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){console.log("...");try{var o=e("../lib/oop"),r=(e("./text_highlight_rules").TextHighlightRules,e("./text").Mode),l=e("ace/mode/mol_highlight_rules").MolHighlightRules,a=function(){this.HighlightRules=l};o.inherits(a,r),function(){}.call(a.prototype)}catch(i){console.error(i)}t.Mode=a})),o.require(["ace/mode/mol"],(function(t){e&&(console.log(t),e.exports=t)}))}}]);