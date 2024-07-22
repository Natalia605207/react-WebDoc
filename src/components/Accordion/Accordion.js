import { AccordionItem } from "./AccordionItem";
import { list } from "./list";
import './Accordion.css';

export const Accordion = () => {
    return (<div>
        {list.map((item) => 
        <AccordionItem key={item.id}
        title={item.title}
        content={item.content}
        />
        )}
    </div>)
}