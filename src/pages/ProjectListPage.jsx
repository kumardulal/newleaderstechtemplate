import React from "react";
import Colors from "../components/collections/Color";
import Services from "../components/smallcomponents/Services";

function ProjectListPage(props) {
  const { history } = props;
  return (
    <>
      <div style={styles.mainboxproject}>
        <div style={{ height: "15vh" }}></div>
        <div style={styles.pagetitleProject}>Projects</div>

        <input
          placeholder="Search Projects"
          type="text"
          style={styles.searchbox}
        />

        <div style={styles.blogsList}>
          <div
            style={styles.flexitems}
            onClick={() => history.push("/projectlist/projectdetails")}
          >
            <div style={styles.cardboxitem}>
              <img
                style={styles.contentimage}
                src="https://picsum.photos/205"
                alt="display image1"
              />
              <div style={styles.projecttitleanddate}>
                <div style={styles.projectproperty_title}>
                  Project: The wrong doings by right person
                </div>
                <div style={styles.updateddate}>Updated Date: 2021/02/05</div>
              </div>
            </div>
          </div>

          <div style={styles.flexitems}>
            <div style={styles.cardboxitem}>
              <img
                style={styles.contentimage}
                src="https://picsum.photos/209"
                alt="display image1"
              />
              <div style={styles.projecttitleanddate}>
                <div style={styles.projectproperty_title}>
                  Project: The wrong doings by right person
                </div>
                <div style={styles.updateddate}>Updated Date: 2021/02/05</div>
              </div>
            </div>
          </div>

          {/* /// */}

          <div style={styles.flexitems}>
            <div style={styles.cardboxitem}>
              <img
                style={styles.contentimage}
                src="https://picsum.photos/288"
                alt="display image1"
              />
              <div style={styles.projecttitleanddate}>
                <div style={styles.projectproperty_title}>
                  {" "}
                  Project: Enemy Ahead
                </div>
                <div style={styles.updateddate}>Updated Date: 2021/02/05</div>
              </div>
            </div>
          </div>

          <div style={styles.flexitems}>
            <div style={styles.cardboxitem}>
              <img
                style={styles.contentimage}
                src="https://picsum.photos/296"
                alt="display image1"
              />
              <div style={styles.projecttitleanddate}>
                <div style={styles.projectproperty_title}>
                  The way to bangla
                </div>
                <div style={styles.updateddate}>Updated Date: 2021/02/05</div>
              </div>
            </div>
          </div>

          <div style={styles.flexitems}>
            <div style={styles.cardboxitem}>
              <img
                style={styles.contentimage}
                src="https://picsum.photos/241"
                alt="display image1"
              />
              <div style={styles.project_titleanddate}>
                <div style={styles.projectproperty_title}>
                  Project: Things that are not very good
                </div>
                <div style={styles.updateddate}>Updated Date: 2021/02/05</div>
              </div>
            </div>
          </div>

          <div style={styles.flexitems}></div>
        </div>
        <Services />
      </div>
    </>
  );
}

const styles = {
  mainboxproject: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100% ",
    right: "0px",
    left: "0px",
    marginRight: "0px",
    marginLeft: "0px",
  },
  pagetitleProject: {
    width: "90%",
    height: "65px",
    backgroundColor: Colors.four,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    fontSize: "25px",
    fontWeight: "bold",
    color: Colors.try3,
    maxWidth: "600px",
  },
  blogsList: {
    backgroundColor: Colors.one,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: "10px",
    marginTop: "20px",
    flexWrap: "wrap",
  },
  flexitems: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "270px",
    height: "300px",
    margin: "10px",
    borderRadius: "10px",
    padding: "5px",
    backgroundColor: "white",
  },
  cardboxitem: {
    height: "295px",
    width: "267px",
    backgroundColor: Colors.four,
    borderRadius: "25px",
    margin: "10px",
  },
  contentimage: {
    width: "265px",
    height: "202px",
    borderRadius: "15px",
  },
  project_titleanddate: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  projectproperty_title: {
    display: "flex",
    width: "90%",
    height: "30px",
    backgroundColor: Colors.four,
    border: "solid 2px",
    borderRadius: "5px",
    padding: "10px",
    alignItems: "center",
    justifyContent: "center",
    margin: "3px ",
    color: "white",
  },
  updateddate: {
    display: "flex",
    fontSize: "15px",
    color: Colors.try3,
  },
  projecttitleanddate: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  searchbox: {
    width: "75%",
    height: "40px",
    marginTop: "10px",
    borderRadius: "10px",
    backgroundColor: Colors.one,
    borderColor: Colors.four,
    textAlign: "center",
    maxWidth: "500px",
    minWidth: "200px",
  },
};

export default ProjectListPage;
