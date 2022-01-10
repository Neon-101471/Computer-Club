import React from 'react';
import './HomeBanner.css';

const Banner = () => {
    return (
        <div sx={{ flexGrow: 1 }} className='home-banner-cotainer'>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                {/* Carousel image */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/31936640_1994466970817916_4721918639001829376_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=19026a&_nc_eui2=AeFP46G0I4lJHwlZmUegSD5j8T0bYnGYHh3xPRticZgeHQi30Q8hHQY-fIDrzITtqXmtHSWtXSL0uExzb7VecFva&_nc_ohc=pEnWClogbxwAX980-7D&_nc_ht=scontent.fdac116-1.fna&oh=00_AT8QylH5YEBEdsMgS5AF3HaGUODH8i-1HY-zpWbEO7QnfA&oe=61FE6227" className="d-block w-100 carousel-image" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/78187996_2381553562109253_9214679555623616512_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeFQF964yFOBqvIbPAj6ullAM7Yu0jqC05Azti7SOoLTkL-V1-Hig30qcuOfxjutV1Nw_PdzXDQZckLMG08SdRAg&_nc_ohc=cYnCV6jY9QMAX9meGVH&_nc_ht=scontent.fdac116-1.fna&oh=00_AT-7NN8MMNyDAwZZDE0uSBXombJm4LqAftjD2UWOw9jTbA&oe=61FEFC22" className="d-block w-100 carousel-image" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://scontent.fdac116-1.fna.fbcdn.net/v/t1.6435-9/55929414_2213349985596279_6088873619692191744_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=19026a&_nc_eui2=AeGH0k1Kk1NWRxuE2DquFhU4zcz6Ip1Sk_HNzPoinVKT8TLhBgEscMz7e0FlGik9EP4h2ZMqJSSebrLEvba98uRU&_nc_ohc=xXrAnMOa0A0AX9NTte5&_nc_ht=scontent.fdac116-1.fna&oh=00_AT8qOtpX5Z7gz1_pQmkL49dUVsG9xZ5bfYm2lIBa6-izwA&oe=61FDE038" className="d-block w-100 carousel-image" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;