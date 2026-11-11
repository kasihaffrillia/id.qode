
"use client";

import { useState, type FormEvent } from "react";

const WHATSAPP_NUMBER = "6285762569023";

const products = [
  {
    id: "nfc",
    number: "01",
    name: "Kartu NFC",
    category: "Digital Card",
    price: "Rp55.000",
    description:
      "Kartu nama modern dengan teknologi NFC untuk membagikan informasi kontak secara praktis.",
    features: ["Teknologi NFC", "Praktis dan modern", "Identitas digital"],
    label: "Digital Experience",
  },
  {
    id: "sharp",
    number: "02",
    name: "Art Carton Sharp",
    category: "Printed Card",
    price: "Rp60.000",
    description:
      "Kartu nama Art Carton dengan sudut tajam untuk tampilan yang rapi dan profesional.",
    features: ["QR Code", "Sudut Sharp", "Glossy atau Doff"],
    label: "Classic Form",
  },
  {
    id: "rounded",
    number: "03",
    name: "Art Carton Rounded",
    category: "Printed Card",
    price: "Rp70.000",
    description:
      "Kartu nama dengan sudut rounded yang memberikan kesan modern dan elegan.",
    features: ["QR Code", "Sudut Rounded", "Glossy atau Doff"],
    label: "Modern Form",
  },
  {
    id: "design",
    number: "04",
    name: "Desain Saja",
    category: "Design Service",
    price: "Rp30.000",
    description:
      "Layanan pembuatan desain kartu nama yang disesuaikan dengan identitas dan kebutuhan brand.",
    features: ["Desain sesuai kebutuhan", "File digital", "Konsep personal"],
    label: "Creative Service",
  },
];

const team = [
  { name: "Masratu Siti Suaibah", role: "Direktur", number: "01" },
  { name: "Amartya Nadiva R", role: "Divisi Pemasaran", number: "02" },
  { name: "Saskia Althafunissa", role: "Divisi Pelayanan", number: "03" },
  { name: "Kasih Afrillia", role: "Divisi Produk & Desain", number: "04" },
  { name: "Izul Alfi'al Arif D", role: "Divisi Keuangan", number: "05" },
];

const faqs = [
  {
    question: "Apa itu kartu nama NFC?",
    answer:
      "Kartu NFC merupakan kartu nama yang menggunakan teknologi Near Field Communication. Informasi digital dapat dibagikan dengan mendekatkan kartu ke perangkat yang mendukung NFC.",
  },
  {
    question: "Apa perbedaan kartu NFC dan Art Carton?",
    answer:
      "Kartu NFC menggunakan teknologi NFC untuk berbagi informasi secara digital. Sementara itu, kartu Art Carton menggunakan QR Code yang dapat dipindai melalui kamera ponsel.",
  },
  {
    question: "Apakah bisa memesan desain saja?",
    answer:
      "Bisa. IDQODE menyediakan layanan desain saja dalam bentuk file digital dengan harga Rp30.000.",
  },
  {
    question: "Apa pilihan finishing untuk Art Carton?",
    answer:
      "Kartu Art Carton tersedia dengan pilihan finishing Glossy dan Doff, serta bentuk Sharp dan Rounded.",
  },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span aria-hidden="true" className="arrow-icon">
      {diagonal ? "↗" : "→"}
    </span>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="section-label">
      <span />
      {children}
    </div>
  );
}

function ProductVisual({ type }: { type: string }) {
  return (
    <div className={`product-visual product-visual-${type}`}>
      <div className="visual-glow" />
      <div className={`mock-card mock-card-${type}`}>
        <div className="mock-card-top">
          <span className="mock-brand">IDQODE</span>
          <span className="mock-mark">✳</span>
        </div>
        {type === "nfc" ? (
          <>
            <div className="mock-nfc-symbol">)))</div>
            <div className="mock-card-bottom">
              <span>YOUR IDENTITY</span>
              <span className="mock-card-number">01 / NFC</span>
            </div>
          </>
        ) : type === "design" ? (
          <>
            <div className="mock-design-lines">
              <span />
              <span />
              <span />
            </div>
            <div className="mock-card-bottom">
              <span>CREATIVE IDENTITY</span>
              <span className="mock-card-number">DESIGN</span>
            </div>
          </>
        ) : (
          <>
            <div className="mock-profile">
              <span className="mock-profile-dot">ID</span>
              <div>
                <strong>YOUR NAME</strong>
                <small>Creative Professional</small>
              </div>
            </div>
            <div className="mock-qr">
              <span>▦</span>
            </div>
            <div className="mock-card-bottom">
              <span>SCAN TO CONNECT</span>
              <span className="mock-card-number">QODE</span>
            </div>
          </>
        )}
      </div>
      <span className="visual-caption">IDQODE / {type.toUpperCase()}</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [selectedProduct, setSelectedProduct] = useState("Kartu NFC");
  const [shape, setShape] = useState("Sharp");
  const [finishing, setFinishing] = useState("Glossy");
  const [customerName, setCustomerName] = useState("");
  const [customerMessage, setCustomerMessage] = useState("");

  function handleOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const detail =
      selectedProduct.includes("Art Carton")
        ? `Bentuk: ${shape}\nFinishing: ${finishing}`
        : "";

    const message = [
      "Halo IDQODE, saya ingin melakukan pemesanan.",
      "",
      `Nama: ${customerName}`,
      `Produk: ${selectedProduct}`,
      detail,
      `Pesan: ${customerMessage || "Saya ingin bertanya lebih lanjut."}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <main>
      <header className="site-header">
        <div className="nav-container">
          <a href="#home" className="brand" aria-label="IDQODE Beranda">
            <img src="/logo-idqode.png" alt="Logo IDQODE" />
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Buka menu navigasi"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>

          <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            {[
              ["Beranda", "#home"],
              ["Tentang", "#about"],
              ["Produk", "#products"],
              ["Layanan", "#services"],
              ["Tim Kami", "#team"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a
              className="nav-cta"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
            >
              Hubungi Kami <ArrowIcon diagonal />
            </a>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid" />
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="status-dot" />
              DIGITAL BUSINESS CARD & CREATIVE DESIGN
            </div>

            <h1>
              Your identity,
              <br />
              <span>redefined digitally.</span>
            </h1>

            <p className="hero-description">
              Wujudkan identitas profesional melalui kartu nama yang dirancang
              dengan sentuhan kreatif dan teknologi digital.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#products">
                Jelajahi Produk <ArrowIcon />
              </a>
              <a className="button-secondary" href="#about">
                Kenali IDQODE
              </a>
            </div>

            <div className="hero-note">
              <span className="hero-note-line" />
              Design. Connect. Make an impression.
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-blue-disc" />
            <div className="hero-card hero-card-back">
              <span>IDQODE</span>
              <div className="hero-card-lines">
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="hero-card hero-card-front">
              <div className="hero-card-brand">
                <span className="hero-card-logo">IQ</span>
                <span>IDQODE</span>
              </div>
              <div className="hero-card-center">
                <div className="hero-card-wave">)))</div>
                <strong>YOUR IDENTITY</strong>
                <small>GOES DIGITAL</small>
              </div>
              <div className="hero-card-footer">
                <span>CONNECT DIFFERENTLY</span>
                <span>01 — 2026</span>
              </div>
            </div>
            <div className="floating-tag tag-top">NFC TECHNOLOGY</div>
            <div className="floating-tag tag-bottom">MADE FOR YOUR BRAND</div>
            <div className="hero-index">01 / DIGITAL IDENTITY</div>
          </div>
        </div>
        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line" />
          <span>01 — 06</span>
        </div>
      </section>

      <section className="intro-strip">
        <div className="intro-strip-inner">
          <span>IDENTITY</span>
          <i>✳</i>
          <span>CREATIVITY</span>
          <i>✳</i>
          <span>TECHNOLOGY</span>
          <i>✳</i>
          <span>CONNECTION</span>
        </div>
      </section>

      <section className="about-section section-padding" id="about">
        <div className="section-container about-grid">
          <div className="about-heading">
            <SectionLabel>01 — TENTANG IDQODE</SectionLabel>
            <h2>
              Identitas yang
              <br />
              <span>punya arti.</span>
            </h2>
          </div>

          <div className="about-copy">
            <p className="about-lead">
              Kami percaya bahwa kesan pertama dimulai dari bagaimana kamu
              memperkenalkan diri.
            </p>
            <p>
              IDQODE hadir sebagai penyedia layanan desain kartu nama dan
              identitas digital yang menggabungkan kreativitas dengan
              kemudahan teknologi. Kami membantu pelanggan menghadirkan
              identitas yang lebih praktis, informatif, dan sesuai karakter
              masing-masing.
            </p>
            <a className="text-link" href="#services">
              Kenali layanan kami <ArrowIcon diagonal />
            </a>
          </div>
        </div>

        <div className="section-container about-bottom">
          <div className="about-stat">
            <strong>01</strong>
            <span>Identitas yang personal</span>
          </div>
          <div className="about-stat">
            <strong>02</strong>
            <span>Desain yang terarah</span>
          </div>
          <div className="about-stat">
            <strong>03</strong>
            <span>Teknologi yang praktis</span>
          </div>
        </div>
      </section>

      <section className="products-section section-padding" id="products">
        <div className="section-container">
          <div className="section-heading">
            <div>
              <SectionLabel>02 — KATALOG PRODUK</SectionLabel>
              <h2>
                Temukan kartu
                <br />
                <span>yang mewakili kamu.</span>
              </h2>
            </div>
            <p>
              Pilihan produk dan layanan yang dirancang untuk mendukung
              kebutuhan identitas profesionalmu.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <ProductVisual type={product.id} />
                <div className="product-info">
                  <div className="product-meta">
                    <span>{product.category}</span>
                    <span>{product.number} / 04</span>
                  </div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-features">
                    {product.features.map((feature) => (
                      <span key={feature}>{feature}</span>
                    ))}
                  </div>
                  <div className="product-price-row">
                    <div>
                      <small>Mulai dari</small>
                      <strong>{product.price}</strong>
                    </div>
                    <a
                      href="#order"
                      className="product-order"
                      onClick={() => setSelectedProduct(
                        product.id === "sharp"
                          ? "Art Carton Sharp"
                          : product.id === "rounded"
                            ? "Art Carton Rounded"
                            : product.name
                      )}
                      aria-label={`Pesan ${product.name}`}
                    >
                      <ArrowIcon diagonal />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="price-note">
            *Harga mengikuti pilihan produk yang tercantum. Hubungi kami untuk
            informasi pemesanan lebih lanjut.
          </p>
        </div>
      </section>

      <section className="technology-section section-padding" id="services">
        <div className="section-container technology-grid">
          <div className="technology-copy">
            <SectionLabel>03 — LAYANAN KAMI</SectionLabel>
            <h2>
              Lebih dari
              <br />
              sekadar <span>kartu nama.</span>
            </h2>
            <p>
              Kami memadukan proses desain dengan pilihan teknologi dan
              material yang dapat disesuaikan dengan kebutuhan identitasmu.
            </p>
            <a href="#order" className="button-light">
              Konsultasikan kebutuhanmu <ArrowIcon />
            </a>
          </div>

          <div className="technology-list">
            <article className="technology-item">
              <span className="technology-number">01</span>
              <div>
                <h3>Teknologi NFC</h3>
                <p>
                  Membagikan informasi digital dengan mendekatkan kartu ke
                  perangkat yang mendukung NFC.
                </p>
              </div>
              <span className="technology-symbol">⌁</span>
            </article>
            <article className="technology-item">
              <span className="technology-number">02</span>
              <div>
                <h3>QR Code</h3>
                <p>
                  Memudahkan orang mengakses informasi melalui pemindaian QR
                  Code menggunakan kamera ponsel.
                </p>
              </div>
              <span className="technology-symbol">▦</span>
            </article>
            <article className="technology-item">
              <span className="technology-number">03</span>
              <div>
                <h3>Desain Personal</h3>
                <p>
                  Konsep desain yang disesuaikan dengan kebutuhan dan
                  karakter identitas pelanggan.
                </p>
              </div>
              <span className="technology-symbol">✳</span>
            </article>
            <article className="technology-item">
              <span className="technology-number">04</span>
              <div>
                <h3>Finishing Pilihan</h3>
                <p>
                  Pilihan finishing Glossy dan Doff untuk kartu Art Carton
                  dengan bentuk Sharp maupun Rounded.
                </p>
              </div>
              <span className="technology-symbol">◇</span>
            </article>
          </div>
        </div>
      </section>

      <section className="process-section section-padding">
        <div className="section-container">
          <div className="section-heading process-heading">
            <div>
              <SectionLabel>04 — PROSES PEMESANAN</SectionLabel>
              <h2>
                Mudah dari
                <br />
                <span>awal hingga selesai.</span>
              </h2>
            </div>
            <p>
              Kami membantu mengarahkan proses pemesanan agar kebutuhan
              identitasmu dapat dikomunikasikan dengan jelas.
            </p>
          </div>

          <div className="process-grid">
            {[
              {
                n: "01",
                title: "Pilih Produk",
                desc: "Tentukan jenis kartu atau layanan desain yang kamu butuhkan.",
              },
              {
                n: "02",
                title: "Diskusikan Desain",
                desc: "Sampaikan konsep, informasi, dan kebutuhan identitasmu.",
              },
              {
                n: "03",
                title: "Konfirmasi Pesanan",
                desc: "Periksa kembali detail desain dan pilihan produk sebelum diproses.",
              },
              {
                n: "04",
                title: "Pesanan Selesai",
                desc: "Terima hasil desain atau kartu sesuai pesanan yang telah disepakati.",
              },
            ].map((step) => (
              <article className="process-card" key={step.n}>
                <span className="process-number">{step.n}</span>
                <div className="process-line" />
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="order-section section-padding" id="order">
        <div className="section-container order-grid">
          <div className="order-copy">
            <SectionLabel>05 — MULAI PESANAN</SectionLabel>
            <h2>
              Punya identitas
              <br />
              yang ingin <span>ditampilkan?</span>
            </h2>
            <p>
              Ceritakan kebutuhanmu kepada kami. Isi formulir berikut dan
              lanjutkan konsultasi melalui WhatsApp.
            </p>
            <div className="order-contact-note">
              <span className="contact-note-icon">↗</span>
              <div>
                <strong>Terhubung langsung dengan IDQODE</strong>
                <small>Pesanan akan diteruskan melalui WhatsApp.</small>
              </div>
            </div>
          </div>

          <form className="order-form" onSubmit={handleOrder}>
            <div className="form-heading">
              <span>ORDER FORM / 01</span>
              <h3>Ceritakan kebutuhanmu.</h3>
            </div>

            <label htmlFor="customer-name">Nama lengkap</label>
            <input
              id="customer-name"
              type="text"
              placeholder="Masukkan nama kamu"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />

            <label htmlFor="product-select">Produk yang diminati</label>
            <select
              id="product-select"
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
            >
              <option>Kartu NFC</option>
              <option>Art Carton Sharp</option>
              <option>Art Carton Rounded</option>
              <option>Desain Saja</option>
            </select>

            {selectedProduct.includes("Art Carton") && (
              <div className="form-options">
                <div>
                  <label htmlFor="shape-select">Bentuk kartu</label>
                  <select
                    id="shape-select"
                    value={shape}
                    onChange={(e) => setShape(e.target.value)}
                  >
                    <option>Sharp</option>
                    <option>Rounded</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="finish-select">Finishing</label>
                  <select
                    id="finish-select"
                    value={finishing}
                    onChange={(e) => setFinishing(e.target.value)}
                  >
                    <option>Glossy</option>
                    <option>Doff</option>
                  </select>
                </div>
              </div>
            )}

            <label htmlFor="customer-message">Catatan / kebutuhan</label>
            <textarea
              id="customer-message"
              placeholder="Ceritakan konsep atau kebutuhan kartu nama kamu..."
              rows={4}
              value={customerMessage}
              onChange={(e) => setCustomerMessage(e.target.value)}
            />

            <button className="form-submit" type="submit">
              Kirim melalui WhatsApp <ArrowIcon diagonal />
            </button>
            <small className="form-disclaimer">
              Dengan menekan tombol, kamu akan diarahkan ke WhatsApp IDQODE.
            </small>
          </form>
        </div>
      </section>

      <section className="team-section section-padding" id="team">
        <div className="section-container">
          <div className="section-heading">
            <div>
              <SectionLabel>06 — DI BALIK IDQODE</SectionLabel>
              <h2>
                Dikerjakan dengan
                <br />
                <span>kolaborasi.</span>
              </h2>
            </div>
            <p>
              Setiap bagian memiliki peran dalam mendukung proses dan
              pengembangan layanan IDQODE.
            </p>
          </div>

          <div className="team-grid">
            {team.map((member) => (
              <article className="team-card" key={member.number}>
                <span className="team-number">{member.number}</span>
                <div className="team-avatar">
                  <span>{member.name.charAt(0)}</span>
                </div>
                <div className="team-info">
                  <span>{member.role}</span>
                  <h3>{member.name}</h3>
                </div>
                <span className="team-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section section-padding">
        <div className="section-container faq-grid">
          <div>
            <SectionLabel>INFORMASI TAMBAHAN</SectionLabel>
            <h2>
              Ada yang ingin
              <br />
              <span>ditanyakan?</span>
            </h2>
            <p>
              Temukan jawaban dari beberapa pertanyaan umum seputar produk
              dan layanan IDQODE.
            </p>
            <a
              className="text-link"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
            >
              Tanya langsung kepada kami <ArrowIcon diagonal />
            </a>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <article className="faq-item" key={faq.question}>
                <button
                  className="faq-question"
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                  aria-expanded={activeFaq === index}
                >
                  <span>{faq.question}</span>
                  <span className="faq-toggle">
                    {activeFaq === index ? "−" : "+"}
                  </span>
                </button>
                {activeFaq === index && (
                  <p className="faq-answer">{faq.answer}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-container">
          <div className="footer-main">
            <div className="footer-brand">
              <img src="/logo-idqode.png" alt="IDQODE" />
              <p>
                Menghadirkan identitas yang lebih praktis melalui desain
                kreatif dan teknologi digital.
              </p>
              <span className="footer-tagline">
                YOUR IDENTITY GOES DIGITAL.
              </span>
            </div>

            <div className="footer-column">
              <h4>Navigasi</h4>
              <a href="#about">Tentang Kami</a>
              <a href="#products">Produk</a>
              <a href="#services">Layanan</a>
              <a href="#team">Tim Kami</a>
            </div>

            <div className="footer-column">
              <h4>Hubungi Kami</h4>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
              >
                +62 857-6256-9023
              </a>
              <a href="mailto:idqode.contact@gmail.com">
                idqode.contact@gmail.com
              </a>
              <a
                href="https://instagram.com/idqode"
                target="_blank"
                rel="noreferrer"
              >
                Instagram @idqode
              </a>
            </div>

            <div className="footer-column footer-address">
              <h4>Lokasi</h4>
              <p>
                Pademangan Timur, Kecamatan Pademangan, Jakarta Utara,
                DKI Jakarta 14410.
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 IDQODE. All rights reserved.</span>
            <span>DESIGNED WITH PURPOSE.</span>
            <a href="#home">Kembali ke atas ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
