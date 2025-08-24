const extnsLocalStorageKey = "extension-list";
const moonIcon = `<svg class="icon--toggle" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22">
            <g clip-path="url(#a)">
              <path
                fill="#091540"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.98"
                d="M20.125 11.877A7.333 7.333 0 1 1 10.124 1.875a9.168 9.168 0 1 0 10.001 10.002Z"
              />
            </g>
            <defs>
              <clipPath id="a"><path fill="#fff" d="M0 0h22v22H0z" /></clipPath>
            </defs>
          </svg>`;

const sunIcon = `<svg class="icon--toggle" viewBox="0 0 512 512">
            <g>
              <g>
                <path
                  d="M256,144c-61.75,0-112,50.25-112,112s50.25,112,112,112s112-50.25,112-112S317.75,144,256,144z M256,336    c-44.188,0-80-35.812-80-80c0-44.188,35.812-80,80-80c44.188,0,80,35.812,80,80C336,300.188,300.188,336,256,336z M256,112    c8.833,0,16-7.167,16-16V64c0-8.833-7.167-16-16-16s-16,7.167-16,16v32C240,104.833,247.167,112,256,112z M256,400    c-8.833,0-16,7.167-16,16v32c0,8.833,7.167,16,16,16s16-7.167,16-16v-32C272,407.167,264.833,400,256,400z M380.438,154.167    l22.625-22.625c6.25-6.25,6.25-16.375,0-22.625s-16.375-6.25-22.625,0l-22.625,22.625c-6.25,6.25-6.25,16.375,0,22.625    S374.188,160.417,380.438,154.167z M131.562,357.834l-22.625,22.625c-6.25,6.249-6.25,16.374,0,22.624s16.375,6.25,22.625,0    l22.625-22.624c6.25-6.271,6.25-16.376,0-22.625C147.938,351.583,137.812,351.562,131.562,357.834z M112,256    c0-8.833-7.167-16-16-16H64c-8.833,0-16,7.167-16,16s7.167,16,16,16h32C104.833,272,112,264.833,112,256z M448,240h-32    c-8.833,0-16,7.167-16,16s7.167,16,16,16h32c8.833,0,16-7.167,16-16S456.833,240,448,240z M131.541,154.167    c6.251,6.25,16.376,6.25,22.625,0c6.251-6.25,6.251-16.375,0-22.625l-22.625-22.625c-6.25-6.25-16.374-6.25-22.625,0    c-6.25,6.25-6.25,16.375,0,22.625L131.541,154.167z M380.459,357.812c-6.271-6.25-16.376-6.25-22.625,0    c-6.251,6.25-6.271,16.375,0,22.625l22.625,22.625c6.249,6.25,16.374,6.25,22.624,0s6.25-16.375,0-22.625L380.459,357.812z"
                  fill="#fff"
                />
              </g>
            </g>
          </svg>`;

let extensionsList = [
  {
    logo: "./assets/images/logo-devlens.svg",
    name: "DevLens",
    description: "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-style-spy.svg",
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-speed-boost.svg",
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-json-wizard.svg",
    name: "JSONWizard",
    description: "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-tab-master-pro.svg",
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-viewport-buddy.svg",
    name: "ViewportBuddy",
    description: "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-markup-notes.svg",
    name: "Markup Notes",
    description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-grid-guides.svg",
    name: "GridGuides",
    description: "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-palette-picker.svg",
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-link-checker.svg",
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-dom-snapshot.svg",
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-console-plus.svg",
    name: "ConsolePlus",
    description: "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];

const extensionsMainEl = document.querySelector(".extensions-list--main");
const extensionsListFilterBtns = document.querySelector(".extension-list--filter-buttons");
const allFilterBtn = extensionsListFilterBtns.querySelector(".btn--all");
const activeFilterBtn = extensionsListFilterBtns.querySelector(".btn--filtered-active");
const inActiveFilterBtn = extensionsListFilterBtns.querySelector(".btn--filtered-inactive");
const themeToggleBtn = document.getElementById("theme-toggle");

if (localStorage.getItem(extnsLocalStorageKey)) {
  const storedList = JSON.parse(localStorage.getItem(extnsLocalStorageKey));
  extensionsList = storedList;
} else {
  localStorage.setItem(extnsLocalStorageKey, JSON.stringify(extensionsList));
}

const convertExtensionToHtml = (extn) => {
  return `<div id="${extn.name}" class="extension">
            <header class="extension--header">
              <img src="${extn.logo}" alt="${extn.name}" class="extension-logo" />
              <main class="extension--content">
                <p class="extension--title">${extn.name}</p>
                <p class="extension--description">${extn.description}</p>
              </main>
            </header>
            <footer class="extension--footer">
              <button class="btn btn--remove">Remove</button>
              <label class="switch extension--switch">
                <input type="checkbox" ${extn.isActive && "checked"} />
                <span class="slider"></span>
              </label>
            </footer>
          </div>`;
};

const renderExtensions = (extensionsList) => {
  if (extensionsList.length === 0) {
    extensionsMainEl.innerHTML = `
          <div class="extension extension--not-found">
            <p>No extension found. Start add one !</p>
          </div>`;
    extensionsListFilterBtns.innerHTML = "";
  } else {
    extensionsListFilterBtns.querySelector(".btn--all").classList.add("btn--active");
    extensionsMainEl.innerHTML = extensionsList.map(convertExtensionToHtml).join(" ");
  }
};

renderExtensions(extensionsList);

extensionsListFilterBtns.addEventListener("click", (e) => {
  const classes = e.target.classList;
  if (!e.target.classList.contains("btn")) return;
  let filteredExtensionsList = extensionsList;

  if (classes.contains("btn--all")) {
    if (!classes.contains("btn-active")) allFilterBtn.classList.add("btn--active");
    activeFilterBtn.classList.remove("btn--active");
    inActiveFilterBtn.classList.remove("btn--active");
  } else if (classes.contains("btn--filtered-active")) {
    filteredExtensionsList = extensionsList.filter((extn) => extn.isActive);
    if (!classes.contains("btn-active")) activeFilterBtn.classList.add("btn--active");
    allFilterBtn.classList.remove("btn--active");
    inActiveFilterBtn.classList.remove("btn--active");
  } else {
    filteredExtensionsList = extensionsList.filter((extn) => !extn.isActive);
    if (!classes.contains("btn-active")) inActiveFilterBtn.classList.add("btn--active");
    allFilterBtn.classList.remove("btn--active");
    activeFilterBtn.classList.remove("btn--active");
  }

  renderExtensions(filteredExtensionsList);
});

themeToggleBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");

  const toggleIcon = currentTheme === "dark" ? moonIcon : sunIcon;
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  themeToggleBtn.innerHTML = toggleIcon;
  localStorage.setItem("theme", newTheme);
});

const loadedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", loadedTheme);

const extnSwitchBtns = document.querySelectorAll(".extension--switch");
extnSwitchBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const extnHtml = e.target.closest(".extension");
    const editedExtensionsList = extensionsList.map((ex) => {
      if (ex.name.trim().toLowerCase() === extnHtml.id.trim().toLowerCase()) {
        return { ...ex, isActive: !ex.isActive };
      }
      return ex;
    });

    localStorage.setItem(extnsLocalStorageKey, JSON.stringify(editedExtensionsList));
  });
});

let removeBtns = document.querySelectorAll(".btn--remove");

removeBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log("HELLO");
    const extnHtml = e.target.closest(".extension");
    const filteredExtensionsList = extensionsList.filter((ex) => ex.name.trim().toLowerCase() !== extnHtml.id.trim().toLowerCase());

    localStorage.setItem(extnsLocalStorageKey, JSON.stringify(filteredExtensionsList));
  });
});
