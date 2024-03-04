import { useEffect, useState } from "react";
import OrganizerView from "./OrganizerView";
import ParticipantView from "./ParticipantView";
import OrganizerParticipantsToggler from "./OrganizerParticipantsToggler";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import Calendar from "./Calendar/Calendar";
import Slots from "./Slots";
import BookingForm from "../BookingForm/BookingForm";
import useTransTackData from "../../hooks/useTransTackData";
import { ClockIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { SiGooglemeet } from "react-icons/si";
import Timezone from "../../components/Timezone/Timezone";
// import iconGoogleMeet from "../../assets/";

const DynamicMeetingPage = () => {
  const [isOrganizerView, setIsOrganizerView] = useState(true);
  const [meetingDetails, setMeetingDetails] = useState({});
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [accessToken, setAccessToken] = useState(null);
  const { id } = useParams();
  const axios = useAxiosPublic();

  // Fetch event document by that id
  useEffect(() => {
    const fetchMeetingDetails = async () => {
      try {
        const res = await axios.get(`/events/singleEvent/${id}`);
        if (res.data) {
          setMeetingDetails(res.data);
        }
      } catch (error) {
        console.error("Error fetching meeting details:", error);
      }
    };
    fetchMeetingDetails();
  }, [axios, id]);

  // Fetch access token on component mount
  useEffect(() => {
    const accessToken = localStorage.getItem("access-token");
    setAccessToken(accessToken);
  }, []);

  // Handle confirmation button click
  const handleConfirmation = () => {
    console.log("Selected date:", selectedDate);
    console.log("Selected day:", selectedDay);

    // Generate Google Calendar token
    generateToken();
  };

  // Handle availability submission
  const handleAvailabilitySubmission = (selectedTimeSlots) => {
    console.log("Selected time slots:", selectedTimeSlots);
  };

  // Function to generate Google Calendar token
  const generateToken = async () => {
    try {
      const logRes = await axios.get("/google");
      if (logRes.status) {
        window.location.replace(logRes.data);
        localStorage.setItem("eventId", id);
      }
    } catch (error) {
      console.error("Error generating Google Calendar token:", error);
    }
  };

  return (
    <section className="bg-[#FAFAFA] shadow-orange-700 shadow-xl">
      <div className="max-w-6xl bg-white mx-auto">
        <header className="bg-primary p-2 text-white">Dynamic page</header>

        <div className="grid grid-cols-12 gap-5 p-2">
          {/* Content based on Organizer or Participant view */}
          <div className="col-span-3">
            <div>
              <UserCircleIcon className="h-6 w-6" />
              <p className="text-md">Forhad Hossain</p>
            </div>
            <h2 className="text-2xlb font-bold">Title</h2>
            <div className="flex gap-2 text-md">
              {" "}
              <ClockIcon className="h-6 w-6" /> 15 mins
            </div>
            {/* <div className="flex gap-2> <SiGooglemeet className="text-green-500"/> Google meet </div> */}
<Timezone/>
          </div>
          {/* Calendar integration */}
          <div className="bg-[#f5f5f5c5]  col-span-6">
            <Calendar
              type={""}
              setSelectedDate={setSelectedDate}
              setSelectedDay={setSelectedDay}
            />
          </div>
          <div className="grid-cols-3">
            <h1 className="font-semibold sticky top-0 bg-white py-2">
              {selectedDay ? selectedDay : "Friday"}
            </h1>
            <Slots slotDay={selectedDay} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicMeetingPage;

// {
//   <div
//     className={`transition-opacity col-span-3 ${
//       isOrganizerView ? "opacity-100" : "opacity-100"
//     } duration-300 ease-in-out sticky top-0 h-screen`}
//   >
//     {/* Toggle between Organizer and Participant views */}
//     <OrganizerParticipantsToggler
//       setIsOrganizerView={setIsOrganizerView}
//       isOrganizerView={isOrganizerView}
//     />

//     {isOrganizerView ? (
//       <OrganizerView
//         meetingDetails={meetingDetails}
//         onConfirmation={handleConfirmation}
//         onReschedule={() => console.log("Reschedule clicked")}
//       />
//     ) : (
//       <ParticipantView
//         meetingDetails={meetingDetails}
//         onAvailabilitySubmit={handleAvailabilitySubmission}
//       />
//     )}
//   </div>;
// }









{/*
Pacific / Niue;
Pacific / Pago_Pago;
Pacific / Honolulu;
Pacific / Rarotonga;
Pacific / Tahiti;
Pacific / Marquesas;
America / Adak;
Pacific / Gambier;
America / Anchorage;
America / Juneau;
America / Metlakatla;
America / Nome;
America / Sitka;
America / Yakutat;
Pacific / Pitcairn;
America / Dawson;
America / Dawson_Creek;
America / Creston;
America / Whitehorse;
America / Phoenix;
America / Fort_Nelson;
America / Vancouver;
America / Los_Angeles;
America / Tijuana;
America / Hermosillo;
Pacific / Galapagos;
America / Boise;
America / Denver;
America / Inuvik;
America / Yellowknife;
America / Cambridge_Bay;
America / Ojinaga;
America / Edmonton;
Pacific / Easter;
America / Mazatlan;
America / Chihuahua;
America / Belize;
America / Guatemala;
America / Costa_Rica;
America / Managua;
America / Regina;
America / El_Salvador;
America / Swift_Current;
America / Tegucigalpa;
America / Rio_Branco;
America / Eirunepe;
America / Cancun;
America / Atikokan;
America / Panama;
America / Jamaica;
America / Bogota;
America / Lima;
America / Bahia_Banderas;
America / North_Dakota / Beulah;
America / Winnipeg;
America / Matamoros;
America / Menominee;
America / Merida;
America / Mexico_City;
America / Monterrey;
America / Indiana / Knox;
America / North_Dakota / New_Salem;
America / Rankin_Inlet;
America / Resolute;
America / Rainy_River;
America / Indiana / Tell_City;
America / North_Dakota / Center;
America / Chicago;
America / Guayaquil;
America / Boa_Vista;
America / Campo_Grande;
America / Cuiaba;
America / Manaus;
America / Porto_Velho;
America / Barbados;
America / Blanc - Sablon;
America / Curacao;
America / Martinique;
America / Port_of_Spain;
America / Puerto_Rico;
America / Santo_Domingo;
America / La_Paz;
America / Caracas;
America / Indiana / Vevay;
America / Indiana / Vincennes;
America / Grand_Turk;
America / Detroit;
America / Iqaluit;
America / Indiana / Indianapolis;
America / Kentucky / Louisville;
America / Indiana / Marengo;
America / Kentucky / Monticello;
America / Nassau;
America / Nipigon;
America / New_York;
America / Pangnirtung;
America / Indiana / Petersburg;
America / Port - au - Prince;
America / Thunder_Bay;
America / Toronto;
America / Indiana / Winamac;
America / Guyana;
America / Havana;
America / Asuncion;
America / Santiago;
America / Argentina / Buenos_Aires;
America / Argentina / Jujuy;
America / Argentina / Catamarca;
America / Argentina / Cordoba;
America / Argentina / La_Rioja;
America / Argentina / Mendoza;
America / Argentina / Rio_Gallegos;
America / Argentina / Salta;
America / Argentina / San_Luis;
America / Argentina / San_Juan;
America / Argentina / Tucuman;
America / Argentina / Ushuaia;
Atlantic / Bermuda;
America / Halifax;
America / Glace_Bay;
America / Goose_Bay;
America / Moncton;
America / Thule;
America / Araguaina;
America / Bahia;
America / Belem;
America / Maceio;
America / Recife;
America / Sao_Paulo;
America / Santarem;
America / Fortaleza;
Antarctica / Palmer;
America / Punta_Arenas;
Antarctica / Rothera;
America / Paramaribo;
America / Montevideo;
Atlantic / Stanley;
America / Cayenne;
America / St_Johns;
America / Nuuk;
America / Miquelon;
America / Noronha;
Atlantic / South_Georgia;
Atlantic / Cape_Verde;
Atlantic / Azores;
America / Scoresbysund;
UTC;
Etc / GMT;
Africa / Abidjan;
Africa / Accra;
Africa / Bissau;
America / Danmarkshavn;
Africa / Monrovia;
Atlantic / Reykjavik;
Africa / Sao_Tome;
Europe / London;
Africa / Lagos;
Africa / Ndjamena;
Atlantic / Canary;
Europe / Lisbon;
Atlantic / Madeira;
Atlantic / Faroe;
Africa / El_Aaiun;
Europe / Dublin;
Africa / Casablanca;
Africa / Algiers;
Africa / Tunis;
Africa / Cairo;
Europe / Kaliningrad;
Africa / Tripoli;
Antarctica / Troll;
Africa / Windhoek;
Africa / Juba;
Africa / Maputo;
Africa / Khartoum;
Europe / Amsterdam;
Europe / Andorra;
Europe / Belgrade;
Europe / Berlin;
Europe / Brussels;
Europe / Budapest;
Europe / Warsaw;
Europe / Vienna;
Europe / Gibraltar;
Europe / Copenhagen;
Europe / Luxembourg;
Europe / Madrid;
Europe / Malta;
Europe / Monaco;
Europe / Oslo;
Europe / Paris;
Europe / Prague;
Europe / Rome;
Africa / Ceuta;
Europe / Stockholm;
Europe / Tirane;
Europe / Zurich;
Africa / Johannesburg;
Europe / Volgograd;
Africa / Nairobi;
Asia / Amman;
Europe / Athens;
Asia / Beirut;
Europe / Bucharest;
Europe / Vilnius;
Asia / Gaza;
Asia / Damascus;
Europe / Zaporozhye;
Europe / Kiev;
Europe / Chisinau;
Asia / Nicosia;
Europe / Riga;
Europe / Sofia;
Europe / Tallinn;
Europe / Uzhgorod;
Asia / Hebron;
Europe / Helsinki;
Asia / Jerusalem;
Europe / Kirov;
Europe / Minsk;
Europe / Moscow;
Europe / Simferopol;
Asia / Baghdad;
Asia / Qatar;
Asia / Riyadh;
Antarctica / Syowa;
Europe / Istanbul;
Asia / Famagusta;
Asia / Baku;
Asia / Yerevan;
Europe / Astrakhan;
Asia / Tbilisi;
Indian / Mauritius;
Asia / Dubai;
Indian / Reunion;
Europe / Samara;
Europe / Saratov;
Indian / Mahe;
Europe / Ulyanovsk;
Asia / Kabul;
Asia / Tehran;
Asia / Yekaterinburg;
Asia / Aqtau;
Asia / Aqtobe;
Asia / Atyrau;
Asia / Qyzylorda;
Asia / Oral;
Indian / Maldives;
Antarctica / Mawson;
Asia / Karachi;
Asia / Dushanbe;
Asia / Ashgabat;
Asia / Samarkand;
Asia / Tashkent;
Indian / Kerguelen;
Asia / Kolkata;
Asia / Colombo;
Asia / Kathmandu;
Asia / Dhaka;
Asia / Thimphu;
Antarctica / Vostok;
Asia / Almaty;
Asia / Qostanay;
Indian / Chagos;
Asia / Bishkek;
Asia / Omsk;
Asia / Urumqi;
Indian / Cocos;
Asia / Yangon;
Asia / Barnaul;
Antarctica / Davis;
Asia / Jakarta;
Asia / Pontianak;
Asia / Bangkok;
Asia / Ho_Chi_Minh;
Asia / Krasnoyarsk;
Asia / Novokuznetsk;
Asia / Novosibirsk;
Indian / Christmas;
Asia / Tomsk;
Asia / Hovd;
Asia / Brunei;
Asia / Hong_Kong;
Australia / Perth;
Asia / Irkutsk;
Asia / Macau;
Asia / Shanghai;
Asia / Kuala_Lumpur;
Asia / Kuching;
Asia / Singapore;
Asia / Taipei;
Asia / Ulaanbaatar;
Asia / Choibalsan;
Asia / Manila;
Asia / Makassar;
Australia / Eucla;
Asia / Jayapura;
Asia / Dili;
Asia / Pyongyang;
Asia / Seoul;
Pacific / Palau;
Asia / Khandyga;
Asia / Chita;
Asia / Yakutsk;
Asia / Tokyo;
Australia / Adelaide;
Australia / Broken_Hill;
Australia / Darwin;
Asia / Vladivostok;
Asia / Ust - Nera;
Antarctica / Macquarie;
Australia / Melbourne;
Australia / Sydney;
Australia / Hobart;
Australia / Brisbane;
Australia / Lindeman;
Antarctica / DumontDUrville;
Pacific / Port_Moresby;
Pacific / Chuuk;
Pacific / Guam;
Australia / Lord_Howe;
Pacific / Bougainville;
Pacific / Efate;
Antarctica / Casey;
Pacific / Kosrae;
Asia / Magadan;
Pacific / Noumea;
Pacific / Norfolk;
Pacific / Pohnpei;
Asia / Sakhalin;
Pacific / Guadalcanal;
Asia / Srednekolymsk;
Asia / Anadyr;
Pacific / Kwajalein;
Pacific / Majuro;
Pacific / Nauru;
Pacific / Auckland;
Pacific / Tarawa;
Asia / Kamchatka;
Pacific / Funafuti;
Pacific / Wallis;
Pacific / Wake;
Pacific / Fiji;
Pacific / Chatham;
Pacific / Apia;
Pacific / Enderbury;
Pacific / Fakaofo;
Pacific / Tongatapu;
Pacific / Kiritimati;
*/}