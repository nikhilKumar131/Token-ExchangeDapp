import { render } from "@testing-library/react";
import 'bulma/css/bulma.min.css';
import MetaMaskButton from "../pages/Metamsk";

function Navigation() {




    return (
        <div>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                {/* Buttons on the left side */}
                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item" href="http://localhost:3000/">
                            <img src="https://crypto.jobs/storage/company-logos/3KFREVsZQVyZDe1zYXMEDNbCFNlPIvPDAnhYqQCy.png" width="112" height="60" />
                        </a>

                        <a class="navbar-item is-hoverable" href="/">
                            Home
                        </a>

                        <a class="navbar-item is-hoverable" href="/About">
                            About
                        </a>



                    </div>

                    {/* Buttons on right side */}
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <MetaMaskButton/>
                                <a class="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a class="button is-light">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;