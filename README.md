# Wordle Probabilities

Probabilities page
https://gfvirga.github.io/wordlep/

On a terminal Run
```
python3 ./wordle.py --word <ENTER WORD>
```

Example Output
```
root@d8495af80bff:/app# python3 ./wordle.py --word spank
Position based probabilibity
Least helpful opening word 
'enzym' has a score of 1080
character: e appears: 303 in the position 1
character: n appears: 345 in the position 2
character: z appears: 142 in the position 3
character: y appears: 108 in the position 4
character: m appears: 182 in the position 5

Most helpful opening word 
'sores' has a score of 11144
character: s appears: 1565 in the position 1
character: o appears: 2096 in the position 2
character: r appears: 1198 in the position 3
character: e appears: 2327 in the position 4
character: s appears: 3958 in the position 5

Least helpful opening word 
'fuffy' has a score of 5700
character: y appears: 2074 in any position 1
character: f appears: 1115 in any position 2
character: u appears: 2511 in any position 3

Most helpful opening word 
'arose' has a score of 27913
character: e appears: 6662 in any position 1
character: s appears: 6665 in any position 2
character: r appears: 4158 in any position 3
character: a appears: 5990 in any position 4
character: o appears: 4438 in any position 5

Both scores combined
Least helpful opening word 
'xylyl' has a score of 7452

Most helpful opening word 
'tares' has a score of 37331

Best Words Position Based: [['sames', 10624], ['bares', 10655], ['cares', 10668], ['seres', 10676], ['sates', 10729], ['soles', 10794], ['sones', 10910], ['sales', 10961], ['sanes', 11077], ['sores', 11144]]
Best Words Any Position: [['toeas', 27050], ['aloes', 27126], ['aesir', 27234], ['reais', 27234], ['serai', 27234], ['arise', 27234], ['raise', 27234], ['aeros', 27913], ['soare', 27913], ['arose', 27913]]
Best Words Both: [['pares', 36099], ['aeros', 36132], ['cares', 36171], ['tales', 36194], ['dares', 36359], ['nares', 36498], ['rates', 36562], ['rales', 36870], ['lares', 37169], ['tares', 37331]]
'spank' has a score of 4079
character: s appears: 1565 in the position 1
character: p appears: 231 in the position 2
character: a appears: 1236 in the position 3
character: n appears: 788 in the position 4
character: k appears: 259 in the position 5
'spank' has a score of 19131
character: n appears: 2952 in any position 1
character: s appears: 6665 in any position 2
character: k appears: 1505 in any position 3
character: p appears: 2019 in any position 4
character: a appears: 5990 in any position 5
'spank' has a score of 23210
```