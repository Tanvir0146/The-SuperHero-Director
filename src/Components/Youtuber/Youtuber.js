import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faYoutube, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {  faHandshake} from '@fortawesome/free-solid-svg-icons';

const Youtuber = (props) => {
  const { name, channelName, subscriber, image, Salary } = props.youtuber;
  return (
    <>
    <div className="col-sm-4">
    <div className="card h-100 p-2 bg-danger bg-opacity-10">

      <img src={image} alt="" className="w-50 rounded-circle mx-auto d-block" />

        
        <div className="card-body fw-bold">
          <h3>{name}</h3>
          <p>Channel Name: {channelName}</p>
          <p>Subscribers: {subscriber}</p>
          <p>Salary: ${Salary}</p>
          <div className="text-center fs-3">
          <FontAwesomeIcon icon={faYoutube} className="text-danger mx-2"/>
          <FontAwesomeIcon icon={faGithub} className="mx-2"/>
          <FontAwesomeIcon icon={faLinkedin} className="text-primary mx-2" />
          </div>
          <div className="d-grid">
          <button
            className="btn btn-danger text-white"
            onClick={() => props.handleAddToCart(props.youtuber)}
          ><FontAwesomeIcon icon={faHandshake} /> <span className="mx-1">Hire Now</span>
          </button>
          </div>
          
        </div>
      </div>
    </div>    
    </>
  );
};

export default Youtuber;
