import Errorpagee from '../assets/errrorpage.jpg'

const Errorpage = () => {
    return (
        <div>
            <h2 className="text-center">Opps! this page is not valid</h2> 
            <img className='w-full h-72' src={Errorpagee}></img>
        </div>
    );
};

export default Errorpage;