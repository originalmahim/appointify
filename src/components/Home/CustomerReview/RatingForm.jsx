/* eslint-disable react/prop-types */
import RatingAnimation from "../../../pages/RatingsPage/RatingAnimation";

const RatingForm = ({ handleRating }) => {
  return (
    <div className="flex flex-col 2xl:flex-row border-2 rounded-xl shadow-lg border-special">
      <form
        onSubmit={handleRating}
        className="flex flex-col flex-1 p-2 md:p-5 justify-center items-center"
      >
        <select
          name="rating"
          className="select border-special dark:bg-gray-500 dark:text-gray-300 select-bordered w-full max-w-xs md:max-w-xl text-center"
        >
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>

        <textarea
          required
          name="message"
          className="textarea border-special dark:bg-gray-600 textarea-lg mt-5 w-full max-w-xs md:max-w-xl text-center"
          placeholder="Write message"
        ></textarea>

        {/* buttons  */}
        <div className="p-3 mt-4 text-center space-x-4 md:block border-special">
          {/* <p className="btn btn-sm bg-blue-gray-200 md:btn-md">Cancel</p> */}
          <button
            type="submit"
            className="btn bg-special text-white btn-sm md:btn-md"
          >
            Rate
          </button>
        </div>
      </form>
      <div className="max-w-lg">
        <RatingAnimation></RatingAnimation>
      </div>
    </div>
  );
};

export default RatingForm;
