const displayContainers = function() {
    //create event listener for all containers on the page to render their own sections
    //define the buttons
    let homePage = $('#homePage');
    let offersPage = $('#offersPage');
    let availabilityPage = $('#availabilityPage');
    let moreDetailsPage = $('#moreDetailsPage');
    let contactPage = $('#contactPage');
    let accountPage = $('#accountPage');

    //define the containers/sections
    let sectionHomepage = $('.container-intro-home');
    let sectionOffers = $('.container-offers');
    let sectionAvailability = $('.container-availability');
    let sectionMoreDetails = $('.container-more-details');
    let sectionContact = $('.container-contact');
    let sectionAccount = $('.container-account');

    //initialise the section to display when user open page
    sectionHomepage.hide();
    sectionHomepage.fadeIn(1000);
    sectionOffers.hide();
    sectionAvailability.hide();
    sectionMoreDetails.hide();
    sectionContact.hide();
    sectionAccount.hide();

    //create function for showing/hiding section
    function showSection(button, sectionDisplay, section1, section2, section3, section4, section5) {
        button.on('click', () => {
            sectionDisplay.fadeIn(750);
            section1.hide();
            section2.hide();
            section3.hide();
            section4.hide();
            section5.hide();
        });
    };
    //call function for every case
    showSection(homePage, sectionHomepage, sectionOffers, sectionAvailability, sectionMoreDetails, sectionContact, sectionAccount);
    showSection(offersPage, sectionOffers, sectionHomepage, sectionAvailability, sectionMoreDetails, sectionContact, sectionAccount);
    showSection(availabilityPage, sectionAvailability, sectionHomepage, sectionOffers, sectionMoreDetails, sectionContact, sectionAccount);
    showSection(moreDetailsPage, sectionMoreDetails, sectionHomepage, sectionOffers, sectionAvailability, sectionContact, sectionAccount);
    showSection(contactPage, sectionContact, sectionHomepage, sectionOffers, sectionAvailability, sectionMoreDetails, sectionAccount);
    showSection(accountPage, sectionAccount, sectionHomepage, sectionOffers, sectionAvailability, sectionMoreDetails, sectionContact);
}

export { displayContainers }
