import React, { useState } from "react";

function Videos() {
  const [video, setVideo] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadVideo = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "videocourse");
    setLoading(true);
    const res = await fetch(
      " https://api.cloudinary.com/v1_1/dwh9qmkfa/video/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();

    setVideo(file.secure_url);
    setLoading(false);
  };

  return (
    <div>
      <h1>upload video</h1>
      <input
        type="file"
        name="file"
        placeholder="upload a video"
        onChange={uploadVideo}
      />
      {loading ? (
        <h3>loading...</h3>
      ) : (
        <video controls>
          <source src={video} />
        </video>
      )}
    </div>
  );
}

export default Videos;
