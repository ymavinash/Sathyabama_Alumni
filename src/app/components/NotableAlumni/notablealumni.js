import React from "react";
import "./notablealumni.css";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function NotableAlumni() {

  return (
    <>
      <div className="wholeContainer">
        <div className="notablehead">
          <h1>Notable Alumni</h1>
          <a href="/routes/Alumni"><button>See More</button></a>
        </div>       
          <div className="notableContainer">
            <div className="eachContainer">
              <div className="eachImage">
              <img src="/NotableAlumni/Notable alumni 1.png" alt="Alumni 1" className="img-fluid"/>
              </div>
              <div className="Details">
              <h3>PRASHANTH PANDEY</h3>
              <p>CEO AND CO-FOUNDER OF GLOBAL CHILD PRODIGY AWARDS</p>
              </div>
            </div>
            <div className="eachContainer">
              <div className="eachImage">
              <img src="/NotableAlumni/Notable alumni 2.png" alt="Alumni 2" className="img-fluid" />

              </div>
              <div className="Details">
              <h3>ANURAG KUMAR</h3>
              <p>CEO AKON GROUP OF COMPANIES</p>
              </div>
            </div>
            <div className="eachContainer">
              <div className="eachImage">
              <img src="/NotableAlumni/Notable alumni 3.png" alt="Alumni 3" className="img-fluid"/>
              </div>
              <div className="Details">
              <h3>PRADEEP JOHN</h3>
              <p>TAMILNADU WEATHERMAN</p>
              </div>
            </div>
            <div className="eachContainer">
              <div className="eachImage">
              <img src="/NotableAlumni/Notable alumni 4.png" alt="Alumni 4" className="img-fluid"/>
              </div>
              <div className="Details">
              <h3>ASHISH AMAN</h3>
              <p>FOUNDER OF EQUINOX’S DRONES</p>
              </div>
            </div >
            <div className="eachContainer">
              <div className="eachImage">
              <img src="/NotableAlumni/Notable alumni 5.png" alt="Alumni 5" className="img-fluid"/>
              </div>
              <div className="Details">
              <h3>TALLURI VIDYA SREE</h3>
              <p>DEPUTY SUPERINTENDENT OF POLICE</p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
