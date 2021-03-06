import { size } from 'polished';
import { createGlobalStyle } from 'styled-components';
import { FontFamily, RemSize } from './config/variables';

const BASE_FONT_SIZE = 16;

const GlobalStyle = createGlobalStyle`
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    font-size: ${(100 / BASE_FONT_SIZE) * RemSize.Default}%;
  }

  body {
    ${size('100vh', '100%')};
    text-rendering: optimizeSpeed;
    font-family: ${FontFamily.Lato};
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
    margin: 0;
    padding: 0;
  }

  #root {
    ${size('100%')};
  }

  /* https://piccalil.li/blog/a-modern-css-reset/ */

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  h1,
  h2,
  h3,
  h4,
	h5,
	h6,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

	fieldset {
		padding: 0;
		margin: 0;
		border: 0;
	}

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  button,
  a {
    background-color: transparent;
    text-align: left;
    padding: 0;
    border: 0;
    text-decoration: none;
    cursor: pointer;
  }

  [hidden] {
    display: none;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
     scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

`;

export default GlobalStyle;
