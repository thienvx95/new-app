/**
 *
 * Scroll
 *
 */

import React, { memo, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax';
import Typed from 'typed.js';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Scroll() {
  let spanEl = useRef(null);
  useEffect(() => {
    const options = {
      strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
      typeSpeed: 60,
      loop: true,
      autoInsertCss: true,
    };
    spanEl = new Typed(spanEl.current, options);
  });

  return (
    <div className="scroll">
      <span id="typed" ref={spanEl} />

      <Parallax y={[-20, 20]} className="arrow-1">
        <svg version="1.1" x="0px" y="0px" viewBox="0 0 167 299">
          <polygon className="fill-1" points="137.4,0 83.5,145.9 29.6,0 " />
        </svg>
      </Parallax>
      <Parallax className="arrow-2" y={[-10, 10]}>
        <svg version="1.1" x="0px" y="0px" viewBox="0 0 167 299">
          <polygon className="fill-3" points="167,73 83.5,298.9 0,73 " />
        </svg>
      </Parallax>
    </div>
  );
}

Scroll.propTypes = {};

export default memo(Scroll);
