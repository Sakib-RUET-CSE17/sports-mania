import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Banner from '../Banner/Banner';
import League from '../League/League';

const Home = () => {
    const [leagues, setLeagues] = useState([])
    // const getRandomData=(leagues)=>{
    //     const range=leagues.length-15

    //     const start=Math.floor(Math.random()*range)
    //     console.log(range,start)
    //     return leagues.slice(start, start+15)
    // }
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(res => res.json())
            .then(data => {
                // setLeagues(getRandomData(data.leagues))
                setLeagues(data.leagues.slice(0, 15))
            })
    }, [])
    return (
        <div className="bg-info">
            <Banner><h1 style={{ fontSize: '48px' }}>Sports Mania</h1></Banner>
            <div className="container">
                <h1>Leagues Showing: {leagues.length}</h1>
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        leagues.map(league => <League league={league} key={league.idLeague}></League>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Home;