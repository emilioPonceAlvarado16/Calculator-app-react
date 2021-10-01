const digits = {
  display: "flex",
  flex: "1 1 33.333%",
  flexWrap: "wrap",
  maxWidth: "100%",
  backgroundColor: "#F7A726",
  hoverOpacity: "0.8"
};

export const DigitsPanel = (props) => {
  return <div style={digits}>{props.children}</div>;
};
