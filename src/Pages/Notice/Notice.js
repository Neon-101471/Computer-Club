import React from 'react';
import Banner from './Banner/Banner';
import NoticeBody from './NoticeBody/NoticeBody';

const Notice = () => {
    return (
        <div>
            <Banner title={'Notice Board'} />
            <NoticeBody />
        </div>
    );
};

export default Notice;