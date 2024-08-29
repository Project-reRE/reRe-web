'use client';

import { ThemeOptions, createTheme } from '@mui/material';
import { merge } from 'lodash';

import { ColorMap } from '@repo/tailwind-config/theme';

const baseOptions: ThemeOptions = {
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: ColorMap.Gray30,
          fontSize: 16,
          fontWeight: 500,

          '&.Mui-selected': {
            color: '#fff', // selected일 때 색상 변경
            fontWeight: 600, // selected일 때 글꼴 굵기 변경
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          height: '100%',
          width: '100%',
        },
        body: {
          height: '100%',
        },
        '#root': {
          height: '100%',
        },
        '#progress .bar': {
          zIndex: '2000 !important',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          overflow: 'hidden',
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          marginRight: '16px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Pretendard',
    button: {
      fontWeight: 600,
    },
    h1: {
      fontWeight: 600,
      fontSize: '3.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '3rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.25rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.125rem',
    },
    overline: {
      fontWeight: 600,
    },
  },
};

/* 
  테마 스타일은 여기서 수정 가능
   */
const themesOptions: Record<string, ThemeOptions> = {
  dark: {
    components: {
      MuiInputBase: {
        styleOverrides: {
          input: {
            '&::placeholder': {
              opacity: 0.86,
              color: '#42526e',
            },
          },
        },
      },
    },
    palette: {
      action: {
        active: ColorMap.Orange60,
      },
      background: {
        default: '#F9FAFC',
        paper: '#ffffff',
      },
      error: {
        contrastText: '#ffffff',
        main: '#f44336',
      },
      mode: 'dark',
      primary: {
        contrastText: '#ffffff',
        main: ColorMap.Orange60,
      },
      success: {
        contrastText: '#ffffff',
        main: '#4caf50',
      },
      text: {
        primary: '#fff',
      },
      warning: {
        contrastText: '#ffffff',
        main: '#ff9800',
      },
    },
  },
};

const theme = createTheme(merge({}, baseOptions, themesOptions['dark' as string]));

export default theme;
