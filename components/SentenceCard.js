import React, {useState, useRef, createRef, useEffect} from 'react';
import { CardContent, TextField, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import sentenceList from '../data/sentenceList';

const useStyles = makeStyles({
    root: {
      maxWidth : '80%',
      margin : '0 2em',
      fontFamily: '\'Inconsolata\', monospace;',
      fontSize: 16,
    },
    content: {
      maxWidth : '80%',
      margin : '0 2em',
      fontFamily: '\'Inconsolata\', monospace;',
      fontSize: 16,
    },
    wrong: {
      maxWidth : '80%',
      margin : '0 2em',
      fontFamily: '\'Inconsolata\', monospace;',
      fontSize: 16,
      color: '#FF0000',
    },
    correcting: {
      maxWidth : '80%',
      margin : '0 2em',
      fontFamily: '\'Inconsolata\', monospace;',
      fontSize: 16,
      color: '#00FF00'
    },
    correct: {
      maxWidth : '80%',
      margin : '0 2em',
      fontFamily: '\'Inconsolata\', monospace;',
      fontSize: 16,
      color: '#0000FF'
    }
  });

const SentenceCard = () => {
  const classes = useStyles();
  //first -> 0: wrong, 1: partially correct, 2: correct, 3: initial, second -> idx
  const [correctFlag, setCorrectFlag] = useState([3, 0]); 
  const [sentences, setSentences] = useState(sentenceList);
  const inputRefs = useRef(sentences.map(() => createRef()));
  const sentenceRefs = useRef(sentences.map(() => createRef()));

  useEffect(() => {
    let idx = correctFlag[1];
    let sentenceClass = null;
    // console.log(`now flag: ${correctFlag[0]}`);
    switch(correctFlag[0]) {
      case 0:
        sentenceClass = classes.wrong;
        break;
      case 1:
        sentenceClass = classes.correcting;
        break;
      case 2:
        sentenceClass = classes.correcting;
        break;
      case 3:
        sentenceClass = classes.content;
        break;
      default:
        sentenceClass = classes.correct;
    }
    sentenceRefs.current[idx].className = sentenceClass;
  }, [correctFlag]);


  const onSentenceChange = (advice, idx) => (e) => {
    if(e.target.value.length == 0) {
      setCorrectFlag([3, idx]);
    }

    else if(advice.length < e.target.value) {
      setCorrectFlag([0, idx]);
    }
    else if(advice == e.target.value) {
      setCorrectFlag([2, idx]);
    }
    else {
      let subString = advice.substr(0, e.target.value.length);
      setCorrectFlag(subString == e.target.value ? [1, idx] : [0, idx]);
    }
  }

  const onEnterPressed = (idx) => (e) => {
    if(e.key == 'Enter') {
      console.log(correctFlag);
      if(correctFlag[0] == 2) {
        console.log('true!');
        // sentenceRefs.current[idx].className = classes.correct;
        setCorrectFlag([4, idx]);
      }
      else {
        console.log('false!');
        setCorrectFlag([0, idx]);
      }
      inputRefs.current[idx].disabled = true;
      changeFocus(idx+1);
    }
  }

  const changeFocus = (index) => {
    // console.log(inputRefs);
    if(index >= sentences.length) {
      console.log('end of sentence list.');
      return;
    }
    if(inputRefs.current[index] == null) {
      console.log('ref is null.');
      return;
    }
    // console.log(inputRefs.current[index]);
    inputRefs.current[index].focus();
  };

  return(
    <Card className={classes.root}>
        {sentences.map((sentence, idx) => 
        <CardContent key={sentence.slip.id}>
            <Typography 
            className={classes.root} 
            color="textSecondary"
            ref={(input) => sentenceRefs.current[idx] = input}>
                {sentence.slip.advice}
            </Typography>
            <TextField 
            // className={classes.content}
            autoFocus={true}
            onChange={onSentenceChange(sentence.slip.advice, idx)} 
            onKeyPress={onEnterPressed(idx)}
            inputRef={(input) => inputRefs.current[idx] = input}
            inputProps={{style: {fontFamily: '\'Inconsolata\', monospace', width:400}}}
            // className={classes.content}
            style={{margin: '0 2em'}}
            // fullWidth={true}
            ></TextField>
        </CardContent>
        )}
    </Card>
  );
};

export default SentenceCard;