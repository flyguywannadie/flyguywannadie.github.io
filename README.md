# Dynamic Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This portfolio features smooth animations, a typing effect, responsive design, and dynamic content loading.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Dynamic typing effect in the hero section
- Mobile-friendly navigation with hamburger menu
- Skills section with animated icons
- Project showcase with dynamic loading
- Contact form with validation
- Modern UI with hover effects and animations

## Setup

1. Clone this repository or download the files
2. Create the following directory structure:
   ```
   TestApp/
   ├── index.html
   ├── css/
   │   └── style.css
   ├── js/
   │   └── main.js
   └── images/
       └── profile-placeholder.jpg
   ```
3. Add your profile picture to the `images` directory
4. Open `index.html` in a web browser

## Customization

### Personal Information
- Edit the name in `index.html`
- Update the "About Me" section text
- Modify the typing effect words in `main.js`
- Add your social media links

### Projects
Edit the projects array in `main.js`:
```javascript
const projects = [
    {
        title: 'Your Project',
        description: 'Project description',
        image: 'path/to/image.jpg',
        technologies: ['Tech1', 'Tech2'],
        liveLink: 'https://your-project.com',
        githubLink: 'https://github.com/your-repo'
    }
];
```

### Skills
Add or modify skills in the skills section of `index.html`. Use Font Awesome icons for the skill icons.

### Colors
Customize the color scheme in `style.css` by modifying the CSS variables:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    /* ... other colors ... */
}
```

## Contact Form
The contact form is set up to log to the console by default. To make it functional:
1. Set up a server to handle form submissions
2. Update the form submission code in `main.js`
3. Add your email service integration

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License
This project is open source and available under the MIT License. 