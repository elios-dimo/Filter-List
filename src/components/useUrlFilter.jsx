import { useState, useEffect, useCallback } from 'react';

const Url = () => {
   // Συνάρτηση για την ανάκτηση των αρχικών τιμών των φίλτρων από το URL
    const getInitialFilters = useCallback(() => {
        // Δημιουργία ενός αντικειμένου URLSearchParams από το τρέχον URL
        const params = new URLSearchParams(window.location.search);
        return {
            nameFilter: params.get('name') || '', 
            lanFilter: params.get('lang') || 'All' 
        };
    }, []);

    const initialFilters = getInitialFilters();

    const [nameFilter, setNameFilter] = useState(initialFilters.nameFilter); 
    const [lanFilter, setLanFilter] = useState(initialFilters.lanFilter);     
      
    useEffect(() => {
        // Δημιουργία ενός αντικειμένου URLSearchParams για την διαχείριση των παραμέτρων του URL
        const params = new URLSearchParams();
        
        // Θέτουμε το φίλτρο ονόματος αν υπάρχει
        if (nameFilter) {
            params.set('name', nameFilter);
        } else {
            params.delete('name');
        }
        
        // Θέτουμε το φίλτρο γλώσσας, χρησιμοποιώντας 'All' αν δεν υπάρχει τιμή
        const langValue = lanFilter || 'All';
        params.set('lang', langValue);
       
        // Δημιουργία του νέου query string
        const queryString = params.toString();

        // Δημιουργία του νέου URL
        const newUrl = `${window.location.pathname}${queryString ? '?' + queryString : ''}`;

        // Χρήση replaceState για ενημέρωση του URL χωρίς να επηρεάζεται το ιστορικό του browser
        window.history.replaceState(null, '', newUrl);
    }, [nameFilter, lanFilter]); 

    // Επιστρέφουμε τα φίλτρα και τους setters
    return { nameFilter, setNameFilter, lanFilter, setLanFilter };
}

export default Url;