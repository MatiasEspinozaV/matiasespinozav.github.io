export default function Contact() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Contáctame</h2>
      <form className="flex flex-col gap-4 max-w-md">
        <input type="text" placeholder="Nombre" className="border p-2" />
        <input type="email" placeholder="Correo" className="border p-2" />
        <textarea placeholder="Mensaje" className="border p-2" />
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Enviar</button>
      </form>
    </section>
  );
}
