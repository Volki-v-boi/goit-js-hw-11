import{i as m,S as u}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const h="43772566-941124190665b8a45a176dbcd",p="https://pixabay.com/api/",f=n=>{const o=new URLSearchParams({key:h,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${p}?${o}`).then(t=>t.json()).then(t=>t.hits.length===0?[]:t.hits).catch(t=>(console.error("Error:",t),"An error occurred while fetching images."))};function g(n){const o=document.createElement("div");o.className="image-card";const t=document.createElement("a");t.classList.add("image-gallery"),t.href=n.largeImageURL,t.setAttribute("data-lightbox","image-set");const s=document.createElement("img");s.src=n.webformatURL,s.alt=n.tags,s.className="image";const e=document.createElement("ul");e.className="image-info-list";const r=document.createElement("li");r.textContent=`Likes: ${n.likes}`;const a=document.createElement("li");a.textContent=`Views: ${n.views}`;const c=document.createElement("li");c.textContent=`Comments: ${n.comments}`;const i=document.createElement("li");i.textContent=`Downloads: ${n.downloads}`,e.appendChild(r),e.appendChild(a),e.appendChild(c),e.appendChild(i),t.appendChild(s),o.appendChild(t),o.appendChild(e),document.querySelector(".image-gallery").appendChild(o)}function y(){m.warning({message:"Sorry, there are no images matching your search query. Please try again!"})}const C=new u(".image-gallery",{captionsData:"alt",captionDelay:250}),l=document.querySelector("#search-input"),d=document.querySelector(".loader"),L=document.querySelector(".image-gallery");function b(n){n.preventDefault();const o=l.value;d.style.display="block",L.innerHTML="",f(o).then(t=>{t.length>0?(t.forEach(s=>g(s)),C.refresh()):y()}).catch(t=>{console.error("Пошук зображень невдалий",t)}).finally(()=>{l.value="",d.style.display="none"})}document.querySelector("#search-form").addEventListener("submit",b);
//# sourceMappingURL=commonHelpers.js.map
