//scroll Reveal//
ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay:150,
});

ScrollReveal().reveal('.home-bio h1, .about-resume',{origin: 'left'});
ScrollReveal().reveal('.home-bio p', {origin: 'right'});
ScrollReveal().reveal('.home-bio heading', {origin: 'top'});
ScrollReveal().reveal('.profile-pic, .about-items, .skills-items, projects-items, .form', {origin: 'bottom'});

//typing animation //

const animText =  new Typed ('.animated-text',{
    strings: ['Streamer', 'Cosplayer', 'Artista', 'Gamer', 'Cosmaker'],
    backspeed: 100,
    typeSpeed: 100,
    backDelay: 600,
    loop: true
})