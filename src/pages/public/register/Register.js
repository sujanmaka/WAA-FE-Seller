import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import WAA, {API_URL} from "../../../api/api";
import logo from "../../../assets/img/logo.png";
import AddAlertMessage from "../../../components/alert/Alert";
import Spinner from "../../../components/loader/Loader";
// context
import {ENTER_VALID_EMAIL, REQUIRED_FIELD, SOMETHING_WENT_WRONG,} from "../../../utils/constants/index";
import styles from "./style";




export default function Register(props) {
    const classes = styles();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [role, setRole] = useState();

    const handleChange = (event) => {
        setRole(event.target.value);
    }

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (data) => {
        setIsLoading(true);
        if (role) {
            data.roleType = role;
            let url;
            if (!!data.id) {
                url = WAA.put(API_URL.user, data)
            } else{
                url = WAA.post(API_URL.user, data)
            }
            url.then((response) => {
                setIsLoading(false);
                let data = response.data;
                    
                    AddAlertMessage({ type: "success", message: "User Created" });
                    reset();
                    props.history.push("/");
            })
            .catch((error) => {
                setIsLoading(false);
                AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
            });
        }
    };

    return (
        <Container maxWidth="sm" className={classes.root}>
            <Box textAlign="center" my={3}>
                <img src={logo} alt="WAA Logo" width="124" />
                <Box fontSize="h5.fontSize"> WAA </Box>
                <Box component="small"> Mini Online Market </Box>
            </Box>
            <Card>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="name"
                                label="Name"
                                margin="normal"
                                variant="outlined"
                                {...register("name",{
                                    required: true,
                                })}
                            />
                            {errors.name && (
                                <p className="error">{REQUIRED_FIELD}</p>
                            )}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="email"
                                label="email"
                                margin="normal"
                                variant="outlined"
                                {...register("email",{
                                    required: true
                                })}
                            />
                            {errors.email && errors.email.type === "required" && (
                                <p className="error">{REQUIRED_FIELD}</p>
                            )}
                            {errors.email && errors.email.type === "pattern" && (
                                <p className="error">{ENTER_VALID_EMAIL}</p>
                            )}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="password"
                                label="password"
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                {...register("password",{
                                    required: true,
                                })}
                            />
                            {errors.password && (
                                <p className="error">{REQUIRED_FIELD}</p>
                            )}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="address"
                                label="Address"
                                type="text"
                                margin="normal"
                                variant="outlined"
                                {...register("address",{
                                    required: true,
                                })}
                            />
                            {errors.address && (
                                <p className="error">{REQUIRED_FIELD}</p>
                            )}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="phoneNumber"
                                label="Phone Number"
                                type="text"
                                margin="normal"
                                variant="outlined"
                                {...register("phone",{
                                    required: true,
                                })}
                            />
                            {errors.phoneNumber && (
                                <p className="error">{REQUIRED_FIELD}</p>
                            )}
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Role</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Role"
                                    onChange={handleChange}
                                    {...register("email",{
                                        required: true
                                    })}
                                >
                                    <MenuItem value="SELLER">SELLER</MenuItem>
                                    <MenuItem value="BUYER">BUYER</MenuItem>
                                </Select>
                                {!role && (
                                    <p className="error">{REQUIRED_FIELD}</p>
                                )}
                            </FormControl>
                            {errors.phoneNumber && (
                                <span className="error-message">{REQUIRED_FIELD}</span>
                            )}
                        </Grid>
                        <Grid item xs={12} className={classes.loginBtnContainer}>
                            {isLoading ? (
                                <Spinner />
                            ) : (
                            <Button
                                endIcon={<ExitToAppIcon />}
                                size="large"
                                fullWidth
                                color="primary"
                                variant="contained"
                                type="submit"
                            >
                                Signup
                            </Button>
                                )}
                        </Grid>
                        <Grid item xs={12} className={classes.loginBtnContainer}>
                                <Button
                                    endIcon={<ExitToAppIcon />}
                                    size="large"
                                    fullWidth
                                    color="primary"
                                    variant="contained"
                                    type="button"
                                    href={"/"}
                                >
                                   Go to Log In
                                </Button>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
}
