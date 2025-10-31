import { useState, useEffect } from 'react';
import Input from './Input';
import Language from './Language'; 
import Api from '../dataApi';
import Modal from './Modal';
import useUrlFilter from './useUrlFilter';
import PersonCard from './PersonCard';

const NameList = () => {
  const [people, setPeople] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const { nameFilter, setNameFilter, lanFilter, setLanFilter } = useUrlFilter();
  
 
  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const result = await Api(lanFilter, nameFilter);
        setPeople(result.people);
      } catch (error) {
        console.error('Error fetching people:', error);}    
    };

    fetchPeople();
  }, [lanFilter, nameFilter]);

  const handleInvite = (person) => {
        setSelectedPerson(person); 
        setIsOpen(true);
    }

    const handleCloseModal = () => {
        setIsOpen(false);
        setSelectedPerson(null); 
    }

  return (
    <div className="p-4 sm:p-6">      

      <div className="p-4 sm:p-6 mb-8 border rounded-lg border-gray-200 flex flex-col sm:flex-row gap-4">
          <Input
            nameFilter={nameFilter}
            setNameFilter={setNameFilter}
          />
          <Language
            lanFilter={lanFilter}
            setLanFilter={setLanFilter}
          />     
      </div>
  
      <div className="mt-8">
        {people.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {people.map((person) => {
              return (
                <div
                  key={person.email}
                  className="flex flex-col justify-between"
                >
                  <PersonCard person={person} onInvite={handleInvite} />
                </div>
              );
            })}
           
          </div>
        )}
      </div>

        <Modal isOpen={isOpen} onClose={handleCloseModal} person={selectedPerson} />
        
    </div>
  );
};

export default NameList;