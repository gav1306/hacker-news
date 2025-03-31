import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 text-center">
      <h3 className="text-lg font-semibold">Hacker News</h3>
      <p className="text-sm text-gray-400">Made by gav with ❤️</p>
      <ul className="flex justify-center gap-4 mt-4 text-gray-400">
        <li>
          <a
            href="https://gayatripatil.vercel.app/"
            target="_blank"
            className="hover:text-white"
          >
            💻 Website
          </a>
        </li>
        <li>
          <a
            href="https://x.com/dev_gav05"
            target="_blank"
            className="hover:text-white"
          >
            🐦 Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/gayatri-patil-7b2a671b9/"
            target="_blank"
            className="hover:text-white"
          >
            🔗 LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/gav1306?tab=repositories"
            target="_blank"
            className="hover:text-white"
          >
            🧑‍💻 GitHub
          </a>
        </li>
      </ul>
      <p className="text-xs text-gray-500 mt-4">
        © 2025 Hacker News Mumbai. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
