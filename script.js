const venueSections = [
  { id: 'orchestra', name: 'Orchestra', price: 68, rows: ['A', 'B', 'C', 'D', 'E'], seatsPerRow: 10, seatsPerBlock: 5, unavailable: ['A-04', 'C-08', 'E-02'] },
  { id: 'mezzanine', name: 'Mezzanine', price: 48, rows: ['F', 'G', 'H'], seatsPerRow: 8, seatsPerBlock: 4, unavailable: ['F-06', 'H-01'] },
  { id: 'balcony', name: 'Balcony', price: 32, rows: ['J', 'K'], seatsPerRow: 8, seatsPerBlock: 4, unavailable: ['J-03'] }
];

const sectionsRoot = document.querySelector('#sections-root');
const seats = [];
function createVenue() {
  venueSections.forEach(section => {
    const sectionElement = document.createElement('section');
    sectionElement.className = `venue-section ${section.id}`;
    const heading = document.createElement('div');
    heading.className = 'section-heading';
    const sectionTitle = document.createElement('h3');
    sectionTitle.id = `${section.id}-heading`;
    sectionTitle.textContent = section.name;
    sectionElement.setAttribute('aria-labelledby', sectionTitle.id);
    const sectionMeta = document.createElement('span');
    sectionMeta.className = 'section-meta';
    sectionMeta.textContent = `${section.rows.join(' · ')} · $${section.price.toFixed(2)}`;
    heading.append(sectionTitle, sectionMeta);
    sectionElement.append(heading);
    const rowsContainer = document.createElement('div');
    rowsContainer.className = 'seat-rows';
    section.rows.forEach(rowName => {
      const rowElement = document.createElement('div');
      rowElement.className = 'seat-row';
      rowElement.setAttribute('role', 'group');
      rowElement.setAttribute('aria-label', `Row ${rowName}`);
      rowsContainer.append(rowElement);
    });
    sectionElement.append(rowsContainer);
    sectionsRoot.append(sectionElement);
  });
}

createVenue();
