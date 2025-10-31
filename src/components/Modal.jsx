const Modal = ({ isOpen, onClose, person }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      onClick={onClose}
    >     
      <div
        className="bg-white p-6 md:p-8 border border-gray-500 rounded-xl max-w-md w-full animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}  
      >
        <h3 className="text-2xl font-extrabold text-gray-600 mb-3 flex justify-center">
          Are you sure you want to invite
        </h3>
        
        {person && (
            <p className="text-xl font-semibold mb-6 flex justify-center">
                {person.firstName} {person.lastName} ? 
            </p>
        )}

        <div className="flex justify-center gap-6">
            <button
          onClick={onClose}
         className='p-2 mt-4 w-full text-gray-800 text-md font-medium bg-blue-400 border border-gray-400 rounded-xl cursor-pointer
                     hover:scale-105 active:bg-gray-800 active:text-blue-400 transition duration-300'>
         YES
        </button>
        <button
          onClick={onClose}
         className='p-2 mt-4 w-full text-gray-800 text-md font-medium bg-blue-400 border border-gray-400 rounded-xl cursor-pointer
                     hover:scale-105 active:bg-gray-800 active:text-blue-400 transition duration-300'>
         NO
        </button>
            </div>
      </div>
    </div>
  );
};

export default Modal;