const result_style = {
  padding: "16px",
  textAlign: "right",
  backgroundColor: "#434344",
  color: "#eee",
  fontSize: "24px",
  fontWeight: "300"
};

export const ResultBox = (props) => {
  const { result, cal } = props;
  return (
    <div style={result_style}>
      {result ? <span>({result})</span> : ""}
      {cal || "0"}
      {props.children}
    </div>
  );
};
