import './../styles/PlansSection.css';
import PlanCard from '../components/PlanCard';
import evoluciona_plan_img from '../assets/evoluciona-plan-img.png';

const PlansSection = () => {
  return (
    <div id="plans-section">
      <h1 id="plans-title">Nuestros planes</h1>
      <p id="plans-subtitle">Elige tu plan ideal y un asesor te ayudará a completar tu afiliación de manera fácil y rápida</p>
      <div id="plans-cards-container">
        <PlanCard
          title="Título del Plan 1"
          image={evoluciona_plan_img}
          paragraph="Este es el párrafo del plan que describe los detalles del plan de manera más completa."
        />
        <PlanCard
          title="Título del Plan 2"
          image={evoluciona_plan_img}
          paragraph="Este es el párrafo del plan que describe los detalles del plan de manera más completa."
        />
        <PlanCard
          title="Título del Plan 3"
          image={evoluciona_plan_img}
          paragraph="Este es el párrafo del plan que describe los detalles del plan de manera más completa."
        />
      </div>
      <p id="plans-footer">
        <a href="/more-info">¿No estás seguro de cuál plan es el ideal para ti?</a>
      </p>
    </div>
  );
}

export default PlansSection;