import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const PORTAL_ID = "app-modal-root";

function ensurePortalRoot() {
  let root = document.getElementById(PORTAL_ID);
  if (!root) {
    root = document.createElement("div");
    root.id = PORTAL_ID;
    // optional: keep it visually last in the body
    document.body.appendChild(root);
  }
  return root;
}

const ModalPortal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const host = React.useMemo(() => document.createElement("div"), []);
  useEffect(() => {
    const root = ensurePortalRoot();
    root.appendChild(host);
    return () => {
      if (root.contains(host)) root.removeChild(host);
      // don't remove root itself here
    };
  }, [host]);

  return createPortal(children, host);
};

export default ModalPortal;
