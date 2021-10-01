const operators = {
  display: "flex",
  flexWrap: "wrap",
  flex: "1 1 1%",
  backgroundColor: "#F7A726",
  fontWeight: "700",
  hoverOpacity: "0.8"
};

export const OperatorPanel = (props) => {
  //            <button onClick={click} key={key} style={dict[style] || button_style}>

  return <div style={operators}>{props.children}</div>;
};
