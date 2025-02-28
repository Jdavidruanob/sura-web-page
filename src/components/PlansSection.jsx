import './../styles/PlansSection.css';
import PlanCard from '../components/PlanCard';
import evoluciona_plan_img from '../assets/evoluciona-plan-img.png';
import global_img from '../assets/global.png'
import clasico_img from '../assets/clasico2.png'
import evo_img from '../assets/ascesor1.png'
const PlansSection = () => {
  return (
    <div id="plans-section">
        <h1 id="plans-title">Nuestros planes</h1>
        <p id="plans-subtitle">Elige tu plan ideal y un asesor te ayudará a completar tu afiliación de manera fácil y rápida</p>
        <div id="plans-cards-container">
            <PlanCard
                title="Plan evoluciona"
                image={evo_img}
                paragraph="Podrás encontrar en un plan económico coberturas en temas de hospitalización, cirugías, consultas con todas las especialidades, exámenes de laboratorio y convenios con las mas importantes clínicas del país."
                borderColor="#e2e72b" // Color azul claro para el borde superior
                imageSize="95%"
            />
                <PlanCard
                title="Plan clasico"
                image={clasico_img}
                paragraph="Este programa te permite acceder a un directorio médico más amplio, coberturas de emergencias fuera del país, reembolsos y cobertura ilimitada en Colombia."
                borderColor="#04a7cc" // Otro tono de azul para el borde superior
            />
                <PlanCard
                title="Plan global"
                image={global_img}
                paragraph="El plan global nos permite gozar de una cobertura mas amplía dentro y fuera del país, convenio con las clínicas mas importantes, toda la atención en hospitalización, cirugías, gastos hospitalarios."
                borderColor="#2a61ff" // Otro tono de azul para el borde superior
            />
        </div>
        
    </div>
  );
}

export default PlansSection;