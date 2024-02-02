import{i as c}from"./assets/vendor-32231325.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const l="https://api.thecatapi.com/v1",u="/breeds",f="/images/search",p="live_JBV67LISgv2ukmTbv0ljH9XRgowj3QdbFJmCIkpvj5kTitSzayNI1LDTecM7YPf7",d=new URLSearchParams({api_key:p,breed_ids:""}),m=function(){return fetch(`${l}${u}?${d.api_key}`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})},y=function(o){return fetch(`${l}${f}?${d}${o}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})},t={select:document.querySelector(".breed-select"),messageLoader:document.querySelector(".loader"),messageError:document.querySelector(".error"),catInfo:document.querySelector(".cat-info")};t.select.addEventListener("change",$);t.select.style.display="none";t.messageError.style.display="none";t.catInfo.style.display="none";function g(){m().then(o=>{t.messageLoader.style.display="block",L(o),t.messageLoader.style.display="none",t.select.style.display="block"}).catch(o=>(c.error({title:"Error:",message:`${t.messageError.textContent}`,position:"topRight"}),t.messageLoader.style.display="none"))}g();function h(){return t.select.insertAdjacentHTML("beforeend",'<option value="">Choose a breed</option>')}h();function L(o){const r=o.map(({id:s,name:i})=>`<option value="${s}">${i}</option>`).join("");t.select.insertAdjacentHTML("beforeend",r)}function $(o){t.catInfo.style.display="none";const r=o.currentTarget.value;y(r).then(s=>{t.messageLoader.style.display="block",setTimeout(()=>{E(s),t.messageLoader.style.display="none"},500)}).catch(s=>(c.error({title:"Error:",message:`${t.messageError.textContent}`,position:"topRight"}),t.messageLoader.style.display="none"))}function E(o){t.catInfo.style.display="flex";const r=o.map(({url:s,breeds:i})=>i.map(({name:e,description:n,temperament:a})=>`<img src="${s}" alt="${e}" width="600"/>
      <div class ="cat-info-text"><h2>${e}</h2>
      <p>${n}</p>
      <p><span>Temperament:</span> ${a}</p></div>`)).join("");t.catInfo.innerHTML=r}
//# sourceMappingURL=commonHelpers.js.map