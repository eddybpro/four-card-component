import { data } from "../data";
import Card from "./Card";

function Cards() {
  return (
    <main>
      {data.map((el, i) => (
        <Card key={i} title={el.title} para={el.para} img={el.img} />
      ))}
    </main>
  );
}
export default Cards;
