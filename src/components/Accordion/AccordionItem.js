import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export const AccordionItem = ({title, content}) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return(<div>
        <div className={isOpen ? 'activeAccordion' : 'default'} onClick={handleIsOpen}>
            <p className="accordion-header">{title}</p>
            <FaAngleDown className="arrow"/>
        </div>
        <div className={isOpen ? 'content' : 'hidden'} onClick={handleIsOpen}>
            <p className="accordion-content">{content}</p>
        </div>
    </div>)
}