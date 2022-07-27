import '../../src/styles/components/pages/HomePage.css'
import MyClock from '../components/layout/clock';





const HomePage = () => {

    return (
        <body>
            <div className='clock'>               
             <MyClock />
             </div>
            </body>

    );
}

export default HomePage;