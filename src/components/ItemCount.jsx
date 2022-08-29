import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/ItemCount.css";

export default function ItemCount({ stock, initial }) {
  const onAdd = (count) => {
    stock = stock - count;
    alert("Agregaste " + count);
    if (stock <= 1) {
      alert("no hay mas stock");
    }
  };

  const [count, setCount] = useState(initial);

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
    if (count === stock) {
      alert("El maximo que podes agregar de este producto es " + stock);
    }
  };

  const remove = () => {
    if (count >= 2) {
      setCount(count - 1);
    }
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Producto</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Subtitulo</Card.Subtitle>
        <Card.Text>Descripcion producto</Card.Text>
        <Button onClick={remove} className="botonCount" variant="secondary">
          -
        </Button>
        {count}
        <Button onClick={add} className="botonCount" variant="secondary">
          +
        </Button>
        <Button onClick={() => onAdd(count)} className="botonAgregar">
          Agregar
        </Button>
      </Card.Body>
    </Card>
  );
}
