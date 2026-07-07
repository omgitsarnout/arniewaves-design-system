import { forwardRef, useId } from "react";

/** Checkbox — boxy, marker-tick. * @category Forms
*/
export const Checkbox = forwardRef(function Checkbox(
  { label, description, id, className = "", ...rest },
  ref,
) {
  const autoId = useId();
  const inputId = id || autoId;
  return (
    <label className={["aw-choice", className].filter(Boolean).join(" ")} htmlFor={inputId}>
      <input ref={ref} id={inputId} type="checkbox" className="aw-choice__input aw-choice__input--check" {...rest} />
      <span className="aw-choice__box" aria-hidden="true" />
      {(label || description) && (
        <span className="aw-choice__text">
          {label && <span className="aw-choice__label">{label}</span>}
          {description && <span className="aw-choice__desc">{description}</span>}
        </span>
      )}
    </label>
  );
});

/** Radio — round counterpart. Group via shared `name`. * @category Forms
*/
export const Radio = forwardRef(function Radio(
  { label, description, id, className = "", ...rest },
  ref,
) {
  const autoId = useId();
  const inputId = id || autoId;
  return (
    <label className={["aw-choice", className].filter(Boolean).join(" ")} htmlFor={inputId}>
      <input ref={ref} id={inputId} type="radio" className="aw-choice__input aw-choice__input--radio" {...rest} />
      <span className="aw-choice__dot" aria-hidden="true" />
      {(label || description) && (
        <span className="aw-choice__text">
          {label && <span className="aw-choice__label">{label}</span>}
          {description && <span className="aw-choice__desc">{description}</span>}
        </span>
      )}
    </label>
  );
});

/** Toggle / Switch. * @category Forms
*/
export const Toggle = forwardRef(function Toggle(
  { label, description, id, className = "", ...rest },
  ref,
) {
  const autoId = useId();
  const inputId = id || autoId;
  return (
    <label className={["aw-choice aw-choice--toggle", className].filter(Boolean).join(" ")} htmlFor={inputId}>
      <input ref={ref} id={inputId} type="checkbox" role="switch" className="aw-choice__input aw-choice__input--switch" {...rest} />
      <span className="aw-switch" aria-hidden="true"><span className="aw-switch__knob" /></span>
      {(label || description) && (
        <span className="aw-choice__text">
          {label && <span className="aw-choice__label">{label}</span>}
          {description && <span className="aw-choice__desc">{description}</span>}
        </span>
      )}
    </label>
  );
});
