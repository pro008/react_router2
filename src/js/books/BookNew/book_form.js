import React, { Component, PropTypes } from 'react'
import { Row, Col, HelpBlock, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import { reduxForm } from 'redux-form'

class BookForm extends Component {
  constructor(props) {
    super(props)

    this._handleSave = this._handleSave.bind(this)
  }

  _handleSave(data) {
    this.props.onSave(data)
  }

  render() {
    const { fields: { name, description, price }, book, handleSubmit } = this.props
    return (<form className="form-horizontal">
    	<Row>
	  		<Col md={10} mdOffset={2}>
	  			<FormGroup
	  				controlId="formControlsText"
	  				validationState={name.touched && name.error ? 'error' : null}>
	  				<Col componentClass={ControlLabel} sm={2}>
	  				Name
	  				</Col>
	  				<Col sm={8}>
	            <FormControl type="text" {...name}/>
	            <FormControl.Feedback />
	          </Col>
	          <Col sm={2}>
	          	<HelpBlock>{name.touched && name.error ? name.error[0] : null}</HelpBlock>
	          </Col>
	        </FormGroup>
	      </Col>

	      <Col md={10} mdOffset={2}>
	        <FormGroup
	          controlId="formControlsText"
	          validationState={description.touched && description.error ? 'error' : null}>
	          <Col componentClass={ControlLabel} sm={2}>
            description
            </Col>
	          <Col sm={8}>
	            <FormControl type="text" {...description}/>
	            <FormControl.Feedback />
	          </Col>
	          <Col sm={2}>
	          	<HelpBlock>{description.touched && description.error ? description.error[0] : null}</HelpBlock>
	          </Col>
	        </FormGroup>
	      </Col>

	      <Col md={10} mdOffset={2}>
	        <FormGroup
	          controlId="formControlsText"
	          validationState={price.touched && price.error ? 'error' : null}>
	          <Col componentClass={ControlLabel} sm={2}>
            Price
            </Col>
	          <Col sm={8}>
	            <FormControl type="text" {...price}/>
	            <FormControl.Feedback />
	          </Col>
	          <Col sm={2}>
	          	<HelpBlock>{price.touched && price.error ? price.error[0] : null}</HelpBlock>
	          </Col>
	        </FormGroup>
	      </Col>

        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <Button
             	bsStyle="danger" bsSize="small"
              onClick={handleSubmit(this._handleSave)}>
              <i className="ace-icon fa fa-check bigger-110"/>
							Submit
            </Button>
          </div>
        </div>
      </Row>
    </form>
    )
  }
}

BookForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  id: PropTypes.string,
  onEdit: PropTypes.func,
  onNew: PropTypes.func,
  onSave: PropTypes.func.isRequired
}


const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less'
  }

  if (!values.description) {
    errors.description = 'Required'
  } else if (values.description.length > 15) {
    errors.description = 'Must be 15 characters or less'
  }

  if (!values.price) {
    errors.price = 'Required'
  } else if (isNaN(Number(values.price))) {
    errors.price = 'Must be a number'
  } else if (Number(values.price) > 0) {
    errors.price = 'Sorry, it must be at least 1$'
  }
  
  return errors
}

function validateParams(book) {
  let constraints = {
    name: {
      presence: true
    },
    description: {
      presence: true
    },
    price: {
      presence: true
    },
  }
  return validate(book, constraints) || {}
}

BookForm = reduxForm({
  form: 'bookForm',
  fields: ['id', 'name', 'description', 'price'],
  validate: validateParams
})(BookForm)

export default BookForm