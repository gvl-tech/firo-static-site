import React from "react"
import { Layout } from "../../infrastructure/layouts/Layout"
import "../../styles/branding.less"
import firoAcceptedCircle from "./assets/firo-accepted-circle.svg"
import firoAcceptedSqDark from "./assets/firo-accepted-sq-dark.svg"
import firoDonationsAcceptedCircle from "./assets/firo-donations-accepted-circle.svg"
import firoDonationsAcceptedSqDark from "./assets/firo-donations-accepted-sq-dark.svg"
import firoDonationsAcceptedTopRightCorner from "./assets/firo-donations-accepted-top-right-corner.svg"
import firoIconBlack from "./assets/firo-icon-black.svg"
import firoIconClear from "./assets/firo-icon-clear.svg"
import firoIconWhite from "./assets/firo-icon-white.svg"
import firoIcon from "./assets/firo-icon.svg"
import firoLogoBlack from "./assets/firo-logo-black.svg"
import firoLogoClear from "./assets/firo-logo-clear.svg"
import firoLogoWhiteText from "./assets/firo-logo-white-text.svg"
import firoLogoWhite from "./assets/firo-logo-white.svg"
import firoLogo from "./assets/firo-logo.svg"
import firoAcceptedHereRightTopCorner from "./assets/firo_badge_accepted_here_right_top_corner.svg"

const Branding = () => {
  return (
    <Layout>
      <div id="branding">
        <section class="page-intro section">
          <div class="row">
            <div class="col">
              <h1>Branding</h1>
            </div>
          </div>
        </section>

        <section class="tech-section brand">
          <div class="container">
            <div class="row">
              <div class="col head">
                <h2>our logo</h2>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h3>Logo & Icon</h3>
                <p>
                  We want our logo to always look clear and legible. Please
                  follow these simple recommendations regarding using the logo.
                  For more details, please{" "}
                  <a href="/firo-brand-guidelines.pdf">
                    read our brand guidelines (PDF)
                  </a>
                  .
                </p>
                <div class="row logo-brand">
                  <div class="col og">
                    <div class="img-wrap">
                      <img src={firoLogo} alt="Firo logo on white background" />
                    </div>
                    <p>
                      This is our awesome logo. Use this full-color version on
                      light backgrounds.
                    </p>
                  </div>
                  <div class="col dark">
                    <div class="img-wrap">
                      <img
                        src={firoLogoWhiteText}
                        alt="Firo logo on black background"
                      />
                    </div>
                    <p>
                      On dark backgrounds, use the full-color icon with white
                      text.
                    </p>
                  </div>
                  <div class="col color">
                    <div class="img-wrap">
                      <img
                        src={firoLogoWhite}
                        alt="Firo logo on dark gray background"
                      />
                    </div>
                    <p>
                      You can also use this all-white logo on dark or colored
                      backgrounds.
                    </p>
                  </div>
                  <div class="col gray">
                    <div class="img-wrap">
                      <img
                        src={firoLogoBlack}
                        alt="Firo logo on light gray background"
                      />
                    </div>
                    <p>This is our black logo - use it wisely!</p>
                  </div>
                </div>
                <div class="row icon-brand">
                  <div class="col og">
                    <img src={firoIcon} alt="Firo symbol on white background" />
                  </div>
                  <div class="col dark">
                    <img src={firoIcon} alt="Firo symbol on black background" />
                  </div>
                  <div class="col color">
                    <img
                      src={firoIconWhite}
                      alt="Firo symbol on dark gray background"
                    />
                  </div>
                  <div class="col gray">
                    <img
                      src={firoIconBlack}
                      alt="Firo symbol on light gray background"
                    />
                  </div>
                </div>
                <p class="dbtn">
                  <a class="btn-primary" href="/firo-logo-files.zip">
                    Download logo kit
                  </a>
                </p>
              </div>
            </div>
            <div class="row clearspace">
              <div class="col">
                <h3>Clear Space</h3>
                <p>
                  It is important to keep the logo clear of any other graphic
                  elements to ensure the logo visibility. That is why we need to
                  set a safe zone (clear space) around the logo that has to be
                  empty. To work out the clear space (x), take the height of the
                  logo and divide it in half.
                </p>
                <div class="row">
                  <div class="col">
                    <img src={firoLogoClear} alt="" />
                  </div>
                  <div class="col dark">
                    <img src={firoIconClear} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="tech-section">
          <div class="container">
            <div class="row">
              <div class="col head">
                <h2>badges</h2>
              </div>
            </div>
            <div class="row badges">
              <div class="col">
                <img
                  src={firoAcceptedCircle}
                  alt="Firo accepted here circle badge"
                />
                <a class="btn-secondary" href="/firo-accepted-circle-badge.zip">
                  Download kit
                </a>
              </div>
              <div class="col">
                <img
                  src={firoAcceptedSqDark}
                  alt="Firo accepted here rectangle badge"
                />
                <a class="btn-secondary" href="/firo-accepted-badge.zip">
                  Download kit
                </a>
              </div>
              <div class="col">
                <img
                  src={firoAcceptedHereRightTopCorner}
                  alt="Firo accepted here corner badge"
                />
                <a class="btn-secondary" href="/firo-accepted-corner-badge.zip">
                  Download kit
                </a>
              </div>
              <div class="col">
                <img
                  src={firoDonationsAcceptedCircle}
                  alt="Firo donations accepted here circle badge"
                />
                <a
                  class="btn-secondary"
                  href="/firo-donations-accepted-circle-badge.zip"
                >
                  Download kit
                </a>
              </div>
              <div class="col">
                <img
                  src={firoDonationsAcceptedSqDark}
                  alt="Firo donations accepted here rectangle badge"
                />
                <a
                  class="btn-secondary"
                  href="/firo-donations-accepted-badge.zip"
                >
                  Download kit
                </a>
              </div>
              <div class="col">
                <img
                  src={firoDonationsAcceptedTopRightCorner}
                  alt="Firo donations accepted here corner badge"
                />
                <a
                  class="btn-secondary"
                  href="/firo-donations-accepted-corner-badge.zip"
                >
                  Download kit
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Branding
