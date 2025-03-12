
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const SalesforceReport: React.FC = () => {
  const reportRef = useRef<HTMLDivElement>(null);

  return (
    <div className="pdf-container" ref={reportRef}>
      {/* Page 1: Overview */}
      <section className="pdf-page">
        <header className="company-header">
          <div className="company-logo-section">
            <div className="company-logo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="70" height="70">
                <rect width="100%" height="100%" fill="#009EDB" />
                <path d="M65.3,52.2c-0.6-0.3-1.2-0.3-1.7-0.3c-1.6,0-2.8,0.9-2.8,2.2c0,0.6,0.3,1.1,0.9,1.5c0.5,0.4,1.1,0.7,1.8,0.9l0.7,0.2c0.8,0.3,1.5,0.6,1.5,1.2c0,0.7-0.7,1.1-1.6,1.1c-0.8,0-1.5-0.3-2.1-0.7l-0.7,0.8c0.8,0.7,1.9,1,2.9,1c1.7,0,2.9-0.9,2.9-2.3c0-1.3-1.2-1.9-2.2-2.3l-0.7-0.2c-0.6-0.2-1.2-0.5-1.2-1.1c0-0.6,0.6-1,1.3-1c0.7,0,1.4,0.3,1.9,0.7L65.3,52.2z" fill="#fff" />
                <path d="M51.1,55.8c0-0.6,0.2-1.1,0.6-1.5c0.4-0.4,0.9-0.6,1.5-0.6c0.6,0,1.1,0.2,1.5,0.6l0.7-0.7c-0.6-0.6-1.3-0.9-2.2-0.9c-0.8,0-1.6,0.3-2.1,0.9c-0.6,0.6-0.9,1.3-0.9,2.1c0,0.8,0.3,1.6,0.9,2.1c0.6,0.6,1.3,0.9,2.1,0.9c0.9,0,1.7-0.3,2.2-0.9l-0.7-0.7c-0.4,0.4-0.9,0.6-1.5,0.6c-0.6,0-1.1-0.2-1.5-0.6C51.3,56.9,51.1,56.4,51.1,55.8z" fill="#fff" />
                <path d="M44.5,55.8c0-0.8-0.3-1.6-0.9-2.1c-0.6-0.6-1.3-0.9-2.1-0.9c-0.8,0-1.6,0.3-2.1,0.9c-0.6,0.6-0.9,1.3-0.9,2.1c0,0.8,0.3,1.6,0.9,2.1c0.6,0.6,1.3,0.9,2.1,0.9c0.8,0,1.6-0.3,2.1-0.9C44.2,57.4,44.5,56.6,44.5,55.8z M41.5,57.8c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5c0-0.6,0.2-1.1,0.6-1.5c0.4-0.4,0.9-0.6,1.5-0.6c0.6,0,1.1,0.2,1.5,0.6c0.4,0.4,0.6,0.9,0.6,1.5c0,0.6-0.2,1.1-0.6,1.5C42.6,57.6,42.1,57.8,41.5,57.8z" fill="#fff" />
                <path d="M57.9,55.8c0-0.8-0.3-1.6-0.9-2.1c-0.6-0.6-1.3-0.9-2.1-0.9c-0.8,0-1.6,0.3-2.1,0.9c-0.6,0.6-0.9,1.3-0.9,2.1c0,0.8,0.3,1.6,0.9,2.1c0.6,0.6,1.3,0.9,2.1,0.9c0.5,0,0.9-0.1,1.3-0.3c0.4-0.2,0.7-0.4,1-0.7l-0.7-0.7c-0.4,0.4-0.9,0.6-1.5,0.6c-0.5,0-0.9-0.1-1.3-0.4c-0.4-0.3-0.6-0.6-0.7-1.1h5.1C57.9,56.1,57.9,55.9,57.9,55.8z M52.8,55.2c0.1-0.4,0.3-0.8,0.6-1.1c0.3-0.3,0.7-0.4,1.2-0.4c0.5,0,0.9,0.1,1.2,0.4c0.3,0.3,0.5,0.6,0.6,1.1H52.8z" fill="#fff" />
                <path d="M36.2,53.6c-0.4-0.5-1-0.8-1.7-0.8c-0.8,0-1.5,0.3-2,1V51h-1v7.6h1v-3.3c0-0.6,0.2-1.1,0.5-1.5c0.4-0.4,0.8-0.6,1.4-0.6c0.5,0,0.9,0.2,1.2,0.5c0.3,0.3,0.4,0.8,0.4,1.3v3.5h1v-3.7C37,54.9,36.7,54.1,36.2,53.6z" fill="#fff" />
              </svg>
            </div>
            <div className="company-title">
              <h1>Salesforce</h1>
              <div className="social-icons">
                <span className="social-icon">□</span>
                <span className="social-icon">in</span>
              </div>
            </div>
          </div>
          <div className="company-description">
            <p>Cloud-based CRM and social collaboration solutions for enterprises.</p>
            <p>1999, San Francisco (United States) | Public</p>
          </div>
          <div className="track-score">
            <div className="score-circle">
              <span>93</span>
            </div>
            <p>Tracxn Score</p>
          </div>
        </header>

        <div className="main-content">
          <div className="key-metrics">
            <h2>Key Metrics of Salesforce</h2>
            <div className="metrics-grid">
              <div className="metric-item">
                <h3>Total Equity Funding</h3>
                <p className="metric-value">$52M</p>
                <p className="metric-detail">in 4 rounds</p>
              </div>
              <div className="metric-item">
                <h3>Latest Funding Round</h3>
                <p className="metric-value">Post IPO</p>
                <p className="metric-detail">May 23, 2023</p>
              </div>
              <div className="metric-item">
                <h3>Investors</h3>
                <p className="metric-value">Credit Suisse</p>
                <p className="metric-detail">& 34 more</p>
              </div>
              <div className="metric-item">
                <h3>Ranked</h3>
                <p className="metric-value">1st</p>
                <p className="metric-detail">among 2,420 Competitors</p>
              </div>
              <div className="metric-item">
                <h3>Employee Count</h3>
                <p className="metric-value">79,390</p>
                <p className="metric-detail">+8% YOY as on Jan 31, 2023</p>
              </div>
              <div className="metric-item">
                <h3>Investment & Acquisition</h3>
                <p className="metric-value">Thunder</p>
                <p className="metric-detail">& 192 more</p>
              </div>
              <div className="metric-item">
                <h3>Similar Companies</h3>
                <p className="metric-value">HubSpot</p>
                <p className="metric-detail">& 2.06K more</p>
              </div>
              <div className="metric-item">
                <h3>Exit Details</h3>
                <p className="metric-value">Public</p>
                <p className="metric-detail">Jun 23, 2004</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>About Salesforce</h2>
            <p>
              Cloud-based CRM and social collaboration solutions for enterprises. The platform offers an enterprise cloud computing company that provides business software on a subscription basis. It offers products catering to the sales, service, and marketing needs of enterprises through the cloud and mobile app. In addition to CRM tools, it also offers analytics, IoT, and forecasting collaboration tools. It provides interactive services such as sharing knowledge, task management, and connecting employees with files and data.
            </p>

            <h3>Sectors</h3>
            <div className="sectors">
              <span className="sector-tag">Sales Force Automation</span>
            </div>

            <h3>Company Details</h3>
            <div className="company-details">
              <div className="detail-row">
                <span className="detail-label">Website</span>
                <span className="detail-value"><a href="http://www.salesforce.com/?bc=HA" target="_blank" rel="noopener noreferrer">www.salesforce.com/?bc=HA</a></span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Social</span>
                <span className="detail-value social-links">
                  <span className="social-link">in</span>
                  <span className="social-link">f</span>
                  <span className="social-link">t</span>
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Email ID</span>
                <span className="detail-value">ap_sales@salesforce.com</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Phone Number</span>
                <span className="detail-value">+1-8004207332</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Key People</span>
                <span className="detail-value">Marc Benioff · Dave Moellenhoff · Parker Harris · Frank Dominguez · Arun Kumar Parameswaran · Katie Schwartz Thiry · Ken Asada · Loic Amin Rahmouni · Susan Kimberlin</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">First Covered On</span>
                <span className="detail-value">Mar 26, 2015</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Subsidiaries</span>
                <span className="detail-value">Tableau, SteelBrick, Desk.com, Salesforce Maps, Diftco +16 more</span>
              </div>
            </div>
          </div>
        </div>

        <div className="page-footer">
          <div className="page-number">1</div>
          <div className="footer-text">Date of Report Generation: 11th Feb, 2025</div>
          <div className="copyright">Copyright © 2025, Tracxn Technologies Limited. All rights reserved.</div>
        </div>
      </section>

      {/* Page 2: Legal Entities */}
      <section className="pdf-page">
        <h2 className="section-title">Associated Legal Entities</h2>
        
        <div className="legal-entities-table">
          <table>
            <thead>
              <tr>
                <th>Legal Entity Name</th>
                <th>Location</th>
                <th>Date of Incorporation</th>
                <th>Latest Financials (USD)</th>
                <th>Latest Employee Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SALESFORCE INC<br />CIN: 94-3320693</td>
                <td>United States</td>
                <td>Dec 31, 1998</td>
                <td>-</td>
                <td>36,689</td>
              </tr>
              <tr>
                <td>SALESFORCE.COM, INC<br />CIN: 94-3320693</td>
                <td>United States</td>
                <td>Feb 02, 1999</td>
                <td>-</td>
                <td>41,578</td>
              </tr>
              <tr>
                <td>BUSINESSFIELD MANAGEMENT, S.R.O.<br />CIN: 26025678</td>
                <td>Czech Republic</td>
                <td>Aug 11, 2000</td>
                <td>-</td>
                <td>409</td>
              </tr>
              <tr>
                <td>SALESFORCE.COM INC<br />CIN: 1108524</td>
                <td>United States</td>
                <td>Nov 21, 2005</td>
                <td>Revenue: 13.3B (as on Jan 31, 2019)<br />Net Profit: 1.11B (as on Jan 31, 2019)</td>
                <td>-</td>
              </tr>
              <tr>
                <td>SALESMANAGEMENT<br />CIN: 40104991666</td>
                <td>Latvia</td>
                <td>Jan 09, 2012</td>
                <td>Revenue: 80.2K (as on Dec 31, 2023)<br />Net Profit: 25.3K (as on Dec 31, 2023)</td>
                <td>2</td>
              </tr>
              <tr>
                <td>THINKCLOUD S.R.O.<br />CIN: 06551371</td>
                <td>Czech Republic</td>
                <td>Oct 25, 2017</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>POWERFUL ADVANTAGE S.R.O.<br />CIN: 07755996</td>
                <td>Czech Republic</td>
                <td>Jan 02, 2019</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>STEELBRICK INC<br />CIN: 46-3377210</td>
                <td>United States</td>
                <td>Dec 26, 999</td>
                <td>-</td>
                <td>51</td>
              </tr>
              <tr>
                <td>SALESFORCE, INC.<br />CIN: 94-3320693</td>
                <td>United States</td>
                <td>-</td>
                <td>Revenue: 31.4B (as on Jan 31, 2023)<br />Net Profit: 208M (as on Jan 31, 2023)</td>
                <td>79,390</td>
              </tr>
              <tr>
                <td>SALESFORCE.COM INDIA PRIVATE LIMITED<br />CIN: U72200KA2005PTC037338</td>
                <td>India</td>
                <td>-</td>
                <td>Revenue: 835M (as on Mar 31, 2023)<br />Net Profit: 79.2M (as on Mar 31, 2023)</td>
                <td>13,390</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="coverage-areas">
          <h2 className="section-title">Coverage Areas of Salesforce</h2>
          <div className="coverage-item">
            <span className="coverage-icon">▣</span>
            <span>Enterprise Applications {'>'}  Sales Force Automation {'>'}  CRM {'>'}  Enterprise Suite {'>'}  Multi-Industry</span>
          </div>

          <h3>Other Coverage Areas</h3>
          <div className="other-coverage">
            <div className="coverage-group">
              <h4>Other Markets</h4>
              <div className="coverage-tags">
                <span className="coverage-tag">⟳ SaaS</span>
                <span className="coverage-tag">⟳ Global SaaS</span>
                <span className="coverage-tag">⟳ Enterprise Software</span>
              </div>
            </div>
            <div className="coverage-group">
              <h4>Geographies</h4>
              <div className="coverage-tags">
                <span className="coverage-tag">⟳ Enterprise Tech - US</span>
                <span className="coverage-tag">⟳ SaaS - US</span>
                <span className="coverage-tag">⟳ Enterprise Tech - California</span>
              </div>
            </div>
            <div className="coverage-group">
              <h4>Trending Theme</h4>
              <div className="coverage-tags">
                <span className="coverage-tag">⟳ CRM for Enterprises</span>
              </div>
            </div>
            <div className="coverage-group">
              <h4>Team Background</h4>
              <div className="coverage-tags">
                <span className="coverage-tag">⟳ Cornell University</span>
                <span className="coverage-tag">⟳ Salesforce</span>
                <span className="coverage-tag">⟳ Serial Entrepreneur</span>
                <span className="coverage-tag">⟳ Ex-VC Founders</span>
              </div>
            </div>
            <div className="coverage-group">
              <h4>Generic List</h4>
              <div className="coverage-tags">
                <span className="coverage-tag">⟳ Fortune 500</span>
                <span className="coverage-tag">⟳ Global 2000</span>
              </div>
            </div>
            <div className="coverage-group">
              <h4>Special Flags</h4>
              <div className="coverage-tags">
                <span className="coverage-tag">Tech</span>
                <span className="coverage-tag">Enterprise</span>
                <span className="coverage-tag">SaaS</span>
                <span className="coverage-tag">Software</span>
              </div>
            </div>
          </div>
        </div>

        <div className="exits-section">
          <h2 className="section-title">Exits of Salesforce</h2>
          <h3>IPO Info</h3>
          <div className="ipo-table">
            <table>
              <thead>
                <tr>
                  <th>IPO Date</th>
                  <th>Listed Exchanges</th>
                  <th>Issue Price at IPO</th>
                  <th>No. of outstanding shares at IPO</th>
                  <th>Market Capitalization at IPO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jun 23, 2004</td>
                  <td>New York Stock Exchange (NYSE - CRM)</td>
                  <td>$11</td>
                  <td>101,256,880</td>
                  <td>$1.11B</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="page-footer">
          <div className="page-number">2</div>
          <div className="footer-text">Date of Report Generation: 11th Feb, 2025</div>
          <div className="copyright">Copyright © 2025, Tracxn Technologies Limited. All rights reserved.</div>
        </div>
      </section>

      {/* Page 3: Funding & Investors */}
      <section className="pdf-page">
        <h2 className="section-title">Funding & Investors of Salesforce</h2>
        
        <div className="funding-summary">
          <div className="funding-item">
            <h3>Funding Rounds</h3>
            <p>15</p>
            <p>4 Early-Stage / 11 Post IPO</p>
          </div>
          <div className="funding-item">
            <h3>Total Equity Funding</h3>
            <p>$52M</p>
            <p>$35M Largest Round</p>
          </div>
          <div className="funding-item">
            <h3>Investors</h3>
            <p>35</p>
            <p>33 Institutionals / 2 Angels</p>
          </div>
          <div className="funding-item">
            <h3>Post-Money Valuation</h3>
            <p>-</p>
          </div>
          <div className="funding-item">
            <h3>Funding Multiple (EV/Revenue)</h3>
            <p>-</p>
          </div>
        </div>

        <div className="funding-rounds">
          <h3>All Funding Rounds</h3>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Round Name</th>
                <th>Amount</th>
                <th>Valuation</th>
                <th>Revenue</th>
                <th>Multiple</th>
                <th>Investors & Facilitators</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>May 23, 2023</td>
                <td>Post IPO</td>
                <td>Undisclosed</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>Institutional: Waytone</td>
              </tr>
              <tr>
                <td>Mar 08, 2020</td>
                <td>Post IPO</td>
                <td>$83.0M</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>Institutional: Solstein Capital</td>
              </tr>
              <tr>
                <td>Aug 20, 2018</td>
                <td>Post IPO</td>
                <td>$317.0M</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Jan 16, 2018</td>
                <td>Post IPO</td>
                <td>$11.3M</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Nov 01, 2016</td>
                <td>Post IPO</td>
                <td>$348.0M</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Sep 15, 2016</td>
                <td>Post IPO</td>
                <td>$26.3M</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Sep 01, 2016</td>
                <td>Post IPO</td>
                <td>$93.3M</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Aug 26, 2016</td>
                <td>Post IPO</td>
                <td>$582.0M</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Aug 03, 2014</td>
                <td>Post IPO</td>
                <td>$392.0M</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Jun 12, 2013</td>
                <td>Post IPO</td>
                <td>$78.9M</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Jan 19, 2010</td>
                <td>Post IPO</td>
                <td>$575.0M</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>2003</td>
                <td>Series B</td>
                <td>Undisclosed</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>Institutional: Emergence Capital</td>
              </tr>
              <tr>
                <td>2002</td>
                <td>Series B</td>
                <td>Undisclosed</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>Institutional: New Enterprise Associates</td>
              </tr>
              <tr>
                <td>May 08, 2000</td>
                <td>Series B</td>
                <td>$35.0M</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>Institutional: Hambrecht Capital<br />Corporate: Credit Suisse</td>
              </tr>
              <tr>
                <td>Dec 06, 1999</td>
                <td>Series A</td>
                <td>$17.0M</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
          
          <div className="other-investors">
            <p><strong>Other Investors:</strong> Elliott Management, Kaplan Group Investments, Glynn Capital, TeleSoft Partners, Artiman and +22 more</p>
            <p><strong>Other Angels:</strong> Halsey Minor and Igor Sill</p>
          </div>
        </div>

        <div className="investors-section">
          <h3>Investors</h3>
          <table className="investors-table">
            <thead>
              <tr>
                <th>Investor</th>
                <th colSpan={2}>Rounds Invested</th>
                <th>First Investment in Salesforce</th>
                <th>Other Portfolio Companies</th>
                <th>Portfolio Key Metrics</th>
                <th>Investment Score</th>
              </tr>
              <tr>
                <th></th>
                <th>Lead</th>
                <th>Total</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">NEA</div>
                    <div className="investor-name">New Enterprise Associates</div>
                  </div>
                </td>
                <td>1</td>
                <td>1</td>
                <td>Series B - 2002</td>
                <td>Workday, Box [+1136]</td>
                <td>IPO: 120 Acq: 462 Unicorns: 55</td>
                <td>
                  <div className="score-circle">75</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">EC</div>
                    <div className="investor-name">Emergence Capital</div>
                  </div>
                </td>
                <td>1</td>
                <td>1</td>
                <td>Series B - 2003</td>
                <td>Box, Zoom [+107]</td>
                <td>IPO: 7 Acq: 41 Unicorns: 11</td>
                <td>
                  <div className="score-circle">71</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="page-footer">
          <div className="page-number">3</div>
          <div className="footer-text">Date of Report Generation: 11th Feb, 2025</div>
          <div className="copyright">Copyright © 2025, Tracxn Technologies Limited. All rights reserved.</div>
        </div>
      </section>

      {/* Page 4: Investor Table Extension */}
      <section className="pdf-page">
        <div className="investors-section continuation">
          <table className="investors-table">
            <tbody>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">HC</div>
                    <div className="investor-name">Hambrecht Capital</div>
                  </div>
                </td>
                <td>1</td>
                <td>1</td>
                <td>Series B - May 08, 2000</td>
                <td>ACTIVE Network, Splashtop [+28]</td>
                <td>IPO: 2 Acq: 7 Unicorns: 2</td>
                <td>
                  <div className="score-circle">60</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">KGI</div>
                    <div className="investor-name">Kaplan Group Investments</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>JD.com, Facebook [+61]</td>
                <td>IPO: 18 Acq: 25 Unicorns: 7</td>
                <td>
                  <div className="score-circle">79</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">GC</div>
                    <div className="investor-name">Glynn Capital</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>Bird, Facebook [+97]</td>
                <td>IPO: 22 Acq: 35 Unicorns: 27</td>
                <td>
                  <div className="score-circle">78</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">AR</div>
                    <div className="investor-name">Artiman</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>Cisco, Five9 [+82]</td>
                <td>IPO: 14 Acq: 35 Unicorns: 2</td>
                <td>
                  <div className="score-circle">77</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">SP</div>
                    <div className="investor-name">Sunbridge Partners</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>Marketo, Kyriba [+41]</td>
                <td>IPO: 10 Acq: 11 Unicorns: 0</td>
                <td>
                  <div className="score-circle">74</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">WV</div>
                    <div className="investor-name">Windspeed Ventures</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>OpenTable, ACTIVE Network [+47]</td>
                <td>IPO: 4 Acq: 32 Unicorns: 1</td>
                <td>
                  <div className="score-circle">73</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">MO</div>
                    <div className="investor-name">Morgenthaler</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>Intuit, T-Mobile [+236]</td>
                <td>IPO: 17 Acq: 105 Unicorns: 1</td>
                <td>
                  <div className="score-circle">73</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">SMC</div>
                    <div className="investor-name">Spring Mountain Capital</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>Maven, Everside Health [+56]</td>
                <td>IPO: 7 Acq: 23 Unicorns: 1</td>
                <td>
                  <div className="score-circle">73</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">SI</div>
                    <div className="investor-name">Scheuermann Investment</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>Splunk, Zoom [+10]</td>
                <td>IPO: 13 Acq: 3 Unicorns: 0</td>
                <td>
                  <div className="score-circle">71</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">CV</div>
                    <div className="investor-name">Canvas Ventures</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>Intuit, Upwork [+85]</td>
                <td>IPO: 6 Acq: 29 Unicorns: 5</td>
                <td>
                  <div className="score-circle">70</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">AI</div>
                    <div className="investor-name">AITV</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>Uber, Addepar [+31]</td>
                <td>IPO: 4 Acq: 12 Unicorns: 2</td>
                <td>
                  <div className="score-circle">70</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">SC</div>
                    <div className="investor-name">Slayton Capital</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>Google, Bloom Energy [+11]</td>
                <td>IPO: 3 Acq: 4 Unicorns: 0</td>
                <td>
                  <div className="score-circle">67</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">AP</div>
                    <div className="investor-name">Amplify Partners</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>Splunk, Databricks [+149]</td>
                <td>IPO: 4 Acq: 45 Unicorns: 10</td>
                <td>
                  <div className="score-circle">65</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">FVP</div>
                    <div className="investor-name">Framework Venture Partners</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>Cvent, Wattpad [+44]</td>
                <td>IPO: 3 Acq: 13 Unicorns: 2</td>
                <td>
                  <div className="score-circle">65</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">BV</div>
                    <div className="investor-name">Bonfire Ventures</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>Shift Technologies, Scopely [+158]</td>
                <td>IPO: 3 Acq: 51 Unicorns: 8</td>
                <td>
                  <div className="score-circle">64</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">8VC</div>
                    <div className="investor-name">8VC</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>Ramp, Oculus [+315]</td>
                <td>IPO: 13 Acq: 29 Unicorns: 29</td>
                <td>
                  <div className="score-circle">63</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">GI</div>
                    <div className="investor-name">Globivest</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>Uber, Addepar [+79]</td>
                <td>IPO: 5 Acq: 10 Unicorns: 2</td>
                <td>
                  <div className="score-circle">62</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">OVO</div>
                    <div className="investor-name">OVO Fund</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>Addepar, Wish Shopping [+80]</td>
                <td>IPO: 2 Acq: 20 Unicorns: 4</td>
                <td>
                  <div className="score-circle">59</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">UV</div>
                    <div className="investor-name">Uncorrelated Ventures</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>Databricks, unGrad [+186]</td>
                <td>IPO: 3 Acq: 23 Unicorns: 16</td>
                <td>
                  <div className="score-circle">58</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">SOC</div>
                    <div className="investor-name">Stage One Capital</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>Bonobos, SeatGeek [+22]</td>
                <td>IPO: 1 Acq: 9 Unicorns: 1</td>
                <td>
                  <div className="score-circle">49</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">SBGV</div>
                    <div className="investor-name">Sun Bridge Global Ventures</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>WHIIL, Peatix [+149]</td>
                <td>IPO: 5 Acq: 0 Unicorns: 0</td>
                <td>
                  <div className="score-circle">49</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="page-footer">
          <div className="page-number">4</div>
          <div className="footer-text">Date of Report Generation: 11th Feb, 2025</div>
          <div className="copyright">Copyright © 2025, Tracxn Technologies Limited. All rights reserved.</div>
        </div>
      </section>

      {/* Page 5: More Investors */}
      <section className="pdf-page">
        <div className="investors-section continuation">
          <table className="investors-table">
            <tbody>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">MBT</div>
                    <div className="investor-name">Mercuria BizTech</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>Knotel, Luup [+20]</td>
                <td>IPO: 2 Acq: 1 Unicorns: 0</td>
                <td>
                  <div className="score-circle">38</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="investor-categories">
          <h3 className="category-header">PE</h3>
          <table className="investors-table">
            <tbody>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">KGI</div>
                    <div className="investor-name">Kaplan Group Investments</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>JD.com, Facebook [+61]</td>
                <td>IPO: 18 Acq: 25 Unicorns: 7</td>
                <td>
                  <div className="score-circle">79</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">TP</div>
                    <div className="investor-name">TeleSoft Partners</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>Facebook, Stripe [+74]</td>
                <td>IPO: 13 Acq: 34 Unicorns: 3</td>
                <td>
                  <div className="score-circle">77</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">MT</div>
                    <div className="investor-name">Meritech</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>Box, Facebook [+185]</td>
                <td>IPO: 23 Acq: 93 Unicorns: 33</td>
                <td>
                  <div className="score-circle">76</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">MO</div>
                    <div className="investor-name">Morgenthaler</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>Intuit, T-Mobile [+236]</td>
                <td>IPO: 17 Acq: 105 Unicorns: 1</td>
                <td>
                  <div className="score-circle">73</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">ECP</div>
                    <div className="investor-name">Emergent Capital Partners</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>Box, MTN [+6]</td>
                <td>IPO: 5 Acq: 2 Unicorns: 0</td>
                <td>
                  <div className="score-circle">68</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">SC</div>
                    <div className="investor-name">Solstein Capital</div>
                  </div>
                </td>
                <td>0</td>
                <td>1</td>
                <td>Post IPO - Mar 08, 2020</td>
                <td>Investor does not have any other portfolio companies</td>
                <td>IPO: 1 Acq: 0 Unicorns: 0</td>
                <td>
                  <div className="score-circle">14</div>
                </td>
              </tr>
            </tbody>
          </table>

          <h3 className="category-header">Other Institutions</h3>
          <table className="investors-table">
            <tbody>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">CS</div>
                    <div className="investor-name">Credit Suisse</div>
                  </div>
                </td>
                <td>1</td>
                <td>1</td>
                <td>Series B - May 08, 2000</td>
                <td>Brex, FuboTV [+394]</td>
                <td>IPO: 62 Acq: 139 Unicorns: 15</td>
                <td>
                  <div className="score-circle">78</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">EM</div>
                    <div className="investor-name">Elliott Management</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>PayPal, eBay [+78]</td>
                <td>IPO: 38 Acq: 33 Unicorns: 0</td>
                <td>
                  <div className="score-circle">81</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">KGI</div>
                    <div className="investor-name">Kaplan Group Investments</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>JD.com, Facebook [+61]</td>
                <td>IPO: 18 Acq: 25 Unicorns: 7</td>
                <td>
                  <div className="score-circle">79</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">SP</div>
                    <div className="investor-name">Sunbridge Partners</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>Marketo, Kyriba [+41]</td>
                <td>IPO: 10 Acq: 11 Unicorns: 0</td>
                <td>
                  <div className="score-circle">74</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">ICP</div>
                    <div className="investor-name">Inclusive Capital Partners</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>Crusoe and Arcadia</td>
                <td>IPO: 1 Acq: 0 Unicorns: 2</td>
                <td>
                  <div className="score-circle">27</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">NJF</div>
                    <div className="investor-name">NJF Capital</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>Investor does not have any other portfolio companies</td>
                <td>IPO: 1 Acq: 0 Unicorns: 0</td>
                <td>
                  <div className="score-circle">0</div>
                </td>
              </tr>
            </tbody>
          </table>

          <h3 className="category-header">Angel</h3>
          <table className="investors-table">
            <tbody>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">IS</div>
                    <div className="investor-name">Igor Sill</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>RedOwl</td>
                <td>IPO: 1 Acq: 1 Unicorns: 0</td>
                <td>
                  <div className="score-circle">35</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="investor-info">
                    <div className="investor-icon">HM</div>
                    <div className="investor-name">Halsey Minor</div>
                  </div>
                </td>
                <td>-</td>
                <td>-</td>
                <td>Unidentified</td>
                <td>Investor does not have any other portfolio companies</td>
                <td>IPO: 1 Acq: 0 Unicorns: 0</td>
                <td>
                  <div className="score-circle">14</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="page-footer">
          <div className="page-number">5</div>
          <div className="footer-text">Date of Report Generation: 11th Feb, 2025</div>
          <div className="copyright">Copyright © 2025, Tracxn Technologies Limited. All rights reserved.</div>
        </div>
      </section>

      {/* Page 6: People and Competitors */}
      <section className="pdf-page">
        <h2 className="section-title">People in Salesforce</h2>
        
        <div className="employee-section">
          <h3>Employee count</h3>
          <p className="data-source">Source: Labour filings</p>
          
          <div className="employee-chart-container">
            <div className="employee-chart">
              {/* Simple representation of the chart */}
              <div className="chart-line"></div>
            </div>
            <div className="employee-data">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Employee Count</th>
                    <th>YOY Growth</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jan '23</td>
                    <td>79,390</td>
                    <td className="growth-positive">8%↑</td>
                  </tr>
                  <tr>
                    <td>Jan '22</td>
                    <td>73,541</td>
                    <td className="growth-positive">30%↑</td>
                  </tr>
                  <tr>
                    <td>Jan '21</td>
                    <td>56,606</td>
                    <td className="growth-positive">16%↑</td>
                  </tr>
                  <tr>
                    <td>Jan '20</td>
                    <td>49,000</td>
                    <td className="growth-positive">40%↑</td>
                  </tr>
                  <tr>
                    <td>Jan '19</td>
                    <td>35,000</td>
                    <td className="growth-positive">21%↑</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="key-people">
          <h3>Founder and Key People</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Designation</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Marc Benioff</td>
                <td>Co-Founder & CEO</td>
                <td>Ex-Oracle, University of Southern California BSBA 1986</td>
              </tr>
              <tr>
                <td>Dave Moellenhoff</td>
                <td>Co-Founder & CTO</td>
                <td>Left Oracle with Benioff to become CTO & VP of Development, ex-ThreatSuite, Washington University in St. Louis BS 1992, Washington University in St. Louis - Olin Business School MBA 1994</td>
              </tr>
              <tr>
                <td>Parker Harris</td>
                <td>Co-Founder & CTO</td>
                <td>Ex-American Tire Distributors, Sealed Air Corporation, Wake Forest University BS 2017</td>
              </tr>
              <tr>
                <td>Frank Dominguez</td>
                <td>ex-Co-Founder</td>
                <td>Ex-VMware, Red Hat India, Madurai Kamaraj University BE 1993</td>
              </tr>
              <tr>
                <td>Arun Kumar Parameswaran</td>
                <td>Managing Director</td>
                <td>Ex-VMware, Red Hat India, Madurai Kamaraj University BE 1993</td>
              </tr>
              <tr>
                <td>Katie Schwartz Thiry</td>
                <td>Managing Director</td>
                <td>Ex-Crosslink Capital, Edison Software, Barclays Capital, Princeton University BA 2011, Northwestern University - Kellogg School of Management MBA 2020</td>
              </tr>
              <tr>
                <td>Ken Asada</td>
                <td>Partner</td>
                <td>Ex-MD Intel, IBM, Keio University BA 1997, London Business School MBA 2006</td>
              </tr>
              <tr>
                <td>Loic Amin Rahmouni</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Susan Kimberlin</td>
                <td>-</td>
                <td>Good And Useful, Tammerlin Vineyards, Forum Ventures, UC San Diego BA 1999</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="competitors">
          <h3>Competitors of Salesforce</h3>
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Active Competitors</th>
                <th>Funding</th>
                <th>Investors</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1st<br />among 2,420 Competitors</td>
                <td>2,064<br />20 Funded / 52 Exited</td>
                <td>$3B<br />271 Funding Rounds</td>
                <td>743<br />among 2,420 Competitors</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="page-footer">
          <div className="page-number">6</div>
          <div className="footer-text">Date of Report Generation: 11th Feb, 2025</div>
          <div className="copyright">Copyright © 2025, Tracxn Technologies Limited. All rights reserved.</div>
        </div>
      </section>
    </div>
  );
};

export default SalesforceReport;
