(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })();
 



  //Map

    document.addEventListener("DOMContentLoaded", function() {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        const location = mapElement.dataset.location; // Get location from data attribute
        const map = L.map('map').setView([51.505, -0.09], 13); // Default view

      //   L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      //     maxZoom: 19,
      // }).addTo(map);
      
    //   L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    //     maxZoom: 19,
    // }).addTo(map);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        if (location) {
            // Fetch coordinates for the given location
            fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        const lat = data[0].lat;
                        const lon = data[0].lon;
                        map.setView([lat, lon], 13);
                        L.marker([lat, lon]).addTo(map)
                            .bindPopup(location)
                            .openPopup();
                    } else {
                        console.error('Location not found');
                    }
                })
                .catch(error => console.error('Error fetching location:', error));
        }
    }
});

