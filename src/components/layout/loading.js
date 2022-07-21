import { useState } from "react";
import Spinner from 'react-bootstrap/Spinner';

const [loading, setLoading] = useState(false);
 
const loadingImage = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000);
       
        if (loading) {
            return (
                    <div>
                    <Spinner animation="border" role="status" color="light">
                    
                     </Spinner>
                     </div >
                     )
                     }
         else {
            return (
               Showdata())
            
        }
}
    
export default loadingImage;
