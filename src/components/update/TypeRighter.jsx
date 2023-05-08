import React, { useState, useEffect } from 'react';

const Typewriter = () => {
  const [text, setText] = useState("Hey, I am Aakash, A full Stack Web Developer");

  useEffect(() => {
    const interval = setInterval(() => {
      setText("Hey, I Am Aakash , A full Stack Web Developer");
    }, 100000);
    return () => clearInterval(interval);
  }, []);

  const [typing, setTyping] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setTyping(prevTyping => prevTyping.slice(0, prevTyping.lastIndexOf(" ")));
        setTypingSpeed(40);
      } else {
        setTyping(prevTyping => text.slice(0, prevTyping.length + 1));
        setTypingSpeed(80);
      }
    }, typingSpeed);

    if (isDeleting && typing === "") {
      setIsDeleting(false);
      setTypingSpeed(80);
      setText("Hey, I Am Aakash, A full Stack Web Developer");
    } else if (!isDeleting && typing === text) {
      setIsDeleting(true);
      setTypingSpeed(1500);
    } else if (isDeleting && typing === "Hey, I am Aakash,") {
      setIsDeleting(false);
      setTypingSpeed(80);
    }

    return () => clearTimeout(timeout);
  }, [typing, isDeleting, typingSpeed, text]);

  return (
    <div>
      <p id="user-detail-name">{typing}</p>
    </div>
  );
};

export default Typewriter;
