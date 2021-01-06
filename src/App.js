import React from 'react';
import withRoot from './withRoot';
import AppAppBar from './views/AppAppBar';
import ProductHero from './views/ProductHero';
import ProductValues from './views/ProductValues';
import ProductCategories from './views/ProductCategories';
import ProductHowItWorks from './views/ProductHowItWorks';
// import ProductCTA from './views/ProductCTA';
import ProductSmokingHero from './views/ProductSmokingHero';
import AppFooter from './views/AppFooter';

function App() {
    return (
        <React.Fragment>
        <AppAppBar />
        <ProductHero />
        <ProductValues />
        <ProductCategories />
        <ProductHowItWorks />
        {/* <ProductCTA /> */}
        <ProductSmokingHero />
        <AppFooter />
        </React.Fragment>
    );
}

export default withRoot(App);