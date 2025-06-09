document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Popup functionality
    const popupOverlay = document.getElementById('popupOverlay');
    const popupClose = document.getElementById('popupClose');
    const popupBody = document.getElementById('popupBody');
    
    // Phase cards popup
    document.querySelectorAll('.phase-card').forEach(card => {
        card.addEventListener('click', function() {
            const phase = this.getAttribute('data-phase');
            showPhasePopup(phase);
        });
    });
    
    // Team cards popup
    document.querySelectorAll('.team-card').forEach(card => {
        card.addEventListener('click', function() {
            const member = this.getAttribute('data-member');
            showTeamPopup(member);
        });
    });
    
    // About more button
    const aboutMoreBtn = document.getElementById('aboutMoreBtn');
    if (aboutMoreBtn) {
        aboutMoreBtn.addEventListener('click', showAboutPopup);
    }
    
    // Close popup
    popupClose.addEventListener('click', closePopup);
    popupOverlay.addEventListener('click', function(e) {
        if (e.target === popupOverlay) {
            closePopup();
        }
    });
    
    // LightGallery initialization
    if (document.querySelector('.gallery-grid')) {
        lightGallery(document.querySelector('.gallery-grid'), {
            selector: '.gallery-item',
            download: false,
            counter: false
        });
    }
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your request. We will contact you soon.');
            this.reset();
        });
    }
    
    // Popup content functions
    function showPhasePopup(phase) {
        let title, content;
        
        switch(phase) {
            case '1':
                title = 'Phase 1: Infiltration';
                content = `
                    <h2>${title}</h2>
                    <p>The infiltration phase involved our operatives entering the target zone under deep cover. Key details:</p>
                    <ul>
                        <li>Duration: 72 hours</li>
                        <li>Entry method: Diplomatic cover</li>
                        <li>Primary objective: Establish surveillance</li>
                    </ul>
                    <img src="images/phase1.jpg" alt="Phase 1" style="width:100%; margin-top:20px; border-radius:8px;">
                `;
                break;
            case '2':
                title = 'Phase 2: Execution';
                content = `
                    <h2>${title}</h2>
                    <p>The execution phase was the most critical part of the operation:</p>
                    <ul>
                        <li>Precision strikes on 3 key targets</li>
                        <li>Electronic warfare deployed</li>
                        <li>Duration: 18 minutes</li>
                    </ul>
                    <img src="images/phase2.jpg" alt="Phase 2" style="width:100%; margin-top:20px; border-radius:8px;">
                `;
                break;
            case '3':
                title = 'Phase 3: Extraction';
                content = `
                    <h2>${title}</h2>
                    <p>The extraction was conducted under heavy enemy fire:</p>
                    <ul>
                        <li>Air extraction via helicopter</li>
                        <li>2 operatives wounded</li>
                        <li>All team members successfully evacuated</li>
                    </ul>
                    <img src="images/phase3.jpg" alt="Phase 3" style="width:100%; margin-top:20px; border-radius:8px;">
                `;
                break;
        }
        
        popupBody.innerHTML = content;
        popupOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function showTeamPopup(member) {
        let title, content;
        
        switch(member) {
            case '1':
                title = 'Agent Delta';
                content = `
                    <div style="display:flex; gap:30px; align-items:center; margin-bottom:20px;">
                        <img src="images/operative1.jpg" alt="${title}" style="width:150px; height:150px; object-fit:cover; border-radius:50%;">
                        <div>
                            <h2>${title}</h2>
                            <p style="color:var(--primary); font-weight:600;">Team Leader</p>
                        </div>
                    </div>
                    <p>Agent Delta led the operation with 15 years of special forces experience. Key skills:</p>
                    <ul>
                        <li>Expert in close-quarters combat</li>
                        <li>Fluent in 4 languages</li>
                        <li>Multiple covert operations completed</li>
                    </ul>
                `;
                break;
            case '2':
                title = 'Agent Echo';
                content = `
                    <div style="display:flex; gap:30px; align-items:center; margin-bottom:20px;">
                        <img src="images/operative2.jpg" alt="${title}" style="width:150px; height:150px; object-fit:cover; border-radius:50%;">
                        <div>
                            <h2>${title}</h2>
                            <p style="color:var(--primary); font-weight:600;">Sniper</p>
                        </div>
                    </div>
                    <p>Agent Echo provided overwatch with a confirmed 28 long-range eliminations. Specializations:</p>
                    <ul>
                        <li>Record shot: 1,428 meters</li>
                        <li>Expert in camouflage</li>
                        <li>Cold weather operations specialist</li>
                    </ul>
                `;
                break;
            case '3':
                title = 'Agent Foxtrot';
                content = `
                    <div style="display:flex; gap:30px; align-items:center; margin-bottom:20px;">
                        <img src="images/operative3.jpg" alt="${title}" style="width:150px; height:150px; object-fit:cover; border-radius:50%;">
                        <div>
                            <h2>${title}</h2>
                            <p style="color:var(--primary); font-weight:600;">Tech Specialist</p>
                        </div>
                    </div>
                    <p>Agent Foxtrot handled all technical aspects of the operation. Capabilities:</p>
                    <ul>
                        <li>Cyber warfare expert</li>
                        <li>Drone operations</li>
                        <li>Electronic surveillance</li>
                    </ul>
                `;
                break;
        }
        
        popupBody.innerHTML = content;
        popupOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function showAboutPopup() {
        popupBody.innerHTML = `
            <h2>Operation Sindoor: Full Briefing</h2>
            <p>Operation Sindoor was authorized under Presidential Directive 12-45 as a response to imminent threats against national security.</p>
            
            <h3 style="margin-top:30px;">Objectives</h3>
            <ul>
                <li>Neutralize high-value targets</li>
                <li>Retrieve classified intelligence</li>
                <li>Disrupt enemy communications</li>
            </ul>
            
            <h3 style="margin-top:30px;">Outcome</h3>
            <p>The operation was successfully completed in 72 hours with minimal casualties. Key results:</p>
            <ul>
                <li>3 HVTs eliminated</li>
                <li>12TB of intelligence recovered</li>
                <li>Enemy network disabled for 14 days</li>
            </ul>
            
            <img src="images/op-briefing.jpg" alt="Operation Briefing" style="width:100%; margin-top:20px; border-radius:8px;">
            
            <p style="margin-top:20px; font-size:0.8rem; color:#666;">
                <i>This document is classified TOP SECRET//NOFORN. Unauthorized disclosure is prohibited by law.</i>
            </p>
        `;
        popupOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closePopup() {
        popupOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});