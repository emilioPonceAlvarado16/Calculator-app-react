const button_style = {
  flexWrap: "wrap",
  maxWidth: "39.33%",
  flex: "1 1 1%",
  backgroundColor: "#555556",

  appearance: "none",
  border: "7px solid #555556",
  outline: "none",
  fontSize: "19px",
  padding: "16px",
  cursor: "pointer",
  transition: "0.4s",
  borderRadius: "40px"
};

export const Button = (props) => {
  const { lab, onClick, key } = props;
  return (
    <button onClick={onClick} key={key} style={button_style}>
      {lab}
    </button>
  );
};
