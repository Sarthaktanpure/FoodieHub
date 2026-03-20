
  const coordinates =  JSON.stringify(restaurant.geometry.coordinates) ;

  const lat = coordinates[1];
  const lng = coordinates[0];

  const map = L.map('map').setView([lat, lng], 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup("<%= restaurant.title %>")
    .openPopup();
