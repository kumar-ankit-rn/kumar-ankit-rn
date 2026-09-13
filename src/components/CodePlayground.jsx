import React, { useState, useEffect, useRef } from "react";
import "./CodePlayground.css";
import {
  SUPPORTED_LANGUAGES,
  LANGUAGE_CATEGORIES,
  executeCode,
} from "./compilerLanguages";

const CodePlayground = ({ isOpen, onClose }) => {
  const [selectedLangId, setSelectedLangId] = useState("javascript");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPresetId, setSelectedPresetId] = useState("");
  const [code, setCode] = useState("");
  const [logs, setLogs] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [executionTime, setExecutionTime] = useState(null);
  const [viewMode, setViewMode] = useState("console"); // "console" | "preview" (for HTML)
  const [mobileTab, setMobileTab] = useState("editor"); // "editor" | "output"
  const [copied, setCopied] = useState(false);

  const editorRef = useRef(null);
  const lineNumbersRef = useRef(null);
  const langChipsScrollRef = useRef(null);

  const currentLang =
    SUPPORTED_LANGUAGES.find((l) => l.id === selectedLangId) ||
    SUPPORTED_LANGUAGES[0];

  // Initialize preset and code when modal opens or language changes
  useEffect(() => {
    if (currentLang && currentLang.presets && currentLang.presets.length > 0) {
      const firstPreset = currentLang.presets[0];
      setSelectedPresetId(firstPreset.id);
      setCode(firstPreset.code);
    } else {
      setCode("// Write your code here\n");
    }
    setLogs([]);
    setExecutionTime(null);
    setViewMode(currentLang?.id === "html" ? "preview" : "console");
  }, [selectedLangId]);

  // Lock background body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Filter languages by category
  const filteredLanguages =
    selectedCategory === "All"
      ? SUPPORTED_LANGUAGES
      : SUPPORTED_LANGUAGES.filter((l) => l.category === selectedCategory);

  // Switch language
  const handleSelectLanguage = (langId) => {
    setSelectedLangId(langId);
    setMobileTab("editor");
    // Also auto-sync category if the selected language belongs to a different category
    const lang = SUPPORTED_LANGUAGES.find((l) => l.id === langId);
    if (lang && selectedCategory !== "All" && lang.category !== selectedCategory) {
      setSelectedCategory("All");
    }
  };

  // Switch preset within active language
  const handleSelectPreset = (presetId) => {
    const preset = currentLang.presets?.find((p) => p.id === presetId);
    if (preset) {
      setSelectedPresetId(presetId);
      setCode(preset.code);
      setLogs([]);
      setExecutionTime(null);
    }
  };

  // Reset code to current preset
  const handleResetCode = () => {
    const preset = currentLang.presets?.find((p) => p.id === selectedPresetId);
    if (preset) {
      setCode(preset.code);
      setLogs([]);
      setExecutionTime(null);
    }
  };

  // Copy code to clipboard
  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code", err);
    }
  };

  // Execute Code
  const runCode = () => {
    setIsRunning(true);

    // If on mobile, auto-switch to output tab so user sees results immediately
    if (window.innerWidth <= 860) {
      setMobileTab("output");
    }

    // If HTML mode, switch to preview
    if (currentLang.id === "html") {
      setViewMode("preview");
      setIsRunning(false);
      return;
    }

    try {
      const result = executeCode(currentLang.id, code);
      setLogs(result.logs || []);
      setExecutionTime(result.executionTime);
    } catch (err) {
      setLogs([
        {
          type: "error",
          message: `${err.name}: ${err.message}`,
          time: new Date().toLocaleTimeString(),
        },
      ]);
    } finally {
      setIsRunning(false);
    }
  };

  // Handle Tab key in code editor (inserts 2 spaces)
  const handleEditorKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const target = e.target;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const updatedCode = code.substring(0, start) + "  " + code.substring(end);
      setCode(updatedCode);
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 2;
      }, 0);
    }
  };

  // Sync scrolling between line numbers and code textarea
  const handleEditorScroll = (e) => {
    if (lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = e.target.scrollTop;
    }
  };

  // Keyboard shortcut: Cmd/Ctrl + Enter to run code, Escape to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        e.preventDefault();
        runCode();
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, code, currentLang]);

  if (!isOpen) return null;

  const lineCount = Math.max(1, code.split("\n").length);

  return (
    <div className="compiler-modal-overlay" onClick={onClose} role="presentation">
      <div
        className="compiler-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="compiler-title"
      >
        {/* ====================================================================
            1. MODAL TOP HEADER
            ==================================================================== */}
        <div className="compiler-modal-header">
          <div className="compiler-header-left">
            <div
              className="compiler-icon-box"
              style={{
                borderColor: `${currentLang.color}66`,
                background: `${currentLang.color}18`,
              }}
            >
              <span
                style={{
                  color: currentLang.color === "#000" ? "#fff" : currentLang.color,
                  fontWeight: 800,
                  fontSize: "13px",
                  letterSpacing: "0.5px",
                }}
              >
                {currentLang.badge}
              </span>
            </div>

            <div className="compiler-title-group">
              <div className="compiler-eyebrow">
                <span className="compiler-pulse-dot" />
                <span>Multi-Language IDE · 13 Environments</span>
              </div>
              <h3 id="compiler-title" className="compiler-title">
                {currentLang.name} Playground
              </h3>
            </div>
          </div>

          <div className="compiler-header-actions">
            {/* Presets selector */}
            {currentLang.presets && currentLang.presets.length > 0 && (
              <div className="compiler-preset-wrapper">
                <span className="preset-label-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </span>
                <label htmlFor="compiler-preset-select" className="sr-only">
                  Select Code Template
                </label>
                <select
                  id="compiler-preset-select"
                  className="compiler-preset-select"
                  value={selectedPresetId}
                  onChange={(e) => handleSelectPreset(e.target.value)}
                  title="Choose from production code templates"
                >
                  {currentLang.presets.map((preset) => (
                    <option key={preset.id} value={preset.id}>
                      {preset.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button
              type="button"
              className="compiler-close-btn"
              onClick={onClose}
              aria-label="Close Code Compiler"
              title="Close (Esc)"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* ====================================================================
            2. MULTI-LANGUAGE NAVIGATION & FILTER BAR (RESPONSIVE 2-ROW ON MOBILE)
            ==================================================================== */}
        <div className="compiler-languages-bar">
          {/* Row 1: Categories + Quick Language Dropdown on Mobile */}
          <div className="compiler-categories-row">
            <div className="compiler-category-pills" role="tablist" aria-label="Filter language categories">
              {LANGUAGE_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  className={`category-pill ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Mobile Native Language Selector (Guaranteed one-tap selection on phones) */}
            <div className="compiler-mobile-lang-picker">
              <label htmlFor="mobile-lang-dropdown" className="sr-only">Select Language</label>
              <select
                id="mobile-lang-dropdown"
                className="mobile-lang-dropdown"
                value={selectedLangId}
                onChange={(e) => handleSelectLanguage(e.target.value)}
                aria-label="Quick Select Language"
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.id} value={lang.id}>
                    {lang.name} ({lang.badge})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 2: Full-Width Horizontally Scrollable Language Chips Strip */}
          <div className="compiler-lang-chips-wrapper">
            <div 
              className="compiler-lang-chips-scroll" 
              ref={langChipsScrollRef}
              role="tablist" 
              aria-label="Select programming language"
            >
              {filteredLanguages.map((lang) => {
                const isActive = selectedLangId === lang.id;
                return (
                  <button
                    key={lang.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`lang-chip ${isActive ? "active" : ""}`}
                    onClick={() => handleSelectLanguage(lang.id)}
                    style={{
                      borderColor: isActive ? (lang.color || "#d5b775") : "transparent",
                    }}
                  >
                    <span
                      className="lang-chip-badge"
                      style={{
                        background: lang.color,
                        color: lang.textColor || "#fff",
                      }}
                    >
                      {lang.badge}
                    </span>
                    <span className="lang-chip-name">{lang.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ====================================================================
            3. MOBILE RESPONSIVE TAB SWITCHER (<= 860px)
            ==================================================================== */}
        <div className="compiler-mobile-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={mobileTab === "editor"}
            className={`mobile-tab-btn ${mobileTab === "editor" ? "active" : ""}`}
            onClick={() => setMobileTab("editor")}
          >
            <span className="tab-icon">💻</span>
            <span>Code Editor</span>
            <span className="mobile-tab-pill">{currentLang.file}</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mobileTab === "output"}
            className={`mobile-tab-btn ${mobileTab === "output" ? "active" : ""}`}
            onClick={() => setMobileTab("output")}
          >
            <span className="tab-icon">⚡</span>
            <span>Console Output</span>
            {logs.length > 0 && <span className="mobile-tab-count">{logs.length}</span>}
          </button>
        </div>

        {/* ====================================================================
            4. DUAL-PANE BODY (EDITOR + TERMINAL)
            ==================================================================== */}
        <div className={`compiler-body show-${mobileTab}`}>
          {/* Left Pane: Code Editor */}
          <div className="compiler-editor-pane">
            <div className="pane-toolbar">
              <div className="pane-title">
                <span className="tab-pill">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  {currentLang.file}
                </span>
                <span className="editor-hint">
                  <kbd>⌘+Enter</kbd> to run
                </span>
              </div>

              <div className="pane-actions">
                <button
                  type="button"
                  className="btn-pane-action"
                  onClick={handleCopyCode}
                  title="Copy code to clipboard"
                >
                  {copied ? (
                    <>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span style={{ color: "#10b981" }}>Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  className="btn-pane-action"
                  onClick={handleResetCode}
                  title="Reset code to original template"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="1 4 1 10 7 10" />
                    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                  </svg>
                  <span>Reset</span>
                </button>

                <button
                  type="button"
                  className="btn-run-code"
                  onClick={runCode}
                  disabled={isRunning}
                  title="Run code in sandbox (⌘+Enter)"
                >
                  {isRunning ? (
                    <>
                      <span className="btn-spinner" />
                      <span>Executing...</span>
                    </>
                  ) : (
                    <>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                      <span>Run Code ⚡</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Code Textarea with Line Numbers Gutter */}
            <div className="editor-workspace">
              <div className="editor-line-numbers" ref={lineNumbersRef} aria-hidden="true">
                {Array.from({ length: lineCount }, (_, i) => (
                  <span key={i + 1} className="line-num">
                    {i + 1}
                  </span>
                ))}
              </div>

              <div className="editor-textarea-wrapper">
                <textarea
                  ref={editorRef}
                  className="compiler-code-textarea"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  onKeyDown={handleEditorKeyDown}
                  onScroll={handleEditorScroll}
                  spellCheck="false"
                  autoCapitalize="off"
                  autoComplete="off"
                  autoCorrect="off"
                  placeholder={`Write ${currentLang.name} code here...`}
                  aria-label="Code Editor"
                />
              </div>
            </div>
          </div>

          {/* Right Pane: Console Terminal or Live HTML Preview */}
          <div className="compiler-terminal-pane">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="terminal-label">
                  {currentLang.id === "html" ? "Output & Live View" : "Terminal Console"}
                </span>
              </div>

              <div className="terminal-meta">
                {currentLang.id === "html" && (
                  <div className="html-view-toggle">
                    <button
                      type="button"
                      className={`view-toggle-btn ${viewMode === "preview" ? "active" : ""}`}
                      onClick={() => setViewMode("preview")}
                    >
                      Live Preview 🌐
                    </button>
                    <button
                      type="button"
                      className={`view-toggle-btn ${viewMode === "console" ? "active" : ""}`}
                      onClick={() => setViewMode("console")}
                    >
                      Raw HTML 📄
                    </button>
                  </div>
                )}

                {executionTime && currentLang.id !== "html" && (
                  <span className="execution-time-tag">⚡ {executionTime} ms</span>
                )}

                {currentLang.id !== "html" && (
                  <button
                    type="button"
                    className="btn-clear-terminal"
                    onClick={() => setLogs([])}
                    title="Clear console output"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Terminal Body or HTML Sandbox */}
            {currentLang.id === "html" && viewMode === "preview" ? (
              <div className="terminal-html-preview-frame">
                <iframe
                  title="Live HTML & CSS Preview"
                  srcDoc={code}
                  sandbox="allow-scripts allow-modals"
                  className="html-preview-iframe"
                />
              </div>
            ) : (
              <div className="terminal-output-body">
                {logs.length === 0 ? (
                  <div className="terminal-empty-state">
                    <div className="empty-state-icon">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <polyline points="4 17 10 11 4 5" />
                        <line x1="12" y1="19" x2="20" y2="19" />
                      </svg>
                    </div>
                    <p>Click "Run Code ⚡" or press ⌘+Enter</p>
                    <span>
                      {currentLang.name} outputs, returns, and diagnostics will stream here.
                    </span>
                  </div>
                ) : (
                  logs.map((log, index) => (
                    <div key={index} className={`terminal-log-line ${log.type}`}>
                      <span className="log-tag">[{log.type.toUpperCase()}]</span>
                      <pre className="log-text">{log.message}</pre>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

        {/* ====================================================================
            5. MODAL FOOTER
            ==================================================================== */}
        <div className="compiler-footer">
          <div className="compiler-footer-tip">
            <span>
              💡 Shortcut: <kbd>⌘ + Enter</kbd> to execute &bull; <kbd>Esc</kbd> to close &bull; <strong>13 languages</strong> supported
            </span>
          </div>
          <div className="compiler-footer-external">
            <a
              href={currentLang.officialCompilerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="external-sandbox-link"
              title={`Open ${currentLang.name} in official compiler`}
            >
              Official {currentLang.badge} Environment ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePlayground;
