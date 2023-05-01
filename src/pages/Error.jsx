import React from 'react';
import error_img from '../../public/error_img.json'
import { Player } from '@lottiefiles/react-lottie-player';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex flex-col items-center gap-y-4'>
            <Player
        autoplay
        loop={true}
        src={error_img}
      ></Player>
     <div>
     <NavLink className="bg-orange-500 p-4 rounded text-slate-200" to="/">Back To Home</NavLink>
     </div>
        </div>
    );
};

export default Error;