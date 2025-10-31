import React from 'react'
import People from './data.json'

const dataApi = (lanFilter = null, nameFilter = '') => {
  
    return Promise.resolve().then(()=>{

        // παίρνω κόπυ απο τα αρχικά δεδομένα
        let finalData = [...People]; 

        // κάνω ματς το input του χρήστη αν εμπεριέχεται στο lastName των δεδομένων case insensitive
        if (nameFilter) {
            finalData = finalData.filter(person => person.lastName.toLowerCase().includes(nameFilter.toLowerCase()));
        }

        // φιλτράρω με βάση την γλώσσα αν δεν είναι null ή αν έχει επιλεχθεί κάτι διαφορετικό απο All
        if (lanFilter && lanFilter !== 'All'){
            finalData = finalData.filter(person => person.language === lanFilter)
        }

        // ταξινομώ αλφαβητικά με βάση το lastName 
        // το localeCompare επιστρέφει αρνητική τιμή αν το a είναι πριν το b, θετική αν το a είναι μετά το b και 0 αν είναι ίσα
        finalData.sort((a,b)=> a.lastName.localeCompare(b.lastName))

        return {
            people: finalData
        }


  })
}

export default dataApi