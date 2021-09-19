import React, { useState } from 'react';
import { AiOutlineUnorderedList, AiOutlineRadarChart, AiFillCloseCircle } from 'react-icons/ai';

import Sidebar from './Sidebar';
import Colors from '../smallcomponents/Color';

function Header() {
    const [menuToggle, setMenuToggle] = useState(false)
    const [menubarstate, setMenuBarState] = useState(<AiOutlineUnorderedList />)

    function handlemenuCLick() {
        if (menuToggle === false) {
            setMenuToggle(true)
            setMenuBarState(<AiFillCloseCircle />)

        }
        else {
            setMenuToggle(false)
            setMenuBarState(<AiOutlineUnorderedList />)

        }

    }


    return (
        <>
            <div style={styles.headersidebarflex}>
                <div className="header" style={styles.header}>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",

                        }}
                    >

                        <div style={{ fontSize: "42px", color: Colors.fontcolor }}><AiOutlineRadarChart /></div>
                        <div style={styles.headerfont}> New Leaders Tech</div>
                    </div>


                    <div style={styles.iconMenu}
                        onClick={() => handlemenuCLick()}
                    >
                        {menubarstate}

                    </div>

                </div>

                <div>
                    <Sidebar menuToggle={menuToggle} />
                </div>


            </div>

        </>




    );
}
const styles = ({

    headersidebarflex: {
        display: 'flex',
        position: "absolute",
        flexDirection: "row",
        alignItems: "initial"

    },
    header: {
        position: "fixed",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: Colors.logocolor,
        padding: "10px",
        fontFamily: "Arial",
        height: "10%",
        width: "95%",
        top: "2px",
        borderTopRightRadius: "25px",

    },
    iconMenu: {
        fontSize: '35px',
        color: '#08c',
        padding: "10px",

    },
    headerfont: {
        color: Colors.fontcolor,
        fontSize: "18px",
        fontWeight: "bolder"
    }


})

export default Header;



//  <Media queries={{
//     small: "(max-width: 599px)",
//     medium: "(min-width: 600px) and (max-width: 1199px)",
//     large: "(min-width: 1200px)"
// }}>
//     {matches => (
//         <div style={styles.header}>
//             {matches.small && <p>I am small!</p>}
//             {matches.medium && <p>I am medium!</p>}
//             {matches.large && <p>I am large!</p>}
//         </div>
//     )}
// </Media> 