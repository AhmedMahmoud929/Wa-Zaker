import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SurahState } from "./contexts/surahContext";
import { AzanState } from "./contexts/azanContext";
import { AzkarState } from "./contexts/azkarContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SurahState>
        <AzanState>
          <AzkarState>
            <App />
          </AzkarState>
        </AzanState>
      </SurahState>
    </BrowserRouter>
  </React.StrictMode>
);
