const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less'
  }
  if (!values.description) {
    errors.description = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.description)) {
    errors.description = 'Invalid description'
  }
  if (!values.price) {
    errors.price = 'Required'
  } else if (isNaN(Number(values.price))) {
    errors.price = 'Must be a number'
  } else if (Number(values.price) > 0) {
    errors.price = 'Sorry, you must be at least 0'
  }
  return errors
}

export default validate