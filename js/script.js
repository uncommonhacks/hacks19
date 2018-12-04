let toggleFAQ = function(ind) {
    if (ind < 1 || ind > 8) {
	return;
    }

    let collapsedFAQSection = document.getElementById("faq-" + ind);

    // Add or remove the faq-collapsed class
    if (collapsedFAQSection.classList.contains("faq-collapsed")) {
	collapsedFAQSection.classList.remove("faq-collapsed");
    } else {
	collapsedFAQSection.classList.add("faq-collapsed");
    }

    console.log("Toggled" + ind);
};

let main = function() {
    // If javascript is enabled, set all of the FAQs to collapsed by default.
    // If javascript is not enabled, they will be uncollapsed by default.
    var i;
    for (i = 1; i < 9; i++){
	toggleFAQ(i)
    }

};

main();
