import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import Table from "components/Agora/Common/Table.js";
import NavPills from "components/NavPills/NavPills.js";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import typoStyles from "assets/jss/nextjs-material-kit/components/typographyStyle.js";


const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight:"100vh",
  },
  header:{
  },
  body: {
    display:"flex",
    flex:"1 0 auto",
    justifyContent:"center",
    alignItems:"center"
  },
  nav:{
    display:"flex",
    flexDirection:"column",
    height:"1000px",
    flexBasis:"225px",
    flexShrink:0,
    // backgroundColor:"navy",
    color: "black", 
    alignItems:"flex-start"
    
  },
  navTitle:{
    paddingTop:"50px"

  },
  navItem:{
    flex:"1 0 auto",
  },
  ad : {
    backgroundColor:"purple",
    height:"1000px",
    flexBasis:"225px",
    flexShrink:0,
    
  },
  contents:{
    flex:"2 1 auto",  
    marginLeft:"25px",
    marginRight:"25px",
  },
  footer:{
    marginTop: "auto"
  },
  typoStyles
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const Main = () => {
  const classes = useStyles();
  const rows = [];
  for (let i = 0 ; i < 1000 ; i++){
    rows.push(createData('no1'+ i, 305 + i, 3.7 + i, 67 + i, 4.3 + i),);
  }

  const columnNames = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
    { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
    { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
    { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
    { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
  ];

  const tabs = [];
  for (let i = 0 ; i < 3 ; i++){
    tabs.push({
      key : i,
      ad : i + "aa"
    });
  }
  

  return (
    <>
      <div className={classes.container}>
        <Header
            className={classes.header}
          brand="AGORA"
          rightLinks={<HeaderLinks />}
          fixed
          color="rose"
          changeColorOnScroll={{
            height: 400,
            color:"primary"
          }}
        />

        <section className={classes.body}>
          <nav className={classes.nav}>
            <h1 className={classes.navTitle}>Nav</h1>
            {/* <ul className={classes.navItem}>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul> */}
            <NavPills active={true}
                      direction={"rtl"}
                      color={"primary"}
                      tabs={tabs}
                      
                      />
          </nav>

          <div className={classes.contents}>
            <Table title={"Nutrition"}
                   columnNames={columnNames}
                   rows={rows}
            />
          </div>

          <aside className={classes.ad}>
            AD
          </aside>
        </section>

        <Footer className={classes.footer}/>
      </div>
    </>
  )
}

export default Main;