import React from 'react';
import Banner from './Banner/Banner';
import NoticeBody from './NoticeBody/NoticeBody';

const Notice = () => {
    return (
        <div>
            <Banner title={'Notice board'} />
            <NoticeBody />
        </div>
    );
};

export default Notice;