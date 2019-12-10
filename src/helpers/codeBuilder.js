export const bannerCode = data => {
  let banners = '';

  data.forEach((url, i) => {
    let heroClass = ['carousel-item'];
    let counter = i + 1;
    if (counter === 1) {
      heroClass.push('active');
    }

    const hero = `<div class="` + heroClass.join(' ') + `">
      <img src="{{BANNER_URL_` + counter + `}}" class="d-block w-100" alt="{{COMPANY_NAME}}" />
    </div>`;

    if (url.trim() !== '') {
      banners = banners + hero;
    }
  });

  return (
    `<div id="hero" class="carousel slide extra-content-section" data-ride="carousel" data-pause="false">
      <div class="carousel-inner">
        ` + banners + `
      </div>
    </div>`
  )
}

export const googleFontCode = data => {
  const googleFonts = data.map(string => {
    let font = null;
    if (string !== '') {
      font = string.split(' ').join('+');
    }
    font += ':400,700'
    return font;
  });

  return (
    `<link href="https://fonts.googleapis.com/css?family=` + googleFonts.join('|') + `&display=swap" rel="stylesheet" />`
  )
}

export const footerCode = data => {
  let string = '';

  data.forEach((type) => {
    switch (type) {
      case 'facebook': string = string + '<a href="{{FB_URL}}" target="_blank" rel="noreferrer noopener"><i class="fab fa-facebook-square"></i></a>'; break;
      case 'twitter': string = string + '<a href="{{TW_URL}}" target="_blank" rel="noreferrer noopener"><i class="fab fa-twitter-square"></i></a>'; break;
      case 'instagram': string = string + '<a href="{{IG_URL}}" target="_blank" rel="noreferrer noopener"><i class="fab fa-instagram"></i></a>'; break;
      case 'linkedin': string = string + '<a href="{{LI_URL}}" target="_blank" rel="noreferrer noopener"><i class="fab fa-linkedin"></i></a>'; break;
      default: { }
    }
  });

  return (
    `<footer>
    <div class="container">
      <div class="row">
        <div class="col-sm text-center text-sm-left mt-2">
          Copyright &copy; 2019 {{COMPANY_NAME}}
          <a href="https://www.applynow.com.au/privacy" target="_blank" rel="noreferrer noopener">Privacy
            Policy</a> | <a href="https://www.applynow.com.au/terms" target="_blank" rel="noreferrer noopener">Terms and
            Conditions</a>
        </div>
        <div class="col-sm text-center text-sm-right">
          <div class="social-links">`
    + string +
    `</div>
        </div>
      </div>
    </div>
  </footer>`
  )
}

export const aboutCode = data => {
  const image = `<img src="{{IMAGE_SOURCE_URL}}" alt="{{COMPANY_NAME}}" class="img-fluid rounded" />`;
  const video =
    `<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="{{VIDEO_SOURCE_URL}}" frameborder="0"
  allow="autoplay; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen></iframe>
  </div>`;

  let aboutGraphic = '';
  if (data[1] !== '') {
    aboutGraphic += image;
  }
  if (data[0] !== '') {
    aboutGraphic += video;
  }

  return (
    `<div class="container-fluid section section-alt extra-content-section" id="about-section">
    <div class="container">
      <div class="row">
        <div class="col-md text-center text-sm-left">
          <h1>{{ABOUT_HEADING_TEXT}}</h1>
          {{ABOUT_BODY_TEXT}}
        </div>
        <div class="col-md text-center text-sm-left">`
    + aboutGraphic +
    `</div>
      </div>
    </div>
  </div>`
  )
}
