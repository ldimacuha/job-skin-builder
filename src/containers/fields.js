export const generalFields = {
  heading_general: {
    fieldLabel: 'General',
    elementType: 'heading',
    elementGrid: 'col-12',
    valid: true
  },
  COMPANY_NAME: {
    fieldLabel: 'Company Name',
    elementType: 'input',
    elementGrid: 'col-sm-6',
    elementConfig: {
      type: 'text',
      placeholder: '',
    },
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
    error: 'This field is required',
  },
  WEBSITE_URL: {
    fieldLabel: 'Website URL',
    elementType: 'input',
    elementGrid: 'col-sm-6',
    elementConfig: {
      type: 'text',
      placeholder: '',
    },
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
    error: 'This field is required',
  },
  LOGO_URL: {
    fieldLabel: 'Logo URL',
    fieldHelper: ['Format: JPG, PNG, or SVG'],
    elementType: 'input',
    elementGrid: 'col-sm-6',
    elementConfig: {
      type: 'text',
      placeholder: '',
    },
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
    error: 'This field is required',
  },
  LOGO_MAX_WIDTH: {
    fieldLabel: 'Logo Max Width',
    elementType: 'inputgroup',
    elementGrid: 'col-sm-6',
    elementInputGroupText: 'px',
    elementConfig: {
      type: 'text',
      placeholder: '',
    },
    value: '',
    validation: {
      required: true,
      isNumeric: true,
    },
    valid: false,
    touched: false,
    error: 'This field is required | Must be a number',
  },
  heading_colours: {
    fieldLabel: 'Colours',
    elementType: 'heading',
    elementGrid: 'col-12',
    valid: true
  },
  PRIMARY_COLOR: {
    fieldLabel: 'Primary Colour',
    fieldHelper: ['Format: HEX "#FF0000" or RGB "rgb(255,0,0)"'],
    elementType: 'input',
    elementGrid: 'col-sm-6',
    elementConfig: {
      type: 'text',
      placeholder: '',
    },
    value: '',
    validation: {
      required: true,
    },
    valid: false,
    touched: false,
    error: 'This field is required',
  },
  SECONDARY_COLOR: {
    fieldLabel: 'Secondary Colour',
    fieldHelper: ['Format: HEX "#FF0000" or RGB "rgb(255,0,0)"'],
    elementType: 'input',
    elementGrid: 'col-sm-6',
    elementConfig: {
      type: 'text',
      placeholder: '',
    },
    value: '',
    valid: true,
    touched: false,
    error: '',
  },

  heading_fonts: {
    fieldLabel: 'Fonts',
    elementType: 'heading',
    elementGrid: 'col-12',
    valid: true
  },
  HEADINGS_FONT: {
    fieldLabel: 'Heading Font - Web-safe Font',
    fieldHelper: ['Web-safe font'],
    elementType: 'select',
    elementGrid: 'col-sm-6',
    elementConfig: {
      options: [
        { value: 'arial', displayValue: 'Arial' },
        { value: 'calibri, helvetica, arial', displayValue: 'Calibri' },
        { value: 'comic sans', displayValue: 'Comic Sans' },
        { value: 'courier new', displayValue: 'Courier New' },
        { value: 'georgia', displayValue: 'Georgia' },
        { value: 'helvetica, arial', displayValue: 'Helvetica' },
        { value: 'impact', displayValue: 'Impact' },
        { value: 'palatino', displayValue: 'Palatino' },
        { value: 'tahoma', displayValue: 'Tahoma' },
        { value: 'times new roman', displayValue: 'Times New Roman' },
        { value: 'trebuchet ms', displayValue: 'Trebuchet MS' },
        { value: 'verdana', displayValue: 'Verdana' },
      ]
    },
    value: 'arial',
    valid: true,
    touched: false,
    error: '',
  },

  HEADINGS_GOOGLE_FONT: {
    fieldLabel: 'Heading Font - Google Font',
    fieldHelper: ['Enter one font from https://fonts.google.com/'],
    elementType: 'input',
    elementGrid: 'col-sm-6',
    elementConfig: {
      type: 'text',
      placeholder: ''
    },
    value: '',
    valid: true,
    touched: false,
    error: '',
  },

  BODY_FONT: {
    fieldLabel: 'Body Font - Web-safe Font',
    fieldHelper: ['Web-safe font'],
    elementType: 'select',
    elementGrid: 'col-sm-6',
    elementConfig: {
      options: [
        { value: 'arial', displayValue: 'Arial' },
        { value: 'calibri, helvetica, arial', displayValue: 'Calibri' },
        { value: 'comic sans', displayValue: 'Comic Sans' },
        { value: 'courier new', displayValue: 'Courier New' },
        { value: 'georgia', displayValue: 'Georgia' },
        { value: 'helvetica, arial', displayValue: 'Helvetica' },
        { value: 'impact', displayValue: 'Impact' },
        { value: 'palatino', displayValue: 'Palatino' },
        { value: 'tahoma', displayValue: 'Tahoma' },
        { value: 'times new roman', displayValue: 'Times New Roman' },
        { value: 'trebuchet ms', displayValue: 'Trebuchet MS' },
        { value: 'verdana', displayValue: 'Verdana' },
      ]
    },
    value: 'arial',
    valid: true,
    touched: false,
    error: '',
  },

  BODY_GOOGLE_FONT: {
    fieldLabel: 'Body Font - Google Font',
    fieldHelper: ['Enter one font from https://fonts.google.com/'],
    elementType: 'input',
    elementGrid: 'col-sm-6',
    elementConfig: {
      type: 'text',
      placeholder: ''
    },
    value: '',
    valid: true,
    touched: false,
    error: '',
  },
}

export const jobSkinFields = {
  heading_banners: {
    fieldLabel: 'Banners / Hero Images',
    elementType: 'heading',
    elementGrid: 'col-12',
    valid: true
  },
  BANNER_URL_1: {
    fieldLabel: 'Banner Image URL 1',
    fieldHelper: ['Dimensions: 1500px Width by 430px Height @72dpi', 'Format: JPG'],
    elementType: 'input',
    elementGrid: 'col-sm-6',
    elementConfig: {
      type: 'text',
      placeholder: '',
    },
    value: '',
    valid: true,
    touched: false,
    error: '',
  },
  BANNER_URL_2: {
    fieldLabel: 'Banner Image URL 2',
    fieldHelper: ['Dimensions: 1500px Width by 430px Height @72dpi', 'Format: JPG'],
    elementType: 'input',
    elementGrid: 'col-sm-6',
    elementConfig: {
      type: 'text',
      placeholder: '',
    },
    value: '',
    valid: true,
    touched: false,
    error: '',
  },
  BANNER_URL_3: {
    fieldLabel: 'Banner Image URL 3',
    fieldHelper: ['Dimensions: 1500px Width by 430px Height @72dpi', 'Format: JPG'],
    elementType: 'input',
    elementGrid: 'col-sm-6',
    elementConfig: {
      type: 'text',
      placeholder: '',
    },
    value: '',
    valid: true,
    touched: false,
    error: '',
  },
  BANNER_URL_4: {
    fieldLabel: 'Banner Image URL 4',
    fieldHelper: ['Dimensions: 1500px Width by 430px Height @72dpi', 'Format: JPG'],
    elementType: 'input',
    elementGrid: 'col-sm-6',
    elementConfig: {
      type: 'text',
      placeholder: '',
    },
    value: '',
    valid: true,
    touched: false,
    error: '',
  },
  heading_about_us: {
    fieldLabel: 'About Us',
    elementType: 'heading',
    elementGrid: 'col-12',
    valid: true
  },

  ABOUT_HEADING_TEXT: {
    fieldLabel: 'About Us - Heading Text',
    elementType: 'input',
    elementGrid: 'col-sm-6',
    elementConfig: {
      type: 'text',
      placeholder: '',
    },
    value: '',
    valid: true,
    touched: false,
    error: '',
  },

  ABOUT_BODY_TEXT: {
    fieldLabel: 'About Us - Body Text',
    fieldHelper: ['Wrap with <p> ... </p> if more than one paragraph.'],
    elementType: 'textarea',
    elementGrid: 'col-sm-12',
    elementConfig: {
      type: 'textarea',
      placeholder: '',
    },
    value: '',
    valid: true,
    touched: false,
    error: '',
  },

  VIDEO_SOURCE_URL: {
    fieldLabel: 'About Us - Youtube/Vimeo Video Source',
    fieldHelper: ['Get the src="..." attribute of the iframe embed code.'],
    elementType: 'input',
    elementGrid: 'col-sm-6',
    elementConfig: {
      type: 'text',
      placeholder: '',
    },
    value: '',
    valid: true,
    touched: false,
    error: '',
  },

  IMAGE_SOURCE_URL: {
    fieldLabel: 'About Us - Image URL',
    fieldHelper: ['Alternative to video', 'Dimensions: 500px Width x 375px Height @72dpi', 'Format: JPG'],
    elementType: 'input',
      elementGrid: 'col-sm-6',
      elementConfig: {
        type: 'text',
        placeholder: '',
      },
      value: '',
      valid: true,
      touched: false,
      error: '',
  },

  heading_social: {
    fieldLabel: 'Social Media Links',
    elementType: 'heading',
    elementGrid: 'col-12',
    valid: true
  },
  FB_URL: {
    fieldLabel: 'Facebook Page URL',
    elementType: 'input',
    elementGrid: 'col-sm-6',
    elementConfig: {
      type: 'text',
      placeholder: '',
    },
    value: '',
    valid: true,
    touched: false,
    error: '',
  },

  TW_URL: {
    fieldLabel: 'Twitter Page URL',
    elementType: 'input',
    elementGrid: 'col-sm-6',
    elementConfig: {
      type: 'text',
      placeholder: '',
    },
    value: '',
    valid: true,
    touched: false,
    error: '',
  },

  IG_URL: {
    fieldLabel: 'Instagram Page URL',
    elementType: 'input',
    elementGrid: 'col-sm-6',
    elementConfig: {
      type: 'text',
      placeholder: '',
    },
    value: '',
    valid: true,
    touched: false,
    error: '',
  },

  LI_URL: {
    fieldLabel: 'LinkedIn Page URL',
    elementType: 'input',
    elementGrid: 'col-sm-6',
    elementConfig: {
      type: 'text',
      placeholder: '',
    },
    value: '',
    valid: true,
    touched: false,
    error: '',
  },
}

export default generalFields;