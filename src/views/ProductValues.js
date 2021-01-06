import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src={require("./../graphic/productCurvyLines.png")}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={require("./../graphic/broken.svg")}
                alt="tv repair"
              />
              <Typography variant="h6" className={classes.title}>
                Jenis kerosakan
              </Typography>
              <Typography variant="h5">
                {'Kami repair TV dari pelbagai jenama BERGANTUNG pada jenis kerosakan.'}
                {' Screen PECAH, CRACK, BERGARIS dan BERTOMPOK kami tidak dapat baiki'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={require("./../graphic/delivery-truck.svg")}
                alt="delivery truck"
              />
              <Typography variant="h6" className={classes.title}>
                Tidak perlu bersusah payah
              </Typography>
              <Typography variant="h5">
                {'Hanya laporkan kerosakan dan beritahu kami lokasi anda.'}
                {' Kami akan ambil TV di lokasi anda dan akan dipulangkan semula setelah TV 100% pulih.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={require("./../graphic/speech-bubble.svg")}
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                TV diagnosis & transport
              </Typography>
              <Typography variant="h5">
                {'Sekiranya tidak dapat dibaiki kami akan pulangkan semula TV anda, dan hanya RM50'}
                {' dikenakan untuk caj diagnosis dan transport (bergantung kepada lokasi anda)'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
