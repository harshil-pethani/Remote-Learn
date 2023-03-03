import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Referral from '../Components/Referral'

const Referralpage = () => {
    const [termPopupActive, setTermPopupActive] = useState(false);

    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 20) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 20) {
            setShowScroll(false)
        }
    };

    window.addEventListener('scroll', checkScrollTop)


    return (
        <div className="referralPage" style={{ position: "relative" }}>
            <Navbar scrolled={showScroll} />
            {
                termPopupActive &&
                (
                    <div className="popUpLayer">
                        <div className="popUpBox">
                            <ion-icon onClick={() => setTermPopupActive(false)} name="close-circle-outline"></ion-icon>
                            <h2 className="title">
                                Terms And Conditions
                            </h2>
                            <div className="conditions">
                                <h2 className="subtitle">
                                    Remote Learn Referral Program Rules
                                </h2>
                                <p className="desc">
                                    These Remote Learn Referral Program Rules (“Program Rules”) govern your participation in the Remote Learn Referral Program. The Program Rules are in addition to any agreements between you and Remote Learn, as applicable (collectively, the “Remote Learn Terms”). The Remote Learn Terms are incorporated by reference and shall apply to your participation in the Remote Learn Referral Program, including, if necessary, to resolve any disputes between you and Remote Learn related to or arising out of the Referral Program.
                                </p>
                                <h2 className="subtitle">
                                    Program Overview
                                </h2>
                                <p className="desc">
                                    The Remote Learn Referral Program (“Referral Program”) is offered by Remote Learn, LLC. and its affiliates (together referred to as “Remote Learn”) and provides Users who are interested in referring their family and friends (“Referrers”) the opportunity to refer eligible individuals to join the Remote Learn community. These Program Rules apply to both Referrers and referred Users (“Referred Users” or “Referred” individuals, respectively), so please read carefully to understand your respective rights and obligations.
                                </p>
                                <h2 className="subtitle">
                                    Referrer Eligibility
                                </h2>
                                <p className="desc">
                                    To be eligible to participate in the Referral Program as a Referrer, you must (a) be a legal resident of your country; (b) be the age of majority in your territory of residence; and (c) maintain a Remote Learn account in good standing. However, if you violate the Program Rules, the Remote Learn Terms of Service or any other applicable terms, Remote Learn may suspend or terminate your ability to participate in the Referral Program under any or all of your accounts.
                                </p>
                                <h2 className="subtitle">
                                    Remote Learn Codes
                                </h2>
                                <p className="desc">
                                    Under the Referral Program, Remote Learn may provide you with a unique alphanumeric code (“Remote Learn Code”) to distribute to eligible individuals to become new Remote Learn community members. Remote Learn owns all rights in and to any Remote Learn Code, and may reclaim, deactivate, invalidate or terminate your Remote Learn Code at any time at its discretion.
                                </p>
                                <h2 className="subtitle" style={{ marginBottom: "10px" }}>
                                    How to Refer Users
                                </h2>
                                <h3>
                                    a. Referred Riders.
                                </h3>
                                <p className="desc">
                                    Through the Remote Learn referral platform, you may refer eligible individuals to become new student on the Remote Learn website. In order to be eligible for a Referral Reward (defined below) for a new student, the person must (i) have never previously enrolled with Remote Learn; (ii) be at least the age of majority in their territory of residence, and (iii) satisfy the applicable Reward Criteria, as discussed below. If these conditions are met, the person shall be considered your “Referred User.”
                                </p>
                                <h3>
                                    b. Invitations through the Remote Learn Platform.
                                </h3>
                                <p className="desc">
                                    You may invite your family and friends to become new Students directly through the Remote Learn website by entering or providing Remote Learn with your invitee’s contact information (all information collected by Remote Learn under the Referral Program shall be governed by Remote Learn’s Privacy Policy). Inviting an individual through the Remote Learn Platform may generate an automatic invitation text (SMS) or email (the “Invitation”) to the person which may be sent through your phone number or a number controlled by Remote Learn. The Invitation may contain a promotional offer of Remote Learn credit to a new user. You represent that you have the necessary consent from your invitee to send them the Invitation (either directly or through the Remote Learn Platform). You will have to share your unique code with your friends and family and your Remote Learn Code will not be automatically applied on the new user’s account unless they manually type it in the promo code section as applicable.
                                </p>
                                {/* 
                                <h2 className="subtitle" style={{ marginBottom: "10px" }}>
                                    Referral Rewards
                                </h2>
                                <h3>
                                    a. General.
                                </h3>
                                <p className="desc">
                                    You are eligible to earn a referral incentive (“Referral Reward”) for each Referred User that you refer to the Forward Fitness Platform (subject to certain maximum limits and the other terms in these Program Rules). As discussed above, in order to qualify as your Referred User the new User must satisfy the applicable reward criteria (“Reward Criteria”) as communicated to the Referred User by Forward Fitness. The Reward Criteria are set by Forward Fitness in its sole discretion and are subject to change at any time. The Reward Criteria may vary by market or within a particular market. Forward Fitness, at its sole discretion, may make available certain promotions with different Reward Criteria or Referral Rewards to other Users or prospective Users. These promotions, unless offered to you, shall have no bearing whatsoever on your Agreement or relationship with Forward Fitness.


                                </p>
                                <p className="desc">
                                    Both the Referrers and the Referred Users may be presented on the Forward Fitness Website with the amounts of the Referral Rewards they may receive if all the Referral Criteria and other conditions described herein are met. These amounts are calculated based on certain assumptions, such as, without limitation, the Referrer’s or the the Referred User’s location at the time they take their first class and may not be accurate based on the actual behavior of the Referred Users. Such amounts, therefore, are only estimates and may differ based on a number of factors. Forward Fitness will make a good faith calculation of such amounts based on the location of the Referrer and the Referred User. The Referrer and the Referred User will see the final applicable amount of their respective Referral Bonuses at the time when such Referral Bonuses are applied to their User Accounts and/or paid out.
                                </p>
                                <h3>
                                    b. Resolving Disputes over Referrals.
                                </h3>
                                <p className="desc">
                                    Only one person can earn a Referral Reward for a single Referred User. In the event that multiple persons claim credit for a particular referral, Forward Fitness has full discretion to determine which person earned such referral according to Forward Fitness’s systems.
                                </p>
                                <h3>
                                    c. Reservation of rights.
                                </h3>
                                <p className="desc">
                                    Forward Fitness reserves the right to withhold or deduct Referral Rewards or Referral Credit obtained through the Referral Program in the event that Forward Fitness determines or believes that the receipt of the Referral Reward or Referral Credit was in error, fraudulent, illegal, or in violation of these Program Rules or any other applicable agreement between you and Forward Fitness.
                                </p>

                                <h2 className="subtitle" style={{ marginBottom: "10px" }}>
                                    Restrictions
                                </h2>
                                <p className="desc">
                                    In connection with your participation in the Referral Program, you expressly agree to the restrictions listed below. When distributing, promoting or communicating your Referral Code(s) you agree that:
                                </p>
                                <div className="subdetail">
                                    <ol type="a">
                                        <li>
                                            No spamming. You agree that you will not “spam” anyone with invitations to join the Forward Fitness community, and that you at all times will remain compliant with CAN-SPAM, the TCPA, and other applicable laws. The following specific activities are prohibited:
                                        </li>
                                        <div className="subdetail">
                                            <ol type="i">
                                                <li>
                                                    Mass emailing, texting or messaging people you do not personally know;
                                                </li>
                                                <li>
                                                    Use of automated systems or bots through any channel to distribute, post or respond to your Referral Code;
                                                </li>
                                                <li>
                                                    Use of scripts, programed or automatic dialers to send invites or to communicate Referral Codes; and
                                                </li>
                                                <li>
                                                    Posting Referral Codes on event or venue pages without express permission from the event or venue owner.
                                                </li>
                                            </ol>
                                        </div>
                                        <li>
                                            No Misrepresentations. You agree that you will not attempt to mislead anyone in connection with the Referral Program, either by affirmative representation, implication, or omission. In particular, you agree that you will not:
                                        </li>
                                        <div className="subdetail">
                                            <ol type="i">
                                                <li>
                                                    Impersonate any person or entity;

                                                </li>
                                                <li>
                                                    Create fake accounts, blogs, webpages, profiles, websites, links or messages;
                                                </li>
                                                <li>
                                                    Misrepresent your relationship with Forward Fitness or any other third party (Don’t create content or communications that could have the effect of leading a consumer to believe that it is an official communication from Forward Fitness.);
                                                </li>
                                                <li>
                                                    Suggest that an affiliation or partnership exists with a third party where none exists.
                                                </li>
                                                <li>
                                                    Don’t make misrepresentations with respect to the characteristics or qualification requirements for any Referral Rewards. You acknowledge that Forward Fitness may change the characteristics or qualification requirements for Referral Rewards in its discretion, and therefore you shall not represent any fixed characteristics (e.g., amount of Forward Fitness credit, expiration date).
                                                </li>
                                            </ol>
                                        </div>
                                        <li>
                                            Prohibited content. You agree that you will not use the Forward Fitness brand without Forward Fitness’s explicit written permission in connection with:
                                        </li>
                                        <div className="subdetail">
                                            <ol type="i">
                                                <li>
                                                    Disparaging or defamatory content concerning Forward Fitness or third parties;
                                                </li>
                                                <li>
                                                    Content which promotes racism, bigotry, hatred, discrimination or physical harm of any kind against any group or individual;
                                                </li>
                                                <li>
                                                    Offensive, abusive, intimidating or harassing content
                                                </li>
                                                <li>
                                                    Content that is sexually explicit, obscene and/or contains nudity
                                                </li>
                                                <li>
                                                    Any political and/or religious statement;
                                                </li>
                                                <li>
                                                    Content containing images or reference to drugs, alcohol, tobacco, weapons or firearms
                                                </li>
                                                <li>
                                                    Content that violates someone else’s privacy
                                                </li>
                                            </ol>
                                        </div>
                                        <li>
                                            Other restrictions. You also agree that you will not:
                                        </li>
                                        <div className="subdetail">
                                            <ol type="i">
                                                <li>
                                                    Specify the monetary amount of the Referral Code unless authorized by Forward Fitness in writing;
                                                </li>
                                                <li>
                                                    Create websites, domains, URLs, social media handles or email addresses containing the word “Forward Fitness”;
                                                </li>
                                                <li>
                                                    Use the names or marks of Forward Fitness competitors;
                                                </li>
                                                <li>
                                                    Use images of celebrities or other public or private figures without their written consent;
                                                </li>
                                                <li>
                                                    Use someone else’s brand name or intellectual property without their written consent (for example, referencing “Superbowl” or “Coachella” would be prohibited);
                                                </li>
                                                <li>
                                                    Engage in phishing or attempting to obtain financial or other personal information;
                                                </li>
                                                <li>
                                                    Solicit passwords or personally identifiable information;
                                                </li>
                                                <li>
                                                    Sell your Referral Code. You agree that you will only distribute your Forward Fitness Code free of charge only for promotional purposes. You may not sell, trade, or barter your Forward Fitness Code under any circumstances. You may not pay or provide anything of value to an invited user beyond any Referral Credit or collateral supplied by Forward Fitness;
                                                </li>
                                                <li>
                                                    Violate or infringe the rights of a third party. You will not create any Forward Fitness Code that infringes on the intellectual property rights of any third party. You will adhere to the license terms in any use of the Forward Fitness Marks.
                                                </li>
                                                <li>
                                                    Advertise. You agree that you will not pay to advertise your Forward Fitness Code or the Referral Program, including via Google, Facebook, Twitter, Bing and Craigslist.
                                                </li>
                                                <li>
                                                    Create printed materials other than those authorized by Forward Fitness
                                                </li>
                                                <li>
                                                    Post printed materials on public or private property without the express written consent.
                                                </li>
                                                <li>
                                                    Engage in fraudulent activity. You agree that you and your Referred Users will not defraud or abuse (or attempt to defraud or abuse) Forward Fitness, the terms of the Referral Program, or any invited Users.
                                                </li>
                                            </ol>
                                        </div>
                                    </ol>
                                </div>
                                <p className="desc">
                                    If you violate any of these restrictions Forward Fitness may, in its discretion, remove your eligibility to participate in the Referral Program, and/or deny you any Referral Rewards earned in violation or suspected violation of these restrictions
                                </p>
                                <h2 className="subtitle" style={{ marginBottom: "10px" }}>
                                    Other Terms
                                </h2>
                                <p className="desc">
                                    The following terms shall also apply to your participation in the Referral Program.
                                </p>
                                <div className="subdetail">
                                    <ol type="a">
                                        <li>
                                            Users cannot earn Referral Rewards for referring themselves;
                                        </li>

                                        <li>
                                            In exchange for allowing you to promote your Forward Fitness Code online (subject to the restrictions above), you agree to include a link on any such promotion page back to Forward Fitness’s promotion page (or such other page as Forward Fitness designates);
                                        </li>
                                        <li>
                                            PAll Forward Fitness promotions run for a limited time only and are subject to change at Forward Fitness’s discretion.
                                        </li>
                                        <li>
                                            Forward Fitness Referral credit cannot be cashed out and can only be used towards Forward Fitness products and services.
                                        </li>
                                    </ol>
                                </div> */}

                            </div>
                        </div>
                    </div>
                )
            }
            <Referral setTermPopupActive={setTermPopupActive} />
            <Footer />
        </div>
    )
}

export default Referralpage;