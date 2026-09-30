/**
 * EL GRAN POETA — INVENTARIO Y BODEGAS
 * High Fidelity Interactive Mockup Logic
 */

// ==========================================================================
// 1. DATA STORE
// ==========================================================================
const DATA = {
  products: [
    {
      id: 1,
      title: "La vegetariana",
      isbn: "978-84-339-8064-8",
      author: "Han Kang",
      editorial: "Random House",
      type: "Novela",
      stock: 2,
      bodega: "Centro",
      status: "critical" // Stock crítico
    },
    {
      id: 2,
      title: "Cien años de soledad",
      isbn: "978-84-376-0494-7",
      author: "Gabriel García Márquez",
      editorial: "Cátedra",
      type: "Novela",
      stock: 38,
      bodega: "3 bodegas",
      status: "available" // Disponible
    },
    {
      id: 3,
      title: "El infinito en un junco",
      isbn: "978-84-339-9885-8",
      author: "Irene Vallejo",
      editorial: "Siruela",
      type: "Ensayo",
      stock: 5,
      bodega: "Norte",
      status: "low" // Stock bajo
    },
    {
      id: 4,
      title: "Los detectives salvajes",
      isbn: "978-84-264-0877-7",
      author: "Roberto Bolaño",
      editorial: "Alfaguara",
      type: "Novela",
      stock: 64,
      bodega: "4 bodegas",
      status: "available"
    },
    {
      id: 5,
      title: "El acontecimiento",
      isbn: "978-84-339-9833-9",
      author: "Annie Ernaux",
      editorial: "Tusquets",
      type: "Memoria",
      stock: 21,
      bodega: "2 bodegas",
      status: "available"
    },
    {
      id: 6,
      title: "Poeta chileno",
      isbn: "978-84-663-5468-3",
      author: "Alejandro Zambra",
      editorial: "Anagrama",
      type: "Novela",
      stock: 0,
      bodega: "-",
      status: "empty" // Agotado
    },
    {
      id: 7,
      title: "Ficciones",
      isbn: "978-84-9759-242-0",
      author: "Jorge Luis Borges",
      editorial: "Debolsillo",
      type: "Novela",
      stock: 45,
      bodega: "Centro",
      status: "available"
    },
    {
      id: 8,
      title: "Desolación",
      isbn: "978-956-11-2350-0",
      author: "Gabriela Mistral",
      editorial: "Pehuén",
      type: "Poesía",
      stock: 18,
      bodega: "Providencia",
      status: "available"
    },
    {
      id: 9,
      title: "Papelucho",
      isbn: "978-956-12-2580-8",
      author: "Marcela Paz",
      editorial: "Universitaria",
      type: "Infantil",
      stock: 3,
      bodega: "Sur",
      status: "critical"
    }
  ],

  bodegas: {
    centro: {
      code: "BD-001",
      name: "Bodega Centro",
      location: "Santiago Centro",
      currentUnits: 7860,
      maxCapacity: 10000,
      alerts: 14,
      schedule: "Lun-vie · 08:00–18:00",
      area: "620 m²",
      lastInventory: "28 sep 2026",
      team: [
        { name: "Marina Herrera", role: "Jefa de bodega", avatar: "MH" },
        { name: "Tomás Vidal", role: "Bodeguero", avatar: "TV" },
        { name: "Camila Reyes", role: "Bodeguera", avatar: "CR" }
      ],
      categories: [
        { category: "Novela", products: "1.284", units: "3.420", pct: 44 },
        { category: "Ensayo", products: "642", units: "1.860", pct: 24 },
        { category: "Poesía", products: "488", units: "1.210", pct: 15 },
        { category: "Infantil", products: "390", units: "920", pct: 12 },
        { category: "Otros", products: "168", units: "450", pct: 5 }
      ]
    },
    norte: {
      code: "BD-002",
      name: "Bodega Norte",
      location: "Huechuraba",
      currentUnits: 4932,
      maxCapacity: 7500,
      alerts: 9,
      schedule: "Lun-vie · 08:30–17:30",
      area: "480 m²",
      lastInventory: "27 sep 2026",
      team: [
        { name: "Sergio Muñoz", role: "Jefe de bodega", avatar: "SM" },
        { name: "Rodrigo Fuentes", role: "Bodeguero", avatar: "RF" }
      ],
      categories: [
        { category: "Novela", products: "950", units: "2.100", pct: 43 },
        { category: "Ensayo", products: "410", units: "1.200", pct: 24 },
        { category: "Poesía", products: "320", units: "850", pct: 17 },
        { category: "Infantil", products: "210", units: "520", pct: 11 },
        { category: "Otros", products: "95", units: "262", pct: 5 }
      ]
    },
    providencia: {
      code: "BD-003",
      name: "Sucursal Providencia",
      location: "Av. Providencia 1450",
      currentUnits: 3518,
      maxCapacity: 5000,
      alerts: 11,
      schedule: "Lun-sáb · 09:00–20:00",
      area: "310 m²",
      lastInventory: "29 sep 2026",
      team: [
        { name: "Paula León", role: "Bodeguera Encargada", avatar: "PL" },
        { name: "Ignacio Soto", role: "Bodeguero", avatar: "IS" }
      ],
      categories: [
        { category: "Novela", products: "680", units: "1.600", pct: 45 },
        { category: "Ensayo", products: "330", units: "910", pct: 26 },
        { category: "Poesía", products: "210", units: "520", pct: 15 },
        { category: "Infantil", products: "160", units: "340", pct: 10 },
        { category: "Otros", products: "60", units: "148", pct: 4 }
      ]
    },
    sur: {
      code: "BD-004",
      name: "Bodega Sur",
      location: "La Cisterna",
      currentUnits: 2332,
      maxCapacity: 4000,
      alerts: 13,
      schedule: "Lun-vie · 08:30–18:00",
      area: "390 m²",
      lastInventory: "25 sep 2026",
      team: [
        { name: "Diego Soto", role: "Bodeguero Principal", avatar: "DS" },
        { name: "Matías Silva", role: "Bodeguero", avatar: "MS" }
      ],
      categories: [
        { category: "Novela", products: "450", units: "980", pct: 42 },
        { category: "Ensayo", products: "280", units: "610", pct: 26 },
        { category: "Poesía", products: "190", units: "410", pct: 18 },
        { category: "Infantil", products: "120", units: "210", pct: 9 },
        { category: "Otros", products: "50", units: "122", pct: 5 }
      ]
    }
  },

  transferItems: [
    { id: 1, title: "Cien años de soledad", isbn: "978-84-376-0494-7", available: 22, qty: 8 },
    { id: 2, title: "Los detectives salvajes", isbn: "978-84-264-0877-7", available: 31, qty: 6 },
    { id: 3, title: "El acontecimiento", isbn: "978-84-339-9833-9", available: 12, qty: 4 },
    { id: 4, title: "Poeta chileno", isbn: "978-84-663-5468-3", available: 18, qty: 6 }
  ],

  recentMovements: [
    { folio: "IN-0917", date: "30 sep 2026", time: "09:18", type: "Ingreso", bodega: "Bodega Centro", detail: "Editorial Anagrama (12 prod · 120 un)", units: 120, user: "Marina Herrera" },
    { folio: "TR-0284", date: "30 sep 2026", time: "10:42", type: "Traslado", bodega: "Centro → Providencia", detail: "24 productos · 68 unidades", units: 68, user: "Diego Soto" },
    { folio: "AJ-0441", date: "29 sep 2026", time: "Ayer", type: "Ajuste", bodega: "Bodega Norte", detail: "Conteo físico (-3 unidades)", units: -3, user: "Paula León" },
    { folio: "EG-0348", date: "29 sep 2026", time: "Ayer", type: "Egreso", bodega: "Providencia", detail: "Venta sucursal (-42 unidades)", units: -42, user: "Camila Reyes" }
  ]
};

// State
let currentPage = 1;
const PAGE_SIZE = 6;
let selectedBodegaKey = "centro";

// ==========================================================================
// 2. INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initGlobalBranchSelector();
  initProductsTable();
  initBodegasView();
  initTransferModule();
  initReportsModule();
  initModals();
  initKeyboardShortcuts();
});

// ==========================================================================
// 3. NAVIGATION (SPA Tabs)
// ==========================================================================
function initNavigation() {
  const navItems = document.querySelectorAll(".sidebar-nav .nav-item");
  const viewPanes = document.querySelectorAll(".view-pane");
  const internalLinks = document.querySelectorAll("[data-view]");

  function switchTab(viewId) {
    // Update nav links
    navItems.forEach(item => {
      if (item.getAttribute("data-view") === viewId) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    // Update view panes
    viewPanes.forEach(pane => {
      if (pane.id === `view-${viewId}`) {
        pane.classList.add("active");
      } else {
        pane.classList.remove("active");
      }
    });

    window.location.hash = viewId;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  navItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const viewId = item.getAttribute("data-view");
      switchTab(viewId);
    });
  });

  internalLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const viewId = link.getAttribute("data-view");
      if (viewId) switchTab(viewId);
    });
  });

  // Handle hash on initial load
  const currentHash = window.location.hash.replace("#", "");
  if (currentHash && document.getElementById(`view-${currentHash}`)) {
    switchTab(currentHash);
  }
}

// Global Branch Selector
function initGlobalBranchSelector() {
  const select = document.getElementById("globalBranchSelect");
  if (!select) return;

  select.addEventListener("change", (e) => {
    const val = e.target.value;
    showToast(`Filtrando vista para: ${e.target.options[e.target.selectedIndex].text}`);
  });
}

// ==========================================================================
// 4. SCREEN 2: PRODUCT CATALOG MODULE
// ==========================================================================
function initProductsTable() {
  renderProducts();

  const searchInput = document.getElementById("productSearchInput");
  const filterType = document.getElementById("filterType");
  const filterEditorial = document.getElementById("filterEditorial");
  const filterBodega = document.getElementById("filterBodega");
  const btnClearFilters = document.getElementById("btnClearFilters");
  const btnPrevPage = document.getElementById("btnPrevPage");
  const btnNextPage = document.getElementById("btnNextPage");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      currentPage = 1;
      renderProducts();
    });
  }

  [filterType, filterEditorial, filterBodega].forEach(el => {
    if (el) {
      el.addEventListener("change", () => {
        currentPage = 1;
        renderProducts();
      });
    }
  });

  if (btnClearFilters) {
    btnClearFilters.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      if (filterType) filterType.value = "";
      if (filterEditorial) filterEditorial.value = "";
      if (filterBodega) filterBodega.value = "";
      currentPage = 1;
      renderProducts();
      showToast("Filtros restablecidos");
    });
  }

  if (btnPrevPage) {
    btnPrevPage.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderProducts();
      }
    });
  }

  if (btnNextPage) {
    btnNextPage.addEventListener("click", () => {
      const filtered = getFilteredProducts();
      const totalPages = Math.ceil(filtered.length / PAGE_SIZE) || 1;
      if (currentPage < totalPages) {
        currentPage++;
        renderProducts();
      }
    });
  }
}

function getFilteredProducts() {
  const query = (document.getElementById("productSearchInput")?.value || "").toLowerCase().trim();
  const typeVal = document.getElementById("filterType")?.value || "";
  const editorialVal = document.getElementById("filterEditorial")?.value || "";
  const bodegaVal = document.getElementById("filterBodega")?.value || "";

  return DATA.products.filter(item => {
    const matchesQuery = !query ||
      item.title.toLowerCase().includes(query) ||
      item.isbn.toLowerCase().includes(query) ||
      item.author.toLowerCase().includes(query) ||
      item.editorial.toLowerCase().includes(query);

    const matchesType = !typeVal || item.type === typeVal;
    const matchesEditorial = !editorialVal || item.editorial === editorialVal;
    const matchesBodega = !bodegaVal || item.bodega.toLowerCase().includes(bodegaVal.toLowerCase());

    return matchesQuery && matchesType && matchesEditorial && matchesBodega;
  });
}

function renderProducts() {
  const tbody = document.getElementById("productsTableBody");
  if (!tbody) return;

  const filtered = getFilteredProducts();
  const totalCount = filtered.length;
  const totalPages = Math.ceil(totalCount / PAGE_SIZE) || 1;

  if (currentPage > totalPages) currentPage = totalPages;

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = Math.min(startIndex + PAGE_SIZE, totalCount);
  const pagedItems = filtered.slice(startIndex, endIndex);

  // Update counts
  const countLabel = document.getElementById("productCountLabel");
  const paginationInfo = document.getElementById("paginationInfo");

  if (countLabel) countLabel.textContent = `${totalCount} resultados`;
  if (paginationInfo) {
    paginationInfo.textContent = totalCount > 0 
      ? `Mostrando ${startIndex + 1}–${endIndex} de ${totalCount} productos`
      : `0 productos encontrados`;
  }

  // Render Rows
  if (pagedItems.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align:center; padding: 40px; color: #6B7280;">
          No se encontraron productos que coincidan con la búsqueda.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = pagedItems.map(prod => {
    let badgeClass = "badge-neutral";
    let badgeText = "Disponible";

    if (prod.status === "critical") {
      badgeClass = "badge-critical";
      badgeText = "Stock crítico";
    } else if (prod.status === "low") {
      badgeClass = "badge-warning";
      badgeText = "Stock bajo";
    } else if (prod.status === "empty") {
      badgeClass = "badge-neutral";
      badgeText = "Agotado";
    } else {
      badgeClass = "badge-success";
      badgeText = "Disponible";
    }

    const initial = prod.title.charAt(0).toUpperCase();

    return `
      <tr>
        <td>
          <div class="product-cell">
            <div class="book-initial-icon">${initial}</div>
            <div>
              <div class="prod-title-text">${prod.title}</div>
              <div class="prod-isbn-sub">${prod.isbn}</div>
            </div>
          </div>
        </td>
        <td>${prod.author}</td>
        <td>
          <div class="editorial-primary">${prod.editorial}</div>
          <div class="type-sub">${prod.type}</div>
        </td>
        <td>
          <span class="stock-strong">${prod.stock}</span>
        </td>
        <td>${prod.bodega}</td>
        <td>
          <span class="badge ${badgeClass}">${badgeText}</span>
        </td>
        <td class="text-right">
          <div class="table-actions">
            <button class="icon-action-btn" onclick="editProduct(${prod.id})" title="Editar producto">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </button>
            <button class="icon-action-btn" onclick="openProductActions(${prod.id})" title="Más opciones">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join("");

  // Update pagination buttons state
  const btnPrev = document.getElementById("btnPrevPage");
  const btnNext = document.getElementById("btnNextPage");
  if (btnPrev) btnPrev.disabled = currentPage === 1;
  if (btnNext) btnNext.disabled = currentPage === totalPages;

  // Render Page Numbers
  const pageNumbersContainer = document.getElementById("paginationNumbers");
  if (pageNumbersContainer) {
    let pagesHtml = "";
    for (let i = 1; i <= totalPages; i++) {
      pagesHtml += `<button class="page-num ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
    }
    pageNumbersContainer.innerHTML = pagesHtml;
  }
}

window.goToPage = function(pageNum) {
  currentPage = pageNum;
  renderProducts();
};

window.editProduct = function(id) {
  const prod = DATA.products.find(p => p.id === id);
  if (!prod) return;

  const modal = document.getElementById("productModal");
  const title = document.getElementById("productModalTitle");
  if (title) title.textContent = `Editar producto: ${prod.title}`;

  document.getElementById("prodTitle").value = prod.title;
  document.getElementById("prodAuthor").value = prod.author;
  document.getElementById("prodISBN").value = prod.isbn;
  document.getElementById("prodEditorial").value = prod.editorial;
  document.getElementById("prodType").value = prod.type;
  document.getElementById("prodStock").value = prod.stock;
  document.getElementById("prodBodega").value = prod.bodega.includes("Centro") ? "Centro" : "Norte";

  modal.classList.add("active");
};

window.openProductActions = function(id) {
  const prod = DATA.products.find(p => p.id === id);
  if (!prod) return;
  showToast(`Opciones avanzadas para "${prod.title}"`);
};

// ==========================================================================
// 5. SCREEN 3: GESTIÓN DE BODEGAS
// ==========================================================================
function initBodegasView() {
  const bodegaCards = document.querySelectorAll(".bodega-card");

  bodegaCards.forEach(card => {
    card.addEventListener("click", () => {
      const bodegaKey = card.getAttribute("data-bodega");
      if (bodegaKey) {
        selectedBodegaKey = bodegaKey;
        updateBodegaSelectionUI();
      }
    });
  });

  const btnEditBodegaFicha = document.getElementById("btnEditBodegaFicha");
  if (btnEditBodegaFicha) {
    btnEditBodegaFicha.addEventListener("click", () => {
      showToast(`Editando parámetros de ${DATA.bodegas[selectedBodegaKey].name}`);
    });
  }
}

function updateBodegaSelectionUI() {
  const cards = document.querySelectorAll(".bodega-card");
  cards.forEach(c => {
    if (c.getAttribute("data-bodega") === selectedBodegaKey) {
      c.classList.add("selected");
      // Add pill if not present
      if (!c.querySelector(".selected-pill")) {
        const header = c.querySelector(".bodega-card-header");
        const pill = document.createElement("span");
        pill.className = "selected-pill";
        pill.textContent = "Seleccionada";
        header.appendChild(pill);
      }
    } else {
      c.classList.remove("selected");
      const pill = c.querySelector(".selected-pill");
      if (pill) pill.remove();
    }
  });

  const bodegaData = DATA.bodegas[selectedBodegaKey];
  if (!bodegaData) return;

  // Update Detail Title
  const invTitle = document.getElementById("selectedBodegaInventoryTitle");
  if (invTitle) invTitle.textContent = `Inventario de ${bodegaData.name}`;

  // Update Breakdown Table
  const tbody = document.getElementById("bodegaBreakdownBody");
  if (tbody && bodegaData.categories) {
    tbody.innerHTML = bodegaData.categories.map(cat => `
      <tr>
        <td class="category-name">${cat.category}</td>
        <td>${cat.products}</td>
        <td class="units-val">${cat.units}</td>
        <td>
          <div class="stock-bar-cell">
            <div class="mini-bar-track">
              <div class="mini-bar-fill" style="width: ${cat.pct}%;"></div>
            </div>
            <span>${cat.pct}%</span>
          </div>
        </td>
      </tr>
    `).join("");
  }
}

// ==========================================================================
// 6. SCREEN 4: TRASLADOS MODULE
// ==========================================================================
function initTransferModule() {
  renderTransferItems();

  const originSelect = document.getElementById("transferOriginSelect");
  const destSelect = document.getElementById("transferDestSelect");
  const btnAddProduct = document.getElementById("btnAddProductToTransfer");
  const btnSaveDraft = document.getElementById("btnSaveTransferDraft");
  const btnSubmitTransfer = document.getElementById("btnSubmitTransfer");

  if (originSelect) {
    originSelect.addEventListener("change", (e) => {
      const originKey = e.target.value;
      const bData = DATA.bodegas[originKey];
      if (bData) {
        document.getElementById("transferOriginStock").textContent = `${bData.code} · ${bData.currentUnits.toLocaleString()} disponibles`;
        document.getElementById("summaryOriginText").textContent = bData.name;
      }
    });
  }

  if (destSelect) {
    destSelect.addEventListener("change", (e) => {
      const destKey = e.target.value;
      const bData = DATA.bodegas[destKey];
      if (bData) {
        document.getElementById("transferDestStock").textContent = `${bData.code} · ${bData.currentUnits.toLocaleString()} disponibles`;
        document.getElementById("summaryDestText").textContent = bData.name;
      }
    });
  }

  if (btnAddProduct) {
    btnAddProduct.addEventListener("click", () => {
      // Add a demo book to transfer
      const nextId = DATA.transferItems.length + 1;
      DATA.transferItems.push({
        id: nextId,
        title: "Ficciones",
        isbn: "978-84-9759-242-0",
        available: 45,
        qty: 5
      });
      renderTransferItems();
      showToast("Producto añadido al traslado");
    });
  }

  if (btnSaveDraft) {
    btnSaveDraft.addEventListener("click", () => {
      showToast("Borrador TR-0285 guardado exitosamente");
    });
  }

  if (btnSubmitTransfer) {
    btnSubmitTransfer.addEventListener("click", () => {
      showToast("¡Traslado TR-0285 emitido y validado correctamente!");
    });
  }
}

function renderTransferItems() {
  const tbody = document.getElementById("transferItemsTableBody");
  if (!tbody) return;

  let totalQty = 0;
  const prodCount = DATA.transferItems.length;

  tbody.innerHTML = DATA.transferItems.map(item => {
    totalQty += item.qty;
    return `
      <tr>
        <td>
          <div class="prod-title-text">${item.title}</div>
          <div class="prod-isbn-sub">${item.isbn}</div>
        </td>
        <td class="text-center">
          <span style="font-weight:600; color: #4B5563;">${item.available}</span>
        </td>
        <td class="text-right">
          <div class="qty-control">
            <button class="qty-btn" onclick="updateTransferQty(${item.id}, -1)">-</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="updateTransferQty(${item.id}, 1)">+</button>
            <button class="btn-remove-item" onclick="removeTransferItem(${item.id})" title="Quitar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join("");

  // Update Summary Card
  const countLabel = document.getElementById("transferItemCountLabel");
  const sumProdCount = document.getElementById("summaryProdCount");
  const sumUnitCount = document.getElementById("summaryUnitCount");

  if (countLabel) countLabel.textContent = `${prodCount} productos`;
  if (sumProdCount) sumProdCount.textContent = prodCount;
  if (sumUnitCount) sumUnitCount.textContent = totalQty;
}

window.updateTransferQty = function(id, delta) {
  const item = DATA.transferItems.find(i => i.id === id);
  if (!item) return;

  const newQty = item.qty + delta;
  if (newQty < 1) {
    removeTransferItem(id);
    return;
  }
  if (newQty > item.available) {
    showToast(`Cantidad supera las unidades disponibles (${item.available})`);
    return;
  }

  item.qty = newQty;
  renderTransferItems();
};

window.removeTransferItem = function(id) {
  DATA.transferItems = DATA.transferItems.filter(i => i.id !== id);
  renderTransferItems();
  showToast("Producto eliminado de la lista de traslado");
};

// ==========================================================================
// 7. SCREEN 5: INFORMES & ANALÍTICA
// ==========================================================================
function initReportsModule() {
  const btnApplyReportFilters = document.getElementById("btnApplyReportFilters");
  const btnExportReportCSV = document.getElementById("btnExportReportCSV");
  const btnDownloadMovementCSV = document.getElementById("btnDownloadMovementCSV");
  const btnScheduleReport = document.getElementById("btnScheduleReport");
  const btnAdminRoles = document.getElementById("btnAdminRoles");

  if (btnApplyReportFilters) {
    btnApplyReportFilters.addEventListener("click", () => {
      showToast("Filtros de analítica aplicados correctamente");
    });
  }

  if (btnExportReportCSV || btnDownloadMovementCSV) {
    const exportHandler = () => {
      exportMovementsToCSV();
    };
    if (btnExportReportCSV) btnExportReportCSV.addEventListener("click", exportHandler);
    if (btnDownloadMovementCSV) btnDownloadMovementCSV.addEventListener("click", exportHandler);
  }

  if (btnScheduleReport) {
    btnScheduleReport.addEventListener("click", () => {
      showToast("Programación configurada: Envío automático los días 1 de cada mes.");
    });
  }

  if (btnAdminRoles) {
    btnAdminRoles.addEventListener("click", () => {
      showToast("Gestión de permisos de usuario abierta");
    });
  }
}

function exportMovementsToCSV() {
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Folio,Fecha,Tipo,Bodega,Detalle,Unidades,RegistradoPor\r\n";

  DATA.recentMovements.forEach(m => {
    const row = [
      `"${m.folio}"`,
      `"${m.date}"`,
      `"${m.type}"`,
      `"${m.bodega}"`,
      `"${m.detail.replace(/"/g, '""')}"`,
      `"${m.units}"`,
      `"${m.user}"`
    ].join(",");
    csvContent += row + "\r\n";
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `movimientos_inventario_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("Descarga de CSV iniciada");
}

// ==========================================================================
// 8. MODALS & FORMS
// ==========================================================================
function initModals() {
  // Product Modal
  const productModal = document.getElementById("productModal");
  const btnOpenNewProduct = document.getElementById("btnOpenNewProductModal");
  const btnCloseProduct = document.getElementById("btnCloseProductModal");
  const btnCancelProduct = document.getElementById("btnCancelProductModal");
  const productForm = document.getElementById("productForm");

  if (btnOpenNewProduct) {
    btnOpenNewProduct.addEventListener("click", () => {
      document.getElementById("productModalTitle").textContent = "Registrar nuevo producto";
      productForm.reset();
      productModal.classList.add("active");
    });
  }

  const closeProductModal = () => productModal.classList.remove("active");
  if (btnCloseProduct) btnCloseProduct.addEventListener("click", closeProductModal);
  if (btnCancelProduct) btnCancelProduct.addEventListener("click", closeProductModal);

  if (productForm) {
    productForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const newProd = {
        id: Date.now(),
        title: document.getElementById("prodTitle").value,
        isbn: document.getElementById("prodISBN").value,
        author: document.getElementById("prodAuthor").value,
        editorial: document.getElementById("prodEditorial").value,
        type: document.getElementById("prodType").value,
        stock: parseInt(document.getElementById("prodStock").value, 10) || 0,
        bodega: document.getElementById("prodBodega").value,
        status: parseInt(document.getElementById("prodStock").value, 10) > 5 ? "available" : "low"
      };

      DATA.products.unshift(newProd);
      renderProducts();
      closeProductModal();
      showToast(`Producto "${newProd.title}" creado exitosamente`);
    });
  }

  // Movement Modal
  const movementModal = document.getElementById("movementModal");
  const btnOpenTransferModal = document.getElementById("btnOpenTransferModal");
  const btnCloseMovement = document.getElementById("btnCloseMovementModal");
  const btnCancelMovement = document.getElementById("btnCancelMovementModal");
  const movementForm = document.getElementById("movementForm");

  if (btnOpenTransferModal) {
    btnOpenTransferModal.addEventListener("click", () => {
      movementForm.reset();
      movementModal.classList.add("active");
    });
  }

  const closeMovementModal = () => movementModal.classList.remove("active");
  if (btnCloseMovement) btnCloseMovement.addEventListener("click", closeMovementModal);
  if (btnCancelMovement) btnCancelMovement.addEventListener("click", closeMovementModal);

  if (movementForm) {
    movementForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const type = document.getElementById("movType").value;
      const bodega = document.getElementById("movBodega").value;
      const units = parseInt(document.getElementById("movUnits").value, 10) || 1;
      const detail = document.getElementById("movDetail").value;

      const newMov = {
        folio: `MV-${Math.floor(1000 + Math.random() * 9000)}`,
        date: "30 sep 2026",
        time: "Ahora",
        type: type,
        bodega: bodega,
        detail: detail,
        units: type === "Egreso" ? -units : units,
        user: "Marina Herrera"
      };

      DATA.recentMovements.unshift(newMov);
      closeMovementModal();
      showToast(`Movimiento ${newMov.folio} (${type}) registrado con éxito`);
    });
  }

  // Quick Alerts
  const btnQuickAlerts = document.getElementById("btnQuickAlerts");
  const notifBellBtn = document.getElementById("notifBellBtn");

  const showAlertsNotice = () => {
    showToast("3 alertas críticas requieren reposición inmediata.");
  };

  if (btnQuickAlerts) btnQuickAlerts.addEventListener("click", showAlertsNotice);
  if (notifBellBtn) notifBellBtn.addEventListener("click", showAlertsNotice);

  // New Bodega
  const btnOpenNewBodega = document.getElementById("btnOpenNewBodegaModal");
  if (btnOpenNewBodega) {
    btnOpenNewBodega.addEventListener("click", () => {
      showToast("Formulario de creación de nueva sucursal / bodega");
    });
  }

  // Import CSV
  const btnImportCSV = document.getElementById("btnImportCSV");
  if (btnImportCSV) {
    btnImportCSV.addEventListener("click", () => {
      showToast("Selecciona un archivo CSV con columnas: Título, ISBN, Autor, Editorial, Tipo, Stock");
    });
  }
}

// ==========================================================================
// 9. KEYBOARD SHORTCUTS & TOASTS
// ==========================================================================
function initKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      const activeSearch = document.querySelector(".view-pane.active input[type='text']");
      if (activeSearch) activeSearch.focus();
    }
  });
}

function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="m9 12 2 2 4-4"></path>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(8px)";
    toast.style.transition = "all 0.25s ease";
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}
