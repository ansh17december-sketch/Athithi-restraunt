export const unsplash = (id, w = 900) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=max`;


export const menuPrintSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="760" viewBox="0 0 600 760">
  <rect width="600" height="760" fill="#f7f0e2"/>
  <rect x="26" y="26" width="548" height="708" fill="none" stroke="#a43d1e" stroke-width="3"/>
  <rect x="38" y="38" width="524" height="684" fill="none" stroke="#a43d1e" stroke-width="1.5"/>
  <text x="300" y="120" text-anchor="middle" font-family="Georgia, serif" font-size="52" fill="#131110" letter-spacing="6">ATITHI</text>
  <text x="300" y="158" text-anchor="middle" font-family="Georgia, serif" font-size="19" fill="#a43d1e" letter-spacing="4">RESTAURANT &amp; GUEST HOUSE</text>
  <line x1="120" y1="186" x2="480" y2="186" stroke="#131110" stroke-width="1.5"/>
  <text x="300" y="238" text-anchor="middle" font-family="Georgia, serif" font-size="30" fill="#131110" font-style="italic">Today’s Specials</text>
  ${[
    ['Masala Dosa (2pc)', '120'],
    ['Atithi Special Thali', '220'],
    ['Paneer Butter Masala', '190'],
    ['Chhole Bhature', '140'],
    ['Raj Kachori Chaat', '90'],
    ['Tandoori Paneer Tikka', '240'],
    ['Gulab Jamun (2pc)', '60']
  ]
    .map(
      ([dish, price], i) => `
  <text x="90" y="${300 + i * 46}" font-family="Georgia, serif" font-size="24" fill="#2a2119">${dish}</text>
  <text x="510" y="${300 + i * 46}" text-anchor="end" font-family="Georgia, serif" font-size="24" fill="#2a2119">₹${price}</text>
  <line x1="90" y1="${314 + i * 46}" x2="510" y2="${314 + i * 46}" stroke="#c9bda8" stroke-dasharray="4 6"/>`
    )
    .join('')}
  <text x="300" y="700" text-anchor="middle" font-family="Georgia, serif" font-size="20" fill="#8a7a63">Pure Veg · Bypass Tiraha, Fatehabad · ☎ 096395 05040</text>
</svg>`;

export const MENU_PRINT_URL = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(menuPrintSvg)}`;

export const DISHES = [
  { src: unsplash('photo-1631515243349-e0cb75fb8d3a'), alt: 'Crisp masala dosa with chutneys', title: 'South Indian Dosa', subtitle: 'All-day breakfast' },
  { src: unsplash('photo-1631452180519-c014fe946bc7'), alt: 'North Indian thali with dal, sabzi and roti', title: 'Atithi Special Thali', subtitle: 'House favourite' },
  { src: unsplash('photo-1567337710282-00832b415979'), alt: 'Rich paneer curry spread', title: 'Paneer & Curries', subtitle: 'North Indian' },
  { src: unsplash('photo-1601050690597-df0568f70950'), alt: 'Chaat served street style', title: 'Street Chaat', subtitle: 'Evenings' },
  { src: unsplash('photo-1574071318508-1cdbab80d002'), alt: 'Tandoori grill straight from the clay oven', title: 'Tandoori Grill', subtitle: 'From the clay oven' },
  { src: unsplash('photo-1504674900247-0877df9cc836'), alt: 'Plated dinner special', title: 'Dinner Specials', subtitle: 'Chef’s pick' },
  { src: unsplash('photo-1414235077428-338989a2e8c0'), alt: 'Continental plated dish', title: 'Continental', subtitle: 'For every traveller' },
  { src: unsplash('photo-1551024506-0bccd828d307'), alt: 'Warm dessert with chocolate', title: 'Desserts', subtitle: 'End on a sweet note' }
];

export const PLATES = [
  {
    src: unsplash('photo-1631515243349-e0cb75fb8d3a'),
    front: 'Masala Dosa',
    title: 'Masala Dosa',
    price: '₹120',
    spice: 'Mild',
    desc: 'Stone-ground batter fermented overnight, crisped on cast iron and served with two house chutneys.'
  },
  {
    src: unsplash('photo-1631452180519-c014fe946bc7'),
    front: 'Special Thali',
    title: 'Atithi Special Thali',
    price: '₹220',
    spice: 'Medium',
    desc: 'Two sabzis, dal, rice, four rotis, salad, papad, curd and a sweet. The plate regulars drive back for.'
  },
  {
    src: unsplash('photo-1574071318508-1cdbab80d002'),
    front: 'Tandoori Grill',
    title: 'Tandoori Paneer Tikka',
    price: '₹240',
    spice: 'Hot',
    desc: 'Cubes of fresh paneer marinated in hung curd and spices, chargrilled in the clay oven.'
  }
];

export const ROOMS = [
  {
    image: unsplash('photo-1590490360182-c33d57733427', 800),
    name: 'Standard Double',
    price: '₹527',
    desc: 'Clean AC double room, hot water, Wi-Fi and secure parking. The tired-traveller essential.'
  },
  {
    image: unsplash('photo-1618773928121-c32242e63f39', 800),
    name: 'Deluxe Room',
    price: '₹720',
    desc: 'A little more room to spread out, blackout curtains and a work desk by the window.'
  },
  {
    image: unsplash('photo-1582719508461-905c673771fd', 800),
    name: 'Family Suite',
    price: '₹980',
    desc: 'Two connected rooms and an extra bed — sized for families and road-trip crews.'
  }
];

export const GALLERY_ITEMS = [
  { src: unsplash('photo-1564507592333-c60657eea523', 600), alt: 'Taj Mahal, Agra — 40 minutes from Fatehabad' },
  { src: unsplash('photo-1548013146-72479768bada', 600), alt: 'Taj Mahal at dawn across the river' },
  { src: unsplash('photo-1582719508461-905c673771fd', 600), alt: 'A cozy hotel room at Atithi Guest House' },
  { src: unsplash('photo-1618773928121-c32242e63f39', 600), alt: 'Neatly made bed with warm lighting' },
  { src: unsplash('photo-1590490360182-c33d57733427', 600), alt: 'Comfortable double room' },
  { src: unsplash('photo-1566073771259-6a8506099945', 600), alt: 'Guest house courtyard' },
  { src: unsplash('photo-1552566626-52f8b828add9', 600), alt: 'The Atithi restaurant after dark' },
  { src: unsplash('photo-1561361513-2d000a50f0dc', 600), alt: 'Travellers on the road to Agra' }
];

export const AMENITIES = [
  'Wi-Fi', 'Parking', 'Air conditioning', 'Airport shuttle',
  '24-hour front desk', 'Laundry', 'Pets allowed', 'Disabled facilities', 'Baby-sitting'
];

export const INITIAL_BILL = [
  { id: 'dosa', name: 'Masala Dosa (2)', price: '₹120' },
  { id: 'thali', name: 'Atithi Special Thali', price: '₹220' },
  { id: 'paneer', name: 'Paneer Butter Masala', price: '₹190' },
  { id: 'chaat', name: 'Raj Kachori', price: '₹90' },
  { id: 'total', name: 'Grand Total', price: '₹620' }
];

export const BILL_ROW_STYLES = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: 16,
  width: '100%',
  padding: '14px 18px',
  borderRadius: 12,
  background: '#241d17',
  border: '1px solid rgba(242, 234, 217, 0.16)',
  fontWeight: 600,
  fontSize: 14,
  color: '#f2ead9'
};

export const ADDRESS = 'Bypass Tiraha, Shamshabad–Fatehabad Marg, Fatehabad, Garhi Dariyab, Uttar Pradesh 283111';
export const PHONE_DISPLAY = '096395 05040';
export const PHONE_HREF = 'tel:+919639505040';
export const MAPS_URL =
  'https://maps.google.com/?q=Atithi+Restaurant+%26+Guest+House+Fatehabad+Agra';
