// import React, { Component } from "react";

// class UpdatePic extends Component {
//   state = {};
//   render() {
//     return <p>this is edit to password</p>;
//   }
// }
import React, { useState } from "react";

function UpdatePic() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "videocourse");
    setLoading(true);
    const res = await fetch(
      " https://api.cloudinary.com/v1_1/dwh9qmkfa/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();

    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <div>
      <h1>upload image</h1>
      <input
        type="file"
        name="file"
        placeholder="upload a an image"
        onChange={uploadImage}
      />
      {loading ? <h3>loading...</h3> : <img src={image} alt="pic"></img>}
    </div>
  );
}

export default UpdatePic;
