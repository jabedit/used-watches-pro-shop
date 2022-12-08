import React from 'react';
import { Link } from 'react-router-dom';
import LoadUserbyProductidTable from '../../component/card/SimpleComponet/LoadUserbyProductid.Table';
import error from '../../media/error.jpg'


const PageNotFound = () => {
    LoadUserbyProductidTable('page-note-found!')
    return (
        <div>
            <div  className="flex justify-center items-center h-90 w-80 mx-auto  pt-8">
                <img className='' src={error} alt="" />
            </div>
            <div className='flex justify-center items-center pt-5'>
                <button className='bg-orange-500 text-white px-3 py-2 font-semibold'><Link to='/'>Back to Home</Link></button>
            </div>
        </div>
    );
};
 

export default PageNotFound;