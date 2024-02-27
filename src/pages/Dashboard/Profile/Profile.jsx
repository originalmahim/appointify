import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { uploadImage } from "../../../api/utils";

const Profile = () => {
  const imgInputRef = useRef(null);
  const [selectedImg, setSelectedImg] = useState(null);

  const handleUploadImage = (e) => {
    e.preventDefault();
    imgInputRef.current.click();
  };

  const handleImgChange = (e) => {
    const img = e.target.files[0];
    if (img) {
      setSelectedImg(img);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const imageData = await uploadImage(selectedImg);
      console.log(imageData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Appointify | Profile</title>
      </Helmet>
      <section>
        <p className="font-semibold text-[#717171]">Account details</p>
        <h3 className="text-2xl font-bold mt-3">Profile</h3>
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="flex gap-12">
            <div className="w-[90px] h-[90px]">
              <img
                src="https://i.ibb.co/RT8GC9Q/placeholder.png"
                alt="placeholder"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div>
                <button
                  onClick={handleUploadImage}
                  className="border-2 h-[36px] text-sm bg-gradient-to-r from-special to-head p-[1px] rounded-full relative transform active:scale-95 transition"
                >
                  <div className="bg-white h-full w-full flex items-center justify-center rounded-full hover:bg-[#E4EDFF] transition px-4 text-[#1A1A1A]">
                    Upload picture
                  </div>
                </button>
                <input
                  type="file"
                  name="img"
                  accept=".jpg, .jpeg, .png, .gif"
                  id="imgFile"
                  ref={imgInputRef}
                  className="hidden"
                  onChange={handleImgChange}
                />
              </div>
              <p className="mt-4 text-[#717171] font-light">
                JPG, GIF or PNG. Max size of 5MB.
              </p>
            </div>
          </div>
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
    </>
  );
};

export default Profile;
