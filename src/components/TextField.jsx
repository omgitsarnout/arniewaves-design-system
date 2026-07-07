import { forwardRef, useId } from "react";

/**
 * TextField — labelled text input with hint / error states and optional
 * leading/trailing adornments. Space Mono body.
 * @category Forms
 */
export const TextField = forwardRef(function TextField(
  {
    label,
    hint,
    error,
    size = "md",
    leading,
    trailing,
    fullWidth = false,
    id,
    className = "",
    required,
    ...rest
  },
  ref,
) {
  const autoId = useId();
  const inputId = id || autoId;
  const describedBy = error
    ? `${inputId}-err`
    : hint
      ? `${inputId}-hint`
      : undefined;

  const wrapCls = [
    "aw-field",
    fullWidth && "aw-field--block",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const controlCls = [
    "aw-input",
    `aw-input--${size}`,
    error && "is-error",
    leading && "has-leading",
    trailing && "has-trailing",
  ]
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
      <div className={controlCls}>
        {leading && <span className="aw-input__adorn">{leading}</span>}
        <input
          ref={ref}
          id={inputId}
          className="aw-input__el"
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          required={required}
          {...rest}
        />
        {trailing && (
          <span className="aw-input__adorn aw-input__adorn--end">{trailing}</span>
        )}
      </div>
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
