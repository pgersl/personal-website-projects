window.addEventListener('load', function() {

    document.querySelector('.home-header').classList.add('show');
    
    window.addEventListener('scroll', function() {
      document.querySelector('.home-header').classList.remove('show');
    });
  });