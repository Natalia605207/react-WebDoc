import { FaCalendarAlt } from "react-icons/fa";
import { FaDna } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa";

export const dataMediCare = [
    {
        id: 1,
        icon: <FaCalendarAlt />,
        text: "Unable to schedule an appointment with a doctor in the country where you currently live?"
    },

    {
        id: 2,
        icon: <FaDna />,
        text: "Tired of long waiting lists for appointments when you need help urgently?"
    },

    {
        id: 3,
        icon: <FaComments />,
        text: "Have trouble understanding what local doctors tell and prescribe you?"
    },

    {
        id: 4,
        icon: <FaBriefcaseMedical />,
        text: "Unhappy with how your illness is being treated by local doctors?"
    }
]