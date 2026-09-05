const contactNumber = `+639605661691`;
const fadeUp = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver ((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
        }
    });
}, {threshold: 0.15});

fadeUp.forEach(section => {
    observer.observe(section);
});

function contact () {
    window.location.href = `tel:${contactNumber}`;
}

function sendSMS () {
    window.location.href = `sms:${contactNumber}`;
}

function messenger() {
    window.open(`https://www.messenger.com/t/103085041960262/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0`);
}

function scrollUp () {
    window.scrollTo ({
        top: 0,
        behavior: 'smooth'
    });
}