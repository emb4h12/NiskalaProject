document.addEventListener('DOMContentLoaded', () => {
    // Preloader Logic with Progress
    const preloader = document.getElementById('preloader');

    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    let progress = 0;
    
    // Simulate loading progress
    const progressInterval = setInterval(() => {
        if (progress < 90) {
            progress += Math.random() * 5;
            if (progress > 90) progress = 90;
            updateProgress(progress);
        }
    }, 150)

    function updateProgress(val) {
        const rounded = Math.floor(val);
        if (progressBar) progressBar.style.width = `${rounded}%`;
        if (progressText) progressText.innerText = `${rounded}%`;
    }

    window.addEventListener('load', () => {
        clearInterval(progressInterval);
        progress = 100;
        updateProgress(progress);
        
        // Remove Exit animation for new transition
        const overlay = document.querySelector('.page-transition-overlay');
        if (overlay) overlay.classList.add('exit');
        
        setTimeout(() => {
            if (preloader) {
                preloader.classList.add('fade-out');
                // Trigger initial reveal animations
                setTimeout(() => {
                    document.querySelectorAll('.reveal').forEach(el => {
                        const rect = el.getBoundingClientRect();
                        if (rect.top < window.innerHeight) {
                            el.classList.add('active');
                        }
                    });
                }, 500);
            }
        }, 800);
    });

    // Fast Page Transition Logic
    const transitionLinks = document.querySelectorAll('a:not([target="_blank"]):not([href^="#"])');
    transitionLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const destination = link.href;
            if (destination && !destination.includes('javascript:void(0)')) {
                e.preventDefault();
                const overlay = document.querySelector('.page-transition-overlay');
                if (overlay) {
                    overlay.classList.remove('exit');
                    overlay.classList.add('active');
                }
                
                setTimeout(() => {
                    window.location.href = destination;
                }, 400); // Super fast transition
            }
        });
    });





    // 0. Custom Cursor Logic

    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const interactiveElements = document.querySelectorAll('a, button, .tab-btn');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // 0.1 Magnetic Button Effect
    const magneticBtns = document.querySelectorAll('.cta-btn');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0px, 0px)`;
        });
    });

    // 0.2 Interactive Mouse Trail
    const createTrail = () => {
        const trailContainer = document.createElement('div');
        trailContainer.className = 'mouse-trail';
        document.body.appendChild(trailContainer);

        window.addEventListener('mousemove', (e) => {
            if (Math.random() > 0.3) { // Performance optimization
                const particle = document.createElement('div');
                particle.className = 'trail-particle';
                particle.style.left = `${e.clientX}px`;
                particle.style.top = `${e.clientY}px`;
                
                // Randomize size slightly
                const size = Math.random() * 6 + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                trailContainer.appendChild(particle);
                setTimeout(() => particle.remove(), 800);
            }
        });
    };
    createTrail();

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');


    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Scroll Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 3. Category Tabs & Search Filtering
    const tabBtns = document.querySelectorAll('.tab-btn');
    const searchInput = document.getElementById('mod-search');
    let currentFilter = 'all';

    function applyFilter(filterValue, searchTerm = '') {
        currentFilter = filterValue;
        const allItems = document.querySelectorAll('.filter-item');
        const term = searchTerm.toLowerCase();

        allItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            const itemTitle = item.querySelector('h3').innerText.toLowerCase();
            const itemDesc = item.querySelector('p').innerText.toLowerCase();
            
            const matchesCategory = filterValue === 'all' || filterValue === itemCategory;
            const matchesSearch = itemTitle.includes(term) || itemDesc.includes(term);

            if (matchesCategory && matchesSearch) {
                item.style.display = 'flex';
                setTimeout(() => item.classList.add('active'), 50);
            } else {
                item.style.display = 'none';
                item.classList.remove('active');
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            applyFilter(currentFilter, e.target.value);
        });
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter');
            applyFilter(filterValue, searchInput ? searchInput.value : '');
        });
    });


    // 4. Hero Buttons Filtering
    const heroBtns = document.querySelectorAll('[data-hero-filter]');
    heroBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filterValue = btn.getAttribute('data-hero-filter');
            applyFilter(filterValue);
        });
    });

    // 5. Dynamic 3D Card Effect on Mouse Move
    const heroVisual = document.querySelector('.hero-visual');
    const glassCard = document.querySelector('.glass-card');
    
    if (heroVisual && glassCard && window.innerWidth > 900) {
        heroVisual.addEventListener('mousemove', (e) => {
            const rect = heroVisual.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate rotation amount based on mouse position
            const rotateX = ((y - centerY) / centerY) * -12;
            const rotateY = ((x - centerX) / centerX) * 12;
            
            // Apply transformation
            glassCard.style.animation = 'none';
            glassCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        heroVisual.addEventListener('mouseleave', () => {
            // Smoothly reset back to initial tilt
            glassCard.style.transition = 'transform 0.5s ease-out';
            glassCard.style.transform = `perspective(1000px) rotateX(5deg) rotateY(-15deg)`;
            
            setTimeout(() => {
                glassCard.style.transition = '';
                glassCard.style.animation = 'floatCard 6s ease-in-out infinite';
            }, 500);
        });
    }

    // Particles System
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        const particleCount = 80;

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor() {
                this.init();
            }

            init() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 0.8 - 0.4;
                this.speedY = Math.random() * 0.8 - 0.4;
                this.opacity = Math.random() * 0.4 + 0.1;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;
            }

            draw() {
                ctx.fillStyle = `rgba(168, 85, 247, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function createParticles() {
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        }

        createParticles();
        animate();
    }

    // DEBUG: Cek apakah script jalan
    console.log("Script EMB4H Loaded!");

    // Firebase Initializer
    let db = null;
    if (typeof firebase !== 'undefined') {
        const firebaseConfig = {
            apiKey: "AIzaSyDm_dmKG5W1RSsmanQnmFvYtwozePZYHYA",
            authDomain: "embahcomun.firebaseapp.com",
            projectId: "embahcomun",
            databaseURL: "https://embahcomun-default-rtdb.asia-southeast1.firebasedatabase.app",
            storageBucket: "embahcomun.firebasestorage.app",
            messagingSenderId: "16718796916",
            appId: "1:16718796916:web:f30fd2c96d83fa66431921",
            measurementId: "G-7NJDLQ8N9Y"
        };
        try {
            if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
            db = firebase.database();
            console.log("Firebase OK");
        } catch (e) { console.error("Firebase Error: " + e.message); }
    } else {
        console.error("Firebase SDK not found!");
    }

    // LOAD EXTRA CONTENT (MODPACKS & MODS) FROM FIREBASE
    function loadExtraContent() {
        if (!db) return;
        
        const extraModpackContainer = document.getElementById('extra-modpacks');
        const extraModsContainer = document.getElementById('extra-mods');
        const homeGrid = document.getElementById('latest-dynamic-grid');

        function createCardHTML(m, isReveal = true) {
            const fallbackImg = 'assets/v1.jpg'; // Placeholder if img is missing
            const dataString = btoa(JSON.stringify(m)); // Encode data for the click handler
            return `
                <div class="mod-card glass-panel filter-item ${isReveal ? 'reveal' : ''} active" 
                     data-category="${m.category}" 
                     onclick="openModModal('${dataString}')">
                    <div class="mod-thumbnail">
                        <div class="mod-image-placeholder" 
                             style="background-image: url('${m.img ? m.img : fallbackImg}');"
                             onerror="this.style.backgroundImage='url(${fallbackImg})'">
                        </div>
                    </div>
                    <div class="mod-content">
                        <h3>${m.nama || 'Untitled'}</h3>
                        <div class="mod-meta">Oleh: <span>${m.author || 'Unknown'}</span></div>
                        <p>${m.desc || 'No description provided.'}</p>
                        <a href="${m.link || '#'}" target="_blank" class="download-link" onclick="event.stopPropagation()">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                            Download
                        </a>
                    </div>
                </div>`;
        }

        // Modal Logic
        window.openModModal = function(encodedData) {
            const m = JSON.parse(atob(encodedData));
            const modal = document.getElementById('mod-modal');
            const fallbackImg = 'assets/v1.jpg';

            document.getElementById('modal-title').innerText = m.nama;
            document.getElementById('modal-author').innerText = `Oleh: ${m.author}`;
            document.getElementById('modal-desc').innerText = m.desc;
            document.getElementById('modal-cat').innerText = m.category.toUpperCase();
            document.getElementById('modal-img').style.backgroundImage = `url('${m.img ? m.img : fallbackImg}')`;
            document.getElementById('modal-download-btn').href = m.link;

            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scroll
        };

        const closeModModal = document.querySelector('#mod-modal .close-modal');
        if (closeModModal) {
            closeModModal.onclick = () => {
                document.getElementById('mod-modal').classList.remove('active');
                document.body.style.overflow = 'auto';
            };
        }
        
        // Close on click outside
        window.onclick = (e) => {
            const modModal = document.getElementById('mod-modal');
            const reviewModal = document.getElementById('review-modal');
            if (e.target === modModal) {
                modModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
            if (e.target === reviewModal) {
                reviewModal.classList.remove('active');
            }
        };


        if (extraModpackContainer) {
            db.ref('additional_modpacks').on('value', (snapshot) => {
                let html = '';
                snapshot.forEach((child) => {
                    html += createCardHTML(child.val());
                });
                extraModpackContainer.innerHTML = html;
                document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
            });
        }

        if (extraModsContainer) {
            db.ref('additional_mods').on('value', (snapshot) => {
                let html = '';
                snapshot.forEach((child) => {
                    html += createCardHTML(child.val());
                });
                extraModsContainer.innerHTML = html;
                document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
            });
        }

        // Home Page Latest Mods
        if (homeGrid) {
            db.ref('additional_modpacks').limitToLast(3).on('value', (snapshot) => {
                let html = '';
                snapshot.forEach((child) => {
                    html += createCardHTML(child.val());
                });
                homeGrid.innerHTML = html;
                document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
            });
        }
    }



    // Call dynamic loader if Firebase is ready
    if (db) loadExtraContent();

    // 10. ADSTERRA SMARTLINK INTERCEPTOR (STEP-BY-STEP)
    document.addEventListener('click', (e) => {
        const downloadLink = e.target.closest('.download-link');
        if (downloadLink) {
            e.preventDefault(); // Hentikan download langsung
            
            const realLink = downloadLink.href;
            const smartlink = "https://www.profitablecpmratenetwork.com/ie1c7b8i9?key=fcbfeff2da824c733d460629ff24972c";

            // Tahap 1: Buka Iklan di Tab Baru
            window.open(smartlink, '_blank');

            // Tahap 2: Redirect ke Link Download asli setelah jeda 1.5 detik
            // Ini memberi kesan "proses" dan memastikan iklan terbuka sempurna
            setTimeout(() => {
                window.location.href = realLink;
            }, 1500);
        }
    });

    // 11. ANTI-THEFT PROTECTION (DISABLE RIGHT CLICK & INSPECT)
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('keydown', (e) => {
        // Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
        if (
            e.keyCode === 123 || 
            (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || 
            (e.ctrlKey && e.keyCode === 85)
        ) {
            e.preventDefault();
            return false;
        }
    });

    // Custom Notification System
    let notifyInterval;
    function showNotification(msg, updateFunc = null) {
        const notify = document.getElementById('sys-notification');
        if (!notify) return;
        
        clearInterval(notifyInterval);
        notify.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            <span id="notify-msg">${msg}</span>
        `;
        notify.classList.add('show');
        
        if (updateFunc) {
            notifyInterval = setInterval(() => {
                const newMsg = updateFunc();
                if (newMsg) {
                    document.getElementById('notify-msg').innerText = newMsg;
                } else {
                    notify.classList.remove('show');
                    clearInterval(notifyInterval);
                }
            }, 1000);
        }

        setTimeout(() => {
            notify.classList.remove('show');
            clearInterval(notifyInterval);
        }, 5000);
    }

    // Review Modal Logic
    const modal = document.getElementById('review-modal');
    const openBtn = document.getElementById('open-review-modal');
    const closeBtn = document.querySelector('.close-modal');
    const reviewForm = document.getElementById('review-form');
    const submitBtn = document.getElementById('submit-review-btn');

    function getCooldown() {
        const cooldown = localStorage.getItem('review_cooldown');
        if (!cooldown) return 0;
        const remaining = parseInt(cooldown) - Date.now();
        return remaining > 0 ? remaining : 0;
    }

    function formatTime(ms) {
        const totalSeconds = Math.floor(ms / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        let timeStr = "";
        if (hours > 0) timeStr += `${hours} jam `;
        if (minutes > 0 || hours > 0) timeStr += `${minutes} menit `;
        timeStr += `${seconds} detik`;
        return timeStr;
    }

    if (openBtn && modal) {
        openBtn.addEventListener('click', () => {
            const remaining = getCooldown();
            if (remaining > 0) {
                showNotification(`Cooldown! Tunggu ${formatTime(remaining)} lagi.`, () => {
                    const rem = getCooldown();
                    return rem > 0 ? `Cooldown! Tunggu ${formatTime(rem)} lagi.` : null;
                });
                return;
            }
            modal.classList.add('active');
            // Reset modal UI
            reviewForm.style.display = 'block';
            if (document.querySelector('.modal-header')) document.querySelector('.modal-header').style.display = 'block';
            document.getElementById('modal-loader').classList.remove('active');
            document.getElementById('modal-success').classList.remove('active');
        });
        closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    }

    // Handle Submission
    if (submitBtn) {
        const modalLoader = document.getElementById('modal-loader');
        const modalSuccess = document.getElementById('modal-success');
        const modalHeader = document.querySelector('.modal-header');

        submitBtn.onclick = (e) => {
            e.preventDefault();
            
            const remaining = getCooldown();
            if (remaining > 0) {
                showNotification(`Tunggu ${formatTime(remaining)} lagi.`);
                return;
            }

            if (!db) {
                showNotification("Database belum siap!");
                return;
            }

            const name = document.getElementById('review-name').value.trim();
            const message = document.getElementById('review-message').value.trim();

            if (!name || !message) {
                showNotification("Isi Nama & Pesan dulu!");
                return;
            }

            // UI Transition to Loading
            reviewForm.style.display = 'none';
            if (modalHeader) modalHeader.style.display = 'none';
            modalLoader.classList.add('active');

            // Timeout safety (10 seconds)
            const timeoutId = setTimeout(() => {
                modalLoader.classList.remove('active');
                reviewForm.style.display = 'block';
                if (modalHeader) modalHeader.style.display = 'block';
                showNotification("Koneksi Timeout.");
            }, 10000);

            db.ref('reviews').push({
                name: name,
                msg: message,
                timestamp: firebase.database.ServerValue.TIMESTAMP
            }).then(() => {
                clearTimeout(timeoutId);
                
                // Set Cooldown (2 Hours)
                const cooldownTime = Date.now() + (2 * 60 * 60 * 1000);
                localStorage.setItem('review_cooldown', cooldownTime);

                // UI Transition to Success
                modalLoader.classList.remove('active');
                modalSuccess.classList.add('active');
                
                setTimeout(() => {
                    reviewForm.reset();
                    modal.classList.remove('active');
                }, 2000);
            }).catch(err => {
                clearTimeout(timeoutId);
                showNotification("GAGAL: " + err.message);
                reviewForm.style.display = 'block';
                if (modalHeader) modalHeader.style.display = 'block';
                modalLoader.classList.remove('active');
            });
        };

        // Support Enter on Textarea
        const msgField = document.getElementById('review-message');
        if (msgField) {
            msgField.onkeydown = (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    submitBtn.click();
                }
            };
        }
    }

    // Review Toast System (Firebase Integrated)
    const toastContainer = document.getElementById('review-toast');
    if (toastContainer) {
        let reviewsQueue = [];
        let currentReviewIndex = 0;
        let isShowing = false;

        // Listen for data from Firebase
        db.ref('reviews').limitToLast(20).on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                // Convert object to array and reverse to show newest first
                reviewsQueue = Object.values(data).reverse();
                if (!isShowing) {
                    isShowing = true;
                    showToast();
                }
            }
        });

        // Default backup reviews if database is empty
        const defaultReviews = [
            { name: "EMB4H", msg: "Selamat datang di website kami! Berikan ulasan Anda sekarang." }
        ];

        // Audio Notification
        const notifSound = new Audio('assets/notifulasan.mp3');
        
        // Unlock Audio for Browser (Runs once on first click)
        const unlockAudio = () => {
            notifSound.play().then(() => {
                notifSound.pause();
                notifSound.currentTime = 0;
            }).catch(() => {});
            window.removeEventListener('click', unlockAudio);
        };
        window.addEventListener('click', unlockAudio);

        function showToast() {
            const list = reviewsQueue.length > 0 ? reviewsQueue : defaultReviews;
            const review = list[currentReviewIndex];
            const initial = review.name.charAt(0);
            
            // Play Sound with reset
            notifSound.currentTime = 0;
            notifSound.play().catch(e => console.log("Audio play blocked. Click anywhere first."));

            toastContainer.innerHTML = `
                <div class="toast-card">
                    <div class="toast-avatar">${initial}</div>
                    <div class="toast-info">
                        <h4>${review.name}</h4>
                        <p id="typing-msg"></p>
                    </div>
                </div>
            `;

            toastContainer.classList.add('active');
            
            setTimeout(() => {
                toastContainer.classList.add('show');
                const msgElement = document.getElementById('typing-msg');
                const text = review.msg;
                let charIndex = 0;
                
                function type() {
                    if (charIndex < text.length) {
                        msgElement.textContent += text.charAt(charIndex);
                        charIndex++;
                        setTimeout(type, 40);
                    }
                }
                setTimeout(type, 500);
            }, 100);

            const waitTime = (review.msg.length * 40) + 5000;

            setTimeout(() => {
                toastContainer.classList.remove('show');
                setTimeout(() => {
                    toastContainer.classList.remove('active');
                    if (currentReviewIndex < list.length - 1) {
                        currentReviewIndex++;
                        // Delay before next toast
                        setTimeout(showToast, 4000);
                    } else {
                        // Stop showing and reset index for next data update
                        isShowing = false;
                        currentReviewIndex = 0;
                    }
                }, 800);
            }, waitTime);
        }
    }
});
