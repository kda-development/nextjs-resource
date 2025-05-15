function fnCheckmax(max, value, label) {
  if (value < max?.nominal?.[label]) {
    return true;
  } else {
    return false;
  }
}
const fnHandleChangeNumber = (label, value, max, onInputChange, sliceDecimal = 8) => {
  let regex = /^[0-9.]+$/;
  let params = value.replace(/,/g, "");
  if (params.match(regex)) {
    let split = params.split(".");
    if (split.length > 1) {
      if (fnCheckmax(max, Number(split[0]), label)) {
        onInputChange(
          label,
          split[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
            "." +
            split[1].slice(0, sliceDecimal)
        );
      }
    } else {
      if (fnCheckmax(max, Number(params), label)) {
        onInputChange(
          label,
          params.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );
      }
    }
  } else {
    if (!value) {
      onInputChange(label, "");
    }
  }
};

export default fnHandleChangeNumber;
