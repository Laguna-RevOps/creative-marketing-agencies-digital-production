import { createRoot } from "react-dom/client";
import "@fontsource/suse/400.css";
import "@fontsource/suse/700.css";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
