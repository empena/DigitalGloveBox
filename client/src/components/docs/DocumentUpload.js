import React, { useState, useEffect } from "react";
import axios from "axios";
import DocumentNavbar from "./DocumentNavbar";
import { AuthConsumer } from "../../providers/AuthProvider";
import { DocsContainer } from "../../styles/DocStyles";

const DocumentUpload = (props) => {
  const [car, setCar] = useState({});
  const { id } = props.match.params;
  const user_id = props.auth.user.id;

  useEffect(() => {
    axios
      .get(`/api/users/${user_id}/cars/${id}`)
      .then((res) => {
        setCar(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user_id, id]);

  return (
    <div style={styles.container}>
      <DocsContainer>
        <h1>Documents</h1>
        <h4>
          Upload and store all of you car-related documents, including your
          service records, insurance files and more.
        </h4>
        <hr className="solid"></hr>
        <h1>
          {car.year} {car.make} {car.model}
        </h1>
        <img className="centerImage" src={`${car.file}`} alt="user_car" />
        <br />
        <DocumentNavbar car_id={id} />
        <br />
      </DocsContainer>
    </div>
  );
};

const ConnectedDocumentUpload = (props) => (
  <AuthConsumer>
    {(auth) => <DocumentUpload {...props} auth={auth} />}
  </AuthConsumer>
);

export default ConnectedDocumentUpload;

const styles = {
  container: {
    padding: "5em 10% 6em",
    height: "100%",
    position: "relative",
    minHeight: "100%",
    overflow: "auto",
  },
};
