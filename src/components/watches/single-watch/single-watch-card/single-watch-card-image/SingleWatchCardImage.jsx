import { useState } from "react";

const SingleWatchCardImage = () => {
  const [mainImg, setMainImg] = useState(
    "https://images.unsplash.com/photo-1619134778706-7015533a6150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwd2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
  );

  const chooseMainImg = (evt) => {
    setMainImg(evt.target.src);
  };

  return (
    <div className="single-watch-card-image">
      <img src={mainImg} alt="Watch" />

      <div className="single-watch-card-image-imgs">
        <img
          src="https://images.unsplash.com/photo-1619134778706-7015533a6150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwd2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt=""
          onClick={chooseMainImg}
        />

        <img
          src="https://img.freepik.com/premium-photo/watch-vintage-pocket-with-smoke-black-background_309761-600.jpg"
          alt=""
          onClick={chooseMainImg}
        />

        <img
          src="https://media.istockphoto.com/id/1065329058/photo/premium-mens-watch-on-hand-close-up.jpg?s=612x612&w=0&k=20&c=VdpUac8ObrDZZ0I8OCD_vOxPqyOUCa3cM8zoqXsPkuE="
          alt=""
          onClick={chooseMainImg}
        />
      </div>
    </div>
  );
};

export default SingleWatchCardImage;
