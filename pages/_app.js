import Head from "../components/layout/Head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-5A8aPcBn3vn5dK5MvF5+d39pEd+bf5JZ6eLx0/odT4qvq7j1LVFf3l36gBN9m6Aq"
        crossorigin="anonymous"
      ></Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
