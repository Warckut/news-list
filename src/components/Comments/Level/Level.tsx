import { useState } from 'react';

import { LevelProps } from './types';

function RootLevel({ comments }: LevelProps) {
  const parser = new DOMParser();
  const [seta, setSeta] = useState<Set<number>>(new Set());

  const changeVisible = (id: number) => {
    setSeta((prevSeta) => {
      const newSeta = new Set(prevSeta);
      if (newSeta.has(id)) newSeta.delete(id);
      else newSeta.add(id);
      return newSeta;
    });
  };

  return (
    <ul>
      {comments.map(({ id, content, comments }) => (
        <li key={id}>
          <p>{parser.parseFromString(content, 'text/html').body.textContent}</p>
          {comments.length > 0 && <button onClick={() => changeVisible(id)}>{seta.has(id) ? 'close' : 'open'}</button>}
          {seta.has(id) && <Level comments={comments} />}
        </li>
      ))}
    </ul>
  );
}

function Level({ comments }: LevelProps) {
  const parser = new DOMParser();

  return (
    <ul style={{ marginLeft: '50px' }}>
      {comments.map(({ id, content, comments }) => (
        <li key={id}>
          <p>{parser.parseFromString(content, 'text/html').body.textContent}</p>
          {comments.length > 0 && <Level comments={comments} />}
        </li>
      ))}
    </ul>
  );
}

export default RootLevel;
