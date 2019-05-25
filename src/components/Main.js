import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {withRouter} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InstructionDialog from './dialogs/InstructionDialog';
import SwipeDialog from './dialogs/SwipeDialog';

import Topbar from './Topbar';
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardActions from "@material-ui/core/CardActions/CardActions";

const backgroundShape = require('../images/shape.svg');

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.grey['100'],
        overflow: 'hidden',
        background: `url(${backgroundShape}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: '0 400px',
        paddingBottom: 200
    },
    grid: {
        width: 1200,
        marginTop: 40,
        [theme.breakpoints.down('sm')]: {
            width: 'calc(100% - 20px)'
        }
    },
    paper: {
        padding: theme.spacing.unit * 3,
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    rangeLabel: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: theme.spacing.unit * 2
    },
    topBar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 32
    },
    outlinedButtom: {
        textTransform: 'uppercase',
        margin: theme.spacing.unit
    },
    actionButtom: {
        textTransform: 'uppercase',
        margin: theme.spacing.unit,
        width: 152
    },
    blockCenter: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center'
    },
    block: {
        padding: theme.spacing.unit * 2,
    },
    box: {
        marginBottom: 40,
        height: 65
    },
    inlining: {
        display: 'inline-block',
        marginRight: 10
    },
    buttonBar: {
        display: 'flex'
    },
    alignRight: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    noBorder: {
        borderBottomStyle: 'hidden'
    },
    loadingState: {
        opacity: 0.05
    },
    loadingMessage: {
        position: 'absolute',
        top: '40%',
        left: '40%'
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 500,
    },
});

class Main extends Component {

    state = {
        learnMoredialog: false,
        getStartedDialog: false
    };

    componentDidMount() {
    }

    openDialog = (event) => {
        this.setState({learnMoredialog: true});
    }

    dialogClose = (event) => {
        this.setState({learnMoredialog: false});
    }

    openGetStartedDialog = (event) => {
        this.setState({getStartedDialog: true});
    }

    closeGetStartedDialog = (event) => {
        this.setState({getStartedDialog: false});
    }

    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <CssBaseline/>
                <Topbar/>
                <div className={classes.root}>
                    <Grid container justify="center">
                        <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>


                            <Grid container item xs={4}>
                                <Grid item xs={12}>
                                    <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="500"
                                                image="https://scontent.fhel1-1.fna.fbcdn.net/v/t1.0-9/1962787_10200988397070695_866318093_n.jpg?_nc_cat=103&_nc_ht=scontent.fhel1-1.fna&oh=6eb2e7b009f4c72c7f6daff6512d35f1&oe=5D9173ED"
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Keskitorjuja #12
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Lentopallon pelaaja puijo wolleyn 2-sarjassa
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Lue lisää
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>

                            <Grid container item xs={4}>
                                <Grid item xs={12}>
                                    <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="500"
                                                image="https://scontent.fhel1-1.fna.fbcdn.net/v/t1.0-9/1962787_10200988397070695_866318093_n.jpg?_nc_cat=103&_nc_ht=scontent.fhel1-1.fna&oh=6eb2e7b009f4c72c7f6daff6512d35f1&oe=5D9173ED"
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Keskitorjuja #12
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Lentopallon pelaaja puijo wolleyn 2-sarjassa
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Lue lisää
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>

                            <Grid container item xs={4}>
                                <Grid item xs={12}>
                                    <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="500"
                                                image="https://scontent.fhel1-1.fna.fbcdn.net/v/t1.0-9/1962787_10200988397070695_866318093_n.jpg?_nc_cat=103&_nc_ht=scontent.fhel1-1.fna&oh=6eb2e7b009f4c72c7f6daff6512d35f1&oe=5D9173ED"
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Keskitorjuja #12
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Lentopallon pelaaja puijo wolleyn 2-sarjassa
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Lue lisää
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>


                            <Grid container item xs={4}>
                                <Grid item xs={12}>
                                    <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="500"
                                                image="https://scontent.fhel1-1.fna.fbcdn.net/v/t1.0-9/1962787_10200988397070695_866318093_n.jpg?_nc_cat=103&_nc_ht=scontent.fhel1-1.fna&oh=6eb2e7b009f4c72c7f6daff6512d35f1&oe=5D9173ED"
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Keskitorjuja #12
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Lentopallon pelaaja puijo wolleyn 2-sarjassa
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Lue lisää
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                    <SwipeDialog
                        open={this.state.learnMoredialog}
                        onClose={this.dialogClose}/>
                    <InstructionDialog
                        open={this.state.getStartedDialog}
                        onClose={this.closeGetStartedDialog}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(withStyles(styles)(Main));
