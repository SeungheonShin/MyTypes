import { CardContent, TextField, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import sentenceList from '../data/sentenceList';
import { typography } from '@material-ui/system';

const useStyles = makeStyles({
    root: {
      maxWidth : '70%',
      margin : '0 auto',
    },
    content: {
      fontSize: 14,
      fontFamily: '\'Inconsolata\', monospace;'
    }
  });

const SentenceCard = () => {
    const classes = useStyles();
    const sentences = sentenceList;

    return(
        <Card className={classes.root}>
            {sentences.map((sentence) => 
            <CardContent key={sentence.slip.id}>
                <Typography className={classes.content} color="textSecondary">
                    {sentence.slip.advice}
                </Typography>
                <TextField></TextField>
            </CardContent>
            )}
            
        </Card>
    );
};

export default SentenceCard;