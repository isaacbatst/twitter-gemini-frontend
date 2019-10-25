import React from "react";
import Shortcut from "./components/Shortcut/index";
import "./style.css";

import logoHome from "../../../../static/twitter_logo.png";
import logoExplore from "../../../../static/twitter_logo.png";
import logoNotifications from "../../../../static/twitter_logo.png";
import logoMessages from "../../../../static/twitter_logo.png";

function ShortcutsList() {
  const shortcuts = [
    {
      id: 1,
      logo: logoHome,
      label: "Página inicial",
      href: ""
    },
    {
      id: 2,
      logo: logoExplore,
      label: "Explorar",
      href: ""
    },
    {
      id: 3,
      logo: logoNotifications,
      label: "Notificações",
      href: ""
    },
    {
      id: 4,
      logo: logoMessages,
      label: "Mensagens",
      href: ""
    }
  ];

  return (
    <ul className="pl-0">
      {shortcuts.map(shortcut => (
        <Shortcut key={shortcut.id} shortcut={shortcut} />
      ))}
    </ul>
  );
}

export default ShortcutsList;
