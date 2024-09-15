import React from 'react';
import a from '../assests/fake.png';
import b from '../assests/bottle.png';
import { GrPowerCycle } from "react-icons/gr";

const Card = ({ key, title, owner, id, registrationDate, description, status, statusDate, renewalDate, classes }) => {
  const displayClasses = classes.length > 3 ? classes.slice(0, 3) : classes;

  return (
    <div className="flex flex-row items-center rounded-lg p-5 w-[65vw] shadow-lg cursor-pointer">
      <div className="flex-1">
        <img src={a} alt="" />
      </div>

      <div className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col">
          <h2 className="font-bold">{title}</h2>
          <span>{owner}</span>
        </div>

        <div className="flex flex-col">
          <h2 className="font-bold">{id}</h2>
          <span>{registrationDate}</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 flex-1">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="bg-green-500 border border-green-500 rounded-full h-2 w-2"></div>
            <h2 className="font-bold text-green-500">{`Live/${status}`}</h2>
          </div>
          <span>{`on  ${statusDate}`}</span>
        </div>

        <div className="flex flex-row items-center justify-center gap-4">
          <GrPowerCycle color='red' />
          <span>{renewalDate}</span>
        </div>
      </div>

      <div className="w-[20vw]">
        <div className="flex flex-col gap-8">
          <p>{description}</p>
          <div className="flex flex-row items-center w-[20vw] gap-4">
            {displayClasses.map((classItem, index) => (
              <div className="flex flex-row items-center justify-center gap-1 w-[10vw]" key={index}>
                <img src={b} className="h-[4vh] w-[4vh]" />
                <span>{`Class ${classItem}`}</span>
              </div>
            ))}
            {classes.length > 3 && (
              <div className="flex flex-row items-center justify-center gap-1 w-[10vw]">
                <span>...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;


//COMPLETELY MADE FROM CSS

// import React from 'react';
// import './Card.css';
// import a from '../assests/fake.png'
// import b from '../assests/bottle.png'
// import { GrPowerCycle } from "react-icons/gr";
// const Card = ({key,title,owner,id,registrationDate,description,status,statusDate,renewalDate,classes}) => {
//     // console.log({ markIdentification, owner, registrationNumber, registrationDate, description, classCodes })
//     const displayClasses = classes.length > 3 ? classes.slice(0, 3) : classes;
//     return (
//     <div className="card">
//         <div className="imgs">
//             <img src={a} alt="" />
//         </div>
//         <div className="details">
//             <div className="det">
//                 <h2 style={{fontWeight:"bold"}}>{title}</h2>
//                 <span>{owner}</span>
//             </div>
//             <div className="det">
//                 <h2 style={{fontWeight:"bold"}}>{id}</h2>
//                 <span>{registrationDate}</span>
//             </div>
//         </div>
//         <div className="status">
//             <div className="stat">
//                 {/* <div className="st"> */}
//                     <div className="live">
//                         <div className="round"></div>
//                         <h2 style={{fontWeight:"bold",color:"green"}}>{`Live/${status}`}</h2>
//                     </div>
//                     <span>{`on  ${statusDate}`}</span>
//                 {/* </div> */}
//             </div>
//             <div className="stat">
//                 <div className="nlive">
//                     <GrPowerCycle color='red'/>
//                     <span>{renewalDate}</span>
//                 </div>
//             </div>
//         </div>
//         <div className="description" style={{width:"20vw"}}>
//             <div className="descrip" style={{ display:"flex",gap:"2rem",flexDirection:"column"}}>
//                 <p>{description}</p>
//                 <div className="d">
//                     {displayClasses.map((classItem, index) => (
//                     <div className="img" key={index} >
//                         <img src={b} style={{height:"4vh",width:"4vh"}}/>
//                         <span>Class {classItem}</span>
//                     </div>
//                     ))}
//                     {classes.length > 3 && (
//                     <div className="img">
//                         <span>...</span>
//                     </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     </div>
//   );
// };

// export default Card;


