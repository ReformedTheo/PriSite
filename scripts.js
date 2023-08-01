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

function SendMail() {
    var params = {
    name : document.getElementById('name').value,
    email : document.getElementById('email').value,
    message : document.getElementById('message').value,
    phone : document.getElementById('phone').value
    }
    emailjs.send("service_5feek41", "template_hjqkcyh", params).then(function(res){
        alert("Email enviado com sucesso! Entraremos em contato em breve " + res.status)
    })
}
const openPdfButton = document.getElementById('btn-about');

openPdfButton.addEventListener('click', () => {
    const pdfUrl = 'PrisPortifolio.pdf';

    // Abre uma nova janela ou guia com o arquivo .pdf
    window.open(pdfUrl, '_blank');
});