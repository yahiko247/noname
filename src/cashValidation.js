function Validation(values){
    let errors = {};
  
    // Check if the cash field is empty
    if (!values.cash.trim()) {
      errors.cash = 'Cash amount is required';
    } else {
      // Check if the cash field contains only numeric characters
      if (!/^\d+$/.test(values.cash)) {
        errors.cash = 'Cash amount must be a valid number';
      }
    }

    if (!values.id.trim()) {
      errors.id = 'Cash amount is required';
    } else {
      // Check if the cash field contains only numeric characters
      if (!/^\d+$/.test(values.id)) {
        errors.id = 'Cash amount must be a valid number';
      }
    }
    return errors;
  }
  export default Validation;
  