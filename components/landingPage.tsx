import React, { useState } from 'react'
import { WordArrays, AnyPositionCounter, PositionCounter }from './wordArrays'
import { FormControl, Input,  InputLabel, FormHelperText, Button, Typography, Card} from '@material-ui/core'
import Chart from './chart'
import Optimal from './optimalWords'

export default function LandingPage() {
  const [word, setWord] = useState("")
  const [show, setShow] = useState(false)
  const [positionalData, setPositionalData] = useState([])
  const [anyPositionData, setAnyPositionData] = useState({word: [], data: [] })
  const words = WordArrays()
  const mostCommonCharsPosition = PositionCounter(words)
  const mostCommonChars = AnyPositionCounter(words)

  
  function checkWord(word: string){
    if(words.includes(word)){
      setShow(true)
      positionalDataSet(word)
      anyPositionDataSet(word)
    }else{
      setShow(false)
      console.log("word not in Array")
    }
  }

  function positionalDataSet(word: string){
    var data = []
    word.split('').forEach((char,index) =>{
      data.push(mostCommonCharsPosition[index][char])
    })
    setPositionalData(data)
  }

  function anyPositionDataSet(word:string){
    var data = []
    const unique = new Set(word.split(""))
    unique.forEach(char => {
      data.push(mostCommonChars[char])
    })
    setAnyPositionData({
      word: Array.from(unique),
      data: data})
  }
  
  function add(accumulator: number, a: number) {
    return accumulator + a;
  }
  

  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="word">Word</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" value={word}  onChange={(e)=>{
          setWord(e.target.value);
          checkWord(e.target.value);
          }} />
        <FormHelperText id="my-helper-text">Enter 5 characters only!</FormHelperText>
      </FormControl>
      <Button onClick={()=> {setWord(""); setShow(false)}}>Clear</Button>
      {!show && (<Typography color='error'>Enter 5 a valid word letter.</Typography>)}
      {show && (
        <>
          <Card variant="outlined">
            <Typography variant='h6'>How many times a letter appeared in the same position</Typography>
            <Typography>Score: {positionalData.reduce(add,0)}</Typography> 
            <Chart labels={word.split('')} dataset={positionalData}/>
          </Card><br/>
          <Card variant="outlined">
            <Typography variant='h6'>How many times a letter appeared in any position</Typography>
            <Typography>Score: {anyPositionData.data.reduce(add,0)}</Typography> 
            <Chart labels={anyPositionData.word} dataset={anyPositionData.data}/>
          </Card><br/>
          <Card>
              <Typography>Total Score: {positionalData.reduce(add,0)+anyPositionData.data.reduce(add,0)}</Typography>
          </Card><br/>
          <Optimal/>
        </>
      )}
    </div>
  )
}