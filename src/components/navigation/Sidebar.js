import React, { useState, useEffect } from 'react';
import Colors from '../smallcomponents/Color';
import "../stylecss/extra.css";



function Sidebar({ menuToggle }) {

    const [windowsize, setWindowSize] = useState({ "height": window.innerHeight, "width": window.innerWidth })

    const [sidebarDisplay, setSideBarDisplay] = useState("side-bar")

    useEffect(() => {
        const handlewindowResize = () => {
            setWindowSize({ "height": window.innerHeight, "width": window.innerWidth })
        }
        window.addEventListener('resize', handlewindowResize);

        return () => {
            window.removeEventListener("resize", handlewindowResize);


        }

    })

    useEffect(() => {
        if (menuToggle === true) {
            setSideBarDisplay("side-bar")
        }
        else {
            setSideBarDisplay("sidebar-hide-mood");

        }
        return sidebarDisplay


        // if (window.matchMedia(WindowSize.small).matches) {
        //     if (menuToggle === true) {
        //         setSideBarDisplay("side-bar")
        //     }
        //     else if (menuToggle === false) {
        //         if ((window.matchMedia(WindowSize.medium).matches) && (window.matchMedia(WindowSize.large).matches)) {
        //             setSideBarDisplay("side-bar")
        //         }
        //         else {
        //             setSideBarDisplay("sidebar-hide-mood");
        //         }
        //     }
        // }
        // else if (window.matchMedia(WindowSize.medium).matches && (window.matchMedia(WindowSize.large).matches)) {

        //     setSideBarDisplay("sidebar-hide-mood");
        // }
        // else {
        //     setSideBarDisplay("side-bar")
        // }

    }, [menuToggle, windowsize, sidebarDisplay])


    return (

        <div className={sidebarDisplay} >
            <div style={styles.sidebarItems}>
                <div>
                    <div style={styles.cardheadings}>
                        <div>Window </div>
                        <div>Height </div>
                        <div>Width </div>
                    </div>


                    <div style={styles.showcarditems}>
                        <div style={styles.windowsizeTitle}> pixels </div>
                        <div style={{ color: Colors.primary }}>{windowsize.height}px</div>
                        <div style={{ color: Colors.primary }}>{windowsize.width}px</div>


                    </div>


                    {/* ///////////////////////// */}
                    {/* <div
                        style={{
                            textAlign: 'center',
                            fontWeight: "bolder", fontSize: "15px",
                        }}>KUMAR DULAL</div> */}
                    {/* ///////////////// */}

                </div>

            </div>

            <div style={styles.navlinkcontainer}>
                <div style={styles.navitems}>PROJECTS</div>
                <div style={styles.navitems}>BLOGS</div>
                <div style={styles.navitems}>Contact Us</div>
            </div>



        </div >


    );

}

const styles = ({

    cardheadings:
    {
        display: "flex",
        flexDirection: 'row',
        fontWeight: "bolder",
        color: Colors.fontcolor,
        fontSize: "15px", width: "100%",
        padding: "10px",
        justifyContent: "space-around"
    },

    windowsizeTitle: {
        fontWeight: "bold"
    },
    showcarditems: {
        display: "flex",
        flexDirection: 'row',
        fontWeight: "normal",
        alignItems: "center",
        color: Colors.fontcolor,
        justifyContent: "space-around"
    },
    sidebarItems: {

        position: "relative",
        display: "flex",
        backgroundColor: "green",
        height: "56px",
        borderRadius: "7px",
        alignItems: "center",
        width: "180px",
        justifyContent: "space-between",


    },
    navlinkcontainer: {
        display: "flex",
        fontSize: '18px',
        fontWeight: "bold",
        color: Colors.secondary,
        // backgroundColor: "rgba(90, 158, 235, 0.555)",
        borderRadius: "55px",
        width: "85%",
        height: "35vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"


    },
    navitems: {
        display: "flex",
        margin: "10px",
        backgroundColor: Colors.homeContentcolor,
        borderRadius: "10px",
        width: "200px",
        height: "55px",
        color: "black",
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: "100px"
    }




})

export default Sidebar;