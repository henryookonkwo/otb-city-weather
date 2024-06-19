const Head = ({ href, rel, integrety, crossorigin }) => {
  return (
    <header>
      <link
        href={href}
        rel={rel}
        integrity={integrety}
        crossOrigin={crossorigin}
      ></link>
    </header>
  );
};

export default Head;
