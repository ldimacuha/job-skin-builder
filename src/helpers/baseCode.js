export const htmlwrapper = `<!doctype html>
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en">
<!--<![endif]-->
`;

export const head = {
  meta: `    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>{TITLE} | {{COMPANY_NAME}}</title>
    <meta name="description" content="{TITLE} | {{COMPANY_NAME}}" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <!-- Chrome, Firefox OS and Opera -->
    <meta name="theme-color" content="{{PRIMARY_COLOR}}" />
    <!-- Safari Specific Styling -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black" /> <!-- black-translucent / black-->
    `,

  favicon: `  <link rel="shortcut icon" href="/" type="image/x-icon" />
  `,

  boilerplate: `  <!-- BOILERPLATE CSS -->
  <link rel="stylesheet"
    href="https://s3-ap-southeast-2.amazonaws.com/cdn.scouttalenthq.com/job-templates/boilerplate-v2/boilerplate-2.0.0.css"
    type="text/css" />

  <!-- BOOTSTRAP CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
  <!-- RESET TEMPLATE CSS -->
  <link rel="stylesheet"
    href="https://s3-ap-southeast-2.amazonaws.com/cdn.scouttalenthq.com/job-templates/boilerplate-v2/reset-template-2.0.0.css"
    type="text/css" />
  <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->
  `,

  fonts: `  <!-- FONTS -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
    integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
    `,

  css: `  <!-- ON PAGE CSS -->
  <style type="text/css">
    body {
      color: #000000;
      font-family: {{BODY_FONT}};
      font-size: 16px;
    }

    a:active,
    a:link,
    a:visited {
      color: {{PRIMARY_COLOR}};
      text-decoration: underline;
    }

    a:hover {
      color: #000000;
      text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: #000000;
      font-family: {{HEADINGS_FONT}};
      font-weight: 700;
    }

    /* HEADER */
    header {
      background-color: #ffffff;
      padding-bottom: 15px;
      padding-top: 15px;
    }

    /* NAVBAR LOGO */
    .navbar-brand {
      max-width: {{LOGO_MAX_WIDTH}}px;
      width: auto;
    }

    .navbar-brand img {
      width: 100%;
    }

    /* NAVBAR-TOGGLER */
    .navbar-toggler {
      background: {{PRIMARY_COLOR}};
      border: none;
      color: #ffffff !important;
      padding-bottom: 10px;
      padding-top: 10px;
    }

    .navbar-toggler:hover {
      background-color: #000000;
      color: #ffffff !important;
    }

    /* SHARE BUTTONS */
    .addthis_default_style {
      max-width: 182px;
    }

    .addthis_default_style span {
      background-color: {{PRIMARY_COLOR}} !important;
      border-radius: 2px;
      -webkit-border-radius: 2px;
      -moz-border-radius: 2px;
      -ms-border-radius: 2px;
      -o-border-radius: 2px;
      transition: background-color .5s
    }

    .addthis_default_style span:hover {
      background-color: #000000 !important;
    }

    .addthis_default_style span svg {
      fill: #ffffff;
      transition: fill .5s;
    }

    .addthis_default_style span svg:hover {
      fill: #ffffff;
    }

    .addthis_default_style p {
      color: #000000;
      font-size: 12px;
      margin-bottom: 0;
    }

    /* HERO */
    #hero {
      display: block;
    }

    #hero .carousel-caption {
      bottom: auto;
      padding-bottom: 0;
      padding-top: 0;
      right: auto;
      text-align: left;
      top: 43%;
    }

    #hero .carousel-caption h1 {
      color: #ffffff;
    }

    /* MAIN CONTENT */
    #main-content {
      display: block;
    }

    /* JOB HEADER */
    #job_header {
      background-color: {{PRIMARY_COLOR}};
      border-bottom: 1px solid {{PRIMARY_COLOR}};
      padding-bottom: 15px;
      padding-top: 15px;
    }

    #job_header h1.job-title {
      color: #ffffff;
      font-size: 30px;
      font-weight: 700;
      margin: 0;
      padding: 15px 0;
      text-align: center;
    }

    #job_header h1.job-title::after {
      background-color: #eeeeee;
      clear: both;
      content: '';
      display: none;
      height: 4px;
      margin: auto;
      margin-bottom: 25px;
      margin-top: 10px;
      width: 150px;
    }

    #job_header h2 {
      color: #ffffff;
      font-size: 16px;
      font-weight: 400;
      text-align: center;
    }

    #job_header h2>div {
      display: inline-block;
      margin-right: 15px;
      margin-bottom: 15px;
    }

    #job_employment_status {
      display: none !important;
    }

    #job_closing_date {
      display: none !important;
    }

    #job_header abbr {
      cursor: default;
      border-bottom: none;
      text-decoration: none;
    }

    /* JOB DESCRIPTION */
    #job_description,
    form.formtastic,
    #job_success {
      padding-top: 30px;
    }

    #job_description {
      padding-bottom: 30px;
    }

    /* FORM GLOBAL */
    form.formtastic {
      padding-bottom: 30px;
    }

    form.formtastic,
    #confirm {
      background-color: #ffffff;
    }

    /* HEADINGS */
    #privacy_acknowledgment>h2,
    #candidate_details>h2,
    #questions>h2,
    form.formtastic div>h1,
    form.formtastic>h2,
    #job_success>div>h2 {
      background: {{PRIMARY_COLOR}};
      border-bottom: 1px solid {{PRIMARY_COLOR}};
      color: #ffffff;
      font-size: 18px;
      padding: 10px;
    }

    #job_success #jobs h3.title,
    #job_success #jobs h4.reference {
      font-size: 18px;
    }

    span.required {
      color: #ffffff;
    }

    #resume span.required {
      color: #ff0000;
    }

    /* FORM CANDIDATE DETAILS */
    /* Two Column Candidate Details  */
    #candidate_details>fieldset.inputs>ol>li {
      float: left;
      padding: 5px;
      width: 50%;
    }

    #candidate_details>fieldset.inputs>ol>li:nth-child(odd) {
      clear: both;
    }

    @media screen and (max-width: 500px) {
      #candidate_details>fieldset.inputs>ol>li {
        float: inherit;
        width: 100%;
      }
    }

    /* #candidate_details fieldset.inputs, */
    #confirm form.formtastic>h2 {
      border-bottom: 1px solid #dadada;
    }

    #confirm form.formtastic>h2 {
      padding-bottom: 10px;
    }

    #resume {
      padding-top: 10px;
    }

    #questions fieldset.inputs:last-of-type {
      border-bottom: 1px solid #dadada;
    }

    /* FORM QUESTIONS */
    #candidate_details li,
    #questions li,
    #resume>h2 {
      color: #000000;
      font-size: 16px;
      font-weight: 400;
      text-transform: none;
    }

    /* REVIEW PAGE LABELS */
    #confirm label {
      font-weight: 700;
    }

    #questions>fieldset fieldset.choices,
    #resume>fieldset fieldset.choices,
    #questions>fieldset.inputs>ol>li,
    #resume>fieldset.inputs {
      margin-bottom: 15px;
    }

    #questions>fieldset.inputs:first-of-type {
      padding-top: 15px;
    }

    #privacy_acknowledgment {
      padding-bottom: 15px;
      padding-top: 15px;
    }

    #candidate_details {
      padding-bottom: 15px;
    }

    #questions {
      padding-bottom: 15px;
      padding-top: 15px;
    }

    /* FORM FIELDS */
    form.formtastic input[type="text"],
    form.formtastic input[type="email"],
    form.formtastic input[type="tel"],
    form.formtastic select,
    form.formtastic textarea {
      background-color: #ffffff;
      border: 1px solid #cccccc;
      border-radius: 3px;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      -ms-border-radius: 3px;
      -o-border-radius: 3px;
    }

    form.formtastic input[type="text"]:hover,
    form.formtastic input[type="email"]:hover,
    form.formtastic input[type="tel"]:hover,
    form.formtastic select:hover,
    form.formtastic textarea:hover {
      background-color: #ffffff;
    }

    form.formtastic select {
      color: inherit;
      padding: auto;
    }

    .rank_field ol>li>label>select {
      font-weight: 400;
    }

    /* ACTION BUTTONS */
    #apply-button,
    .actions.buttons input,
    .actions.buttons button {
      background: {{PRIMARY_COLOR}};
      border: 0;
      border-radius: 3px;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      -ms-border-radius: 3px;
      -o-border-radius: 3px;
      color: #ffffff;
      font-size: 16px;
      font-weight: 400;
      padding: 6px 14px;
      text-decoration: none;
      text-transform: uppercase;
    }

    .actions.buttons a {
      margin-left: 10px;
    }

    #apply-button:hover,
    .actions.buttons input:hover,
    .actions.buttons button:hover {
      background: {{SECONDARY_COLOR}};
      color: #ffffff;
    }

    /* HIDE JOB FOOTER/LOGGER */
    #job_footer {
      display: none;
    }

    #logger {
      font-size: 12px;
      text-align: center;
    }

    /* FOOTER */
    footer {
      background: {{PRIMARY_COLOR}};
      color: #ffffff;
      font-size: 16px;
      padding-bottom: 15px;
      padding-top: 15px;
    }

    footer a:active,
    footer a:link,
    footer a:visited {
      color: #ffffff;
      text-decoration: underline;
    }

    footer a:hover {
      color: #ffffff;
      text-decoration: none;
    }

    .social-links a:active,
    .social-links a:link,
    .social-links a:visited {
      color: #ffffff;
      font-size: 13px;
      text-decoration: none;
      margin-right: 5px;
    }

    .social-links a:hover {
      color: #ffffff;
      text-decoration: none;
    }

    .social-links a:active .fab,
    .social-links a:link .fab,
    .social-links a:visited .fab,
    .social-links a:active .fas,
    .social-links a:link .fas,
    .social-links a:visited .fas {
      color: #ffffff;
      font-size: 30px;
      transition: color 0.5s;
    }

    .social-links a:hover .fab {
      color: #ffffff;
    }
  </style>

  <!-- ADDITIONAL SECTIONS -->
  <style type="text/css">
    .section {
      padding-bottom: 40px;
      padding-top: 40px;
    }

    .section-main {
      background-color: #ffffff;
    }

    .section-alt {
      background-color: #efefef;
    }

    .section h1 {
      font-size: 22px;
    }
  </style>

  <!-- SINGLE STEP APPLICATION STYLE -->
  <style type="text/css">
    #tabs-section {
      padding-bottom: 15px;
      padding-top: 15px;
    }

    #tab-content #job_description,
    #tab-content form.formtastic,
    #tab-content #job_success {
      padding-top: 0;
    }

    #pills-tab {
      border-bottom: 1px solid #cccccc;
    }

    .nav.nav-pills .nav-item .nav-link {
      text-decoration: none;
    }

    .nav.nav-pills .nav-item .nav-link[aria-selected="true"] {
      background: {{PRIMARY_COLOR}};
    }

    #overview-tab-content,
    #form-tab-content {
      padding-bottom: 15px;
      padding-top: 15px;
    }

    /* Remove ol numbering */
    #candidate_details ol,
    #questions ol.choices-group,
    #questions li.rank_field ol,
    .actions.buttons ol,
    #resume ol,
    #confirm ol {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  </style>

  <style type="text/css">
    @media screen and (max-width: 575px) {
      .navbar-brand img {
        max-width: 150px;
      }

      #job_header h1.job-title {
        font-size: 20px;
      }
    }
  </style>`,
};

export const body = {
  compatibility_notice: `  <!--[if lte IE 9]>
    <div class="container">
      <div class="alert alert-danger alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <span class="glyphicon glyphicon-exclamation-sign"></span> You are using an <strong>outdated</strong>
        browser. Please <a href="http://browsehappy.com/" target="_blank" rel="noreferrer noopener">update your browser</a> to improve your experience
        and security.
      </div>
    </div>
  <![endif]-->
  `,
  header: `<header>
  <nav class="container navbar navbar-expand-sm navbar-light">
    <a class="navbar-brand" href="{{WEBSITE_URL}}" target="_blank" rel="noopener noreferrer">
      <img src="{{LOGO_URL}}" alt="{{COMPANY_NAME}}"></a>

    <div class="ml-auto">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#shareButtons"
        aria-controls="shareButtons" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-share-alt"></i>
      </button>
    </div>

    <div class="collapse navbar-collapse" id="shareButtons">
      <div class="ml-auto addthis_toolbox addthis_default_style">
        <p class="d-block text-right text-sm-left">Share this job:</p>
        <a href="#" class="addthis_button_twitter addthis_32x32_style"></a>
        <a href="#" class="addthis_button_linkedin addthis_32x32_style"></a>
        <a href="#" class="addthis_button_facebook addthis_32x32_style"></a>
        <a href="#" class="addthis_button_email addthis_32x32_style"></a>
        <a href="#" class="addthis_button_google addthis_32x32_style"></a>
      </div>
    </div>
  </nav>
</header>
`,
  content: `  <div id="main-content">
  {CONTENT}
  <div class="tab-content" id="tab-content">
  <div class="tab-pane fade show active" id="overview-tab-content" role="tabpanel" aria-labelledby="overview-tab">
  </div>
  <div class="tab-pane fade" id="form-tab-content" role="tabpanel" aria-labelledby="form-tab"></div>
</div>

</div>
`,
  additional_sections: `  <!-- ADDITIONAL SECTIONS -->
  <div id="tabs-section">
    <div class="container">
      <div class="row no-gutters">
        <div class="col">
          <ul class="nav nav-pills pb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <a class="nav-link active no-scroll" id="overview-tab" data-toggle="pill" href="#overview-tab-content"
                role="tab" aria-controls="overview-tab-content" aria-selected="true">Role Overview</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link no-scroll" id="form-tab" data-toggle="pill" href="#form-tab-content" role="tab"
                aria-controls="form-tab-content" aria-selected="false">Application Form</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div id="overview-apply-button-section" class="mb-4">
    <div class="container">
      <div class="row no-gutters">
        <div class="col">
          <div class="d-flex justify-content-end">
            <a href="#form-tab">
              <button type="button" id="apply-button" data-target="form-tab">Apply Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  boilerplate_js: `  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"></script> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
  integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
  crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
  integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
  crossorigin="anonymous"></script>

<!-- AddThis JS -->
<script src="https://s7.addthis.com/js/250/addthis_widget.js#pubid=ra-4e6866be0d0f31be"
  type="text/javascript"></script>

<!-- Reset JS -->
<script
  src="https://s3-ap-southeast-2.amazonaws.com/cdn.scouttalenthq.com/job-templates/boilerplate-v2/reset-template-2.0.0.js"
  type="text/javascript"></script>
  `,
  optional_js: `<!-- Optional JavaScript -->
  `,

  onload_js: `<script type="text/javascript">
  $(function () {
    // Move notice and error messages below job_header
    $('#job_header').after($('#error'), $('#notice'), $('#success'));

    // Activate on Attachment, Review, and Success Page
    if (url_application_process !== null) {
      // Hide contents on Attachments, Review, and Success Page
    }

    // SMOOTH SCROLL
    $("a:not(.no-scroll)").on('click', function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {
          window.location.hash = hash;
        });
      } // End if
    });

    // INSERT SECTIONS
    $('#job_description').html() !== undefined ? $('#about-section').insertAfter($('#job_description')) : $('#about-section').hide();

    // CHECK IF SINGLE-STEP APPLICATION
    if ($('.single-step').html() !== undefined) {

      // INSERT TABS SECTIONS
      $('#job_header').html() !== undefined ? $('#tabs-section').insertAfter($('#job_header')) : $('#tabs-section').hide();

      // INSERT OVERVIEW APPLY BUTTON SECTION
      $('#overview-tab-content').html() !== undefined ? $('#overview-apply-button-section').appendTo($('#overview-tab-content')) : $('#overview-apply-button-section').hide();

      // MOVE ABOUT SECTION TO OVERVIEW TAB
      $('#about-section').appendTo($('#overview-tab-content'));

      // MOVE JOB DESCRIPTION TO OVERVIEW TAB
      $('#job_description').prependTo($('#overview-tab-content'));

      // MOVE FORM TO FORM TAB
      $('#apply-with-seek').appendTo($('#form-tab-content'));
      $('#apply-with-indeed').appendTo($('#form-tab-content'));
      $('#new_application').appendTo($('#form-tab-content'));

      // MOVE NOTICE AND ERROR MESSAGES BELOW JOB_HEADER
      $('#job_header').after($('#error'), $('#notice'), $('#success'));

      // TAB CODE
      $('#apply-button').click(function () {
        const tab = $(this).data('target');
        $('#' + tab).tab('show');
      });

      // Activate on Attachment, Review, and Success Page
      if (url_application_process !== null) {

        // SHOW FORM TAB IF ERROR
        $('#form-tab').tab('show');

        // HIDE TABS ON REVIEW PAGE BECAUSE JOB DESCRIPTION DOES NOT EXIST
        $('#confirm').html() !== undefined ? $('#tabs-section').hide() : null;

        // MOVE FORM TO CONFIRM
        $('#new_application').appendTo($('#confirm>div'));

        // HIDE TABS SECTION ON SUCCESS PAGE
        $('#success').html() !== undefined ? $('#tabs-section').hide() : null;

      }
    } else {

      // HIDE TABS SECTION ON SEND FORM
      $('#tabs-section').hide();

      // HIDE OVERVIEW APPLY BUTTON SECTION ON SEND FORM
      $('#overview-apply-button-section').hide()

    }
  });
</script>
`,
}

export const baseCode = { ...head, ...body };

export default baseCode;