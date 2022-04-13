import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import styles from './CollectionGrid.module.css'

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: '10rem',
  color: theme.palette.text.secondary,
  borderRadius: '10px'
}));

export default function CollectionGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Item className={styles.collectionCard}>Collection <br /> name</Item>
        </Grid>
        <Grid item xs={7}>
          <Item className={styles.collectionCard}>Collection <br /> name</Item>
        </Grid>
        <Grid item xs={7}>
          <Item className={styles.collectionCard}>Collection <br /> name</Item>
        </Grid>
        <Grid item xs={5}>
          <Item className={styles.collectionCard}>Collection <br /> name</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
