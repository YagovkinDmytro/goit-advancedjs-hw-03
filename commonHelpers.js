(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const i=function(){return fetch("https://api.thecatapi.com/v1/breeds?api_key=live_JBV67LISgv2ukmTbv0ljH9XRgowj3QdbFJmCIkpvj5kTitSzayNI1LDTecM7YPf7").then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})},a=function(e){return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}&api_key=live_JBV67LISgv2ukmTbv0ljH9XRgowj3QdbFJmCIkpvj5kTitSzayNI1LDTecM7YPf7`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})},o={select:document.querySelector(".breed-select"),messageLoader:document.querySelector(".loader"),messageError:document.querySelector(".error"),catInfo:document.querySelector(".cat-info")};o.select.addEventListener("change",f);o.select.style.display="none";o.messageError.style.display="none";o.catInfo.style.display="none";d();function d(){i().then(e=>{console.log(e),o.messageLoader.style.display="block",u(e),o.messageLoader.style.display="none",o.select.style.display="block"}).catch(e=>(o.messageError.style.display="block",o.messageLoader.style.display="none"))}function u(e){const r=e.map(({id:s,name:l})=>`<option value="${s}">${l}</option>`).join("");o.select.insertAdjacentHTML("beforeend",r)}function f(e){const r=e.currentTarget.value;a(r).then(s=>{o.messageLoader.style.display="block",y(s)}).catch(s=>(o.messageError.style.display="block",o.messageLoader.style.display="none"))}function y(e){o.messageLoader.style.display="none",o.catInfo.style.display="block",console.log(e)}
//# sourceMappingURL=commonHelpers.js.map