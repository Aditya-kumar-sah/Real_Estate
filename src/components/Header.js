import React from 'react';

import {Link} from 'react-router-dom';

const Header = () => {
  return <header className='py-6 px-4 mb-12 border-b flex justify-between items-center'>
      <div className='container mx-auto '>
         <Link className='text-4xl font-bold text-violet-500' to="/Real_Estate">HomeWay</Link>
      </div>
      <div className='flex items-center gap-6 '>
         <Link className='hover:text-violet-900 tansition' to="">Login</Link>
         <Link className='bg-violet-700 hover:bg-violet-800 text-white px-3 py-2 rounded-lg transition' to="">Signup</Link>
      </div>
  </header>;
};

export default Header;
