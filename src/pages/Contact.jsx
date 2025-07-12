function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>Have any questions or ideas? Drop us a message below.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email Address" required />
        <textarea placeholder="Your Message..." required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
