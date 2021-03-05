import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContentText, Grid, Typography } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import { getMatchDetail } from '../api/Api';
const MyCard = ({match}) =>{

    const[detail, setDetail] = useState({});

    const[open, setOpen] = useState(false);


    const handleClick = (id) => {
       
        getMatchDetail(id).then(data=> {console.log("Match Data",data)
        setDetail(data);
        handleOpen();
    })
        .catch(error => console.log(error));
    };


    const getMatchCart=()=> {
        return (
            <Card>
                <CardContent>
                <Grid container justify="center" alignItem="center" spacing={6}>
                    <Grid item>
                        <Typography variant="h5">{match["team-1"]}</Typography>
                    </Grid>
                    <Grid item> 

                     </Grid>
                    <Grid item> 
                    <Typography variant="h5">{match["team-2"]}</Typography>
                    </Grid>

                </Grid>
             </CardContent>
             <CardActions>
                 <Grid container justify="center"  >
                 <Button  onClick={()=>{
                     handleClick(match.unique_id)
                 }}
                 variant="contained" color="primary">
                     Show Details
                 </Button>
                 <Button 
                 style={{margin:5}}
                 variant="contained" color="primary">
                    Start Time {new Date(match.dateTimeGMT).toLocaleString()}
                 </Button>
                 </Grid>
                 
                    
            
             </CardActions>
            </Card>
        );

        
    };

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const getDialog = () => (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">
                {"Match Detail..."}
            </DialogTitle>
            <DialogContentText id="alert-dialog-description">
                <Typography>{detail.stat}</Typography>
                <Typography>
                    Match <span >{detail.matchStarted ? "started": "Still not started"}{" "}</span>
                </Typography>
                <Typography>
                    Score
                    <span>
                    {detail.score}
                    </span>
                </Typography>

            </DialogContentText>
            <DialogActions>
                <Button onClick={handleClose} color="primery" autofocus>
                    Close
                </Button>
            </DialogActions>

        </Dialog>

    );

    return ( 
    <Fragment>
    {getMatchCart()}
    {getDialog()}
    </Fragment>
    );
    
};

export default MyCard;