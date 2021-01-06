import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import backgroundImage from './../components/backgroundHome.jpeg'

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
      Ambil, Baiki, Hantar
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Hanya DUDUK di rumah. Kami ambil, baiki dan hantar.
      </Typography>
      {/* <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/premium-themes/onepirate/sign-up/"
      >
        Hubungi Kami
      </Button> */}
      <div>
      <a href="https://www.carousell.com.my/p/repair-tv-1022118169/?t-id=4469870_1596175378967&t-referrer_request_id=3zOy08Lcw4ZgEBOW" className={classes.icon}>
        <img src={require("./../graphic/carousell65px.png")} alt="Carousell" />
      </a>
      </div>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
