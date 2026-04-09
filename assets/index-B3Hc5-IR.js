(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={mainLink:`https://www.profitablecpmratenetwork.com/g5idm8qn?key=aafc3f9588fc543c62d75bf88ea3213c`};firebase.initializeApp({apiKey:`AIzaSyBviGRSkspC3qOD5EiQLHgqeQr1XPzDJh4`,authDomain:`niskalaproject-47064.firebaseapp.com`,databaseURL:`https://niskalaproject-47064-default-rtdb.asia-southeast1.firebasedatabase.app`,projectId:`niskalaproject-47064`,storageBucket:`niskalaproject-47064.firebasesetorage.app`,messagingSenderId:`776459290689`,appId:`1:776459290689:web:5df01e4b6b5a7a5d0c1ec0`,measurementId:`G-YWMECXQLRM`});var t=firebase.database();t.ref(`totalDownloads`).on(`value`,e=>{let t=(e.val()||0).toLocaleString()+`+`;document.querySelectorAll(`.live-dl-count`).forEach(e=>{e.innerText=t,e.classList.add(`pop`),setTimeout(()=>e.classList.remove(`pop`),300)})});var n={v1:{title:`NISKALA GRAPHICS V1 🔥`,image:`images/v1.jpg`,desc:`Grafik standar Niskala untuk SA-MP PC. Memberikan kesan visual yang lebih hidup tanpa menguras FPS.`,features:[`Color Correction`,`SAMP Optimized`,`Low-End PC Support`,`Visual Vitality`],downloadUrl:e.mainLink,fileUrl:`https://www.mediafire.com/file/o2z1tx501og4v1k/v1_Ivann.rar/file`},v6:{title:`NISKALA GRAPHICS V6 💀`,image:`images/v6.png`,desc:`ULTRA REALISTIC GRAPHICS. Khusus PC Spek Tinggi. Menggunakan shader tercanggih untuk SA-MP.`,features:[`Ray-Tracing Shaders`,`Dynamic Reflections`,`Advanced Physics`,`High Spec PC Only`],downloadUrl:e.mainLink,fileUrl:`https://www.mediafire.com/file/29oe7c1jfh4j70v/v6_Ivann_%28pc_kentang_jangan_coba%29.rar/file`},v8:{title:`NISKALA NIGHT VISUALS V8 🏮`,image:`images/v8.png`,desc:`Modifikasi pencahayaan malam hari. Membuat suasana kota di SA-MP menjadi lebih sinematik.`,features:[`Neon Glow FX`,`Night Bloom`,`Cinematic Atmosphere`,`PC SA-MP Optimized`],downloadUrl:e.mainLink,fileUrl:`https://www.mediafire.com/file/e0agek9pgvj4mjn/v8_Ivann.rar/file`},v13:{title:`NISKALA ULTIMATE V13 ✨`,image:`images/v13.jpg`,desc:`Edisi Ulang Tahun. Menggabungkan optimasi grafik terbaik dari seluruh seri Niskala untuk PC.`,features:[`Master Graphics Pack`,`Universal PC Compatibility`,`Maximum Visuals`,`SAMP Stable`],downloadUrl:e.mainLink,fileUrl:`https://www.mediafire.com/file/qhbsspszjwxdzj9/v13_Ivann.rar/file`},v2:{title:`NISKALA TEXTURES V2 ⚡`,image:`images/v2.png`,desc:`Remaster tekstur lingkungan dasar. Upgrade tekstur dinding dan bangunan menjadi lebih tajam.`,features:[`HD Building Textures`,`Environment Remaster`,`No FPS Drop`,`Sharper Visuals`],downloadUrl:e.mainLink,fileUrl:`https://www.mediafire.com/file/p647c5z4c88fvsx/v2_Ivann.rar/file`},v4:{title:`NISKALA TEXTURES V4 🎨`,image:`images/v4.png`,desc:`Tekstur dengan gaya artistik unik. Mengubah seluruh dunia SA-MP menjadi lebih berwarna.`,features:[`Artistic Textures`,`Unique Color Palette`,`High FPS Optimized`,`Fun Visual Style`],downloadUrl:e.mainLink,fileUrl:`https://www.mediafire.com/file/56b42ex67gqphfz/v4_Ivann%28cartoon_njir%29%282%29.rar/file`},v10:{title:`NISKALA TEXTURES V10 🏢`,image:`images/v10.png`,desc:`Fokus pada tekstur gedung pemerintahan dan area publik agar lebih realistis untuk Roleplay.`,features:[`Modern Office Textures`,`Public Area HD`,`Building Realism`,`PC SAMP Only`],downloadUrl:e.mainLink,fileUrl:`https://www.mediafire.com/file/v2tterxtqqwnmfg/v10_Ivann.rar/file`},v11:{title:`NISKALA TEXTURES V11 🏙️`,image:`images/v11.png`,desc:`Optimasi tekstur pusat kota (Downtown) untuk mengurangi lag sambil meningkatkan kualitas visual.`,features:[`Downtown Remaster`,`Optimized VRAM Usage`,`High Detail Walls`,`SAMP Stable`],downloadUrl:e.mainLink,fileUrl:`https://www.mediafire.com/file/aj9kfim6mvfbhk3/v11_Ivann.rar/file`},v3:{title:`NISKALA ROADS V3 🛣️`,image:`images/v3.png`,desc:`Peningkatan tekstur jalanan utama. Memberikan efek aspal yang lebih nyata dan detail.`,features:[`Realistic Asphalt`,`Road Detail V1`,`Complex Pavement`,`No Texture Glitch`],downloadUrl:e.mainLink,fileUrl:`https://www.mediafire.com/file/4vle2shvgpgppmx/v3_Ivann.rar/file`},v7:{title:`NISKALA ROADS V7 🏁`,image:`images/v7.png`,desc:`Tekstur jalanan balap dan trotoar. Detail markah jalan yang lebih jelas untuk navigasi.`,features:[`Sidewalk HD`,`Nav Lines Detail`,`High Quality Pavement`,`PC SA-MP Optimized`],downloadUrl:e.mainLink,fileUrl:`https://www.mediafire.com/file/6ldpgyusmd96gf3/v7_Ivann.rar/file`},v9:{title:`NISKALA ROADS V9 ✨`,image:`images/v9.png`,desc:`Pack jalanan dengan efek basah/refleksi. Sangat cocok dipadukan dengan mod grafik visual.`,features:[`Wet Road FX`,`Reflection Support`,`Road HQ Textures`,`Visual Synergy`],downloadUrl:e.mainLink,fileUrl:`https://www.mediafire.com/file/zgi7h14y5p30but/v9_Ivann.rar/file`},v12:{title:`NISKALA ROADS V12 🌉`,image:`images/v12.png`,desc:`Upgrade tekstur jembatan dan jalan layang. Memberikan tampilan infrastruktur yang lebih modern.`,features:[`Bridge Textures HD`,`Infras Remaster`,`Modern Look`,`PC SAMP PC Only`],downloadUrl:e.mainLink,fileUrl:`https://www.mediafire.com/file/50k2zkobofe01yo/v12_Ivann.rar/file`},v5:{title:`NISKALA ROADS V5 🏆`,image:`images/v5.jpg`,desc:`Kompilasi tekstur jalanan terbaik Niskala. Tekstur aspal paling realistis yang pernah ada.`,features:[`Expert Road Pack`,`Ultra Realism Asphalt`,`Comprehensive Detail`,`Max Compatibility`],downloadUrl:`https://www.profitablecpmratenetwork.com/g5idm8qn?key=aafc3f9588fc543c62d75bf88ea3213c`,fileUrl:`https://www.mediafire.com/file/bkw41eu6kp3m13l/v5_Ivann.rar/file`}},r=!1;window.navigate=e=>{document.querySelectorAll(`.section`).forEach(e=>e.classList.remove(`active`)),document.getElementById(e).classList.add(`active`),window.scrollTo({top:0,behavior:`smooth`})},window.openMod=e=>{let t=n[e],r=Object.keys(n).filter(t=>t!==e).slice(0,3),i=document.getElementById(`mod-content`);i.innerHTML=`
        <div class="mod-showcase">
            <div class="showcase-main">
                <img src="${t.image}" alt="${t.title}">
                
                <div class="stats-grid">
                    <div class="stat-box"><span>Community Download</span><strong class="live-dl-count">...</strong></div>
                    <div class="stat-box"><span>Status</span><strong>Verified Safe</strong></div>
                </div>

                <h2 style="font-family: 'Space Grotesk'; font-size: 2rem; margin-bottom: 1rem;">DESKRIPSI</h2>
                <p style="color: var(--text-dim); margin-bottom: 2rem;">${t.desc}</p>
                
                <h2 style="font-family: 'Space Grotesk'; font-size: 2rem; margin-bottom: 1rem;">FITUR UNGGULAN</h2>
                <ul style="color: var(--text-dim); margin-left: 1.5rem; line-height: 2;">
                    ${t.features.map(e=>`<li>${e}</li>`).join(``)}
                </ul>

                <div class="related-section">
                    <h2 style="font-family: 'Space Grotesk'; font-size: 1.5rem;">MUNGKIN ANDA SUKA</h2>
                    <div class="related-grid">
                        ${r.map(e=>`
                            <div class="mod-card" onclick="openMod('${e}')" style="min-height: 200px;">
                                <div class="mod-media"><img src="${n[e].image}"></div>
                                <div class="card-overlay">
                                    <h4 style="font-size: 1rem;">${n[e].title}</h4>
                                </div>
                            </div>
                        `).join(``)}
                    </div>
                </div>
            </div>
            
            <div class="showcase-sidebar">
                <div style="background: var(--bg-surface); border: 1px solid var(--glass-border); padding: 2.5rem; border-radius: var(--radius-lg); position: sticky; top: 8rem;">
                    <div class="urgent-tag">🔥 MOD TERPANAS 2026</div>
                    <div style="font-size: 0.7rem; color: var(--primary); font-weight: 700; letter-spacing: 2px; margin-bottom: 0.5rem;">DUKUNGAN RESMI RP</div>
                    <h1 style="font-family: 'Space Grotesk'; font-size: 1.8rem; line-height: 1.2; margin-bottom: 1.5rem;">${t.title}</h1>
                    
                    <button id="main-dl-btn" onclick="handleDownload('${t.downloadUrl}', '${t.fileUrl}', '${t.title}')" class="btn btn-primary" style="width: 100%; justify-content: center; margin-bottom: 0.5rem; font-weight: 800;">
                        ⬇ DOWNLOAD NOW (FREE) 🔥
                    </button>
                    
                    <div style="text-align: center; margin-bottom: 2rem;">
                        <span style="font-size: 0.7rem; color: var(--primary); font-weight: 700;">✔ Verified Safe • Updated 2026</span>
                    </div>
                    
                    <div style="text-align: center; margin-bottom: 2rem;">
                        <span style="font-size: 0.7rem; color: var(--accent); font-weight: 700;">⏳ LINK EXPIRES IN 24 HOURS</span>
                    </div>

                    <hr style="border: none; border-top: 1px solid var(--glass-border); margin: 2rem 0;">

                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        <button onclick="navigate('list-page')" class="btn btn-glass" style="width: 100%; justify-content: center;">
                            KEMBALI KE DAFTAR
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `,navigate(`detail-page`)},window.handleDownload=(e,n,r)=>{let i=document.getElementById(`download-tunnel`),a=document.getElementById(`countdown-text`),o=document.getElementById(`progress-fill`),s=document.getElementById(`load-status`),c=3,l=[`MENGHUBUNGKAN KE SERVER...`,`MELAKUKAN SCANNING VIRUS...`,`MEMPERSIAPKAN LINK AMAN...`];i.style.display=`flex`,o.style.width=`0%`;let u=setInterval(()=>{c--,a.innerText=c>=0?c:0;let d=(3-c)/3*100;o.style.width=`${d}%`,s.innerText=l[3-c-1]||`MENGALIHKAN...`,c<=0&&(clearInterval(u),t.ref(`totalDownloads`).transaction(e=>(e||0)+1),t.ref(`recentDownloads`).push({name:`Seseorang`,mod:r||`Mod Pack`,timestamp:firebase.database.ServerValue.TIMESTAMP}),setTimeout(()=>{i.style.display=`none`,window.open(e,`_blank`),window.location.href=n},500))},1e3)},document.body.addEventListener(`click`,()=>{r||=(window.open(e.mainLink,`_blank`),!0)},{once:!1});var i=!0;t.ref(`recentDownloads`).limitToLast(1).on(`child_added`,e=>{if(i){i=!1;return}let t=e.val(),n=document.getElementById(`live-activity-toast`),r=n.querySelector(`strong`),a=n.querySelector(`.user-avatar`),o=document.getElementById(`mod-name-toast`);r.innerText=t.name||`Seseorang`,a.innerText=(t.name||`S`)[0],o.innerText=t.mod||`Mod`,n.classList.add(`show`),setTimeout(()=>{n.classList.remove(`show`)},5e3)}),console.log(`Mod Platform Initialized - Real-time Activity Active! 🔥`);