// Simple interactivity for tabs and species items
document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Species item functionality
    const speciesItems = document.querySelectorAll('.species-item');
    speciesItems.forEach(item => {
        item.addEventListener('click', function() {
            speciesItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Update species name and details (in a real app, this would fetch data)
            const speciesName = this.textContent;
            document.querySelector('.species-name').textContent = speciesName;
            
            // Update species subtitle based on selection
            updateSpeciesDetails(speciesName);
        });
    });
    
    // Function to update species details based on selection
    function updateSpeciesDetails(speciesName) {
        const details = {
            'Avicennia marina': {
                subtitle: 'Api-Api Abu',
                description: 'Avicennia marina dikenal sebagai salah satu mangrove paling toleran terhadap salinitas, bahkan dapat hidup di zona yang hampir menyerupai padang garam. Daunnya memiliki kelenjar khusus untuk mengeluarkan garam, sehingga sering tampak berkilau keperakan. Spesies ini juga memiliki penyebaran paling luas dibanding mangrove lainnya dan sering menjadi spesies pionir dalam kolonisasi habitat baru.'
            },
            'Avicennia alba': {
                subtitle: 'Api-Api Putih',
                description: 'Avicennia alba adalah spesies mangrove dengan ciri khas bunga putih yang cantik. Spesies ini tumbuh di zona tengah hutan mangrove dan memiliki peran penting dalam stabilisasi substrat.'
            },
            'Rhizopora mucronata': {
                subtitle: 'Bakau Merah',
                description: 'Rhizopora mucronata dikenal dengan akar tunjangnya yang kokoh. Spesies ini dominan di zona depan hutan mangrove dan berperan penting dalam melindungi garis pantai dari abrasi.'
            },
            'Rhizopora stylosa': {
                subtitle: 'Bakau Kecil',
                description: 'Rhizopora stylosa adalah spesies mangrove dengan ukuran lebih kecil dibanding kerabat dekatnya. Spesies ini adaptif terhadap berbagai kondisi lingkungan pesisir.'
            },
            'Sonneratia alba': {
                subtitle: 'Pidada Merah',
                description: 'Sonneratia alba memiliki daun yang tebal dan bunga yang menarik perhatian serangga penyerbuk. Spesies ini sering ditemukan di zona yang lebih dekat dengan laut.'
            }
        };
        
        const speciesData = details[speciesName] || details['Avicennia marina'];
        
        document.querySelector('.species-subtitle').textContent = speciesData.subtitle;
        document.querySelector('.species-description').innerHTML = `<strong>${speciesName}</strong> ${speciesData.description}`;
    }
});