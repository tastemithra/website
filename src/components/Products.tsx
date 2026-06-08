"use client";

import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WhatsAppIcon } from './WhatsAppIcon';

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  badge: string;
  bgColor: string;
  textColor: string;
  badgeColor: string;
  titleColor: string;
  description: string;
  waMessage: string;
  sizes: string[];
}

interface ProductsProps {
  isPage?: boolean;
}







const categories = [
  "All",
  "Oils",
  "Rice & Grain Flours",
  "Puttu Powders",
  "Spice Powders",
  "Masalas & Seasonings",
  "Traditional Products"
];

const products: Product[] = [
  // 1. Oils
  {
    id: "coconut-oil",
    name: "Coconut Oil",
    category: "Oils",
    image: "/images/products/Coconut oil.png",
    badge: "Cold Pressed",
    bgColor: "#C8FF4D",
    textColor: "#103B29",
    badgeColor: "#103B29",
    titleColor: "#103B29",
    description: "Hygienically cold-pressed from 100% unsulphured copra.",
    waMessage: "",
    sizes: ["200ml", "500ml", "1L", "5L"]
  },
  {
    id: "sesame-oil",
    name: "Sesame Oil",
    category: "Oils",
    image: "/images/products/Sesame oil.png",
    badge: "100% Pure",
    bgColor: "#FFE8C7",
    textColor: "#4A351C",
    badgeColor: "#4A351C",
    titleColor: "#4A351C",
    description: "Traditionally pressed organic sesame oil for authentic taste.",
    waMessage: "",
    sizes: ["200ml", "500ml", "1L", "5L"]
  },
  // 2. Rice & Grain Flours
  {
    id: "rice-powder",
    name: "Rice Powder",
    category: "Rice & Grain Flours",
    image: "/images/products/Rice powder.png",
    badge: "Fine Ground",
    bgColor: "#FF6B4A",
    textColor: "#4E1A0F",
    badgeColor: "#4E1A0F",
    titleColor: "#4E1A0F",
    description: "Superfine premium rice flour for all your culinary needs.",
    waMessage: "",
    sizes: ["500g", "1kg", "5kg"]
  },
  {
    id: "roasted-rice-powder",
    name: "Roasted Rice Powder",
    category: "Rice & Grain Flours",
    image: "/images/products/Roasted rice powder.png",
    badge: "Aromatic",
    bgColor: "#B9FFD9",
    textColor: "#103B29",
    badgeColor: "#103B29",
    titleColor: "#103B29",
    description: "Slow-roasted to golden perfection for authentic aroma.",
    waMessage: "",
    sizes: ["500g", "1kg", "5kg"]
  },
  {
    id: "wheat-powder",
    name: "Wheat Powder",
    category: "Rice & Grain Flours",
    image: "/images/products/Wheat powder.png",
    badge: "Whole Grain",
    bgColor: "#F8C5D3",
    textColor: "#4D0F28",
    badgeColor: "#4D0F28",
    titleColor: "#4D0F28",
    description: "100% pure whole wheat flour, rich in natural fiber.",
    waMessage: "",
    sizes: ["1kg", "5kg"]
  },
  {
    id: "ragi-powder",
    name: "Ragi Powder",
    category: "Rice & Grain Flours",
    image: "/images/products/Ragi powder.png",
    badge: "Nutritious",
    bgColor: "#DCCEFF",
    textColor: "#4A235A",
    badgeColor: "#4A235A",
    titleColor: "#4A235A",
    description: "Finely ground premium finger millet, packed with calcium.",
    waMessage: "",
    sizes: ["500g", "1kg"]
  },
  {
    id: "roasted-rava",
    name: "Roasted Rava",
    category: "Rice & Grain Flours",
    image: "/images/products/Roasted rava.png",
    badge: "Crispy",
    bgColor: "#FFD6A5",
    textColor: "#5D4037",
    badgeColor: "#5D4037",
    titleColor: "#5D4037",
    description: "Perfectly roasted semolina for easy cooking and fluffiness.",
    waMessage: "",
    sizes: ["500g", "1kg"]
  },
  // 3. Puttu Powders
  {
    id: "wheat-puttu",
    name: "Steamed Wheat Puttu Powder",
    category: "Puttu Powders",
    image: "/images/products/Steamed wheat puttu powder.png",
    badge: "Fiber Rich",
    bgColor: "#FFF3A3",
    textColor: "#5D4037",
    badgeColor: "#5D4037",
    titleColor: "#5D4037",
    description: "Healthy steamed whole wheat puttu powder, packed with nutrients.",
    waMessage: "",
    sizes: ["500g", "1kg"]
  },
  {
    id: "ragi-puttu",
    name: "Ragi Puttu",
    category: "Puttu Powders",
    image: "/images/products/Ragi puttu.png",
    badge: "Healthy Digest",
    bgColor: "#FFD1DC",
    textColor: "#4D0F28",
    badgeColor: "#4D0F28",
    titleColor: "#4D0F28",
    description: "Calcium-rich ragi flour processed specially for soft puttu.",
    waMessage: "",
    sizes: ["500g", "1kg"]
  },
  {
    id: "corn-puttu",
    name: "Corn Puttu",
    category: "Puttu Powders",
    image: "/images/products/Corn puttu.png",
    badge: "Gluten Free",
    bgColor: "#D8F7A1",
    textColor: "#103B29",
    badgeColor: "#103B29",
    titleColor: "#103B29",
    description: "Finest quality steamed corn flour for a sweet, healthy twist.",
    waMessage: "",
    sizes: ["500g", "1kg"]
  },
  {
    id: "steamed-puttu-powder",
    name: "Steamed Puttu Powder",
    category: "Puttu Powders",
    image: "/images/products/Steamed puttu powder .png",
    badge: "Steamed",
    bgColor: "#BFEAF7",
    textColor: "#0E3945",
    badgeColor: "#0E3945",
    titleColor: "#0E3945",
    description: "Hygienically steamed for extra softness and shelf life.",
    waMessage: "",
    sizes: ["500g", "1kg", "5kg"]
  },
  // 4. Spice Powders
  {
    id: "chilly-powder",
    name: "Chilli Powder",
    category: "Spice Powders",
    image: "/images/products/Chilli powder.png",
    badge: "Pure Spicy",
    bgColor: "#C8FF4D",
    textColor: "#103B29",
    badgeColor: "#103B29",
    titleColor: "#103B29",
    description: "100% pure ground red chillies, zero added starch or color.",
    waMessage: "",
    sizes: ["100g", "250g", "500g", "1kg"]
  },
  {
    id: "coriander-powder",
    name: "Coriander Powder",
    category: "Spice Powders",
    image: "/images/products/Coriander powder.png",
    badge: "Aromatic",
    bgColor: "#FF6B4A",
    textColor: "#4E1A0F",
    badgeColor: "#4E1A0F",
    titleColor: "#4E1A0F",
    description: "Freshly ground coriander seeds with high natural essential oil.",
    waMessage: "",
    sizes: ["100g", "250g", "500g", "1kg"]
  },
  {
    id: "turmeric-powder",
    name: "Turmeric Powder",
    category: "Spice Powders",
    image: "/images/products/Turmeric powder.png",
    badge: "High Curcumin",
    bgColor: "#BFEAF7",
    textColor: "#0E3945",
    badgeColor: "#0E3945",
    titleColor: "#0E3945",
    description: "Pure turmeric ground from finest fingers, high curcumin content.",
    waMessage: "",
    sizes: ["100g", "250g", "500g", "1kg"]
  },
  {
    id: "kashmiri-powder",
    name: "Kashmiri Chilli Powder",
    category: "Spice Powders",
    image: "/images/products/Kashmiri chilli powder.png",
    badge: "Mild & Bright",
    bgColor: "#FFE8C7",
    textColor: "#4A351C",
    badgeColor: "#4A351C",
    titleColor: "#4A351C",
    description: "Premium Kashmiri chillies for a vibrant red color and mild warmth.",
    waMessage: "",
    sizes: ["100g", "250g", "500g", "1kg"]
  },
  {
    id: "pepper-powder",
    name: "Pepper Powder",
    category: "Spice Powders",
    image: "/images/products/Black pepper powder.png",
    badge: "Bold Grade",
    bgColor: "#FFD1DC",
    textColor: "#4D0F28",
    badgeColor: "#4D0F28",
    titleColor: "#4D0F28",
    description: "Ground from premium, sun-dried Malabar black peppercorns.",
    waMessage: "",
    sizes: ["100g", "250g", "500g", "1kg"]
  },
  // 5. Masalas & Seasonings
  {
    id: "sambar-powder",
    name: "Sambar Powder",
    category: "Masalas & Seasonings",
    image: "/images/products/Sambar powder.png",
    badge: "Kerala Style",
    bgColor: "#F8C5D3",
    textColor: "#4D0F28",
    badgeColor: "#4D0F28",
    titleColor: "#4D0F28",
    description: "Traditional spice blend for authentic aromatic Kerala Sambar.",
    waMessage: "",
    sizes: ["100g", "250g", "500g", "1kg"]
  },
  {
    id: "chicken-masala",
    name: "Chicken Masala",
    category: "Masalas & Seasonings",
    image: "/images/products/Chicken masala.png",
    badge: "Rich & Spicy",
    bgColor: "#DCCEFF",
    textColor: "#4A235A",
    badgeColor: "#4A235A",
    titleColor: "#4A235A",
    description: "Curated blend of premium spices for mouth-watering chicken curry.",
    waMessage: "",
    sizes: ["100g", "250g", "500g", "1kg"]
  },
  {
    id: "chutney-powder",
    name: "Chutney Powder",
    category: "Masalas & Seasonings",
    image: "/images/products/Chutney Powder.png",
    badge: "Hygienic Home",
    bgColor: "#FFD6A5",
    textColor: "#5D4037",
    badgeColor: "#5D4037",
    titleColor: "#5D4037",
    description: "Traditional recipe roasted lentils & spices, perfect with idli/dosa.",
    waMessage: "",
    sizes: ["100g", "250g", "500g", "1kg"]
  },
  {
    id: "garam-masala",
    name: "Garam Masala Powder",
    category: "Masalas & Seasonings",
    image: "/images/products/garam masala powder.png",
    badge: "Premium Blend",
    bgColor: "#B9FFD9",
    textColor: "#103B29",
    badgeColor: "#103B29",
    titleColor: "#103B29",
    description: "Slow-roasted high-quality whole spices ground in small batches.",
    waMessage: "",
    sizes: ["100g", "250g", "500g", "1kg"]
  },
  {
    id: "achar-podi",
    name: "Achar Podi",
    category: "Masalas & Seasonings",
    image: "/images/products/Achar podi.png",
    badge: "Tangy Pickles",
    bgColor: "#AEEFF2",
    textColor: "#0E3945",
    badgeColor: "#0E3945",
    titleColor: "#0E3945",
    description: "Perfect spice mix for matching traditional pickles with zero preservatives.",
    waMessage: "",
    sizes: ["100g", "250g", "500g", "1kg"]
  },
  // 6. Traditional Products
  {
    id: "avilose-podi",
    name: "Avilose Podi",
    category: "Traditional Products",
    image: "/images/products/Avilose podi.png",
    badge: "Kerala Snack",
    bgColor: "#FFF3A3",
    textColor: "#5D4037",
    badgeColor: "#5D4037",
    titleColor: "#5D4037",
    description: "Traditional roasted rice and coconut snack mix made with care.",
    waMessage: "",
    sizes: ["200g", "500g", "1kg"]
  }
];

// Homepage featured products (subset of 10 products)
const featuredIds = [
  "coconut-oil",
  "sesame-oil",
  "rice-powder",
  "steamed-puttu-powder",
  "ragi-puttu",
  "kashmiri-powder",
  "turmeric-powder",
  "chicken-masala",
  "sambar-powder",
  "avilose-podi"
];
const featuredProducts = products.filter(p => featuredIds.includes(p.id));

export const Products: React.FC<ProductsProps> = ({ isPage = false }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const trackRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  // Persistent current index — never resets on re-render
  const currentIndexRef = useRef(0);
  // Whether the slider has been positioned for the first time
  const hasInitialisedRef = useRef(false);
  // Tracks last time the user interacted with a card (for autoplay pause)
  const lastInteractionRef = useRef<number>(0);
  const INTERACTION_PAUSE_MS = 5000; // pause autoplay for 5s after user interaction
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [selectedQuantities, setSelectedQuantities] = useState<Record<string, number>>({});
  const [isSelectingSize, setIsSelectingSize] = useState(false);

  // Determine current display list
  const displayProducts = useMemo(() => {
    return isPage
      ? (activeCategory === "All" ? products : products.filter(p => p.category === activeCategory))
      : featuredProducts;
  }, [isPage, activeCategory]);

  // We render 3 cloned sets so the middle set (index N to 2N-1) is always the "real" set.
  // currentIndexRef is a global slide index (unbounded), we derive CSS translateX from it.
  const N = displayProducts.length; // number of real slides

  const getCardWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 280;
    const card = track.querySelector('.mockup-product-card') as HTMLElement | null;
    if (!card) return 280;
    const gapStyle = window.getComputedStyle(track).columnGap || window.getComputedStyle(track).gap || '24px';
    const gap = parseFloat(gapStyle) || 24;
    return card.offsetWidth + gap;
  }, []);

  // Apply transform instantly (no animation) — used for the silent loop-back jump
  const jumpTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = getCardWidth();
    track.style.transition = 'none';
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }, [getCardWidth]);

  // Apply transform with smooth animation
  const slideTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = getCardWidth();
    track.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }, [getCardWidth]);

  // Navigate by delta (+1 or -1). Handles the infinite loop boundary.
  const navigate = useCallback((delta: number) => {
    if (isAnimatingRef.current) return;
    if (N === 0) return;
    isAnimatingRef.current = true;

    const nextIndex = currentIndexRef.current + delta;
    currentIndexRef.current = nextIndex;
    slideTo(nextIndex);

    // After animation, silently jump back to the middle clone if we've left bounds
    setTimeout(() => {
      // Normalise: keep currentIndexRef within [N, 2N)
      if (currentIndexRef.current < N) {
        currentIndexRef.current += N;
        jumpTo(currentIndexRef.current);
      } else if (currentIndexRef.current >= N * 2) {
        currentIndexRef.current -= N;
        jumpTo(currentIndexRef.current);
      }
      isAnimatingRef.current = false;
    }, 520); // slightly longer than transition
  }, [N, slideTo, jumpTo]);

  // Call this whenever the user interacts with a card to pause autoplay temporarily
  const pauseAutoplay = useCallback(() => {
    lastInteractionRef.current = Date.now();
  }, []);

  // On first mount & whenever card dimensions change, jump to the start of the middle set
  useEffect(() => {
    if (isPage) return;
    const track = trackRef.current;
    if (!track) return;

    const initialise = () => {
      const cardWidth = getCardWidth();
      if (cardWidth > 50) {
        if (!hasInitialisedRef.current) {
          // First time: position to the start of the middle (2nd) clone set
          currentIndexRef.current = N;
          hasInitialisedRef.current = true;
        }
        // Always re-apply the transform at correct cardWidth (handles resize)
        track.style.transition = 'none';
        track.style.transform = `translateX(-${currentIndexRef.current * cardWidth}px)`;
      }
    };

    // Wait for layout
    const observer = new ResizeObserver(initialise);
    const card = track.querySelector('.mockup-product-card');
    if (card) observer.observe(card);

    const onResize = () => initialise();
    window.addEventListener('resize', onResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, [isPage, N, getCardWidth]);

  // Autoplay — fires every 3.5s, but skips while user is actively selecting items
  useEffect(() => {
    if (isPage) return;
    const id = setInterval(() => {
      if (isSelectingSize) return; // keep slider fixed while size dropdown is open/active
      if (Object.values(selectedQuantities).some((qty) => qty > 0)) return; // keep slider stable while quantity selection is active
      const timeSinceInteraction = Date.now() - lastInteractionRef.current;
      if (timeSinceInteraction < INTERACTION_PAUSE_MS) return; // user is selecting, wait
      navigate(1);
    }, 3500);
    return () => clearInterval(id);
  }, [isPage, navigate, selectedQuantities, isSelectingSize]);

  const selectedCount = Object.values(selectedQuantities).reduce((sum, qty) => sum + qty, 0);

  // Filter products that have quantities selected > 0
  const cartItems = Object.entries(selectedQuantities)
    .filter(([_, qty]) => qty > 0)
    .map(([key, qty]) => {
      const [productId, size] = key.split(':');
      const product = products.find((p) => p.id === productId);
      return {
        id: key, // Use compound key (productId:size) as the identifier for removal
        productId,
        name: product ? product.name : productId,
        size,
        qty,
      };
    });

  // Construct bulk WhatsApp message
  const constructBulkWaMessage = () => {
    let msg = "Hi Taste Mithra, I'm interested in ordering the following products:\n\n";
    cartItems.forEach((item) => {
      msg += `• ${item.name} (${item.size}) — ${item.qty} ${item.qty === 1 ? 'packet' : 'packets'}\n`;
    });
    msg += "\nPlease confirm the details and send pricing. Thanks!";
    return encodeURIComponent(msg);
  };

  return (
    <section id="products" className="products-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="section-badge-dot"></span>
            {isPage ? "Our Full Collection" : "Our Finest Collection"}
            <span className="section-badge-dot"></span>
          </div>
          <h2 className="section-title">
            {isPage ? "Kitchen Essentials Catalog" : "Kitchen Essentials"}
          </h2>
          <div className="header-divider"></div>
        </div>

        {/* 1. Dedicated Products Page View: Tabs + Filter Grid */}
        {isPage && (
          <>
            <div className="category-tabs-wrapper">
              {/* Desktop view: row of buttons */}
              <div className="category-tabs-desktop">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`category-tab-btn ${activeCategory === cat ? 'active-tab' : ''}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Mobile view: select dropdown */}
              <div className="category-select-mobile">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="category-dropdown"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="products-grid">
              {displayProducts.map((product) => {
                const selectedSize = selectedSizes[product.id] || product.sizes[0];
                const packetsCount = selectedQuantities[`${product.id}:${selectedSize}`] || 0;
                return (
                  <div
                    key={product.id}
                    className="mockup-product-card"
                    style={{
                      '--card-bg': product.bgColor,
                      '--card-text': product.textColor,
                      backgroundColor: 'var(--card-bg)',
                      color: 'var(--card-text)',
                    } as React.CSSProperties}
                  >
                    <div className="card-header-row">
                      <span className="card-category-label">{product.category}</span>
                      <select
                        value={selectedSize}
                        onChange={(e) => setSelectedSizes({ ...selectedSizes, [product.id]: e.target.value })}
                        className="card-size-select"
                      >
                        {product.sizes.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="card-image-box">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={260}
                        height={260}
                        className="card-image"
                      />
                    </div>

                    <h3 className="card-title">{product.name}</h3>

                    <div className="card-actions-row">
                      <div className={`quantity-selector ${packetsCount > 0 ? 'selected' : ''}`}>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (packetsCount > 0) {
                              const nextQty = packetsCount - 1;
                              const updated = { ...selectedQuantities };
                              const itemKey = `${product.id}:${selectedSize}`;
                              if (nextQty === 0) {
                                delete updated[itemKey];
                              } else {
                                updated[itemKey] = nextQty;
                              }
                              setSelectedQuantities(updated);
                            }
                          }}
                          disabled={packetsCount === 0}
                          className="qty-btn minus-btn"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span
                          className="quantity-display"
                          onClick={() => {
                            if (packetsCount === 0) {
                              const itemKey = `${product.id}:${selectedSize}`;
                              setSelectedQuantities({ ...selectedQuantities, [itemKey]: 1 });
                            }
                          }}
                        >
                          {packetsCount}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            const itemKey = `${product.id}:${selectedSize}`;
                            setSelectedQuantities({ ...selectedQuantities, [itemKey]: packetsCount + 1 });
                          }}
                          className="qty-btn plus-btn"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* 2. Homepage View: Slide of Products */}
        {!isPage && (
          <div className="homepage-products-wrapper">
            <div className="slider-outer-container">
              <button
                type="button"
                className="slider-nav-btn prev-btn"
                onClick={() => navigate(-1)}
                aria-label="Previous slide"
              >
                ‹
              </button>

              {/* The track uses CSS transform for positioning — no scroll needed */}
              <div className="slider-viewport">
                <div className="products-slider-track" ref={trackRef}>
                  {[...displayProducts, ...displayProducts, ...displayProducts].map((product, index) => {
                    const selectedSize = selectedSizes[product.id] || product.sizes[0];
                    const packetsCount = selectedQuantities[`${product.id}:${selectedSize}`] || 0;
                    const uniqueKey = `${product.id}-set-${Math.floor(index / displayProducts.length)}`;
                    return (
                      <div
                        key={uniqueKey}
                        className="mockup-product-card"
                        style={{
                          '--card-bg': product.bgColor,
                          '--card-text': product.textColor,
                          backgroundColor: 'var(--card-bg)',
                          color: 'var(--card-text)',
                        } as React.CSSProperties}
                      >
                        <div className="card-header-row">
                          <span className="card-category-label">{product.category}</span>
                          <select
                            value={selectedSize}
                            onPointerDown={() => {
                              setIsSelectingSize(true);
                              pauseAutoplay();
                            }}
                            onFocus={() => {
                              setIsSelectingSize(true);
                              pauseAutoplay();
                            }}
                            onBlur={() => {
                              setIsSelectingSize(false);
                              pauseAutoplay();
                            }}
                            onChange={(e) => {
                              pauseAutoplay();
                              setSelectedSizes({ ...selectedSizes, [product.id]: e.target.value });
                              setIsSelectingSize(false);
                            }}
                            className="card-size-select"
                          >
                            {product.sizes.map((size) => (
                              <option key={size} value={size}>
                                {size}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="card-image-box">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={260}
                            height={260}
                            className="card-image"
                          />
                        </div>

                        <h3 className="card-title">{product.name}</h3>

                        <div className="card-actions-row">
                          <div className={`quantity-selector ${packetsCount > 0 ? 'selected' : ''}`}>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                pauseAutoplay();
                                if (packetsCount > 0) {
                                  const nextQty = packetsCount - 1;
                                  const updated = { ...selectedQuantities };
                                  const itemKey = `${product.id}:${selectedSize}`;
                                  if (nextQty === 0) {
                                    delete updated[itemKey];
                                  } else {
                                    updated[itemKey] = nextQty;
                                  }
                                  setSelectedQuantities(updated);
                                }
                              }}
                              disabled={packetsCount === 0}
                              className="qty-btn minus-btn"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span
                              className="quantity-display"
                              onClick={() => {
                                pauseAutoplay();
                                if (packetsCount === 0) {
                                  const itemKey = `${product.id}:${selectedSize}`;
                                  setSelectedQuantities({ ...selectedQuantities, [itemKey]: 1 });
                                }
                              }}
                            >
                              {packetsCount}
                            </span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                pauseAutoplay();
                                const itemKey = `${product.id}:${selectedSize}`;
                                setSelectedQuantities({ ...selectedQuantities, [itemKey]: packetsCount + 1 });
                              }}
                              className="qty-btn plus-btn"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                className="slider-nav-btn next-btn"
                onClick={() => navigate(1)}
                aria-label="Next slide"
              >
                ›
              </button>
            </div>

            {/* View Full Collection Button */}
            <div className="carousel-footer">
              <Link href="/products" className="pill-nav-btn view-all-btn">
                View Full Collection 🛒
              </Link>
            </div>
          </div>
        )}
      </div>

      {!isPage && (
        <div className="section-wave-decor">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,88L120,77.3C240,67,480,45,720,45.3C960,45,1200,67,1320,77.3L1440,88L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z" fill="#ffffff" />
          </svg>
        </div>
      )}

      {/* Floating Checkout Bar */}
      {cartItems.length > 0 && (
        <>
          <style>{`
            .footer-section {
              padding-bottom: 180px !important;
            }
            @media (max-width: 700px) {
              .footer-section {
                padding-bottom: 240px !important;
              }
            }
          `}</style>
          <div className="floating-checkout-bar">
            <div className="checkout-bar-content">
              <div className="checkout-bar-header">
                <div className="checkout-bar-info">
                  <span className="checkout-cart-icon">🛒</span>
                  <span className="checkout-items-count">
                    <strong>{cartItems.length}</strong> {cartItems.length === 1 ? 'item' : 'items'} selected
                  </span>
                  <span className="checkout-total-packets">
                    ({selectedCount} {selectedCount === 1 ? 'packet' : 'packets'} total)
                  </span>
                </div>
                <div className="checkout-bar-actions">
                  <button
                    onClick={() => setSelectedQuantities({})}
                    className="checkout-clear-btn"
                  >
                    Clear All
                  </button>
                  <a
                    href={`https://wa.me/919895957886?text=${constructBulkWaMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="checkout-submit-btn"
                  >
                    <WhatsAppIcon size={16} />
                    Send Order on WhatsApp
                  </a>
                </div>
              </div>
              <div className="checkout-items-list">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="checkout-list-item">
                    <span className="item-bullet">●</span>
                    <span className="item-name">{item.name}</span>
                    <span className="item-size">({item.size})</span>
                    <span className="item-qty">× {item.qty}</span>
                    <button
                      onClick={() => {
                        const updated = { ...selectedQuantities };
                        delete updated[item.id];
                        setSelectedQuantities(updated);
                      }}
                      className="checkout-remove-item-btn"
                      aria-label={`Remove ${item.name}`}
                      title="Remove product"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      <style>{`
        /* Wave Decoration */
        .section-wave-decor {
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          line-height: 0;
          z-index: 5;
          pointer-events: none;
        }
        .section-wave-decor.upside-down {
          transform: scaleY(-1);
        }
        .section-wave-decor svg {
          width: 100%;
          height: auto;
          display: block;
        }

        .products-section {
          padding: 100px 0 160px;
          background-color: #FFDF00 !important;
          background: #FFDF00 !important;
          position: relative;
        }

        .carousel-footer {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-top: 40px;
        }

        .view-all-btn {
          background: #FF7A00 !important;
          color: #000000 !important;
          border-color: #222222 !important;
          box-shadow: 0 4px 0px #222222 !important;
        }

        .view-all-btn:hover {
          background: #E53935 !important;
          color: #000000 !important;
          border-color: #222222 !important;
          box-shadow: 0 6px 0px #222222 !important;
        }

        .section-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 800;
          color: #000000 !important;
          background: transparent;
          border: none;
          padding: 0;
          border-radius: 0;
          box-shadow: none;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          margin-bottom: 24px;
        }

        .section-badge-dot {
          display: inline-block;
          width: 12px;
          height: 12px;
          background: linear-gradient(135deg, #0E8B5A, #5ed081);
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          animation: badgeDiamondAnim 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          flex-shrink: 0;
        }

        @keyframes badgeDiamondAnim {
          0% { transform: scale(1) rotate(0deg); filter: drop-shadow(0 0 2px rgba(14, 139, 90, 0.3)); }
          50% { transform: scale(1.25) rotate(180deg); filter: drop-shadow(0 0 8px rgba(14, 139, 90, 0.8)); }
          100% { transform: scale(1) rotate(360deg); filter: drop-shadow(0 0 2px rgba(14, 139, 90, 0.3)); }
        }

        .section-title {
          font-family: var(--font-heading);
          font-size: 2.8rem;
          font-weight: 800;
          color: var(--text-light);
          margin-top: 10px;
          margin-bottom: 20px;
        }

        .header-divider {
          width: 80px;
          height: 3px;
          background-color: var(--primary);
          margin: 0 auto;
          box-shadow: 0 0 10px var(--primary);
        }

        /* Categories Tab Bar */
        .category-tabs-wrapper {
          display: flex;
          justify-content: flex-start;
          width: 100%;
          margin-bottom: 44px;
          overflow-x: auto;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
          padding: 10px 0;
        }

        @media (min-width: 901px) {
          .category-tabs-wrapper {
            justify-content: center;
          }
        }

        .category-tabs-wrapper::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }

        .category-tabs-desktop {
          display: flex;
          gap: 8px;
          padding: 0 24px;
        }

        .category-tab-btn {
          font-family: var(--font-body);
          font-size: 0.72rem;
          font-weight: 800;
          color: #222222;
          background: #FFF9E8;
          border: 1.2px solid #222222;
          padding: 6px 14px;
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          box-shadow: 0 1.5px 0px #222222;
          transition: all 0.2s ease;
          cursor: pointer;
          white-space: nowrap;
        }

        .category-tab-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 2px 0px #222222;
        }

        .category-tab-btn.active-tab {
          background: #0E8B5A;
          color: #ffffff;
          box-shadow: 0 1.5px 0px #222222;
          transform: translateY(-1px);
        }

        .category-select-mobile {
          display: none;
          width: 100%;
          padding: 0 24px;
        }

        .category-dropdown {
          width: 100%;
          max-width: 380px;
          margin: 0 auto;
          padding: 12px 24px;
          font-family: var(--font-body);
          font-size: 0.88rem;
          font-weight: 800;
          color: #222222;
          background-color: #FFF9E8;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23222222' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 20px center;
          background-size: 14px;
          border: 2.2px solid #222222;
          border-radius: 999px;
          box-shadow: 0 3px 0px #222222;
          appearance: none;
          cursor: pointer;
          outline: none;
          transition: all 0.2s ease;
        }

        .category-dropdown:focus {
          border-color: #0E8B5A;
          box-shadow: 0 3px 0px #0E8B5A;
        }

        @media (max-width: 768px) {
          .category-tabs-desktop {
            display: none;
          }
          .category-select-mobile {
            display: block;
            padding: 0;
          }
          .category-dropdown {
            max-width: 100%;
          }
        }

        /* Products Grid */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          padding-bottom: 40px;
        }

        /* Products Slider (Homepage) */
        .slider-outer-container {
          position: relative;
          width: 100%;
          padding: 0 48px;
        }

        /* Viewport clips the overflowing track */
        .slider-viewport {
          overflow: hidden;
          width: 100%;
        }

        .products-slider-track {
          display: flex;
          gap: 24px;
          /* No overflow, no scroll — positioning done via JS transform */
          will-change: transform;
          padding: 24px 0;
        }

        .products-slider-track .mockup-product-card {
          flex: 0 0 calc(33.333% - 16px);
        }

        .slider-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: #FFF9E8;
          border: 2.2px solid #222222;
          box-shadow: 0 4px 0px #222222;
          color: #222222;
          font-family: var(--font-heading);
          font-size: 2.2rem;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 10;
          user-select: none;
          padding-bottom: 5px; /* Visual center adjustment */
        }

        .slider-nav-btn:hover {
          transform: translateY(-50%) translateY(-2px);
          box-shadow: 0 6px 0px #222222;
        }

        .slider-nav-btn:active {
          transform: translateY(-50%) translateY(0px);
          box-shadow: 0 1px 0px #222222;
        }

        .prev-btn {
          left: -15px;
        }

        .next-btn {
          right: -15px;
        }

        @media (max-width: 1024px) {
          .products-slider-track .mockup-product-card {
            flex: 0 0 calc(50% - 12px);
          }
        }

        @media (max-width: 700px) {
          .slider-outer-container {
            padding: 0 8px;
          }
          .products-slider-track {
            gap: 16px;
          }
          .products-slider-track .mockup-product-card {
            flex: 0 0 100%;
          }
          .slider-nav-btn {
            width: 44px;
            height: 44px;
            font-size: 1.8rem;
          }
          .prev-btn {
            left: -10px;
          }
          .next-btn {
            right: -10px;
          }
        }

        /* Mockup Card Design - Flat & Rounded (Photo Style) */
        .mockup-product-card {
          border-radius: 36px;
          border: none !important;
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          box-shadow: none !important;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          position: relative;
          overflow: hidden;
        }

        .mockup-product-card:hover {
          transform: translateY(-6px);
        }

        .card-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-bottom: 18px;
        }

        .card-category-label {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 600;
          opacity: 0.9;
        }

        .card-size-select {
          font-family: var(--font-body);
          font-size: 0.72rem;
          font-weight: 700;
          color: inherit;
          background-color: rgba(255, 255, 255, 0.45);
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23222222' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 8px center;
          background-size: 10px;
          border: 1.5px solid currentColor;
          padding: 4px 22px 4px 8px;
          border-radius: 999px;
          outline: none;
          cursor: pointer;
          appearance: none;
          min-width: 75px;
          text-align: left;
          transition: all 0.2s ease;
          z-index: 2;
        }

        .card-size-select:hover {
          background-color: rgba(255, 255, 255, 0.65);
        }

        .card-size-select:focus {
          background-color: rgba(255, 255, 255, 0.8);
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
        }

        .card-size-select option {
          background-color: #ffffff;
          color: #222222;
          font-weight: 600;
        }

        .card-pill-badge {
          font-family: var(--font-body);
          font-size: 0.72rem;
          font-weight: 500;
          padding: 4px 10px;
          border-radius: 999px;
          border: 1px solid currentColor;
          opacity: 0.85;
          white-space: nowrap;
        }

        .card-image-box {
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 24px;
          border: none !important;
          overflow: hidden;
          position: relative;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.05);
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .mockup-product-card:hover .card-image {
          transform: scale(1.04);
        }

        .card-title {
          font-family: 'Fredoka', var(--font-body), sans-serif;
          font-size: 2.2rem;
          font-weight: 700;
          line-height: 1.1;
          margin-top: 4px;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
          color: currentColor !important;
          -webkit-text-fill-color: currentColor !important;
        }

        .card-actions-row {
          width: 100%;
          margin-top: auto;
        }

        .quantity-selector {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: transparent !important;
          color: inherit !important;
          border: 2.2px solid currentColor !important;
          border-radius: 999px !important;
          box-shadow: none !important;
          transition: all 0.2s ease;
          overflow: hidden;
        }

        .quantity-selector:hover {
          transform: translateY(-2px);
          background-color: rgba(255, 255, 255, 0.12) !important;
        }

        .quantity-selector.selected {
          background-color: #ffffff !important;
          color: #222222 !important;
          border-color: #222222 !important;
          box-shadow: 0 4px 0px #222222 !important;
        }

        .qty-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: transparent !important;
          border: none !important;
          color: currentColor !important;
          font-size: 1.25rem;
          font-weight: 800;
          cursor: pointer;
          transition: background-color 0.2s ease, opacity 0.2s ease;
          outline: none;
          user-select: none;
        }

        .qty-btn:hover {
          background-color: rgba(255, 255, 255, 0.2) !important;
        }

        .quantity-selector.selected .qty-btn:hover {
          background-color: rgba(0, 0, 0, 0.08) !important;
        }

        .qty-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .quantity-display {
          flex: 1;
          text-align: center;
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          user-select: none;
          cursor: pointer;
          padding: 8px 0;
        }

        /* Floating Checkout Bar */
        .floating-checkout-bar {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 680px;
          background: #ffffff;
          border: 3px solid #222222;
          box-shadow: 0 8px 0px #222222;
          border-radius: 24px;
          padding: 20px 24px;
          z-index: 999;
          animation: slideUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        @keyframes slideUp {
          from {
            bottom: -100px;
            opacity: 0;
          }
          to {
            bottom: 30px;
            opacity: 1;
          }
        }

        .checkout-bar-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .checkout-bar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          border-bottom: 2px dashed #e0e0e0;
          padding-bottom: 12px;
        }

        .checkout-bar-info {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #222222;
          font-family: var(--font-body);
          font-size: 0.95rem;
        }

        .checkout-cart-icon {
          font-size: 1.2rem;
        }

        .checkout-items-count {
          font-weight: 700;
        }

        .checkout-total-packets {
          color: #666666;
          font-size: 0.85rem;
        }

        .checkout-bar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .checkout-clear-btn {
          background: transparent;
          border: none;
          color: #FF5A5A;
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          padding: 8px 12px;
          border-radius: 999px;
          transition: all 0.2s ease;
        }

        .checkout-clear-btn:hover {
          background: rgba(255, 90, 90, 0.08);
        }

        .checkout-submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0E8B5A !important;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
          border: 2px solid #222222 !important;
          padding: 10px 20px !important;
          border-radius: 999px !important;
          font-family: var(--font-body);
          font-size: 0.85rem !important;
          font-weight: 800 !important;
          text-decoration: none;
          box-shadow: 0 3px 0px #222222 !important;
          transition: all 0.2s ease;
          cursor: pointer;
          white-space: nowrap;
        }

        .checkout-submit-btn svg.custom-wa-icon.monochromatic,
        .checkout-submit-btn svg.custom-wa-icon.monochromatic path {
          fill: #000000 !important;
        }

        .checkout-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 0px #222222 !important;
        }

        .checkout-submit-btn:active {
          transform: translateY(0);
          box-shadow: 0 1px 0px #222222 !important;
        }

        .checkout-items-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          max-height: 120px;
          overflow-y: auto;
          padding-right: 4px;
        }

        .checkout-items-list::-webkit-scrollbar {
          width: 6px;
        }
        .checkout-items-list::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        .checkout-items-list::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }
        .checkout-items-list::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }

        .checkout-list-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body);
          font-size: 0.88rem;
          color: #333333;
        }

        .item-bullet {
          color: #0E8B5A;
          font-size: 0.6rem;
        }

        .item-name {
          font-weight: 700;
          color: #222222;
        }

        .item-size {
          color: #666666;
          font-size: 0.8rem;
        }

        .item-qty {
          margin-left: auto;
          font-weight: 800;
          color: #0E8B5A;
          background: #eefbf7;
          padding: 2px 8px;
          border-radius: 12px;
          border: 1px solid #c2ebd9;
          font-size: 0.8rem;
        }

        .checkout-remove-item-btn {
          background: transparent;
          border: none;
          color: #FF5A5A;
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          padding: 4px 6px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 8px;
          line-height: 1;
          transition: all 0.2s ease;
        }

        .checkout-remove-item-btn:hover {
          background: rgba(255, 90, 90, 0.1);
          transform: scale(1.1);
        }



        @media (max-width: 1050px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            padding-bottom: 30px;
          }

          .products-grid .mockup-product-card {
            max-width: 100%;
            padding: 16px;
            border-radius: 24px;
          }

          .products-grid .card-image-box {
            border-radius: 16px;
            margin-bottom: 12px;
          }

          .products-grid .card-category-label {
            font-size: 0.75rem;
          }

          .card-size-select {
            font-size: 0.68rem;
            padding: 3px 20px 3px 6px;
            min-width: 68px;
            background-size: 9px;
            background-position: right 6px center;
          }

          .products-grid .card-title {
            font-size: 1.4rem !important;
            margin-bottom: 12px;
            line-height: 1.2;
          }

          .quantity-display {
            font-size: 0.8rem;
          }
          .qty-btn {
            width: 38px;
            height: 38px;
            font-size: 1.1rem;
          }


        }

        @media (max-width: 700px) {
          .products-section .container {
            padding: 0 12px; /* Reduce container padding to give cards more space to expand */
          }

          .products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px; /* Less gap = wider cards */
            padding-bottom: 24px;
          }

          .products-grid .mockup-product-card {
            max-width: 100%;
            padding: 10px; /* Less padding inside cards to maximize visual elements size */
            border-radius: 16px;
          }

          .products-grid .card-image-box {
            border-radius: 10px;
            margin-bottom: 8px;
          }

          .products-grid .card-category-label {
            font-size: 0.65rem;
          }

          .card-size-select {
            font-size: 0.62rem;
            padding: 2.5px 16px 2.5px 5px;
            min-width: 60px;
            background-size: 8px;
            background-position: right 5px center;
            border-width: 1px;
          }

          .products-grid .card-title {
            font-size: 1.12rem !important; /* Slightly larger title */
            margin-bottom: 8px;
            line-height: 1.2;
          }

          .quantity-selector {
            border-width: 1.5px;
          }
          .quantity-display {
            font-size: 0.72rem;
          }
          .qty-btn {
            width: 34px;
            height: 34px;
            font-size: 1rem;
          }

          /* Mobile styling for floating checkout bar */
          .floating-checkout-bar {
            width: calc(100% - 24px);
            left: 12px;
            right: 12px;
            transform: none;
            bottom: 12px;
            border-radius: 20px;
            padding: 12px 16px;
          }
          
          @keyframes slideUp {
            from {
              bottom: -100px;
              opacity: 0;
            }
            to {
              bottom: 12px;
              opacity: 1;
            }
          }

          .checkout-bar-content {
            flex-direction: column;
            gap: 10px;
            align-items: stretch;
          }

          .checkout-bar-header {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
            border-bottom: 2px dashed #e0e0e0;
            padding-bottom: 10px;
          }

          .checkout-bar-info {
            justify-content: center;
            font-size: 0.85rem;
          }

          .checkout-bar-actions {
            justify-content: space-between;
          }

          .checkout-items-list {
            max-height: 100px;
          }
          
          .checkout-submit-btn {
            flex: 1;
            justify-content: center;
            padding: 8px 16px !important;
          }

          .mockup-product-card {
            max-width: 100%;
            margin: 0 auto;
            width: 100%;
            padding: 16px;
          }


        }
      `}</style>
    </section>
  );
};
