import React from "react";
import "./dashboard.scss";
import dashboardbanner from "../../assets/images/dashboardbanner.PNG";


export default function dashboard() {
  return (
    <div class="aem-Grid aem-Grid--default--12">
      <section class="teaser bg-light-sky padding-0">
        <div class="inner-wrapper">
          <div class="container">
            <div class="wrapcont">
              <h1 class="heading-2">Shop the new <br/>Signature Collection </h1>
              <p>
                A healthier you from the inside out. We’ve sourced the cleanest
                ingredients to create a line of clean skin care treatments that
                leave you feeling your best
              </p>
              <div class="wrapbutton">
                <a href="#" class="btn-default btn-white">
                  Shop products
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-img bg-como-547665">
          <div class="img-wrapper">
          <img src={dashboardbanner} alt='dashboard'/>
          </div>
        </div>
      </section>
    </div>
  );
}
