import { createRequire } from "node:module";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const sharp = createRequire(require.resolve("next/package.json"))("sharp");
const portrait = await readFile(new URL("../public/mandie-morgan-professional.jpg", import.meta.url));
const image = `data:image/jpeg;base64,${portrait.toString("base64")}`;

// Match the website's typography, colors, portrait, and current positioning.
const card = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f8fafb"/>
  <rect x="24" y="24" width="1152" height="582" rx="16" fill="#ffffff" stroke="#d7e1e6"/>
  <rect x="64" y="64" width="50" height="50" rx="9" fill="#e5f1ee"/>
  <g font-family="Arial, Helvetica, sans-serif">
    <text x="89" y="96" text-anchor="middle" font-size="20" font-weight="700" letter-spacing="-1" fill="#17685f">MM</text>
    <text x="134" y="95" font-size="17" font-weight="700" letter-spacing="2" fill="#17685f">TECHNICAL PRODUCT LEADERSHIP</text>
    <text x="64" y="231" font-size="70" font-weight="700" letter-spacing="-3" fill="#1b3042">Mandie Morgan</text>
    <text x="67" y="282" font-size="26" fill="#526473">Lead Technical Product Manager</text>
    <text x="67" y="363" font-size="30" font-weight="600" fill="#1b3042">I set product direction</text>
    <text x="67" y="407" font-size="30" font-weight="600" fill="#17685f">and connect strategy to delivery.</text>
    <text x="67" y="471" font-size="19" fill="#526473">Enterprise platforms · Integrations · AI-assisted delivery</text>
    <path d="M64 514H730" stroke="#d7e1e6"/>
    <text x="67" y="554" font-size="21" font-weight="600" fill="#17685f">mandiemorgan.dev</text>
  </g>
  <path d="M786 80V550" stroke="#d7e1e6"/>
  <defs><clipPath id="portrait"><rect x="826" y="100" width="300" height="375" rx="12"/></clipPath></defs>
  <image href="${image}" x="826" y="100" width="300" height="375" preserveAspectRatio="xMidYMid slice" clip-path="url(#portrait)"/>
  <g font-family="Arial, Helvetica, sans-serif" text-anchor="middle">
    <text x="976" y="516" font-size="17" font-weight="600" fill="#1b3042">Product judgment. Systems thinking.</text>
    <text x="976" y="545" font-size="17" fill="#526473">Team leadership.</text>
  </g>
</svg>`;

const output = fileURLToPath(new URL("../public/mandie-morgan-social-october-2026.png", import.meta.url));
await sharp(Buffer.from(card)).png().toFile(output);
console.log(output);
