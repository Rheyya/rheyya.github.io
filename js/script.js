/* ===== PROJECT DATA — edit copy, facts and images here ===== */
const I = "assets/images/";
/* Images: <name>.webp (1600w) + <name>-800.webp. Missing files hide themselves (see ASSETS.md). */
const IMG = f => typeof IMGS!=="undefined" ? IMGS[f] : `${I}${f}.webp`;
const SET = f => typeof IMGS!=="undefined" ? "" : ` srcset="${I}${f}-800.webp 800w, ${I}${f}.webp 1600w"`;
const DIM = {"quickvent-wireframes":[1600,1069],"quickvent-final-design":[1600,953]};
const pic = (f,alt,sizes) => { const d=DIM[f]||[1600,910]; return `<img src="${IMG(f)}"${SET(f)} sizes="${sizes}" width="${d[0]}" height="${d[1]}" alt="${alt}" loading="lazy" decoding="async">`; };
/* Code Breaker accepts .webp or .png: if the .webp is missing, retry the .png once */
const retry = im => { if(!/codebreaker/.test(im.src)||im.dataset.png) return false; im.dataset.png="1"; im.removeAttribute("srcset"); const s=im.src.replace(/(-800)?\.webp(\?.*)?$/,".png"); if(s===im.src) return false; im.src=s; const z=im.closest(".zoom"); if(z) z.dataset.src=s; return true; };
const CARD_SZ="(max-width:820px) 92vw, 560px", DLG_SZ="(max-width:860px) 92vw, 740px";
const PROJECTS = [
  { id:"gett-smart", n:"01", title:"GETT SMART", cat:"Web Development · Learning Platform", featured:true, btn:"View Case Study",
    role:"Web Developer", tl:"WordPress, Elementor, JavaScript, Supabase", type:"Nonprofit / EdTech",
    desc:"Developed and maintained a WordPress-based digital learning platform designed to make technology education more accessible. My work included building responsive course and lesson experiences, integrating learning content and quizzes, managing website content, troubleshooting technical issues, and connecting the web experience with Supabase-backed data.",
    live:"https://gettsmartapp.com/", main:"gettsmart-home", alt:"GETT SMART homepage with the headline Empowering Returning Citizens Through Technology",
    
    shots:[["gettsmart-home","GETT SMART homepage","Homepage: introduces the mission and sends visitors to start learning."],["gettsmart-courses","Explore Our Courses grid showing chapters 1 to 3","Courses: each chapter is a card with a clear Continue Study action."],["gettsmart-course-content","Course content page listing lessons with videos, readings and quizzes","Course content: a chapter description, then lessons that pair videos, readings and quizzes."],["gettsmart-video-lesson","Video lesson page with a lesson sidebar and embedded video player","Lesson: a sidebar, breadcrumbs and previous / next controls surround the video."],["gettsmart-quiz","Lesson quiz with multiple-choice question and Check button","Quiz: a multiple-choice question with a single Check action."]],
    sections:[
      ["Project overview","A WordPress-based web learning experience, connected to a Supabase-backed system, that extends GETT SMART's digital literacy education beyond the iOS app."],
      ["The challenge","Extend the learning experience beyond the iOS app into a usable web platform, supporting navigation, lessons, quizzes, progress, and user accounts."],
      ["Who the experience serves","Returning citizens and adults developing technology skills. The first chapter begins with getting started on an iPhone, so the interface has to assume little prior knowledge and stay simple and predictable."],
      ["My role and responsibilities",["Implemented responsive course structure and lesson navigation in WordPress and Elementor.","Built quizzes and progress indicators.","Implemented authentication-related pages.","Connected the experience to Supabase-powered functionality, working across WordPress, Elementor, JavaScript and Supabase.","Managed content and troubleshot issues as they came up."]],
      ["Interface decisions and rationale",["One repeatable lesson pattern: each lesson follows the same order of welcome, video, reading and quiz, so learners always know what comes next.","A persistent lesson sidebar with a status marker beside each item shows position in the chapter and supports progress tracking.","Previous / next controls and a breadcrumb let learners move in order without hunting for the next step.","One clear action per quiz screen: a single Check button keeps the task simple.","Large headings and generous spacing keep course pages easy to read."]],
      ["A real technical problem I solved",""],
      ["What I delivered","A functional web learning experience with responsive course and lesson pages, quizzes, progress tracking, authentication-related pages and Supabase-connected features, plus ongoing improvements."],
      ["What I learned","Connecting UI implementation, content organization, WordPress and Supabase showed me that clarity for learners depends on what sits behind the screen: a consistent content structure, dependable assets, and data that reflects where each learner is. Moving the lesson images was a small change, but it taught me to treat reliability as part of the user experience."],
      ["What I'd improve next","Future opportunities, not completed work:|Evaluate the lesson navigation with real learners.|Review mobile usability across lesson and quiz pages.|Revisit content organization as more chapters are added."]] },
  { id:"just-smash-it", n:"02", title:"JUST SMASH IT", cat:"Restaurant Website · WordPress", btn:"View Case Study",
    role:"Web Designer & Developer", tl:"WordPress, Elementor", type:"Restaurant Client Website",
    desc:"Designed and developed a responsive WordPress website for a Detroit-area restaurant brand, organizing menu content, locations, online ordering pathways, brand imagery, and social content into an easy-to-navigate customer experience.",
    live:"https://jsiburgers.com/", main:"jsi-home", alt:"Just Smash It homepage with a smash burger on a bright yellow background",
    shots:[["jsi-home","Just Smash It homepage","Homepage: burger photography on the brand's yellow, with Order Now and View Menu buttons."],["jsi-menu","Menu section showing single, double and triple beef burgers","Menu: burgers grouped under Smash Burgers, each with a short description."],["jsi-locations-social","Locations and social media section","Locations: hours and a Get Directions button for each location, plus social links."]],
    sections:[["Project overview","Designed and developed a responsive WordPress website for a Detroit-area restaurant brand, organizing menu content, locations, online ordering pathways, brand imagery, and social content into an easy-to-navigate customer experience."],
      ["The challenge","Help customers quickly find the menu, location information, and online ordering paths, while giving the brand room to show its personality."],
      ["My role","Web Designer & Developer: website design, WordPress / Elementor build, and content organization for a real client."],
      ["Why I designed it this way","Two decisions shaped the site, each serving a different goal."],
      ["Ordering and locations",["Order Now sits in the header and the hero, so ordering is always one click away.","Simple navigation keeps the menu, locations and ordering easy to find.","Each location lists its hours and a Get Directions button.","The layout is responsive, so the same content works on phones and tablets."]],
      ["Outcome","Delivered a live restaurant website for a real client."]] },
  { id:"code-breaker-media", n:"03", title:"CODE BREAKER MEDIA", cat:"One-Page WordPress Website", btn:"View Case Study",
    role:"Web Developer", tl:"WordPress, Elementor", type:"Media Client Website",
    desc:"Built a streamlined one-page WordPress website for a media brand, organizing featured content, brand information, collaboration messaging, and contact functionality into a responsive digital presence.",
    live:"https://slategrey-deer-670692.hostingersite.com/", main:"codebreaker-home", alt:"Code Breaker Media homepage with the headline Unlock the Truth Through Story and a Featured Content row of three videos",
    shots:[["codebreaker-home","Code Breaker Media homepage with the headline Unlock the Truth Through Story, an About Us button, and a Featured Content row of three videos","Homepage: the hero headline and brand mark, then a Featured Content row of three videos."],["codebreaker-content","Code Breaker Media About section with a Contact Us button, followed by a contact form with name, email and message fields","About and contact: the brand story with a Contact Us button, and a form for collaboration inquiries."]],
    sections:[["Project overview","Built a streamlined one-page WordPress website for a media brand, organizing featured content, brand information, collaboration messaging, and contact functionality into a responsive digital presence."],
      ["The challenge","Organize several kinds of content into one clear, coherent page."],
      ["My role","Web Developer: built the responsive one-page site in WordPress and Elementor, presenting the brand, featured content, About information, and contact / collaboration pathways."],
      ["Design and implementation decisions",["One page, several content types: the hero, featured content, About information and contact / collaboration each get their own section, so visitors can tell them apart.","Visual hierarchy: the hero introduces the brand, then featured content, About and contact follow in order of importance.","Simple navigation and a clear contact pathway keep collaboration easy to start.","A layout and visual style chosen to suit the media brand."]],
      ["Outcome","A streamlined, responsive one-page website for a media brand."]] },
  { id:"quickvent", n:"04", title:"QUICKVENT", cat:"Website UX/UI Design", btn:"View Design Process",
    role:"Website UI Designer", tl:"Figma, Wireframing", type:"Service Business Design Project",
    desc:"Designed a service-focused website experience for a vent-cleaning business, taking the project from low-fidelity wireframes to polished desktop interface designs with clear service information, booking pathways, and contact functionality.",
    live:null, main:"quickvent", pair:true,
    shots:[["quickvent-wireframes","Low-fidelity wireframes for four QuickVent desktop screens","<span class=\"lab\">WIREFRAME</span> Low-fidelity layout: structure and content order."],["quickvent-final-design","High-fidelity Figma designs for four QuickVent desktop screens","<span class=\"lab\">FINAL DESIGN</span> High-fidelity layout: imagery, color and clearer actions."]],
    after:["Clearer information hierarchy: the grey hero box became a photo with a tinted overlay and a white headline, so the main message is read first.","Stronger service grouping: services appear as icon tiles on the home screen, and the services screen pairs each description with a before / after image.","More visible contact pathways: grey form blocks became a bold blue Contact Us banner and outlined forms with blue Submit buttons."],
    sections:[["Project overview","Designed a service-focused website experience for a vent-cleaning business, taking the project from low-fidelity wireframes to polished desktop interface designs with clear service information, booking pathways, and contact functionality."],
      ["The challenge","Make service information understandable and help visitors identify how to request service or make contact."],
      ["My role","Website UI Designer: wireframes and high-fidelity desktop designs in Figma."],
      ["Process",["Wireframes first: they set the page order of headline and call to action, overview, services, about, and a booking form.","Then high-fidelity designs: imagery, color and type were added to guide attention and make each service easy to read."]],
      ["Outcome","Completed wireframes and final desktop interface designs for the website. The website is not currently live."],
      ["What I learned","The process moved from organizing information in the wireframes to refining visual hierarchy and service communication in the final designs: structure decided what content goes where, then imagery, color and contrast decided what is seen first and how visitors find the booking and contact paths."]] }
];

/* ===== RENDER CARDS ===== */
const grid = document.getElementById("projects");
const facts = p => `<dl class="facts"><div><dt>Role</dt><dd>${p.role}</dd></div><div><dt>Tools</dt><dd>${p.tl}</dd></div><div><dt>Type</dt><dd>${p.type}</dd></div></dl>`;
/* GETT SMART cover: three screens, clear hierarchy (homepage > lesson > quiz). Course overview lives in the dialog. */
const gsFrame = (cls,f,alt) => `<figure class="g ${cls}"><div class="frame">${pic(f,alt,"(max-width:820px) 92vw, 360px")}</div></figure>`;
const ARW_A = '<svg viewBox="0 0 60 40" aria-hidden="true"><path d="M3 6c22-5 42 3 49 25"/><path d="M41 25l11 8 3-13"/></svg>';
const ARW_B = '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M3 6c16-3 28 3 31 24"/><path d="M25 24l9 8 5-11"/></svg>';
const gsCover = () => `<div class="gs"><div class="gs-in">${gsFrame("g-home","gettsmart-home","GETT SMART homepage with Start Learning buttons")}${gsFrame("g-less","gettsmart-video-lesson","GETT SMART video lesson with lesson sidebar and previous / next navigation")}${gsFrame("g-quiz","gettsmart-quiz","GETT SMART lesson quiz with Check button")}<span class="gn gn1" aria-hidden="true">Start Learning${ARW_A}</span><span class="gn gn2" aria-hidden="true">guided lessons${ARW_B}</span></div></div>`;
const visual = p => p.id==="quickvent"
  ? `<div class="boards shot">${pic("quickvent-wireframes","QuickVent low-fidelity wireframes",CARD_SZ)}${pic("quickvent-final-design","QuickVent final high-fidelity Figma designs",CARD_SZ)}</div>`
  : p.featured ? gsCover()
  : `<div class="frame shot">${pic(p.main,p.alt,CARD_SZ)}</div>`;
PROJECTS.forEach((p,i)=>{
  const k = p.featured ? 0 : i+1;
  grid.insertAdjacentHTML("beforeend",`<article class="proj p${k} rv">
    <div>${visual(p)}</div>
    <div><span class="tag">${p.n}${p.featured?" · FEATURED":""}</span><h3>${p.title}</h3>${facts(p)}
    <button class="btn" data-id="${p.id}" aria-haspopup="dialog">${p.btn}</button></div></article>`);
});
/* Missing card image -> tidy typographic tile (no placeholder wording) */
try{ grid.querySelectorAll(".frame img").forEach(im=>{
  const fb=()=>{const t=document.createElement("div");t.className="tcard";t.setAttribute("aria-hidden","true");t.textContent=im.closest("article").querySelector("h3").textContent;im.closest(".frame").replaceWith(t)};
  im.addEventListener("error",()=>{ if(!retry(im)) fb(); }); if(im.complete&&im.naturalWidth===0&&!retry(im)) fb();
}); }catch(e){}
/* Optional portrait: hide the Polaroid until assets/images/rheyya-portrait.webp exists */
const pf=document.querySelector(".polaroid img");
try{ if(pf){const hide=()=>pf.closest(".polaroid").remove(); pf.addEventListener("error",hide); if(pf.complete&&pf.naturalWidth===0) hide();} }catch(e){}

/* ===== PROJECT SHEET (native <dialog>: focus trap + Esc built in) ===== */
const sheet = document.getElementById("sheet");
let opener;
const fig = (f,alt,cap) => `<figure><div class="frame"><button type="button" class="zoom" data-src="${IMG(f)}" data-alt="${alt}" aria-label="Enlarge image: ${alt}">${pic(f,alt,DLG_SZ)}</button></div><figcaption>${cap}</figcaption></figure>`;
/* GETT SMART case-study extras: injected after the named section */
const GSX = {
  "My role and responsibilities": () => `<figure class="hero-fig">${fig("gettsmart-home","GETT SMART homepage with the headline Empowering Returning Citizens Through Technology","The homepage: the mission and a clear path to start learning.")}</figure>`,
  "Interface decisions and rationale": () => `<h4>Learner journey</h4><div class="jgrid">
    ${fig("gettsmart-courses","Explore Our Courses grid showing chapters 1 to 3","1 · Course discovery: chapters as cards, each with a Continue Study button.")}
    ${fig("gettsmart-video-lesson","Video lesson page with lesson sidebar and previous / next controls","2 · Lesson: video with the sidebar and previous / next controls.")}
    ${fig("gettsmart-quiz","Lesson quiz with a multiple-choice question and Check button","3 · Quiz: a question set with a single Check action.")}
    ${fig("gettsmart-course-content","Course content page listing each lesson with its video, reading and quiz","4 · Continue learning: the lesson list shows every video, reading and quiz.")}</div>
    <h4>Annotated lesson screen</h4>
    <figure class="annot"><div class="frame"><div class="pinwrap"><button type="button" class="zoom" data-src="${IMG("gettsmart-video-lesson")}" data-alt="Video lesson page with lesson sidebar, previous and next lesson controls, and breadcrumb" aria-label="Enlarge image: annotated lesson screen">${pic("gettsmart-video-lesson","Video lesson page with lesson sidebar, previous and next lesson controls, and breadcrumb",DLG_SZ)}</button>
    <span class="pin" style="left:21%;top:28%" aria-hidden="true">1</span><span class="pin" style="left:80.5%;top:3%" aria-hidden="true">2</span><span class="pin" style="left:65.5%;top:42%" aria-hidden="true">3</span></div></div>
    <figcaption>One lesson screen, three interface elements.</figcaption></figure>
    <ol class="legend"><li><strong>Lesson sidebar.</strong> Lists every lesson in the chapter with a status marker, so learners can see where they are.</li><li><strong>Previous / Next Lesson.</strong> Moves learners through the chapter in order.</li><li><strong>Breadcrumb.</strong> Names the chapter and the current item.</li></ol>`,
  "A real technical problem I solved": () => `<div class="par"><div><b>Problem</b><p>Some lesson images hosted through Google Drive were not loading reliably.</p></div><div><b>Action</b><p>I migrated the lesson image assets to Supabase Storage.</p></div><div><b>Result</b><p>Lesson images were migrated to Supabase Storage, replacing the unreliable Google Drive delivery method.</p></div></div>`
};
const JSX = {
  "Project overview": () => fig("jsi-home","Just Smash It homepage with a smash burger on a bright yellow background and Order Now and View Menu buttons","The homepage: burger photography on the brand's yellow, with Order Now and View Menu buttons."),
  "Why I designed it this way": () => `<div class="dec"><div><b>Decision 1 · Making the menu visual</b><p>I included photographs of the restaurant's actual menu items so visitors could see the food while browsing. My goal was to make the menu more engaging and help customers explore their options beyond written descriptions.</p><span class="goal">Goal: food discovery</span></div>${fig("jsi-menu","Menu section showing photographs of the single, double and triple beef burgers with descriptions","Menu: a photograph of each burger sits above its description.")}</div>
  <div class="dec"><div><b>Decision 2 · Showcasing community support</b><p>I added an image carousel featuring celebrities who visited and supported the restaurant. My goal was to highlight the restaurant's personality, showcase community support, and encourage visitors to connect with the business on social media.</p><span class="goal">Goal: brand and community storytelling</span></div>${fig("jsi-locations-social","Locations and Follow Us On Social Media section with a photo carousel and social icons","Social section: a photo carousel with Instagram and TikTok icons beneath it.")}</div>`
};
const XT = {"gett-smart":GSX,"just-smash-it":JSX};
function open(id, push=true){
  const p = PROJECTS.find(x=>x.id===id); if(!p) return;
  const list = v => Array.isArray(v) ? `<ul>${v.map(s=>`<li>${s}</li>`).join("")}</ul>` : v.includes("|") ? (([t,...r])=>`<p><strong>${t}</strong></p><ul>${r.map(s=>`<li>${s}</li>`).join("")}</ul>`)(v.split("|")) : `<p>${v}</p>`;
  const X = XT[p.id]; const sec = ([h,v]) => `<h3>${h}</h3>${v?list(v):""}${X&&X[h]?X[h]():""}`;
  const at = p.sections.findIndex(s=>s[0]==="Outcome");
  const shots = p.shots.map(([f,a,c])=>fig(f,a,c)).join("");
  const body = X ? p.sections.map(sec).join("") : `${p.sections.slice(0,at).map(sec).join("")}
    <h3 class="vh">${p.pair?"Wireframe → final design":"Screens"}</h3><div class="shots${p.pair?" pair":""}">${shots}</div>
    ${p.after?`<h3>What changed</h3><ol>${p.after.map(s=>`<li>${s}</li>`).join("")}</ol>`:''}
    ${p.sections.slice(at).map(sec).join("")}`;
  sheet.innerHTML = `<button class="x" data-close aria-label="Close case study">Close ✕</button><div class="sheet">
    <p class="cat">${p.cat}</p><h2 id="sheet-title">${p.title}</h2>${facts(p)}
    ${body}
    <p style="margin-top:2rem">${p.live?`<a class="btn" href="${p.live}" target="_blank" rel="noopener noreferrer">Visit Live Site ↗</a>`:''}</p></div>`;
  sheet.querySelectorAll(".shots img").forEach(im=>im.addEventListener("error",()=>{ if(retry(im)) return;
    im.closest("figure").remove(); const s=sheet.querySelector(".shots");
    if(s && !s.children.length){ s.previousElementSibling.remove(); s.remove(); }
  }));
  sheet.classList.toggle("wide",!!p.pair); (sheet.showModal?sheet.showModal():sheet.setAttribute("open","")); sheet.scrollTop = 0;
  if(push) history.replaceState(null,"","#"+id);
}
grid.addEventListener("click",e=>{const b=e.target.closest("[data-id]"); if(b){opener=b; open(b.dataset.id);}});
sheet.addEventListener("click",e=>{ if(e.target===sheet || e.target.closest("[data-close]")) sheet.close(); });
sheet.addEventListener("close",()=>{ history.replaceState(null,"","#work"); opener && opener.focus(); });

const h = location.hash.slice(1); if(PROJECTS.some(p=>p.id===h)) open(h,false);

/* ===== LIGHTBOX: enlarge dialog screenshots (full-size file, contain, gallery per project) ===== */
const lb = document.getElementById("lightbox"), lbImg = lb.querySelector("img"), lbCap = lb.querySelector("figcaption");
const lbPrev = lb.querySelector(".lb-prev"), lbNext = lb.querySelector(".lb-next");
let items = [], cur = 0, lbOpener = null;
function show(i){
  cur = (i + items.length) % items.length; const it = items[cur];
  lbImg.src = it.src; lbImg.alt = it.alt; lbCap.textContent = it.cap;
  lbPrev.hidden = lbNext.hidden = items.length < 2;
}
sheet.addEventListener("click",e=>{
  const b = e.target.closest(".zoom"); if(!b) return;
  const seen = new Set(); items = [];
  sheet.querySelectorAll(".zoom").forEach(x=>{ if(!seen.has(x.dataset.src)){ seen.add(x.dataset.src);
    items.push({src:x.dataset.src, alt:x.dataset.alt, cap:(x.closest("figure")?.querySelector("figcaption")?.textContent||"").trim()}); }});
  lbOpener = b; show(items.findIndex(i=>i.src===b.dataset.src));
  document.body.classList.add("lb-open"); (lb.showModal?lb.showModal():lb.setAttribute("open",""));
});
lb.addEventListener("click",e=>{
  if(e.target.closest(".lb-x")) return lb.close();
  if(e.target.closest(".lb-prev")) return show(cur-1);
  if(e.target.closest(".lb-next")) return show(cur+1);
  if(!e.target.closest("img,figcaption")) lb.close();
});
lb.addEventListener("keydown",e=>{ if(items.length>1){ if(e.key==="ArrowLeft") show(cur-1); if(e.key==="ArrowRight") show(cur+1); } });
let tx = null;
lb.addEventListener("touchstart",e=>{ tx = e.touches[0].clientX; },{passive:true});
lb.addEventListener("touchend",e=>{ if(tx===null||items.length<2) return; const dx = e.changedTouches[0].clientX - tx; tx = null; if(Math.abs(dx)>60) show(cur + (dx<0?1:-1)); },{passive:true});
lb.addEventListener("close",()=>{ document.body.classList.remove("lb-open"); lbImg.removeAttribute("src"); if(lbOpener && sheet.open) lbOpener.focus(); });

/* ===== TOOLKIT (add matching SVGs to assets/icons/; missing files show a placeholder) ===== */
const TOOLS=[["figma","Figma","my favorite ✦"],["wordpress","WordPress"],["elementor","Elementor"],["html","HTML5"],["css","CSS3"],["javascript","JavaScript"],["supabase","Supabase"],["github","GitHub"],["hostinger","Hostinger"]];
const tl=document.getElementById("tools");
TOOLS.forEach(([f,n,note])=>{
  tl.insertAdjacentHTML("beforeend",`<li class="tool"><img src="assets/icons/${f}.svg" alt="" width="44" height="44" loading="lazy"><span>${n}</span>${note?`<span class="note" aria-hidden="true">${note}</span>`:""}</li>`);
  const img=tl.lastElementChild.querySelector("img");
  const fb=()=>{const s=document.createElement("span");s.className="ico";s.setAttribute("aria-hidden","true");s.textContent=n.slice(0,2);img.replaceWith(s)};
  img.addEventListener("error",fb); if(img.complete&&img.naturalWidth===0) fb();
});

/* ===== MOBILE MENU ===== */
const mb = document.querySelector(".menu-btn"), nav = document.getElementById("menu");
mb.addEventListener("click",()=>{const o=nav.classList.toggle("open"); mb.setAttribute("aria-expanded",o);});
nav.addEventListener("click",e=>{ if(e.target.tagName==="A"){nav.classList.remove("open"); mb.setAttribute("aria-expanded",false);} });

/* ===== COPY EMAIL ===== */
const cp = document.getElementById("copy"), cmsg = document.getElementById("copied");
cp.addEventListener("click",async()=>{
  const email = cp.dataset.email; let ok = false;
  try{ await navigator.clipboard.writeText(email); ok = true; }
  catch{ try{ const t=document.createElement("textarea"); t.value=email; t.setAttribute("readonly",""); t.style.cssText="position:fixed;opacity:0"; document.body.appendChild(t); t.select(); ok=document.execCommand("copy"); t.remove(); cp.focus(); }catch{} }
  cmsg.textContent = ok ? "Email copied!" : email;   /* if copying is blocked, show the address to copy by hand */
  clearTimeout(cp._t); cp._t = setTimeout(()=>cmsg.textContent="",5000);
});

/* ===== SCROLL REVEAL ===== */
const els = document.querySelectorAll(".rv, .tool");
els.forEach(el=>el.classList.add("rv"));
if("IntersectionObserver" in window){
  const io = new IntersectionObserver(es=>es.forEach(x=>{ if(x.isIntersecting){x.target.classList.add("in"); io.unobserve(x.target);} }),{threshold:.12});
  document.querySelectorAll(".rv").forEach(el=>io.observe(el));
} else document.querySelectorAll(".rv").forEach(el=>el.classList.add("in"));
