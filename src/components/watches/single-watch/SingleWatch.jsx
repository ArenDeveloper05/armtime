import BaseSingle from "../../common/base-single/BaseSingle";
import "./SingleWatch.scss";

const SingleWatch = () => {
  return (
    <div className="single-watch">
      <BaseSingle
        img1={
          "https://images.unsplash.com/photo-1619134778706-7015533a6150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwd2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        }
        img2={
          "https://img.freepik.com/premium-photo/watch-vintage-pocket-with-smoke-black-background_309761-600.jpg"
        }
        img3={
          "https://media.istockphoto.com/id/1065329058/photo/premium-mens-watch-on-hand-close-up.jpg?s=612x612&w=0&k=20&c=VdpUac8ObrDZZ0I8OCD_vOxPqyOUCa3cM8zoqXsPkuE="
        }
        title={"AWI GOLD V0101.1 Men's Automatic Mechanical 14K Gold Watch"}
        code={"A0001140-1"}
        price={3500}
        deliveryInfo={
          "Free international express shipping 0% interest loan — 100000 ֏ × 18 months"
        }
        type={"Automatic"}
      />
    </div>
  );
};

export default SingleWatch;
