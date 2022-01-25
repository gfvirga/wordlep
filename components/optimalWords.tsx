import { Card, Typography, Button, Collapse, CardContent, TextField } from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'
import React, { useState } from 'react'
import optimalText from './optimalText'

export default function Optimal(){
  const [expand,setExpand] = useState(false)



  return(
    <Card>
      <Typography variant="body1">Expand for Optimal Words based on this data 
        <Button onClick={()=> setExpand(!expand)} style={{float: 'right'}}><ExpandMore/></Button>
      </Typography>
      <Collapse in={expand}>
        <CardContent>
          <TextField multiline fullWidth value={optimalText} />
        </CardContent>
      </Collapse>
    </Card>
  )
}