export default function Header({
  onClearAll = () => {},
  onLoadExample = () => {},
  onDownloadCV = () => {},
  onToggleMode = () => {},
  isPreviewMode = false,
}) {
  return (
    <header className="app-header">
      <button type="button" className="header-btn header-btn-secondary" onClick={onLoadExample}>
        Load Example
      </button>

      <button type="button" className="header-btn header-btn-secondary" onClick={onClearAll}>
        Clear All
      </button>

      <button type="button" className="header-btn header-btn-secondary" onClick={onToggleMode}>
        {isPreviewMode ? "Edit Mode" : "Preview Mode"}
      </button>

      <button type="button" className="header-btn header-btn-primary" onClick={onDownloadCV}>
        Download CV
      </button>
    </header>
  );
}
