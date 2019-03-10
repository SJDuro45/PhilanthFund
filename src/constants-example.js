/*

These are constants used in the frontend app. Change these to meet your needs, and rename the file to constants.js

*/

import heroimage from "./page/karl-fredrickson-192686.jpg";

const AppConstants = {
    STRIPE_PK_TEST: "pk_test_yourtestpublishablekey",
    STRIPE_PK_PROD: "pk_yourprodpublishablekey",,
    STRIPE_TEST_MODE: true, // Set this to false to stop using the Stripe testing environment
    PAYMENT_SERVER_URL: "http://localhost:3001",
    HERO_TITLE: "Help build homes for those in need",
    HERO_IMAGE: heroimage,
    HOME_STORY: `Major cities across the US and th world have been devasted by hurricanes, wildfires, earthquakes, and other natural disasters. 
    We know the road to recovery is long and people are facing significant challenges as they work to recover from these historic weather events. 
    Our help is clearly needed now and will be needed in the future when another disaster strikes. We know 


    `,
    FOOTER_BENEFICIARY: "Primary beneficiary: Jack Ryan and Family",
    FOOTER_ORGANIZATION: "Children College Education Fund, LLC",
    FOOTER_ORGANIZATION_SUBHEADING: "A 501(c)(3) non-profit"
};

export default AppConstants;
