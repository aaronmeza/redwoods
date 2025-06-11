export default function Contact() {
  return (
    <div className="prose mx-auto">
      <h1>Contact Us</h1>
      <p>Email: <a href="mailto:aaron@redwoods.wine">aaron@redwoods.wine</a></p>
      <p>Phone: (612) 293‑6392</p>
      <p>Address: 512 Division St, Northfield, MN</p>
      <iframe
        title="map"
        className="w-full aspect-video rounded"
        src="https://maps.google.com/maps?q=512+Division+St+Northfield+MN+55057&output=embed"
        loading="lazy"
      />
    </div>
  );
}