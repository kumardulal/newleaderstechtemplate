
import React from 'react';
import HomeItemBox from '../components/smallcomponents/HomeItemBox';
import "../components/stylecss/extra.css";
import Projectpage from './Projectpage';

function Homepage() {



    return (
        // style={styles.homespace_state_min}
        <div style={styles.homepage} >


            <div>
                <div>
                    <Projectpage />
                </div>
                <HomeItemBox />

            </div>



            <div style={styles.containertext}>WE LIVE INSIDE THOSE VIBRATION</div>
        </div >



    );
}
const styles = ({
    homepage: {
        display: "flex",
        flexDirection: "column",
        position: "static",
        marginTop: "120px",


    },
    containertext: {
        position: "static",
        display: "flex",
        textAlign: "center",
        justifyContent: "center"
    }

})

export default Homepage;