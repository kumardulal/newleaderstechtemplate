import React from "react";
import Colors from "../components/smallcomponents/Color";

function Blogs(props) {
  const { history } = props;

  const handleblogClick = () => {
    history.push("/blogs/blogdetails");
    console.log("i am still with you");
  };
  return (
    <>
      <div style={styles.mainbox}>
        <div style={{ height: "15vh" }}></div>
        <div style={styles.pagetitle}>Blogs</div>
        <input style={styles.searchbox} placeholder="Search Blogs" />

        <div style={styles.blogsList}>
          <div style={styles.flexitems} onClick={() => handleblogClick()}>
            <div style={styles.cardboxitem}>
              <img
                style={styles.contentimage}
                src="https://picsum.photos/285"
                alt="display image1"
              />

              <div style={styles.blogtitleanddate}>
                <div style={styles.blogproperty_title}>
                  The wrong doings by right person
                </div>
                <div style={styles.updateddate}>Updated Date: 2021/02/05</div>
              </div>
            </div>
          </div>

          <div style={styles.flexitems}>
            <div style={styles.cardboxitem}>
              <img
                style={styles.contentimage}
                src="https://picsum.photos/255"
                alt="display image1"
              />
              <div style={styles.blogtitleanddate}>
                <div style={styles.blogproperty_title}>
                  The wrong doings by right person
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
                src="https://picsum.photos/211"
                alt="display image1"
              />
              <div style={styles.blogtitleanddate}>
                <div style={styles.blogproperty_title}>Enemy Ahead</div>
                <div style={styles.updateddate}>Updated Date: 2021/02/05</div>
              </div>
            </div>
          </div>

          <div style={styles.flexitems}>
            <div style={styles.cardboxitem}>
              <img
                style={styles.contentimage}
                src="https://picsum.photos/281"
                alt="display image1"
              />
              <div style={styles.blogtitleanddate}>
                <div style={styles.blogproperty_title}>The way to bangla</div>
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
              <div style={styles.blogtitleanddate}>
                <div style={styles.blogproperty_title}>
                  Things that are not very good
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
  mainbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100% ",
    right: "0px",
    left: "0px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  pagetitle: {
    width: "90%",
    height: "70px",
    backgroundColor: Colors.four,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    fontSize: "25px",
    fontWeight: "bold",
    color: Colors.try3,
    maxWidth: "600px",
    minWidth: "200px",
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
    width: "280px",
    height: "310px",
    margin: "10px",
    borderRadius: "10px",
    padding: "5px",
    backgroundColor: "white",
  },
  cardboxitem: {
    height: "300px",
    width: "280px",
    backgroundColor: Colors.three,
    borderRadius: "25px",
    margin: "10px",
  },
  contentimage: {
    width: "250px",
    height: "200px",
    borderRadius: "15px",
  },
  blogtitleanddate: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  blogproperty_title: {
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
    marginTop: "10px",
    color: Colors.fontcolor,
  },
  searchbox: {
    width: "70%",
    height: "40px",
    marginTop: "10px",
    borderRadius: "10px",
    backgroundColor: Colors.one,
    borderColor: Colors.four,
    textAlign: "center",
    minWidth: "150px",
    maxWidth: "500px",
  },
};

export default Blogs;
