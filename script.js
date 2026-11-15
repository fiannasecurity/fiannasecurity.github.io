const experience = [
  {company:'ARCTIQ',location:'Nashville, TN',role:'Senior Security Analyst',dates:'2026 — PRESENT',tag:'PROMOTED · 2026',description:'Promoted from SOC Analyst to lead security monitoring and detection engineering across client environments. Served as the sole U.S.-based Senior SOC Analyst for client engagements, leading technical discussions and advising on security operations, threat detection, incident investigations, and detection strategy.',highlights:['Deployed a client-tailored detection to close a critical visibility gap, generating 400+ alerts in its first 21 days.','Designed and launched 30+ investigation runbooks in 60 days across SIEM and EDR platforms.','Use AI-assisted investigation to interpret commands and system activity, reducing average response time by 10 minutes per alert.']},
  {company:'ARCTIQ',location:'Nashville, TN',role:'SOC Analyst',dates:'2025 — 2026',tag:'PROMOTED TO SENIOR ANALYST',description:'Investigated and remediated incidents across SIEM, SOAR, and EDR platforms. Refined KQL, SPL, and UDM Search queries to strengthen hunting and detection across client environments.',highlights:['Worked across Splunk Enterprise Security and SOAR, Microsoft Sentinel and Defender XDR, Google SecOps, SentinelOne, and CrowdStrike Falcon.']},
  {company:'AGIO INC.',location:'Belfast, UK',role:'Cyber Security Analyst (XDR)',dates:'2022 — 2024',description:'Monitored SIEM telemetry, investigated threats, and coordinated client response. Applied MITRE ATT&CK to threat classification and supported endpoint, phishing, vulnerability, and patch management operations.',highlights:['Led tuning that eliminated 50,000+ false positives monthly, improving alert quality and MTTD.','Automated key workflows, saving up to 15% of analyst time on targeted alerts.','Triaged 10+ alerts daily and maintained SLA compliance; developed runbooks and trained incoming analysts.']},
  {company:'BUSINESS SERVICES ORG.',location:'Belfast, UK',role:'IT Technical Support Security · Placement',dates:'2020 — 2021',description:'Supported identity and access operations, remote access, and firewall controls during the pandemic.',highlights:['Managed IAM and remote access controls supporting 8,000+ health service users.']}
];
const tools = [
  {name:'CrowdStrike Falcon Complete',type:'MANAGED EDR · RESPONSE',image:'https://fireeye.market/assets/vendors/vxstream_crowdstrike/878dfabcd002af98ac0483e2f50ca61b1598d430/8b3a5b9c.logo_crowdstrike_2x.png',brand:'CS'},
  {name:'Microsoft Sentinel / Defender & Azure',type:'SIEM · XDR · CLOUD',image:'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',brand:'MS'},
  {name:'Splunk',type:'SIEM · SOAR',image:'https://upload.wikimedia.org/wikipedia/commons/1/1d/Splunk_logo.svg',brand:'S',className:'splunk-logo'},
  {name:'Google SecOps',type:'SIEM · SOAR',image:'https://seanthegeek.net/assets/images/google-secops-logo.webp',brand:'G'},
  {name:'SentinelOne',type:'EDR · SIEM',image:'https://mms.businesswire.com/media/20250429490914/en/2042532/5/SentinelOne_Logo.jpg',brand:'S1'},
  {name:'Trellix HX & NX',type:'EDR · SIEM',image:'https://www.arrow.com/globalecs-media/1hkijoke/trellix_logo.png',brand:'TX'},
  {name:'Stellar Cyber',type:'OPEN XDR',image:'https://mms.businesswire.com/media/20250520148815/en/1698844/22/SC_Horizontal_full-color_draft-1a_transparent_backgroun.jpg',brand:'SC'},
  {name:'Cortex XSOAR',type:'SOAR · AUTOMATION',image:'https://cdn.prod.website-files.com/6914bc46af7a937a5c07eea3/699a352562bb268f031fe55d_6936c53ba92dc516c3b1db38_Cortex_XSOAR_Logo.png',brand:'C'},
  {name:'Proofpoint Email Protection',type:'EMAIL SECURITY',image:'https://upload.wikimedia.org/wikipedia/commons/3/37/Proofpoint_R_Logo.png',brand:'P'},
  {name:'INKY Email Protection',type:'EMAIL SECURITY',image:'https://www.inky.com/hs-fs/hubfs/4CSPOT_INKY_LOGO_sm_border.png?name=4CSPOT_INKY_LOGO_sm_border.png&width=8350',brand:'INKY'},
  {name:'Joe Sandbox',type:'MALWARE ANALYSIS',image:'https://www.joesecurity.org/favicon.ico',brand:'JS'},
  {name:'ANY.RUN',type:'INTERACTIVE SANDBOX',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/ANY.RUN_Logo_%28Black%29.svg/1920px-ANY.RUN_Logo_%28Black%29.svg.png?_=20250316093035',brand:'ANY'}
];
const certifications = [
  {name:'CompTIA Security+',type:'COMPTIA · SECURITY',image:'https://upload.wikimedia.org/wikipedia/commons/6/62/Comptia-logo.svg',brand:'SEC+'},
  {name:'CompTIA CySA+',type:'COMPTIA · CYBERSECURITY ANALYST',image:'https://upload.wikimedia.org/wikipedia/commons/6/62/Comptia-logo.svg',brand:'CySA+'},
  {name:'Stellar Cyber Certified Associate',type:'STELLAR CYBER · SOC ANALYST',image:'https://mms.businesswire.com/media/20250520148815/en/1698844/22/SC_Horizontal_full-color_draft-1a_transparent_backgroun.jpg',brand:'SC'},
  {name:'TryHackMe SAL1',type:'SECURITY ANALYST LEVEL 1',image:'https://assets.tryhackme.com/img/logo/tryhackme_logo_full.svg',brand:'SAL1'},
  {name:'CISSP',type:'ISC2 · IN PROGRESS',image:'https://www.isc2.org/uploadedImages/%28ISC%292_Public_Content/About_ISC2/main%20logo.jpg',brand:'CISSP',status:'IN PROGRESS'}
];
const experienceRoot = document.querySelector('#experience-list');
function makeElement(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
experienceRoot.replaceChildren(...experience.map(job => {
  const article = makeElement('article', 'job');
  const company = makeElement('div', 'job-company', job.company);
  company.append(makeElement('span', '', job.location));
  const main = makeElement('div', 'job-main');
  main.append(makeElement('h3', '', job.role));
  main.append(makeElement('div', 'job-sub', 'SECURITY OPERATIONS'));
  main.append(makeElement('p', '', job.description));
  const highlights = makeElement('ul');
  job.highlights.forEach(item => highlights.append(makeElement('li', '', item)));
  main.append(highlights);
  const date = makeElement('div', 'job-date', job.dates);
  if (job.tag) date.append(makeElement('br'), makeElement('em', '', job.tag));
  article.append(company, main, date);
  return article;
}));
function populateCarousel(track, entries, codeLabel) {
  track.replaceChildren(...entries.map((entry,index) => {
    const card = makeElement('article', `tool-card ${codeLabel === 'CREDENTIAL' ? 'certification-card' : ''}`.trim());
    const logoTile = makeElement('div', 'logo-tile');
    const image = makeElement('img');
    image.src = entry.image;
    image.alt = `${entry.name} issuer logo`;
    if (entry.className) image.className = entry.className;
    image.loading = 'lazy';
    image.decoding = 'async';
    image.referrerPolicy = 'no-referrer';
    logoTile.append(image, makeElement('span', '', entry.brand));
    logoTile.lastElementChild.setAttribute('aria-hidden', 'true');
    card.append(logoTile, makeElement('span', 'tool-code', `${codeLabel} / ${String(index+1).padStart(2,'0')}`), makeElement('h3', '', entry.name), makeElement('p', '', entry.type));
    if (entry.status) card.append(makeElement('span', 'certification-status', entry.status));
    return card;
  }));
  Array.from(track.children).forEach(card => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.setAttribute('inert', '');
    track.append(clone);
  });
  track.querySelectorAll('.logo-tile img').forEach(image => {
    image.addEventListener('error', () => image.remove(), {once:true});
  });
}

const carousels = [
  {track:document.querySelector('#tool-grid'),entries:tools,position:document.querySelector('#carousel-position'),progress:document.querySelector('#carousel-progress')},
  {track:document.querySelector('#certification-grid'),entries:certifications,position:document.querySelector('#certification-position'),progress:document.querySelector('#certification-progress')}
];
carousels.forEach(({track,entries}) => populateCarousel(track, entries, track.id === 'tool-grid' ? 'PLATFORM' : 'CREDENTIAL'));
function getLoopWidth(track, count) {
  const original = track.children[0];
  const firstClone = track.children[count];
  return original && firstClone ? firstClone.getBoundingClientRect().left - original.getBoundingClientRect().left : 0;
}
function updateCarousel(carousel) {
  const {track,entries,position,progress} = carousel;
  const loopWidth = getLoopWidth(track, entries.length);
  const firstCard = track.querySelector('.tool-card');
  const cardStep = firstCard ? firstCard.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0) : 1;
  const loopPosition = loopWidth ? track.scrollLeft % loopWidth : 0;
  const start = (Math.floor(loopPosition / cardStep) % entries.length) + 1;
  const end = Math.min(entries.length, start + Math.max(0, Math.floor(track.clientWidth / cardStep)) - 1);
  position.textContent = `${String(start).padStart(2,'0')} — ${String(end).padStart(2,'0')} / ${entries.length}`;
  progress.value = loopWidth ? (loopPosition / loopWidth) * 100 : 100;
}
carousels.forEach(carousel => {
  carousel.track.addEventListener('scroll', () => updateCarousel(carousel), {passive:true});
  updateCarousel(carousel);
});
window.addEventListener('resize', () => carousels.forEach(updateCarousel));
let previousFrame = 0;
function animateCarousels(timestamp) {
  if (previousFrame && !document.hidden) {
    const elapsed = Math.min(timestamp - previousFrame, 50);
    carousels.forEach(({track,entries}) => {
      const container = track.parentElement;
      if (container.matches(':hover, :focus-within')) return;
      const loopWidth = getLoopWidth(track, entries.length);
      if (loopWidth > 0) {
        track.scrollLeft += elapsed * 0.04;
        if (track.scrollLeft >= loopWidth) track.scrollLeft -= loopWidth;
      }
    });
  }
  previousFrame = timestamp;
  requestAnimationFrame(animateCarousels);
}
document.addEventListener('visibilitychange', () => { previousFrame = 0; });
requestAnimationFrame(animateCarousels);
document.querySelector('#year').textContent = new Date().getFullYear();
