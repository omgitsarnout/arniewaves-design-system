import { createContext, useContext, useId, useState } from "react";
import { Icon } from "./Icon.jsx";

const AccordionCtx = createContext(null);

/**
 * Accordion — disclosure list (FAQ). Single-open by default; `allowMultiple`
 * lets several panels stay open. Smoothly animates via a grid-rows trick.
 *
 * <Accordion defaultValue="a">
 *   <Accordion.Item value="a" title="…">…</Accordion.Item>
 * </Accordion>
 */
export function Accordion({
  children,
  allowMultiple = false,
  defaultValue = [],
  className = "",
}) {
  const [open, setOpen] = useState(
    Array.isArray(defaultValue) ? defaultValue : [defaultValue],
  );
  const toggle = (v) =>
    setOpen((prev) =>
      prev.includes(v)
        ? prev.filter((x) => x !== v)
        : allowMultiple
          ? [...prev, v]
          : [v],
    );

  return (
    <div className={["aw-accordion", className].filter(Boolean).join(" ")}>
      <AccordionCtx.Provider value={{ open, toggle }}>{children}</AccordionCtx.Provider>
    </div>
  );
}

function Item({ value, title, children, className = "" }) {
  const { open, toggle } = useContext(AccordionCtx);
  const isOpen = open.includes(value);
  const id = useId();

  return (
    <div
      className={["aw-accordion__item", isOpen && "is-open", className]
        .filter(Boolean)
        .join(" ")}
    >
      <h3 className="aw-accordion__heading">
        <button
          type="button"
          className="aw-accordion__trigger"
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          id={`${id}-btn`}
          onClick={() => toggle(value)}
        >
          <span>{title}</span>
          <Icon name="chevron-down" size={18} className="aw-accordion__chev" />
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        className="aw-accordion__panel"
      >
        <div className="aw-accordion__body">{children}</div>
      </div>
    </div>
  );
}

Accordion.Item = Item;
