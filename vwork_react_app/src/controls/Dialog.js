import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import usePortal from "react-useportal";

export default function Dialog({ open, onClose, children, title }) {
  const { Portal } = usePortal();
  return (
    <Portal>
      <div
        className={classnames("modal", "fade", "hide", { in: open })}
        style={{
          display: "block",
          pointerEvents: !open && "none",
        }}
      >
        <div className="modal-header">
          <button type="button" className="close" onClick={onClose}>
            &times;
          </button>
          <h4>{title}</h4>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button className="btn" type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
      <div
        onClick={onClose}
        className={classnames("modal-backdrop", "fade", "hide", {
          in: open,
        })}
        style={{
          display: "block",
          pointerEvents: !open && "none",
        }}
      />
    </Portal>
  );
}

Dialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};
