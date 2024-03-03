import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { uploadImage } from "../../../api/utils";
import useUserData from "../../../hooks/useUserData";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const Profile = () => {
  const imgInputRef = useRef(null);
  const [selectedImg, setSelectedImg] = useState(null);
  const [userName, setUserName] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userLanguage, setUserLanguage] = useState("");
  const [userDateFormat, setUserDateFormat] = useState("");
  const [userTimeFormat, setUserTimeFormat] = useState("");
  const [countryName, setCountryName] = useState("");
  const [userDB, refetch] = useUserData();
  const { updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();

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
      // upload image to imgbb
      const imageData = await uploadImage(selectedImg);

      // update the user profile
      await updateUserProfile(userName, imageData?.data?.display_url);

      const user = {
        userName,
        userMessage,
        userLanguage,
        userDateFormat,
        userTimeFormat,
        countryName,
        userPhoto: imageData?.data?.display_url,
      };

      // save updated user to database
      const { data } = await axiosPublic.put(
        `/users/updateProfile/${userDB?.email}`,
        user
      );
      if (data?.modifiedCount > 0) {
        toast.success("Profile Updated!", {
          style: {
            borderRadius: "8px",
            background: "#333",
            color: "#fff",
          },
        });
        refetch();
      }
    } catch (error) {
      toast.error("Profile Update Failed!", {
        style: {
          borderRadius: "8px",
          background: "#333",
          color: "#fff",
        },
      });
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
        <form onSubmit={handleSubmit} className="mt-8 max-w-[420px]">
          <div className="flex gap-12 mb-5">
            <div className="w-[90px] h-[90px]">
              {userDB?.photo ? (
                <img
                  src={userDB?.photo}
                  alt="placeholder"
                  className="rounded-full"
                />
              ) : (
                <img
                  src="https://i.ibb.co/RT8GC9Q/placeholder.png"
                  alt="placeholder"
                  className="rounded-full"
                />
              )}
            </div>
            <div className="flex flex-col justify-center">
              <div>
                <button
                  onClick={handleUploadImage}
                  className="border-2 h-[36px] text-sm bg-gradient-blue p-[1px] rounded-full relative transform active:scale-95 transition"
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
          <div>
            <label htmlFor="name" className="font-semibold text-[#1A1A1A]">
              Name
            </label>
            <input
              defaultValue={userDB?.name}
              type="text"
              id="name"
              onChange={(e) => setUserName(e.target.value)}
              className="w-full h-[46px] border border-[#B2B2B2] mt-2 rounded-lg px-[14px] py-[10px] focus:outline-special"
              required
            />
          </div>
          <div className="mt-8">
            <label htmlFor="message" className="font-semibold text-[#1A1A1A]">
              Welcome Message
            </label>
            <textarea
              id="message"
              className="w-full h-[118px] border border-[#B2B2B2] mt-2 rounded-lg px-[14px] py-[10px] focus:outline-special"
              placeholder="Type here..."
              defaultValue={userDB?.bio}
              onChange={(e) => setUserMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mt-8">
            <label
              htmlFor="lang"
              className="font-semibold text-[#1A1A1A] block"
            >
              Language
            </label>
            <select
              id="lang"
              className="select select-bordered w-full mt-2 border border-[#B2B2B2] focus:outline-special"
              defaultValue={userDB?.language}
              onChange={(e) => setUserLanguage(e.target.value)}
            >
              <option value="" disabled>
                Select
              </option>
              <option value="english">English</option>
              <option value="french">French</option>
              <option value="spanish">Spanish</option>
              <option value="german">German</option>
              <option value="portuguese">Portuguese (Brazil)</option>
            </select>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="dateFormat"
                className="font-semibold text-[#1A1A1A] block"
              >
                Date Format
              </label>
              <select
                id="dateFormat"
                className="select select-bordered w-full mt-2 border border-[#B2B2B2] focus:outline-special"
                defaultValue={userDB?.dateFormat}
                onChange={(e) => setUserDateFormat(e.target.value)}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="dd/mm/yyyy">DD/MM/YYYY</option>
                <option value="mm/dd/yyyy">MM/DD/YYYY</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="timeFormat"
                className="font-semibold text-[#1A1A1A] block"
              >
                Time Format
              </label>
              <select
                id="timeFormat"
                className="select select-bordered w-full mt-2 border border-[#B2B2B2] focus:outline-special"
                defaultValue={userDB?.timeFormat}
                onChange={(e) => setUserTimeFormat(e.target.value)}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="12h">12h (am/pm)</option>
                <option value="24h">24h</option>
              </select>
            </div>
          </div>
          <div className="mt-8">
            <label
              htmlFor="countryName"
              className="font-semibold text-[#1A1A1A] block"
            >
              Country
            </label>
            <select
              id="countryName"
              className="select select-bordered w-full mt-2 border border-[#B2B2B2] focus:outline-special"
              defaultValue={userDB?.country}
              onChange={(e) => setCountryName(e.target.value)}
            >
              <option value="" disabled>
                Select
              </option>
              {countries?.map((country) => (
                <option key={country} value={country?.toLowerCase()}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-8 flex gap-4">
            <button
              type="submit"
              className="h-12 px-[14px] text-white font-medium bg-gradient-blue rounded-full cursor-pointer hover:bg-gradient-to-r hover:from-special hover:to-head active:scale-95"
            >
              Save Changes
            </button>
            <button
              type="reset"
              className="border-2 h-12 text-white bg-gradient-blue p-[1px] rounded-full relative transform active:scale-95 transition"
            >
              <div className="bg-white h-full w-full px-[14px] flex items-center justify-center rounded-full hover:bg-[#E4EDFF] transition text-[#1A1A1A]">
                Cancel
              </div>
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Profile;

const countries = [
  "Argentina",
  "Australia",
  "Austria",
  "Bangladesh",
  "Belgium",
  "Brazil",
  "Canada",
  "Chile",
  "China",
  "Colombia",
  "Czech Republic",
  "Denmark",
  "Egypt",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hong Kong",
  "Hungary",
  "India",
  "Indonesia",
  "Ireland",
  "Israel",
  "Italy",
  "Japan",
  "Malaysia",
  "Mexico",
  "Netherlands",
  "New Zealand",
  "Norway",
  "Pakistan",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Romania",
  "Russia",
  "Saudi Arabia",
  "Singapore",
  "South Africa",
  "South Korea",
  "Spain",
  "Sweden",
  "Switzerland",
  "Taiwan",
  "Thailand",
  "Turkey",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Vietnam",
];
