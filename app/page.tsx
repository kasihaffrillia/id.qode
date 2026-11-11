
"use client";

import { useState, type FormEvent } from "react";

const products = [
  {
    id: "nfc",
    name: "Kartu NFC",
    price: 55000,
    description:
      "Kartu identitas digital yang memudahkan pertukaran informasi melalui teknologi NFC.",
    features: ["Teknologi NFC", "Praktis dan modern", "Desain personal"],
    type: "NFC CARD",
  },
  {
    id: "sharp",
    name: "Kartu Art Carton Sharp",
    price: 60000,
    description:
      "Kartu bisnis dengan sudut tajam yang memberikan kesan tegas dan profesional.",
    features: ["Bahan Art Carton", "Sudut Sharp", "QR Code", "Glossy / Doff"],
    type: "PRINTED CARD",
  },
  {
    id: "rounded",
    name: "Kartu Art Carton Rounded",
    price: 70000,
    description:
      "Kartu bisnis dengan sudut rounded untuk tampilan modern dan elegan.",
    features: ["Bahan Art Carton", "Sudut Rounded", "QR Code", "Glossy / Doff"],
    type: "PRINTED CARD",
  },
  {
    id: "design",
    name: "Hanya Desain",
    price: 30000,
    description:
      "Layanan pembuatan desain kartu sesuai kebutuhan dan karakter identitas bisnis.",
    features: ["Desain personal", "File digital", "Konsep sesuai kebutuhan"],
    type: "DESIGN SERVICE",
  },
];

const team = [
  { role: "Direktur", name: "Masratu Siti Suaibah" },
  { role: "Divisi Pemasaran", name: "Amartya Nadiva R" },
  { role: "Divisi Pelayanan", name: "Saskia Althafunissa" },
  { role: "Divisi Produk & Desain", name: "Kasih Afrillia" },
  { role: "Divisi Keuangan", name: "Izul Alfi’al Arif D" },
];

const money = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

export default function Home() {
  const [selected, setSelected] = useState("nfc");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [finish, setFinish] = useState("Glossy");
  const [notes, setNotes] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const product =
    products.find((item) => item.id === selected) ?? products[0];

  function submitOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Halo IDQODE, saya ingin melakukan pemesanan.",
      "",
      `Nama: ${name}`,
      `Nomor WhatsApp: ${phone || "-"}`,
      `Produk: ${product.name}`,
      `Harga: ${money(product.price)}`,
      selected === "sharp" || selected === "rounded"
        ? `Finishing: ${finish}`
        : "",
      `Catatan: ${notes || "-"}`,
      "",
      "Mohon informasi lebih lanjut. Terima kasih.",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/6285762569023?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <main className="idqode-site">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>YOUR IDENTITY GOES DIGITAL</span>
          <span>DESIGN · QR CODE · NFC TECHNOLOGY</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container navbar">
          <a className="brand" href="#home">
            <span className="brand-name">IDQODE<span>.</span></span>
            <span className="brand-caption">YOUR IDENTITY GOES DIGITAL</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Buka navigasi"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Beranda</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>Tentang</a>
            <a href="#products" onClick={() => setMenuOpen(false)}>Produk</a>
            <a href="#process" onClick={() => setMenuOpen(false)}>Proses</a>
            <a href="#team" onClick={() => setMenuOpen(false)}>Tim</a>
            <a
              href="#order"
              className="nav-cta"
              onClick={() => setMenuOpen(false)}
            >
              Mulai Pesanan <span>↗</span>
            </a>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              DIGITAL BUSINESS IDENTITY
            </div>

            <h1>
              Your identity.
              <br />
              <span>Beyond ordinary.</span>
            </h1>

            <p>
              Hadirkan identitas bisnis yang lebih modern, praktis, dan
              profesional melalui desain kartu, QR Code, serta teknologi NFC
              bersama IDQODE.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#products">
                Jelajahi Produk <span>↗</span>
              </a>
              <a className="button-text" href="#about">
                Kenali IDQODE <span>→</span>
              </a>
            </div>

            <div className="hero-note">
              <span />
              Designed to represent your identity.
            </div>
          </div>

          <div className="hero-visual" aria-label="Ilustrasi kartu bisnis digital">
            <div className="visual-circle circle-a" />
            <div className="visual-circle circle-b" />

            <div className="hero-card hero-card-back">
              <div className="card-head">
                <strong>IDQODE</strong>
                <span>01 / 02</span>
              </div>
              <div className="card-big-q">Q.</div>
              <div className="card-foot">
                <span>YOUR IDENTITY</span>
                <span>GOES DIGITAL</span>
              </div>
            </div>

            <div className="hero-card hero-card-front">
              <div className="card-head">
                <strong>IDQODE</strong>
                <span>NFC ENABLED</span>
              </div>
              <div className="card-person">
                <small>DIGITAL BUSINESS CARD</small>
                <h3>Alexandra<br />Morgan.</h3>
                <span>Creative Director</span>
              </div>
              <div className="card-foot">
                <span>SCAN OR TAP TO CONNECT</span>
                <b>▦</b>
              </div>
            </div>

            <div className="float-label float-top">✦ SMART IDENTITY</div>
            <div className="float-label float-bottom">NFC + QR CODE ↗</div>
          </div>
        </div>

        <div className="container hero-bottom">
          <span>01 / DIGITAL IDENTITY</span>
          <span>DESIGN WITH PURPOSE</span>
          <span>EST. IDQODE</span>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div>
            <div className="section-label">01 — ABOUT IDQODE</div>
            <h2>
              More than a card.
              <br />
              <span>A digital impression.</span>
            </h2>
          </div>

          <div className="about-copy">
            <p>
              IDQODE merupakan layanan desain identitas bisnis digital yang
              membantu individu maupun pelaku usaha memperkenalkan diri
              melalui media yang lebih praktis dan modern.
            </p>
            <p>
              Dengan menggabungkan desain visual, QR Code, dan teknologi NFC,
              IDQODE menghadirkan solusi identitas yang menarik secara visual
              sekaligus memudahkan pertukaran informasi.
            </p>
            <a className="inline-link" href="#products">
              Explore our products <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section products-section" id="products">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="section-label">02 — OUR PRODUCTS</div>
              <h2>
                Designed for your
                <br />
                <span>professional identity.</span>
              </h2>
            </div>
            <p>
              Temukan pilihan produk IDQODE yang dirancang untuk membantu
              identitas bisnis tampil lebih menarik dan mudah dibagikan.
            </p>
          </div>

          <div className="product-grid">
            {products.map((item, index) => (
              <article className="product-card" key={item.id}>
                <div className={`product-art art-${item.id}`}>
                  <div className="art-top">
                    <span>{item.type}</span>
                    <span>0{index + 1}</span>
                  </div>

                  <div className={`sample-card sample-${item.id}`}>
                    <div className="sample-head">
                      <strong>IDQODE</strong>
                      <span>{item.id === "nfc" ? "NFC" : "CARD"}</span>
                    </div>
                    {item.id === "design" ? (
                      <div className="sample-design">
                        <strong>Q.</strong>
                        <span>DESIGN YOUR<br />IDENTITY</span>
                      </div>
                    ) : (
                      <div className="sample-person">
                        <small>YOUR NAME</small>
                        <strong>Business Identity</strong>
                      </div>
                    )}
                    <div className="sample-foot">
                      <span>YOUR IDENTITY GOES DIGITAL</span>
                      <b>{item.id === "nfc" ? "⌁" : "▦"}</b>
                    </div>
                  </div>
                </div>

                <div className="product-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>

                  <ul className="feature-list">
                    {item.features.map((feature) => (
                      <li key={feature}>
                        <span>✓</span> {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="product-price-row">
                    <div>
                      <small>Harga produk</small>
                      <strong>{money(item.price)}</strong>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setSelected(item.id);
                        document.getElementById("order")?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      Pilih <span>↗</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="product-note">
            Harga tercantum sesuai pilihan produk. Detail desain dan kebutuhan
            pemesanan akan dikonfirmasi melalui WhatsApp.
          </p>
        </div>
      </section>

      <section className="section technology-section">
        <div className="container technology-grid">
          <div className="technology-visual">
            <div className="tech-ring ring-one" />
            <div className="tech-ring ring-two" />
            <div className="tech-card">
              <span>THE DIGITAL EXPERIENCE</span>
              <div className="tech-code">▦</div>
              <h3>Connect<br />without limits.</h3>
              <div className="tech-rule" />
              <small>IDQODE DIGITAL CARD</small>
            </div>
            <div className="tech-badge">QR CODE + NFC ✦</div>
          </div>

          <div className="technology-copy">
            <div className="section-label">03 — THE ADVANTAGE</div>
            <h2>
              Technology that
              <br />
              <span>connects people.</span>
            </h2>

            <div className="advantage-list">
              <article className="advantage-item">
                <span>01</span>
                <div>
                  <h3>QR Code Accessibility</h3>
                  <p>
                    Informasi dapat diakses dengan memindai QR Code
                    menggunakan kamera perangkat.
                  </p>
                </div>
              </article>

              <article className="advantage-item">
                <span>02</span>
                <div>
                  <h3>NFC Technology</h3>
                  <p>
                    Membagikan informasi secara praktis dengan mendekatkan
                    kartu ke perangkat yang mendukung NFC.
                  </p>
                </div>
              </article>

              <article className="advantage-item">
                <span>03</span>
                <div>
                  <h3>Personalized Design</h3>
                  <p>
                    Desain disesuaikan dengan karakter dan kebutuhan
                    identitas bisnis masing-masing pelanggan.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="section-label">04 — HOW IT WORKS</div>
              <h2>
                Simple process.
                <br />
                <span>Meaningful results.</span>
              </h2>
            </div>
            <p>
              Proses pemesanan yang terstruktur agar setiap kebutuhan
              pelanggan dapat dikomunikasikan dengan jelas.
            </p>
          </div>

          <div className="process-grid">
            {[
              ["01", "Pilih Produk", "Tentukan jenis kartu atau layanan desain yang sesuai."],
              ["02", "Konsultasi", "Sampaikan kebutuhan, informasi, dan konsep desain."],
              ["03", "Proses Desain", "Tim menyiapkan desain dan melakukan konfirmasi."],
              ["04", "Penyelesaian", "Pesanan dilanjutkan setelah detail disetujui."],
            ].map(([number, title, description]) => (
              <article className="process-card" key={number}>
                <span className="process-number">{number}</span>
                <div className="process-line" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section order-section" id="order">
        <div className="container order-grid">
          <div className="order-intro">
            <div className="section-label">05 — LET'S GET STARTED</div>
            <h2>
              Make your
              <br />
              <span>identity memorable.</span>
            </h2>
            <p>
              Punya kebutuhan desain atau ingin memesan kartu IDQODE?
              Sampaikan detail pesanan melalui formulir berikut.
            </p>
            <div className="contact-highlight">
              <span>↗</span>
              <div>
                <small>WHATSAPP IDQODE</small>
                <strong>+62 857-6256-9023</strong>
              </div>
            </div>
          </div>

          <form className="order-form" onSubmit={submitOrder}>
            <div className="form-heading">
              <strong>ORDER REQUEST</strong>
              <span>IDQODE / 001</span>
            </div>

            <label htmlFor="customer-name">Nama lengkap</label>
            <input
              id="customer-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Masukkan nama lengkap"
              required
            />

            <label htmlFor="customer-phone">Nomor WhatsApp</label>
            <input
              id="customer-phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="08xxxxxxxxxx"
            />

            <label htmlFor="product-choice">Pilihan produk</label>
            <select
              id="product-choice"
              value={selected}
              onChange={(event) => setSelected(event.target.value)}
            >
              {products.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} — {money(item.price)}
                </option>
              ))}
            </select>

            {(selected === "sharp" || selected === "rounded") && (
              <>
                <label htmlFor="finish-choice">Finishing</label>
                <select
                  id="finish-choice"
                  value={finish}
                  onChange={(event) => setFinish(event.target.value)}
                >
                  <option value="Glossy">Glossy</option>
                  <option value="Doff">Doff</option>
                </select>
              </>
            )}

            <label htmlFor="customer-notes">
              Catatan tambahan <span>(opsional)</span>
            </label>
            <textarea
              id="customer-notes"
              rows={3}
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              placeholder="Tuliskan kebutuhan atau konsep desain..."
            />

            <div className="total-price">
              <span>Estimasi harga produk</span>
              <strong>{money(product.price)}</strong>
            </div>

            <button className="submit-button" type="submit">
              Kirim Pesanan via WhatsApp <span>↗</span>
            </button>

            <small className="form-note">
              Detail pesanan akan diteruskan melalui WhatsApp IDQODE.
            </small>
          </form>
        </div>
      </section>

      <section className="section team-section" id="team">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="section-label">06 — OUR TEAM</div>
              <h2>
                The people behind
                <br />
                <span>the identity.</span>
              </h2>
            </div>
            <p>
              Setiap bagian memiliki peran dalam membangun layanan dan
              pengalaman pelanggan IDQODE.
            </p>
          </div>

          <div className="team-grid">
            {team.map((member, index) => (
              <article className="team-card" key={member.role}>
                <span className="team-number">0{index + 1}</span>
                <div className="team-avatar">
                  {member.name
                    .split(" ")
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join("")}
                </div>
                <span className="team-role">{member.role}</span>
                <h3>{member.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="container closing-inner">
          <div>
            <div className="section-label">YOUR IDENTITY GOES DIGITAL</div>
            <h2>
              Make your first impression
              <br />
              <span>count.</span>
            </h2>
          </div>
          <a
            href="https://wa.me/6285762569023"
            target="_blank"
            rel="noreferrer"
            className="closing-button"
          >
            Contact IDQODE <span>↗</span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#home" className="brand">
              <span className="brand-name">IDQODE<span>.</span></span>
              <span className="brand-caption">YOUR IDENTITY GOES DIGITAL</span>
            </a>
            <p>
              Solusi identitas bisnis melalui desain, QR Code, dan
              teknologi NFC.
            </p>
          </div>

          <div className="footer-column">
            <strong>Navigation</strong>
            <a href="#about">Tentang Kami</a>
            <a href="#products">Produk</a>
            <a href="#process">Cara Pesan</a>
            <a href="#team">Tim Kami</a>
          </div>

          <div className="footer-column">
            <strong>Get in Touch</strong>
            <a href="https://wa.me/6285762569023" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="mailto:idqode.contact@gmail.com">Email</a>
            <a href="https://instagram.com/idqode" target="_blank" rel="noreferrer">Instagram</a>
          </div>

          <div className="footer-column">
            <strong>Our Location</strong>
            <p>
              Pademangan Timur, Kecamatan Pademangan, Jakarta Utara,
              DKI Jakarta 14410.
            </p>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} IDQODE. All rights reserved.</span>
          <span>DESIGNED WITH PURPOSE.</span>
        </div>
      </footer>
    </main>
  );
}
