// --- ADS CONFIGURATION ---
const ADS_CONFIG = {
    mainLink: "https://www.profitablecpmratenetwork.com/ie1c7b8i9?key=fcbfeff2da824c733d460629ff24972c"
};

// --- FIREBASE SETUP ---
// Ganti data di bawah ini dengan Firebase Config lo dari Google Console
const firebaseConfig = {
    apiKey: "AIzaSyBviGRSkspC3qOD5EiQLHgqeQr1XPzDJh4",
    authDomain: "niskalaproject-47064.firebaseapp.com",
    databaseURL: "https://niskalaproject-47064-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "niskalaproject-47064",
    storageBucket: "niskalaproject-47064.firebasesetorage.app",
    messagingSenderId: "776459290689",
    appId: "1:776459290689:web:5df01e4b6b5a7a5d0c1ec0",
    measurementId: "G-YWMECXQLRM"
};

// Initialize Firebase (Compat)
let database = null;
try {
    firebase.initializeApp(firebaseConfig);
    database = firebase.database();

    // Live Tracking: Update Tampilan Angka Download Global
    database.ref('totalDownloads').on('value', (snapshot) => {
        const count = snapshot.val() || 0;
        const formattedCount = count.toLocaleString() + "+";
        
        // Update semua elemen dengan class 'live-dl-count'
        document.querySelectorAll('.live-dl-count').forEach(el => {
            el.innerText = formattedCount;
            
            // Tambahkan efek pop animasi
            el.classList.add('pop');
            setTimeout(() => el.classList.remove('pop'), 300);
        });
    });
} catch (e) {
    console.warn("Firebase blocked by AdBlocker. Running base mode.");
    document.querySelectorAll('.live-dl-count').forEach(el => el.innerText = "1.5K+");
}

// Data Definition (Real Modpacks V1-V13 - Grafik, Tekstur, Jalanan PC Only)
const mods = {
    v1: {
        title: "NISKALA GRAPHICS V1 🔥",
        image: "images/v1.jpg",
        desc: "Grafik standar Niskala untuk SA-MP PC. Memberikan kesan visual yang lebih hidup tanpa menguras FPS.",
        features: ["Color Correction", "SAMP Optimized", "Low-End PC Support", "Visual Vitality"],
        downloadUrl: ADS_CONFIG.mainLink,
        fileUrl: "https://www.mediafire.com/file/o2z1tx501og4v1k/v1_Ivann.rar/file",
        category: "modpack",
        tag: "VERSI STABIL",
        size: "small"
    },
    v6: {
        title: "NISKALA GRAPHICS V6 💀",
        image: "images/v6.png",
        desc: "ULTRA REALISTIC GRAPHICS. Khusus PC Spek Tinggi. Menggunakan shader tercanggih untuk SA-MP.",
        features: ["Ray-Tracing Shaders", "Dynamic Reflections", "Advanced Physics", "High Spec PC Only"],
        downloadUrl: ADS_CONFIG.mainLink,
        fileUrl: "https://www.mediafire.com/file/29oe7c1jfh4j70v/v6_Ivann_%28pc_kentang_jangan_coba%29.rar/file",
        category: "modpack",
        tag: "SPEK ULTRA",
        size: "big"
    },
    v8: {
        title: "NISKALA NIGHT VISUALS V8 🏮",
        image: "images/v8.png",
        desc: "Modifikasi pencahayaan malam hari. Membuat suasana kota di SA-MP menjadi lebih sinematik.",
        features: ["Neon Glow FX", "Night Bloom", "Cinematic Atmosphere", "PC SA-MP Optimized"],
        downloadUrl: ADS_CONFIG.mainLink,
        fileUrl: "https://www.mediafire.com/file/e0agek9pgvj4mjn/v8_Ivann.rar/file",
        category: "mods",
        tag: "OPERASI MALAM",
        size: "small"
    },
    v13: {
        title: "NISKALA ULTIMATE V13 ✨",
        image: "images/v13.jpg",
        desc: "Edisi Ulang Tahun. Menggabungkan optimasi grafik terbaik dari seluruh seri Niskala untuk PC.",
        features: ["Master Graphics Pack", "Universal PC Compatibility", "Maximum Visuals", "SAMP Stable"],
        downloadUrl: ADS_CONFIG.mainLink,
        fileUrl: "https://www.mediafire.com/file/qhbsspszjwxdzj9/v13_Ivann.rar/file",
        category: "modpack",
        tag: "ULANG TAHUN",
        size: "big"
    },
    v2: {
        title: "NISKALA TEXTURES V2 ⚡",
        image: "images/v2.png",
        desc: "Remaster tekstur lingkungan dasar. Upgrade tekstur dinding dan bangunan menjadi lebih tajam.",
        features: ["HD Building Textures", "Environment Remaster", "No FPS Drop", "Sharper Visuals"],
        downloadUrl: ADS_CONFIG.mainLink,
        fileUrl: "https://www.mediafire.com/file/p647c5z4c88fvsx/v2_Ivann.rar/file",
        category: "modpack",
        tag: "REALISTIS",
        size: "small"
    },
    v4: {
        title: "NISKALA TEXTURES V4 🎨",
        image: "images/v4.png",
        desc: "Tekstur dengan gaya artistik unik. Mengubah seluruh dunia SA-MP menjadi lebih berwarna.",
        features: ["Artistic Textures", "Unique Color Palette", "High FPS Optimized", "Fun Visual Style"],
        downloadUrl: ADS_CONFIG.mainLink,
        fileUrl: "https://www.mediafire.com/file/56b42ex67gqphfz/v4_Ivann%28cartoon_njir%29%282%29.rar/file",
        category: "modpack",
        tag: "ARTISTIK",
        size: "small"
    },
    v10: {
        title: "NISKALA TEXTURES V10 🏢",
        image: "images/v10.png",
        desc: "Fokus pada tekstur gedung pemerintahan dan area publik agar lebih realistis untuk Roleplay.",
        features: ["Modern Office Textures", "Public Area HD", "Building Realism", "PC SAMP Only"],
        downloadUrl: ADS_CONFIG.mainLink,
        fileUrl: "https://www.mediafire.com/file/v2tterxtqqwnmfg/v10_Ivann.rar/file",
        category: "mods",
        tag: "UI FAKSI",
        size: "small"
    },
    v11: {
        title: "NISKALA TEXTURES V11 🏙️",
        image: "images/v11.png",
        desc: "Optimasi tekstur pusat kota (Downtown) untuk mengurangi lag sambil meningkatkan kualitas visual.",
        features: ["Downtown Remaster", "Optimized VRAM Usage", "High Detail Walls", "SAMP Stable"],
        downloadUrl: ADS_CONFIG.mainLink,
        fileUrl: "https://www.mediafire.com/file/aj9kfim6mvfbhk3/v11_Ivann.rar/file",
        category: "mods",
        tag: "PEMETAAN",
        size: "small"
    },
    v3: {
        title: "NISKALA ROADS V3 🛣️",
        image: "images/v3.png",
        desc: "Peningkatan tekstur jalanan utama. Memberikan efek aspal yang lebih nyata dan detail.",
        features: ["Realistic Asphalt", "Road Detail V1", "Complex Pavement", "No Texture Glitch"],
        downloadUrl: ADS_CONFIG.mainLink,
        fileUrl: "https://www.mediafire.com/file/4vle2shvgpgppmx/v3_Ivann.rar/file",
        category: "modpack",
        tag: "PETA JAKARTA",
        size: "small"
    },
    v7: {
        title: "NISKALA ROADS V7 🏁",
        image: "images/v7.png",
        desc: "Tekstur jalanan balap dan trotoar. Detail markah jalan yang lebih jelas untuk navigasi.",
        features: ["Sidewalk HD", "Nav Lines Detail", "High Quality Pavement", "PC SA-MP Optimized"],
        downloadUrl: ADS_CONFIG.mainLink,
        fileUrl: "https://www.mediafire.com/file/6ldpgyusmd96gf3/v7_Ivann.rar/file",
        category: "mods",
        tag: "MOBIL MEWAH",
        size: "small"
    },
    v9: {
        title: "NISKALA ROADS V9 ✨",
        image: "images/v9.png",
        desc: "Pack jalanan dengan efek basah/refleksi. Sangat cocok dipadukan dengan mod grafik visual.",
        features: ["Wet Road FX", "Reflection Support", "Road HQ Textures", "Visual Synergy"],
        downloadUrl: ADS_CONFIG.mainLink,
        fileUrl: "https://www.mediafire.com/file/zgi7h14y5p30but/v9_Ivann.rar/file",
        category: "mods",
        tag: "PACK MOTOR",
        size: "small"
    },
    v12: {
        title: "NISKALA ROADS V12 🌉",
        image: "images/v12.png",
        desc: "Upgrade tekstur jembatan dan jalan layang. Memberikan tampilan infrastruktur yang lebih modern.",
        features: ["Bridge Textures HD", "Infras Remaster", "Modern Look", "PC SAMP PC Only"],
        downloadUrl: ADS_CONFIG.mainLink,
        fileUrl: "https://www.mediafire.com/file/50k2zkobofe01yo/v12_Ivann.rar/file",
        category: "mods",
        tag: "MODERN HUD",
        size: "small"
    },
    v5: {
        title: "NISKALA ROADS V5 🏆",
        image: "images/v5.jpg",
        desc: "Kompilasi tekstur jalanan terbaik Niskala. Tekstur aspal paling realistis yang pernah ada.",
        features: ["Expert Road Pack", "Ultra Realism Asphalt", "Comprehensive Detail", "Max Compatibility"],
        downloadUrl: "https://www.profitablecpmratenetwork.com/g5idm8qn?key=aafc3f9588fc543c62d75bf88ea3213c",
        fileUrl: "https://www.mediafire.com/file/bkw41eu6kp3m13l/v5_Ivann.rar/file",
        category: "modpack",
        tag: "PAMUNGKAS",
        size: "small"
    }
};

// Global State
let adsTriggered = false;

// Navigation Logic
window.navigate = (sectionId) => {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(sectionId);
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if(sectionId === 'list-page') {
        renderMods('all');
    }
};

// Mod Rendering Logic with Categories
window.renderMods = (filterCategory) => {
    // Update active tab UI
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`filter-${filterCategory}`).classList.add('active');

    const grid = document.getElementById('mod-grid');
    grid.innerHTML = ''; // Kosongkan grid

    let delay = 0;
    
    Object.keys(mods).forEach((key) => {
        const mod = mods[key];
        
        // Cek kategori
        if(filterCategory === 'all' || mod.category === filterCategory) {
            const card = document.createElement('div');
            card.className = `mod-card card-${mod.size} animate-enter`;
            card.style.animationDelay = `${delay}s`;
            card.setAttribute('onclick', `openMod('${key}')`);
            
            card.innerHTML = `
                <div class="mod-media"><img src="${mod.image}" alt="${mod.title}"></div>
                <div class="card-overlay">
                    <div class="card-tag">${mod.tag}</div>
                    <h3>${mod.title.replace(/ .$/,"")}</h3> <!-- Hapus emoji terakhir di title card -->
                </div>
            `;
            
            grid.appendChild(card);
            delay += 0.1; // Staggered animation
        }
    });
};

// Initialize mods and event listeners
document.addEventListener('DOMContentLoaded', () => {
    if(document.getElementById('list-page').classList.contains('active')) {
        renderMods('all');
    }
    initMagneticButtons();
    
    // Explicitly bind the Explore Mod button just in case onclick fails
    const exploreBtn = document.querySelector('.btn-glass');
    if(exploreBtn) {
        exploreBtn.addEventListener('click', () => navigate('list-page'));
    }
});

// Open Mod Detail
window.openMod = (modKey) => {
    const mod = mods[modKey];
    const otherMods = Object.keys(mods).filter(k => k !== modKey).slice(0, 3);
    const detailContainer = document.getElementById('mod-content');
    
    detailContainer.innerHTML = `
        <div class="mod-showcase">
            <div class="showcase-main">
                <img src="${mod.image}" alt="${mod.title}">
                
                <div class="stats-grid">
                    <div class="stat-box"><span>Community Download</span><strong class="live-dl-count">...</strong></div>
                    <div class="stat-box"><span>Status</span><strong>Verified Safe</strong></div>
                </div>

                <h2 style="font-family: 'Space Grotesk'; font-size: 2rem; margin-bottom: 1rem;">DESKRIPSI</h2>
                <p style="color: var(--text-dim); margin-bottom: 2rem;">${mod.desc}</p>
                
                <h2 style="font-family: 'Space Grotesk'; font-size: 2rem; margin-bottom: 1rem;">FITUR UNGGULAN</h2>
                <ul style="color: var(--text-dim); margin-left: 1.5rem; line-height: 2;">
                    ${mod.features.map(f => `<li>${f}</li>`).join('')}
                </ul>

                <div class="related-section">
                    <h2 style="font-family: 'Space Grotesk'; font-size: 1.5rem;">MUNGKIN ANDA SUKA</h2>
                    <div class="related-grid">
                        ${otherMods.map(k => `
                            <div class="mod-card" onclick="openMod('${k}')" style="min-height: 200px;">
                                <div class="mod-media"><img src="${mods[k].image}"></div>
                                <div class="card-overlay">
                                    <h4 style="font-size: 1rem;">${mods[k].title}</h4>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <div class="showcase-sidebar">
                <div style="background: var(--bg-surface); border: 1px solid var(--glass-border); padding: 2.5rem; border-radius: var(--radius-lg); position: sticky; top: 8rem;">
                    <div class="urgent-tag">🔥 MOD TERPANAS 2026</div>
                    <div style="font-size: 0.7rem; color: var(--primary); font-weight: 700; letter-spacing: 2px; margin-bottom: 0.5rem;">DUKUNGAN RESMI RP</div>
                    <h1 style="font-family: 'Space Grotesk'; font-size: 1.8rem; line-height: 1.2; margin-bottom: 1.5rem;">${mod.title}</h1>
                    
                    <button id="main-dl-btn" onclick="handleDownload('${mod.downloadUrl}', '${mod.fileUrl}', '${mod.title}')" class="btn btn-primary" style="width: 100%; justify-content: center; margin-bottom: 0.5rem; font-weight: 800;">
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
    `;
    
    navigate('detail-page');
};

// Premium Monetization Tunnel Logic
window.handleDownload = (adUrl, fileUrl, modTitle) => {
    const tunnel = document.getElementById('download-tunnel');
    const countEl = document.getElementById('countdown-text');
    const fillEl = document.getElementById('progress-fill');
    const statusEl = document.getElementById('load-status');
    
    let count = 3;
    const statuses = [
        "MENGHUBUNGKAN KE SERVER...",
        "MELAKUKAN SCANNING VIRUS...",
        "MEMPERSIAPKAN LINK AMAN..."
    ];

    tunnel.style.display = 'flex';
    fillEl.style.width = '0%';
    
    const interval = setInterval(() => {
        count--;
        countEl.innerText = count >= 0 ? count : 0;
        
        // Update progress and status
        const progress = ((3 - count) / 3) * 100;
        fillEl.style.width = `${progress}%`;
        statusEl.innerText = statuses[3 - count - 1] || "MENGALIHKAN...";

        if(count <= 0) {
            clearInterval(interval);
            
            // Increment Firebase Counter (Global)
            if (database) {
                database.ref('totalDownloads').transaction((current) => {
                    return (current || 0) + 1;
                });

                // Record Recent Download (Global Activity)
                database.ref('recentDownloads').push({
                    name: "Seseorang", 
                    mod: modTitle || "Mod Pack",
                    timestamp: firebase.database.ServerValue.TIMESTAMP
                });
            }

            setTimeout(() => {
                tunnel.style.display = 'none';
                window.open(adUrl, '_blank');
                window.location.href = fileUrl;
            }, 500);
        }
    }, 1000);
};




// --- REAL-TIME LIVE ACTIVITY (Firebase Driven) ---
let initialLoad = true;
if (database) {
    database.ref('recentDownloads').limitToLast(1).on('child_added', (snapshot) => {
        // Skip data lama saat pertama kali load
        if (initialLoad) {
            initialLoad = false;
            return;
        }

        const data = snapshot.val();
        const toast = document.getElementById('live-activity-toast');
        const nameEl = toast.querySelector('strong');
        const avatarEl = toast.querySelector('.user-avatar');
        const modEl = document.getElementById('mod-name-toast');

        nameEl.innerText = data.name || "Seseorang";
        avatarEl.innerText = (data.name || "S")[0];
        modEl.innerText = data.mod || "Mod";

        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 5000);
    });
}

console.log('Mod Platform Initialized - Real-time Activity Active! 🔥');

// --- PREMIUM MAGNETIC INTERACTION (Disabled) ---
window.initMagneticButtons = () => {
    // Buttons are now static as requested
};

