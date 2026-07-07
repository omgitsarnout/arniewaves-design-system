import { createContext, useContext, useId, useRef, useState } from "react";

const TabsCtx = createContext(null);

/**
 * Tabs — accessible tablist with roving keyboard nav (←/→/Home/End).
 *
 * <Tabs defaultValue="a">
 *   <Tabs.List>
 *     <Tabs.Tab value="a">Specs</Tabs.Tab>
 *     <Tabs.Tab value="b">Pricing</Tabs.Tab>
 *   </Tabs.List>
 *   <Tabs.Panel value="a">…</Tabs.Panel>
 *   <Tabs.Panel value="b">…</Tabs.Panel>
 * </Tabs>
 *
 * Controlled via `value` + `onChange`, or uncontrolled via `defaultValue`.
 * @category Navigation
 */
export function Tabs({ value, defaultValue, onChange, children, className = "" }) {
  const [internal, setInternal] = useState(defaultValue);
  const active = value !== undefined ? value : internal;
  const baseId = useId();

  const select = (v) => {
    if (value === undefined) setInternal(v);
    onChange?.(v);
  };

  return (
    <TabsCtx.Provider value={{ active, select, baseId }}>
      <div className={["aw-tabs", className].filter(Boolean).join(" ")}>{children}</div>
    </TabsCtx.Provider>
  );
}

function List({ children, className = "" }) {
  const listRef = useRef(null);

  const onKeyDown = (e) => {
    const tabs = [...listRef.current.querySelectorAll('[role="tab"]:not([disabled])')];
    const i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    let next = null;
    if (e.key === "ArrowRight") next = tabs[(i + 1) % tabs.length];
    else if (e.key === "ArrowLeft") next = tabs[(i - 1 + tabs.length) % tabs.length];
    else if (e.key === "Home") next = tabs[0];
    else if (e.key === "End") next = tabs[tabs.length - 1];
    if (next) {
      e.preventDefault();
      next.focus();
      next.click();
    }
  };

  return (
    <div
      ref={listRef}
      role="tablist"
      className={["aw-tabs__list", className].filter(Boolean).join(" ")}
      onKeyDown={onKeyDown}
    >
      {children}
    </div>
  );
}

function Tab({ value, children, disabled, className = "" }) {
  const { active, select, baseId } = useContext(TabsCtx);
  const selected = active === value;
  return (
    <button
      type="button"
      role="tab"
      id={`${baseId}-tab-${value}`}
      aria-selected={selected}
      aria-controls={`${baseId}-panel-${value}`}
      tabIndex={selected ? 0 : -1}
      disabled={disabled}
      className={["aw-tabs__tab", selected && "is-active", className]
        .filter(Boolean)
        .join(" ")}
      onClick={() => select(value)}
    >
      {children}
    </button>
  );
}

function Panel({ value, children, className = "" }) {
  const { active, baseId } = useContext(TabsCtx);
  if (active !== value) return null;
  return (
    <div
      role="tabpanel"
      id={`${baseId}-panel-${value}`}
      aria-labelledby={`${baseId}-tab-${value}`}
      tabIndex={0}
      className={["aw-tabs__panel", className].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
}

Tabs.List = List;
Tabs.Tab = Tab;
Tabs.Panel = Panel;
