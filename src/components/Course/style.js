const styles = (theme) => {
  return {
    btnDetail: {
      marginTop: theme.spacing(3.5),
      padding: theme.spacing(1, 2),
      backgroundColor: theme.palette.background.grey.main,
      [theme.breakpoints.up('sm')]: {
        backgroundColor: 'yellow',
        color: '#000',
      },
      [theme.breakpoints.down('sm')]: {
        '&span': {
          fontSize: 50,
        },
        backgroundColor: 'yellow',
        color: '#000',
      },
    },
  };
};

export default styles;
