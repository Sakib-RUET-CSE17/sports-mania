import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import maleLogo from '../../images/Photo/male.png'
import femaleLogo from '../../images/Photo/female.png'
import Banner from '../Banner/Banner';
import foundedIcon from '../../images/Icon/found.png'
import countryIcon from '../../images/Icon/flag (1) 1.png'
import sportsTypeIcon from '../../images/Icon/football (1) 1.png'
import genderIcon from '../../images/Icon/male-gender-sign 1.png'
import './LeagueExplore.css'
import Footer from '../Footer/Footer';

const LeagueExplore = () => {
    const { id } = useParams()
    const [league, setLeague] = useState({})
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [id])
    const { strBanner, strLeague, intFormedYear, strCountry, strSport, strGender, strDescriptionEN } = league
    const logo = strGender === 'Male' ? maleLogo : femaleLogo
    return (
        <div className="bg-info text-white">
            <Banner><img className="img-fluid" src={strBanner} alt="" /></Banner>

            <div className="container mt-5">
                <div className="card mb-3 bg-primary">
                    <div className="row no-gutters">
                        <div className="col-md-7">
                            <div className="card-body">
                                <h5 className="card-title">{strLeague}</h5>
                                <br />
                                <p className="card-text"><img src={foundedIcon} alt='...'></img> Founded: {intFormedYear}</p>
                                <p className="card-text"><img src={countryIcon} alt='...'></img> Country: {strCountry}</p>
                                <p className="card-text"><img src={sportsTypeIcon} alt='...'></img> Sports Type: {strSport}</p>
                                <p className="card-text"><img src={genderIcon} alt='...'></img> Gender: {strGender}</p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <img width="" className="img-fluid" src={logo} alt="..." />
                        </div>

                    </div>
                </div>
                <p>{strDescriptionEN}</p>
            </div>
            <Footer league={league}></Footer>
        </div>

    );
};

export default LeagueExplore;