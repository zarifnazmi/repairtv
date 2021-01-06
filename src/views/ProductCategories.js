import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import galeri1 from './../graphic/galeri1.jpeg';
import galeri4 from './../graphic/galeri4.jpeg';
import galeri5 from './../graphic/galeri5.jpeg';
import galeri6 from './../graphic/galeri6.jpeg';
import galeri7 from './../graphic/galeri7.jpeg';
import galeri8 from './../graphic/galeri8.jpeg';
import galeri9 from './../graphic/galeri9.jpeg';
import galeri10 from './../graphic/galeri10.jpeg';
import galeri11 from './../graphic/galeri11.jpeg';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
      galeri1,
      title: 'Picture 1',
      width: '40%',
    },
    {
      url:
        galeri10,
      title: 'Picture 2',
      width: '20%',
    },
    {
      url:
        galeri7,
      title: 'Picture 3',
      width: '40%',
    },
    {
      url:
        galeri4,
      title: 'Picture 4',
      width: '38%',
    },
    {
      url:
        galeri5,
      title: 'Picture 5',
      width: '38%',
    },
    {
      url:
        galeri8,
      title: 'Picture 6',
      width: '24%',
    },
    {
      url:
        galeri9,
      title: 'Picture 7',
      width: '40%',
    },
    {
      url:
        galeri11,
      title: 'Picture 8',
      width: '20%',
    },
    {
      url:
        galeri6,
      title: 'Picture 9',
      width: '40%',
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Galeri
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
