// Data species dan gallery images
const speciesData = {
    'avicennia-marina': {
        name: 'Avicennia marina',
        subtitle: 'Api-Api Abu',
        status: 'LC',
        riskLevel: 'Risiko Rendah',
        characteristics: [
            { label: 'Tinggi', value: '3 hingga 14 meter', icon: 'char-tinggi' },
            { label: 'Batang', value: 'Abu-abu kecoklatan', icon: 'char-batang' },
            { label: 'Warna Daun Atas', value: 'Hijau abu-abu', icon: 'char-daun' },
            { label: 'Akar', value: 'Akar udara', icon: 'char-akar' }
        ],
        description: 'dikenal sebagai salah satu mangrove paling toleran terhadap salinitas, bahkan dapat hidup di zona yang hampir menyerupai padang garam. Daunnya memiliki kelenjar khusus untuk mengeluarkan garam, sehingga sering tampak berkilau keperakan. Spesies ini juga memiliki penyebaran paling luas dibanding mangrove lainnya dan sering menjadi spesies pionir dalam kolonisasi habitat baru.',
        galleryImages: [
            'img/biodev/1.png',
            'img/biodev/2.png',
            'img/biodev/3.png',
            'img/biodev/4.png'
        ],
        mapsImage: 'img/biodev/maps1.png',
        mapsCaption: 'Peta sebaran Avicennia marina di Lembur Mangrove Patikang'
    },
    'avicennia-alba': {
        name: 'Avicennia alba',
        subtitle: 'Api-Api Putih',
        status: 'LC',
        riskLevel: 'Risiko Rendah',
        characteristics: [
            { label: 'Tinggi', value: '5 hingga 15 meter', icon: 'char-tinggi' },
            { label: 'Batang', value: 'Kulit batang halus', icon: 'char-batang' },
            { label: 'Warna Daun Atas', value: 'Hijau terang', icon: 'char-daun' },
            { label: 'Akar', value: 'Akar napas', icon: 'char-akar' }
        ],
        description: 'sering menempati substrat lumpur yang sangat lunak dan menjadi salah satu spesies pertama yang tumbuh pada area baru yang terendam. Pertumbuhannya yang cepat membuatnya ideal untuk rehabilitasi mangrove. Jenis mangrove ini juga menghasilkan buah kecil berbentuk kapsul yang mudah tersebar dan mampu bertahan pada kondisi salinitas tinggi.',
        galleryImages: [
            'img/biodev/alba1.png',
            'img/biodev/alba2.png',
            'img/biodev/alba3.png',
            'img/biodev/alba4.png'
        ],
        mapsImage: 'img/biodev/maps2.png',
        mapsCaption: 'Peta sebaran Avicennia alba di Lembur Mangrove Patikang'
    },
    'rhizopora-mucronata': {
        name: 'Rhizopora mucronata',
        subtitle: 'Bakau Merah',
        status: 'LC',
        riskLevel: 'Risiko Rendah',
        characteristics: [
            { label: 'Tinggi', value: '8 hingga 20 meter', icon: 'char-tinggi' },
            { label: 'Batang', value: 'Kulit batang coklat kemerahan', icon: 'char-batang' },
            { label: 'Warna Daun Atas', value: 'Hijau tua', icon: 'char-daun' },
            { label: 'Akar', value: 'Akar tunjang besar', icon: 'char-akar' }
        ],
        description: 'dikenal dengan akar tunjangnya yang besar, yang membantu pohon ini berdiri kokoh di tanah berlumpur. Propagulnya (bakal bibit yang jatuh ke air) termasuk salah satu yang paling panjang di antara jenis mangrove, bahkan bisa mencapai lebih dari setengah meter. Akar dan batangnya juga menjadi tempat hidup bagi berbagai hewan kecil seperti kepiting, ikan muda, dan organisme lain, sehingga pohon ini sangat penting untuk menjaga keberagaman kehidupan di kawasan mangrove.',
        galleryImages: [
            'img/biodev/rhizo1.png',
            'img/biodev/rhizo2.png',
            'img/biodev/rhizo3.png',
            'img/biodev/rhizo4.png'
        ],
        mapsImage: 'img/biodev/maps3.png',
        mapsCaption: 'Peta sebaran Rhizopora mucronata di Lembur Mangrove Patikang'
    },
    'rhizopora-stylosa': {
        name: 'Rhizopora stylosa',
        subtitle: 'Bakau Kecil',
        status: 'LC',
        riskLevel: 'Risiko Rendah',
        characteristics: [
            { label: 'Tinggi', value: '3 hingga 10 meter', icon: 'char-tinggi' },
            { label: 'Batang', value: 'Kulit batang abu-abu', icon: 'char-batang' },
            { label: 'Warna Daun Atas', value: 'Hijau muda', icon: 'char-daun' },
            { label: 'Akar', value: 'Akar tunjang kecil', icon: 'char-akar' }
        ],
        description: 'lebih umum ditemukan di wilayah berpasir atau tepi pantai dengan ombak yang relatif lebih terbuka, sehingga sering dianggap sebagai spesies bakau "zona depan". Propagulnya (bakal bibit yang jatuh ke air) lebih ramping dibanding kerabat dekatnya, R. mucronata. Ukuran daunnya yang lebih kecil membuatnya dapat beradaptasi dengan lingkungan lebih kering dan berangin.',
        galleryImages: [
            'img/biodev/stylo1.png',
            'img/biodev/stylo2.png',
            'img/biodev/stylo3.png',
            'img/biodev/stylo4.png'
        ],
        mapsImage: 'img/biodev/maps4.png',
        mapsCaption: 'Peta sebaran Rhizopora stylosa di Lembur Mangrove Patikang'
    },
    'sonneratia-alba': {
        name: 'Sonneratia alba',
        subtitle: 'Pidada Merah',
        status: 'LC',
        riskLevel: 'Risiko Rendah',
        characteristics: [
            { label: 'Tinggi', value: '5 hingga 15 meter', icon: 'char-tinggi' },
            { label: 'Batang', value: 'Kulit batang keabu-abuan', icon: 'char-batang' },
            { label: 'Warna Daun Atas', value: 'Hijau kebiruan', icon: 'char-daun' },
            { label: 'Akar', value: 'Akar pneumatofor', icon: 'char-akar' }
        ],
        description: 'dikenal dengan bunganya yang spektakuler, berwarna putih dengan benang sari panjang menyerupai kembang api. Buahnya yang bulat menjadi sumber makanan bagi berbagai ikan dan fauna estuari. Spesies ini juga sangat toleran terhadap gelombang, sehingga sering menjadi garis depan hutan mangrove yang berhadapan langsung dengan laut.',
        galleryImages: [
            'img/biodev/son1.png',
            'img/biodev/son2.png',
            'img/biodev/son3.png',
            'img/biodev/son4.png'
        ],
        mapsImage: 'img/biodev/maps5.png',
        mapsCaption: 'Peta sebaran Sonneratia alba di Lembur Mangrove Patikang'
    }
};


// Status konservasi options
const conservationStatuses = ['EX', 'EW', 'CR', 'EN', 'VU', 'NT', 'LC'];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeSpecies();
    loadSpeciesContent('avicennia-marina');
});

// Tab functionality
function initializeTabs() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabType = this.getAttribute('data-tab');
            
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Handle tab switching logic here
            console.log('Switched to tab:', tabType);
        });
    });
}

// Species functionality
function initializeSpecies() {
    const speciesItems = document.querySelectorAll('.species-item');
    speciesItems.forEach(item => {
        item.addEventListener('click', function() {
            const speciesId = this.getAttribute('data-species');
            
            speciesItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            loadSpeciesContent(speciesId);
        });
    });
}

// Load species content dynamically
function loadSpeciesContent(speciesId) {
    const species = speciesData[speciesId];
    const speciesDetails = document.querySelector('.species-details');
    
    if (!species) return;
    
    // Create status scale HTML
    const statusScaleHTML = conservationStatuses.map(status => {
        const isActive = status === species.status;
        return `<div class="status-item ${isActive ? 'active' : ''}">${status}</div>`;
    }).join('');
    
    // Create characteristics HTML
    const characteristicsHTML = species.characteristics.map(char => `
        <div class="characteristic">
            <div class="${char.icon}"></div>
            <div class="char-text">
                <div class="char-label">${char.label}</div>
                <div>${char.value}</div>
            </div>
        </div>
    `).join('');
    
    // Create gallery images HTML
    const galleryHTML = species.galleryImages.map((image, index) => `
        <div class="gallery-item">
            <img src="${image}" alt="${species.name} ${index + 1}" onerror="this.src='https://via.placeholder.com/312x190/3CA84B/FFFFFF?text=${species.name}+${index + 1}'">
        </div>
    `).join('');
    
    // Create maps sidebar HTML
    const mapsSidebarHTML = `
        <div class="species-maps-sidebar">
            <div class="maps-container">
                <h3 class="maps-title">Peta Sebaran</h3>
                <div class="maps-image">
                    <img src="${species.mapsImage || 'img/maps/default-map.jpg'}" 
                         alt="Peta sebaran ${species.name}" 
                         onerror="this.src='https://via.placeholder.com/400x300/0D938D/FFFFFF?text=Peta+Sebaran+${species.name}'">
                </div>
                <div class="maps-caption">
                    ${species.mapsCaption || `Peta persebaran ${species.name} di kawasan Lembur Mangrove Patikang`}
                </div>
            </div>
        </div>
    `;
    
    // Create the complete species content HTML dengan layout grid
    const speciesContentHTML = `
        <div class="species-content active">
            <div class="species-layout">
                <div class="species-main-content">
                    <h2 class="species-name">${species.name}</h2>
                    <div class="species-subtitle">${species.subtitle}</div>
                    
                    <div class="conservation-status">
                        <div class="status-label">Status Konservasi</div>
                        <div class="status-scale">
                            ${statusScaleHTML}
                        </div>
                        <div class="risk-level">${species.riskLevel}</div>
                    </div>
                    
                    <div class="species-characteristics">
                        ${characteristicsHTML}
                    </div>
                    
                    <div class="species-description">
                        <strong>${species.name}</strong> ${species.description}
                    </div>
                </div>
                
                ${mapsSidebarHTML}
            </div>

            <div class="image-gallery">
                ${galleryHTML}
            </div>
            
            <div class="featured-image">
                <img src="${species.featuredImage}" alt="${species.name}" onerror="this.src='https://via.placeholder.com/302x360/3CA84B/FFFFFF?text=${species.name}'">
            </div>
        </div>
    `;
    
    // Update the DOM
    speciesDetails.innerHTML = speciesContentHTML;
}

// Fallback untuk gambar yang tidak ditemukan
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        const img = e.target;
        const altText = img.alt || 'Image';
        // Cek jika ini gambar maps
        if (img.src.includes('maps')) {
            img.src = `https://via.placeholder.com/400x300/0D938D/FFFFFF?text=${encodeURIComponent(altText)}`;
        } else {
            img.src = `https://via.placeholder.com/300x200/3CA84B/FFFFFF?text=${encodeURIComponent(altText)}`;
        }
    }
}, true);

// Smooth scroll untuk navigasi
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});