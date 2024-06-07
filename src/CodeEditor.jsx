import React, { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';

const CodeEditor = () => {
  const [code, setCode] = useState(
    `function helloWorld() {
      console.log('Hello, world!');
    }
    helloWorld();`
  );

  return (
    <div className="p-4">
      <textarea
        className="w-full h-64 p-2 font-mono text-base bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <Highlight
        theme={themes.nightOwl}
        code={code}
        language="javascript"
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre className="mt-4 p-2 bg-gray-900 text-white rounded-lg overflow-x-auto" style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeEditor;
