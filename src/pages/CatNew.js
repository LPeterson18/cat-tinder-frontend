import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class CatNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        age: '',
        enjoys: '',
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };

  handleSubmit = () => {
    this.props.createNewCat(this.state.form);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <>
        <h2>CatNew</h2>
        <Form>
          <FormGroup>
            <Label for='name'>Cat's name</Label>
            <Input
              type='text'
              name='name'
              value={this.state.form.name}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='age'>Cats Age</Label>
            <Input
              type='number'
              name='age'
              value={this.state.form.age}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='enjoys'>What does your cat enjoy?</Label>
            <Input
              type='text'
              name='enjoys'
              value={this.state.form.enjoys}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button onClick={this.handleSubmit}>Submit Cat</Button>
        </Form>
        {this.state.submitted && <Redirect to='/catIndex' />}
      </>
    );
  }
}
export default CatNew;
