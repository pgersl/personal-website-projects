// Function to set the theme preference in local storage
function setThemePreference(themeName) {
    localStorage.setItem('themePreference', themeName);
  }
  
  // Function to get the theme preference from local storage
  function getThemePreference() {
    return localStorage.getItem('themePreference') || '/css/ads-light.css';
  }
  
  // Apply the initial theme based on the stored preference when the page loads
  window.addEventListener('DOMContentLoaded', () => {
    const themeStyle = document.createElement('link');
    themeStyle.setAttribute('id', 'theme-css');
    themeStyle.setAttribute('rel', 'stylesheet');
    themeStyle.setAttribute('href', getThemePreference());
    document.head.appendChild(themeStyle);
  });
  
  // Theme toggle functionality
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = getThemePreference();
    let newTheme;
  
    if (currentTheme === '/css/ads-light.css') {
      newTheme = '/css/ads-dark.css';
    } else {
      newTheme = '/css/ads-light.css';
    }
  
    const themeStyle = document.getElementById('theme-css');
    themeStyle.setAttribute('href', newTheme);
    setThemePreference(newTheme);
  });
  