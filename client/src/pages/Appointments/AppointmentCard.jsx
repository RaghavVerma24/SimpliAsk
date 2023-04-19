import { Link } from "react-router-dom";

const AppointmentCard = ({event}) => {
    return ( 
        <div className="flex">
            <div className="w-full flex flex-col space-y-2 justify-center relative">
                <div className="flex justify-between">
                    <p className="text-lg font-semibold text-white">Doctor: {event.doctorName}</p>
                    <div className="float-right hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <p className="text-gray-400 font-semibold flex space-x-2">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </span> 
                    <span className="">{event.aptTime} {event.aptDate}</span>
                </p>
                <p className="text-[#6c63ff] flex space-x-2">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                        </svg>
                    </span>
                    <span className="text-ellipsis overflow-hidden ...">
                        {event.aptNotes}
                    </span>
                </p>
            </div>
        </div>
     );
}
 
export default AppointmentCard;