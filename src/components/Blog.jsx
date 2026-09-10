import React, { useState, useMemo } from "react";
import "./Blog.css";

const articlesData = [
  {
    id: "react-native-60fps-performance",
    category: "Performance",
    title: "Architecting 60 FPS React Native Apps: The Ultimate Thread & Memory Playbook",
    date: "Feb 2026",
    readTime: "7 min read",
    tags: ["React Native", "Hermes Engine", "Reanimated 3", "FlashList"],
    summary:
      "A battle-tested deep dive into offloading complex animations to the UI thread, eliminating JS-thread frame drops, and profiling memory leaks using Flipper and native allocators.",
    content: [
      {
        heading: "The Root Cause of Mobile Frame Drops",
        text: "In React Native architecture, visual stutters occur when the single-threaded JavaScript runtime gets overwhelmed by heavy state updates, high-frequency serialization across the bridge, or synchronous computations. When a frame cannot be produced within 16.6ms, the UI drops from 60 FPS to noticeably sluggish rates.",
      },
      {
        heading: "1. Leveraging Worklets & UI-Thread Gestures",
        text: "By leveraging React Native Reanimated 3 worklets, we move gestures and transforms completely out of the JS thread onto the dedicated native UI thread. This ensures that even if heavy JSON parsing or Redux updates occur in the background, drawer opening, modal springs, and pinch-to-zoom gestures remain completely buttery-smooth.",
      },
      {
        heading: "2. Memory Hygiene: FlashList vs. VirtualizedList",
        text: "Switching from standard FlatList to Shopify's FlashList reduces memory footprints by recycling existing native cell views instead of constantly creating and destroying nodes. Combined with image memory caches (e.g. FastImage) and Hermes GC tuning, app crashes drop by over 80%.",
      },
      {
        heading: "Key Engineering Takeaway",
        text: "Never compute expensive layout derived states inside render loops. Memoize with useMemo, utilize useDeferredValue where appropriate, and always profile real low-end devices rather than development simulators.",
      },
    ],
  },
  {
    id: "zero-downtime-mobile-cicd",
    category: "DevOps & Cloud",
    title: "Zero-Downtime Releases: Automating Mobile CI/CD with Fastlane & GitHub Actions",
    date: "Jan 2026",
    readTime: "6 min read",
    tags: ["CI/CD", "Fastlane", "App Store Connect", "Play Console"],
    summary:
      "How we automated multi-environment building, match code signing, and continuous deployment for iOS & Android, cutting release cycles from 3 hours to 12 minutes.",
    content: [
      {
        heading: "The Pain of Manual Mobile Deployments",
        text: "Manual deployments are fraught with signing certificate mismatches, forgotten provisioning profiles, and human error during version bumps. As mobile teams scale, having engineers babysit Xcode and Android Studio builds wastes hundreds of engineering hours every quarter.",
      },
      {
        heading: "1. Match Git-Backed Code Signing",
        text: "By adopting Fastlane Match, cryptographic certificates and provisioning profiles are securely encrypted in a private Git repository. Any machine or CI agent with the match passphrase can generate 100% compliant, reproducible App Store release binaries without keychain pollution.",
      },
      {
        heading: "2. GitHub Actions Pipeline Orchestration",
        text: "Our pipeline validates linting and TypeScript checks in parallel, executes test suites, bumps build numbers via semantic commit messages, builds signed .ipa and .aab artifacts on macOS runners, and automatically uploads to TestFlight and Google Play Internal tracks.",
      },
      {
        heading: "Results Achieved",
        text: "Deployment turnaround dropped from over 3 hours to just 12 minutes with automated changelog generation and instant Slack deployment webhooks.",
      },
    ],
  },
  {
    id: "scalable-redux-toolkit-architecture",
    category: "Architecture",
    title: "Enterprise State Architecture: Scalable Redux Toolkit & RTK Query Patterns",
    date: "Nov 2025",
    readTime: "8 min read",
    tags: ["TypeScript", "Redux Toolkit", "RTK Query", "Offline-First"],
    summary:
      "Designing normalized stores, optimistic cache updates, and type-safe async thunks for high-traffic fintech and e-commerce mobile applications.",
    content: [
      {
        heading: "State Chaos in Growing Applications",
        text: "As enterprise apps expand to hundreds of screens, decentralized state management causes stale data bugs, race conditions, and duplicated network calls. Redux Toolkit provides strict opinionated predictability when structured properly.",
      },
      {
        heading: "1. Normalized Cache Architecture with RTK Query",
        text: "RTK Query eliminates the need to manually write reducers for loading, success, and error states. By assigning entity IDs to cached responses, we achieve automatic cache invalidation and background re-fetching across disconnected application modules.",
      },
      {
        heading: "2. Optimistic UI Updates for Instant Perceived Speed",
        text: "When a user taps 'Like', 'Bookmark', or 'Send Money', the UI should respond within 10ms. RTK Query's onQueryStarted hook enables optimistic updates that instantly reflect changes on screen while safely rolling back if the network request fails.",
      },
      {
        heading: "Summary",
        text: "Treat your mobile client state as a deterministic database. Combine RTK Query for server state with modular slices for client UI state.",
      },
    ],
  },
  {
    id: "native-bridges-swift-kotlin",
    category: "Native Engineering",
    title: "Bridging the Gap: Writing High-Performance Native Modules in Swift & Kotlin",
    date: "Sep 2025",
    readTime: "9 min read",
    tags: ["Swift", "Kotlin", "TurboModules", "JSI"],
    summary:
      "A guide to building custom native bridges and JSI modules for hardware sensors, biometric authentication, and background location tracking.",
    content: [
      {
        heading: "When JavaScript Reaches Its Limits",
        text: "While React Native handles 95% of UI logic seamlessly, deep hardware integration—such as Bluetooth Low Energy (BLE), background geofencing, or hardware-backed keystore biometric cryptography—requires custom native modules written in Swift and Kotlin.",
      },
      {
        heading: "1. Swift Native Module for iOS",
        text: "Using @objc annotations and RCTEventEmitter, Swift classes can expose synchronous constants and asynchronous promises directly to the React Native runtime with strict ARC memory safety.",
      },
      {
        heading: "2. Kotlin Native Module for Android",
        text: "On Android, Kotlin coroutines allow background native processing without blocking the Android main thread, ensuring compliance with strict Google Play background execution limits.",
      },
      {
        heading: "The Future: New Architecture & JSI",
        text: "With TurboModules and JSI (JavaScript Interface), native C++ bindings allow JS to hold direct references to host objects with zero serialization overhead.",
      },
    ],
  },
];

const categories = ["All", "Performance", "DevOps & Cloud", "Architecture", "Native Engineering"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState(null);

  const filteredArticles = useMemo(() => {
    return articlesData.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="blog-section">
      {/* Section Header */}
      <div className="blog-header">
        <div className="blog-eyebrow">
          <span className="blog-pulse-dot" />
          <span>ENGINEERING INSIGHTS & THOUGHT LEADERSHIP</span>
        </div>
        <h2 className="blog-title">
          Technical <span className="blog-title-highlight">Articles</span> & Publications
        </h2>
        <p className="blog-subtitle">
          Architecture playbooks, performance benchmarks, and real-world mobile engineering experiences distilled from 5+ years and 20+ apps developed.
        </p>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="blog-toolbar">
        {/* Category Pills */}
        <div className="blog-categories">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              type="button"
              className={`blog-category-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="blog-search-box">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search articles by keyword or tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="blog-search-input"
          />
          {searchQuery && (
            <button
              type="button"
              className="blog-search-clear"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="blog-grid">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div
              className="blog-card"
              key={article.id}
              onClick={() => setActiveArticle(article)}
            >
              {/* Card Meta Top */}
              <div className="blog-card-meta">
                <span className="blog-category-tag">{article.category}</span>
                <span className="blog-read-time">{article.readTime}</span>
              </div>

              {/* Title & Date */}
              <h3 className="blog-card-title">{article.title}</h3>
              <span className="blog-date">{article.date}</span>

              {/* Summary */}
              <p className="blog-card-summary">{article.summary}</p>

              {/* Tags */}
              <div className="blog-tags-row">
                {article.tags.map((tag, tIdx) => (
                  <span className="blog-tag-pill" key={tIdx}>
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Action Footer */}
              <div className="blog-card-footer">
                <span className="blog-read-action">
                  <span>Read Full Article</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
                <span className="blog-author-tag">Ankit Kumar</span>
              </div>
            </div>
          ))
        ) : (
          <div className="blog-empty-state">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <h4>No matching articles found</h4>
            <p>Try refining your search terms or clearing the category filter.</p>
            <button
              type="button"
              className="blog-reset-btn"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Reader Modal */}
      {activeArticle && (
        <div className="blog-modal-backdrop" onClick={() => setActiveArticle(null)}>
          <div
            className="blog-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="blog-modal-header">
              <div className="modal-meta-top">
                <span className="blog-category-tag">{activeArticle.category}</span>
                <span className="modal-date-chip">{activeArticle.date} • {activeArticle.readTime}</span>
              </div>

              <button
                type="button"
                className="blog-modal-close"
                onClick={() => setActiveArticle(null)}
                aria-label="Close article"
              >
                ✕
              </button>
            </div>

            <h2 className="modal-article-title">{activeArticle.title}</h2>

            <div className="modal-author-row">
              <div className="modal-avatar">AK</div>
              <div className="modal-author-info">
                <h4>Ankit Kumar</h4>
                <p>Mobile Application Team Lead & Senior React Native Engineer</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="modal-body-content">
              <div className="modal-lead-box">
                <p>{activeArticle.summary}</p>
              </div>

              {activeArticle.content.map((section, sIdx) => (
                <div className="modal-section-block" key={sIdx}>
                  <h3>{section.heading}</h3>
                  <p>{section.text}</p>
                </div>
              ))}

              <div className="modal-tags-footer">
                <span className="tags-label">Topics Covered:</span>
                <div className="tags-list">
                  {activeArticle.tags.map((t, i) => (
                    <span className="blog-tag-pill" key={i}>#{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Close Action */}
            <div className="modal-footer-actions">
              <button
                type="button"
                className="modal-done-btn"
                onClick={() => setActiveArticle(null)}
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
