import { forwardRef, useId } from "react";

/** Textarea — multiline counterpart to TextField. */
export const Textarea = forwardRef(function Textarea(
  { label, hint, error, rows = 4, fullWidth = false, id, className = "", required, ...rest },
  ref,
) {
  const autoId = useId();
  const inputId = id || autoId;
  const describedBy = error
    ? `${inputId}-err`
    : hint
      ? `${inputId}-hint`
      : undefined;

  const wrapCls = ["aw-field", fullWidth && "aw-field--block", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapCls}>
      {label && (
        <label className="aw-field__label" htmlFor={inputId}>
          {label}
          {required && <span className="aw-field__req" aria-hidden="true"> *</span>}
        </label>
      )}
      <textarea
        ref={ref}
        id={inputId}
        rows={rows}
        className={["aw-textarea", error && "is-error"].filter(Boolean).join(" ")}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        required={required}
        {...rest}
      />
      {error ? (
        <p className="aw-field__msg aw-field__msg--error" id={`${inputId}-err`}>
          {error}
        </p>
      ) : hint ? (
        <p className="aw-field__msg" id={`${inputId}-hint`}>
          {hint}
        </p>
      ) : null}
    </div>
  );
});
