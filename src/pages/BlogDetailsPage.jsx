import React from "react";
import Colors from "../components//collections/Color";
import Picture from "../components/collections/Pictures";

function BlogDetailsPage() {
  return (
    <div style={styles.starting}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "1400px",
          flexDirection: "column",
          fontFamily: "initial",
          border: `solid 2px ${Colors.five}`,
        }}
      >
        <div style={styles.blogtitle}>
          <div style={styles.blogtitletext}>Blog Title: NAme of the BLog</div>
        </div>

        <img
          src={Picture.blogimage}
          style={styles.blogimage}
          alt="blog post cover"
        />
        <div style={styles.blogdivs}>
          <div style={styles.blogintrotext}>
            Intro: suppose i am the intro, how would you like to keep me in the
            box. this intro can be more or less ,we need to make sure it is
            inside the container of the intro.
          </div>
        </div>
        <div style={styles.blogdivs}>
          <div style={styles.blogdesc}>
            But I must explain to you how all this mistaken idea of denouncing
            of a pleasure and praising pain was born and I will give you a
            complete account of the system, and expound the actual teachings of
            the great explorer of the truth, the master-builder of human
            happiness. No one rejects, dislikes, or avoids pleasure itself,
            because it is pleasure, but because those who do not know how to
            pursue pleasure rationally encounter consequences that are extremely
            painful. Nor again is there anyone who loves or pursues or desires
            to obtain pain of itself, because it is pain, but occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure? On the
            other hand, we denounce with righteous indignation and dislike men
            who are so beguiled and demoralized by the charms of pleasure of the
            moment, so blinded by desire, that they cannot foresee the pain and
            trouble that are bound to ensue; and equal blame belongs to those
            who fail in their duty through weakness of will, which is the same
            as saying through shrinking from toil and pain. These cases are
            perfectly simple and easy to distinguish. In a free hour, when our
            power of choice is untrammeled and when nothing prevents our being
            able to do what we like best, every pleasure is to be welcomed and
            every pain avoided. But in certain circumstances and owing to the
            claims of duty or the obligations of business it will frequently
            occur that pleasures have to be repudiated and annoyances accepted.
            The wise man therefore always holds in these matters to this
            principle of selection: he rejects pleasures to secure other greater
            pleasures, or else he endures pains to avoid worse pains
          </div>
        </div>

        <div style={styles.blogdivs}>
          <div style={styles.blogConclusion}>
            This is the conclusion of the blog. here this will end the blog
            .Write all the things that need to be concluded gfrom the abobe blog
          </div>
        </div>
      </div>
      {/* service details image here */}
      <img
        style={{
          width: "100%",
          maxWidth: "1400px",
          height: "auto",
          margin: "20px",
          border: `solid 2px ${Colors.five}`,
          maxHeight: "600px",
          minHeight: "270px",
        }}
        src={Picture.services}
        alt="services details"
      />
    </div>
  );
}
const styles = {
  starting: {
    marginTop: "13.5vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  blogtitle: {
    height: "70px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.six,
  },
  blogtitletext: {
    fontWeight: "bolder",
    textAlign: "center",
    fontSize: "21px",
    color: Colors.text1,
  },
  blogimage: {
    height: "auto",
    width: "100%",
    // backgroundImage: `URL(${Picture.homewall})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    maxHeight: "556px",
    minHeight: "230px",
  },
  blogdivs: {
    width: "90%",
    height: "auto",
    margin: "20px auto",
    backgroundColor: Colors.six,
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "12px",
  },
  blogintrotext: {
    textAlign: "left",
    color: Colors.text1,
    fontSize: "18px",
    margin: "6px",
  },
  blogdesc: {
    padding: "10px",
    textAlign: "left",
    fontSize: "18px",
    color: Colors.one,
  },
  blogConclusion: {
    color: Colors.text1,
    fontSize: "18px",
  },
};

export default BlogDetailsPage;
