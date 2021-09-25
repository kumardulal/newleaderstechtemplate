import React from "react";

function BlogDetailsPage() {
  return (
    <div style={styles.starting}>
      <div style={{ height: "13vh" }}></div>
      <div style={styles.blogtitle}>Blog Title: try it out</div>
      <div style={styles.blogimage}>Image</div>

      <div style={styles.blogintro}>
        Intro: suppose i am the intro, how would you like to keep me in the box
      </div>
      <div style={styles.blogdesc}>
        This is the description part djfhd djfdkjhf kdjhfkdjsh jkd
        kdjhfkdjshfkdjshkjdhjk kdslkfjlksd fldsjfd kdh fkjdshklfds fldkshf
        lksdjlkfds jfkds hdskjfh dklshfkljdh
      </div>
      <div style={styles.blogConclusion}>
        This is the conclusion of the blog
      </div>
    </div>
  );
}
const styles = {
  starting: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  blogtitle: {
    height: "50px",
    width: "90%",
    fontWeight: "bold",
  },
  blogimage: {
    height: "200px",
    width: "275px",
    backgroundColor: "yellow",
  },
  blogintro: {
    marginTop: "10px",
    display: "flex",
    height: "60px",
  },
  blogdesc: {
    width: "80%",
  },
  blogConclusion: {
    marginTop: "10px",
    width: "80%",
  },
};

export default BlogDetailsPage;
