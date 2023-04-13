import React from "react"
import { Link } from "gatsby"
import { Layout } from "../../infrastructure/layouts/Layout"
import "../../styles/faq.less"

const Guides = () => {
  return (
    <Layout>
      <div id="faq">
        <section class="page-intro section">
          <div class="row">
            <div class="col">
              <h1>Guides</h1>
            </div>
          </div>
        </section>

        <section class="faq-nav">
          <div class="container">
            <ul class="row">
              <li>
                <Link to="#wallet-guides">Wallet</Link>
              </li>
              <li>
                <Link to="#mining-guides">Mining</Link>
              </li>
              <li>
                <Link to="#masternode-guides">Masternodes</Link>
              </li>
              <li>
                <Link to="#privacy-tech-guides">Privacy Tech</Link>
              </li>
              <li>
                <Link to="#defi">DeFi</Link>
              </li>
            </ul>
          </div>
        </section>

        <section class="faq-section" id="wallet-guides">
          <div class="container">
            <div class="row">
              <div class="col">
                <h2>Wallet</h2>
                <ul class="guides-list">
                  <li>
                    <Link to="/guides/common-problems">
                      Common wallet problems
                    </Link>
                  </li>
                  <li>
                    <Link to="/guides/backing-up-firo-wallet-with-recovery-seed-phrase.html">
                      How to backup your Firo wallet with a recovery seed phrase
                    </Link>
                  </li>
                  <li>
                    <Link to="/guides/reindex-wallet.html">
                      Reindexing your Firo wallet
                    </Link>
                  </li>
                  <li>
                    <Link to="/guides/using-ledger-with-firo.html">
                      How to Use Ledger With Firo
                    </Link>
                  </li>
                  <li>
                    <Link to="/guides/using-trezor-with-firo.html">
                      How to Use Trezor With Firo
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="faq-section" id="mining-guides">
          <div class="container">
            <div class="row">
              <div class="col">
                <h2>Mining</h2>
                <ul class="guides-list">
                  <li>
                    <Link to="/guides/how-to-mine-firo.html">
                      How to Mine Firo (FIRO) with FiroPoW
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="faq-section" id="masternode-guides">
          <div class="container">
            <div class="row">
              <div class="col">
                <h2>Masternode</h2>
                <ul class="guides-list">
                  <li>
                    <Link to="/guides/masternode-setup.html">
                      Firo masternode setup guide
                    </Link>
                  </li>
                  <li>
                    <Link to="/guides/masternode-upgrade.html">
                      Upgrading your Firo masternode
                    </Link>
                  </li>
                  <li>
                    <Link to="/guides/reindex-wallet.html">
                      Reindexing your Firo wallet
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="faq-section" id="privacy-tech-guides">
          <div class="container">
            <div class="row">
              <div class="col">
                <h2>Privacy Tech</h2>
                <ul class="guides-list">
                  <li>
                    <Link to="/guides/privacy-coin-comparison.html">
                      How Firo's Privacy Technology Compares to the Competition
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="faq-section" id="defi">
          <div class="container">
            <div class="row">
              <div class="col">
                <h2>DeFi</h2>
                <ul class="guides-list">
                  <li>
                    <Link to="/guides/liquidity-firo-pancakeswap.html">
                      How to Provide Liquidity for Firo on Pancakeswap
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Guides
