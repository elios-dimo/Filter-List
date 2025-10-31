
const PersonCard = ({ person, onInvite }) => {
    return (
        <div
            className="p-6 rounded-xl border border-gray-200 flex flex-col justify-between bg-white transition duration-300"
        >
            <div>
                <p className="font-bold text-lg text-gray-800">
                    {person.firstName} {person.lastName}
                </p>
                <p className="text-md text-gray-600 mt-2">
                    <span className='font-semibold text-gray-700'>Language:</span> {person.language}
                </p>
                <p className="text-md text-gray-600 mt-1 truncate">
                    <span className='font-semibold text-gray-700'>Email:</span> {person.email}
                </p>
            <button 
                onClick={() => onInvite(person)} 
                 className='p-2 mt-4  text-gray-800 text-md font-medium bg-blue-400 border border-gray-400 rounded-xl cursor-pointer
                     hover:scale-105 active:bg-gray-800 active:text-blue-400 transition duration-300'>
                Invite
            </button>
            </div>
        </div>
    );
};

export default PersonCard;
