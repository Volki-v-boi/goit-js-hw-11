import{i as l,S as d}from"./assets/vendor-0fc460d7.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="43772566-941124190665b8a45a176dbcd",u="https://pixabay.com/api/",h=o=>{const n=new URLSearchParams({key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${u}?${n}`).then(t=>t.json()).then(t=>t.hits.length===0?[]:t.hits).catch(t=>(console.error("Error:",t),"An error occurred while fetching images."))};function p(o){const n=document.createElement("div");n.className="image-card";const t=document.createElement("a");t.classList.add("image-gallery"),t.href=o.original,t.setAttribute("data-lightbox","image-set");const s=document.createElement("img");s.src=o.webformatURL,s.alt=o.tags,s.className="image";const e=document.createElement("ul");e.className="image-info-list";const r=document.createElement("li");r.textContent=`Likes: ${o.likes}`;const a=document.createElement("li");a.textContent=`Views: ${o.views}`;const c=document.createElement("li");c.textContent=`Comments: ${o.comments}`;const i=document.createElement("li");i.textContent=`Downloads: ${o.downloads}`,e.appendChild(r),e.appendChild(a),e.appendChild(c),e.appendChild(i),t.appendChild(s),n.appendChild(t),n.appendChild(e),document.querySelector(".image-gallery").appendChild(n)}function f(){l.warning({message:"Sorry, there are no images matching your search query. Please try again!"})}const g=new d(".image-gallery a",{captionsData:"alt",captionDelay:250});function y(o){o.preventDefault();const n=document.querySelector("#search-input"),t=n.value,s=document.querySelector(".image-gallery");s.innerHTML="",h(t).then(e=>{e.length>0?(e.forEach(r=>p(r)),g.refresh()):f()}).catch(e=>{console.error("Пошук зображень невдалий",e)}).finally(()=>{n.value=""})}document.querySelector("#search-form").addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
