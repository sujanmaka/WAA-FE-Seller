import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
} from "@material-ui/core";
import logo from "../../../assets/img/logo.png";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import WAA, { API_URL } from "../../../api/api";
import AddAlertMessage from "../../../components/alert/Alert";
import Spinner from "../../../components/loader/Loader";
// context
import { useUserDispatch } from "../../../context/UserContext";
import { AppUtils } from "../../../utils/appUtils";
import {
  ENTER_VALID_EMAIL,
  IS_SESSION_EXPIRED,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REQUIRED_FIELD,
  SESSION_EXPIRED,
  SOMETHING_WENT_WRONG,
  USER_ID,
} from "../../../utils/constants/index";
import { LocalStorage } from "../../../utils/storage/localStorage";
import { SessionStorage } from "../../../utils/storage/sessionStorage";
import styles from "./style";
import { useNavigate } from "react-router-dom";

export default function LoginForm(props) {
  const navigate = useNavigate();
  const classes = styles();
  const { register, handleSubmit, errors } = useForm();

  // global
  var userDispatch = useUserDispatch();

  // local
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (SessionStorage.getItem(IS_SESSION_EXPIRED) === "true") {
      AddAlertMessage({
        type: "error",
        message: SESSION_EXPIRED,
      });
      SessionStorage.removeItem(IS_SESSION_EXPIRED);
    }
  }, []);

  const onSubmit = (data) => {
    setIsLoading(true);
    WAA.post(API_URL.login, data)
      .then((response) => {
        setIsLoading(false);
        let data = response.data;
        console.log(data);
        if (data.type === "success") {
          AppUtils.saveUserCredentials(data);
          navigate("/admin/dashboard");
          // LocalStorage.setItem(USER_ID, data.id); //if we want user-id in front end
          userDispatch({ type: LOGIN_SUCCESS });
        } else if (data.type === "error") {
          AddAlertMessage({
            type: "error",
            message: data.message,
          });
        }
      })
      .catch((error) => {
        setIsLoading(false);
        AddAlertMessage({ type: "error", message: SOMETHING_WENT_WRONG });
        userDispatch({ type: LOGIN_FAILURE });
      });
  };

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Box textAlign="center" my={3}>
        <img src={logo} alt="WAA Logo" width="124" />
        <Box fontSize="h5.fontSize"> WAA </Box>
        <Box component="small"> Mini Market Project </Box>
      </Box>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="email"
                margin="normal"
                variant="outlined"
                name="userEmail"
                inputRef={register({
                  required: true,
                  pattern: /\S+@\S+\.\S+/,
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <span className="error-message">{REQUIRED_FIELD}</span>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <span className="error-message">{ENTER_VALID_EMAIL}</span>
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
                name="password"
                inputRef={register({
                  required: true,
                })}
              />
              {errors.password && (
                <span className="error-message">{REQUIRED_FIELD}</span>
              )}
            </Grid>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Remember Me"
              name="rememberMe"
              inputRef={register}
            />
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
                  Log In
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
                href={"/register"}
              >
                Signup
              </Button>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}
