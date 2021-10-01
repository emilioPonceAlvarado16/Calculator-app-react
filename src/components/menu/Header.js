const wrapper = {
  height: "4vh",
  background: "#5e5e5e",
  display: "flex",
  justifyContent: "right",
  alignItems: "center"
};
// marginRight:'60px'
const close = {
  width: "3px",
  height: "3px",
  borderRadius: "50%",
  marginRight: "3.5px",
  background: "#FF5D5B",
  border: "4px solid #CF544D"
};
const min = {
  width: "3px",
  height: "3px",
  borderRadius: "50%",
  marginRight: "3.5px",

  background: "#FFBB39",
  border: "4px solid #CFA64E"
};
const max = {
  width: "3px",
  height: "3px",
  borderRadius: "50%",
  marginRight: "13px",
  background: "#00CD4E",
  border: "4px solid #0EA642"
};

export const Header = (props) => {
  return (
    <div style={wrapper}>
      <button style={close}></button>
      <button style={min}></button>
      <button style={max}></button>
    </div>
  );
};
