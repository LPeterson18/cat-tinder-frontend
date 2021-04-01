import React, { Component } from 'react';

import {
  Card,
  Button,
  CardTitle,
  CardImg,
  CardBody,
  CardSubtitle,
  CardText,
  Row,
  Col,
} from 'reactstrap';

class CatIndex extends Component {
  render() {
    return (
      <>
        <h2>CatIndex</h2>
        <Row sm='4'>
          {this.props.cats.map((cat) => {
            return (
              <Col key={cat.id} sm='4'>
                <Card>
                  <CardImg
                    top
                    width='100%'
                    src={cat.profile_pic}
                    alt='Cat profile picture'
                  />
                  <CardBody>
                    <CardTitle tag='h5'>{cat.name}</CardTitle>
                    <CardSubtitle tag='h6' className='mb-2 text-muted'>
                      Age: {cat.age}
                    </CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button href={`/catShow/${cat.id}`}>Meet {cat.name}</Button>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Button color='primary' href='/catNew'>
          Add a Cat
        </Button>
      </>
    );
  }
}
export default CatIndex;
