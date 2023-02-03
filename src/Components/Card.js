import React from 'react'
import styled from 'styled-components'

export default function Card(props) {
  return (
    <Cards>
        <Img>
        <div className='img'>

        <img src={props.image} alt="" />
        <h3 >{props.temp}°C</h3>
        </div>
        <div>

        <p>{props.city},{props.states}</p>
        <p>{props.status}</p>
        </div>
        </Img>
        <Deteails>
            <p>Country: <b> {props.country}</b></p>
            <p>Real Feel: <b>{props.feel} </b> °C</p>
            <p>Wind Speed:<b> {props.ws}  </b>kph</p>
            <p>Wind Direction:<b>{props.wd}</b></p>
            <p>Updated On :<b>{props.update} </b> </p>

        </Deteails>

      </Cards>
  )
}

const Cards =styled.div` 
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: 20px;
padding: 20px;

.img{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    

    h3{

        font-size: 45px;
    }
}

`
const Img =styled.div`

display: flex;
flex-direction: column;
align-items: center;

div{

 display: flex;
 flex-direction: column;
justify-content: center;
align-items: center;

    
}

`

const Deteails = styled.div`
text-align: center;

`


