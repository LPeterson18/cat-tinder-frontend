import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class CatEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        age: '',
        enjoys: '',
        profile_pic: '',
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
    this.props.editCat(this.state.form);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <>
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 3 }}>
            <h2>Edit {this.props.cat.name} here:</h2>
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
              <FormGroup>
                <Label for='profile_pic'>
                  Paste a url linking to your cat's picture.
                </Label>
                <Input
                  type='text'
                  name='profile_pic'
                  value={this.state.form.profile_pic}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Button onClick={this.handleSubmit}>Submit Cat</Button>
            </Form>
          </Col>
        </Row>
        {this.state.submitted && (
          <Redirect to={`/catShow/${this.props.cat.id}`} />
        )}
      </>
    );
  }
}
export default CatEdit;
