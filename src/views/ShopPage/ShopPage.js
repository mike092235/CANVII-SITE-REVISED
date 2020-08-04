import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/canvii.png";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

import ScrollUpButton from "react-scroll-up-button";

import image1 from "assets/img/canvii-merch/black_visor_blue_Girrafe.png";
import image2 from "assets/img/canvii-merch/black_visor_red_Girrafe.png";
import image3 from "assets/img/canvii-merch/black_visor_green_Girrafe.png";
import image4 from "assets/img/canvii-merch/CANVII_Visor_black_.png";
import image5 from "assets/img/canvii-merch/CANVII_Visor_black_fillin.png";
import image6 from "assets/img/canvii-merch/Burgundy_front_facing_with_logo.png";
import image7 from "assets/img/canvii-merch/Burgundy_front_facing_giraffe.png";
import image8 from "assets/img/canvii-merch/black_dadhat_new.png";
import image9 from "assets/img/canvii-merch/black_dadhat_new_fillin.png";
import image10 from "assets/img/canvii-merch/CANVII_Tshirt.png";
import image11 from "assets/img/canvii-merch/black_sweater_WHITE_letters.png";
import image12 from "assets/img/canvii-merch/white_sweater_RED_tri.png";

const useStyles = makeStyles(styles);

export default function ShopPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand=""
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/bg4.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>SHOP</h3>
                    <h6>Shop for the latest apparel</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "ALL",
                      tabIcon: Palette,
                      tabContent: (
                        <div>
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={2}>
                              <h4>Blue Giraffe Visor</h4>
                              <img
                                src={image1}
                                alt="..."
                                className={classes.imgRounded + " " + classes.imgFluid}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={2}>
                              <h4>Red Giraffe Visor</h4>
                              <img
                                src={image2}
                                alt="..."
                                className={classes.imgRounded + " " + classes.imgFluid}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={2}>
                              <h4>Green Giraffe Visor</h4>
                              <img
                                src={image3}
                                alt="..."
                                className={classes.imgRounded + " " + classes.imgFluid}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={2}>
                              <h4>CANVII Visor</h4>
                              <img
                                src={image4}
                                alt="..."
                                className={classes.imgRounded + " " + classes.imgFluid}
                              />
                            </GridItem>
                          </GridContainer>
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={2}>
                              <h4>CANVII Visor (Fillin)</h4>
                              <img
                                src={image5}
                                alt="..."
                                className={classes.imgRounded + " " + classes.imgFluid}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={2}>
                              <h4>CANVII Burgundy Dad Hat</h4>
                              <img
                                src={image6}
                                alt="..."
                                className={classes.imgRounded + " " + classes.imgFluid}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={2}>
                              <h4>Green Giraffe Dad Hat (Burgundy)</h4>
                              <img
                                src={image7}
                                alt="..."
                                className={classes.imgRounded + " " + classes.imgFluid}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={2}>
                              <h4>CANVII Dad Hat (Black)</h4>
                              <img
                                src={image8}
                                alt="..."
                                className={classes.imgRounded + " " + classes.imgFluid}
                              />
                            </GridItem>
                          </GridContainer>
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={2}>
                              <h4>CANVII Dad Hat - Fillin (Black)</h4>
                              <img
                                src={image9}
                                alt="..."
                                className={classes.imgRounded + " " + classes.imgFluid}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={2}>
                              <h4>CANVII T-Shirt (Black; Fillin)</h4>
                              <img
                                src={image10}
                                alt="..."
                                className={classes.imgRounded + " " + classes.imgFluid}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={2}>
                              <h4>CANVII Sweater (Black w/ White Letters)</h4>
                              <img
                                src={image11}
                                alt="..."
                                className={classes.imgRounded + " " + classes.imgFluid}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={2}>
                              <h4>CANVII Sweater (White w/ Red & Black Letters)</h4>
                              <img
                                src={image12}
                                alt="..."
                                className={classes.imgRounded + " " + classes.imgFluid}
                              />
                            </GridItem>
                          </GridContainer>
                        </div>
                      )
                    },
                    {
                      tabButton: "APPAREL",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={2}>
                            <h4>CANVII T-Shirt (Black; Fillin)</h4>
                            <img
                              src={image10}
                              alt="..."
                              className={classes.imgRounded + " " + classes.imgFluid}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={2}>
                            <h4>CANVII Sweater (Black w/ White Letters)</h4>
                            <img
                              src={image11}
                              alt="..."
                              className={classes.imgRounded + " " + classes.imgFluid}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={2}>
                            <h4>CANVII Sweater (White w/ Red & Black Letters)</h4>
                            <img
                              src={image12}
                              alt="..."
                              className={classes.imgRounded + " " + classes.imgFluid}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "HATS",
                      tabIcon: Favorite,
                      tabContent: (
                        <div>
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={2}>
                              <h4>Blue Giraffe Visor</h4>
                              <img
                                src={image1}
                                alt="..."
                                className={classes.imgRounded + " " + classes.imgFluid}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={2}>
                              <h4>Red Giraffe Visor</h4>
                              <img
                                src={image2}
                                alt="..."
                                className={classes.imgRounded + " " + classes.imgFluid}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={2}>
                              <h4>Green Giraffe Visor</h4>
                              <img
                                src={image3}
                                alt="..."
                                className={classes.imgRounded + " " + classes.imgFluid}
                              />
                            </GridItem>
                          </GridContainer>
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={2}>
                              <h4>CANVII Visor</h4>
                              <img
                                src={image4}
                                alt="..."
                                className={classes.imgRounded + " " + classes.imgFluid}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={2}>
                              <h4>CANVII Visor (Fillin)</h4>
                              <img
                                src={image5}
                                alt="..."
                                className={classes.imgRounded + " " + classes.imgFluid}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={2}>
                              <h4>CANVII Burgundy Dad Hat</h4>
                              <img
                                src={image6}
                                alt="..."
                                className={classes.imgRounded + " " + classes.imgFluid}
                              />
                            </GridItem>
                          </GridContainer>
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={2}>
                              <h4>Green Giraffe Dad Hat (Burgundy)</h4>
                              <img
                                src={image7}
                                alt="..."
                                className={classes.imgRounded + " " + classes.imgFluid}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={2}>
                              <h4>CANVII Dad Hat (Black)</h4>
                              <img
                                src={image8}
                                alt="..."
                                className={classes.imgRounded + " " + classes.imgFluid}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={2}>
                              <h4>CANVII Dad Hat - Fillin (Black)</h4>
                              <img
                                src={image9}
                                alt="..."
                                className={classes.imgRounded + " " + classes.imgFluid}
                              />
                            </GridItem>
                          </GridContainer>
                        </div>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollUpButton />
    </div>
  );
}
