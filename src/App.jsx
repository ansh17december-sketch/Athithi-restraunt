import { useEffect, useState } from 'react';
import BubbleMenu from './components/BubbleMenu.jsx';
import TechText from './components/TechText.jsx';
import ScrollExpand from './components/ScrollExpand.jsx';
import CircularCarousel from './components/CircularCarousel.jsx';
import FlipCard from './components/FlipCard.jsx';
import InfiniteSpiral from './components/InfiniteSpiral.jsx';
import Shredder from './components/Shredder.jsx';
import PaperCrumple from './components/PaperCrumple.jsx';
import BellToggle from './components/BellToggle.jsx';
import SwipeToast from './components/SwipeToast.jsx';
import SlingButton from './components/SlingButton.jsx';
import PeekRating from './components/PeekRating.jsx';
import HoldButton from './components/HoldButton.jsx';
import SlideCommit from './components/SlideCommit.jsx';
import BounceCards from './components/BounceCards.jsx';
import FlowingMenu from './components/FlowingMenu.jsx';
import CardSwap from './components/CardSwap.jsx';
import Footer, { SectionHead } from './chrome.jsx';
import {
  ADDRESS, AMENITIES, BILL_ROW_STYLES, DISHES, GALLERY_ITEMS, INITIAL_BILL,
  MAPS_URL, MENU_PRINT_URL, PHONE_DISPLAY, PHONE_HREF, PLATES, ROOMS,
  unsplash
} from './data.js';

const NAV_ITEMS = [
  { label: 'home', href: '#top', ariaLabel: 'Home', rotation: -8, hoverStyles: { bgColor: '#d98e32', textColor: '#16120e' } },
  { label: 'menu', href: '#menu', ariaLabel: 'Menu', rotation: 8, hoverStyles: { bgColor: '#8a2f19', textColor: '#f2ead9' } },
  { label: 'ratings', href: '#ratings', ariaLabel: 'Ratings', rotation: 6, hoverStyles: { bgColor: '#c8a15a', textColor: '#16120e' } },
  { label: 'stays', href: '#stay', ariaLabel: 'Stays', rotation: -6, hoverStyles: { bgColor: '#2f6f4f', textColor: '#f2ead9' } },
  { label: 'gallery', href: '#gallery', ariaLabel: 'Gallery', rotation: 8, hoverStyles: { bgColor: '#8a5a2b', textColor: '#f2ead9' } },
  { label: 'play', href: '#play', ariaLabel: 'Playground', rotation: -8, hoverStyles: { bgColor: '#f2ead9', textColor: '#16120e' } }
];

const teasers = [
  { href: '#menu', image: unsplash('photo-1631452180519-c014fe946bc7', 700), title: 'The Menu', copy: 'Thalis, dosas and the clay oven — with the story behind each signature plate.' },
  { href: '#ratings', image: unsplash('photo-1504674900247-0877df9cc836', 700), title: 'Guest scores', copy: 'What 257 Google reviews say — and your own verdict on the way out.' },
  { href: '#stay', image: unsplash('photo-1618773928121-c32242e63f39', 700), title: 'Stays', copy: 'Rooms from ₹527 with Wi-Fi, AC and a cup of adrak chai on arrival.' },
  { href: '#play', image: unsplash('photo-1551024506-0bccd828d307', 700), title: 'While you wait', copy: 'A bill to shred and a specials print to crumple.' }
];

const starters = [
  { src: unsplash('photo-1601050690597-df0568f70950', 600), alt: 'Raj Kachori chaat — ₹90' },
  { src: unsplash('photo-1574071318508-1cdbab80d002', 600), alt: 'Paneer Tikka straight off the skewer — ₹240' },
  { src: unsplash('photo-1504674900247-0877df9cc836', 600), alt: 'Hot onion bhaji plate — ₹110' },
  { src: unsplash('photo-1414235077428-338989a2e8c0', 600), alt: 'Hara bhara kebab — ₹160' },
  { src: unsplash('photo-1551024506-0bccd828d307', 600), alt: 'Dahi ke sholay — ₹150' }
];

const premiumRows = [
  {
    text: 'Atithi Special Thali',
    marquee: 'House Signature · Two Sabzis · Dal · Four Rotis',
    meta: '₹220',
    image: unsplash('photo-1631452180519-c014fe946bc7', 600),
  },
  {
    text: 'Tandoori Grand Grill',
    marquee: 'Paneer Tikka · Hara Bhara Kebab · Charred Capsicum',
    meta: '₹420 · For two',
    image: unsplash('photo-1574071318508-1cdbab80d002', 600),
  },
  {
    text: 'South Indian Tou',
    marquee: 'Masala Dosa · Idli Sambar · Medu Vada · Filter Coffee',
    meta: '₹180',
    image: unsplash('photo-1631515243349-e0cb75fb8d3a', 600),
  },
  {
    text: 'Dessert Thali',
    marquee: 'Gulab Jamun · Kulfi Falooda · Warm Halwa',
    meta: '₹160',
    image: unsplash('photo-1551024506-0bccd828d307', 600),
  }
];

const roomDeck = [
  { title: 'Standard Double · ₹527', image: unsplash('photo-1590490360182-c33d57733427', 900), alt: 'Clean standard double room at Atithi Guest House' },
  { title: 'Deluxe Room · ₹720', image: unsplash('photo-1618773928121-c32242e63f39', 900), alt: 'Deluxe room with warm lighting' },
  { title: 'Family Suite · ₹980', image: unsplash('photo-1582719508461-905c673771fd', 900), alt: 'Family suite with two connected rooms' },
  { title: 'The dining hall, after dark', image: unsplash('photo-1552566626-52f8b828add9', 900), alt: 'Atithi restaurant after dark' }
];

const reviews = [
  { quote: 'Clean rooms, warm food, honest rates — exactly what you need on a night drive before Fatehabad.', who: 'Rakesh T. · Google' },
  { quote: 'The thali is worth the detour. Staff kept the room ready while we ate without being asked twice.', who: 'Meera S. · Google' },
  { quote: '24-hour desk answered at 3 AM and had tea going in five minutes.', who: 'Jitendra P. · Google' }
];

function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'Switch to daylight mode' : 'Switch to parlour (dark) mode'}
      title={theme === 'dark' ? 'Daylight mode' : 'Parlour mode'}
    >
      <span className="theme-toggle__glyph" data-theme={theme} aria-hidden="true">
        {theme === 'dark' ? '☀' : '☾'}
      </span>
    </button>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('atithi-theme') || 'dark');
  const [toast, setToast] = useState(null);
  const [bill, setBill] = useState(INITIAL_BILL);
  const light = theme === 'light';
  const surfaceFade = light ? '#f6efe4' : '#161210';

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('atithi-theme', theme);
  }, [theme]);

  return (
    <>
      <header id="top" className="hero">
        <div className="hero-wordmark">
          <TechText
            text="ATITHI"
            fontWeight={500}
            fontSize={210}
            reveal="letter"
            dashLength={4}
            dashGap={2}
            specks={15}
            intro="metrics"
            introDuration={2.2}
            clickKick
            guides={false}
          />
        </div>
        <p className="hero-tagline">अतिथि देवो भवः — the guest is family</p>
        <p className="hero-sub">
          Pure-veg restaurant and guest house on the Bypass Tiraha, Shamshabad Road,
          Fatehabad, Agra. Hot North &amp; South Indian food, clean air-conditioned rooms,
          and a 24-hour front desk for travellers on the move.
        </p>
        <div className="hero-actions">
          <a className="btn btn--solid" href={PHONE_HREF}>Call{'\u00A0'}096395{'\u00A0'}05040</a>
          <a className="btn btn--ghost" href="#menu">See the menu ↓</a>
          <ThemeToggle theme={theme} onToggle={() => setTheme(light ? 'dark' : 'light')} />
        </div>
        <div className="hero-bell">
          <BellToggle
            offLabel="Today's special?"
            onLabel="Specials on!"
            color={light ? '#2a211a' : '#f2ead9'}
            background={light ? '#fbf5ea' : '#221c16'}
            onColor="#16120e"
            onBackground="#d98e32"
            badgeColor="#8a2f19"
            size="md"
            count={1}
            badge
            defaultPressed={false}
            onChange={pressed => {
              if (pressed) setToast({ title: 'You’re on the list!', desc: 'Today’s special lands here at 11 AM.' });
            }}
          />
        </div>
      </header>

      <section className="facts">
        <div className="wrap-grid">
          <div className="fact card"><strong>4.2 ★</strong><span>257 Google reviews</span></div>
          <div className="fact card"><strong>₹527+</strong><span>Nightly room rates</span></div>
          <div className="fact card"><strong>24×7</strong><span>Front desk &amp; security</span></div>
          <div className="fact card"><strong>Family</strong><span>Pure-veg kitchen, pets welcome</span></div>
        </div>
      </section>

      <section className="scroll-hero">
        <ScrollExpand
          src={unsplash('photo-1517248135467-4c7edcad34c4', 2000)}
          alt="Inside the Atithi restaurant at Fatehabad, Agra"
          title="Welcome to Atithi"
          scrollHint="Scroll"
          useWindowScroll
          mediaZoom={1.4}
          startWidth={56}
          startHeight={50}
        >
          <div className="se-card card">
            <h2>Every traveller, fed and rested</h2>
            <p>
              From a quick dosa at dawn to a full thali after the highway dash, our kitchen
              runs on fresh, pure-veg cooking. Upstairs, simple, spotless rooms with Wi-Fi,
              AC and an airport shuttle on request rest you before the Taj.
            </p>
            <div className="hero-actions">
              <a className="btn btn--solid" href="#menu">Explore the menu</a>
              <a className="btn btn--ghost" href="#stay">Rooms &amp; amenities</a>
            </div>
          </div>
        </ScrollExpand>
      </section>

      <SectionHead
        eyebrow="The menu"
        title="Signature plates"
        align="left"
        lede="Give a plate a flick — or just click it — to see what makes it worth the drive."
      />
      <section className="plates" id="menu">
        {PLATES.map(card => (
          <FlipCard
            key={card.title}
            axis="y"
            flipOnClick
            draggable
            tilt
            tiltMax={10}
            glare
            glareOpacity={0.2}
            hoverScale={1.03}
            width={300}
            height={390}
            radius={20}
            background={light ? '#fbf5ea' : '#231d18'}
            color={light ? '#2a211a' : '#f2ead9'}
            onFlipChange={flipped => {
              if (flipped) setToast({ title: `${card.front} — ${card.price}`, desc: 'Flip back to keep browsing.' });
            }}
            front={
              <div className="plate-front">
                <img src={card.src} alt={card.title} loading="lazy" />
                <span className="plate-front__label">{card.front}</span>
              </div>
            }
            back={
              <div className="plate-back">
                <h3>{card.title}</h3>
                <p className="plate-back__meta">{card.price} · {card.spice} spice</p>
                <p className="plate-back__desc">{card.desc}</p>
                <span className="plate-back__hint">Tap to flip back</span>
              </div>
            }
          />
        ))}
      </section>

      <SectionHead eyebrow="The full spread" title="Turn the ring" lede="Flick the wheel or drag through the ring — every plate comes off the same five-burner line." />
      <section className="dishes">
        <CircularCarousel
          items={DISHES}
          preset="cylinder"
          intro="rise"
          cardWidth={220}
          aspectRatio={0.85}
          gap={28}
          speed={14}
          captions
          depthFade={0.85}
          fadeColor={surfaceFade}
          cornerRadius={18}
        />
      </section>

      {/* --- Premium: FlowingMenu (chef's table) --- */}
      <SectionHead
        eyebrow="The chef's counter"
        title="Premium picks, on a liquid menu"
        lede="Six stool seats facing the tandoor can be asked for by name — sweep over a line and the band pours across it."
      />
      <section className="premium-menu" aria-label="Premium menu highlights">
        <FlowingMenu
          items={premiumRows}
          speed={55}
          stretch={0.6}
          magnet={0.3}
          followCursor={0.4}
          direction="alternate"
          showIndex
          showArrow
          bandRadius={0}
          textColor={light ? '#2a211a' : '#f2ead9'}
          bgColor={light ? '#f6efe4' : '#161210'}
          marqueeBgColor="rgba(217, 142, 50, 0.92)"
          marqueeTextColor="#16120e"
          borderColor={light ? 'rgba(42, 33, 26, 0.14)' : 'rgba(242, 234, 217, 0.13)'}
          onItemClick={item => setToast({ title: item.text, desc: item.meta === '₹220' ? 'House signature — always on the stove.' : 'Ask the counter; prices are dhaba-honest.' })}
        />
      </section>

      {/* --- Ratings --- */}
      <SectionHead
        eyebrow="To begin with"
        title="Starters worth arriving hungry for"
        align="left"
        lede="Hover the fan to push it apart, click a plate for its line on the card."
      />
      <section className="starters">
        <BounceCards
          images={starters}
          containerWidth={520}
          containerHeight={360}
          cardSize={190}
          spread={90}
          rotation={10}
          arc={26}
          pushDistance={170}
          hoverScale={1.08}
          bounciness={0.65}
          borderWidth={5}
          borderColor={light ? '#fbf5ea' : '#f2ead9'}
          radius={20}
          shadow
          enableHover
          onCardClick={index => setToast({ title: 'Starter added to the shortlist', desc: starters[index].alt })}
        />
      </section>

      <SectionHead
        eyebrow="Guest scores"
        title="Rate your visit"
        lede="257 travellers have scored Atithi 4.2 on the big boards — leave your own verdict for the kitchen wall below, and hover a star to name it."
      />
      <section className="ratings" id="ratings">
        <div className="ratings__card card">
          <PeekRating
            defaultValue={4}
            readOnly
            shape="star"
            activeColor="#d98e32"
            idleColor="rgba(138, 108, 75, 0.25)"
            size={30}
            ariaLabel="Average Google rating"
          />
          <p className="ratings__avg">
            <strong>4.2 / 5</strong> — 257 Google reviews, most for the thali and the 24-hour front desk.
          </p>
          <span className="ratings__divider" aria-hidden="true" />
          <PeekRating
            defaultValue={0}
            shape="star"
            labels={['Poor', 'Fair', 'Good', 'Great', 'Superb']}
            activeColor="#d98e32"
            idleColor={light ? 'rgba(42, 33, 26, 0.22)' : 'rgba(242, 234, 217, 0.22)'}
            tipColor={light ? '#2a211a' : '#241d17'}
            tipTextColor="#f2ead9"
            size={38}
            lift={8}
            magnify={1.18}
            popScale={1.25}
            showTip
            allowClear
            ariaLabel="Your rating of Atithi"
            onChange={value => {
              if (value > 0) {
                setToast({ title: 'Shukriya — noted on the wall!', desc: `You scored Atithi ${value} of 5. The kitchen takes every star personally.` });
              }
            }}
          />
          <p className="stage-hint">Click a star to score — click it again to take it back.</p>
        </div>
      </section>

      {/* --- Playground --- */}
      <SectionHead
        eyebrow="While you wait"
        title="A little playground"
        lede="The food takes six minutes. Meanwhile: shred the practice bill, squeeze the specials print."
      />
      <section id="play" style={{ display: 'contents' }}>

        <section className="split">
          <div className="split__copy">
            <p>
              This is tomorrow’s practice bill — nobody’s actually paying it. Grab any line,
              push it through the rollers and watch it come out in curling strips, or set it
              back down somewhere else to shuffle the order.
            </p>
            {bill.length === 0 && (
              <button className="btn btn--solid" onClick={() => setBill(INITIAL_BILL)}>Print a fresh bill</button>
            )}
          </div>
          <div className="play-card card">
            <Shredder
              items={bill}
              renderItem={item => (
                <div style={BILL_ROW_STYLES}>
                  <span>{item.name}</span>
                  <span style={{ color: item.id === 'total' ? '#d98e32' : undefined }}>{item.price}</span>
                </div>
              )}
              onShred={item => setBill(prev => prev.filter(b => b.id !== item.id))}
              onReorder={next => setBill(next)}
              width={340}
              height={460}
              slitColor={light ? '#d9cbb2' : '#332a22'}
              color={light ? '#2a211a' : '#f2ead9'}
              stripWidth={11}
              curl={1.2}
            />
          </div>
        </section>

        <section className="crumple-block">
          <PaperCrumple
            src={MENU_PRINT_URL}
            alt="Today’s specials print from Atithi"
            width={340}
            height={430}
            sceneHeight={560}
            releaseBehavior="creased"
            crumpleAmount={0.9}
            foldCount={7}
            wrinkleDepth={0.7}
            paperColor="#f7f0e2"
            draggable
            returnToOrigin
          />
          <p className="stage-hint">Hold the print and squeeze; let go for lasting creases.</p>
        </section>
      </section>

      {/* --- Stays --- */}
      <SectionHead
        eyebrow="The guest house"
        title="Simple, spotless rooms above the kitchen"
        align="left"
        lede="Whether it’s a midnight highway halt or a Taj Mahal sunrise run, the front desk answers around the clock and the chai is always on."
      />
      <section className="rooms wrap" id="stay">
        {ROOMS.map(room => (
          <article key={room.name} className="room-card card">
            <img src={room.image} alt={room.name} loading="lazy" />
            <div className="room-card__body">
              <div className="room-card__head">
                <h3>{room.name}</h3>
                <span className="room-card__price">{room.price}<em>night</em></span>
              </div>
              <p>{room.desc}</p>
            </div>
          </article>
        ))}
      </section>

      <SectionHead
        eyebrow="Look around"
        title="The rooms, in a deck"
        lede="Drag the front card away, or just let them deal themselves — the deck deals you every room and the dining hall."
      />
      <section className="swap-stage">
        <CardSwap
          items={roomDeck}
          width={430}
          height={300}
          cardDistance={58}
          verticalDistance={66}
          visibleCards={4}
          delay={4200}
          pauseOnHover
          draggable
          cardRadius={20}
          skewAmount={5}
          theme={light ? 'light' : 'dark'}
          onCardClick={index => setToast({ title: roomDeck[index].title, desc: 'Ask the front desk — rooms are often free without notice.' })}
        />
      </section>

      <div className="amenities wrap">
        {AMENITIES.map(a => <span className="chip" key={a}>{a}</span>)}
      </div>

      <SectionHead eyebrow="From the register" title="What guests write" />
      <section className="reviews wrap">
        {reviews.map(r => (
          <figure key={r.who} className="review card">
            <blockquote>“{r.quote}”</blockquote>
            <figcaption>{r.who}</figcaption>
          </figure>
        ))}
      </section>

      {/* --- Gallery --- */}
      <SectionHead
        eyebrow="The gallery"
        title="Stays & surroundings"
        lede="Rooms, our frontage after dark and Agra within reach. Scroll inside the ribbon, drag it, or let it drift — it never runs out."
      />
      <section className="spiral-stage" id="gallery">
        <InfiniteSpiral
          items={GALLERY_ITEMS}
          animationMode="all"
          speed={0.55}
          radius={190}
          cardWidth={140}
          cardHeight={140}
          verticalSpacing={84}
          perspective={1000}
          cardRadius={14}
          centerScale={1.25}
          edgeBlur={8}
          cardsPerTurn={7}
          pauseOnHover
          grayscale={0.12}
        />
      </section>

      {/* --- Contact --- */}
      <SectionHead
        eyebrow="Find us"
        title="Come in. Stay a while."
        lede="You’ll find us right at the Bypass Tiraha — the lit storefront on the corner. Pull up on the forecourt; parking and pets are both fine."
      />
      <section className="contact-grid wrap" id="contact">
        <div className="contact-card card">
          <h3>Address</h3>
          <p className="value">{ADDRESS}</p>
          <div className="slide-slot">
            <SlideCommit
              label="Slide for directions"
              doneLabel="Opening maps"
              onConfirm={() => {
                window.open(MAPS_URL, '_blank', 'noopener');
                setToast({ title: 'Heading for the Tiraha…', desc: 'Maps opened in a new tab — see you at the corner.' });
              }}
              onDone={() => undefined}
              trackColor={light ? 'rgba(42, 33, 26, 0.08)' : '#241d17'}
              handleColor="#f2ead9"
              successColor="#2f6f4f"
              width={250}
              height={54}
              radius={27}
            />
          </div>
        </div>

        <div className="contact-card card">
          <h3>Call &amp; book</h3>
          <p className="value"><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></p>
          <p className="note">Front desk answers 24×7 — rooms often free without notice.</p>
          <div className="sling-row">
            <p>Drag the pad and let go to ring us:</p>
            <SlingButton
              onSend={() => {
                setToast({ title: 'Ringing the front desk…', desc: `${PHONE_DISPLAY} — or simply tap the number above.` });
                try { window.location.href = PHONE_HREF; } catch { /* tel: may be blocked in embeds */ }
              }}
              padColor={light ? '#2a211a' : '#f2ead9'}
              iconColor={light ? '#f2ead9' : '#16120e'}
              accentColor="#d98e32"
              wellColor={light ? 'rgba(42,33,26,0.08)' : '#2a231c'}
              bandColor={light ? 'rgba(42,33,26,0.28)' : '#4d4137'}
              size={64}
              ariaLabel="Rings the Atithi front desk"
            />
          </div>
        </div>

        <div className="contact-card card">
          <h3>Reserve</h3>
          <p className="note spaced-note">Driving in tonight? Hold the button for two seconds and we’ll keep the corner table warm.</p>
          <div className="hold-slot">
            <HoldButton
              doneLabel="Table reserved!"
              backgroundColor={light ? '#fbf5ea' : '#241d17'}
              fillColor="#d98e32"
              textColor={light ? '#2a211a' : '#f2ead9'}
              fillTextColor="#16120e"
              size="md"
              radius={999}
              fillDirection="up"
              holdTime={2000}
              wave
              glow
              resetAfter={1400}
              onHold={() => setToast({ title: 'Table for tonight — noted!', desc: 'No payment needed; just ask for Atithi when you walk in.' })}
            >
              Hold to reserve
            </HoldButton>
          </div>
        </div>

        <div className="contact-card card">
          <h3>Hours</h3>
          <p className="value">Restaurant: 7:00 AM – 11:00 PM</p>
          <p className="note">Front desk &amp; rooms: always open.</p>
          <h3 className="spaced">Group bookings</h3>
          <p className="note">Convoys and tour buses are routine — call ahead for the kitchen to prep extra thalis.</p>
        </div>
      </section>

      <Footer />

      {toast && (
        <SwipeToast
          open
          title={toast.title}
          description={toast.desc}
          background={light ? '#fbf5ea' : '#231d18'}
          color={light ? '#2a211a' : '#f2ead9'}
          fuseColor="#d98e32"
          duration={0}
          fuse="bottom"
          closeButton
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}
