import { CardContent, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { typography } from '@material-ui/system';

const useStyles = makeStyles({
    root: {
      maxWidth : '70%',
      margin : '0 auto',
    },
    content: {
      fontSize: 14,
    }
  });

const WordCard = () => {
    const classes = useStyles();
    const words = {
        '01' : 'Word'
    };

    return(
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.content} color="textSecondary">
                    {words['01']}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default WordCard;