const serviceData = {
    'web-development': {
        icon: '🌐',
        title: 'Web Development',
        description: 'We build fast, responsive, and SEO-friendly websites tailored to your brand\'s unique needs. Our team specializes in creating modern web experiences that convert visitors into customers.',
        features: [
            'Responsive Design (Mobile, Tablet, Desktop)',
            'SEO Optimization',
            'Fast Performance & Loading',
            'Cross-browser Compatibility',
            'User-Friendly CMS Integration',
            'Security Best Practices'
        ]
    },
    'ui-ux-design': {
        icon: '🎨',
        title: 'UI/UX Design',
        description: 'Crafting intuitive user interfaces and delightful user experiences that keep customers coming back. We focus on creating designs that are both beautiful and functional.',
        features: [
            'User Research & Personas',
            'Wireframing & Prototyping',
            'Visual Design Systems',
            'Usability Testing',
            'Interactive Prototypes',
            'Design Documentation'
        ]
    },
    'digital-marketing': {
        icon: '📈',
        title: 'Digital Marketing',
        description: 'Data-driven marketing strategies ranging from SEO to social media campaigns that scale your business. We help you reach the right audience at the right time.',
        features: [
            'SEO & Keyword Strategy',
            'Social Media Management',
            'Content Marketing',
            'Paid Advertising (PPC)',
            'Email Marketing Campaigns',
            'Analytics & Reporting'
        ]
    }
};

function openModal(serviceId) {
    const data = serviceData[serviceId];
    if (!data) return;

    document.getElementById('modalIcon').textContent = data.icon;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDescription').textContent = data.description;
    
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = '';
    data.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    document.getElementById('serviceModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('serviceModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function contactUs() {
    alert('Thank you for your interest! Please contact us at richardahadzi33@gmail.com or call (00233) 551 119 171');
    closeModal();
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('serviceModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
