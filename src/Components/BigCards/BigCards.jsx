import "./BigCards.css";

export default function BigCards({ title, img }) {
  return (
    <section className="BigCards">
      <img src={img} alt={title} />
    </section>
  );
}
