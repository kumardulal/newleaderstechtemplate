import React from "react";
import Colors from "../components/smallcomponents/Color";

function ProjectListPage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "90% ",
          right: "0px",
          left: "0px",

          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <div
          style={{
            marginTop: "120px",
            width: "100%",
            height: "100px",
            backgroundColor: Colors.primary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            fontSize: "25px",
            fontWeight: "bold",
            color: Colors.homeContentcolor,
          }}
        >
          Projects
        </div>

        <div style={styles.blogsList}>
          <div style={styles.flexitems}>
            <div style={styles.cardboxitem}>
              <img
                style={styles.contentimage}
                src="https://picsum.photos/205"
                alt="display image1"
              />
              <div style={styles.blogtitleanddate}>
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
              <div style={styles.blogtitleanddate}>
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
              <div style={styles.blogtitleanddate}>
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
              <div style={styles.blogtitleanddate}>
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
      </div>
    </>
  );
}

const styles = {
  blogsList: {
    backgroundColor: Colors.primary,
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
    width: "350px",
    height: "350px",
    margin: "10px",
    borderRadius: "10px",
    padding: "5px",
    backgroundColor: "white",
  },
  cardboxitem: {
    height: "350px",
    width: "370px",
    backgroundColor: Colors.homeContentcolor,
    borderRadius: "25px",
    margin: "10px",
  },
  contentimage: {
    width: "340px",
    height: "241px",
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
    backgroundColor: Colors.logo2,
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
    marginTop: "10px",
    color: Colors.fontcolor,
  },
};

export default ProjectListPage;
