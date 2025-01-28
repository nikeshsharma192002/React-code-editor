import { useEffect, useRef } from "react";

const Preview = ({ code }) => {
  const iframeRef = useRef();

  useEffect(() => {
    const htmlContent = `
      <html>
        <head>
          <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
          <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
        </head>
        <body>
          <div id="root"></div>
          <script>
            try {
              ${code}
            } catch (err) {
              document.body.innerHTML = '<pre style="color: red;">' + err + '</pre>';
            }
          </script>
        </body>
      </html>
    `;
    iframeRef.current.srcdoc = htmlContent;
  }, [code]);

  return <iframe ref={iframeRef} title="Live Preview" sandbox="allow-scripts" className="preview" />;
};

export default Preview;
