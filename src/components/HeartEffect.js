import React, { useEffect } from 'react';
import './HeartEffect.css'; // Make sure the CSS is correctly linked

const HeartEffect = () => {
  useEffect(() => {
    // Create a container for the hearts
    const brd = document.createElement("DIV");
    brd.style.position = 'fixed';
    brd.style.top = '0';
    brd.style.left = '0';
    brd.style.width = '100vw';
    brd.style.height = '100vh';
    brd.style.pointerEvents = 'none'; // Allow mouse events to pass through
    document.body.appendChild(brd);

    const hearts = [];
    let down = false;
    let event = null;

    const generateHeart = (x, y, xBound, xStart, scale) => {
      var heart = document.createElement("DIV");
      heart.setAttribute('class', 'heart');
      brd.appendChild(heart);
      heart.style.left = `${x}px`;
      heart.style.top = `${y}px`;
      heart.style.transform = `scale(${scale})`;
      heart.time = 3000; // duration of animation
      heart.x = x;
      heart.y = y;
      heart.bound = xBound;
      heart.direction = xStart;
      hearts.push(heart);
      return heart;
    };

    // Event handlers
    const onMouseDown = (e) => {
      down = true;
      event = e;
    };

    const onMouseUp = () => {
      down = false;
    };

    const onMouseMove = (e) => {
      event = e;
    };

    const onTouchStart = (e) => {
      down = true;
      event = e.touches[0];
    };

    const onTouchEnd = () => {
      down = false;
    };

    const onTouchMove = (e) => {
      event = e.touches[0];
    };

    // Adding event listeners
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchstart', onTouchStart);
    document.addEventListener('touchend', onTouchEnd);
    document.addEventListener('touchmove', onTouchMove);

    const frame = () => {
      hearts.forEach((heart, i) => {
        if (heart.time > 0) {
          heart.time -= 16; // decrease time left
          heart.y -= 0.5; // speed of heart moving up
          heart.style.top = `${heart.y}px`;
          heart.style.left = `${heart.x + heart.direction * heart.bound * Math.sin(heart.y * heart.scale / 30) / heart.y * 100}px`;
        } else {
          heart.parentNode.removeChild(heart);
          hearts.splice(i, 1);
        }
      });
    };

    const id = setInterval(frame, 16);

    // Cleanup function
    return () => {
      clearInterval(id);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('touchend', onTouchEnd);
      document.removeEventListener('touchmove', onTouchMove);
      document.body.removeChild(brd); // Remove the hearts container
    };
  }, []);

  return null; // No need to return JSX, since we are manipulating the DOM directly
};

export default HeartEffect;
