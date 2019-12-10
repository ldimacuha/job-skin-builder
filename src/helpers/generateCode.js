
import { bannerCode, googleFontCode, footerCode, aboutCode } from './codeBuilder';
import { htmlwrapper, baseCode } from './baseCode';

const generateCode = (templateCode, data) => {
  const socialIconsInputs = [data.FB_URL.value, data.TW_URL.value, data.IG_URL.value, data.LI_URL.value];
  let socialIcons = [];
  if (socialIconsInputs.length > 0) {
    socialIconsInputs.forEach((url, i) => {
      if (socialIconsInputs[i] !== '') {
        switch (i) {
          case 0: socialIcons.push('facebook'); break;
          case 1: socialIcons.push('twitter'); break;
          case 2: socialIcons.push('instagram'); break;
          case 3: socialIcons.push('linkedin'); break;
          default: { }
        }
      }
    });
  }

  const bannerDataInputs = [data.BANNER_URL_1.value, data.BANNER_URL_2.value, data.BANNER_URL_3.value, data.BANNER_URL_4.value];
  let aboutGraphic = '';
  if (data.VIDEO_SOURCE_URL.value !== '') {
    aboutGraphic = 'video';
  } else {
    if (data.IMAGE_SOURCE_URL.value !== '') {
      aboutGraphic = 'image';
    }
  }

  const fontInputs = [data.HEADINGS_GOOGLE_FONT.value, data.BODY_GOOGLE_FONT.value];
  const aboutSectionInputs = [data.ABOUT_HEADING_TEXT.value, data.ABOUT_BODY_TEXT.value, data.VIDEO_SOURCE_URL.value, data.IMAGE_SOURCE_URL.value];

  let code = htmlwrapper;
  code += '<head>';
  code += baseCode.meta;
  code += baseCode.favicon;
  code += baseCode.boilerplate;
  code += baseCode.fonts;
  code += googleFontCode(fontInputs);
  code += baseCode.css;
  code += '</head>';
  code += '<body>';

  code += baseCode.compatibility_notice;
  code += baseCode.header;
  if (bannerDataInputs.length > 0) {
    code += bannerCode(bannerDataInputs);
  }

  code += baseCode.content;

  code += baseCode.additional_sections;
  if (aboutSectionInputs.join('') !== '') {
    code += aboutCode(aboutGraphic);
  }

  if (socialIconsInputs.length > 0) {
    code += footerCode(socialIcons);
  }

  code += baseCode.boilerplate_js;
  code += baseCode.optional_js;
  code += baseCode.onload_js;

  code += '</body>';
  code += '</html>';

  if (data.HEADINGS_GOOGLE_FONT.value.trim() !== '') {
    data.HEADINGS_FONT.value = "'" + data.HEADINGS_GOOGLE_FONT.value + "', arial, helvetica, sans-serif";
  }

  if (data.BODY_GOOGLE_FONT.value.trim() !== '') {
    data.BODY_FONT.value = "'" + data.BODY_GOOGLE_FONT.value + "', arial, helvetica, sans-serif";
  }

  for (let key in data) {
    const placeholder = '{{' + key + '}}';
    const value = data[key].value !== '' ? data[key].value : ' ';
    code = code.split(placeholder).join(value);
  }

  return code;
}

export default generateCode;