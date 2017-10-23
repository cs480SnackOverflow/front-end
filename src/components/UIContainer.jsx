import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import { Table,Button, Form, FormGroup, Input } from 'reactstrap';

function UIContainer(props) {
  return (
    <Container>
      <Row>
        <Col sm>{props.children}</Col>
      </Row>
    </Container>

  );
}
export default UIContainer;
