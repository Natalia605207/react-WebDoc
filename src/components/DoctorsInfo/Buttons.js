import Dropdown from 'react-bootstrap/Dropdown';
import { FaFilter } from "react-icons/fa";
import '../../App.css';

function Buttons({filterDoctors}) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <FaFilter className="filter-icon"/> Specialization
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu">
        <Dropdown.Item as="button" className="dropdown-item" onClick={() => window.location.reload(false)}>View All</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterDoctors("allergologist")}>Allergologist</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterDoctors("cardiologist")}>Сardiologist</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterDoctors("dentist")}>Dentist</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterDoctors("dermatologist")}>Dermatologist</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterDoctors("gastroenterologist")}>Gastroenterologist</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterDoctors("physician")}>General Physician</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterDoctors("gynecologist")}>Gynecologist</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterDoctors("neurologist")}>Neurologist</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterDoctors("neurosurgeon")}>Neurosurgeon</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterDoctors("oncologist")}>Oncologist</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterDoctors("ophthalmologist")}>Ophthalmologist</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterDoctors("orthopedist")}>Orthopedist</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterDoctors("otolaryngologist")}>Otolaryngologist</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterDoctors("pediatrician")}>Pediatrician</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterDoctors("psychotherapist")}>Psychotherapist</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterDoctors("rheumatologist")}>Rheumatologist</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterDoctors("sexologist")}>Sexologist</Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => filterDoctors("urologist")}>Urologist</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Buttons;
