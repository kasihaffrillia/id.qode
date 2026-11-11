
"use client";

import { useState, type FormEvent } from "react";

const products = [
  {
    id: "nfc",
    name: "Kartu NFC",
    price: 55000,
    category: "DIGITAL CARD",
    description:
      "Kartu identitas digital yang memudahkan pertukaran informasi melalui teknologi NFC.",
    features: ["Teknologi NFC", "Praktis dan modern", "Desain personal"],
    style: "nfc",
  },
  {
    id: "sharp",
    name: "Kartu Art Carton Sharp",
    price: 60000,
    category: "PRINTED CARD",
    description:
      "Kartu bisnis dengan sudut tajam yang menghadirkan kesan tegas, rapi, dan profesional.",
    features: ["Bahan Art Carton", "Sudut Sharp", "QR Code", "Glossy / Doff"],
    style: "sharp",
  },
  {
    id: "rounded",
    name: "Kartu Art Carton Rounded",
    price: 70000,
    category: "PRINTED CARD",
    description:
      "Kartu bisnis dengan sudut rounded untuk tampilan yang modern dan elegan.",
    features: ["Bahan Art Carton", "Sudut Rounded", "QR Code", "Glossy / Doff"],
    style: "rounded",
  },
  {
    id: "design",
    name: "Hanya Desain",
    price: 30000,
    category: "DESIGN SERVICE",
    description:
      "Layanan pembuatan desain kartu sesuai kebutuhan dan karakter identitas bisnis.",
    features: ["Desain personal", "File digital", "Konsep sesuai kebutuhan"],
    style: "design",
  },
];

const team = [
  ["Direktur", "Masratu Siti Suaibah"],
  ["Divisi Pemasaran", "Amartya Nadiva R"],
  ["Divisi Pelayanan", "Saskia Althafunissa"],
  ["Divisi Produk & Desain", "Kasih Afrillia"],
  ["Divisi Keuangan", "Izul Alfi’al Arif D"],
];

const formatPrice = (price: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);

export default function Home() {
  const [selected, setSelected] = useState("nfc");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [finish, setFinish] = useState("Glossy");
  const [notes, setNotes] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const currentProduct =
    products.find((product) => product.id === selected) ?? products[0];

  function handleOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Halo IDQODE, saya ingin melakukan pemesanan.",
      "",
      `Nama: ${name}`,
      `Nomor WhatsApp: ${phone || "-"}`,
      `Produk: ${currentProduct.name}`,
      `Harga: ${formatPrice(currentProduct.price)}`,
      selected === "sharp" || selected === "rounded"
        ? `Finishing: ${finish}`
        : "",
      `Catatan: ${notes || "-"}`,
      "",
      "Mohon informasi lebih lanjut mengenai pemesanan. Terima kasih.",
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
    <main>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>YOUR IDENTITY GOES DIGITAL</span>
          <span>DESIGN · QR CODE · NFC TECHNOLOGY</span>
        </div>
      </div>

      <header className="header">
        <div className="container navbar">
          <a href="#home" className="brand">
            IDQODE<span>.</span>
            <small>YOUR IDENTITY GOES DIGITAL</small>
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>

          <nav className={menuOpen ? "nav-links active" : "nav-links"}>
            {[
              ["Beranda", "#home"],
              ["Tentang", "#about"],
              ["Produk", "#products"],
              ["Proses", "#process"],
              ["Tim", "#team"],
            ].map(([label, link]) => (
              <a
                href={link}
                key={link}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="#order"
              className="nav-button"
              onClick={() => setMenuOpen(false)}
            >
              Mulai Pesanan <span>↗</span>
            </a>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="eyebrow">
              <span />
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
              <a href="#products" className="primary-button">
                Jelajahi Produk <span>↗</span>
              </a>
              <a href="#about" className="secondary-link">
                Kenali IDQODE <span>→</span>
              </a>
            </div>

            <div className="hero-note">
              <span className="note-line" />
              <span>Designed to represent your identity.</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-glow" />
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />

            <div className="showcase-card showcase-back">
              <div className="showcase-top">
                <strong>IDQODE</strong>
                <span>01 / 02</span>
              </div>
              <div className="showcase-symbol">Q.</div>
              <div className="showcase-bottom">
                <span>YOUR IDENTITY</span>
                <span>GOES DIGITAL</span>
              </div>
            </div>

            <div className="showcase-card showcase-front">
              <div className="showcase-top">
                <strong>IDQODE</strong>
                <span>NFC ENABLED</span>
              </div>
              <div className="showcase-person">
                <small>DIGITAL BUSINESS CARD</small>
                <h3>Alexandra<br />Morgan.</h3>
                <span>Creative Director</span>
              </div>
              <div className="showcase-bottom">
                <span>SCAN OR TAP TO CONNECT</span>
                <b>▦</b>
              </div>
            </div>

            <div className="floating-label label-one">
              <span>✦</span> SMART IDENTITY
            </div>
            <div className="floating-label label-two">
              NFC + QR CODE <span>↗</span>
            </div>
            <div className="hero-art-caption">
              A better way to introduce yourself.
            </div>
          </div>
        </div>

        <div className="container hero-footer">
          <span>01 / DIGITAL IDENTITY</span>
          <span>DESIGN WITH PURPOSE</span>
          <span>EST. IDQODE</span>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="container about-grid">
          <div>
            <div className="section-label">01 — ABOUT IDQODE</div>
            <h2>
              More than a card.
              <br />
              <span>A digital impression.</span>
            </h2>
          </div>

          <div className="about-description">
            <p>
              IDQODE merupakan layanan desain identitas bisnis digital yang
              membantu individu maupun pelaku usaha memperkenalkan diri
              melalui media yang lebih praktis dan modern.
            </p>
            <p>
              Dengan menggabungkan desain visual, QR Code, dan teknologi NFC,
              IDQODE menghadirkan solusi identitas yang tidak hanya menarik
              secara visual, tetapi juga memudahkan pertukaran informasi.
            </p>
            <a href="#products" className="text-link">
              Explore our products <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="products section" id="products">
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
            {products.map((product, index) => (
              <article className="product-card" key={product.id}>
                <div className={`product-visual visual-${product.style}`}>
                  <div className="visual-caption">
                    <span>{product.category}</span>
                    <span>0{index + 1}</span>
                  </div>

                  <div className={`mockup-card mockup-${product.style}`}>
                    <div className="mockup-header">
                      <strong>IDQODE</strong>
                      <span>{product.id === "nfc" ? "NFC" : "CARD"}</span>
                    </div>

                    {product.id === "design" ? (
                      <div className="mockup-design">
                        <strong>Q.</strong>
                        <span>DESIGN<br />YOUR IDENTITY</span>
                      </div>
                    ) : (
                      <div className="mockup-person">
                        <span>YOUR NAME</span>
                        <strong>Business Identity</strong>
                      </div>
                    )}

                    <div className="mockup-footer">
                      <span>YOUR IDENTITY GOES DIGITAL</span>
                      <b>{product.id === "nfc" ? "⌁" : "▦"}</b>
                    </div>
                  </div>

                  <div className="visual-decoration" />
                </div>

                <div className="product-content">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>

                  <ul>
                    {product.features.map((feature) => (
                      <li key={feature}>
                        <span>✓</span> {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="product-bottom">
                    <div>
                      <small>Harga produk</small>
                      <strong>{formatPrice(product.price)}</strong>
                    </div>
                    <button
                      onClick={() => {
                        setSelected(product.id);
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

          <div className="product-disclaimer">
            Harga produk tercantum sesuai pilihan. Detail desain dan kebutuhan
            pemesanan akan dikonfirmasi melalui WhatsApp.
          </div>
        </div>
      </section>

      <section className="technology section">
        <div className="container technology-grid">
          <div className="technology-art">
            <div className="technology-circle circle-one" />
            <div className="technology-circle circle-two" />
            <div className="technology-card">
              <span>THE DIGITAL EXPERIENCE</span>
              <div className="technology-qr">▦</div>
              <h3>Connect<br />without limits.</h3>
              <div className="technology-divider" />
              <small>IDQODE DIGITAL CARD</small>
            </div>
            <div className="technology-badge">QR CODE + NFC ✦</div>
          </div>

          <div className="technology-content">
            <div className="section-label">03 — THE ADVANTAGE</div>
            <h2>
              Technology that
              <br />
              <span>connects people.</span>
            </h2>

            <div className="advantage-list">
              <div className="advantage-item">
                <span>01</span>
                <div>
                  <h3>QR Code Accessibility</h3>
                  <p>
                    Informasi dapat diakses dengan memindai QR Code
                    menggunakan kamera perangkat.
                  </p>
                </div>
              </div>

              <div className="advantage-item">
                <span>02</span>
                <div>
                  <h3>NFC Technology</h3>
                  <p>
                    Membagikan informasi secara praktis dengan mendekatkan
                    kartu ke perangkat yang mendukung NFC.
                  </p>
                </div>
              </div>

              <div className="advantage-item">
                <span>03</span>
                <div>
                  <h3>Personalized Design</h3>
                  <p>
                    Desain disesuaikan dengan karakter dan kebutuhan
                    identitas bisnis masing-masing pelanggan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process section" id="process">
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
              Kami menghadirkan proses pemesanan yang terstruktur agar setiap
              kebutuhan pelanggan dapat dikomunikasikan dengan jelas.
            </p>
          </div>

          <div className="process-grid">
            {[
              ["01", "Pilih Produk", "Tentukan jenis kartu atau layanan desain yang sesuai."],
              ["02", "Konsultasi", "Sampaikan kebutuhan, informasi, dan konsep desain."],
              ["03", "Proses Desain", "Tim menyiapkan desain dan melakukan konfirmasi."],
              ["04", "Penyelesaian", "Pesanan dilanjutkan setelah detail disetujui."],
            ].map(([number, title, description]) => (
              <div className="process-card" key={number}>
                <span>{number}</span>
                <div className="process-line" />
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="order section" id="order">
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
              Sampaikan detail pesananmu melalui formulir berikut.
            </p>

            <div className="contact-detail">
              <span>↗</span>
              <div>
                <small>WHATSAPP IDQODE</small>
                <strong>+62 857-6256-9023</strong>
              </div>
            </div>
          </div>

          <form className="order-form" onSubmit={handleOrder}>
            <div className="form-heading">
              <strong>ORDER REQUEST</strong>
              <span>IDQODE / 001</span>
            </div>

            <label htmlFor="name">Nama lengkap</label>
            <input
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Masukkan nama lengkap"
              required
            />

            <label htmlFor="phone">Nomor WhatsApp</label>
            <input
              id="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="08xxxxxxxxxx"
            />

            <label htmlFor="product">Pilihan produk</label>
            <select
              id="product"
              value={selected}
              onChange={(event) => setSelected(event.target.value)}
            >
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name} — {formatPrice(product.price)}
                </option>
              ))}
            </select>

            {(selected === "sharp" || selected === "rounded") && (
              <>
                <label htmlFor="finish">Finishing</label>
                <select
                  id="finish"
                  value={finish}
                  onChange={(event) => setFinish(event.target.value)}
                >
                  <option value="Glossy">Glossy</option>
                  <option value="Doff">Doff</option>
                </select>
              </>
            )}

            <label htmlFor="notes">
              Catatan tambahan <span>(opsional)</span>
            </label>
            <textarea
              id="notes"
              rows={3}
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              placeholder="Tuliskan kebutuhan atau konsep desain..."
            />

            <div className="total-price">
              <span>Estimasi harga produk</span>
              <strong>{formatPrice(currentProduct.price)}</strong>
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

      <section className="team section" id="team">
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
            {team.map(([role, member], index) => (
              <article className="team-card" key={role}>
                <div className="team-number">0{index + 1}</div>
                <div className="team-initial">
                  {member
                    .split(" ")
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div className="team-role">{role}</div>
                <h3>{member}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing">
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

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#home" className="brand footer-logo">
              IDQODE<span>.</span>
            </a>
            <p>
              Your identity goes digital. Solusi identitas bisnis melalui
              desain, QR Code, dan teknologi NFC.
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

          <div className="footer-column footer-location">
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
