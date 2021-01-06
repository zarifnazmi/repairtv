import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../components/Typography';
// import { requirePropFactory } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(9),
  },
  button: {
    border: '4px solid currentColor',
    borderRadius: 0,
    height: 'auto',
    padding: theme.spacing(2, 5),
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  icon: {
    width: 60,
  },
});

function ProductSmokingHero(props) {
  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
      <Button className={classes.button}>
        <Typography variant="h4" component="span">
          Hubungi Kami
        </Typography>
      </Button>
      <Typography variant="subtitle1" className={classes.link} align="center">
        {'Cheras / Serdang / Balakong / Bangi/ Kajang/ Putrajaya/ Cyberjaya/ Seri Kembangan / Pandan / Ampang / '}
        {'Sungai Long / Bandar Mahkota Cheras / Equin/ Sg Besi / Bukit Jalil / Puchong / Hulu Langat/ Petaling Jaya/ Shah Alam'}
      </Typography>
      <div>
        <a href="https://wa.me/601127379419?text=Saya%20ada%20tv%20rosak%20untuk%20repair" className={classes.icon}>
        <img src={require("./../graphic/whatsapp75px.png")} alt="Whatsapp" />
      </a>
      <a href="https://www.carousell.com.my/p/repair-tv-1022118169/?t-id=4469870_1596175378967&t-referrer_request_id=3zOy08Lcw4ZgEBOW" className={classes.icon}>
        <img src={require("./../graphic/carousell65px.png")} alt="Carousell" />
      </a>
      </div>
    </Container>
  );
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductSmokingHero);
