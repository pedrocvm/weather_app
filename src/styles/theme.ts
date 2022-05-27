export default {
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    extrabold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.2rem',
      huge: '4.8rem'
    }
  },
  colors: {
    darkGray: '#455A64',
    midGray: '#607D8B',
    lightGray: '#DBE1E4',
    gray: '#576972',
    orange: '#EC6E4C',
    red: '#FB6C71',
    white: '#FFF'
  },
  spacings: {
    tiny: '0.4rem',
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '1.8rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.15s ease-in-out'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  flex(
    direction: 'row' | 'row-reverse' | 'column' | 'column-reverse',
    align:
      | 'center'
      | 'flex-start'
      | 'flex-end'
      | 'stretch'
      | 'baseline'
      | 'unset',
    justify:
      | 'center'
      | 'flex-start'
      | 'flex-end'
      | 'space-around'
      | 'space-evenly'
      | 'space-between'
      | 'unset',
    gap?: string
  ) {
    return {
      display: 'flex',
      'flex-direction': direction || 'row',
      'align-items': align || 'flex-start',
      'justify-content': justify || 'flex-start',
      gap: gap || '0'
    };
  }
} as const;
