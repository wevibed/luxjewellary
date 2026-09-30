import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const A='/assets/'
const wa='263787356905'
const phone='+263 78 735 6905'

const products=[
  ['Screenshot 2026-09-30 130403.png','Rings','Wedding & engagement rings'],
  ['Screenshot 2026-09-30 130408.png','Rings','Featured ring collection'],
  ['Screenshot 2026-09-30 130413.png','Watches','Statement timepieces'],
  ['Screenshot 2026-09-30 130421.png','Rings','Elegant ring styles'],
  ['Screenshot 2026-09-30 130426.png','Watches','Classic watch styles'],
  ['Screenshot 2026-09-30 130443.png','Accessories','Gift-ready accessories'],
  ['Screenshot 2026-09-30 130451.png','Accessories','Beauty & accessory picks'],
  ['Screenshot 2026-09-30 130504.png','Accessories','Signature accessory'],
  ['Screenshot 2026-09-30 130517.png','Rings','Featured piece'],
  ['Screenshot 2026-09-30 130529.png','Bags','Everyday bags'],
  ['Screenshot 2026-09-30 130535.png','Bags','Backpacks & carry'],
  ['Screenshot 2026-09-30 130542.png','Bags','Minimal backpacks'],
  ['Screenshot 2026-09-30 130555.png','Rings','Couple ring styles'],
  ['Screenshot 2026-09-30 130601.png','Rings','Ring collection'],
  ['Screenshot 2026-09-30 130605.png','Rings','Black ring style'],
  ['Screenshot 2026-09-30 130609.png','Rings','Classic ring style'],
]

const categories=[
  ['Rings','Wedding & engagement rings','Screenshot 2026-09-30 130601.png'],
  ['Watches','Everyday & statement watches','Screenshot 2026-09-30 130504.png'],
  ['Bags','Satchels & laptop bags','Screenshot 2026-09-30 130535.png'],
  ['Accessories','Sunglasses & more','Screenshot 2026-09-30 130451.png'],
]

function waLink(text='Hello Luxjewelry Zimbabwe, I would like to enquire about an item.') {
  return `https://wa.me/${wa}?text=${encodeURIComponent(text)}`
}

function App(){
  const [menu,setMenu]=useState(false)
  const [filter,setFilter]=useState('All')
  const filtered=filter==='All'?products:products.filter(p=>p[1]===filter)
  return <div className="site">
    <div className="bg bg-one"></div>
    <div className="bg bg-two"></div>

    <div className="topline">
      <span>Footbridge Mall · Table B35</span>
      <span>Island City Mall · Table 28</span>
      <a href={waLink()} target="_blank" rel="noreferrer">WhatsApp · {phone}</a>
    </div>

    <header className="nav glass">
      <a className="brand" href="#home">
        <span className="brand-mark">LUX</span>
        <span className="brand-name">LUXJEWELRY<small>ZIMBABWE</small></span>
      </a>
      <button className="menu-btn" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">☰</button>
      <nav className={menu?'navlinks open':'navlinks'}>
        <a href="#home" onClick={()=>setMenu(false)}>Home</a>
        <a href="#collection" onClick={()=>setMenu(false)}>Collection</a>
        <a href="#featured" onClick={()=>setMenu(false)}>Featured</a>
        <a href="#visit" onClick={()=>setMenu(false)}>Visit Us</a>
        <a className="nav-wa" href={waLink()} target="_blank" rel="noreferrer"><span className="wa-symbol">◔</span> WhatsApp</a>
      </nav>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="hero-image"></div>
        <div className="hero-shade"></div>
        <div className="hero-content">
          <p className="eyebrow">JEWELRY · WATCHES · ACCESSORIES</p>
          <h1>Pieces made for<br/><em>the moments</em><br/>that matter.</h1>
          <p className="hero-copy">Wedding and engagement rings, watches, bags, sunglasses and carefully selected accessories.</p>
          <div className="actions">
            <a className="btn gold" href={waLink('Hello Luxjewelry Zimbabwe, I would like to view your current collection.')} target="_blank" rel="noreferrer"><span className="wa-symbol">◔</span> Shop on WhatsApp</a>
            <a className="btn outline" href="#collection">Explore Collection →</a>
          </div>
        </div>
        <div className="hero-note">TABLE B35 · FOOTBRIDGE MALL<br/>TABLE 28 · ISLAND CITY MALL</div>
      </section>

      <section className="promise glass">
        <div><b>Wedding & Engagement</b><span>Rings for meaningful moments</span></div>
        <div><b>In-store shopping</b><span>Visit us in central Harare</span></div>
        <div><b>Delivery</b><span>Enquire on WhatsApp</span></div>
        <div><b>Direct contact</b><span>{phone}</span></div>
      </section>

      <section className="section photo-section" id="collection">
        <div className="section-head">
          <div><p className="eyebrow">EXPLORE</p><h2>Our Collection</h2></div>
          <p>Discover pieces across rings, watches, bags and accessories.</p>
        </div>
        <div className="category-grid">
          {categories.map(c=><a className="category" href="#featured" key={c[0]} onClick={()=>setFilter(c[0])}>
            <img src={A+c[2]} alt={c[0]}/>
            <div className="category-overlay"><small>{c[1]}</small><strong>{c[0]} <span>→</span></strong></div>
          </a>)}
        </div>
      </section>

      <section className="section featured" id="featured">
        <div className="featured-backdrop"></div>
        <div className="section-head">
          <div><p className="eyebrow">SELECTED PIECES</p><h2>Featured Collection</h2></div>
          <div className="filters">
            {['All','Rings','Watches','Bags','Accessories'].map(x=><button className={filter===x?'active':''} key={x} onClick={()=>setFilter(x)}>{x}</button>)}
          </div>
        </div>
        <div className="product-grid">
          {filtered.map(([img,cat,label])=><article className="product" key={img}>
            <div className="product-image"><img src={A+img} alt={label}/><span>{cat}</span></div>
            <div className="product-info"><small>{cat}</small><h3>{label}</h3><a href={waLink(`Hello Luxjewelry Zimbabwe, I am interested in your ${label.toLowerCase()} (${cat}).`)} target="_blank" rel="noreferrer">Enquire on WhatsApp →</a></div>
          </article>)}
        </div>
      </section>

      <section className="story section">
        <div className="story-image"><img src={A+'Screenshot 2026-09-30 130609.png'} alt="Luxjewelry ring"/></div>
        <div className="story-copy glass">
          <p className="eyebrow">FOR YOUR MOMENTS</p>
          <h2>Jewelry with a place in your story.</h2>
          <p>From wedding and engagement rings to watches, bags and accessories, Luxjewelry Zimbabwe brings together pieces for gifting, celebrating and everyday style.</p>
          <a className="text-link" href={waLink('Hello Luxjewelry Zimbabwe, I would like help choosing an item.')} target="_blank" rel="noreferrer">Speak with us on WhatsApp →</a>
        </div>
      </section>

      <section className="visit section" id="visit">
        <div className="visit-bg"></div>
        <div className="visit-content glass">
          <p className="eyebrow">VISIT US</p>
          <h2>Find Luxjewelry<br/><em>in Harare.</em></h2>
          <div className="locations">
            <div><b>Footbridge Mall</b><span>Table B35 · Opposite Joina City along Speke<br/>Entrance next to Creamy Inn</span></div>
            <div><b>Island City Mall</b><span>Table 28 · Corner Jason Moyo & Angwa Street<br/>NB: only rings are sold at this store</span></div>
          </div>
          <div className="actions"><a className="btn gold" href={waLink()} target="_blank" rel="noreferrer"><span className="wa-symbol">◔</span> WhatsApp Us</a><a className="btn outline" href="tel:+263787356905">Call {phone}</a></div>
        </div>
      </section>
    </main>

    <footer className="footer">
      <div><span className="brand-mark">LUX</span><strong>LUXJEWELRY</strong><small>ZIMBABWE</small></div>
      <p>Jewelry · Watches · Bags · Accessories</p>
      <a href={waLink()} target="_blank" rel="noreferrer">WhatsApp →</a>
    </footer>

    <a className="floating-wa" href={waLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <span>◔</span><b>WhatsApp</b>
    </a>
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
