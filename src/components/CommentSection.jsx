import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/CommentSection.css';
import img1 from './../assets/usuario1.jpeg';
import img2 from './../assets/usuario2.jpeg';
import img3 from './../assets/usuario3.jpeg';
import img4 from './../assets/usuario4.jpeg';

const testimonials = [
  {
    image: img1,
    title: 'Atención rápida y de calidad',
    text: 'Estoy muy satisfecha con mi plan de salud de Sura, la cobertura es extensa y me ofrece acceso fácil y rápido a médicos, especialistas, servicios de urgencias. Las instalaciones y el personal del centro salud Sura son de calidad y resalto su amabilidad y eficiencia en la atención.',
    rating: 5,
    name: 'Berselaidy Chavarro',
  },
  {
    image: img2,
    title: 'Protección y tranquilidad asegurada',
    text: 'Esta poliza es lo mejor!!! estoy muy contento de tener esta poliza con Sura y contar con todos los beneficios, estar protegido es tener tranquilidad y contar con un respaldo a la hora de cualquier evento de Salud.',
    rating: 5,
    name: 'Mike Gallego',
  },
  {
    image: img3,
    title: 'Acceso a los mejores especialistas',
    text: 'La póliza de Sura me ha ayudado mucho en tener acceso a los mejores especialistas, el servicio de mi póliza y el acompañamiento es espectacular, la coberturas son las mejores....me siento feliz con mi Póliza.',
    rating: 5,
    name: 'Diana Zapata',
  },
  {
    image: img4,
    title: 'Satisfacción y confianza en SURA',
    text: 'Sura es una póliza de seguros que tenemos hace unos años y siempre recibimos muy buen servicio de todo su equipo de trabajo. Destacamos el servicio y la ayuda que nos brinda nuestro agente de seguros Ariel , estamos tranquilos por que confiamos que SURA fue una buena elección.',
    rating: 5,
    name: 'Bladimir Tabares',
  },
];

const CommentSection = () => {
  return (
    <div className="testimonials-section">
      <header className="section-header">
        <h1>¿Que opinan nuestros asegurados?</h1>
      </header>
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 6000 }}
        navigation
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
        }}
        className="testimonials-container"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <main className="test-card-body">
                <div className="quote">
                  <i className="fa fa-quote-left"></i>
                  <h2>{testimonial.title}</h2>
                </div>
                <p>{testimonial.text}</p>
                <div className="ratings">
                  {Array(testimonial.rating)
                    .fill()
                    .map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                </div>
              </main>
              <div className="profile">
                <div className="profile-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="profile-desc">
                  <span>{testimonial.name}</span>
                  <span>{testimonial.description}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CommentSection;