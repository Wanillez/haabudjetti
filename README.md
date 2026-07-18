# Tahdon – Wedding Planner

This is the modular Visual Studio Code edition of the wedding planner. The interface is in English.

## Getting started

1. Open `wedding-planner.code-workspace` in Visual Studio Code.
2. Install or enable the **Live Server** extension.
3. Right-click `index.html` and choose **Open with Live Server**.

Live Server is recommended because the editable JSON files are loaded through the browser. If you
double-click `index.html`, the planner still opens with its built-in starter data.

Every confirmed change is saved automatically in browser storage, and the app keeps up to eight
rotating recovery snapshots. The storage key is unchanged, so existing plans from the one-file
edition remain compatible when opened from the same browser origin. Use **Recovery history** to
restore a recent snapshot, and download a JSON backup before changing browsers or devices.

## Project structure

- `index.html` – lightweight page structure and links to the assets.
- `assets/base.css` – shared interface foundations.
- `assets/app.css` – wedding theme, layout, responsive design and component styling.
- `assets/app.js` – planner behaviour, automatic saving and all interactive features.
- `assets/config-loader.js` – loads the editable JSON configuration.
- `assets/tooltips.js` – tooltip interactions.
- `assets/icons.js` – icon initialization.
- `data/default-plan.json` – editable starter categories, checklist and first table.
- `data/achievements.json` – editable reward names, descriptions, icons and targets.
- `source/wedding-planner-fragment.html` – original one-file source kept as a build reference.

The portable single-file edition is still available one folder above as `../wedding-planner.html`.
