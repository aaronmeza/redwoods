export default function Contact() {
  return (
    <div className="prose mx-auto">
      <h1>Contact Us</h1>
      <p>Email: <a href="mailto:hello@redwoods.wine">hello@redwoods.wine</a></p>
      <p>Phone: (555) 123‑4567</p>
      <p>Address: 512 Division St, Northfield, MN</p>
      <iframe
        title="map"
        className="w-full aspect-video rounded"
        src="https://maps.google.com/maps?q=sonoma&t=&z=13&ie=UTF8&iwloc=&output=embed"
        loading="lazy"
      />
    </div>
  );
}