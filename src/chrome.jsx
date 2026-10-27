import { ADDRESS, MAPS_URL, PHONE_DISPLAY, PHONE_HREF } from './data.js';

export function SectionHead({ eyebrow, title, lede, align = 'center' }) {
  return (
    <div className={`section-head section-head--${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {lede ? <p>{lede}</p> : null}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <span className="footer-brand__name">
            Atithi <em>Restaurant &amp; Guest House</em>
          </span>
          <p>अतिथि देवो भवः — the guest is family. Pure-veg kitchen and clean rooms at the Fatehabad bypass, 40 minutes from the Taj.</p>
          <p className="footer-brand__meta">4.2 ★ · 257 Google reviews · Rooms from ₹527</p>
        </div>
        <div className="footer-col">
          <h4>On this page</h4>
          {[
            ['Top', '#top'],
            ['The menu', '#menu'],
            ['Ratings', '#ratings'],
            ['Stays', '#stay'],
            ['Gallery', '#gallery'],
            ['Playground', '#play'],
            ['Contact', '#contact']
          ].map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>
        <div className="footer-col">
          <h4>Visit</h4>
          <a href={MAPS_URL} target="_blank" rel="noreferrer">{ADDRESS}</a>
          <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
          <span>Restaurant 7 AM – 11 PM</span>
          <span>Front desk always open</span>
        </div>
      </div>
      <div className="footer-mini wrap">
        <span>© {new Date().getFullYear()} Atithi Restaurant &amp; Guest House, Fatehabad, Agra.</span>
        <span>Website photographs are representative.</span>
      </div>
    </footer>
  );
}
