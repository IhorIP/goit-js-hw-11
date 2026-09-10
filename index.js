import{a as l,S as m,i as n}from"./assets/vendor-C1DvvBV_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();l.defaults.baseURL="https://pixabay.com/api/";const p="57544668-1209ddae8d9a87a524809e053";async function g(s){const r={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await l.get("",{params:r})).data}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),y=new m(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:i,comments:f,downloads:d})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${e}"
            />
            <div class="info">
              <p class="info-item">
                <b>Likes</b>${t}
              </p>
              <p class="info-item">
                <b>Views</b>${i}
              </p>
              <p class="info-item">
                <b>Comments</b>${f}
              </p>
              <p class="info-item">
                <b>Downloads</b>${d}
              </p>
            </div>
          </a>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function b(){c.innerHTML=""}function L(){u.classList.remove("is-hidden")}function S(){u.classList.add("is-hidden")}const w=document.querySelector(".form");w.addEventListener("submit",q);function q(s){s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){n.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}b(),L(),g(r).then(o=>{if(o.hits.length===0){n.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(o.hits)}).catch(o=>{n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(o)}).finally(()=>{S(),s.target.reset()})}
//# sourceMappingURL=index.js.map
