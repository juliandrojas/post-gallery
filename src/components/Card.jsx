import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import React, { useEffect, useState } from 'react';
import './../style.css';
export default function CardStructure() {
  const [ data, setData ] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data: "+error);
    }
  };
  //Renderizamos los datos en el componente
  return (
    <div className="grid-cards">
      {data.map((item) => (
          <Card>
          <CardBody>
            <CardTitle className="text-bold">Item: {item.id}</CardTitle>
            <CardSubtitle>Título del post: {item.title}</CardSubtitle>
            <CardText>Cuerpo del post: {item.body}</CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
