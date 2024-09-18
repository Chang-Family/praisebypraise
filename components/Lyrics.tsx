const Lyrics = ({ lyrics }: { lyrics: string }) => {
  return (
    <p
      style={{ whiteSpace: "pre-line" }}
      dangerouslySetInnerHTML={{ __html: lyrics }}
    ></p>
  );
};

export default Lyrics;
