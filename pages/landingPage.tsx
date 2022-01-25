import type { Options, Value } from '@react-page/editor'
import Editor from '@react-page/editor'
import React, { useState } from 'react'
import WordArrays from './wordArrays'
import { FormControl, Input,  InputLabel, FormHelperText, Button, Typography, Card} from '@material-ui/core'
import { countBy } from 'lodash'
import { Chart } from './chart'
import { Title } from '@material-ui/icons'

export default function LandingPage() {
  const [word, setWord] = useState("")
  const [show, setShow] = useState(false)
  const [positionalData, setPositionalData] = useState([])
  const words = WordArrays()
  

  function PositionCounter(words: string[]){
    var mostCommonCharsPosition = {}
    for (let i = 0; i < 5; i++) {
      var chars = new Array();
      words.forEach((word)=>{
        chars.push(word[i])
      })
      mostCommonCharsPosition[i] = countBy(chars)
    }
    return mostCommonCharsPosition
  }
  
  const mostCommonCharsPosition = PositionCounter(words)
  
  function checkWord(word: string){
    if(words.includes(word)){
      setShow(true)
      positionalDataSet(word)
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
  
  function add(accumulator, a) {
    return accumulator + a;
  }
  

  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="word">Word</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" value={word} onChange={(e)=>{
          setWord(e.target.value);
          checkWord(e.target.value);
          }} />
        <FormHelperText id="my-helper-text">Enter 5 characters only!</FormHelperText>
      </FormControl>
      <Button onClick={()=> {setWord(""); setShow(false)} }>Clear</Button>
      {show && (
        <Card variant="outlined">
          <Typography variant='h6'>How many times a letter appeared in the same position</Typography>
          <Typography>Score: {positionalData.reduce(add,0)}</Typography> 
          <Chart labels={word.split('')} positionalData={positionalData}/>
        </Card>
      )}
      
    </div>
  )
}