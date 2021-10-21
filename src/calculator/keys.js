function CalculatorKey(props) {
    return (
      <button
        className={`${props.className}`}
        onClick={() => props.onClick(props.value || props.keyValue)}
      >
        {props.keyValue}{" "}
      </button>
    );
  }

  export default CalculatorKey;