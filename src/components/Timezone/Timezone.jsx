// import { useTimezoneSelect, allTimezones } from "react-timezone-select";
// import Select from "react-select";

// import PropTypes from "prop-types";

// const Timezone = ({ onChange }) => {
//   const labelStyle = "original";
//   const timezones = {
//     ...allTimezones,
//     "Europe/Berlin": "Frankfurt",
//   };


//   const { options, parseTimezone } = useTimezoneSelect({
//     labelStyle,
//     timezones,
//     isSearchable:true,
//   });


//   const handleTimezoneChange = (e) => {
//     const selectedTimezone = parseTimezone(e.currentTarget.value);
//     onChange(selectedTimezone);
//   };

//   return (
//     <>
//       {/* <div className="text-sm w-full md:min-w-10">
//         <Select
//           options={options.map((option) => option.value)}
//           value={options.values}
//           defaultInputValue={options.map((option) => option.value)}
//           onChange={handleTimezoneChange}
//         />
//       </div> */}
//       <select className="text-sm border-1 max-w-28 p-2" onChange={handleTimezoneChange}>

//         {options.map((option) => (
//           <option value={option.value} key={option.value}>
//             {option.value}
//           </option>
//         ))}
//       </select>
//     </>
//   );
// };

// Timezone.propTypes = {
//   onChange: PropTypes.func.isRequired,
// };



// export default Timezone;
