import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import React from 'react';




export function MyCard({src, title, description}) {
  return (
        <Col className="colu" >
          <Card className="mycard">
            <Card.Img variant="top" src={src} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text className='description'>
              {description}
              </Card.Text>
              <Button>Ver más</Button>
            </Card.Body>
          </Card>
        </Col>
      );
}
