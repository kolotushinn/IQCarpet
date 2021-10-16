import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ProfileMoreInfo from "./ProfileMoreInfo/ProfileMoreInfo";
import ProfileMoreInfoSettings from "./ProfileMoreInfo/ProfileMoreInfoSettings";
import ButtonBackArrow from "../../../img1/buttonBackArrow.png";

import CompanyMoreInfo from "./CompanyInfo/CompanyMoreInfo";
import CompanyMoreInfoSettings from "./CompanyInfo/CompanyMoreInfoSettings";

import "./ProfileInfo.css";

const ProfileInfo = ({
  fullname,
  login,
  birthDay,
  email,
  location,
  phoneNumber,
  iAmSeller,
  user,
  profileCompanyName,
  profileEmailOne,
  profilePhoneNumberOne,
  logout
}) => {
  const [mobileInfoHidden, setMobileInfoHidden] = useState(false);

  const [displayEditProfile, toggleEditProfile] = useState(false);

  const openProfileSettings = () => toggleEditProfile(!displayEditProfile);

  const [displayEditCompanyInfo, toggleEditCompanyInfo] = useState(false);

  const openCompanySettings = () =>
    toggleEditCompanyInfo(!displayEditCompanyInfo);

  const editProfile = (
    <ProfileMoreInfoSettings mobileInfoHidden={mobileInfoHidden} />
  );

  const editCompanyInfo = (
    <CompanyMoreInfoSettings mobileInfoHidden={mobileInfoHidden} />
  );

  const myProfile = (
    <ProfileMoreInfo
      birthDay={birthDay}
      email={email}
      location={location}
      phoneNumber={phoneNumber}
      mobileInfoHidden={mobileInfoHidden}
    />
  );

  const infoCompany = (
    <CompanyMoreInfo
      companyName={profileCompanyName}
      emailOne={profileEmailOne}
      phoneNumberOne={profilePhoneNumberOne}
      mobileInfoHidden={mobileInfoHidden}
    />
  );

  return (
    <Fragment>
      <div className="profileInfo" active={!mobileInfoHidden + ""}>
        <img className="profileImage" src="" />
        <div className="profileInfoContent">
          <div className="nameAndButtonsDiv">
            <div className="nameAndRoleDiv">
              <span className="profileNameText">{fullname}</span>
              <span className="profileRoleText">
                {iAmSeller === false ? "Buyer" : "Seller"}
              </span>
            </div>
            <span
              className="moreDetailsText"
              active={!mobileInfoHidden + ""}
              onClick={() => setMobileInfoHidden(!mobileInfoHidden)}
            >
              More details
              <img src={ButtonBackArrow} />
            </span>
            <div className="editExitButtonsDiv">
              <button onClick={openProfileSettings} className="editButton">
                Edit
              </button>
              <button onClick={logout} className="exitButton">Exit</button>
            </div>
          </div>
          <span className="profileLogin">{login}</span>
          {displayEditProfile ? editProfile : myProfile}
        </div>
      </div>
      {iAmSeller && (
        <div className="profileInfo" active={!mobileInfoHidden + ""}>
          <img className="profileImage" src="" />
          <div className="profileInfoContent">
            <div className="nameAndButtonsDiv">
              <div className="nameAndRoleDiv">
                <span className="profileNameText">{profileCompanyName}</span>
                <span className="profileRoleText">
                  {/* {profile.iAmSeller && "Company"} */}
                </span>
              </div>
              <span
                className="moreDetailsText"
                active={!mobileInfoHidden + ""}
                onClick={() => setMobileInfoHidden(!mobileInfoHidden)}
              >
                More details
                <img src={ButtonBackArrow} />
              </span>
              <div className="editExitButtonsDiv">
                <button onClick={openCompanySettings} className="editButton">
                  Edit
                </button>
                <button onClick={logout} className="exitButton">Exit</button>
              </div>
            </div>
            <span className="profileLogin">{login}</span>
            {displayEditProfile ? editCompanyInfo : infoCompany}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ProfileInfo;
