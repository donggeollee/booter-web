import React from "react";
import classNames from "classnames"; // nodejs library that concatenates classes
import Link from "next/link";  // react components for routing our app without refresh
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js"; 
import Table from "components/Agora/Common/Table.js"
import {useDispatch, useSelector} from "react-redux";
import { COUNT_MINUS_REQUEST, COUNT_PLUS_REQUEST } from "../reducer/count";

// import styles from "assets/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    marginTop: "200px",
    border:"3px",
  },
  div: {
    border: 1,
    borderRadius: 3,
    color: 'black',
    height: 48,
    padding: '0 30px',
  },
  point : {
    border: 1,
    borderRadius: 3,
    color: 'black',
    height: 48,
    padding: '30px',
  }
});
const Test = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  const count = useSelector(state=>state.count);
  const dispatch = useDispatch();
  const plusPoint = ()=>{
    dispatch({
      type:COUNT_PLUS_REQUEST,
      data:1
    })
  }
  const minusPoint = ()=>{
    dispatch({
      type:COUNT_MINUS_REQUEST,
      data:1
    })
  }

  return (
    <>
      <Header
        brand="BOOTER Project"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />

      <div className={classes.root}>
        <div>
            <Link href="/login">
              <a className={classes.link}>
                <Button color="info" size="lg" simple> 로그인 페이지 </Button>
              </a>
            </Link>
        </div>
        <div className={classes.div}>
          <Button color="warning" size="lg" onClick={plusPoint}  simple>
                Plus point 
          </Button>
        </div>
        <div className={classes.div}>
          <Button color="danger" size="lg" onClick={minusPoint} simple>
                Plus minus
          </Button>
        </div>
        <div className={classes.point}>
            <span>{count.point}</span>
        </div>
        <div>
          <Table/>         
        </div>
      </div>


      <Footer />
    </>
  )
}

export default Test;