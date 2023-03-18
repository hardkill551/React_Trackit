import styled from "styled-components"

export default function Days({day, selectedDay, setSelectedDay, i, disable}){
    
    return (
        <Day data-test="habit-day" disabled={disable} array={selectedDay.days} i={i} onClick={()=>daySelect()}>{day}</Day>
    )
    
    function daySelect(){
        if(selectedDay.days.includes(i)){
            const newArray = selectedDay.days.filter((a)=>a!==i)
            setSelectedDay({...selectedDay, days:newArray})
        }
        else{
            setSelectedDay({...selectedDay, days:[...selectedDay.days, i]})
        }
        
    }
}

const Day = styled.button`
width:30px;
height:30px;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    font-size: 20px;
    color: ${a=>a.array.includes(a.i)?"white":"#DBDBDB"};;
    background-color:${a=>a.array.includes(a.i)?"#CFCFCF":"white"};
    margin-right:4px;
`