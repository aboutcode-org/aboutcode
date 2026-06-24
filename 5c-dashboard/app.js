/**
 * 5C: Continuous Code Compliance Control Center
 * Main Application Logic
 */

const App = (() => {
  'use strict';

  // ──────────────────────────────────────────────
  // SVG Icons (inline for zero dependencies)
  // ──────────────────────────────────────────────
  const Icons = {
    dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
    vulnerability: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    license: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
    policy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    events: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    products: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`,
    package: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
    'shield-check': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
    'alert-triangle': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    'file-check': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/></svg>`,
    'alert-circle': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    gauge: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M12 6v6l4 2"/></svg>`,
    close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
    trendUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
    trendDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>`,
    download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`,
    barChart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>`,
    pieChart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>`,
  };

  function icon(name, className = '') {
    return `<span class="${className}">${Icons[name] || ''}</span>`;
  }

  // ──────────────────────────────────────────────
  // Utility Helpers
  // ──────────────────────────────────────────────
  function formatNumber(n) {
    if (typeof n === 'string') return n;
    return n >= 1000 ? n.toLocaleString() : n.toString();
  }

  function timeAgo(isoString) {
    const now = new Date();
    const date = new Date(isoString);
    const diffMs = now - date;
    const diffMin = Math.floor(diffMs / 60000);
    const diffHr = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHr / 24);
    if (diffMin < 1) return 'just now';
    if (diffMin < 60) return `${diffMin}m ago`;
    if (diffHr < 24) return `${diffHr}h ago`;
    return `${diffDay}d ago`;
  }

  function $(selector) {
    return document.querySelector(selector);
  }

  // ──────────────────────────────────────────────
  // Render: KCI Cards
  // ──────────────────────────────────────────────
  function renderKCICards() {
    const container = $('#kci-grid');
    if (!container) return;

    const data = MockData.kciData;
    let html = '';
    let delay = 1;

    for (const [key, kci] of Object.entries(data)) {
      const trendClass = kci.trend > 0 ? 'positive' : kci.trend < 0 ? 'negative' : 'neutral';
      const trendIcon = kci.trend > 0 ? '↑' : kci.trend < 0 ? '↓' : '—';
      const trendText = kci.trend !== 0 ? `${trendIcon} ${Math.abs(kci.trend)}${kci.unit === '%' ? '%' : ''}` : '—';

      let valueHtml;
      if (key === 'riskLevel') {
        const riskClass = kci.value.toLowerCase();
        valueHtml = `<span class="risk-badge risk-${riskClass}">${kci.value}</span>`;
      } else {
        valueHtml = `<span class="kci-card-value">${formatNumber(kci.value)}<span class="kci-unit">${kci.unit}</span></span>`;
      }

      html += `
        <div class="kci-card animate-in animate-in-delay-${delay}" data-kci="${key}">
          <div class="kci-card-header">
            <div class="kci-card-icon">${icon(kci.icon, 'nav-icon')}</div>
            <span class="kci-trend ${trendClass}">${trendText}</span>
          </div>
          ${valueHtml}
          <div class="kci-card-label">${kci.label}</div>
          <div class="kci-card-description">${kci.description}</div>
        </div>
      `;
      delay = Math.min(delay + 1, 6);
    }

    container.innerHTML = html;

    // Attach click handlers for drill-down
    container.querySelectorAll('.kci-card').forEach(card => {
      card.addEventListener('click', () => {
        const key = card.dataset.kci;
        openDetailPanel('kci', key);
      });
    });
  }

  // ──────────────────────────────────────────────
  // Render: Vulnerability Severity Bars
  // ──────────────────────────────────────────────
  function renderVulnerabilityBars() {
    const container = $('#vuln-severity-bars');
    if (!container) return;

    const data = MockData.vulnerabilitySummary;
    const maxCount = Math.max(...Object.values(data).map(d => d.count));
    let html = '';

    for (const [severity, info] of Object.entries(data)) {
      if (severity === 'none') continue;
      const percent = (info.count / maxCount) * 100;
      const trendClass = info.trend > 0 ? 'negative' : 'positive';
      const trendIcon = info.trend > 0 ? '↑' : '↓';

      html += `
        <div class="severity-bar-row">
          <span class="severity-label ${severity}">${severity}</span>
          <div class="severity-bar-track">
            <div class="severity-bar-fill ${severity}" style="width: 0%" data-target-width="${percent}"></div>
          </div>
          <span class="severity-count">${info.count}</span>
          <span class="severity-trend ${trendClass}">${trendIcon}${Math.abs(info.trend)}</span>
        </div>
      `;
    }

    container.innerHTML = html;

    // Animate bars
    requestAnimationFrame(() => {
      setTimeout(() => {
        container.querySelectorAll('.severity-bar-fill').forEach(bar => {
          bar.style.width = bar.dataset.targetWidth + '%';
        });
      }, 300);
    });
  }

  // ──────────────────────────────────────────────
  // Render: License Donut Chart (SVG)
  // ──────────────────────────────────────────────
  function renderLicenseDonut() {
    const container = $('#license-donut');
    if (!container) return;

    const data = MockData.licenseCategoryBreakdown;
    const categories = Object.entries(data);
    const total = categories.reduce((sum, [, v]) => sum + v.count, 0);

    // Build SVG donut
    const cx = 90, cy = 90, r = 70, strokeWidth = 24;
    const circumference = 2 * Math.PI * r;
    let offset = 0;
    let arcs = '';

    for (const [name, info] of categories) {
      const pct = info.count / total;
      const dashLength = pct * circumference;
      arcs += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${info.color}" stroke-width="${strokeWidth}" stroke-dasharray="${dashLength} ${circumference - dashLength}" stroke-dashoffset="${-offset}" transform="rotate(-90 ${cx} ${cy})" style="transition: stroke-dashoffset 1s ease;"/>`;
      offset += dashLength;
    }

    // Legend
    let legendHtml = '';
    for (const [name, info] of categories) {
      legendHtml += `
        <div class="legend-item">
          <span class="legend-dot" style="background:${info.color}"></span>
          <span>${name.replace('-', ' ')}</span>
          <span class="legend-value">${info.percentage}%</span>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="donut-chart-wrapper">
        <svg class="donut-chart-svg" viewBox="0 0 180 180">
          ${arcs}
          <text class="donut-center-text" x="${cx}" y="${cy - 6}" text-anchor="middle" dominant-baseline="middle">
            <tspan class="donut-center-value">${total.toLocaleString()}</tspan>
          </text>
          <text class="donut-center-text donut-center-label" x="${cx}" y="${cy + 16}" text-anchor="middle" dominant-baseline="middle">
            Packages
          </text>
        </svg>
        <div class="chart-legend">${legendHtml}</div>
      </div>
    `;
  }

  // ──────────────────────────────────────────────
  // Render: Ecosystem Breakdown Bar Chart (SVG)
  // ──────────────────────────────────────────────
  function renderEcosystemChart() {
    const container = $('#ecosystem-chart');
    if (!container) return;

    const data = MockData.ecosystemBreakdown;
    const maxPct = Math.max(...data.map(d => d.percentage));
    let html = '<div class="severity-bars">';

    for (const eco of data) {
      const barPct = (eco.percentage / maxPct) * 100;
      html += `
        <div class="severity-bar-row">
          <span class="severity-label" style="color:${eco.color};width:50px;font-size:0.75rem">${eco.ecosystem}</span>
          <div class="severity-bar-track">
            <div class="severity-bar-fill" style="width:0%;background:${eco.color}" data-target-width="${barPct}"></div>
          </div>
          <span class="severity-count">${eco.count.toLocaleString()}</span>
          <span class="severity-trend neutral" style="color:var(--text-muted)">${eco.percentage}%</span>
        </div>
      `;
    }

    html += '</div>';
    container.innerHTML = html;

    requestAnimationFrame(() => {
      setTimeout(() => {
        container.querySelectorAll('.severity-bar-fill').forEach(bar => {
          bar.style.width = bar.dataset.targetWidth + '%';
        });
      }, 500);
    });
  }

  // ──────────────────────────────────────────────
  // Render: Compliance Trend Sparkline (SVG)
  // ──────────────────────────────────────────────
  function renderTrendSparkline() {
    const container = $('#compliance-trend');
    if (!container) return;

    const data = MockData.trendData.compliance;
    const labels = MockData.trendData.labels;
    const w = 500, h = 80, padding = 2;
    const min = Math.min(...data) - 1;
    const max = Math.max(...data) + 1;

    const points = data.map((v, i) => {
      const x = padding + (i / (data.length - 1)) * (w - padding * 2);
      const y = h - padding - ((v - min) / (max - min)) * (h - padding * 2);
      return `${x},${y}`;
    });

    const polyline = points.join(' ');
    const areaPoints = `${padding},${h - padding} ${polyline} ${w - padding},${h - padding}`;

    container.innerHTML = `
      <div class="sparkline-container">
        <svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
          <defs>
            <linearGradient id="sparkGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="rgba(99,102,241,0.3)"/>
              <stop offset="100%" stop-color="rgba(99,102,241,0)"/>
            </linearGradient>
          </defs>
          <polygon points="${areaPoints}" fill="url(#sparkGradient)"/>
          <polyline points="${polyline}" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="${points[points.length - 1].split(',')[0]}" cy="${points[points.length - 1].split(',')[1]}" r="3" fill="#6366f1"/>
        </svg>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:0.65rem;color:var(--text-muted);margin-top:4px;font-family:var(--font-mono)">
        <span>${labels[0]}</span>
        <span>License Compliance Rate (30d)</span>
        <span>${labels[labels.length - 1]}</span>
      </div>
    `;
  }

  // ──────────────────────────────────────────────
  // Render: Vulnerability Trend Sparkline
  // ──────────────────────────────────────────────
  function renderVulnTrend() {
    const container = $('#vuln-trend');
    if (!container) return;

    const data = MockData.trendData.vulnerabilities;
    const labels = MockData.trendData.labels;
    const w = 500, h = 80, padding = 2;
    const min = Math.min(...data) - 5;
    const max = Math.max(...data) + 5;

    const points = data.map((v, i) => {
      const x = padding + (i / (data.length - 1)) * (w - padding * 2);
      const y = h - padding - ((v - min) / (max - min)) * (h - padding * 2);
      return `${x},${y}`;
    });

    const polyline = points.join(' ');
    const areaPoints = `${padding},${h - padding} ${polyline} ${w - padding},${h - padding}`;

    container.innerHTML = `
      <div class="sparkline-container">
        <svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
          <defs>
            <linearGradient id="vulnGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="rgba(248,113,113,0.3)"/>
              <stop offset="100%" stop-color="rgba(248,113,113,0)"/>
            </linearGradient>
          </defs>
          <polygon points="${areaPoints}" fill="url(#vulnGradient)"/>
          <polyline points="${polyline}" fill="none" stroke="#f87171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="${points[points.length - 1].split(',')[0]}" cy="${points[points.length - 1].split(',')[1]}" r="3" fill="#f87171"/>
        </svg>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:0.65rem;color:var(--text-muted);margin-top:4px;font-family:var(--font-mono)">
        <span>${labels[0]}</span>
        <span>Open Vulnerabilities (30d) ↓</span>
        <span>${labels[labels.length - 1]}</span>
      </div>
    `;
  }

  // ──────────────────────────────────────────────
  // Render: Events Timeline
  // ──────────────────────────────────────────────
  let eventsFilter = 'all';

  function renderEvents() {
    const container = $('#events-list');
    if (!container) return;

    let filtered = MockData.events;
    if (eventsFilter !== 'all') {
      filtered = filtered.filter(e => e.type === eventsFilter);
    }

    if (filtered.length === 0) {
      container.innerHTML = `<div class="empty-state"><p>No events matching this filter.</p></div>`;
      return;
    }

    let html = '';
    for (const event of filtered) {
      html += `
        <div class="event-item" data-event-id="${event.id}">
          <div class="event-indicator">
            <div class="event-dot ${event.severity}"></div>
            <div class="event-line"></div>
          </div>
          <div class="event-content">
            <div class="event-header">
              <span class="event-title">${event.title}</span>
              <span class="event-time">${timeAgo(event.timestamp)}</span>
            </div>
            <div class="event-details">${event.details}</div>
            <div class="event-meta">
              <span class="event-tag ${event.type}">${event.type}</span>
              <span class="event-tag status-${event.status}">${event.status}</span>
              <span style="font-size:0.7rem;color:var(--text-muted)">${event.source} · ${event.product}</span>
            </div>
          </div>
        </div>
      `;
    }

    container.innerHTML = html;

    // Attach click for detail
    container.querySelectorAll('.event-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.dataset.eventId;
        openDetailPanel('event', id);
      });
    });
  }

  // ──────────────────────────────────────────────
  // Render: Policy Rules Table
  // ──────────────────────────────────────────────
  function renderPolicyRules() {
    const container = $('#policy-rules-body');
    if (!container) return;

    let html = '';
    for (const rule of MockData.policyRules) {
      const unit = rule.unit || '';
      const pct = Math.min((rule.current / rule.threshold) * 100, 150);
      const barColor = rule.status === 'breach' ? 'var(--color-danger)' : 'var(--color-success)';

      html += `
        <tr>
          <td><span class="policy-name">${rule.name}</span><br><span style="font-size:0.7rem;color:var(--text-muted)">${rule.description}</span></td>
          <td><span class="event-tag ${rule.category}" style="background:var(--accent-primary-glow);color:var(--accent-primary)">${rule.category}</span></td>
          <td>
            <div class="policy-progress">
              <div class="policy-progress-bar">
                <div class="policy-progress-fill" style="width:${Math.min(pct, 100)}%;background:${barColor}"></div>
              </div>
              <span class="policy-progress-text">${rule.current}${unit} / ${rule.threshold}${unit}</span>
            </div>
          </td>
          <td><span class="policy-status ${rule.status}">${rule.status === 'passing' ? '✓ Passing' : '✗ Breach'}</span></td>
        </tr>
      `;
    }

    container.innerHTML = html;
  }

  // ──────────────────────────────────────────────
  // Render: Products Overview
  // ──────────────────────────────────────────────
  function renderProducts() {
    const container = $('#products-grid');
    if (!container) return;

    let html = `
      <div class="product-row product-row-header">
        <span>Product</span>
        <span>Packages</span>
        <span>Compliance</span>
        <span>Vulnerabilities</span>
        <span>Last Scan</span>
        <span>Risk</span>
      </div>
    `;

    for (const product of MockData.products) {
      const compColor = product.compliance >= 95 ? 'var(--color-success)' : product.compliance >= 90 ? 'var(--color-warning)' : 'var(--color-danger)';

      html += `
        <div class="product-row" data-product="${product.name}">
          <span class="product-name">${product.name}</span>
          <span class="product-packages">${product.packages.toLocaleString()}</span>
          <span class="product-compliance" style="color:${compColor}">${product.compliance}%</span>
          <div class="product-vulns">
            <span class="vuln-pill critical">C:${product.vulns.critical}</span>
            <span class="vuln-pill high">H:${product.vulns.high}</span>
            <span class="vuln-pill medium">M:${product.vulns.medium}</span>
          </div>
          <span class="product-scan">${product.lastScan}</span>
          <span class="risk-indicator ${product.risk}">${product.risk}</span>
        </div>
      `;
    }

    container.innerHTML = html;

    container.querySelectorAll('.product-row:not(.product-row-header)').forEach(row => {
      row.addEventListener('click', () => {
        openDetailPanel('product', row.dataset.product);
      });
    });
  }

  // ──────────────────────────────────────────────
  // Render: Top Vulnerable Packages
  // ──────────────────────────────────────────────
  function renderTopVulnPackages() {
    const container = $('#top-vuln-packages');
    if (!container) return;

    let html = '';
    for (const pkg of MockData.topVulnerablePackages) {
      const sevColor = pkg.severity === 'critical' ? 'var(--color-critical)' : pkg.severity === 'high' ? '#f97316' : '#eab308';

      html += `
        <div class="vuln-package-item">
          <div>
            <div class="vuln-package-name">${pkg.name}</div>
            <div class="vuln-package-version">${pkg.version}</div>
          </div>
          <span class="vuln-package-ecosystem">${pkg.ecosystem}</span>
          <span class="vuln-package-count" style="color:${sevColor}">${pkg.vulns} CVEs</span>
          <span class="vuln-package-severity"><span class="vuln-pill ${pkg.severity}">${pkg.severity}</span></span>
        </div>
      `;
    }

    container.innerHTML = html;
  }

  // ──────────────────────────────────────────────
  // Detail Panel (Drill-Down)
  // ──────────────────────────────────────────────
  function openDetailPanel(type, id) {
    const overlay = $('#detail-overlay');
    const panel = $('#detail-panel');
    const title = $('#detail-panel-title');
    const body = $('#detail-panel-body');

    if (!overlay || !panel) return;

    let html = '';

    if (type === 'kci') {
      const kci = MockData.kciData[id];
      if (!kci) return;
      title.textContent = kci.label;
      html = `
        <div class="detail-section">
          <div class="detail-section-title">Current Value</div>
          <div style="font-size:2.5rem;font-weight:800;margin-bottom:var(--space-md)">${formatNumber(kci.value)}<span style="font-size:1rem;color:var(--text-muted)">${kci.unit}</span></div>
          <p style="color:var(--text-secondary);font-size:0.85rem">${kci.description}</p>
        </div>
        <div class="detail-section">
          <div class="detail-section-title">Trend (30 Days)</div>
          <div class="detail-field">
            <span class="detail-field-label">Change</span>
            <span class="detail-field-value" style="color:${kci.trend > 0 ? 'var(--color-success)' : kci.trend < 0 ? 'var(--color-danger)' : 'var(--text-muted)'}">
              ${kci.trend > 0 ? '↑' : kci.trend < 0 ? '↓' : '—'} ${Math.abs(kci.trend)}${kci.unit === '%' ? '%' : ''}
            </span>
          </div>
        </div>
        <div class="detail-section">
          <div class="detail-section-title">Related Events</div>
          <p style="color:var(--text-muted);font-size:0.8rem">Click events in the timeline below for more details.</p>
        </div>
      `;
    } else if (type === 'event') {
      const event = MockData.events.find(e => e.id === id);
      if (!event) return;
      title.textContent = event.title;
      html = `
        <div class="detail-section">
          <div class="detail-section-title">Event Details</div>
          <div class="detail-field"><span class="detail-field-label">ID</span><span class="detail-field-value">${event.id}</span></div>
          <div class="detail-field"><span class="detail-field-label">Type</span><span class="detail-field-value">${event.type}</span></div>
          <div class="detail-field"><span class="detail-field-label">Severity</span><span class="detail-field-value"><span class="vuln-pill ${event.severity}">${event.severity}</span></span></div>
          <div class="detail-field"><span class="detail-field-label">Source</span><span class="detail-field-value">${event.source}</span></div>
          <div class="detail-field"><span class="detail-field-label">Product</span><span class="detail-field-value">${event.product}</span></div>
          <div class="detail-field"><span class="detail-field-label">Status</span><span class="detail-field-value"><span class="event-tag status-${event.status}">${event.status}</span></span></div>
          <div class="detail-field"><span class="detail-field-label">Time</span><span class="detail-field-value">${new Date(event.timestamp).toLocaleString()}</span></div>
        </div>
        <div class="detail-section">
          <div class="detail-section-title">Description</div>
          <p style="color:var(--text-secondary);font-size:0.85rem;line-height:1.7">${event.details}</p>
        </div>
        <div class="detail-section">
          <div class="detail-section-title">Actions</div>
          <div style="display:flex;gap:var(--space-sm);flex-wrap:wrap">
            <button class="btn btn-primary">Acknowledge</button>
            <button class="btn">Assign to Team</button>
            <button class="btn">Create Ticket</button>
            <button class="btn">${icon('download', 'nav-icon')} Export</button>
          </div>
        </div>
      `;
    } else if (type === 'product') {
      const product = MockData.products.find(p => p.name === id);
      if (!product) return;
      title.textContent = product.name;
      const compColor = product.compliance >= 95 ? 'var(--color-success)' : product.compliance >= 90 ? 'var(--color-warning)' : 'var(--color-danger)';
      html = `
        <div class="detail-section">
          <div class="detail-section-title">Product Overview</div>
          <div class="detail-field"><span class="detail-field-label">Total Packages</span><span class="detail-field-value">${product.packages.toLocaleString()}</span></div>
          <div class="detail-field"><span class="detail-field-label">Compliance Rate</span><span class="detail-field-value" style="color:${compColor}">${product.compliance}%</span></div>
          <div class="detail-field"><span class="detail-field-label">Last Scan</span><span class="detail-field-value">${product.lastScan}</span></div>
          <div class="detail-field"><span class="detail-field-label">Risk Level</span><span class="detail-field-value"><span class="risk-indicator ${product.risk}">${product.risk}</span></span></div>
        </div>
        <div class="detail-section">
          <div class="detail-section-title">Vulnerability Breakdown</div>
          <div class="detail-field"><span class="detail-field-label">Critical</span><span class="detail-field-value" style="color:var(--color-critical)">${product.vulns.critical}</span></div>
          <div class="detail-field"><span class="detail-field-label">High</span><span class="detail-field-value" style="color:#f97316">${product.vulns.high}</span></div>
          <div class="detail-field"><span class="detail-field-label">Medium</span><span class="detail-field-value" style="color:#eab308">${product.vulns.medium}</span></div>
        </div>
        <div class="detail-section">
          <div class="detail-section-title">Actions</div>
          <div style="display:flex;gap:var(--space-sm);flex-wrap:wrap">
            <button class="btn btn-primary">Run Full Scan</button>
            <button class="btn">Generate SBOM</button>
            <button class="btn">${icon('download', 'nav-icon')} Export Report</button>
          </div>
        </div>
      `;
    }

    body.innerHTML = html;
    overlay.classList.add('active');
    panel.classList.add('active');
  }

  function closeDetailPanel() {
    const overlay = $('#detail-overlay');
    const panel = $('#detail-panel');
    if (overlay) overlay.classList.remove('active');
    if (panel) panel.classList.remove('active');
  }

  // ──────────────────────────────────────────────
  // Navigation
  // ──────────────────────────────────────────────
  function initNavigation() {
    document.querySelectorAll('.nav-item[data-section]').forEach(item => {
      item.addEventListener('click', () => {
        const section = item.dataset.section;
        // Update active nav
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        item.classList.add('active');
        // Scroll to section
        const target = document.getElementById(section);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Close mobile menu
        const sidebar = $('.sidebar');
        if (sidebar) sidebar.classList.remove('open');
      });
    });
  }

  // ──────────────────────────────────────────────
  // Event Filter Tabs
  // ──────────────────────────────────────────────
  function initEventFilters() {
    document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn[data-filter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        eventsFilter = btn.dataset.filter;
        renderEvents();
      });
    });
  }

  // ──────────────────────────────────────────────
  // Mobile Menu Toggle
  // ──────────────────────────────────────────────
  function initMobileMenu() {
    const btn = $('#mobile-menu-btn');
    const sidebar = $('.sidebar');
    if (btn && sidebar) {
      btn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
      });
    }
  }

  // ──────────────────────────────────────────────
  // Initialize App
  // ──────────────────────────────────────────────
  function init() {
    renderKCICards();
    renderVulnerabilityBars();
    renderLicenseDonut();
    renderEcosystemChart();
    renderTrendSparkline();
    renderVulnTrend();
    renderEvents();
    renderPolicyRules();
    renderProducts();
    renderTopVulnPackages();

    initNavigation();
    initEventFilters();
    initMobileMenu();

    // Detail panel close
    const closeBtn = $('#detail-close-btn');
    const overlay = $('#detail-overlay');
    if (closeBtn) closeBtn.addEventListener('click', closeDetailPanel);
    if (overlay) overlay.addEventListener('click', closeDetailPanel);

    // Keyboard shortcut
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDetailPanel();
    });

    console.log('5C Dashboard initialized ✓');
  }

  return { init };
})();

// Boot
document.addEventListener('DOMContentLoaded', App.init);
