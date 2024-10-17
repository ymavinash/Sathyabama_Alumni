import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderTem from "../../components/Header/Header";
import CustomFooter from "../../components/footer/footer";
import "./gallery.css";

export default function Gallery() {
    return (
        <>
            <HeaderTem />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className="card">
                            <a href="/routes/Convocation"><img className="card-img-top" src="/convocation/2017/IMG_0361.jpg" alt="Convocation" /></a>
                            <div className="card-body">
                                <a href="/routes/Convocation" className="button">Convocation</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card">
                            <a href="/routes/AlumniMeet"><img className="card-img-top" src="/Alumnimeet2014/DSC_0930.JPG" alt="Alumni Meet" /></a>
                            <div className="card-body">
                                <a href="/routes/AlumniMeet" className="button">Alumni Meet</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CustomFooter />
        </>
    );
}
