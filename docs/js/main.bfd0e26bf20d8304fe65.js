(()=>{var t={797:t=>{t.exports='<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n<body class="body">\n  <div class="calculator">\n    <div class="calculator__output output">\n      <div data-previous-operand class="output__previous-operand"></div>\n      <div data-current-operand class="output__current-operand"></div>\n    </div>\n    <div class="calculator__buttons buttons">\n      <button data-all-clear class="buttons__item button__item--double">AC</button>\n      <button data-delete class="buttons__item">DEL</button>\n      <button data-change-sign class="buttons__item">-/+</button>\n      <button data-sqrt class="buttons__item">√</button>\n      <button data-operation class="buttons__item">x<sup>y</sup></button>\n      <button class="buttons__item"></button>\n      <button data-operation class="buttons__item">*</button>\n      <button data-number class="buttons__item">7</button>\n      <button data-number class="buttons__item">8</button>\n      <button data-number class="buttons__item">9</button>\n      <button data-operation class="buttons__item">÷</button>\n      <button data-number class="buttons__item">4</button>\n      <button data-number class="buttons__item">5</button>\n      <button data-number class="buttons__item">6</button>\n      <button data-operation class="buttons__item">+</button>\n      <button data-number class="buttons__item">1</button>\n      <button data-number class="buttons__item">2</button>\n      <button data-number class="buttons__item">3</button>\n      <button data-operation class="buttons__item">-</button>\n      <button data-number class="buttons__item">.</button>\n      <button data-number class="buttons__item">0</button>\n      <button data-equals class="buttons__item button__item--double">=</button>\n    </div>\n  </div>\n</body>\n</html>'}},e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={exports:{}};return t[a](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";n(797);const t=document.querySelector("[data-current-operand]"),e=document.querySelector("[data-previous-operand]"),a=document.querySelectorAll("[data-number]"),r=document.querySelectorAll("[data-operation]"),s=document.querySelector("[data-all-clear]"),o=document.querySelector("[data-delete]"),u=document.querySelector("[data-equals]"),i=document.querySelector("[data-change-sign]"),d=document.querySelector("[data-sqrt]"),c=new class{constructor(t,e){this.previousOperandTextElement=t,this.currentOperandTextElement=e,this.clear()}clear(){this.currentOperand="",this.previousOperand="",this.operation=void 0,this.isCompute=!1}delete(){this.currentOperand=this.currentOperand.toString().slice(0,-1),1===this.currentOperand.toString().length&&"-"===this.currentOperand.toString()&&(this.currentOperand="")}appendNumber(t){(this.isCompute&&""===this.previousOperand||"√"===this.operation)&&this.clear(),"."===t&&this.currentOperand.includes(".")||(this.currentOperand=this.currentOperand.toString()+t.toString())}chooseOperation(t){""!==this.currentOperand&&(""!==this.previousOperand&&this.compute(),this.operation=t,this.previousOperand=this.currentOperand,this.currentOperand="")}changeToOppositeNumber(){0!=this.currentOperand&&(this.currentOperand=-this.currentOperand)}getSqrtOfNumber(){const t=parseFloat(this.currentOperand);if(isNaN(t))return;let e=Math.sqrt(parseFloat(this.currentOperand));this.previousOperand=this.currentOperand,this.currentOperand=e,this.operation="√",this.isCompute=!0}compute(){let t;this.isCompute=!0;const e=parseFloat(this.previousOperand),n=parseFloat(this.currentOperand);if(!isNaN(e)&&!isNaN(n)){switch(this.operation){case"+":t=e+n;break;case"-":t=e-n;break;case"*":t=e*n;break;case"÷":t=e/n;break;case"xy":t=Math.pow(e,n);break;default:return}this.currentOperand=+t.toFixed(10),this.operation=void 0,this.previousOperand=""}}getDisplayNumber(t){const e=t.toString(),n=parseFloat(e.split(".")[0]),a=e.split(".")[1];let r;return r=isNaN(n)?"":n.toLocaleString("en",{maximumFractionDigits:0}),null!=a?`${r}.${a}`:r}updateDisplay(){this.previousOperand<0&&"√"===this.operation?this.currentOperandTextElement.innerText="complex number":this.currentOperandTextElement.innerText=this.getDisplayNumber(this.currentOperand),null!=this.operation?this.previousOperandTextElement.innerText=`${this.getDisplayNumber(this.previousOperand)} ${this.operation}`:this.previousOperandTextElement.innerText=""}}(e,t);a.forEach((t=>{t.addEventListener("click",(()=>{c.appendNumber(t.innerText),c.updateDisplay()}))})),r.forEach((t=>{t.addEventListener("click",(()=>{c.chooseOperation(t.innerText),c.updateDisplay()}))})),u.addEventListener("click",(()=>{c.compute(),c.updateDisplay()})),s.addEventListener("click",(()=>{c.clear(),c.updateDisplay()})),o.addEventListener("click",(()=>{c.delete(),c.updateDisplay()})),i.addEventListener("click",(()=>{c.changeToOppositeNumber(),c.updateDisplay()})),d.addEventListener("click",(()=>{c.getSqrtOfNumber(),c.updateDisplay()}))})()})();