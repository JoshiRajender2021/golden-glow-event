// ========== ELEMENTS ==========
const body = document.body;
const themeToggle = document.getElementById("theme-toggle");
const langToggle = document.getElementById("lang-toggle");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const yearSpan = document.getElementById("year");

// Year in footer
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// ========== TRANSLATIONS ==========
const translations = {
    en: {
        "brand.tagline": "We create you celebrate",
        "nav.home": "Home",
        "nav.services": "Services",
        "nav.cities": "Cities",
        "nav.gallery": "Gallery",
        "nav.about": "About",
        "nav.reviews": "Reviews",
        "nav.contact": "Contact",

        "hero.kicker": "Premium Event & Hotel Man Power Solutions",
        "hero.badge1": "Premium Event Decor",
        "hero.badge2": "Hotel Man Power",
        "hero.title": "Celebrate with Golden Glow Event",
        "hero.subtitle":
            "Balloon & flower decoration, stage effects, cold pyro, fog matka, bar counter, mocktail, pan & hukka and hotel manpower supply in Haldwani, Nainital (Uttarakhand).",
        "hero.getQuote": "Get a Free Quote",
        "hero.callNow": "Call Now",
        "hero.whatsapp": "WhatsApp",
        "hero.chip1": "100+ Events Completed",
        "hero.chip2": "4★ Client Rating",
        "hero.chip3": "Serving Haldwani, Ramnagar, Nainital & Mukteshwar",

        "services.title": "Our Services",
        "services.subtitle":
            "From intimate celebrations to grand events, we design every detail with golden perfection.",
        "services.tagPopular": "Popular",
        "services.tagWedding": "Wedding",
        "services.tagHighlight": "Highlight",
        "services.tagCouple": "Couple Entry",
        "services.tagHospitality": "Hospitality",
        "services.tagLounge": "Lounge",
        "services.tagStaff": "Staffing",
        "services.balloon.title": "Balloon Decoration",
        "services.balloon.desc":
            "Theme-based balloon arches, backdrops and room surprises for birthdays and parties.",
        "services.stage.title": "Stage Effect & Decor",
        "services.stage.desc":
            "Elegant stage setups, entry gates and customized event themes for weddings and shows.",
        "services.coldpyro.title": "Cold Pyro & Sky Shot",
        "services.coldpyro.desc":
            "Safe cold pyro and sky shot effects to highlight your special moments.",
        "services.fogmatka.title": "Fog Matka & Flower Shower",
        "services.fogmatka.desc":
            "Dreamy fog entries and stunning flower showers for varmala and couple entries.",
        "services.bar.title": "Bar Counter & Mocktail",
        "services.bar.desc":
            "Professional bar and mocktail setups with stylish counters and serving staff.",
        "services.pan.title": "Pan & Hukka",
        "services.pan.desc":
            "Premium pan and hukka lounge experience for your guests (where permitted).",
        "services.manpower.title": "Hotel Man Power Supply",
        "services.manpower.desc":
            "Trained, reliable manpower for hotels, banquets and events on demand.",

        "cities.inlineLabel": "Available in:",
        "cities.label": "Cities we serve",
        "cities.title": "We are available across Kumaon",
        "cities.subtitle":
            "Our team travels with full setup to multiple cities so you get the same golden experience wherever you celebrate.",
        "cities.haldwani":
            "Birthday parties, weddings, hotel events and corporate functions.",
        "cities.ramnagar":
            "Resort weddings, destination events and jungle themed decor.",
        "cities.nainital":
            "Lake view celebrations, hotel events and intimate gatherings.",
        "cities.mukteshwar":
            "Hilltop weddings and small luxury events with scenic decor.",

        "gallery.title": "Event Highlights",
        "gallery.subtitle":
            "A glimpse of our balloon decor, floral setups, bar counters and stage effects.",

        "about.sectionLabel": "About Company",
        "about.title": "About Golden Glow Event",
        "about.body1":
            "Golden Glow Event is a Haldwani-based event decoration and hotel manpower company. We handle everything from balloon decoration and stage effects to bar counters and hospitality staff.",
        "about.body2":
            "Our team focuses on on-time execution, clean work and guest-friendly behaviour so you can simply enjoy your celebration.",
        "about.stat.events": "Events Completed",
        "about.stat.rating": "Client Rating",
        "about.stat.support": "Support",
        "about.cardTitle": "Why Clients Trust Us",
        "about.point1": "Experienced team for decor and technical effects.",
        "about.point2": "Complete event & hotel manpower under one roof.",
        "about.point3":
            "Customized packages for weddings, birthdays and corporate events.",
        "about.ribbon":
            "Trusted by families & hotels in Haldwani, Ramnagar, Nainital & Mukteshwar",

        "reviews.title": "What Clients Say",
        "reviews.subtitle":
            "Real feedback from families, couples and hotel partners we have worked with.",
        "reviews.r1.text":
            "Amazing balloon and stage decoration for my daughter's birthday. Everything was ready before time and guests loved the setup.",
        "reviews.r1.name": "Priya Sharma",
        "reviews.r1.meta": "Birthday Event • Haldwani",
        "reviews.r2.text":
            "We regularly take hotel manpower and bar setup from Golden Glow Event. Professional staff and quick response.",
        "reviews.r2.name": "Hotel Partner",
        "reviews.r2.meta": "Nainital",
        "reviews.r3.text":
            "Fog entry, flower shower and cold pyro during varmala looked fantastic in photos and videos. Highly recommended.",
        "reviews.r3.name": "Rahul & Neha",
        "reviews.r3.meta": "Wedding • Haldwani",

        "contact.sectionLabel": "Contact & Booking",
        "contact.title": "Let’s Plan Your Event",
        "contact.subtitle":
            "Share your event details and we will get back with ideas and budget-friendly packages.",
        "contact.phoneLabelOnly": "Phone",
        "contact.whatsappLabelOnly": "WhatsApp",
        "contact.email": "Email",
        "contact.addressLabel": "Location",
        "contact.address": "Haldwani, Nainital, Uttarakhand",
        "contact.highlight":
            "On-site visit and custom quotation available.",

        "form.nameLabel": "Your Name",
        "form.phoneLabel": "Phone",
        "form.eventLabel": "Event Type / Date",
        "form.messageLabel": "Message",
        "form.submit": "Send Enquiry",
        "form.note":
            "Your enquiry will be sent via WhatsApp for an immediate response.",
        "popup.title": "Plan Your Dream Event!",
        "popup.body":
            "Get special offers on wedding decor and hotel manpower packages. Book your consultation today.",
        "popup.cta": "Enquire Now"
    },

    hi: {
        "brand.tagline": "हम सजाएँ, आप जश्न मनाएँ",
        "nav.home": "होम",
        "nav.services": "सेवाएँ",
        "nav.cities": "शहर",
        "nav.gallery": "गैलरी",
        "nav.about": "हमारे बारे में",
        "nav.reviews": "रिव्यू",
        "nav.contact": "संपर्क",

        "hero.kicker": "प्रीमियम इवेंट एवं होटल मैन पावर सॉल्यूशन",
        "hero.badge1": "प्रीमियम इवेंट डेकोर",
        "hero.badge2": "होटल मैन पावर",
        "hero.title": "Golden Glow Event के साथ जश्न मनाएँ",
        "hero.subtitle":
            "बलून और फ्लावर डेकोरेशन, स्टेज इफ़ेक्ट, कोल्ड पाइरो, फॉग मटका, बार काउंटर, मॉकटेल, पान व हुक्का और होटल मैन पावर सप्लाई – हल्द्वानी, नैनीताल (उत्तराखंड) में।",
        "hero.getQuote": "फ्री कोटेशन लें",
        "hero.callNow": "अभी कॉल करें",
        "hero.whatsapp": "व्हाट्सएप",
        "hero.chip1": "100+ इवेंट पूरे",
        "hero.chip2": "4★ क्लाइंट रेटिंग",
        "hero.chip3": "हल्द्वानी, रामनगर, नैनीताल व मुक्तेश्वर में सेवा",

        "services.title": "हमारी सेवाएँ",
        "services.subtitle":
            "छोटी पार्टी से लेकर ग्रैंड इवेंट तक, हर डिटेल हम गोल्डन टच के साथ डिज़ाइन करते हैं।",
        "services.tagPopular": "पॉपुलर",
        "services.tagWedding": "वेडिंग",
        "services.tagHighlight": "हाइलाइट",
        "services.tagCouple": "कपल एंट्री",
        "services.tagHospitality": "हॉस्पिटैलिटी",
        "services.tagLounge": "लाउंज",
        "services.tagStaff": "स्टाफिंग",
        "services.balloon.title": "बलून डेकोरेशन",
        "services.balloon.desc":
            "थीम बेस्ड बलून आर्च, बैकड्रॉप और रूम सरप्राइज़ – बर्थडे और पार्टी के लिए।",
        "services.stage.title": "स्टेज इफ़ेक्ट व डेकोर",
        "services.stage.desc":
            "शादी और इवेंट के लिए आकर्षक स्टेज सेटअप, एंट्री गेट और कस्टम थीम।",
        "services.coldpyro.title": "कोल्ड पाइरो व स्काई शॉट",
        "services.coldpyro.desc":
            "आपके स्पेशल मोमेंट को हाईलाइट करने के लिए सेफ कोल्ड पाइरो और स्काई शॉट इफ़ेक्ट।",
        "services.fogmatka.title": "फॉग मटका व फ्लावर शावर",
        "services.fogmatka.desc":
            "वर्माला और कपल एंट्री के लिए सपने जैसे फॉग इफ़ेक्ट और फ्लावर शावर।",
        "services.bar.title": "बार काउंटर व मॉकटेल",
        "services.bar.desc":
            "स्टाइलिश काउंटर के साथ प्रोफेशनल बार और मॉकटेल सेटअप व स्टाफ।",
        "services.pan.title": "पान व हुक्का",
        "services.pan.desc":
            "आपके गेस्ट के लिए प्रीमियम पान व हुक्का लाउंज (जहाँ अनुमति हो)।",
        "services.manpower.title": "होटल मैन पावर सप्लाई",
        "services.manpower.desc":
            "होटल, बैंक्वेट और इवेंट के लिए ट्रेन व भरोसेमंद स्टाफ उपलब्ध।",

        "cities.inlineLabel": "उपलब्ध शहर:",
        "cities.label": "जहाँ हम सेवा देते हैं",
        "cities.title": "कुमाऊँ के कई शहरों में उपलब्ध",
        "cities.subtitle":
            "हमारी टीम पूरा सेटअप लेकर अलग-अलग शहरों में आती है ताकि जहाँ भी आप जश्न मनाएँ, अनुभव हमेशा गोल्डन रहे।",
        "cities.haldwani":
            "बर्थडे, शादी, होटल इवेंट और कॉर्पोरेट फ़ंक्शन।",
        "cities.ramnagar":
            "रिसॉर्ट वेडिंग, डेस्टिनेशन इवेंट और जंगल थीम्ड डेकोर।",
        "cities.nainital":
            "लेक व्यू सेलिब्रेशन, होटल इवेंट और इंटिमेट गैदरिंग।",
        "cities.mukteshwar":
            "हिलटॉप वेडिंग और छोटे लग्ज़री इवेंट सुंदर नज़ारों के साथ।",

        "gallery.title": "हमारे इवेंट्स की झलक",
        "gallery.subtitle":
            "बलून डेकोर, फ्लावर सेटअप, बार काउंटर और स्टेज इफ़ेक्ट की कुछ झलकियाँ।",

        "about.sectionLabel": "कंपनी परिचय",
        "about.title": "Golden Glow Event के बारे में",
        "about.body1":
            "Golden Glow Event, हल्द्वानी आधारित इवेंट डेकोरेशन व होटल मैन पावर कंपनी है। हम बलून डेकोरेशन और स्टेज इफ़ेक्ट से लेकर बार काउंटर व हॉस्पिटैलिटी स्टाफ तक सब संभालते हैं।",
        "about.body2":
            "हमारी टीम समय पर काम, साफ-सुथरा सेटअप और गेस्ट फ्रेंडली बिहेवियर पर फोकस करती है, ताकि आप सिर्फ जश्न एन्जॉय करें।",
        "about.stat.events": "पूरा किए गए इवेंट",
        "about.stat.rating": "क्लाइंट रेटिंग",
        "about.stat.support": "सपोर्ट",
        "about.cardTitle": "क्लाइंट हमें क्यों चुनते हैं",
        "about.point1": "डेकोर और टेक्निकल इफ़ेक्ट में एक्सपीरियंस्ड टीम।",
        "about.point2": "इवेंट और होटल मैन पावर – सब कुछ एक ही जगह।",
        "about.point3":
            "शादी, बर्थडे और कॉर्पोरेट इवेंट के लिए कस्टम पैकेज।",
        "about.ribbon":
            "हल्द्वानी, रामनगर, नैनीताल व मुक्तेश्वर में फैमिली और होटलों की पसंद",

        "reviews.title": "क्लाइंट क्या कहते हैं",
        "reviews.subtitle":
            "फैमिली, कपल और होटल पार्टनर्स के असली रिव्यू जिनके साथ हमने काम किया है।",
        "reviews.r1.text":
            "मेरी बेटी के बर्थडे के लिए बलून और स्टेज डेकोरेशन बहुत बढ़िया रहा। सब कुछ टाइम से पहले तैयार था और गेस्ट्स को सेटअप बहुत पसंद आया।",
        "reviews.r1.name": "प्रिया शर्मा",
        "reviews.r1.meta": "बर्थडे इवेंट • हल्द्वानी",
        "reviews.r2.text":
            "हम होटल मैन पावर और बार सेटअप के लिए रेगुलरली Golden Glow Event को बुलाते हैं। प्रोफेशनल स्टाफ और फास्ट रिस्पॉन्स।",
        "reviews.r2.name": "होटल पार्टनर",
        "reviews.r2.meta": "नैनीताल",
        "reviews.r3.text":
            "वर्माला के समय फॉग एंट्री, फ्लावर शावर और कोल्ड पाइरो ने फोटो और वीडियो में कमाल कर दिया। हाईली रिकमेंडेड।",
        "reviews.r3.name": "राहुल व नेहा",
        "reviews.r3.meta": "वेडिंग • हल्द्वानी",

        "contact.sectionLabel": "संपर्क व बुकिंग",
        "contact.title": "अपना इवेंट प्लान करें",
        "contact.subtitle":
            "हमें अपने इवेंट की डिटेल भेजें, हम आइडिया और बजट फ्रेंडली पैकेज के साथ आपसे संपर्क करेंगे।",
        "contact.phoneLabelOnly": "फ़ोन",
        "contact.whatsappLabelOnly": "व्हाट्सएप",
        "contact.email": "ईमेल",
        "contact.addressLabel": "लोकेशन",
        "contact.address": "हल्द्वानी, नैनीताल, उत्तराखंड",
        "contact.highlight":
            "ऑन-साइट विज़िट और कस्टम कोटेशन उपलब्ध।",

        "form.nameLabel": "आपका नाम",
        "form.phoneLabel": "फ़ोन",
        "form.eventLabel": "इवेंट टाइप / तारीख",
        "form.messageLabel": "मैसेज",
        "form.submit": "इन्क्वायरी भेजें",
        "form.note":
            "आपकी पूछताछ तुरंत जवाब के लिए व्हाट्सएप के माध्यम से भेजी जाएगी।",
        "popup.title": "अपने सपनों का इवेंट प्लान करें!",
        "popup.body":
            "वेडिंग डेकोर और होटल मैन पावर पैकेज पर विशेष ऑफर पाएँ। आज ही संपर्क करें।",
        "popup.cta": "अभी पूछताछ करें"
    }
};

// ========== TRANSLATION HELPERS ==========
function applyTranslations(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
        const key = el.dataset.i18n;
        const text = translations[lang]?.[key];
        if (text) {
            el.textContent = text;
        }
    });

    // For top-bar "available in" text
    const inlineLabel = document.querySelector("[data-i18n='cities.inlineLabel']");
    if (inlineLabel && translations[lang]["cities.inlineLabel"]) {
        inlineLabel.textContent = translations[lang]["cities.inlineLabel"];
    }

    // record lang on body for CSS thumb position
    body.setAttribute("data-lang", lang);
}

function setLanguage(lang) {
    localStorage.setItem("gg_lang", lang);
    applyTranslations(lang);
}

function setTheme(theme) {
    if (theme === "dark") {
        body.classList.add("dark-theme");
    } else {
        body.classList.remove("dark-theme");
    }
    localStorage.setItem("gg_theme", theme);
}

// initial theme & language
const savedTheme = localStorage.getItem("gg_theme") || "light";
const savedLang = localStorage.getItem("gg_lang") || "en";
setTheme(savedTheme);
applyTranslations(savedLang);

// set toggle CSS state
body.setAttribute("data-lang", savedLang);

// ========== TOGGLE EVENTS ==========
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const isDark = body.classList.contains("dark-theme");
        setTheme(isDark ? "light" : "dark");
    });
}

if (langToggle) {
    langToggle.addEventListener("click", () => {
        const current = body.getAttribute("data-lang") || "en";
        const next = current === "en" ? "hi" : "en";
        setLanguage(next);
    });
}

// ========== MOBILE NAV ==========
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

    navLinks.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            navLinks.classList.remove("open");
        }
    });
}

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (!targetId || targetId === "#") return;
        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        window.scrollTo({
            top: target.offsetTop - 90,
            behavior: "smooth"
        });
    });
});

// ========== REVEAL ON SCROLL ==========
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.revealDelay || 0;
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, Number(delay));
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ========== FORM HANDLER ==========
const form = document.getElementById("contact-form");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const eventType = document.getElementById("event").value.trim();
        const message = document.getElementById("message").value.trim();

        // Construct the WhatsApp message
        let whatsappText = `Hello Golden Glow Event, I have an enquiry:%0A`;
        whatsappText += `*Name:* ${name}%0A`;
        whatsappText += `*Phone:* ${phone}%0A`;
        if (eventType) whatsappText += `*Event:* ${eventType}%0A`;
        if (message) whatsappText += `*Message:* ${message}`;

        // WhatsApp API URL (using the number from the HTML: +91 72484 50563)
        const whatsappUrl = `https://wa.me/917248450563?text=${whatsappText}`;

        // Redirect to WhatsApp
        window.open(whatsappUrl, "_blank");

        form.reset();
    });
}

// ========== POPUP LOGIC ==========
setTimeout(() => {
    const popup = document.getElementById("promo-popup");
    const hasShown = sessionStorage.getItem("gg_popup_shown");

    if (popup && !hasShown) {
        // Show after delay
        popup.classList.add("show");
        sessionStorage.setItem("gg_popup_shown", "true");
    }
}, 3500);

// Close events
const popupClose = document.getElementById("popup-close");
const popupCta = document.getElementById("popup-cta");
const popupEl = document.getElementById("promo-popup");

if (popupClose && popupEl) {
    popupClose.addEventListener("click", () => {
        popupEl.classList.remove("show");
    });
}

if (popupCta && popupEl) {
    popupCta.addEventListener("click", () => {
        popupEl.classList.remove("show");
    });
}

if (popupEl) {
    popupEl.addEventListener("click", (e) => {
        if (e.target === popupEl) {
            popupEl.classList.remove("show");
        }
    });
}
// ========== BACK TO TOP & SCROLL ACTIVE ==========
const backTopBtn = document.getElementById("back-top");
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    // Back to top visibility
    if (window.scrollY > 400) {
        backTopBtn.classList.add("show");
    } else {
        backTopBtn.classList.remove("show");
    }

    // Active link highlighting
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Offset for sticky header
        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach((li) => {
        li.classList.remove("active");
        if (li.getAttribute("href").includes(current)) {
            li.classList.add("active");
        }
    });
});

if (backTopBtn) {
    backTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ========== STATS COUNTER ANIMATION ==========
const statsSection = document.querySelector(".stats"); // for About section stats
const heroStats = document.querySelector(".hero-stats-row"); // for Hero chips

function startCounter(element, target, suffix = "") {
    let count = 0;
    const speed = 2000 / target; // animation duration 2s

    const updateCount = () => {
        count += Math.ceil(target / 100); // increment steps
        if (count < target) {
            element.textContent = count + suffix;
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = target + suffix;
        }
    };
    updateCount();
}

const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Check if it's the main stats section (About)
            if (entry.target.classList.contains("stats")) {
                const statValues = entry.target.querySelectorAll(".stat-value");
                statValues.forEach(val => {
                    const text = val.textContent;
                    const num = parseInt(text.replace(/\D/g, ""));
                    const suffix = text.replace(/[0-9]/g, "");
                    // Don't animate rating "4★" or "24/7" properly without regex care, 
                    // simple check for purely numeric starts
                    if (!isNaN(num)) {
                        startCounter(val, num, suffix);
                    }
                });
            }
            // Check if it's the hero stats
            if (entry.target.classList.contains("hero-stats-row")) {
                // Specific logic for Hero Chips if we want to animate them text-wise
                // Currently they are full text strings, might be complex to parse.
                // Let's stick to animating the "100+" in the About section for now as it's cleaner.
            }
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (statsSection) {
    statsObserver.observe(statsSection);
}
