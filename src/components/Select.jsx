import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";

/**
 * Select — searchable dropdown with keyboard navigation.
 *
 * Props:
 *   options: Array<{ value, label, description?, disabled? }>
 *   value:   selected value (string) — or array of values when `multiple`
 *   onChange(value): fires with the new value / value[]
 *   multiple: enable multi-select with checkable items + pills
 *   searchable: show the search box (default true)
 *   placeholder, label, hint, error, disabled, clearable
 * @category Forms
 */
export const Select = forwardRef(function Select(
  {
    options = [],
    value,
    onChange,
    multiple = false,
    searchable = true,
    placeholder = "Select…",
    searchPlaceholder = "Search…",
    label,
    hint,
    error,
    disabled = false,
    clearable = false,
    fullWidth = false,
    emptyText = "No matches",
    className = "",
  },
  ref,
) {
  const baseId = useId();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0); // highlighted index in filtered list

  const rootRef = useRef(null);
  const searchRef = useRef(null);
  const listRef = useRef(null);

  const selected = multiple ? (Array.isArray(value) ? value : []) : value;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter((o) =>
      `${o.label} ${o.description ?? ""}`.toLowerCase().includes(q),
    );
  }, [options, query]);

  const byValue = useMemo(() => {
    const m = new Map();
    for (const o of options) m.set(o.value, o);
    return m;
  }, [options]);

  const isSelected = useCallback(
    (val) => (multiple ? selected.includes(val) : selected === val),
    [multiple, selected],
  );

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  const commit = useCallback(
    (opt) => {
      if (!opt || opt.disabled) return;
      if (multiple) {
        const next = selected.includes(opt.value)
          ? selected.filter((v) => v !== opt.value)
          : [...selected, opt.value];
        onChange?.(next);
        // keep open for multi-select; clear search to surface remaining
        setQuery("");
        searchRef.current?.focus();
      } else {
        onChange?.(opt.value);
        close();
      }
    },
    [multiple, selected, onChange, close],
  );

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) close();
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open, close]);

  // Focus search when opening
  useEffect(() => {
    if (open && searchable) {
      const t = setTimeout(() => searchRef.current?.focus(), 0);
      return () => clearTimeout(t);
    }
  }, [open, searchable]);

  // Keep highlighted option scrolled into view
  useEffect(() => {
    if (!open) return;
    const el = listRef.current?.querySelector('[data-active="true"]');
    el?.scrollIntoView({ block: "nearest" });
  }, [active, open]);

  const moveActive = useCallback(
    (dir) => {
      if (!filtered.length) return;
      let i = active;
      for (let step = 0; step < filtered.length; step++) {
        i = (i + dir + filtered.length) % filtered.length;
        if (!filtered[i].disabled) break;
      }
      setActive(i);
    },
    [active, filtered],
  );

  const onKeyDown = (e) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (!open) setOpen(true);
        else moveActive(1);
        break;
      case "ArrowUp":
        e.preventDefault();
        if (open) moveActive(-1);
        break;
      case "Enter":
        e.preventDefault();
        if (open) commit(filtered[active]);
        else setOpen(true);
        break;
      case "Escape":
        if (open) {
          e.preventDefault();
          close();
        }
        break;
      case "Tab":
        if (open) close();
        break;
      default:
        break;
    }
  };

  const clear = (e) => {
    e.stopPropagation();
    onChange?.(multiple ? [] : "");
  };

  const hasValue = multiple ? selected.length > 0 : selected != null && selected !== "";

  const wrapCls = ["aw-field", fullWidth && "aw-field--block", className]
    .filter(Boolean)
    .join(" ");

  const controlCls = [
    "aw-select__control",
    open && "is-open",
    error && "is-error",
    disabled && "is-disabled",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapCls} ref={ref}>
      {label && (
        <label className="aw-field__label" htmlFor={`${baseId}-btn`}>
          {label}
        </label>
      )}
      <div className="aw-select" ref={rootRef} onKeyDown={onKeyDown}>
        {/* role=combobox on a div (not <button>) so the removable multi-select
            pills — which are real <button>s — aren't nested inside a button. */}
        <div
          role="combobox"
          id={`${baseId}-btn`}
          tabIndex={disabled ? -1 : 0}
          className={controlCls}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-disabled={disabled || undefined}
          aria-invalid={error ? true : undefined}
          onClick={() => !disabled && setOpen((o) => !o)}
        >
          <span className="aw-select__value">
            {!hasValue && <span className="aw-select__placeholder">{placeholder}</span>}
            {hasValue && multiple && (
              <span className="aw-select__pills">
                {selected.map((v) => {
                  const o = byValue.get(v);
                  if (!o) return null;
                  return (
                    <span key={v} className="aw-badge aw-badge--sand aw-select__pill">
                      {o.label}
                      <button
                        type="button"
                        className="aw-badge__remove"
                        aria-label={`Remove ${o.label}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          onChange?.(selected.filter((x) => x !== v));
                        }}
                      >
                        ×
                      </button>
                    </span>
                  );
                })}
              </span>
            )}
            {hasValue && !multiple && (
              <span className="aw-select__single">{byValue.get(selected)?.label ?? selected}</span>
            )}
          </span>

          {clearable && hasValue && !disabled && (
            <span
              role="button"
              tabIndex={-1}
              className="aw-select__clear"
              aria-label="Clear selection"
              onClick={clear}
            >
              ×
            </span>
          )}
          <span className="aw-select__chevron" aria-hidden="true">▾</span>
        </div>

        {open && (
          <div className="aw-select__panel" role="dialog">
            {searchable && (
              <div className="aw-select__search">
                <span className="aw-select__search-icon" aria-hidden="true">⌕</span>
                <input
                  ref={searchRef}
                  className="aw-select__search-input"
                  placeholder={searchPlaceholder}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setActive(0);
                  }}
                />
              </div>
            )}
            <ul className="aw-select__list" role="listbox" ref={listRef} aria-multiselectable={multiple}>
              {filtered.length === 0 && (
                <li className="aw-select__empty">{emptyText}</li>
              )}
              {filtered.map((o, i) => {
                const sel = isSelected(o.value);
                return (
                  <li
                    key={o.value}
                    role="option"
                    aria-selected={sel}
                    data-active={i === active || undefined}
                    className={[
                      "aw-select__option",
                      sel && "is-selected",
                      o.disabled && "is-disabled",
                      i === active && "is-active",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onMouseEnter={() => setActive(i)}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => commit(o)}
                  >
                    {multiple && (
                      <span className={["aw-select__check", sel && "is-on"].filter(Boolean).join(" ")} aria-hidden="true">
                        {sel ? "✓" : ""}
                      </span>
                    )}
                    <span className="aw-select__opt-body">
                      <span className="aw-select__opt-label">{o.label}</span>
                      {o.description && (
                        <span className="aw-select__opt-desc">{o.description}</span>
                      )}
                    </span>
                    {!multiple && sel && (
                      <span className="aw-select__opt-tick" aria-hidden="true">✓</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      {error ? (
        <p className="aw-field__msg aw-field__msg--error">{error}</p>
      ) : hint ? (
        <p className="aw-field__msg">{hint}</p>
      ) : null}
    </div>
  );
});
