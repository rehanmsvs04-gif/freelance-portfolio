



// Portfolio Projects
const projects = [
    {
        id: 1,
        title: "Funcky Outfit - Clothing Store",
        description: "Modern clothing e-commerce website with product showcase, responsive design, and shopping cart functionality.",
        tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        demoLink: "https://rehanmsvs04-gif.github.io/46-funcky-outfit/",
        Image:"images/clothing.png"
    },
    {
        id: 2,
        title: "Peak Fitness Gym",
        description: "Gym management system with class booking and membership tracking. ",
        tech: ["React", "Node.js", "MongoDB"],
        demoLink: "https://rehanmsvs04-gif.github.io/fitness-gym/",
        Image:"images/gym.png"
    },
    {
        id: 3,
        title: "Spice Route Restaurant",
        description: "Restaurant website with online ordering and reservation system. 🚧 Coming Soon",
        tech: ["React", "Express", "MongoDB"],
        demoLink: null,
       Image:"images/restaurant.png"
    },
    {
        id: 4,
        title: "Admin Dashboard",
        description: "Complete dashboard with user management and analytics. 🚧 Coming Soon",
        tech: ["React", "Redux", "Node.js"],
        demoLink: null,
        icon: "📊"
    }
];

// Function to render portfolio items
function renderPortfolio(containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let projectsToShow = projects;
    if (limit && limit > 0) {
        projectsToShow = projects.slice(0, limit);
    }
    
    const portfolioHTML = projectsToShow.map(project => `
        <div class="portfolio-item">
            <div class="portfolio-image">
            ${project.Image ?
                `<img src="${project.Image}" alt="${project.title}" style="width:100%;height"100%;object-fitcover;">`:
                project.icon
            }
                </div>
            <div class="portfolio-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="portfolio-tech">
                    ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                ${project.demoLink ? 
                    `<a href="${project.demoLink}" target="_blank" rel="noopener noreferrer" class="demo-link">View Live Demo →</a>` : 
                    `<span style="display: inline-block; margin-top: 1rem; padding: 0.5rem 1rem; background: #333; color: #ff6b35; border-radius: 4px;">🚧 Coming Soon 🚧</span>`
                }
            </div>
        </div>
    `).join('');
    
    container.innerHTML = portfolioHTML;
}

// Render on homepage (show all 4 projects)
renderPortfolio('homePortfolioGrid', 4);
// Render on full portfolio page
if (document.getElementById('fullPortfolioGrid')) {
    renderPortfolio('fullPortfolioGrid');
}