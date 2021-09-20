import React from 'react';
import Colors from '../components/smallcomponents/Color';
import "../components/stylecss/extra.css";
function Projectpage() {

    return (
        <div style={styles.projectpagecontent}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "350px",
                height: "350px",
                backgroundColor: "purple",
                justifyContent: "space-evenly",
                alignItems: 'center',
                flexWrap: "wrap",
                margin: "5px",
                borderTopRightRadius: "100px"
            }}>


                <div style={{ fontSize: "20px", color: Colors.white, fontWeight: "bold", textAlign: "right", }}>
                    WHO ARE NEW LEADERS ?</div>
                <div style={{ margin: "12px ", color: Colors.white, textAlign: "left" }}>

                    New leaders are the people who are engaged in building resources for making a vision into reality.
                    Inspired by all global innovative work that have potential to solve current and
                    future obstacles and make things that seems impossible<br />

                </div>
            </div>

            <div style={styles.minbox}>
                WE BELIEVE
            </div>

            <div style={styles.minbox}>

                A business or company needs to run in a structured model depending on what are your product and services .
                But if you want more better result I want you to use the available pre-made Technology (hardware and software).
                So you don't need to use your excess money in developing it for big money if u can use what is available already.
                Make sure you use it the right way .
            </div>






        </div >
    );
}

const styles = ({
    projectpagecontent: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: Colors.width,
        width: "90%",
        alignItems: "center",
        justifyContent: "flex-start",
        margin: "20px auto",
        flexWrap: "wrap",
        borderRadius: "5px"


    },
    minbox: {
        display: "flex",
        height: "250px ",
        width: "250px",
        backgroundColor: Colors.homepagecontainercolor,
        borderRadius: "10px",
        margin: "4px auto ",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "left",
        padding: "10px",
        color: "purple",


    }

})


export default Projectpage;