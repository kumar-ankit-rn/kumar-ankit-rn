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
  const [selectedPresetId, setSelectedPresetId] = useState("js-crypto-ticker");
  const [code, setCode] = useState(
    SUPPORTED_LANGUAGES[0].presets[0].code
  );
  const [logs, setLogs] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [executionTime, setExecutionTime] = useState(null);
  const [viewMode, setViewMode] = useState("console"); // "console" | "preview" (for HTML)
  const editorRef = useRef(null);

  const currentLang =
    SUPPORTED_LANGUAGES.find((l) => l.id === selectedLangId) ||
    SUPPORTED_LANGUAGES[0];

  // Filter languages by category
  const filteredLanguages =
    selectedCategory === "All"
      ? SUPPORTED_LANGUAGES
      : SUPPORTED_LANGUAGES.filter((l) => l.category === selectedCategory);

  // Switch language
  const handleSelectLanguage = (langId) => {
    const lang = SUPPORTED_LANGUAGES.find((l) => l.id === langId);
    if (lang) {
      setSelectedLangId(langId);
      const firstPreset = lang.presets[0];
      setSelectedPresetId(firstPreset ? firstPreset.id : "");
      setCode(firstPreset ? firstPreset.code : "// Write your code here\n");
      setLogs([]);
      setExecutionTime(null);
      setViewMode(langId === "html" ? "preview" : "console");
    }
  };

  // Switch preset within active language
  const handleSelectPreset = (presetId) => {
    const preset = currentLang.presets.find((p) => p.id === presetId);
    if (preset) {
      setSelectedPresetId(presetId);
      setCode(preset.code);
      setLogs([]);
      setExecutionTime(null);
    }
  };

  // Reset code to current preset
  const handleResetCode = () => {
    const preset = currentLang.presets.find((p) => p.id === selectedPresetId);
    if (preset) {
      setCode(preset.code);
      setLogs([]);
      setExecutionTime(null);
    }
  };

  // Execute Code
  const runCode = () => {
    setIsRunning(true);
    // If HTML mode, switch to preview
    if (currentLang.id === "html") {
      setViewMode("preview");
      setIsRunning(false);
      return;
    }

    try {
      const result = executeCode(currentLang.id, code);
      setLogs(result.logs);
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

  return (
    <div className="compiler-modal-overlay" onClick={onClose}>
      <div
        className="compiler-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="compiler-title"
      >
        {/* Modal Header */}
        <div className="compiler-modal-header">
          <div className="compiler-header-left">
            <div
              className="compiler-icon-box"
              style={{
                borderColor: `${currentLang.color}55`,
                background: `${currentLang.color}15`,
              }}
            >
              <span
                style={{
                  color: currentLang.color === "#000" ? "#fff" : currentLang.color,
                  fontWeight: 800,
                  fontSize: "13px",
                }}
              >
                {currentLang.badge}
              </span>
            </div>
            <div>
              <div className="compiler-eyebrow">
                <span className="compiler-pulse-dot" />
                <span>Multi-Language Online IDE · 13 Languages</span>
              </div>
              <h3 id="compiler-title" className="compiler-title">
                {currentLang.name} Compiler & Playground
              </h3>
            </div>
          </div>

          <div className="compiler-header-actions">
            {/* Presets selector */}
            {currentLang.presets && currentLang.presets.length > 0 && (
              <div className="compiler-preset-wrapper">
                <label htmlFor="compiler-preset-select" className="sr-only">
                  Select Code Preset
                </label>
                <select
                  id="compiler-preset-select"
                  className="compiler-preset-select"
                  value={selectedPresetId}
                  onChange={(e) => handleSelectPreset(e.target.value)}
                  title="Choose from production code presets"
                >
                  {currentLang.presets.map((preset) => (
                    <option key={preset.id} value={preset.id}>
                      Preset: {preset.name}
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
            >
              ✕
            </button>
          </div>
        </div>

        {/* Multi-Language Selector Strip */}
        <div className="compiler-languages-bar">
          <div className="compiler-category-pills">
            {LANGUAGE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`category-pill ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="compiler-lang-chips-scroll">
            {filteredLanguages.map((lang) => {
              const isActive = selectedLangId === lang.id;
              return (
                <button
                  key={lang.id}
                  type="button"
                  className={`lang-chip ${isActive ? "active" : ""}`}
                  onClick={() => handleSelectLanguage(lang.id)}
                  style={{
                    borderColor: isActive ? lang.color : "transparent",
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

        {/* Two-Pane Body */}
        <div className="compiler-body">
          {/* Left Pane: Code Editor */}
          <div className="compiler-editor-pane">
            <div className="pane-toolbar">
              <div className="pane-title">
                <span className="tab-pill">
                  {currentLang.file}
                </span>
                <span className="editor-hint">
                  Press ⌘+Enter to execute
                </span>
              </div>
              <div className="pane-actions">
                <button
                  type="button"
                  className="btn-reset-code"
                  onClick={handleResetCode}
                  title="Reset code to original preset"
                >
                  Reset
                </button>
                <button
                  type="button"
                  className="btn-run-code"
                  onClick={runCode}
                  disabled={isRunning}
                  title="Run code in sandbox (⌘+Enter)"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <span>{isRunning ? "Running..." : "Run Code ⚡"}</span>
                </button>
              </div>
            </div>

            <div className="editor-textarea-wrapper">
              <textarea
                ref={editorRef}
                className="compiler-code-textarea"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck="false"
                autoCapitalize="off"
                autoComplete="off"
                autoCorrect="off"
                placeholder={`Write ${currentLang.name} code here...`}
              />
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
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    <p>Click "Run Code ⚡" or press ⌘+Enter to execute.</p>
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

        {/* Modal Footer */}
        <div className="compiler-footer">
          <div className="compiler-footer-tip">
            <span>
              💡 Pro-tip: Press <strong>⌘ + Enter</strong> to execute. Switch between <strong>13 languages</strong> anytime.
            </span>
          </div>
          <div className="compiler-footer-external">
            <a
              href={currentLang.officialCompilerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="external-sandbox-link"
              title={`Open ${currentLang.name} online environment`}
            >
              Open in Official {currentLang.badge} Playground ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePlayground;
