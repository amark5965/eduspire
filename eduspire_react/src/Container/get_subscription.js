import React from 'react';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery'
const responsive={
  320:{items:1},
  480:{items:1},
  600:{items:1},
  960:{items:1},
  1200:{items:1}
  }
class GetSubscription extends React.Component{
	render()
	{
	return(    <section class="inner_cont">
        <div class="container">
            <div class="get_subscr">
                <div class="row">
                    <div class="col-md-5 col-sm-5">
                        <div class="box l">
                            <div class="subscpt_slide">
                                <OwlCarousel
                                    className=""
                                    loop={true}
                                    nav={false}
                                    items={1}
                                    margin={30}
                                    dots={true}
                                    mouseDrag={true}
                                    navigation={false}
                                    autoplay={true}
                                    autoplayTimeout={2000}
                                    smartSpeed={300}
                                    navText={["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}
                                    responsive={responsive}
                                 >
                                    <div class="item">
                                        <div class="img">
                                            <img src="/images/subscription_slide_1.svg" alt="" />
                                        </div>
                                        <div class="desc">
                                            <h3>Structured courses</h3>
                                            <p>All our courses are structured in line with your exam syllabus to help you best prepare for it</p>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="img">
                                            <img src="/images/subscription_slide_2.svg" alt="" />
                                        </div>
                                        <div class="desc">
                                            <h3>Interactive Live Classes</h3>
                                            <p>Chat with the educator, engage in discussions and ask your questions - all during a class</p>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="img">
                                            <img src="/images/subscription_slide_3.svg" alt="" />
                                        </div>
                                        <div class="desc">
                                            <h3>Live test and quizzes</h3>
                                            <p>Take live Mock Tests curated in line with the exam pattern and stay on track with your preparation</p>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7 col-sm-7">
                        <div class="box r">
                            <form action="javascript:;">
                                <h2>CBSE Class 10 subscription</h2>
                                <p class="t">Choose a plan and proceed</p>
                                <div class="emi_box">
                                    <p><img src="/images/sale_discount.png" alt="" /> No cost EMI now available on 6, 12 and 24 months subscription</p>
                                </div>
                                <div class="plan_list">
                                    <ul>
                                        <li>
                                            <div class="box">
                                                <label for="plan_check1">
                                                    <div class="left">
                                                        <input id="plan_check1" type="radio" name="plan" />
                                                        <span class="check_btn"><i class="fas fa-check"></i></span>
                                                        <h3>1 month <span></span></h3>
                                                    </div>
                                                    <div class="right">
                                                        <div class="per_m">
                                                            <p>
                                                                <span>per month</span>
                                                                <i class="fas fa-rupee-sign"></i>8,000
                                                            </p>
                                                        </div>
                                                        <div class="t_prc">
                                                            <p>
                                                                <i class="fas fa-rupee-sign"></i>8,000
                                                                <span>Total (Incl. of all taxes)</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="box">
                                                <label for="plan_check2">
                                                    <div class="left">
                                                        <input id="plan_check2" type="radio" name="plan" />
                                                        <span class="check_btn"><i class="fas fa-check"></i></span>
                                                        <h3>3 month <span>17% off</span></h3>
                                                    </div>
                                                    <div class="right">
                                                        <div class="per_m">
                                                            <p>
                                                                <span>per month</span>
                                                                <i class="fas fa-rupee-sign"></i>6,667
                                                            </p>
                                                        </div>
                                                        <div class="t_prc">
                                                            <p>
                                                                <i class="fas fa-rupee-sign"></i>20,000
                                                                <span>Total (Incl. of all taxes)</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="box">
                                                <label for="plan_check3">
                                                    <div class="left">
                                                        <input id="plan_check3" type="radio" name="plan" />
                                                        <span class="check_btn"><i class="fas fa-check"></i></span>
                                                        <h3>6 month <span>33% off</span></h3>
                                                    </div>
                                                    <div class="right">
                                                        <div class="per_m">
                                                            <p>
                                                                <span>per month</span>
                                                                <i class="fas fa-rupee-sign"></i>5,333
                                                            </p>
                                                        </div>
                                                        <div class="t_prc">
                                                            <p>
                                                                <i class="fas fa-rupee-sign"></i>32,000
                                                                <span>Total (Incl. of all taxes)</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="box">
                                                <label for="plan_check4">
                                                    <div class="left">
                                                        <input id="plan_check4" type="radio" name="plan" />
                                                        <span class="check_btn"><i class="fas fa-check"></i></span>
                                                        <h3>12 month <span>58% off</span></h3>
                                                    </div>
                                                    <div class="right">
                                                        <div class="per_m">
                                                            <p>
                                                                <span>per month</span>
                                                                <i class="fas fa-rupee-sign"></i>3,333
                                                            </p>
                                                        </div>
                                                        <div class="t_prc">
                                                            <p>
                                                                <i class="fas fa-rupee-sign"></i>40,000
                                                                <span>Total (Incl. of all taxes)</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="box">
                                                <label for="plan_check5">
                                                    <div class="left">
                                                        <input id="plan_check5" type="radio" name="plan" />
                                                        <span class="check_btn"><i class="fas fa-check"></i></span>
                                                        <h3>24 month <span>75% off</span></h3>
                                                    </div>
                                                    <div class="right">
                                                        <div class="per_m">
                                                            <p>
                                                                <span>per month</span>
                                                                <i class="fas fa-rupee-sign"></i>2,000
                                                            </p>
                                                        </div>
                                                        <div class="t_prc">
                                                            <p>
                                                                <i class="fas fa-rupee-sign"></i>48,000
                                                                <span>Total (Incl. of all taxes)</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="gift_ar">
                                    <div class="bx l">
                                        <img src="/images/icon_gift.svg" alt="" />
                                        <div class="inputbox"><input type="text" placeholder="Have a referral code?" /></div>
                                    </div>
                                    <div class="bx">
                                        {/*<button type="submit" class="btndefault big" onClick="parent.location='proceed_to_pay.html'">Proceed to Pay</button>*/}
                                        <Link to="/proceed_to_pay"  class="btndefault big">Proceed to Pay</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
	}
}
export default GetSubscription