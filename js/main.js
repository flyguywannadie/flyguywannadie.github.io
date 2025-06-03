// Typing effect
const typingText = document.getElementById('typing-text');
const words = ['Web Developer', 'Designer', 'Problem Solver'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 200;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typingDelay = 1000; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingDelay = 200;
    }

    setTimeout(type, isDeleting ? 100 : typingDelay);
}

// Start typing effect
setTimeout(type, typingDelay);

// Mobile navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle navigation
    nav.classList.toggle('nav-active');
    
    // Animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger animation
    burger.classList.toggle('toggle');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Page-specific functionality
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

// Home page functionality
if (currentPage === 'index.html') {
    const typingText = document.getElementById('typing-text');
    const words = ['Web Developer', 'Designer', 'Problem Solver'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 200;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingDelay = 1000; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingDelay = 200;
        }

        setTimeout(type, isDeleting ? 100 : typingDelay);
    }

    // Start typing effect
    setTimeout(type, typingDelay);
}

// Projects page functionality
if (currentPage === 'projects.html') {
    const projects = [
        {
            title: 'Ball Balancer',
            description: 'Made in Godot over 3 weeks for the Boss Rush Game Jam 2025. The game is about spinning evil balls on your finger.',
            media: {
                type: 'iframe',
                src: 'https://itch.io/embed/3280404?bg_color=C3C2AF&fg_color=222222&link_color=e30405&border_color=5b5b5b'
            },
            itchioLink: 'https://flyguywannadie.itch.io/ball-balancer',
            technologies: ['Godot', 'GDScript', 'Game Jam'],
            codeLink: '#'
        },
        {
            title: 'Jeffery\'s Adventure',
            description: 'Since finishing the capstone course, I have updated this project and plan to continue working on it.',
            media: {
                type: 'iframe',
                src: 'https://itch.io/embed/3127564?bg_color=809be0&fg_color=01091d&link_color=e8a900&border_color=686d8d'
            },
            itchioLink: 'https://flyguywannadie.itch.io/jeffery-adventure',
            technologies: ['Godot', 'GDScript', 'Game Development'],
            codeLink: 'projects/jefferys-adventure.html'
        },
        {
            title: 'Spectres and Spirits',
            description: 'Made in Unity over 2 weeks for the Going Indie Jam in 2024. The game is a small rougelite that has bullet hell elements.',
            media: {
                type: 'iframe',
                src: 'https://itch.io/embed/2714985?bg_color=76418a&fg_color=ffffff&link_color=59abe4&border_color=48345c'
            },
            itchioLink: 'https://jayvlyn.itch.io/spectres-and-spirits',
            technologies: ['Unity', 'C#', 'Bullet Hell', 'Roguelite', 'Game Jam'],
            codeLink: '#'
        },
        {
            title: 'Blood Drive',
            description: 'Destroy other cars in this retro styled blood fueled racing game. Made in Unity over 2 days for the Neumont 2024 Spring Game Jam.',
            media: {
                type: 'iframe',
                src: 'https://itch.io/embed/2675024?bg_color=1d1d24&fg_color=ffffff&link_color=fa5c5c&border_color=333333'
            },
            itchioLink: 'https://evilpufferfish.itch.io/blood-drive',
            technologies: ['Unity', 'C#', 'Racing Game', 'Game Jam'],
            codeLink: '#'
        },
        {
            title: 'BIG BLAST OF ULTIMATE MUSCLE',
            description: 'Flex your muscles and experience the power of friendship. Made in Unity over 2 days for the Neumont 2023 Winter Game Jam.',
            media: {
                type: 'iframe',
                src: 'https://itch.io/embed/2549088?bg_color=b3ebe7&fg_color=222222&link_color=de7100&border_color=11a9b9'
            },
            itchioLink: 'https://hotshotksw.itch.io/big-blast-of-ultimate-muscle',
            technologies: ['Unity', 'C#', 'Game Jam'],
            codeLink: '#'
        },
        {
            title: 'Squisher 64',
            description: 'Made in a custom built C++ Game Engine. Built as a successor to Squisher. The game is about squishing evil demons on the walls that surround you.<br>I added fake 3D rendering to it.',
            media: {
                type: 'image',
                src: 'images/Squisher64.png',
                alt: 'Screenshot from Squisher 64 game'
            },
            technologies: ['C++', 'Custom Engine', 'Game Development', '3D Rendering'],
            codeLink: '#'
        },
        {
            title: 'Brad To The Bone',
            description: 'Smash all the children\'s sand castles and get a new highscore. Made in Unity over 2 days for the Neumont 2023 Summer Game Jam.',
            media: {
                type: 'iframe',
                src: 'https://itch.io/embed/2228906?bg_color=f8d7b0&fg_color=222222&link_color=fa5c5c&border_color=53a9d9'
            },
            itchioLink: 'https://jayvlyn.itch.io/brad-to-the-bone',
            technologies: ['Unity', 'C#', 'Game Jam'],
            codeLink: '#'
        },
        {
            title: 'Squisher',
            description: 'Made in a custom built C++ Game Engine. The game is about stopping bugs by squishing them with the big cube.',
            media: {
                type: 'image',
                src: 'images/Squisher.png',
                alt: 'Screenshot from Squisher game'
            },
            technologies: ['C++', 'Custom Engine', 'Game Development'],
            codeLink: '#'
        }
    ];

    function loadProjects() {
        const projectsGrid = document.querySelector('.projects-grid');
        
        // Create background transition element
        const backgroundTransition = document.createElement('div');
        backgroundTransition.className = 'background-transition';
        document.body.appendChild(backgroundTransition);
        
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            // Extract colors from iframe URL if available
            let bgColor = null;
            if (project.media.type === 'iframe' && project.media.src.includes('?')) {
                const urlParams = new URLSearchParams(project.media.src.split('?')[1]);
                bgColor = urlParams.get('bg_color');
                const fgColor = urlParams.get('fg_color');
                
                if (bgColor && fgColor) {
                    projectCard.style.backgroundColor = `#${bgColor}`;
                    projectCard.style.color = `#${fgColor}`;
                }
            }
            
            // Add hover event listeners for background transition
            projectCard.addEventListener('mouseenter', () => {
                if (bgColor) {
                    backgroundTransition.style.backgroundColor = `#${bgColor}80`;  // 80 is 50% opacity in hex
                    backgroundTransition.style.opacity = '1';
                }
            });
            
            projectCard.addEventListener('mouseleave', () => {
                backgroundTransition.style.opacity = '0';
            });
            
            // Create media content based on type
            const mediaContent = project.media.type === 'iframe' 
                ? `<iframe 
                    class="project-iframe"
                    frameborder="0" 
                    src="${project.media.src}"
                  ><a href="${project.itchioLink}">${project.title}</a></iframe>`
                : `<img 
                    class="project-image" 
                    src="${project.media.src}" 
                    alt="${project.media.alt}"
                  >`;
            
            projectCard.innerHTML = `
                <div class="project-media">
                    ${mediaContent}
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${project.technologies.map(tech => `<span class="project-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.codeLink}"></i>View Project Page</a>
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    }

    // Load projects when DOM is ready
    document.addEventListener('DOMContentLoaded', loadProjects);
}

// Classwork page functionality
if (currentPage === 'classwork.html') {
    const classwork = [
        {
            title: 'Road Map Tool',
            description: 'Made for a class as a portfolio piece to work on something new. I decided to learn how to code tools for Unity.<br>This tool allows me to create a road map object to use within the game world',
            media: {
                type: 'image',
                src: 'images/RoadMap.gif',
                alt: 'Demo of the Road Map Tool'
            },
            technologies: ['Unity', 'C#', 'Editor Tools', 'Game Development'],
            codeLink: 'projects/roadmap-tool.html'
        },
        {
            title: 'Jeffery\'s Adventure',
            description: 'This was my Capstone Project for Neumont College of Computer Science. I made everything except the music.',
            media: {
                type: 'iframe',
                src: 'https://itch.io/embed/3127564?bg_color=809be0&fg_color=01091d&link_color=e8a900&border_color=686d8d'
            },
            itchioLink: 'https://flyguywannadie.itch.io/jeffery-adventure',
            technologies: ['Godot', 'GDScript', 'Game Development'],
            codeLink: 'projects/jefferys-adventure.html'
        },{
            title: 'Old Portfolio',
            description: 'Made for an English class but became my main portfolio. Taught me a lot about web development and design.<br>Currently transfering things over to this website.',
            media: {
                type: 'image',
                src: 'images/OldPortfolio.png',
                alt: 'Picture of my Old Portfolio'
            },
            technologies: ['HTML', 'CSS'],
            codeLink: 'https://flyguywannadie.github.io/'
        },{
            title: 'C++ Game Engine',
            description: 'Made in class with the help of the professor. I made Squisher and Squisher64 within the engine.<br>I learned how game engines are built from the ground up with custom update loops and collisions and vector math and more.',
            media: {
                type: 'image',
                src: 'images/Squisher.png',
                alt: 'Screenshot from the Game Engine'
            },
            technologies: ['C++', 'Game Engine', 'Custom Engine', 'Game Development'],
            codeLink: '#'
        },
        {
            title: 'BALL KICKER',
            description: 'Kick Balls. Made in GameMaker2 over 2 weeks as my final assignment for my first game class.',
            media: {
                type: 'iframe',
                src: 'https://itch.io/embed/2214810?dark=true'
            },
            itchioLink: 'https://flyguywannadie.itch.io/ball-kicker',
            technologies: ['GameMaker2', 'GML', 'Game Development'],
            codeLink: '#'
        }
    ];

    function loadClasswork() {
        const classworkGrid = document.querySelector('.projects-grid');
        
        // Create background transition element if it doesn't exist
        let backgroundTransition = document.querySelector('.background-transition');
        if (!backgroundTransition) {
            backgroundTransition = document.createElement('div');
            backgroundTransition.className = 'background-transition';
            document.body.appendChild(backgroundTransition);
        }
        
        classwork.forEach(work => {
            const classworkCard = document.createElement('div');
            classworkCard.className = 'project-card';
            
            // Extract colors from iframe URL if available
            let bgColor = null;
            if (work.media.type === 'iframe' && work.media.src.includes('?')) {
                const urlParams = new URLSearchParams(work.media.src.split('?')[1]);
                bgColor = urlParams.get('bg_color');
                const fgColor = urlParams.get('fg_color');
                
                if (bgColor && fgColor) {
                    classworkCard.style.backgroundColor = `#${bgColor}`;
                    classworkCard.style.color = `#${fgColor}`;
                }
            }
            
            // Add hover event listeners for background transition
            classworkCard.addEventListener('mouseenter', () => {
                if (bgColor) {
                    backgroundTransition.style.backgroundColor = `#${bgColor}80`;  // 80 is 50% opacity in hex
                    backgroundTransition.style.opacity = '1';
                }
            });
            
            classworkCard.addEventListener('mouseleave', () => {
                backgroundTransition.style.opacity = '0';
            });
            
            // Create media content based on type
            const mediaContent = work.media.type === 'iframe' 
                ? `<iframe 
                    class="project-iframe"
                    frameborder="0" 
                    src="${work.media.src}"
                  ><a href="${work.itchioLink}">${work.title}</a></iframe>`
                : `<img 
                    class="project-image" 
                    src="${work.media.src}" 
                    alt="${work.media.alt}"
                  >`;
            
            classworkCard.innerHTML = `
                <div class="project-media">
                    ${mediaContent}
                </div>
                <div class="project-content">
                    <h3 class="project-title">${work.title}</h3>
                    <p class="project-description">${work.description}</p>
                    <div class="project-tags">
                        ${work.technologies.map(tech => `<span class="project-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${work.codeLink}"></i>View Project Page</a>
                    </div>
                </div>
            `;
            
            classworkGrid.appendChild(classworkCard);
        });
    }

    // Load classwork when DOM is ready
    document.addEventListener('DOMContentLoaded', loadClasswork);
}

// Contact page functionality
if (currentPage === 'contact.html') {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const formProps = Object.fromEntries(formData);
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formProps);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Skills page functionality
if (currentPage === 'skills.html') {
    // Add any specific skills page functionality here
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-10px)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
        });
    });
} 