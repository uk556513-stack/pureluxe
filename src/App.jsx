
import React, { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "lenis";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaShoppingBag,
  FaHeart,
  FaStar,
  FaArrowRight,
  FaLeaf,
  FaShippingFast,
  FaShieldAlt,
  FaHeadset,
  FaCheckCircle,
  FaPlus,
  FaMinus,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaRegSmile,
  FaSun,
  FaMoon,
  FaTint,
} from "react-icons/fa";

// HERO IMAGE
import hero from "./assets/skincare-hero.png";

// CATEGORY IMAGES
import categoryCleanser from "./assets/category-cleanser.png";
import categorySerum from "./assets/category-serum.png";
import categoryMoisturizer from "./assets/category-moisturizer.png";
import categorySunscreen from "./assets/category-sunscreen.png";

// PRODUCT IMAGES
import product1 from "./assets/product1.png";
import product2 from "./assets/product2.png";
import product3 from "./assets/product3.png";
import product4 from "./assets/product4.png";
import product5 from "./assets/product5.png";
import product6 from "./assets/product6.png";

// OTHER SECTION IMAGES
import collection from "./assets/collection.png";
import about from "./assets/about.png";
import highlight from "./assets/highlight.png";
import offer from "./assets/offer.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFaq, setActiveFaq] = useState(0);
  const [email, setEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");
  const [contactMessage, setContactMessage] = useState("");
useEffect(() => {
  AOS.init({
    duration: 550,
    once: true,
    offset: 50,
    easing: "ease-out",
    mirror: false,
    disableMutationObserver: false,
  });

  return () => {
    AOS.refreshHard();
  };
}, []);
useEffect(() => {
  const lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    wheelMultiplier: 0.85,
    touchMultiplier: 1.2,
    lerp: 0.1,
  });

  let rafId;

  function raf(time) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }

  rafId = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(rafId);
    lenis.destroy();
  };
}, []);
  const categories = [
    {
      name: "Cleansers",
      description: "A fresh start for your skin",
      image: categoryCleanser,
    },
    {
      name: "Serums",
      description: "Concentrated daily care",
      image: categorySerum,
    },
    {
      name: "Moisturizers",
      description: "Comfort and lasting hydration",
      image: categoryMoisturizer,
    },
    {
      name: "Sunscreens",
      description: "Everyday sun protection",
      image: categorySunscreen,
    },
  ];

  const products = [
    {
      id: 1,
      name: "Gentle Daily Cleanser",
      category: "Cleanser",
      price: 499,
      oldPrice: 599,
      rating: 4.9,
      reviews: 128,
      image: product1,
      tag: "BEST SELLER",
      description: "A gentle cleanse without stripping your skin.",
    },
    {
      id: 2,
      name: "Vitamin C Glow Serum",
      category: "Serum",
      price: 799,
      oldPrice: 999,
      rating: 4.8,
      reviews: 96,
      image: product2,
      tag: "POPULAR",
      description: "A brightening daily serum for radiant-looking skin.",
    },
    {
      id: 3,
      name: "Daily Hydration Cream",
      category: "Moisturizer",
      price: 649,
      oldPrice: 799,
      rating: 4.9,
      reviews: 114,
      image: product3,
      tag: "TOP RATED",
      description: "Lightweight moisture for soft, comfortable skin.",
    },
    {
      id: 4,
      name: "Sun Guard SPF 50",
      category: "Sunscreen",
      price: 599,
      oldPrice: 749,
      rating: 4.7,
      reviews: 87,
      image: product4,
      tag: "DAILY ESSENTIAL",
      description: "Daily broad-spectrum sun protection.",
    },
    {
      id: 5,
      name: "Night Recovery Serum",
      category: "Serum",
      price: 899,
      oldPrice: 1099,
      rating: 4.8,
      reviews: 72,
      image: product5,
      tag: "NEW",
      description: "A nourishing serum for your evening routine.",
    },
    {
      id: 6,
      name: "Silky Body Lotion",
      category: "Moisturizer",
      price: 449,
      oldPrice: 549,
      rating: 4.6,
      reviews: 65,
      image: product6,
      tag: "EVERYDAY CARE",
      description: "Daily body hydration with a smooth finish.",
    },
  ];

  const newArrivals = [
    products[4],
    products[1],
    products[3],
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const toggleWishlist = (id) => {
    setWishlist((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  const addToCart = () => {
    setCartCount((previous) => previous + 1);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
const faqs = [
  {
    question: "How do I choose the right skincare products?",
    answer:
      "Start by understanding your skin type and concerns. Choose products that suit your skin and introduce new products gradually."
  },
  {
    question: "Can I use multiple skincare products together?",
    answer:
      "Yes, many skincare products can be used together. Follow a simple routine of cleansing, moisturizing and daytime sun protection. Check product instructions before combining active ingredients."
  },
  {
    question: "How long does product delivery take?",
    answer:
      "Delivery times depend on your location and shipping method. You can check the estimated delivery details during checkout."
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "Return and exchange eligibility depends on our store policy. Please contact our customer support team for assistance."
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you can use the tracking details shared with your registered email or phone number to follow your delivery."
  }
];
  const handleNewsletter = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setNewsletterMessage("Please enter your email address.");
      return;
    }

    setNewsletterMessage("Thank you for subscribing to LUMORA!");
    setEmail("");
  };

  const handleContact = (e) => {
    e.preventDefault();
    setContactMessage(
      "Thank you for contacting LUMORA. Your message has been submitted."
    );
    e.target.reset();
  };

  const ProductCard = ({ product }) => (
    <div className="product-card" data-aos="fade-up">
      <div className="product-image">
        <img src={product.image} alt={product.name} />

        {product.tag && (
          <span className="product-tag">{product.tag}</span>
        )}

        <button
          className={`wishlist-btn ${
            wishlist.includes(product.id) ? "active" : ""
          }`}
          onClick={() => toggleWishlist(product.id)}
          aria-label="Toggle wishlist"
        >
          <FaHeart />
        </button>

        <button
          className="quick-add-btn"
          onClick={addToCart}
        >
          <FaShoppingBag /> Add to Bag
        </button>
      </div>

      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-rating">
          <FaStar />
          <span>{product.rating}</span>
          <span className="review-count">({product.reviews} reviews)</span>
        </div>

        <div className="product-price">
          <strong>₹{product.price}</strong>
          <del>₹{product.oldPrice}</del>
        </div>
      </div>
    </div>
  );

  return (
    <div className="lumora-website">

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container">
          <a href="#home" className="navbar-brand brand-logo" onClick={closeMenu}>
            PURELUXE
            
          </a>

          <div className="nav-actions mobile-actions">
            <button
              className="nav-icon-btn"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <FaSearch />
            </button>

            <button className="nav-icon-btn cart-icon" aria-label="Shopping bag">
              <FaShoppingBag />
              <span>{cartCount}</span>
            </button>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`navbar-collapse ${menuOpen ? "show" : ""}`}>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
              </li>
              <li className="nav-item">
                <a href="#categories" className="nav-link" onClick={closeMenu}>Categories</a>
              </li>
              <li className="nav-item">
                <a href="#products" className="nav-link" onClick={closeMenu}>Shop</a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link" onClick={closeMenu}>Our Story</a>
              </li>
              <li className="nav-item">
                <a href="#reviews" className="nav-link" onClick={closeMenu}>Reviews</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
              </li>
            </ul>

            <div className="nav-actions desktop-actions">
              <button
                className="nav-icon-btn"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
              >
                <FaSearch />
              </button>

              <button className="nav-icon-btn wishlist-nav" aria-label="Wishlist">
                <FaHeart />
                <span>{wishlist.length}</span>
              </button>

              <button className="nav-icon-btn cart-icon" aria-label="Shopping bag">
                <FaShoppingBag />
                <span>{cartCount}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* SEARCH BAR */}
      {searchOpen && (
        <div className="search-panel">
          <div className="container">
            <div className="search-box">
              <FaSearch />
              <input
                type="text"
                placeholder="Search skincare products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button onClick={() => {
                setSearchOpen(false);
                setSearchTerm("");
              }}>
                <FaTimes />
              </button>
            </div>

            {searchTerm && (
              <div className="search-results">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <a
                      href="#products"
                      key={product.id}
                      onClick={() => setSearchOpen(false)}
                    >
                      {product.name}
                    </a>
                  ))
                ) : (
                  <p>No matching products found.</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
      <div className="animated-universe">
  <div className="liquid-blob blob-one"></div>
  <div className="liquid-blob blob-two"></div>
  <div className="liquid-blob blob-three"></div>

  <div className="aurora-wave wave-one"></div>
  <div className="aurora-wave wave-two"></div>

  <div className="floating-ring ring-one"></div>
  <div className="floating-ring ring-two"></div>
  <div className="floating-ring ring-three"></div>

  <div className="floating-orb orb-one"></div>
  <div className="floating-orb orb-two"></div>
  <div className="floating-orb orb-three"></div>
  <div className="floating-orb orb-four"></div>
  <div className="floating-orb orb-five"></div>
</div>
<div className="light-beam beam-one"></div>
<div className="light-beam beam-two"></div>
<div className="light-beam beam-three"></div>

<div className="energy-circle energy-one"></div>
<div className="energy-circle energy-two"></div>
<div className="particle-field">
  {Array.from({ length: 8 }, (_, index) => (
    <span
      key={index}
      className={`particle particle-${index}`}
      style={{
        left: `${(index * 37) % 100}%`,
        top: `${(index * 53) % 100}%`,
        animationDelay: `${index * -1.5}s`,
      }}
    />
  ))}
</div>
      {/* HERO SECTION */}
<section className="hero-section" id="home">

  <img
    src={hero}
    alt="PURELUXE Premium Skincare"
    className="hero-bg-image"
  />

  <div className="container">
    <div className="row align-items-center">

      <div className="col-lg-7">
        <div className="hero-content" data-aos="fade-right">

          <span className="hero-subtitle">
            <FaLeaf />
            LUXURY SKINCARE & SELF-CARE
          </span>

          <h1>
            Reveal Your
            <span> Natural Radiance.</span>
          </h1>

          <p>
            Give your skin the love it deserves with PURELUXE.
            Explore our luxurious skincare essentials designed
            to nourish, hydrate and bring out your natural glow.
          </p>

          <div className="hero-buttons">

            <a href="#products" className="primary-btn">
              Shop Now <FaArrowRight />
            </a>

            <a href="#about" className="secondary-btn">
              Discover PURELUXE
            </a>

          </div>

          <div className="hero-trust">

            <div>
              <strong>10K+</strong>
              <span>Happy Customers</span>
            </div>

            <div>
              <strong>4.9/5</strong>
              <span>Customer Rating</span>
            </div>

          </div>

        </div>
      </div>

    </div>
  </div>

</section>
      {/* CATEGORIES */}
<section className="categories-section section-padding" id="categories">
  <div className="container">

    <div className="section-heading" data-aos="fade-up">

      <span className="section-subtitle">
        DISCOVER YOUR SKINCARE ESSENTIALS
      </span>

      <h2>Explore Our Collections</h2>

      <p>
        From gentle cleansing to deep hydration, discover
        skincare essentials made to complement your daily
        beauty and self-care routine.
      </p>

    </div>

    <div className="row g-4">
      {categories.map((category, index) => (
        <div
          className="col-6 col-lg-3"
          key={category.name}
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <a href="#products" className="category-card">

            <div className="category-image">
              <img src={category.image} alt={category.name} />

              <span className="category-arrow">
                <FaArrowRight />
              </span>
            </div>

            <h3>{category.name}</h3>

            <p>{category.description}</p>

          </a>
        </div>
      ))}
    </div>

  </div>
</section>

     {/* BEST SELLERS */}
<section className="products-section section-padding" id="products">
  <div className="container">

    <div className="section-heading" data-aos="fade-up">

      <span className="section-subtitle">
        LOVED BY BEAUTY ENTHUSIASTS
      </span>

      <h2>Our Most Loved Products</h2>

      <p>
        Explore our bestselling skincare essentials,
        chosen by customers to make their daily beauty
        routines more special.
      </p>

    </div>

    <div className="row g-4">
      {products.slice(0, 4).map((product) => (
        <div className="col-12 col-sm-6 col-lg-3" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>

    <div className="text-center mt-5">
      <a href="#new-arrivals" className="outline-btn">
        Discover More Beauty <FaArrowRight />
      </a>
    </div>

  </div>
</section>
      {/* NEW ARRIVALS */}
<section className="new-arrivals-section section-padding" id="new-arrivals">
  <div className="container">

    <div className="section-heading" data-aos="fade-up">
      <span className="section-subtitle">
        FRESH FINDS JUST FOR YOU
      </span>

      <h2>Discover What's New</h2>

      <p>
        Explore our latest skincare arrivals and find new
        favourites to elevate your everyday beauty routine.
      </p>
    </div>

    <div className="row g-4">
      {newArrivals.map((product) => (
        <div className="col-12 col-sm-6 col-lg-4" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>

  </div>
</section>

      {/* FEATURED COLLECTION */}
<section className="featured-section section-padding">
  <div className="container">
    <div className="featured-card" data-aos="zoom-in">

      <div className="row align-items-center">

        <div className="col-lg-6">
          <div className="featured-content">

            <span className="section-subtitle">
              DISCOVER YOUR GLOW
            </span>

            <h2>
              Beautiful Skin.
              <span> Beautiful You.</span>
            </h2>

            <p>
              Discover the perfect skincare essentials to refresh,
              nourish, and care for your skin. From daily cleansing
              to lasting hydration, make every skincare moment
              feel special with PURELUXE.
            </p>

            <a href="#products" className="primary-btn">
              Shop Our Collection <FaArrowRight />
            </a>

          </div>
        </div>

        <div className="col-lg-6">
          <div className="featured-image">
            <img
              src={collection}
              alt="PURELUXE premium skincare collection"
            />
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
     {/* PROMOTIONAL BANNER */}
<section className="promo-banner">
  <div className="container">
    <div className="promo-content" data-aos="fade-up">

      <span>
        DISCOVER THE BEAUTY OF SELF-CARE
      </span>

      <h2>
        Because Your Skin Deserves the Best.
      </h2>

      <p>
        Give your skin the care it deserves with PURELUXE.
        Explore our premium skincare collection and make
        every day a beautiful glow day.
      </p>

      <a href="#products" className="light-btn">
        Pureluxe Collection <FaArrowRight />
      </a>

    </div>
  </div>
</section>

    {/* ABOUT BRAND */}
<section className="about-section section-padding" id="about">
  <div className="container">
    <div className="row align-items-center g-5">

      <div className="col-lg-6">
        <div className="about-image" data-aos="fade-right">
          <img src={about} alt="About PURELUXE premium skincare" />

          <div className="about-image-label">
            <FaLeaf />
            <span>Beauty Begins With Care</span>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="about-content" data-aos="fade-left">
          <h2>
            Your Skin Deserves
            <span> Something Special.</span>
          </h2>

          <p>
            At PURELUXE, we believe beautiful skin begins with
            consistent care and the right skincare essentials.
            Our goal is to make your skincare journey simple,
            enjoyable, and full of confidence.
          </p>

          <p>
            From refreshing cleansers to nourishing moisturizers
            and everyday sun protection, discover products that
            make caring for your skin a beautiful daily ritual.
          </p>

          <div className="about-points">

            <div>
              <FaCheckCircle />
              <span>Essentials for everyday skincare</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Quality-focused product selection</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Beauty, comfort and confidence</span>
            </div>
            <div>
              <FaCheckCircle />
              <span>Carefully selected skincare essentials</span>
            </div>

          </div>

        </div>
      </div>

    </div>
  </div>
</section>

     {/* WHY CHOOSE US */}
<section className="why-section section-padding">
  <div className="container">

    <div className="section-heading" data-aos="fade-up">
      
      <h2>Beauty Begins With Better Care</h2>
      <p>
        Discover a skincare experience that brings quality,
        comfort, and confidence into your everyday routine.
      </p>
    </div>

    <div className="row g-4">

      {/* CARD 1 */}
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="why-card" data-aos="fade-up">
          <div className="why-icon">
            <FaLeaf />
          </div>
          <h3>Skin-Loving Care</h3>
          <p>
            Explore thoughtfully selected skincare essentials
            for your everyday beauty routine.
          </p>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="why-card" data-aos="fade-up" data-aos-delay="100">
          <div className="why-icon">
            <FaShieldAlt />
          </div>
          <h3>Quality You Trust</h3>
          <p>
            Discover quality-focused products with clear
            information to make confident choices.
          </p>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="why-card" data-aos="fade-up" data-aos-delay="200">
          <div className="why-icon">
            <FaShippingFast />
          </div>
          <h3>Fast & Easy Delivery</h3>
          <p>
            Enjoy a smooth shopping experience with convenient
            ordering and reliable delivery.
          </p>
        </div>
      </div>

      {/* CARD 4 */}
      <div className="col-12 col-sm-6 col-lg-3">
        <div className="why-card" data-aos="fade-up" data-aos-delay="300">
          <div className="why-icon">
            <FaHeadset />
          </div>
          <h3>Here For You</h3>
          <p>
            Our friendly support team is ready to help
            make your shopping experience easier.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

     {/* PRODUCT HIGHLIGHTS */}
<section className="highlight-section section-padding">
  <div className="container">
    <div className="row align-items-center g-5">

      <div className="col-lg-6">
        <div className="highlight-image" data-aos="fade-right">
          <img src={highlight} alt="PURELUXE premium skincare collection" />
        </div>
      </div>

      <div className="col-lg-6">
        <div className="highlight-content" data-aos="fade-left">

          

          <h2>
            Simple Care.
            <span> Beautiful Glow.</span>
          </h2>

          <p>
            Give your skin the love it deserves with PURELUXE.
            Discover carefully selected skincare essentials designed
            to make your daily beauty routine simple, refreshing,
            and enjoyable.
          </p>

          <div className="highlight-list">

            <div>
              <span className="highlight-icon">
                <FaTint />
              </span>
              <div>
                <h3>Gentle Cleansing</h3>
                <p>
                  Refresh your skin and remove everyday impurities
                  with a gentle cleansing routine.
                </p>
              </div>
            </div>

            <div>
              <span className="highlight-icon">
                <FaRegSmile />
              </span>
              <div>
                <h3>Deep Hydration</h3>
                <p>
                  Keep your skin feeling soft, smooth, and hydrated
                  with nourishing moisturizers.
                </p>
              </div>
            </div>

            <div>
              <span className="highlight-icon">
                <FaSun />
              </span>
              <div>
                <h3>Daily Sun Protection</h3>
                <p>
                  Protect your skin from harmful UV rays with
                  everyday broad-spectrum sunscreen.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  </div>
</section>

{/* CUSTOMER REVIEWS */}
<section className="reviews-section section-padding" id="reviews">
  <div className="container">

    <div className="section-heading" data-aos="fade-up">
      
      <h2>Loved by Our Customers</h2>
      <p>
        Discover why our customers trust PURELUXE for their everyday
        skincare and glowing skin journey.
      </p>
    </div>

    <div className="row g-4">

      {/* REVIEW 1 */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="review-card" data-aos="fade-up">

          <div className="review-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} />
            ))}
          </div>

          <p>
            "PURELUXE has become my favourite skincare destination!
            The products feel amazing on my skin and are perfect
            for my everyday skincare routine."
          </p>

          <div className="review-user">
            <div className="review-avatar">A</div>
            <div>
              <h4>Ananya R.</h4>
              <span>Verified Customer</span>
            </div>
          </div>

        </div>
      </div>

      {/* REVIEW 2 */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="review-card" data-aos="fade-up" data-aos-delay="100">

          <div className="review-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} />
            ))}
          </div>

          <p>
            "I absolutely love the quality and presentation of
            PURELUXE products. Shopping is so easy, and I love
            exploring their beautiful skincare collection."
          </p>

          <div className="review-user">
            <div className="review-avatar">M</div>
            <div>
              <h4>Meera S.</h4>
              <span>Verified Customer</span>
            </div>
          </div>

        </div>
      </div>

      {/* REVIEW 3 */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="review-card" data-aos="fade-up" data-aos-delay="200">

          <div className="review-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} />
            ))}
          </div>

          <p>
            "My skincare shopping experience has been wonderful.
            I love the elegant collection, simple product details
            and the overall premium feel of PURELUXE."
          </p>

          <div className="review-user">
            <div className="review-avatar">K</div>
            <div>
              <h4>Kavya P.</h4>
              <span>Verified Customer</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

      {/* SPECIAL OFFERS */}
      <section className="offers-section section-padding">
        <div className="container">
          <div className="offer-card" data-aos="zoom-in">
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <div className="offer-content">
                  <span className="section-subtitle"> EXCLUSIVE BEAUTY DEALS</span>
                  <h2>
                    Glow More,
                    <span> Spend Less.</span>
                  </h2>
                  <p>
                    Treat your skin to something special! Discover your
                    favourite skincare essentials and enjoy up to 40% OFF
                    on selected products. Your journey to healthy,
                    radiant skin starts here.
                  </p>
                  <a href="#products" className="primary-btn">
                    Shop the Collection <FaArrowRight />
                  </a>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="offer-image">
                  <img src={offer} alt="LUMORA skincare special collection" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
<section className="newsletter-section section-padding">
  <div className="container">
    <div className="newsletter-content" data-aos="fade-up">

      <span className="section-subtitle">
        STAY BEAUTIFUL WITH PURELUXE
      </span>

      <h2>A Daily Dose of Beauty in Your Inbox.</h2>

      <p>
        Subscribe to PURELUXE and be the first to discover
        new skincare arrivals, exclusive beauty offers,
        skincare tips and special surprises.
      </p>

      <form className="newsletter-form" onSubmit={handleNewsletter}>

        <div className="newsletter-input">
          <FaEnvelope />

          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="primary-btn">
          Join the Glow Club <FaArrowRight />
        </button>

      </form>

      {newsletterMessage && (
        <p className="form-message">{newsletterMessage}</p>
      )}

    </div>
  </div>
</section>
      {/* FAQ */}
<section className="faq-section section-padding">
  <div className="container">
    <div className="row g-5">

      <div className="col-lg-5">
        <div className="faq-heading" data-aos="fade-right">

          <span className="section-subtitle">
            WE'RE HERE TO HELP
          </span>

          <h2>
            Everything You Need to Know
          </h2>

          <p>
            Have questions about skincare, product selection,
            orders or delivery? Find helpful answers to make
            your PURELUXE shopping experience easier.
          </p>

          <a href="#contact" className="secondary-btn">
            Need More Help? <FaArrowRight />
          </a>

        </div>
      </div>

      <div className="col-lg-7">
        <div className="faq-list" data-aos="fade-left">

          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${
                activeFaq === index ? "active" : ""
              }`}
              key={index}
            >

              <button
                className="faq-question"
                onClick={() =>
                  setActiveFaq(activeFaq === index ? -1 : index)
                }
              >
                <span>{faq.question}</span>

                {activeFaq === index ? <FaMinus /> : <FaPlus />}
              </button>

              {activeFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}

            </div>
          ))}

        </div>
      </div>

    </div>
  </div>
</section>
      {/* CONTACT */}
<section className="contact-section section-padding" id="contact">
  <div className="container">
    <div className="section-heading" data-aos="fade-up">
      <span className="section-subtitle">WE'D LOVE TO HEAR FROM YOU</span>
      <h2>Let's Talk Skincare</h2>
      <p>
        Have questions about your skincare routine or our products?
        Send us a message and the PURELUXE team will be happy to help.
      </p>
    </div>

    <div className="row g-5">
      <div className="col-lg-5">
        <div className="contact-info" data-aos="fade-right">
          <h3>Get in Touch</h3>
          <p>
            We're here to make your skincare journey simple and enjoyable.
            Contact us for product details, order support or beauty enquiries.
          </p>

          <div className="contact-info-item">
            <span><FaEnvelope /></span>
            <div>
              <h4>Email Us</h4>
              <p>uk556513@gmail.com</p>
            </div>
          </div>

          <div className="contact-info-item">
            <span><FaPhone /></span>
            <div>
              <h4>Call Us</h4>
              <p>+91 93425 68375</p>
            </div>
          </div>

          <div className="contact-info-item">
            <span><FaMapMarkerAlt /></span>
            <div>
              <h4>Our Location</h4>
              <p>Puliyampatti, Krishnagiri, Tamil Nadu</p>
            </div>
          </div>

          <div className="contact-socials">
            <a href="#contact" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#contact" aria-label="Instagram"><FaInstagram /></a>
            <a href="#contact" aria-label="Pinterest"><FaPinterestP /></a>
          </div>
        </div>
      </div>

      <div className="col-lg-7">
        <form className="contact-form" onSubmit={handleContact} data-aos="fade-left">
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="contactName">Your Name</label>
              <input
                type="text"
                id="contactName"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="contactEmail">Email Address</label>
              <input
                type="email"
                id="contactEmail"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="contactSubject">Subject</label>
              <input
                type="text"
                id="contactSubject"
                placeholder="Product enquiry, order support, etc."
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="contactText">Your Message</label>
              <textarea
                id="contactText"
                rows="5"
                placeholder="Tell us how we can help you..."
                required
              ></textarea>
            </div>

            <div className="col-12">
              <button type="submit" className="primary-btn">
                Send Message <FaArrowRight />
              </button>
            </div>
          </div>

          {contactMessage && (
            <p className="form-message">{contactMessage}</p>
          )}
        </form>
      </div>
    </div>
  </div>
</section>
      {/* FOOTER */}
<footer className="footer-section">
  <div className="container">
    <div className="row g-4 footer-top">
      <div className="col-lg-4 col-md-6">
        <a href="#home" className="footer-logo">
          PURELUXE
        </a>
        <p className="footer-about">
          Discover the beauty of healthy, glowing skin with PURELUXE.
          Thoughtfully selected skincare essentials to make every
          day feel special.
        </p>

        <div className="footer-socials">
          <a href="#contact" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#contact" aria-label="Instagram"><FaInstagram /></a>
          <a href="#contact" aria-label="Pinterest"><FaPinterestP /></a>
        </div>
      </div>

      <div className="col-lg-2 col-md-6">
        <h3>Explore</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About PURELUXE</a></li>
          <li><a href="#categories">Categories</a></li>
          <li><a href="#products">Shop All</a></li>
          <li><a href="#reviews">Customer Reviews</a></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6">
        <h3>Customer Support</h3>
        <ul>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#faq">Frequently Asked Questions</a></li>
          <li><a href="#contact">Shipping Information</a></li>
          <li><a href="#contact">Returns & Refunds</a></li>
          <li><a href="#contact">Privacy Policy</a></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6">
        <h3>Get in Touch</h3>
        <div className="footer-contact">
          <p><FaEnvelope /> uk556513@gmail.com</p>
          <p><FaPhone /> +91 93425 68375</p>
          <p><FaMapMarkerAlt /> Puliyampatti, Krishnagiri, Tamil Nadu</p>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} PURELUXE SKINCARE. All Rights Reserved.</p>
      <a href="#home">Back to Top ↑</a>
    </div>
  </div>
</footer>

    </div>
  );
}

export default App;
