import React from 'react'

const DisplayMarks = () => {
    const students=[
        {name: 'Devansh' ,roll: 76 ,m1: 98 ,m2:87 ,m3:95},
        {name: 'Rahul' ,roll: 77 ,m1: 87 ,m2:89 ,m3:75},
        {name: 'Ramesh' ,roll: 78 ,m1: 58 ,m2:77 ,m3:86},
        {name: 'Nitin' ,roll: 79 ,m1: 93 ,m2:83 ,m3:79},
        {name: 'Abhishek' ,roll: 80 ,m1: 59 ,m2:86 ,m3:75},
        
    ]
  return (
    <div>
        {students.map((student,index)=>(<Marks name={student.name} roll={student.roll} m1={student.m1} m2={student.m2} m3={student.m3} >))}
    </div>
  )
};

export default DisplayMarks;