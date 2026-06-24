/**
 * 5C: Continuous Code Compliance Control Center
 * Mock Data Module
 * 
 * Simulates realistic data from AboutCode tools:
 * - ScanCode Toolkit (license/copyright detection)
 * - VulnerableCode (vulnerability database)
 * - DejaCode (compliance management)
 * - PURLDB (package metadata)
 */

const MockData = (() => {

  // ──────────────────────────────────────────────
  // Key Compliance Indicators (KCIs)
  // ──────────────────────────────────────────────
  const kciData = {
    totalPackages: {
      label: 'Total Packages',
      value: 12847,
      trend: +3.2,
      icon: 'package',
      unit: '',
      description: 'Packages monitored across all products'
    },
    licenseCompliance: {
      label: 'License Compliance',
      value: 94.7,
      trend: +1.1,
      icon: 'shield-check',
      unit: '%',
      description: 'Packages with compliant licenses'
    },
    vulnerabilityScore: {
      label: 'Vulnerability Score',
      value: 87.3,
      trend: -2.4,
      icon: 'alert-triangle',
      unit: '/100',
      description: 'Overall security posture (higher is better)'
    },
    craCompliance: {
      label: 'CRA Compliance',
      value: 91.2,
      trend: +4.5,
      icon: 'file-check',
      unit: '%',
      description: 'Cyber Resilience Act readiness'
    },
    openIssues: {
      label: 'Open Issues',
      value: 234,
      trend: -12,
      icon: 'alert-circle',
      unit: '',
      description: 'Unresolved compliance & security issues'
    },
    riskLevel: {
      label: 'Risk Level',
      value: 'Medium',
      trend: 0,
      icon: 'gauge',
      unit: '',
      description: 'Aggregate risk assessment',
      riskColor: 'warning'
    }
  };

  // ──────────────────────────────────────────────
  // License Distribution
  // ──────────────────────────────────────────────
  const licenseDistribution = [
    { license: 'MIT', count: 4231, percentage: 32.9, category: 'permissive', color: '#4ade80' },
    { license: 'Apache-2.0', count: 3102, percentage: 24.1, category: 'permissive', color: '#60a5fa' },
    { license: 'BSD-3-Clause', count: 1542, percentage: 12.0, category: 'permissive', color: '#818cf8' },
    { license: 'GPL-3.0', count: 987, percentage: 7.7, category: 'copyleft', color: '#f472b6' },
    { license: 'LGPL-2.1', count: 654, percentage: 5.1, category: 'weak-copyleft', color: '#fb923c' },
    { license: 'GPL-2.0', count: 523, percentage: 4.1, category: 'copyleft', color: '#f87171' },
    { license: 'ISC', count: 498, percentage: 3.9, category: 'permissive', color: '#34d399' },
    { license: 'MPL-2.0', count: 312, percentage: 2.4, category: 'weak-copyleft', color: '#fbbf24' },
    { license: 'AGPL-3.0', count: 189, percentage: 1.5, category: 'copyleft', color: '#ef4444' },
    { license: 'Unlicense', count: 145, percentage: 1.1, category: 'public-domain', color: '#a78bfa' },
    { license: 'Unknown', count: 387, percentage: 3.0, category: 'unknown', color: '#6b7280' },
    { license: 'Other', count: 277, percentage: 2.2, category: 'other', color: '#9ca3af' }
  ];

  const licenseCategoryBreakdown = {
    permissive: { count: 9373, percentage: 73.0, color: '#4ade80' },
    copyleft: { count: 1699, percentage: 13.2, color: '#f87171' },
    'weak-copyleft': { count: 966, percentage: 7.5, color: '#fbbf24' },
    'public-domain': { count: 145, percentage: 1.1, color: '#a78bfa' },
    unknown: { count: 387, percentage: 3.0, color: '#6b7280' },
    other: { count: 277, percentage: 2.2, color: '#9ca3af' }
  };

  // ──────────────────────────────────────────────
  // Vulnerability Data
  // ──────────────────────────────────────────────
  const vulnerabilitySummary = {
    critical: { count: 12, trend: -3, color: '#ef4444' },
    high: { count: 47, trend: +5, color: '#f97316' },
    medium: { count: 134, trend: -8, color: '#eab308' },
    low: { count: 289, trend: -22, color: '#22c55e' },
    none: { count: 12365, trend: +156, color: '#6b7280' }
  };

  const topVulnerablePackages = [
    { name: 'log4j-core', version: '2.14.1', purl: 'pkg:maven/org.apache.logging.log4j/log4j-core@2.14.1', vulns: 4, severity: 'critical', ecosystem: 'Maven' },
    { name: 'spring-webmvc', version: '5.3.18', purl: 'pkg:maven/org.springframework/spring-webmvc@5.3.18', vulns: 3, severity: 'critical', ecosystem: 'Maven' },
    { name: 'node-forge', version: '0.10.0', purl: 'pkg:npm/node-forge@0.10.0', vulns: 5, severity: 'high', ecosystem: 'npm' },
    { name: 'pillow', version: '8.3.2', purl: 'pkg:pypi/pillow@8.3.2', vulns: 7, severity: 'high', ecosystem: 'PyPI' },
    { name: 'lodash', version: '4.17.20', purl: 'pkg:npm/lodash@4.17.20', vulns: 2, severity: 'high', ecosystem: 'npm' },
    { name: 'jackson-databind', version: '2.12.3', purl: 'pkg:maven/com.fasterxml.jackson.core/jackson-databind@2.12.3', vulns: 3, severity: 'high', ecosystem: 'Maven' },
    { name: 'urllib3', version: '1.26.5', purl: 'pkg:pypi/urllib3@1.26.5', vulns: 2, severity: 'medium', ecosystem: 'PyPI' },
    { name: 'express', version: '4.17.1', purl: 'pkg:npm/express@4.17.1', vulns: 1, severity: 'medium', ecosystem: 'npm' },
    { name: 'django', version: '3.2.14', purl: 'pkg:pypi/django@3.2.14', vulns: 2, severity: 'medium', ecosystem: 'PyPI' },
    { name: 'openssl', version: '1.1.1k', purl: 'pkg:generic/openssl@1.1.1k', vulns: 4, severity: 'high', ecosystem: 'Generic' }
  ];

  // ──────────────────────────────────────────────
  // Compliance Events Timeline
  // ──────────────────────────────────────────────
  const events = [
    { id: 'EVT-001', timestamp: '2026-06-24T18:30:00Z', type: 'vulnerability', severity: 'critical', title: 'New critical CVE detected in log4j-core', source: 'VulnerableCode', product: 'WebApp v3.2', details: 'CVE-2026-44228 — Remote code execution vulnerability found in log4j-core 2.14.1. Immediate upgrade required.', status: 'open' },
    { id: 'EVT-002', timestamp: '2026-06-24T16:45:00Z', type: 'license', severity: 'warning', title: 'AGPL-3.0 license detected in dependency', source: 'ScanCode', product: 'API Gateway v2.1', details: 'Package "ghostscript-wrapper" uses AGPL-3.0 which conflicts with commercial distribution policy.', status: 'investigating' },
    { id: 'EVT-003', timestamp: '2026-06-24T14:20:00Z', type: 'policy', severity: 'info', title: 'CRA compliance report generated', source: 'DejaCode', product: 'All Products', details: 'Quarterly CRA compliance report generated. Overall score: 91.2%. 3 products need attention.', status: 'resolved' },
    { id: 'EVT-004', timestamp: '2026-06-24T11:00:00Z', type: 'scan', severity: 'info', title: 'ScanCode scan completed for MobileApp v4.0', source: 'ScanCode.io', product: 'MobileApp v4.0', details: 'Full scan completed. 2,341 files analyzed. 156 packages identified. 3 new license issues found.', status: 'resolved' },
    { id: 'EVT-005', timestamp: '2026-06-23T22:15:00Z', type: 'vulnerability', severity: 'high', title: 'High severity CVE in jackson-databind', source: 'VulnerableCode', product: 'Backend Services v5.1', details: 'CVE-2026-36221 — Deserialization vulnerability in jackson-databind 2.12.3. Upgrade to 2.15.x recommended.', status: 'open' },
    { id: 'EVT-006', timestamp: '2026-06-23T19:30:00Z', type: 'license', severity: 'warning', title: 'Unknown license in 12 packages', source: 'ScanCode', product: 'DataPlatform v1.8', details: '12 packages have undetectable licenses. Manual review required for compliance clearance.', status: 'open' },
    { id: 'EVT-007', timestamp: '2026-06-23T15:00:00Z', type: 'policy', severity: 'critical', title: 'Policy threshold breach: vulnerability count', source: '5C Engine', product: 'WebApp v3.2', details: 'Critical vulnerability count (12) exceeds threshold (5). Immediate remediation workflow triggered.', status: 'investigating' },
    { id: 'EVT-008', timestamp: '2026-06-23T09:45:00Z', type: 'scan', severity: 'info', title: 'SBOM exported for WebApp v3.2', source: 'DejaCode', product: 'WebApp v3.2', details: 'CycloneDX SBOM v1.5 exported with 1,847 components. SHA256 checksum verified.', status: 'resolved' },
    { id: 'EVT-009', timestamp: '2026-06-22T20:00:00Z', type: 'vulnerability', severity: 'medium', title: '8 medium CVEs resolved in batch update', source: 'VulnerableCode', product: 'Multiple', details: 'Batch dependency update resolved 8 medium-severity CVEs across 3 products.', status: 'resolved' },
    { id: 'EVT-010', timestamp: '2026-06-22T14:30:00Z', type: 'license', severity: 'info', title: 'License policy updated', source: 'DejaCode', product: 'All Products', details: 'Added SSPL to restricted license list per legal team review. 4 packages affected.', status: 'resolved' }
  ];

  // ──────────────────────────────────────────────
  // Policy Rules
  // ──────────────────────────────────────────────
  const policyRules = [
    { id: 'POL-001', name: 'Critical Vulnerability Limit', description: 'Max critical CVEs per product', threshold: 5, current: 12, status: 'breach', category: 'security', severity: 'critical' },
    { id: 'POL-002', name: 'License Compliance Floor', description: 'Minimum license compliance rate', threshold: 90, current: 94.7, status: 'passing', category: 'license', severity: 'high', unit: '%' },
    { id: 'POL-003', name: 'Unknown License Cap', description: 'Max packages with unknown licenses', threshold: 50, current: 387, status: 'breach', category: 'license', severity: 'warning' },
    { id: 'POL-004', name: 'SBOM Freshness', description: 'Max days since last SBOM generation', threshold: 30, current: 2, status: 'passing', category: 'compliance', severity: 'medium' },
    { id: 'POL-005', name: 'Copyleft Ratio', description: 'Max copyleft license percentage', threshold: 20, current: 13.2, status: 'passing', category: 'license', severity: 'medium', unit: '%' },
    { id: 'POL-006', name: 'Scan Coverage', description: 'Min percentage of scanned packages', threshold: 95, current: 98.4, status: 'passing', category: 'compliance', severity: 'high', unit: '%' },
    { id: 'POL-007', name: 'High Vuln Response Time', description: 'Max days to resolve high-severity CVEs', threshold: 14, current: 8, status: 'passing', category: 'security', severity: 'high', unit: 'days' },
    { id: 'POL-008', name: 'CRA Readiness Score', description: 'Min CRA compliance percentage', threshold: 85, current: 91.2, status: 'passing', category: 'compliance', severity: 'critical', unit: '%' }
  ];

  // ──────────────────────────────────────────────
  // Products
  // ──────────────────────────────────────────────
  const products = [
    { name: 'WebApp v3.2', packages: 1847, compliance: 92.1, vulns: { critical: 5, high: 12, medium: 34 }, lastScan: '2026-06-24', risk: 'high' },
    { name: 'API Gateway v2.1', packages: 943, compliance: 96.8, vulns: { critical: 1, high: 5, medium: 18 }, lastScan: '2026-06-24', risk: 'medium' },
    { name: 'MobileApp v4.0', packages: 2341, compliance: 94.3, vulns: { critical: 3, high: 8, medium: 27 }, lastScan: '2026-06-24', risk: 'medium' },
    { name: 'Backend Services v5.1', packages: 3456, compliance: 95.7, vulns: { critical: 2, high: 14, medium: 38 }, lastScan: '2026-06-23', risk: 'medium' },
    { name: 'DataPlatform v1.8', packages: 2890, compliance: 89.4, vulns: { critical: 1, high: 6, medium: 12 }, lastScan: '2026-06-23', risk: 'low' },
    { name: 'ML Pipeline v2.0', packages: 1370, compliance: 97.2, vulns: { critical: 0, high: 2, medium: 5 }, lastScan: '2026-06-22', risk: 'low' }
  ];

  // ──────────────────────────────────────────────
  // Trend Data (last 30 days)
  // ──────────────────────────────────────────────
  const trendData = {
    labels: Array.from({ length: 30 }, (_, i) => {
      const d = new Date('2026-06-24');
      d.setDate(d.getDate() - (29 - i));
      return d.toISOString().slice(5, 10);
    }),
    compliance: [91.2, 91.4, 91.3, 91.5, 91.8, 92.0, 92.1, 92.3, 92.0, 91.9, 92.2, 92.5, 92.8, 93.0, 93.1, 93.0, 93.2, 93.5, 93.4, 93.7, 93.8, 94.0, 94.1, 93.9, 94.2, 94.3, 94.5, 94.6, 94.7, 94.7],
    vulnerabilities: [78, 82, 80, 79, 76, 74, 72, 75, 73, 70, 68, 71, 69, 65, 63, 67, 64, 62, 60, 58, 61, 59, 55, 54, 52, 50, 49, 48, 47, 47],
    packages: [12100, 12120, 12150, 12180, 12200, 12230, 12260, 12290, 12310, 12340, 12370, 12400, 12420, 12450, 12480, 12510, 12540, 12570, 12590, 12620, 12650, 12680, 12700, 12730, 12760, 12790, 12800, 12820, 12840, 12847]
  };

  // ──────────────────────────────────────────────
  // Ecosystem Breakdown
  // ──────────────────────────────────────────────
  const ecosystemBreakdown = [
    { ecosystem: 'npm', count: 4512, percentage: 35.1, color: '#f87171' },
    { ecosystem: 'PyPI', count: 3201, percentage: 24.9, color: '#60a5fa' },
    { ecosystem: 'Maven', count: 2456, percentage: 19.1, color: '#fbbf24' },
    { ecosystem: 'NuGet', count: 1234, percentage: 9.6, color: '#818cf8' },
    { ecosystem: 'Go', count: 678, percentage: 5.3, color: '#4ade80' },
    { ecosystem: 'Cargo', count: 432, percentage: 3.4, color: '#fb923c' },
    { ecosystem: 'Other', count: 334, percentage: 2.6, color: '#9ca3af' }
  ];

  return {
    kciData,
    licenseDistribution,
    licenseCategoryBreakdown,
    vulnerabilitySummary,
    topVulnerablePackages,
    events,
    policyRules,
    products,
    trendData,
    ecosystemBreakdown
  };

})();
