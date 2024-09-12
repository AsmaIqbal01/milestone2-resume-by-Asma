// Utility function to toggle display, button text, and ARIA attribute
function toggleSection(button, section, showText, hideText) {
    // Log the button and section to ensure they're being properly captured
    console.log(button, section);
    // Check the initial state of the section
    var isInitiallyHidden = section.style.display === 'none' || section.style.display === '';
    // Set the initial button text based on the section's state
    button.textContent = isInitiallyHidden ? showText : hideText;
    button.addEventListener('click', function () {
        var isHidden = section.style.display === 'none' || section.style.display === '';
        // Toggle section visibility
        section.style.display = isHidden ? 'block' : 'none';
        // Update button text
        button.textContent = isHidden ? hideText : showText;
        // Update ARIA-expanded attribute for accessibility
        button.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
    });
}
// Get elements and log them to check
var toggleEducation = document.getElementById('edu-butn');
var education = document.getElementById('edu-detail');
var toggleSkills = document.getElementById('skills-butn');
var skills = document.getElementById('skills-detail');
var toggleExperience = document.getElementById('exp-butn');
var experience = document.getElementById('exp-detail');
// Log the experience elements to check if they're being fetched
console.log(toggleExperience, experience);
// Apply toggle functionality with ARIA attributes
toggleSection(toggleEducation, education, 'Show Education', 'Hide Education');
toggleSection(toggleSkills, skills, 'Show Skills', 'Hide Skills');
toggleSection(toggleExperience, experience, 'Show Experience', 'Hide Experience');
