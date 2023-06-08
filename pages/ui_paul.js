import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Script from "next/script";

// import MUI components
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

export default function UI_PAUL() {
  return (
    <div className={styles.container}>
      <Head>
        <script src="http://localhost:8097"></script>

        <title>Travel RS</title>

        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
      </Head>
      <main>
        <h1 className={styles.title}>
          <Link href="/">Home</Link>
        </h1>
        <List
          sx={{
            width: "100%",
            //maxWidth: 360, <Item>xs=6 md=8</Item>
            bgcolor: "background.paper",
          }}
        >
          <Box sx={{ flexGrow: 1 }} className={styles.card}>
            <Grid container spacing={2}>
              <Grid xs={4} xl={4}>
                <Typography
                  variant="h4"
                  paddingX={3}
                  paddingY={7}
                  className={styles.card_title}
                >
                  Travel-RS
                </Typography>
              </Grid>
              <Grid xs={8} xl={8}>
                <Typography
                  variant="subtitle1"
                  paddingY={7}
                  className={styles.card_description}
                >
                  We offer you the best recommendations for your traveling in
                  major european cities.
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ flexGrow: 1 }} className={styles.card}>
            <Grid container spacing={2}>
              <Grid xs={4} xl={4}>
                <Typography
                  variant="h5"
                  paddingX={3}
                  paddingY={10}
                  className={styles.card_title}
                >
                  Travel Express
                </Typography>
              </Grid>
              <Grid xs={8} xl={8}>
                <Typography
                  variant="h6"
                  padding={4}
                  className={styles.travel_title}
                >
                  Where to go?
                </Typography>
                <Typography variant="subtitle1" padding={1}>
                  Type in the city you want to visit in order to get
                  recommendations for exiting POIs
                </Typography>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "30ch" },
                  }}
                  noValidate
                  autoComplete="off"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Try major cities like Paris, Munich ..."
                    variant="outlined"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1 }} className={styles.card}>
            <Grid container spacing={2}>
              <Grid xs={4} xl={4}>
                <Typography
                  variant="h5"
                  paddingX={3}
                  paddingY={10}
                  className={styles.card_title}
                >
                  Personal Recommendations
                </Typography>
              </Grid>
              <Grid xs={8} xl={8}>
                <Typography
                  variant="h6"
                  padding={4}
                  className={styles.travel_title}
                >
                  What are you looking for?
                </Typography>

                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "30ch" },
                  }}
                  noValidate
                  autoComplete="off"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TextField
                    id="outlined-multiline-static"
                    label="e.g. I would like to visit Paris. I want to visit 
          the Eiffel Tower for sure and other classical buildings."
                    multiline
                    rows={7}
                    defaultValue=""
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </List>
        <div className="flex flex-col items-center justify-center min-h-screen py-2"></div>
      </main>
      <footer>
        <a
          /*href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" Anil, Yange and Paul"}
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
