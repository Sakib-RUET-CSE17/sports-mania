import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';

const League = (props) => {
    const { strLeague, strSport, idLeague } = props.league
    const [imgUrl, setImgUrl] = useState('')
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(res => res.json())
            .then(data => setImgUrl(data.leagues[0].strBanner))
    }, [idLeague])
    const history = useHistory()
    const handleExplore = (idLeague) => {
        const url = `league/${idLeague}`
        history.push(url)
    }
    return (
        <div className="col mt-4 text-center">
            <div className="card h-100 shadow p-3 mb-5 bg-body rounded">
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body mt-5">
                    <h5 className="card-title">{strLeague}</h5>
                    <p className="card-text">Sports type: {strSport}</p>
                    <br />
                    <button onClick={() => handleExplore(idLeague)} className="btn btn-primary">Explore <FontAwesomeIcon icon={faSignInAlt} /></button>
                </div>
            </div>
        </div>
    );
};

export default League;