import React from "react";
import { Box, Container, Typography, makeStyles } from "@material-ui/core";
import Page from "./UI Elements/Page";
import NotFound from "../assets/images/adminimages/undraw_page_not_found_su7k.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  image: {
    marginTop: 50,
    display: "inline-block",
    maxWidth: "100%",
    width: 560
  }
}));

const NotFoundView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="404">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="md">
          <Typography
            align="center"
            style={{ color: "rgb(242, 101, 34)" }}
            variant="h2"
          >
            404: The page you are looking for isn’t here
          </Typography>
          <Typography align="center" color="textPrimary" variant="subtitle2">
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation
          </Typography>
          <Box textAlign="center">
            <img
              alt="Under development"
              className={classes.image}
              src={NotFound}
            />
          </Box>
        </Container>
      </Box>
    </Page>
  );
};

export default NotFoundView;
