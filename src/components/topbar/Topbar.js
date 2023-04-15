import React from 'react';
import './topbar.css'
import SearchIcon from '@mui/icons-material/Search';

const Topbar = () => {
    return (
        <div className='topbarContainner'>
           <div className="topBarLeft">
            <span className='logo'>Social-App</span>
           </div>
           <div className="topBarCenter">
            <div className="searchBar">
                <SearchIcon></SearchIcon>
                <input placeholder='Searrch for friend , post, or video' className='searchInput' type="text" />
            </div>
           </div>
           <div className="topBarRight"></div>
        </div>
    );
};

export default Topbar;